import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guvernaire.vercel.app"),
  title: {
    default: "guvernAIre — Guvernul paralel al cetățeanului",
    template: "%s · guvernAIre",
  },
  description:
    "Fiecare lege din România, explicată pe înțelesul tău: argumente pro și contra, votul guvernului paralel și comparația cu votul real din Parlament. Fapte din surse oficiale, zero simpatii politice.",
  keywords: [
    "legi România",
    "Parlament",
    "vot",
    "guvern",
    "analiză politică",
    "Monitorul Oficial",
    "decizii politice",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://guvernaire.vercel.app",
    siteName: "guvernAIre",
    title: "guvernAIre — Guvernul paralel al cetățeanului",
    description:
      "Fiecare lege, explicată și votată în interesul tău — apoi comparată cu votul real din Parlament.",
  },
  twitter: {
    card: "summary",
    title: "guvernAIre — Guvernul paralel al cetățeanului",
    description:
      "Fiecare lege, explicată și votată în interesul tău — apoi comparată cu votul real din Parlament.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#172554",
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
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-between py-2.5">
              <Link
                href="/"
                className="flex items-baseline gap-0.5 text-xl font-extrabold tracking-tight"
              >
                <span className="text-blue-900">guvern</span>
                <span className="rounded bg-blue-900 px-1.5 py-0.5 text-sm font-black text-yellow-400">
                  AI
                </span>
                <span className="text-blue-900">re</span>
              </Link>
              <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 sm:flex">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="hover:text-blue-900">
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
            <nav className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-2 sm:hidden">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="shrink-0 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-zinc-700 active:bg-blue-50"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:py-8">{children}</main>
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
