import { ImageResponse } from "next/og";
import { pozitiiGuvern, getPozitie, partidPrincipal } from "@/data/guvern";
import { OG_SIZE, BrandOg, Tricolor, portretDataUri } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Propunerea guvernului paralel pentru poziția din titlu";

export function generateStaticParams() {
  return pozitiiGuvern.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPozitie(slug);
  const propus = p?.candidati.find((c) => c.nume === p.propunere.nume);
  const img = p ? await portretDataUri(p.propunere.nume) : null;

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
        <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
          {img && (
            <img
              src={img}
              width={232}
              height={290}
              style={{ borderRadius: 24, objectFit: "cover" }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 800 }}>
            <span
              style={{
                color: "#facc15",
                fontSize: 24,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 4,
              }}
            >
              Propunerea guvernului paralel
            </span>
            <span style={{ color: "white", fontSize: 42, fontWeight: 700, lineHeight: 1.15 }}>
              {p?.minister ?? "Guvernul României"}
            </span>
            <span style={{ color: "#facc15", fontSize: 58, fontWeight: 800, lineHeight: 1.1 }}>
              {p?.propunere.nume ?? ""}
            </span>
            {propus && (
              <span style={{ color: "#93c5fd", fontSize: 28 }}>
                {partidPrincipal(propus.partid)} · {propus.punctaj.total}/100 pe grila publică
              </span>
            )}
          </div>
        </div>
        <span style={{ color: "#a1a1aa", fontSize: 22 }}>
          ales dintre 5 candidați punctați pe aceeași grilă, cu argumente pro și contra
        </span>
        <Tricolor />
      </div>
    ),
    size
  );
}
