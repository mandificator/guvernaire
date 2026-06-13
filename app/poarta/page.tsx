import type { Metadata } from "next";
import { Suspense } from "react";
import { PoartaForm } from "@/components/poarta-form";
import { Contor } from "@/components/contor";

export const metadata: Metadata = {
  title: "Acces prin recomandare",
  description:
    "guvernare.online nu e public. Se intră doar cu un cod de invitație primit de la un prieten.",
  robots: { index: false },
};

export default function PoartaPage() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 overflow-y-auto bg-blue-950 px-6 py-10">
      <div className="text-center">
        <div className="flex items-baseline justify-center gap-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-white">guvernare</span>
          <span className="rounded bg-yellow-400 px-1.5 py-0.5 text-lg font-black text-blue-950 sm:text-xl">
            .online
          </span>
        </div>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-blue-300">
          Guvernul paralel propus de inteligența artificială
        </p>
      </div>

      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-white sm:text-2xl">
          Aici se intră doar prin recomandare.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-blue-200">
          Fiecare lege din România — explicată, cântărită și votată fără părtinire, apoi comparată
          cu votul real din Parlament. Nu e public: fiecare cititor intră cu un cod primit de la
          un prieten și primește la rândul lui un cod pe care îl poate da mai departe —{" "}
          <strong className="text-yellow-400">valabil pentru exact 3 persoane</strong>.
        </p>
      </div>

      <Contor />

      <Suspense>
        <PoartaForm />
      </Suspense>

      <p className="max-w-md text-center text-xs leading-relaxed text-blue-400">
        N-ai cod? Întreabă-ți prietenii — cineva din jurul tău e deja înăuntru.
      </p>
    </div>
  );
}
