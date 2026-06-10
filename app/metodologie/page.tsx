import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Metodologie",
  description:
    "Cum analizează guvernul paralel fiecare decizie: surse, criterii, garanții anti-bias.",
};

export default function MetodologiePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header>
        <h1 className="text-2xl font-extrabold">Cum analizăm</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Reguli simple, aplicate la fel pentru fiecare decizie și fiecare actor — indiferent de partid.
        </p>
      </header>

      <section>
        <SectionTitle>1. Sursele</SectionTitle>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          Pornim întotdeauna de la documentele oficiale: proiectele de lege și voturile de pe cdep.ro
          și senat.ro, hotărârile și ordonanțele de pe gov.ro, comunicatele Administrației Prezidențiale,
          Monitorul Oficial. Completăm cu presă independentă (G4Media, HotNews, Europa Liberă, Recorder,
          Context.ro, Profit.ro/Economedia pentru economie) pentru context și reacții. Fiecare analiză
          listează sursele folosite — dacă o afirmație nu are sursă, nu intră în analiză.
        </p>
      </section>

      <section>
        <SectionTitle>2. Criteriile de vot</SectionTitle>
        <p className="mb-3 text-[15px] leading-relaxed text-zinc-700">
          Guvernul paralel votează fiecare decizie după un singur interes: al țării și al cetățeanului.
          Concret, cântărim:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-700">
          <li><strong>Impact asupra cetățeanului:</strong> venituri, taxe, servicii publice, drepturi.</li>
          <li><strong>Impact fiscal-bugetar:</strong> deficit, datorie, sustenabilitate pe termen lung.</li>
          <li><strong>Securitate și poziție externă:</strong> apărare, energie, ancorarea în UE și NATO.</li>
          <li><strong>Stat de drept:</strong> transparență, integritate, independența justiției.</li>
          <li><strong>Calitatea procesului:</strong> dezbatere reală sau adoptare pe repede-înainte, studii de impact, achiziții transparente.</li>
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-700">
          Rezultatul e un vot (pentru / contra / abținere), un verdict (favorabil / defavorabil / mixt)
          și un scor de impact de la −10 la +10, cu motivarea publică.
        </p>
      </section>

      <section>
        <SectionTitle>3. Comparația cu realitatea</SectionTitle>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          După ce votăm, punem alături decizia reală: cum a votat Parlamentul (cu cifre și defalcare pe
          partide, când există), ce a decis Guvernul sau Președinția. Marcăm fiecare caz drept{" "}
          <em>aliniat</em>, <em>divergent</em> sau <em>parțial</em> — iar statisticile agregate apar pe
          prima pagină. Pentru deciziile de executiv fără vot parlamentar marcăm „fără vot".
        </p>
      </section>

      <section>
        <SectionTitle>4. Garanții anti-bias</SectionTitle>
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-700">
          <li>Analizăm <strong>argumentele, nu autorii</strong>: o lege bună propusă de un partid pe care l-am criticat rămâne o lege bună, și invers.</li>
          <li>Publicăm <strong>întotdeauna ambele coloane</strong> — pro și contra — chiar și când verdictul e clar.</li>
          <li>Nota actorilor politici se bazează pe <strong>fapte documentate</strong> (voturi, decizii, livrarea promisiunilor), nu pe declarații sau simpatii.</li>
          <li>Când datele lipsesc sau sunt contradictorii, <strong>spunem explicit</strong> și ne abținem în loc să ghicim.</li>
          <li>Analizele sunt generate cu asistență AI și pot conține erori — sursele citate permit oricui să verifice și să ne contrazică.</li>
        </ul>
      </section>

      <section>
        <SectionTitle>5. Limite</SectionTitle>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          Acest proiect nu este o instituție și nu pretinde adevăr absolut. Este un exercițiu de
          transparență: un punct de referință argumentat, față de care fiecare cetățean poate
          compara deciziile reale ale celor pe care i-a votat.
        </p>
      </section>
    </article>
  );
}
