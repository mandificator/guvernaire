import type { Metadata } from "next";
import { actori } from "@/data/actori";
import { CardLink } from "@/components/ui";
import { Portret } from "@/components/portret";

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
            <div className="mb-2 flex items-start gap-3">
              <Portret nume={a.nume} marime={48} />
              <div className="min-w-0">
                <h2 className="font-bold text-zinc-900">{a.nume}</h2>
                <p className="text-xs text-zinc-500">
                  {a.functie}
                  {a.partid ? ` · ${a.partid}` : ""}
                </p>
              </div>
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600">{a.rezumat}</p>
          </CardLink>
        ))}
      </div>
      <p className="max-w-3xl border-t border-zinc-200 pt-4 text-xs leading-relaxed text-zinc-500">
        Portretele sunt ilustrații editoriale generate cu AI din fotografii publice (Wikimedia
        Commons), în același stil grafic pentru toți actorii — uniformitatea vizuală face parte din
        echidistanță; persoanele fără fotografie publică verificată apar cu monogramă.
      </p>
    </div>
  );
}
