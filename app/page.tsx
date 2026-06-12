import Link from "next/link";
import { deciziiSortate } from "@/data/decizii";
import { actori } from "@/data/actori";
import {
  AliniereBadge,
  DataRo,
  InstitutieTag,
  NotaActor,
  VerdictBadge,
  VotBadge,
} from "@/components/ui";

export default function Home() {
  const decizii = deciziiSortate();
  const [lead, ...rest] = decizii;
  const secundare = rest.slice(0, 4);
  const restul = rest.slice(4);
  const aliniate = decizii.filter((d) => d.aliniere === "aliniat").length;
  const divergente = decizii.filter((d) => d.aliniere === "divergent").length;
  const partiale = decizii.filter((d) => d.aliniere === "parțial").length;
  const faraVot = decizii.filter((d) => d.aliniere === "fără-vot").length;

  return (
    <div className="space-y-10">
      {/* Lead + right rail */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {lead && (
            <article className="border-b border-zinc-200 pb-6">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <InstitutieTag institutie={lead.institutie} />
                <DataRo iso={lead.data} />
              </div>
              <Link href={`/decizii/${lead.slug}`} className="group">
                <h1 className="font-serif text-[28px] font-bold leading-[1.15] tracking-tight text-zinc-900 group-hover:text-blue-900 sm:text-4xl">
                  {lead.titlu}
                </h1>
              </Link>
              <p className="mt-3 font-serif text-[17px] leading-relaxed text-zinc-600 sm:text-lg">
                {lead.rezumat}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Votul nostru:
                </span>
                <VotBadge vot={lead.votParalel.vot} />
                <VerdictBadge verdict={lead.votParalel.verdict} />
              </div>
              <div className="mt-2">
                <AliniereBadge aliniere={lead.aliniere} />
              </div>
            </article>
          )}

          <div className="divide-y divide-zinc-200">
            {secundare.map((d) => (
              <article key={d.slug} className="py-5">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <InstitutieTag institutie={d.institutie} />
                  <DataRo iso={d.data} />
                </div>
                <Link href={`/decizii/${d.slug}`} className="group">
                  <h2 className="font-serif text-xl font-bold leading-snug text-zinc-900 group-hover:text-blue-900 sm:text-2xl">
                    {d.titlu}
                  </h2>
                </Link>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">
                  {d.rezumat}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <VotBadge vot={d.votParalel.vot} />
                  <AliniereBadge aliniere={d.aliniere} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right rail */}
        <aside className="space-y-6">
          <div className="border-t-4 border-blue-950 bg-zinc-50 p-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-zinc-900">
              Scorul guvernului paralel
            </h2>
            <div className="mb-3 text-center">
              <div className="text-4xl font-extrabold text-blue-950">{decizii.length}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                decizii analizate
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-white py-2">
                <div className="text-2xl font-extrabold text-emerald-700">{aliniate}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                  aliniate
                </div>
              </div>
              <div className="rounded-lg bg-white py-2">
                <div className="text-2xl font-extrabold text-red-700">{divergente}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                  divergente
                </div>
              </div>
              <div className="rounded-lg bg-white py-2">
                <div className="text-2xl font-extrabold text-amber-600">{partiale}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                  parțial aliniate
                </div>
              </div>
              <div className="rounded-lg bg-white py-2">
                <div className="text-2xl font-extrabold text-zinc-500">{faraVot}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                  fără vot (executiv)
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Câte decizii reale au coincis cu votul dat de guvernul paralel strict în interesul
              cetățeanului.{" "}
              <Link href="/metodologie" className="font-semibold text-blue-800 hover:underline">
                Cum votăm
              </Link>
            </p>
          </div>

          <div className="border-t-4 border-yellow-400 bg-blue-950 p-5 text-white">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-400">
              Nou · Guvernul României
            </h2>
            <p className="text-sm leading-relaxed text-blue-100">
              Țara nu are guvern cu puteri depline. Noi propunem unul: 17 poziții, câte 5
              candidați reali pentru fiecare — cu argumente pro și contra, activitate
              parlamentară verificabilă și zero etichete.
            </p>
            <Link
              href="/guvern"
              className="mt-3 inline-block rounded bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-blue-950 hover:bg-yellow-300"
            >
              Vezi guvernul propus →
            </Link>
          </div>

          <div className="border-t-4 border-zinc-900 p-0">
            <h2 className="mb-3 pt-4 text-xs font-bold uppercase tracking-[0.15em] text-zinc-900">
              Actorii politici, sub lupă
            </h2>
            <ul className="divide-y divide-zinc-100">
              {actori.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/actori/${a.slug}`}
                    className="block py-2.5 hover:bg-zinc-50"
                  >
                    <div className="truncate text-sm font-bold text-zinc-900">{a.nume}</div>
                    <div className="truncate text-[11px] text-zinc-500">{a.functie}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">
              Fapte documentate, promisiuni vs livrare, poziții declarate — fără note, fără
              clasamente, fără etichete.
            </p>
          </div>
        </aside>
      </section>

      {/* Restul deciziilor */}
      {restul.length > 0 && (
        <section>
          <h2 className="border-t-2 border-zinc-900 pt-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-900">
            Mai multe decizii
          </h2>
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {restul.map((d) => (
              <article key={d.slug} className="border-b border-zinc-100 py-4">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <InstitutieTag institutie={d.institutie} />
                  <DataRo iso={d.data} />
                </div>
                <Link href={`/decizii/${d.slug}`} className="group">
                  <h3 className="font-serif text-lg font-bold leading-snug text-zinc-900 group-hover:text-blue-900">
                    {d.titlu}
                  </h3>
                </Link>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <VotBadge vot={d.votParalel.vot} />
                  <AliniereBadge aliniere={d.aliniere} />
                </div>
              </article>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href="/decizii"
              className="text-sm font-bold text-blue-800 hover:underline"
            >
              Toate deciziile analizate →
            </Link>
          </div>
        </section>
      )}

      {/* Cum funcționează */}
      <section className="border-t-2 border-zinc-900 pt-2">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-900">
          Cum funcționează
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {[
            {
              n: "1",
              t: "Citim sursele oficiale",
              p: "Monitorul Oficial, Parlament, Guvern, Președinție, CCR. Presa — doar pentru informație, niciodată pentru interpretări.",
            },
            {
              n: "2",
              t: "Cântărim și votăm",
              p: "Argumente pro și contra pentru țară și cetățean, un vot transparent și un scor de impact de la −10 la +10, cu motivare publică.",
            },
            {
              n: "3",
              t: "Comparăm cu realitatea",
              p: "Punem votul nostru lângă votul real din Parlament — cu cifre — și marcăm fiecare decizie: aliniată sau divergentă.",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="font-serif text-4xl font-bold leading-none text-zinc-200">
                {s.n}
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold">{s.t}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
