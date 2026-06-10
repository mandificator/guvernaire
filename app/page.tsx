import Link from "next/link";
import { deciziiSortate } from "@/data/decizii";
import { actori } from "@/data/actori";
import {
  AliniereBadge,
  CardLink,
  DataRo,
  InstitutieTag,
  NotaActor,
  VerdictBadge,
  VotBadge,
} from "@/components/ui";

export default function Home() {
  const decizii = deciziiSortate();
  const cuVot = decizii.filter((d) => d.aliniere !== "fără-vot");
  const aliniate = cuVot.filter((d) => d.aliniere === "aliniat").length;
  const divergente = cuVot.filter((d) => d.aliniere === "divergent").length;

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-blue-950 px-6 py-10 text-white sm:px-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
          Guvernul paralel al cetățeanului
        </p>
        <h1 className="mb-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Dacă România ar fi guvernată strict în interesul tău, cum s-ar vota fiecare lege?
        </h1>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-blue-100">
          Citim sursele oficiale — Parlament, Guvern, Președinție — și presa independentă.
          Cântărim argumentele pro și contra pentru țară și cetățean, votăm transparent și
          comparăm votul nostru cu decizia reală. Fără partid, fără sponsor, cu surse la vedere.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/decizii"
            className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-blue-950 hover:bg-yellow-300"
          >
            Vezi deciziile analizate
          </Link>
          <Link
            href="/metodologie"
            className="rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-semibold text-blue-100 hover:bg-blue-900"
          >
            Cum analizăm
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
          <div className="text-4xl font-extrabold text-blue-900">{decizii.length}</div>
          <div className="mt-1 text-sm text-zinc-500">decizii analizate</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
          <div className="text-4xl font-extrabold text-emerald-700">{aliniate}</div>
          <div className="mt-1 text-sm text-zinc-500">
            decizii reale aliniate cu votul nostru
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
          <div className="text-4xl font-extrabold text-red-700">{divergente}</div>
          <div className="mt-1 text-sm text-zinc-500">
            decizii reale divergente de votul nostru
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold">Ultimele decizii analizate</h2>
          <Link href="/decizii" className="text-sm font-medium text-blue-700 hover:underline">
            toate →
          </Link>
        </div>
        <div className="space-y-4">
          {decizii.slice(0, 5).map((d) => (
            <CardLink key={d.slug} href={`/decizii/${d.slug}`}>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <InstitutieTag institutie={d.institutie} />
                <DataRo iso={d.data} />
                <VerdictBadge verdict={d.votParalel.verdict} />
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-zinc-900">{d.titlu}</h3>
              <p className="mb-3 text-sm leading-relaxed text-zinc-600">{d.rezumat}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="text-zinc-500">Votul nostru:</span>
                <VotBadge vot={d.votParalel.vot} />
                <AliniereBadge aliniere={d.aliniere} />
              </div>
            </CardLink>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold">Actorii politici sub lupă</h2>
          <Link href="/actori" className="text-sm font-medium text-blue-700 hover:underline">
            toți →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actori.slice(0, 6).map((a) => (
            <CardLink key={a.slug} href={`/actori/${a.slug}`}>
              <div className="flex items-start gap-4">
                <NotaActor nota={a.evaluare.nota} />
                <div>
                  <h3 className="font-bold text-zinc-900">{a.nume}</h3>
                  <p className="text-xs text-zinc-500">
                    {a.functie}
                    {a.partid ? ` · ${a.partid}` : ""}
                  </p>
                </div>
              </div>
            </CardLink>
          ))}
        </div>
      </section>
    </div>
  );
}
