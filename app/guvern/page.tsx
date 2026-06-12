import type { Metadata } from "next";
import Link from "next/link";
import { pozitiiGuvern, distributiePartide, partidPrincipal } from "@/data/guvern";

export const metadata: Metadata = {
  title: "Guvernul României",
  description:
    "Componența de guvern propusă de guvernul paralel al cetățeanului: 5 candidați reali pentru fiecare poziție, cu argumente pro și contra, activitate parlamentară verificabilă și surse. Din tot spectrul politic, fără etichete.",
};

export default function GuvernPage() {
  const candidatiTotal = pozitiiGuvern.reduce((acc, p) => acc + p.candidati.length, 0);
  const distCandidati = distributiePartide(false);
  const distPropuneri = distributiePartide(true);

  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-serif text-3xl font-bold tracking-tight">
          Guvernul României, propus de cetățeni
        </h1>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          România nu are guvern cu puteri depline din 5 mai 2026. Guvernul paralel propune o
          componență completă: pentru fiecare dintre cele {pozitiiGuvern.length} poziții,{" "}
          <strong>5 candidați reali</strong> — ideal membri actuali ai Parlamentului — analizați
          pe criterii publice: competență dovedită în domeniu, activitate parlamentară
          verificabilă (comisii, interpelări, propuneri legislative — cdep.ro / senat.ro),
          notorietate și încredere publică, plus echilibrul față de voturile cetățenilor din
          decembrie 2024. Fiecare candidat are argumente pro <em>și</em> contra. Etichetele
          („progresist", „suveranist") nu sunt criteriu: doar faptele.
        </p>
      </header>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-900">
          Garanția de echilibru, în cifre
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-zinc-600">
          Cei {candidatiTotal} de candidați acoperă tot spectrul parlamentar, aproximativ
          proporțional cu voturile din decembrie 2024:
        </p>
        <div className="flex flex-wrap gap-2">
          {distCandidati.map((d) => (
            <span
              key={d.partid}
              className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
            >
              {d.partid}: {d.numar}
            </span>
          ))}
        </div>
        <p className="mt-4 mb-2 text-sm leading-relaxed text-zinc-600">
          Propunerile finale (câte una per poziție) au mers la:
        </p>
        <div className="flex flex-wrap gap-2">
          {distPropuneri.map((d) => (
            <span
              key={d.partid}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900"
            >
              {d.partid}: {d.numar}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          De ce nu primesc AUR, SOS sau POT propuneri finale, deși au candidați pe aproape toate
          listele? Pentru că criteriul dominant este <strong>experiența executivă dovedită</strong>{" "}
          (ministere conduse, reforme livrate), iar aceste partide nu au guvernat încă — un fapt
          structural, nu o judecată ideologică. Acolo unde un candidat al lor domină pe merit,
          este consemnat ca rezervă imediată în motivare. Spune-ne unde greșim:{" "}
          <a href="mailto:tavi@pukka.ro" className="font-semibold text-blue-800 hover:underline">
            tavi@pukka.ro
          </a>
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {pozitiiGuvern.map((p) => {
          const propus = p.candidati.find((c) => c.nume === p.propunere.nume);
          return (
            <Link
              key={p.slug}
              href={`/guvern/${p.slug}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="font-serif text-lg font-bold leading-snug text-zinc-900">
                {p.minister}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-600">
                {p.misiune}
              </p>
              <div className="mt-3 border-t border-zinc-100 pt-3">
                <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                  Propunerea noastră
                </div>
                <div className="mt-0.5 text-sm font-bold text-blue-950">
                  {p.propunere.nume}
                  {propus ? (
                    <span className="ml-1.5 font-normal text-zinc-500">
                      · {partidPrincipal(propus.partid)}
                    </span>
                  ) : null}
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {p.candidati
                    .filter((c) => c.nume !== p.propunere.nume)
                    .map((c) => (
                      <span
                        key={c.nume}
                        className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px] text-zinc-600"
                      >
                        {c.nume}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="max-w-3xl border-t border-zinc-200 pt-4 text-xs leading-relaxed text-zinc-500">
        Acesta este un exercițiu civic, nu o listă de partid: nu susținem și nu atacăm pe nimeni.
        Cifrele de activitate parlamentară provin din fișele oficiale cdep.ro și senat.ro la data
        actualizării (12 iunie 2026) și se pot schimba. Controversele sunt citate doar dacă sunt
        documentate public, iar acuzațiile nevalidate judiciar sunt marcate ca atare. Verificați
        întotdeauna sursele primare din fiecare fișă.
      </p>
    </div>
  );
}
