// Pasul 2: pentru persoanele fără poză după poze-resolve, caută fișiere pe Wikimedia Commons.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "data/guvern.ts"), "utf-8");
const toate = [...new Set([...src.matchAll(/nume: "([^"]+)"/g)].map((m) => m[1]))];
const poze = JSON.parse(readFileSync(join(root, "scripts/poze.json"), "utf-8"));

function slugify(n) {
  return n
    .toLowerCase()
    .replaceAll(/[ăâá]/g, "a")
    .replaceAll(/[î]/g, "i")
    .replaceAll(/[șş]/g, "s")
    .replaceAll(/[țţ]/g, "t")
    .replaceAll(/[éè]/g, "e")
    .replaceAll(/[ó]/g, "o")
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");
}

const gasiti = new Set(Object.keys(poze));
const lipsa = toate.filter((n) => !gasiti.has(slugify(n)));

// fără diacritice, pentru potrivirea titlurilor de fișiere
const simplu = (s) =>
  s.toLowerCase().normalize("NFD").replaceAll(/[̀-ͯ]/g, "").replaceAll(/[ăâ]/g, "a").replaceAll(/[șţț]/g, "s");

async function commons(nume) {
  // variante: nume întreg, fără cratimă în prenume, ordine inversată (maghiară)
  const variante = new Set([nume]);
  const m = nume.match(/^([\p{L}]+)-([\p{L}]+) (.+)$/u);
  if (m) { variante.add(`${m[1]} ${m[3]}`); variante.add(`${m[2]} ${m[3]}`); }
  const p = nume.split(" ");
  if (p.length === 2) variante.add(`${p[1]} ${p[0]}`);

  for (const v of variante) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(v)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size&iiurlwidth=1200`;
    try {
      const r = await fetch(url, { headers: { "user-agent": "guvernare.online (tavi@pukka.ro)" } });
      if (!r.ok) continue;
      const d = await r.json();
      const pages = Object.values(d.query?.pages ?? {});
      const numeSimplu = simplu(v).split(/\s+/);
      for (const pg of pages) {
        const titlu = simplu(pg.title ?? "");
        if (!/\.(jpg|jpeg|png|webp)$/i.test(pg.title ?? "")) continue;
        // toate părțile numelui trebuie să apară în titlul fișierului
        if (!numeSimplu.every((part) => titlu.includes(part))) continue;
        const ii = pg.imageinfo?.[0];
        if (!ii || (ii.width ?? 0) < 200) continue;
        return { foto: ii.thumburl ?? ii.url, sursa: `https://commons.wikimedia.org/wiki/${encodeURIComponent(pg.title.replaceAll(" ", "_"))}`, fisier: pg.title };
      }
    } catch {}
  }
  return null;
}

let n = 0;
for (const nume of lipsa) {
  const g = await commons(nume);
  if (g) {
    poze[slugify(nume)] = { nume, ...g };
    console.log(`OK   ${nume} <- ${g.fisier}`);
    n++;
  } else {
    console.log(`LIPSA ${nume}`);
  }
}

writeFileSync(join(root, "scripts/poze.json"), JSON.stringify(poze, null, 2));
console.log(`\n+${n} din Commons; total ${Object.keys(poze).length}/${toate.length}`);
