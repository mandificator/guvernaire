import Image from "next/image";
import { ilustratiePentru } from "@/data/guvern";

/**
 * Portret editorial generat din fotografia publică a persoanei (vezi scripts/genereaza-ilustratii.mjs).
 * Același stil pentru toți — uniformitatea vizuală e parte din echidistanță.
 * Fallback: monogramă, pentru persoanele fără fotografie publică verificată.
 */
export function Portret({ nume, marime = 72 }: { nume: string; marime?: number }) {
  const src = ilustratiePentru(nume);
  const h = Math.round(marime * 1.25);
  if (!src) {
    const initiale = nume
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0])
      .join("")
      .toUpperCase();
    return (
      <div
        style={{ width: marime, height: h }}
        className="flex shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-blue-950 font-serif text-xl font-bold text-yellow-400"
        title={nume}
      >
        {initiale}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={`Ilustrație editorială: ${nume}`}
      width={marime}
      height={h}
      className="shrink-0 rounded-xl border border-zinc-200 bg-zinc-50 object-cover"
      style={{ width: marime, height: h }}
    />
  );
}
