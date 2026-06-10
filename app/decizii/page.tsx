import type { Metadata } from "next";
import Link from "next/link";
import { deciziiSortate } from "@/data/decizii";
import {
  AliniereBadge,
  DataRo,
  InstitutieTag,
  VerdictBadge,
  VotBadge,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Decizii & legi analizate",
  description:
    "Toate legile și deciziile analizate de guvernul paralel: argumente pro și contra, votul nostru și comparația cu votul real.",
};

export default function DeciziiPage() {
  const decizii = deciziiSortate();
  return (
    <div className="mx-auto max-w-3xl">
      <header className="border-b-2 border-zinc-900 pb-4">
        <h1 className="font-serif text-3xl font-bold tracking-tight">
          Decizii & legi analizate
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          Fiecare decizie e cântărită pe argumente, votată de guvernul paralel și comparată cu
          rezultatul real din instituții. Cele mai recente primele.
        </p>
      </header>
      <div className="divide-y divide-zinc-200">
        {decizii.map((d) => (
          <article key={d.slug} className="py-6">
            <div className="mb-2 flex flex-wrap items-center gap-2">
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
            <Link href={`/decizii/${d.slug}`} className="group">
              <h2 className="font-serif text-xl font-bold leading-snug text-zinc-900 group-hover:text-blue-900 sm:text-2xl">
                {d.titlu}
              </h2>
            </Link>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
              {d.rezumat}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-xs text-zinc-500">Votul nostru:</span>
              <VotBadge vot={d.votParalel.vot} />
              <VerdictBadge verdict={d.votParalel.verdict} />
            </div>
            <div className="mt-2">
              <AliniereBadge aliniere={d.aliniere} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
