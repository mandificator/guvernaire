import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Invitatie } from "@/components/invitatie";
import { DataOra } from "@/components/data-ora";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guvernare.online"),
  title: {
    default: "guvernare.online — Guvernul paralel al cetățeanului",
    template: "%s · guvernare.online",
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
  manifest: "/manifest.json",
  icons: { icon: "/icon.svg" },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://guvernare.online",
    siteName: "guvernare.online",
    title: "guvernare.online — Guvernul paralel al cetățeanului",
    description:
      "Fiecare lege, explicată și votată în interesul tău — apoi comparată cu votul real din Parlament.",
  },
  twitter: {
    card: "summary",
    title: "guvernare.online — Guvernul paralel al cetățeanului",
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
  { href: "/guvern", label: "Guvernul României" },
  { href: "/metodologie", label: "Metodologie" },
  { href: "/despre", label: "Despre" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <header className="border-b-2 border-zinc-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between border-b border-zinc-200 py-1.5 text-[11px] text-zinc-500">
              <DataOra />
              <div className="flex items-center gap-4">
                <span>Actualizat zilnic la 20:00</span>
                <a href="/feed.xml" className="font-semibold text-blue-800 hover:underline">
                  RSS
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 py-4 sm:py-5">
              <Link
                href="/"
                className="flex items-baseline gap-1 text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                <span className="text-blue-950">guvernare</span>
                <span className="rounded bg-blue-950 px-1.5 py-0.5 text-lg font-black text-yellow-400 sm:text-xl">
                  .online
                </span>
              </Link>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                Guvernul paralel al cetățeanului
              </p>
            </div>
            <nav className="-mx-4 flex justify-start gap-0 overflow-x-auto border-t border-zinc-200 px-4 sm:justify-center">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="shrink-0 px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider text-zinc-700 hover:bg-zinc-50 hover:text-blue-900 sm:text-[13px]"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:py-8">{children}</main>
        <footer className="mt-8 border-t-2 border-zinc-900 bg-zinc-50">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed text-zinc-500">
            <Invitatie />
            <p className="text-sm font-extrabold tracking-tight text-blue-950">
              guvernare.online <span className="font-normal text-zinc-400">·</span>{" "}
              <span className="font-normal text-zinc-500">
                fără partid, fără sponsor, fără simpatii
              </span>
            </p>
            <p>
              Proiect civic independent, asistat de AI. Nu este afiliat niciunui partid, guvern sau
              instituții. Analizele sunt opinii argumentate pe baza surselor citate, nu adevăruri
              oficiale — verificați întotdeauna sursele primare.
            </p>
            <p>
              Faptele provin din sursele oficiale ale statului: Monitorul Oficial, gov.ro, cdep.ro,
              senat.ro, presidency.ro, ccr.ro. Presa — de orice orientare — e citată doar pentru
              informație, nu pentru interpretări.{" "}
              <a href="/feed.xml" className="font-semibold text-blue-800 hover:underline">
                Abonare RSS
              </a>
            </p>
            <p className="border-t border-zinc-200 pt-2">
              <strong>guvernare.online</strong> este un proiect independent creat de{" "}
              <strong>Octavian Viorel</strong>, dedicat informării publice pe bază de fapte, fără
              etichete și fără părtinire. Contact:{" "}
              <a href="mailto:tavi@pukka.ro" className="font-semibold text-blue-800 hover:underline">
                tavi@pukka.ro
              </a>
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
