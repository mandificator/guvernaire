import type { Metadata } from "next";
import { actori } from "@/data/actori";
import { CardLink, NotaActor } from "@/components/ui";

export const metadata: Metadata = {
  title: "Actori politici",
  description:
    "Analizăm fiecare jucător politic major din România: acțiuni, promisiuni vs fapte, controverse și alinierea cu interesul public.",
};

export default function ActoriPage() {
  const sortati = [...actori].sort((a, b) => b.evaluare.nota - a.evaluare.nota);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl font-bold tracking-tight">Actorii politici sub lupă</h1>
        <p className="mt-1 max-w-2xl text-sm text-zinc-600">
          Nota măsoară un singur lucru: cât de aliniate sunt <em>faptele</em> (nu declarațiile)
          fiecărui actor cu interesul țării și al cetățeanului, pe baza acțiunilor documentate.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {sortati.map((a) => (
          <CardLink key={a.slug} href={`/actori/${a.slug}`}>
            <div className="flex items-start gap-4">
              <NotaActor nota={a.evaluare.nota} />
              <div className="min-w-0">
                <h2 className="font-bold text-zinc-900">{a.nume}</h2>
                <p className="mb-2 text-xs text-zinc-500">
                  {a.functie}
                  {a.partid ? ` · ${a.partid}` : ""}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600">{a.rezumat}</p>
              </div>
            </div>
          </CardLink>
        ))}
      </div>
    </div>
  );
}
