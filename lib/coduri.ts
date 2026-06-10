import { list, put } from "@vercel/blob";

export interface CodInfo {
  ramase: number;
  creat: string;
  parinte?: string;
}

// fără caractere ușor de confundat (0/O, 1/I/L)
const ALFABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function genereazaCod(): string {
  const litere = Array.from(
    crypto.getRandomValues(new Uint8Array(8)),
    (b) => ALFABET[b % ALFABET.length]
  ).join("");
  return `${litere.slice(0, 4)}-${litere.slice(4)}`;
}

export function normalizeazaCod(cod: string): string {
  return cod.toUpperCase().replace(/\s+/g, "").trim();
}

function caleBlob(cod: string): string {
  return `coduri/${cod}.json`;
}

export async function citesteCod(cod: string): Promise<CodInfo | null> {
  const { blobs } = await list({ prefix: caleBlob(cod), limit: 5 });
  const blob = blobs.find((b) => b.pathname === caleBlob(cod));
  if (!blob) return null;
  // query unic ca să ocolim cache-ul CDN al blob-ului
  const r = await fetch(`${blob.url}?t=${Date.now()}`, { cache: "no-store" });
  if (!r.ok) return null;
  try {
    return (await r.json()) as CodInfo;
  } catch {
    return null;
  }
}

export async function scrieCod(cod: string, info: CodInfo): Promise<void> {
  await put(caleBlob(cod), JSON.stringify(info), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 0,
  });
}
