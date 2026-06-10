/**
 * Semnare/verificare HMAC cu Web Crypto — funcționează atât în middleware
 * (Edge/Node), cât și în route handlers.
 */

const PAYLOAD = "guvernare-online-v1";

async function hmacHex(secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(PAYLOAD));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function semneazaAcces(secret: string): Promise<string> {
  return `v1.${await hmacHex(secret)}`;
}

export async function verificaAcces(cookie: string, secret: string): Promise<boolean> {
  if (!cookie || !cookie.startsWith("v1.")) return false;
  const asteptat = await hmacHex(secret);
  const primit = cookie.slice(3);
  if (primit.length !== asteptat.length) return false;
  // comparație în timp constant
  let dif = 0;
  for (let i = 0; i < asteptat.length; i++) {
    dif |= primit.charCodeAt(i) ^ asteptat.charCodeAt(i);
  }
  return dif === 0;
}
