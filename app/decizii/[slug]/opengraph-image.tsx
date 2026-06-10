import { ImageResponse } from "next/og";
import { decizii, getDecizie } from "@/data/decizii";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return decizii.map((d) => ({ slug: d.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDecizie(slug);
  const titlu = d?.titlu ?? "guvernare.online";
  const vot = d?.votParalel.vot ?? "";
  const aliniere =
    d?.aliniere === "aliniat"
      ? "decizia reală coincide cu votul nostru"
      : d?.aliniere === "divergent"
        ? "decizia reală diverge de votul nostru"
        : d?.aliniere === "parțial"
          ? "aliniere parțială cu votul nostru"
          : "analiza guvernului paralel";
  const votColor =
    vot === "pentru" ? "#047857" : vot === "contra" ? "#b91c1c" : "#52525b";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#172554",
          padding: 60,
        }}
      >
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
        <div
          style={{
            color: "white",
            fontSize: titlu.length > 90 ? 44 : 54,
            fontWeight: 700,
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          {titlu}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {vot && (
            <span
              style={{
                backgroundColor: votColor,
                color: "white",
                fontSize: 26,
                fontWeight: 800,
                padding: "8px 20px",
                borderRadius: 8,
                textTransform: "uppercase",
              }}
            >
              Votul nostru: {vot}
            </span>
          )}
          <span style={{ color: "#facc15", fontSize: 24 }}>{aliniere}</span>
        </div>
      </div>
    ),
    size
  );
}
