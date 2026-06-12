import type { Metadata } from "next";
import Link from "next/link";
import { pozitiiGuvern, distributiePartide, partidPrincipal } from "@/data/guvern";
import { Portret } from "@/components/portret";

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
          <strong>5 candidați reali</strong> — din Parlament și din afara lui — punctați pe o
          grilă publică, aplicată identic tuturor. Fiecare candidat are argumente pro{" "}
          <em>și</em> contra, activitate verificabilă (cdep.ro, senat.ro sau echivalentul
          instituțional) și surse. Etichetele nu sunt criteriu: doar faptele.
        </p>
      </header>

      <section className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-950">
          Grila de punctare (max. 100)
        </h2>
        <div className="grid gap-3 text-sm leading-relaxed text-zinc-700 sm:grid-cols-2">
          <div className="rounded-lg bg-white/70 p-3">
            <span className="font-bold text-blue-950">
              Susținere politică — votul poporului · 0–35
            </span>{" "}
            <span className="text-[10px] font-bold uppercase text-blue-800">
              cea mai mare pondere
            </span>
            <br />
            mandat direct de la electorat (parlamentar ales în dec. 2024 = 12, europarlamentar =
            10, fost ales = 4) + votul pentru partidul care îl susține (PSD 15, AUR 12, PNL 9,
            USR 8, SOS 5, POT 4, UDMR 4, minorități 2; un independent susținut demonstrat de un
            partid primește jumătate din punctele partidului) + capital electoral personal
            demonstrat (0–8). Un guvern există doar dacă poate fi votat.
          </div>
          <div className="rounded-lg bg-white/70 p-3">
            <span className="font-bold text-blue-950">Competență în domeniu · 0–25</span>
            <br />
            pregătire + carieră și realizări + livrări verificabile la vârf
          </div>
          <div className="rounded-lg bg-white/70 p-3">
            <span className="font-bold text-blue-950">Activitate verificabilă · 0–20</span>
            <br />
            funcții în comisii/instituții + producție legislativă sau echivalent + control și
            expertiză publică
          </div>
          <div className="rounded-lg bg-white/70 p-3">
            <span className="font-bold text-blue-950">Integritate · 0–20</span>
            <br />
            pornește de la 20; scad doar penalizările documentate: anchetă penală −14, plagiat
            constatat −10, extremism −8, conflict de interese −4…−7, suspiciuni nevalidate −4,
            traseism −3, demisie la ordin de partid −2
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          Propunerea fiecărei poziții = punctajul maxim; la egalitate decide integritatea; un
          candidat prezent pe mai multe poziții e propus doar acolo unde are punctajul lui
          maxim. Diferențele de 1–3 puncte sunt în marja grilei și sunt semnalate explicit în
          motivare. Absența unei funcții anterioare nu se penalizează nicăieri. Cineva din afara
          politicii intră în calcul doar dacă surclasează totalul sau are susținerea demonstrată
          a unui partid — votul cetățenilor atârnă cel mai greu.
        </p>
      </section>

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
              <div className="mt-3 flex items-start gap-3 border-t border-zinc-100 pt-3">
                <Portret nume={p.propunere.nume} marime={48} />
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                    Propunerea noastră
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-blue-950">
                    {p.propunere.nume}
                    {propus ? (
                      <span className="ml-1.5 font-normal text-zinc-500">
                        · {partidPrincipal(propus.partid)} ·{" "}
                        <span className="font-bold text-blue-900">
                          {propus.punctaj.total}/100
                        </span>
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
        întotdeauna sursele primare din fiecare fișă. Portretele sunt ilustrații editoriale
        generate cu AI din fotografii publice (Wikimedia Commons, pagini oficiale de partid și
        instituții), în același stil grafic pentru toți candidații — uniformitatea vizuală face
        parte din echidistanță; persoanele fără fotografie publică verificată apar cu monogramă.
      </p>
    </div>
  );
}
