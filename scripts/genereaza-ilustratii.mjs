// Transformă pozele reale în ilustrații editoriale, prin fal.ai.
// Model ieftin: fal-ai/flux/dev/image-to-image (~$0.025/MP; la ~0,5 MP ≈ 1,3 cenți/imagine).
// Intrarea se redimensionează local la max 800px ca să ținem costul jos.
// Utilizare:
//   FAL_KEY=... node scripts/genereaza-ilustratii.mjs                 # toate restanțele
//   FAL_KEY=... node scripts/genereaza-ilustratii.mjs --doar slug1,slug2 --strength 0.62
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const poze = JSON.parse(readFileSync(join(root, "scripts/poze.json"), "utf-8"));
const outDir = join(root, "public/ilustratii");
mkdirSync(outDir, { recursive: true });

const KEY = process.env.FAL_KEY;
if (!KEY) throw new Error("Lipsește FAL_KEY");

const argv = process.argv.slice(2);
const doar = argv.includes("--doar") ? argv[argv.indexOf("--doar") + 1].split(",") : null;
const strength = argv.includes("--strength") ? Number(argv[argv.indexOf("--strength") + 1]) : 0.62;

const PROMPT =
  "Transform this photograph into a flat editorial op-ed illustration in the style of New York Times opinion art: " +
  "bold simplified graphic shapes, subtle screen-print halftone texture, limited palette of deep navy blue, " +
  "warm ochre yellow and cream off-white, clean confident contour lines, plain solid cream background. " +
  "Keep the exact same face, hairstyle, glasses and expression so the person stays clearly recognizable. " +
  "Remove any flags, logos or pins from the background and clothing. No text, no caricature exaggeration.";

// Wikipedia original -> thumbnail 800px (control de cost)
function thumb(url) {
  const m = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/[^/]+)\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)$/);
  if (m) return `${m[1]}/thumb/${m[2]}/${m[3]}/${m[4]}/800px-${m[4]}`;
  return url;
}

const pauza = (ms) => new Promise((res) => setTimeout(res, ms));

async function descarca(url, dest) {
  for (let incercare = 1; incercare <= 4; incercare++) {
    const r = await fetch(url, {
      headers: { "user-agent": "guvernare.online/1.0 (https://guvernare.online; tavi@pukka.ro)" },
      redirect: "follow",
      signal: AbortSignal.timeout(30000),
    });
    if (r.status === 429) {
      await pauza(15000 * incercare); // backoff la rate-limit Wikimedia
      continue;
    }
    if (!r.ok) throw new Error(`HTTP ${r.status} la ${url}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 5000) throw new Error(`fișier suspect de mic (${buf.length}B)`);
    writeFileSync(dest, buf);
    return;
  }
  throw new Error(`HTTP 429 persistent la ${url}`);
}

async function fal(dataUri) {
  const r = await fetch("https://fal.run/fal-ai/flux-kontext/dev", {
    method: "POST",
    headers: { Authorization: `Key ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      image_url: dataUri,
      prompt: PROMPT,
      num_inference_steps: 28,
      guidance_scale: 2.5,
      num_images: 1,
      resolution_mode: "match_input",
      enable_safety_checker: false,
    }),
    signal: AbortSignal.timeout(180000),
  });
  if (!r.ok) throw new Error(`fal HTTP ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  const img = d.images?.[0];
  if (!img?.url) throw new Error("fal: răspuns fără imagine");
  return img;
}

const tinte = Object.entries(poze).filter(([slug]) => (doar ? doar.includes(slug) : true));
let okN = 0, sariteN = 0, esecN = 0, mpTotal = 0;

for (const [slug, p] of tinte) {
  const out = join(outDir, `${slug}.jpg`);
  if (existsSync(out) && !doar) { sariteN++; continue; }
  try {
    const tmp = `/tmp/poza-${slug}`;
    try {
      await descarca(thumb(p.foto), tmp);
    } catch {
      await descarca(p.foto, tmp); // thumb 400 când originalul e sub 800px
    }
    // redimensionare locală la max 800px (sips e nativ pe macOS)
    execFileSync("sips", ["-Z", "800", "-s", "format", "jpeg", tmp, "--out", `${tmp}.jpg`], { stdio: "ignore" });
    const b64 = readFileSync(`${tmp}.jpg`).toString("base64");
    const img = await fal(`data:image/jpeg;base64,${b64}`);
    const rImg = await fetch(img.url, { signal: AbortSignal.timeout(60000) });
    writeFileSync(out, Buffer.from(await rImg.arrayBuffer()));
    const mp = ((img.width ?? 800) * (img.height ?? 800)) / 1e6;
    mpTotal += mp;
    okN++;
    console.log(`OK   ${slug} (${img.width}x${img.height}, ~${(mp * 0.025 * 100).toFixed(1)} cenți)`);
  } catch (e) {
    esecN++;
    console.log(`ESEC ${slug}: ${e.message}`);
  }
  await pauza(2500); // menajăm rate-limitul Wikimedia
}

// manifestul: ce ilustrații există pe disc
const manifest = readdirSync(outDir).filter((f) => f.endsWith(".jpg")).map((f) => f.replace(/\.jpg$/, "")).sort();
writeFileSync(join(root, "data/ilustratii.json"), JSON.stringify(manifest, null, 2));
console.log(`\n${okN} generate, ${sariteN} sărite (există), ${esecN} eșecuri; cost estimat total ~$${(mpTotal * 0.025).toFixed(2)}; manifest: ${manifest.length}`);
