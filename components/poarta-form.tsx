"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function PoartaForm() {
  const [cod, setCod] = useState("");
  const [stare, setStare] = useState<"idle" | "loading" | "ok">("idle");
  const [eroare, setEroare] = useState("");
  const [codNou, setCodNou] = useState("");
  const [copiat, setCopiat] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";

  async function trimite(e: React.FormEvent) {
    e.preventDefault();
    setEroare("");
    setStare("loading");
    try {
      const r = await fetch("/api/cod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cod }),
      });
      const data = await r.json();
      if (!r.ok) {
        setEroare(data.eroare || "Ceva n-a mers. Încearcă din nou.");
        setStare("idle");
        return;
      }
      setCodNou(data.cod);
      setStare("ok");
    } catch {
      setEroare("Eroare de rețea. Încearcă din nou.");
      setStare("idle");
    }
  }

  async function copiaza() {
    await navigator.clipboard.writeText(codNou);
    setCopiat(true);
    setTimeout(() => setCopiat(false), 2000);
  }

  const mesajShare = encodeURIComponent(
    `Te invit pe guvernare.online — fiecare lege din România, explicată și judecată fără părtinire. Intri doar cu cod de invitație. Codul meu (valabil pentru 3 persoane): ${codNou} → https://guvernare.online`
  );

  if (stare === "ok") {
    return (
      <div className="w-full max-w-md space-y-5 text-center">
        <p className="text-2xl font-bold text-white">Ești înăuntru. 🎉</p>
        <p className="text-sm leading-relaxed text-blue-200">
          Acesta e <strong className="text-white">codul tău de invitație</strong> — e valabil
          pentru exact <strong className="text-yellow-400">3 persoane</strong>. Dă-l mai departe
          prietenilor care merită să fie aici:
        </p>
        <div className="rounded-xl border-2 border-yellow-400 bg-blue-900 px-6 py-4 font-mono text-2xl font-bold tracking-widest text-yellow-400">
          {codNou}
        </div>
        <div className="flex flex-col gap-2.5">
          <button
            onClick={copiaza}
            className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 active:bg-blue-100"
          >
            {copiat ? "Copiat ✓" : "Copiază codul"}
          </button>
          <a
            href={`https://wa.me/?text=${mesajShare}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white active:bg-emerald-700"
          >
            Trimite pe WhatsApp
          </a>
          <button
            onClick={() => router.push(next)}
            className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-blue-950 active:bg-yellow-300"
          >
            Intră pe site →
          </button>
        </div>
        <p className="text-xs text-blue-300">
          Codul tău rămâne afișat și în josul site-ului, dacă vrei să-l trimiți mai târziu.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={trimite} className="w-full max-w-md space-y-4">
      <input
        type="text"
        value={cod}
        onChange={(e) => setCod(e.target.value)}
        placeholder="CODUL DE INVITAȚIE"
        autoFocus
        autoCapitalize="characters"
        autoComplete="off"
        className="w-full rounded-xl border-2 border-blue-700 bg-blue-900 px-5 py-4 text-center font-mono text-xl font-bold uppercase tracking-widest text-white placeholder:text-blue-400 focus:border-yellow-400 focus:outline-none"
      />
      {eroare && (
        <p className="rounded-lg bg-red-900/60 px-4 py-2.5 text-sm font-medium text-red-200">
          {eroare}
        </p>
      )}
      <button
        type="submit"
        disabled={stare === "loading" || cod.trim().length < 4}
        className="w-full rounded-xl bg-yellow-400 px-5 py-4 text-base font-bold text-blue-950 transition active:bg-yellow-300 disabled:opacity-40"
      >
        {stare === "loading" ? "Se verifică…" : "Deschide poarta"}
      </button>
    </form>
  );
}
