import Link from "next/link";
import type { Aliniere, Verdict, VotPozitie } from "@/lib/types";

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const styles: Record<Verdict, string> = {
    favorabil: "bg-emerald-100 text-emerald-800 border-emerald-300",
    defavorabil: "bg-red-100 text-red-800 border-red-300",
    mixt: "bg-amber-100 text-amber-800 border-amber-300",
  };
  const label: Record<Verdict, string> = {
    favorabil: "Favorabil țării",
    defavorabil: "Defavorabil țării",
    mixt: "Verdict mixt",
  };
  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${styles[verdict]}`}
    >
      {label[verdict]}
    </span>
  );
}

export function VotBadge({ vot }: { vot: VotPozitie }) {
  const styles: Record<VotPozitie, string> = {
    pentru: "bg-emerald-700 text-white",
    contra: "bg-red-700 text-white",
    abținere: "bg-zinc-500 text-white",
  };
  return (
    <span
      className={`inline-block rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${styles[vot]}`}
    >
      {vot}
    </span>
  );
}

export function AliniereBadge({ aliniere }: { aliniere: Aliniere }) {
  const cfg: Record<Aliniere, { cls: string; label: string }> = {
    aliniat: {
      cls: "bg-emerald-50 text-emerald-700 border-emerald-200",
      label: "✓ Decizia reală coincide cu votul nostru",
    },
    divergent: {
      cls: "bg-red-50 text-red-700 border-red-200",
      label: "✗ Decizia reală diverge de votul nostru",
    },
    parțial: {
      cls: "bg-amber-50 text-amber-700 border-amber-200",
      label: "≈ Aliniere parțială cu votul nostru",
    },
    "fără-vot": {
      cls: "bg-zinc-50 text-zinc-600 border-zinc-200",
      label: "— Fără vot parlamentar (decizie de executiv)",
    },
  };
  const c = cfg[aliniere];
  return (
    <span
      className={`inline-block rounded-md border px-3 py-1 text-xs font-medium ${c.cls}`}
    >
      {c.label}
    </span>
  );
}

export function ScorBar({ scor }: { scor: number }) {
  // scor: -10 .. +10
  const pct = ((scor + 10) / 20) * 100;
  const color =
    scor >= 3 ? "bg-emerald-600" : scor <= -3 ? "bg-red-600" : "bg-amber-500";
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs text-zinc-500">
        <span>Dăunător (−10)</span>
        <span className="font-semibold text-zinc-800">
          Scor impact: {scor > 0 ? `+${scor}` : scor}
        </span>
        <span>Benefic (+10)</span>
      </div>
      <div className="relative h-2.5 w-full rounded-full bg-zinc-200">
        <div className="absolute left-1/2 top-[-3px] h-4 w-px bg-zinc-400" />
        <div
          className={`absolute top-[-3px] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white shadow ${color}`}
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function NotaActor({ nota }: { nota: number }) {
  const color =
    nota >= 7
      ? "text-emerald-700 border-emerald-300 bg-emerald-50"
      : nota >= 5
        ? "text-amber-700 border-amber-300 bg-amber-50"
        : "text-red-700 border-red-300 bg-red-50";
  return (
    <div
      className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border ${color}`}
    >
      <span className="text-xl font-bold leading-none">{nota}</span>
      <span className="text-[9px] uppercase tracking-wide">/ 10</span>
    </div>
  );
}

export function ProContra({ pro, contra }: { pro: string[]; contra: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-800">
          Argumente pentru
        </h3>
        <ul className="space-y-2.5">
          {pro.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
              <span className="mt-0.5 shrink-0 text-emerald-600">＋</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-red-800">
          Argumente contra
        </h3>
        <ul className="space-y-2.5">
          {contra.map((c, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
              <span className="mt-0.5 shrink-0 text-red-600">−</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DOMENII_OFICIALE = [
  "gov.ro",
  "cdep.ro",
  "senat.ro",
  "presidency.ro",
  "ccr.ro",
  "avp.ro",
  "just.ro",
  "mapn.ro",
  "mai.gov.ro",
  "monitoruloficial.ro",
  "insse.ro",
  "europa.eu",
  "mae.ro",
];

function esteOficiala(url: string): boolean {
  try {
    const h = new URL(url).hostname;
    return DOMENII_OFICIALE.some((d) => h === d || h.endsWith("." + d));
  } catch {
    return false;
  }
}

function SursaLink({ s }: { s: { titlu: string; url: string } }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm leading-snug text-blue-800 underline-offset-2 hover:border-blue-300 hover:underline"
    >
      {s.titlu} ↗
    </a>
  );
}

export function Surse({ surse }: { surse: { titlu: string; url: string }[] }) {
  const oficiale = surse.filter((s) => esteOficiala(s.url));
  const presa = surse.filter((s) => !esteOficiala(s.url));
  return (
    <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
      {oficiale.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-600">
            <span className="rounded bg-blue-900 px-1.5 py-0.5 text-[10px] font-black text-white">
              OFICIAL
            </span>
            Surse oficiale de stat
          </h3>
          <div className="space-y-1.5">
            {oficiale.map((s, i) => (
              <SursaLink key={i} s={s} />
            ))}
          </div>
        </div>
      )}
      {presa.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-600">
            <span className="rounded bg-zinc-500 px-1.5 py-0.5 text-[10px] font-black text-white">
              PRESĂ
            </span>
            Citată doar pentru informație, nu pentru interpretări
          </h3>
          <div className="space-y-1.5">
            {presa.map((s, i) => (
              <SursaLink key={i} s={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-l-4 border-blue-800 pl-3 text-lg font-bold text-zinc-900">
      {children}
    </h2>
  );
}

export function InstitutieTag({ institutie }: { institutie: string }) {
  return (
    <span className="inline-block rounded bg-blue-900 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
      {institutie}
    </span>
  );
}

export function DataRo({ iso }: { iso: string }) {
  const d = new Date(iso + "T12:00:00");
  const luni = [
    "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
    "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
  ];
  return (
    <time dateTime={iso} className="text-sm text-zinc-500">
      {d.getDate()} {luni[d.getMonth()]} {d.getFullYear()}
    </time>
  );
}

export function CardLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
    >
      {children}
    </Link>
  );
}
