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
        <h1 className="font-serif text-3xl font-bold tracking-tight">Cum analizăm</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Reguli simple, aplicate la fel pentru fiecare decizie și fiecare actor — indiferent de partid.
        </p>
      </header>

      <section>
        <SectionTitle>1. Sursele: faptele vin de la stat, nu din presă</SectionTitle>
        <p className="mb-3 text-[15px] leading-relaxed text-zinc-700">
          <strong>Faptele</strong> — texte de lege, voturi, decizii, termene — provin exclusiv din
          sursele oficiale ale statului: Monitorul Oficial, cdep.ro și senat.ro (proiecte și voturi),
          gov.ro (hotărâri și ordonanțe), presidency.ro (decrete și comunicate), ccr.ro, avp.ro,
          Institutul Național de Statistică, Ministerul Finanțelor, instituțiile europene.
        </p>
        <p className="mb-3 text-[15px] leading-relaxed text-zinc-700">
          <strong>Presa</strong> — pe care o evităm ori de câte ori există document oficial — e
          folosită doar pentru informație, niciodată pentru interpretări: preluăm date, evenimente,
          cifre și declarații atribuite (cine, ce, când) — nu preluăm etichete, caracterizări,
          sondaje dintr-o singură sursă, „percepții" sau speculații despre motivele actorilor.
          Nu considerăm nicio redacție „independentă" din oficiu: când cităm presa, căutăm
          confirmarea aceleiași informații în surse cu orientări editoriale opuse și păstrăm doar
          ce e comun. Dacă o informație există doar într-o singură sursă de presă și nu are
          confirmare oficială, nu intră în analiză.
        </p>
        <p className="text-[15px] leading-relaxed text-zinc-700">
          Fiecare analiză listează sursele folosite — dacă o afirmație nu are sursă, nu intră în
          analiză.
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
          <li><strong>Zero simpatii sau antipatii politice</strong>: aceleași criterii, aplicate identic fiecărui actor, indiferent de partid. Nu avem candidați, nu avem adversari.</li>
          <li><strong>Fără etichete.</strong> Nu folosim categorii ideologice — „extremist", „suveranist", „pro-european", „populist" — pentru partide sau oameni. Nu există decât partide și oameni politici: ei propun, votează, declară; noi descriem acțiunile și le analizăm efectul. Calificările apar doar ca citate atribuite (cuvintele actorilor înșiși) sau ca fapte juridice din acte oficiale (o inculpare e un fapt, nu o etichetă).</li>
          <li><strong>În conflicte internaționale ținem o singură parte: a României.</strong> Nu judecăm actorii după simpatiile lor față de taberele unui război, ci strict după efectul acțiunilor lor asupra securității și intereselor României, așa cum sunt definite în documentele oficiale ale statului (Constituție, Strategia Națională de Apărare).</li>
          <li>Analizăm <strong>argumentele, nu autorii</strong>: o lege bună propusă de un partid pe care l-am criticat rămâne o lege bună, și invers.</li>
          <li><strong>Separăm faptele de judecăți</strong>: descrierile (ce s-a întâmplat, cine, când) sunt strict factuale și sursate oficial; judecățile noastre argumentate apar doar în secțiunile marcate ca atare — votul paralel, motivarea notei, verdictul final.</li>
          <li>Publicăm <strong>întotdeauna ambele coloane</strong> — pro și contra — chiar și când verdictul e clar.</li>
          <li><strong>Nu dăm note și nu facem clasamente de oameni politici</strong> — un top e tot o etichetă, doar cu cifre. Profilurile actorilor conțin exclusiv fapte documentate: voturi, decizii, promisiuni vs livrare, declarații atribuite. Concluziile le trage cititorul.</li>
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
