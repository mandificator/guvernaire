import type { Metadata } from "next";
import { actori } from "@/data/actori";
import { CardLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Actori politici",
  description:
    "Profilurile actorilor politici majori din România: acțiuni documentate, promisiuni vs fapte, controverse cu sursă, poziții declarate. Fără note, fără clasamente, fără etichete.",
};

export default function ActoriPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl font-bold tracking-tight">Actorii politici sub lupă</h1>
        <p className="mt-1 max-w-2xl text-sm text-zinc-600">
          Niciun clasament, nicio notă, nicio etichetă: doar <em>faptele</em> fiecărui actor —
          acțiuni datate, promisiuni vs livrare, controverse documentate, poziții declarate. Tu
          tragi concluziile.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {actori.map((a) => (
          <CardLink key={a.slug} href={`/actori/${a.slug}`}>
            <h2 className="font-bold text-zinc-900">{a.nume}</h2>
            <p className="mb-2 text-xs text-zinc-500">
              {a.functie}
              {a.partid ? ` · ${a.partid}` : ""}
            </p>
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600">{a.rezumat}</p>
          </CardLink>
        ))}
      </div>
    </div>
  );
}
