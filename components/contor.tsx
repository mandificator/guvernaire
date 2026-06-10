"use client";

import { useEffect, useState } from "react";

export function Contor() {
  const [numar, setNumar] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/cod", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.inauntru === "number") setNumar(d.inauntru);
      })
      .catch(() => {});
  }, []);

  if (numar === null) return null;

  return (
    <p className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-200">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span>
        <strong className="tabular-nums text-white">{numar}</strong> cetățeni sunt deja înăuntru
      </span>
    </p>
  );
}
