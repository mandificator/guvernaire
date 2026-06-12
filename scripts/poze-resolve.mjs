// Rezolvă poze reale pentru persoanele din data/guvern.ts, via Wikipedia REST (ro, en).
// Scrie scripts/poze.json: { slug: { nume, foto, sursa } } + raportează lipsurile.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "data/guvern.ts"), "utf-8");
const nume = [...new Set([...src.matchAll(/nume: "([^"]+)"/g)].map((m) => m[1]))];

export function slugify(n) {
  return n
    .toLowerCase()
    .replaceAll(/[ăâ]/g, "a")
    .replaceAll(/[î]/g, "i")
    .replaceAll(/[șş]/g, "s")
    .replaceAll(/[țţ]/g, "t")
    .replaceAll(/[éè]/g, "e")
    .replaceAll(/[áà]/g, "a")
    .replaceAll(/[ó]/g, "o")
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");
}

// Variante de titlu de articol pentru un nume (prenume compuse, ordine maghiară etc.)
function variante(n) {
  const v = new Set([n]);
  // "Alexandru-Florin Rogobete" -> "Alexandru Rogobete" / "Florin Rogobete"
  const m = n.match(/^([\p{L}]+)-([\p{L}]+) (.+)$/u);
  if (m) {
    v.add(`${m[1]} ${m[3]}`);
    v.add(`${m[2]} ${m[3]}`);
    v.add(`${m[1]} ${m[2]} ${m[3]}`);
  }
  // ordine maghiară inversată: "Bende Sándor" -> "Sándor Bende"
  const p = n.split(" ");
  if (p.length === 2) v.add(`${p[1]} ${p[0]}`);
  // "Antal István-Loránt" -> "Antal Lóránt", "István-Loránt Antal"
  const h = n.match(/^([\p{L}]+) ([\p{L}]+)-([\p{L}]+)$/u);
  if (h) {
    v.add(`${h[1]} ${h[3]}`);
    v.add(`${h[2]}-${h[3]} ${h[1]}`);
  }
  return [...v];
}

async function wikiImage(lang, titlu) {
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titlu.replaceAll(" ", "_"))}`;
  try {
    const r = await fetch(url, { headers: { "user-agent": "guvernare.online (tavi@pukka.ro)" } });
    if (!r.ok) return null;
    const d = await r.json();
    if (d.type === "disambiguation") return null;
    const img = d.originalimage?.source ?? d.thumbnail?.source ?? null;
    if (!img) return null;
    // sanity: descrierea să sugereze persoană publică românească/politică, nu omonim
    const desc = `${d.description ?? ""} ${d.extract ?? ""}`.toLowerCase();
    const ok = /politic|deputat|senator|ministr|român|roman|parliament|mayor|primar|rector|general|diplomat|professor|profesor|economist|businessman|physician|jurnal/.test(desc);
    return ok ? { foto: img, sursa: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(titlu.replaceAll(" ", "_"))}` } : null;
  } catch {
    return null;
  }
}

const rezultat = {};
const lipsa = [];
for (const n of nume) {
  let gasit = null;
  for (const t of variante(n)) {
    for (const lang of ["ro", "en"]) {
      gasit = await wikiImage(lang, t);
      if (gasit) break;
    }
    if (gasit) break;
  }
  const slug = slugify(n);
  if (gasit) {
    rezultat[slug] = { nume: n, ...gasit };
    console.log(`OK   ${n} <- ${gasit.sursa}`);
  } else {
    lipsa.push(n);
    console.log(`LIPSA ${n}`);
  }
}

writeFileSync(join(root, "scripts/poze.json"), JSON.stringify(rezultat, null, 2));
console.log(`\n${Object.keys(rezultat).length} găsite, ${lipsa.length} lipsă:`);
for (const n of lipsa) console.log("  -", n);
