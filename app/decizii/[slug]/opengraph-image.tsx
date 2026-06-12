import { ImageResponse } from "next/og";
import { decizii, getDecizie } from "@/data/decizii";
import { OG_SIZE, BrandOg, Tricolor } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Analiza guvernului paralel pentru decizia din titlu";

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
          paddingBottom: 48,
        }}
      >
        <BrandOg />
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
        <Tricolor />
      </div>
    ),
    size
  );
}
