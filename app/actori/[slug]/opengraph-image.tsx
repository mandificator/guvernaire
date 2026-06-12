import { ImageResponse } from "next/og";
import { actori, getActor } from "@/data/actori";
import { OG_SIZE, BrandOg, Tricolor, portretDataUri } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Profilul actorului politic din titlu, pe guvernare.online";

export function generateStaticParams() {
  return actori.map((a) => ({ slug: a.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getActor(slug);
  const img = a ? await portretDataUri(a.nume) : null;

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
              Actorii politici sub lupă
            </span>
            <span style={{ color: "white", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
              {a?.nume ?? "Actori politici"}
            </span>
            <span style={{ color: "#93c5fd", fontSize: 30 }}>
              {a ? `${a.functie}${a.partid ? ` · ${a.partid}` : ""}` : ""}
            </span>
          </div>
        </div>
        <span style={{ color: "#a1a1aa", fontSize: 22 }}>
          acțiuni datate · promisiuni vs livrare · controverse documentate · fără note, fără etichete
        </span>
        <Tricolor />
      </div>
    ),
    size
  );
}
