import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { actori, getActor } from "@/data/actori";
import { DataRo, SectionTitle, Surse } from "@/components/ui";
import { Portret } from "@/components/portret";
import type { StatusPromisiune } from "@/lib/types";

export function generateStaticParams() {
  return actori.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getActor(slug);
  return a ? { title: a.nume, description: a.rezumat } : {};
}

function StatusBadge({ status }: { status: StatusPromisiune }) {
  const cfg: Record<StatusPromisiune, string> = {
    livrat: "bg-emerald-100 text-emerald-800",
    "parțial": "bg-amber-100 text-amber-800",
    nelivrat: "bg-red-100 text-red-800",
    "în curs": "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-[11px] font-bold uppercase ${cfg[status]}`}>
      {status}
    </span>
  );
}

export default async function ActorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getActor(slug);
  if (!a) notFound();

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Link href="/actori" className="text-sm text-blue-700 hover:underline">
          ← toți actorii
        </Link>
        <div className="flex items-start gap-5">
          <Portret nume={a.nume} marime={104} />
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">{a.nume}</h1>
            <p className="text-sm text-zinc-500">
              {a.functie}
              {a.partid ? ` · ${a.partid}` : ""}
              {a.dinCand ? ` · din ${a.dinCand}` : ""}
            </p>
          </div>
        </div>
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-700">{a.rezumat}</p>
      </header>

      <section>
        <SectionTitle>Acțiuni recente</SectionTitle>
        <ul className="space-y-3">
          {a.actiuniRecente.map((act, i) => (
            <li key={i} className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-4">
              <div className="shrink-0 pt-0.5">
                <DataRo iso={act.data} />
              </div>
              <p className="text-sm leading-relaxed text-zinc-700">{act.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>Promisiuni vs fapte</SectionTitle>
        <ul className="space-y-3">
          {a.promisiuniVsFapte.map((p, i) => (
            <li key={i} className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <StatusBadge status={p.status} />
                <span className="text-sm font-semibold text-zinc-900">{p.promisiune}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">{p.detalii}</p>
            </li>
          ))}
        </ul>
      </section>

      {a.controverse.length > 0 && (
        <section>
          <SectionTitle>Controverse documentate</SectionTitle>
          <ul className="space-y-2.5">
            {a.controverse.map((c, i) => (
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

      <section>
        <SectionTitle>Poziționare pe temele mari</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {a.pozitionare.map((p, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-900">
                {p.tema}
              </div>
              <p className="text-sm leading-relaxed text-zinc-700">{p.pozitie}</p>
            </div>
          ))}
        </div>
      </section>

      <Surse surse={a.surse} />
    </article>
  );
}
