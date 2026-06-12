// Piese comune pentru imaginile de share (opengraph-image.tsx): brandul, banda
// tricoloră și portretul editorial înglobat ca data-URI (satori nu citește de pe disc).
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { slugNume } from "@/data/guvern";
import ilustratii from "@/data/ilustratii.json";

export const OG_SIZE = { width: 1200, height: 630 };

export async function portretDataUri(nume: string): Promise<string | null> {
  const s = slugNume(nume);
  if (!(ilustratii as string[]).includes(s)) return null;
  const buf = await readFile(join(process.cwd(), "public/ilustratii", `${s}.jpg`));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export function BrandOg() {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
      <span style={{ color: "white", fontSize: 40, fontWeight: 800 }}>guvernare</span>
      <span
        style={{
          backgroundColor: "#facc15",
          color: "#172554",
          fontSize: 30,
          fontWeight: 900,
          padding: "2px 10px",
          borderRadius: 8,
        }}
      >
        .online
      </span>
      <span style={{ color: "#93c5fd", fontSize: 22, marginLeft: 20 }}>
        guvernul paralel al cetățeanului
      </span>
    </div>
  );
}

export function Tricolor() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "flex",
        width: "100%",
        height: 14,
      }}
    >
      <div style={{ flex: 1, backgroundColor: "#002B7F" }} />
      <div style={{ flex: 1, backgroundColor: "#FCD116" }} />
      <div style={{ flex: 1, backgroundColor: "#CE1126" }} />
    </div>
  );
}
