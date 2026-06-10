import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "guvernAIre — Guvernul paralel al cetățeanului",
    template: "%s · guvernAIre",
  },
  description:
    "Un guvern paralel independent: analizăm fiecare lege și decizie din România, cântărim ce e bine pentru țară și cetățean, votăm în consecință și comparăm cu votul real din Parlament.",
};

const nav = [
  { href: "/decizii", label: "Decizii & legi" },
  { href: "/actori", label: "Actori politici" },
  { href: "/metodologie", label: "Metodologie" },
  { href: "/despre", label: "Despre" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900">
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-baseline gap-1 text-xl font-extrabold tracking-tight">
              <span className="text-blue-900">guvern</span>
              <span className="rounded bg-blue-900 px-1.5 py-0.5 text-sm font-black text-yellow-400">AI</span>
              <span className="text-blue-900">re</span>
            </Link>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-zinc-600">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-blue-900">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-5xl space-y-2 px-4 py-6 text-xs leading-relaxed text-zinc-500">
            <p>
              <strong>guvernAIre</strong> este un proiect civic independent, asistat de AI. Nu este afiliat
              niciunui partid, guvern sau instituții. Analizele sunt opinii argumentate pe baza surselor citate,
              nu adevăruri oficiale — verificați întotdeauna sursele primare.
            </p>
            <p>
              Faptele provin din sursele oficiale ale statului: Monitorul Oficial, gov.ro, cdep.ro,
              senat.ro, presidency.ro, ccr.ro. Presa — de orice orientare — e citată doar pentru
              informație, nu pentru interpretări.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
