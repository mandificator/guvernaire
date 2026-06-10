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
    <div className="space-y-10 sm:space-y-12">
      <section className="rounded-3xl bg-blue-950 px-5 py-8 text-white sm:px-10 sm:py-10">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-yellow-400 sm:text-xs">
          Guvernul paralel al cetățeanului
        </p>
        <h1 className="mb-3 max-w-3xl text-[26px] font-extrabold leading-tight sm:text-4xl">
          Dacă România ar fi guvernată strict în interesul tău, cum s-ar vota fiecare lege?
        </h1>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-blue-100">
          Citim sursele oficiale ale statului, cântărim ce câștigi și ce pierzi tu, votăm
          transparent — apoi comparăm cu ce au votat ei. Fără partid, fără sponsor, fără simpatii.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/decizii"
            className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-blue-950 active:bg-yellow-300 sm:py-2.5"
          >
            Vezi deciziile →
          </Link>
          <Link
            href="/metodologie"
            className="rounded-xl border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-100 active:bg-blue-900 sm:py-2.5"
          >
            Cum analizăm
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center sm:p-6">
          <div className="text-2xl font-extrabold text-blue-900 sm:text-4xl">{decizii.length}</div>
          <div className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-sm">
            decizii analizate
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center sm:p-6">
          <div className="text-2xl font-extrabold text-emerald-700 sm:text-4xl">{aliniate}</div>
          <div className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-sm">
            aliniate cu votul nostru
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center sm:p-6">
          <div className="text-2xl font-extrabold text-red-700 sm:text-4xl">{divergente}</div>
          <div className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-sm">
            divergente de votul nostru
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-bold sm:text-xl">Ultimele decizii analizate</h2>
          <Link href="/decizii" className="text-sm font-medium text-blue-700 hover:underline">
            toate →
          </Link>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {decizii.slice(0, 5).map((d) => (
            <CardLink key={d.slug} href={`/decizii/${d.slug}`}>
              <div className="mb-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <InstitutieTag institutie={d.institutie} />
                <DataRo iso={d.data} />
              </div>
              <h3 className="mb-1.5 text-base font-bold leading-snug text-zinc-900 sm:text-lg">
                {d.titlu}
              </h3>
              <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-zinc-600">
                {d.rezumat}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-xs text-zinc-500">Votul nostru:</span>
                <VotBadge vot={d.votParalel.vot} />
                <VerdictBadge verdict={d.votParalel.verdict} />
              </div>
              <div className="mt-2">
                <AliniereBadge aliniere={d.aliniere} />
              </div>
            </CardLink>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8">
        <h2 className="mb-5 text-lg font-bold sm:text-xl">Cum funcționează</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-sm font-black text-white">
              1
            </div>
            <h3 className="mb-1 text-sm font-bold">Citim sursele oficiale</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Monitorul Oficial, Parlament, Guvern, Președinție, CCR. Presa — doar pentru
              informație, niciodată pentru interpretări.
            </p>
          </div>
          <div>
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-sm font-black text-white">
              2
            </div>
            <h3 className="mb-1 text-sm font-bold">Cântărim și votăm</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Argumente pro și contra pentru țară și cetățean, un vot transparent și un scor de
              impact de la −10 la +10, cu motivare publică.
            </p>
          </div>
          <div>
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-sm font-black text-white">
              3
            </div>
            <h3 className="mb-1 text-sm font-bold">Comparăm cu realitatea</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Punem votul nostru lângă votul real din Parlament — cu cifre — și marcăm fiecare
              decizie: aliniată sau divergentă.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-bold sm:text-xl">Actorii politici sub lupă</h2>
          <Link href="/actori" className="text-sm font-medium text-blue-700 hover:underline">
            toți →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {actori.slice(0, 6).map((a) => (
            <CardLink key={a.slug} href={`/actori/${a.slug}`}>
              <div className="flex items-center gap-4">
                <NotaActor nota={a.evaluare.nota} />
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-zinc-900">{a.nume}</h3>
                  <p className="line-clamp-2 text-xs leading-snug text-zinc-500">
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
