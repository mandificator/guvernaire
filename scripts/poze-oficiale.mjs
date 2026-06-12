// Pasul 3: pentru restanțe, ia og:image / poza principală de pe paginile oficiale și de partid
// pe care deja le cităm în fișele candidaților.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const poze = JSON.parse(readFileSync(join(root, "scripts/poze.json"), "utf-8"));

const TINTE = {
  "adrian-wiener": ["https://usr.ro/oameni/adrian-wiener", "https://www.usr.ro/membri/adrian-wiener/"],
  "stefan-palarie": ["https://www.usr.ro/membri/stefan-palarie/", "https://usr.ro/oameni/stefan-palarie"],
  "radu-mihaiu": ["https://usr.ro/oameni/radu-nicolae-mihaiu", "https://www.usr.ro/membri/radu-mihaiu/"],
  "bende-sandor": ["https://udmr.ro/profil/bende-sandor"],
  "antal-istvan-lorant": ["https://udmr.ro/profil/antal-lorant"],
  "konczei-csaba": ["https://udmr.ro/profil/konczei-csaba", "https://udmr.ro/profil/Konczei-Csaba"],
  "ciprian-constantin-serban": ["https://gov.ro/ro/guvernul/cabinetul-de-ministri/ministrul-transporturilor-i-infrastructurii1750767520"],
  "bogdan-despescu": ["https://www.mai.gov.ro/chestor-general-de-politie-bogdan-despescu-secretar-de-stat/"],
  "silviu-vexler": ["https://www.jewishfed.ro/index.php/silviu-vexler"],
  "dumitru-chisalita": ["https://energia-inteligenta.ro/despre-noi/", "https://asociatiaenergiainteligenta.ro/"],
  "sebastian-cernic": [],
  "george-gima": [],
};

async function ogImage(url) {
  try {
    const r = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) return null;
    const html = await r.text();
    const og = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
      ?? html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    if (og) return new URL(og[1], url).href;
    // fallback: prima imagine mare non-logo
    for (const m of html.matchAll(/<img[^>]+src=["']([^"']+\.(?:jpe?g|png|webp))["']/gi)) {
      const u = m[1].toLowerCase();
      if (/(logo|icon|sigla|banner|header|footer|sprite)/.test(u)) continue;
      return new URL(m[1], url).href;
    }
    return null;
  } catch {
    return null;
  }
}

for (const [slug, urluri] of Object.entries(TINTE)) {
  if (poze[slug]) continue;
  for (const u of urluri) {
    const img = await ogImage(u);
    if (img && !/og-default|placeholder|share-default/.test(img)) {
      poze[slug] = { nume: slug, foto: img, sursa: u };
      console.log(`OK   ${slug} <- ${img}`);
      break;
    }
  }
  if (!poze[slug]) console.log(`LIPSA ${slug}`);
}

writeFileSync(join(root, "scripts/poze.json"), JSON.stringify(poze, null, 2));
console.log("total:", Object.keys(poze).length);
