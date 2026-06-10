import type { Metadata } from "next";
import { deciziiSortate } from "@/data/decizii";
import {
  AliniereBadge,
  CardLink,
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
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold">Decizii & legi analizate</h1>
        <p className="mt-1 max-w-2xl text-sm text-zinc-600">
          Fiecare decizie e cântărită pe argumente, votată de guvernul paralel și comparată cu
          rezultatul real din instituții. Cele mai recente primele.
        </p>
      </header>
      <div className="space-y-4">
        {decizii.map((d) => (
          <CardLink key={d.slug} href={`/decizii/${d.slug}`}>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <InstitutieTag institutie={d.institutie} />
              <DataRo iso={d.data} />
              <VerdictBadge verdict={d.votParalel.verdict} />
              {d.domenii.map((dom) => (
                <span
                  key={dom}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
                >
                  {dom}
                </span>
              ))}
            </div>
            <h2 className="mb-1.5 text-base font-bold leading-snug sm:text-lg">{d.titlu}</h2>
            <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-zinc-600">{d.rezumat}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-xs text-zinc-500">Votul nostru:</span>
              <VotBadge vot={d.votParalel.vot} />
            </div>
            <div className="mt-2">
              <AliniereBadge aliniere={d.aliniere} />
            </div>
          </CardLink>
        ))}
      </div>
    </div>
  );
}
