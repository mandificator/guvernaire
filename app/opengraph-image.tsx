import { ImageResponse } from "next/og";
import { OG_SIZE, Tricolor } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "guvernare.online — Guvernul paralel al cetățeanului";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#172554",
          gap: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ color: "white", fontSize: 92, fontWeight: 800 }}>guvernare</span>
          <span
            style={{
              backgroundColor: "#facc15",
              color: "#172554",
              fontSize: 64,
              fontWeight: 900,
              padding: "4px 20px",
              borderRadius: 14,
            }}
          >
            .online
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#93c5fd",
            fontSize: 28,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Guvernul paralel al cetățeanului
        </div>
        <div
          style={{
            display: "flex",
            color: "#e4e4e7",
            fontSize: 26,
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Fiecare lege explicată pe înțelesul tău: argumente pro și contra, votul nostru,
          comparat cu votul real din Parlament. Fapte din surse oficiale, zero simpatii politice.
        </div>
        <Tricolor />
      </div>
    ),
    size
  );
}
