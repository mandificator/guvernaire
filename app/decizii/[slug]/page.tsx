import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { decizii, getDecizie } from "@/data/decizii";
import {
  AliniereBadge,
  DataRo,
  InstitutieTag,
  ProContra,
  ScorBar,
  SectionTitle,
  Surse,
  VerdictBadge,
  VotBadge,
} from "@/components/ui";

export function generateStaticParams() {
  return decizii.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDecizie(slug);
  return d ? { title: d.titlu, description: d.rezumat } : {};
}

export default async function DeciziePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDecizie(slug);
  if (!d) notFound();

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Link href="/decizii" className="text-sm text-blue-700 hover:underline">
          ← toate deciziile
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <InstitutieTag institutie={d.institutie} />
          <DataRo iso={d.data} />
          {d.domenii.map((dom) => (
            <span
              key={dom}
              className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
            >
              {dom}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">{d.titlu}</h1>
        <p className="max-w-3xl text-base text-zinc-600">{d.rezumat}</p>
      </header>

      <section>
        <SectionTitle>Ce înseamnă, pe înțelesul tuturor</SectionTitle>
        <div className="space-y-3 text-[15px] leading-relaxed text-zinc-700">
          {d.explicatie.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Balanța argumentelor</SectionTitle>
        <ProContra pro={d.pro} contra={d.contra} />
      </section>

      <section className="rounded-2xl border-2 border-blue-900 bg-white p-6">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-900">
          Votul guvernului paralel
        </h2>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <VotBadge vot={d.votParalel.vot} />
          <VerdictBadge verdict={d.votParalel.verdict} />
        </div>
        <div className="mb-5">
          <ScorBar scor={d.votParalel.scor} />
        </div>
        <p className="text-[15px] leading-relaxed text-zinc-700">{d.votParalel.motivare}</p>
      </section>

      <section className="rounded-2xl border border-zinc-300 bg-zinc-100 p-6">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-700">
          Ce s-a decis în realitate
        </h2>
        {d.votReal ? (
          <div className="space-y-2 text-[15px] leading-relaxed text-zinc-700">
            <p>
              <strong>Rezultat:</strong> {d.votReal.rezultat}
            </p>
            {d.votReal.detalii && (
              <p>
                <strong>Detalii vot:</strong> {d.votReal.detalii}
              </p>
            )}
            {d.votReal.pePartide && (
              <p>
                <strong>Pe partide:</strong> {d.votReal.pePartide}
              </p>
            )}
          </div>
        ) : (
          <p className="text-[15px] text-zinc-600">
            Nu există încă un vot/decizie finală — urmărim procesul și actualizăm.
          </p>
        )}
        <div className="mt-4">
          <AliniereBadge aliniere={d.aliniere} />
        </div>
      </section>

      <section className="rounded-2xl bg-blue-950 p-6 text-white">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
          Verdictul final
        </h2>
        <p className="text-[15px] leading-relaxed text-blue-50">{d.verdictFinal}</p>
      </section>

      {d.controverse && d.controverse.length > 0 && (
        <section>
          <SectionTitle>Controverse</SectionTitle>
          <ul className="space-y-2.5">
            {d.controverse.map((c, i) => (
              <li
                key={i}
                className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-zinc-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Surse surse={d.surse} />
    </article>
  );
}
