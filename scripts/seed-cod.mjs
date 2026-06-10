// Creează/resetează un cod de invitație. Rulare:
//   node scripts/seed-cod.mjs <COD> <numar_locuri>
// Cere BLOB_READ_WRITE_TOKEN în mediu (vine din .env.local).
import { put } from "@vercel/blob";
import { readFileSync } from "node:fs";

for (const linie of readFileSync(".env.local", "utf8").split("\n")) {
  const m = linie.match(/^([A-Z_]+)="?([^"]*)"?$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const cod = (process.argv[2] || "").toUpperCase().replace(/\s+/g, "");
const locuri = parseInt(process.argv[3] || "3", 10);
if (!cod) {
  console.error("Folosire: node scripts/seed-cod.mjs <COD> <locuri>");
  process.exit(1);
}

await put(`coduri/${cod}.json`, JSON.stringify({ ramase: locuri, creat: new Date().toISOString(), parinte: "fondator" }), {
  access: "public",
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType: "application/json",
  cacheControlMaxAge: 0,
});
console.log(`Cod creat: ${cod} (${locuri} locuri)`);
