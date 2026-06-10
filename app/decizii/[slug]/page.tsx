import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { decizii, getDecizie } from "@/data/decizii";
import {
  AliniereBadge,
  DataRo,
  Glosar,
  InstitutieTag,
  ProContra,
  ScorBar,
  SectionTitle,
  Surse,
  VerdictBadge,
  VotBadge,
  VotCifre,
} from "@/components/ui";
import { ShareButton } from "@/components/share";

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AnalysisNewsArticle",
    headline: d.titlu,
    description: d.rezumat,
    datePublished: d.data,
    inLanguage: "ro",
    author: { "@type": "Organization", name: "guvernare.online" },
    publisher: { "@type": "Organization", name: "guvernare.online" },
    mainEntityOfPage: `https://guvernare.online/decizii/${d.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-3">
        <Link href="/decizii" className="text-sm font-semibold text-blue-800 hover:underline">
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
        <h1 className="font-serif text-[28px] font-bold leading-[1.15] tracking-tight sm:text-4xl">
          {d.titlu}
        </h1>
        <p className="font-serif text-[17px] leading-relaxed text-zinc-600 sm:text-lg">
          {d.rezumat}
        </p>
        <div className="flex items-center justify-between border-y border-zinc-200 py-2.5">
          <span className="text-xs text-zinc-500">Analiza guvernului paralel</span>
          <ShareButton title={d.titlu} path={`/decizii/${d.slug}`} />
        </div>
      </header>

      <section className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="border-t-4 border-blue-950 bg-zinc-50 p-3.5">
          <div className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-950">
            Votul nostru
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <VotBadge vot={d.votParalel.vot} />
            <span className="text-sm font-semibold text-zinc-700">
              scor {d.votParalel.scor > 0 ? `+${d.votParalel.scor}` : d.votParalel.scor}
            </span>
          </div>
        </div>
        <div className="border-t-4 border-zinc-400 bg-zinc-50 p-3.5">
          <div className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            Decizia reală
          </div>
          <div className="text-sm font-semibold leading-snug text-zinc-800">
            {d.votReal ? d.votReal.rezultat.split(".")[0] : "În așteptare"}
          </div>
        </div>
        <div className="border-t-4 border-zinc-200 bg-zinc-50 p-3.5">
          <div className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            Comparația
          </div>
          <AliniereBadge aliniere={d.aliniere} />
        </div>
      </section>

      <section>
        <SectionTitle>Ce înseamnă, pe înțelesul tuturor</SectionTitle>
        <div className="space-y-4 font-serif text-[17px] leading-[1.7] text-zinc-800">
          {d.explicatie.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Balanța argumentelor</SectionTitle>
        <ProContra pro={d.pro} contra={d.contra} />
      </section>

      <section className="border-2 border-blue-950 bg-white p-5 sm:p-6">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue-950">
          Votul guvernului paralel
        </h2>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <VotBadge vot={d.votParalel.vot} />
          <VerdictBadge verdict={d.votParalel.verdict} />
        </div>
        <div className="mb-5">
          <ScorBar scor={d.votParalel.scor} />
        </div>
        <p className="font-serif text-[16px] leading-[1.7] text-zinc-800">
          {d.votParalel.motivare}
        </p>
      </section>

      <section className="border-2 border-zinc-300 bg-zinc-50 p-5 sm:p-6">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-zinc-700">
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
            {d.votReal.cifre && <VotCifre cifre={d.votReal.cifre} />}
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

      <section className="bg-blue-950 p-5 text-white sm:p-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-yellow-400">
          Verdictul final
        </h2>
        <p className="font-serif text-[16px] leading-[1.7] text-blue-50">{d.verdictFinal}</p>
      </section>

      {d.controverse && d.controverse.length > 0 && (
        <section>
          <SectionTitle>Controverse</SectionTitle>
          <ul className="space-y-2.5">
            {d.controverse.map((c, i) => (
              <li
                key={i}
                className="border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-relaxed text-zinc-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Glosar />

      <Surse surse={d.surse} />

      <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
        <Link href="/decizii" className="text-sm font-semibold text-blue-800 hover:underline">
          ← toate deciziile
        </Link>
        <ShareButton title={d.titlu} path={`/decizii/${d.slug}`} />
      </div>
    </article>
  );
}
