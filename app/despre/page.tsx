import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Despre",
  description: "Ce este guvernare.online și de ce există.",
};

export default function DesprePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-bold tracking-tight">Despre guvernare.online</h1>
      </header>

      <section className="space-y-3 text-[15px] leading-relaxed text-zinc-700">
        <p>
          <strong>guvernare.online</strong> este un guvern paralel: nu guvernează nimic, dar judecă tot.
          Pentru fiecare lege, ordonanță sau decizie majoră din România, citim sursele oficiale ale
          statului, punem în balanță ce câștigă și ce pierde țara și cetățeanul, și votăm
          transparent. Apoi comparăm votul nostru cu ce au decis în realitate Parlamentul, Guvernul
          sau Președinția. Presa, indiferent de orientare, e folosită doar pentru informație —
          niciodată pentru interpretări.
        </p>
        <p>
          Ideea e simplă: dacă există un punct de referință public, argumentat și constant — „cum ar
          arăta decizia luată strict în interes public?" — atunci distanța dintre acel punct și
          deciziile reale devine măsurabilă. Iar cetățeanul poate vedea, decizie cu decizie, cine
          lucrează pentru el și cine nu.
        </p>
      </section>

      <section>
        <SectionTitle>Ce găsești aici</SectionTitle>
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-700">
          <li>
            <Link href="/decizii" className="text-blue-700 hover:underline">Decizii & legi</Link> —
            analize cu explicații pe înțelesul tuturor, argumente pro/contra, votul nostru și
            comparația cu votul real.
          </li>
          <li>
            <Link href="/actori" className="text-blue-700 hover:underline">Actori politici</Link> —
            președinte, premier, lideri de partide: acțiuni, promisiuni vs fapte, controverse, notă
            de aliniere cu interesul public.
          </li>
          <li>
            <Link href="/metodologie" className="text-blue-700 hover:underline">Metodologie</Link> —
            regulile după care judecăm, identice pentru toți.
          </li>
        </ul>
      </section>

      <section>
        <SectionTitle>Transparență</SectionTitle>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          Proiectul e construit cu asistență AI, e open-source și fiecare analiză citează sursele.
          Nu primim bani de la partide, instituții sau grupuri de interese. Dacă găsești o eroare
          factuală, semnaleaz-o — corectăm public.
        </p>
      </section>
    </article>
  );
}
