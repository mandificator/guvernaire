import { deciziiSortate } from "@/data/decizii";

export const dynamic = "force-static";

const BASE = "https://guvernaire.vercel.app";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const decizii = deciziiSortate();
  const items = decizii
    .map((d) => {
      const verdict =
        d.votParalel.vot === "pentru"
          ? "Votul nostru: PENTRU"
          : d.votParalel.vot === "contra"
            ? "Votul nostru: CONTRA"
            : "Votul nostru: ABȚINERE";
      return `    <item>
      <title>${escapeXml(d.titlu)}</title>
      <link>${BASE}/decizii/${d.slug}</link>
      <guid>${BASE}/decizii/${d.slug}</guid>
      <pubDate>${new Date(d.data + "T12:00:00Z").toUTCString()}</pubDate>
      <description>${escapeXml(`${verdict} (scor ${d.votParalel.scor > 0 ? "+" : ""}${d.votParalel.scor}). ${d.rezumat}`)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>guvernAIre — Guvernul paralel al cetățeanului</title>
    <link>${BASE}</link>
    <description>Fiecare lege din România, explicată și votată în interesul cetățeanului — apoi comparată cu votul real din Parlament.</description>
    <language>ro</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
