import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pozitiiGuvern, getPozitie } from "@/data/guvern";
import { SectionTitle, Surse } from "@/components/ui";
import { Portret } from "@/components/portret";
import type { CandidatGuvern } from "@/lib/types";

export function generateStaticParams() {
  return pozitiiGuvern.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPozitie(slug);
  return p
    ? {
        title: `${p.minister} — Guvernul României`,
        description: `5 candidați pentru poziția de ${p.minister}, cu argumente pro și contra: ${p.candidati.map((c) => c.nume).join(", ")}.`,
      }
    : {};
}

function CardCandidat({ c, propus }: { c: CandidatGuvern; propus: boolean }) {
  return (
    <article
      className={`rounded-2xl border bg-white p-5 sm:p-6 ${
        propus ? "border-blue-300 ring-2 ring-blue-100" : "border-zinc-200"
      }`}
    >
      <header className="mb-3 flex items-start gap-4">
        <Portret nume={c.nume} marime={76} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-xl font-bold text-zinc-900">{c.nume}</h3>
            {propus && (
              <span className="rounded-full bg-blue-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-400">
                Propunerea noastră
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-zinc-500">
            {c.partid} · {c.camera} · {c.functieActuala}
          </p>
        </div>
      </header>

      <div className="space-y-3 text-sm leading-relaxed text-zinc-700">
        <p>{c.profil}</p>
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
            Activitate parlamentară
          </div>
          <p className="text-sm leading-relaxed text-zinc-600">{c.activitate}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-800">
            Pro
          </h4>
          <ul className="space-y-2">
            {c.pro.map((x, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
                <span className="mt-0.5 shrink-0 text-emerald-600">＋</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-red-800">
            Contra
          </h4>
          <ul className="space-y-2">
            {c.contra.map((x, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
                <span className="mt-0.5 shrink-0 text-red-600">−</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <details className="group mt-3">
        <summary className="cursor-pointer select-none text-xs font-semibold text-blue-800 hover:underline">
          Sursele acestei fișe ({c.surse.length})
        </summary>
        <div className="mt-2">
          <Surse surse={c.surse} />
        </div>
      </details>
    </article>
  );
}

export default async function PozitiePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPozitie(slug);
  if (!p) notFound();

  const idx = pozitiiGuvern.findIndex((x) => x.slug === p.slug);
  const anterior = idx > 0 ? pozitiiGuvern[idx - 1] : null;
  const urmator = idx < pozitiiGuvern.length - 1 ? pozitiiGuvern[idx + 1] : null;

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Link href="/guvern" className="text-sm text-blue-700 hover:underline">
          ← tot guvernul propus
        </Link>
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          {p.minister}
        </h1>
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-700">{p.misiune}</p>
      </header>

      <section className="flex gap-5 rounded-xl border-l-4 border-blue-950 bg-blue-50/60 p-5">
        <Portret nume={p.propunere.nume} marime={104} />
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-900">
            Propunerea guvernului paralel
          </div>
          <div className="mt-1 font-serif text-2xl font-bold text-blue-950">
            {p.propunere.nume}
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-700">
            {p.propunere.motivare}
          </p>
        </div>
      </section>

      <section>
        <SectionTitle>Cei 5 candidați, cu argumente pro și contra</SectionTitle>
        <div className="space-y-5">
          {p.candidati.map((c) => (
            <CardCandidat key={c.nume} c={c} propus={c.nume === p.propunere.nume} />
          ))}
        </div>
      </section>

      <nav className="flex flex-wrap justify-between gap-3 border-t border-zinc-200 pt-4 text-sm">
        {anterior ? (
          <Link href={`/guvern/${anterior.slug}`} className="text-blue-800 hover:underline">
            ← {anterior.minister}
          </Link>
        ) : (
          <span />
        )}
        {urmator ? (
          <Link href={`/guvern/${urmator.slug}`} className="text-blue-800 hover:underline">
            {urmator.minister} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
