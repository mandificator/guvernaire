"use client";

import { useEffect, useState } from "react";

export function Invitatie() {
  const [cod, setCod] = useState("");
  const [copiat, setCopiat] = useState(false);

  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)gv_cod=([^;]+)/);
    if (m) setCod(decodeURIComponent(m[1]));
  }, []);

  if (!cod) return null;

  async function copiaza() {
    const mesaj = `Te invit pe guvernare.online — fiecare lege din România, explicată și judecată fără părtinire. Intri doar cu cod de invitație. Codul meu (valabil pentru 3 persoane): ${cod} → https://guvernare.online`;
    await navigator.clipboard.writeText(mesaj);
    setCopiat(true);
    setTimeout(() => setCopiat(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
      <span className="text-xs text-zinc-600">
        Codul tău de invitație (3 locuri):{" "}
        <strong className="font-mono text-blue-950">{cod}</strong>
      </span>
      <button
        onClick={copiaza}
        className="rounded bg-blue-950 px-2.5 py-1 text-[11px] font-bold text-white active:bg-blue-800"
      >
        {copiat ? "Copiat ✓" : "Copiază invitația"}
      </button>
    </div>
  );
}
