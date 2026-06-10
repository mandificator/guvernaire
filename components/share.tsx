"use client";

import { useState } from "react";

export function ShareButton({ title, path }: { title: string; path: string }) {
  const [copiat, setCopiat] = useState(false);
  const url = `https://guvernare.online${path}`;

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // utilizatorul a anulat — nu facem nimic
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopiat(true);
      setTimeout(() => setCopiat(false), 2000);
    }
  }

  return (
    <button
      onClick={share}
      className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-900 active:bg-blue-100"
    >
      {copiat ? "Link copiat ✓" : "Trimite mai departe ↗"}
    </button>
  );
}
