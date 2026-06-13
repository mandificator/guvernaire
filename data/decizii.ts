import type { Decizie } from "@/lib/types";

/**
 * Deciziile analizate de guvernul paralel.
 * Fiecare intrare e construită din surse oficiale și presă citată în `surse`.
 * Populat cu deciziile și legile majore din perioada martie–iunie 2026; se actualizează continuu.
 */
export const decizii: Decizie[] = [
  {
    slug: "programul-safe-imprumutul-de-16-miliarde",
    titlu:
      "Programul SAFE: împrumutul de 16,68 miliarde € pentru apărare și Autostrada Moldovei",
    data: "2026-05-26",
    institutie: "Parlament",
    domenii: ["apărare", "datorie publică", "infrastructură", "industrie"],
    rezumat:
      "România ia cel mai mare împrumut de apărare din istoria sa: 16,68 mld. € prin instrumentul european SAFE — bani pentru înzestrarea Armatei (~9,5 mld.), MAI (~2,8 mld.) și segmente din A7/A8 Autostrada Moldovei (~4,2 mld.). Condiții excepționale, execuție cu probleme serioase de transparență.",
    explicatie:
      "SAFE (Security Action for Europe) este un instrument al UE de 150 de miliarde de euro prin care Comisia Europeană se împrumută pe piețe cu ratingul ei AAA și dă mai departe banii statelor membre, pentru apărare. România a primit a doua cea mai mare alocare din UE după Polonia: 16,68 miliarde de euro — împrumut, nu fonduri nerambursabile, dar în condiții pe care România nu le-ar putea obține singură: maturitate de 45 de ani pe tranșă, 10 ani perioadă de grație și o dobândă raportată la circa 3% (față de peste 7% cât plătește statul român pe împrumuturile proprii pe termen lung).\n\nBanii merg către trei direcții: circa 9,5 miliarde € pentru înzestrarea Armatei (blindate Lynx asamblate la Mediaș, nave de patrulare construite la Mangalia, sisteme anti-dronă, muniție produsă 100% în țară), circa 2,8 miliarde € pentru MAI și alte structuri, și circa 4,2 miliarde € pentru segmente din autostrăzile A7/A8 — „Autostrada Moldovei” — încadrate ca infrastructură cu dublă utilizare (civilă și militară).\n\nCadrul legal a trecut prin OUG 62/2025 (aprobată prin Legea 4/2026), apoi OUG 21/2026 și OUG 38/2026. Acordul de împrumut a fost semnat pe 12 mai 2026 și contrasemnat de Comisia Europeană pe 21–22 mai. Până la termenul-limită de 30 mai, MApN a semnat 8 contracte de circa 6,6 miliarde € (fără TVA), dominate de un pachet de ~5,7 miliarde € cu grupul german Rheinmetall. Senatul a aprobat ordonanțele pe 26 mai 2026.",
    pro: [
      "Cost de finanțare excepțional: dobândă de circa 3%, maturitate de 45 de ani, 10 ani grație — condiții inaccesibile României (rating BBB-) pe piețele private; fiecare miliard împrumutat prin SAFE costă semnificativ mai puțin decât prin titluri de stat proprii.",
      "Nevoia de securitate e reală: România e stat de graniță NATO cu Ucraina, cu incursiuni repetate de drone în spațiul aerian și amenințare rusă persistentă la Marea Neagră; subînzestrarea Armatei e documentată de ani de zile.",
      "Conținut industrial local semnificativ: blindatele Lynx se asamblează la Mediaș (~40% local), navele la Șantierul Mangalia (55–60% local, șantier altfel muribund), muniția de 35mm se produce 100% în România — bani care creează locuri de muncă și capacitate industrială internă.",
      "Autostrada Moldovei (A7/A8) primește 4,2 miliarde € — singura sursă realistă de finanțare pentru aceste segmente în actualul context bugetar; infrastructura rămâne țării indiferent de evoluția militară.",
      "Finanțarea e asigurată multianual (până în 2030), scoțând înzestrarea armatei de sub presiunea negocierilor bugetare anuale.",
    ],
    contra: [
      "Este datorie publică: 16,68 miliarde € de rambursat până spre 2065–2070, într-o țară cu deficit deja excesiv; presiunea financiară devine semnificativă după 2035, când expiră perioada de grație.",
      "Fără licitații: majoritatea contractelor au fost atribuite prin „negociere fără publicare prealabilă”; producătorul italian Beretta a acuzat public „11 luni fără competiție reală” și pregătește litigiu.",
      "Transparență deficitară: lista de achiziții a fost discutată confidențial, votată doar în comisiile parlamentare (nu în plen); până și liderul PSD Sorin Grindeanu a declarat că a aflat de proiect cu câteva zile înainte, decizia fiind luată „la nivelul Cancelariei”.",
      "Comparativ, Polonia a direcționat ~90% din alocarea sa către industria proprie; România ajunge la maximum 40–50% conținut local, restul mergând către Rheinmetall (Germania), NVL, Airbus, IDV.",
      "Vicii de procedură în lanț: OUG 38/2026 a fost adoptată de guvernul Bolojan după demiterea sa prin moțiune de cenzură și publicată în varianta avizată negativ de Consiliul Legislativ; o „eroare de redactare” a schimbat 198 în 298 de blindate Lynx (~1 miliard € diferență); Rheinmetall a încercat o majorare de preț cu o treime înainte de semnare, respinsă de CSAT.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 4,
      motivare:
        "Pe fond, guvernul paralel votează PENTRU: amenințarea de securitate e reală, condițiile de finanțare sunt cele mai bune pe care România le poate obține (3% pe 45 de ani vs. peste 7% pe piață), iar pachetul aduce industrie locală și Autostrada Moldovei. A refuza SAFE ar fi însemnat să plătim mai scump aceleași achiziții, mai târziu, fără componenta de infrastructură. DAR votul nostru ar fi fost condiționat de ceea ce a lipsit flagrant: licitații competitive în loc de negocieri netransparente, vot în plenul Parlamentului pe lista de achiziții, studii de impact publice și un procent de conținut local negociat agresiv, după modelul polonez. Programul e bun; execuția lui a erodat încrederea exact acolo unde miza era maximă. De aici verdictul mixt și scorul moderat: +4, nu +8.",
    },
    votReal: {
      rezultat:
        "Adoptat. Senatul (cameră decizională) a aprobat pe 26 mai 2026 legile pentru OUG 21/2026 și OUG 38/2026; Camera Deputaților adoptase tacit. CCR a respins pe 4 iunie sesizarea AUR+SOS+PACE, declarând cadrul SAFE constituțional.",
      detalii:
        "OUG 21/2026: 69 pentru / 3 contra / 31 abțineri. OUG 38/2026: 71 pentru / 1 contra / 30 abțineri (cu eliminarea a 12 articole străine de SAFE, strecurate în ordonanță). Lista de proiecte MApN (8,33 mld. €) a primit doar raport favorabil în comisiile reunite de apărare (28 aprilie), fără vot în plen — opoziția s-a abținut.",
      pePartide:
        "PNL și USR — pentru, ferm. PSD — a votat legea dar a atacat procedura (Grindeanu a sesizat CCR pe OUG 38). AUR și SOS — contra/abținere, au sesizat CCR și Avocatul Poporului. Pozițiile POT și UDMR nu sunt documentate public în sursele consultate.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Parlamentul a decis în aceeași direcție cu votul guvernului paralel: programul SAFE merge înainte — și e bine pentru țară că merge. Dar alinierea e doar pe rezultat, nu pe proces. Ceea ce Parlamentul a tolerat — achiziții fără licitație, listă confidențială votată în comisii, o ordonanță emisă de un guvern deja demis — guvernul paralel nu ar fi tolerat. Dacă vulnerabilitățile procedurale semnalate de generali în rezervă, sindicate (BNS a sesizat OLAF) și economiști se materializează, SAFE poate aluneca din cea mai mare oportunitate de modernizare a apărării în cel mai mare scandal de achiziții al deceniului. Verdictul rămâne deschis pe execuție: contractele trebuie monitorizate public, contract cu contract.",
    controverse: [
      "Beretta acuză „11 luni fără competiție reală” și pregătește litigiu; BNS a anunțat sesizarea Comisiei Europene și a OLAF pe lipsa de transparență.",
      "OUG 38/2026 a fost adoptată în ședința din 4 mai dar publicată pe 8 mai — după demiterea guvernului Bolojan; Avocatul Poporului Renate Weber a numit-o „premieră de la 1991” și a sesizat CCR (sesizare amânată pentru 18 iunie 2026).",
      "Eroarea „de redactare” 198 → 298 blindate Lynx a modificat valoarea contractului cu circa 1 miliard de euro.",
    ],
    surse: [
      {
        titlu: "Gov.ro — Investiții de 16,68 mld. € prin programul european SAFE",
        url: "https://gov.ro/ro/stiri/investitii-pentru-romania-in-valoare-de-16-68-miliarde-de-euro-prin-programul-european-safe",
      },
      {
        titlu: "Comisia Europeană — primul val de planuri SAFE aprobate (include România)",
        url: "https://defence-industry-space.ec.europa.eu/commission-approves-first-wave-defence-funding-eight-member-states-under-safe-2026-01-15_en",
      },
      {
        titlu: "MApN — pagina oficială a programului SAFE",
        url: "https://www.mapn.ro/programul_safe/index.php",
      },
      {
        titlu: "HotNews — Armata a semnat mega-contractul SAFE cu Rheinmetall",
        url: "https://hotnews.ro/armata-a-semnat-mega-contractul-safe-de-aproape-6-miliarde-de-euro-cu-rheinmetall-blindate-de-lupta-tunuri-si-munitie-antiaeriana-nave-de-patrulare-construite-la-santierul-naval-mangalia-2259582",
      },
      {
        titlu: "Digi24 — OUG SAFE aprobată în Senat; măsurile eliminate de parlamentari",
        url: "https://www.digi24.ro/stiri/actualitate/politica/oug-privind-safe-adoptata-inainte-de-demiterea-guvernului-bolojan-a-fost-aprobata-in-senat-masurile-eliminate-de-parlamentari-3787055",
      },
      {
        titlu: "Mediafax — Comisia Europeană a semnat acordul SAFE cu România",
        url: "https://www.mediafax.ro/economic/comisia-europeana-a-semnat-acordul-safe-cu-romania-care-are-acum-acces-la-1668-miliarde-de-euro-pentru-aparare-si-infrastructura-strategica-23741369",
      },
      {
        titlu: "Agerpres — CCR: OUG privind programul SAFE, constituțională",
        url: "https://agerpres.ro/justitie/2026/06/04/ccr-oug-privind-instituirea-programului-safe---constitutionala--1562991",
      },
      {
        titlu: "G4Media — Miruță: „Nu vrem să mai tocăm banii armatei fără să rămână nimic în România”",
        url: "https://www.g4media.ro/radu-miruta-despre-contractul-safe-cu-producatorul-german-rheinmetall-nu-vrem-sa-mai-tocam-banii-armatei-fara-sa-ramana-nimic-in-romania.html",
      },
      {
        titlu: "Antena3 — Grindeanu acuză lipsa de transparență în programul SAFE",
        url: "https://www.antena3.ro/politica/grindeanu-acuza-lipsa-de-transparenta-in-programul-safe-am-aflat-de-el-luni-decizia-s-a-luat-la-nivelul-cancelariei-786474.html",
      },
      {
        titlu: "DCNews — BNS: vom sesiza Comisia Europeană și OLAF",
        url: "https://www.dcnews.ro/programul-safe-intre-lipsa-de-transparenta-si-vot-in-orb-dumitru-costin-bns-vom-sesiza-comisia-europeana-si-oficiul-european-de-lupta-antifrauda_1056072.html",
      },
      {
        titlu: "Transparență contracte SAFE companii de stat",
        url: "https://safe.companiidestat.ro/",
      },
    ],
  },
  {
    slug: "oug-38-adoptata-de-guvernul-demis",
    titlu:
      "OUG 38/2026: ordonanță adoptată de un guvern deja demis prin moțiune de cenzură",
    data: "2026-05-08",
    institutie: "Guvern",
    domenii: ["stat de drept", "apărare", "procedură constituțională"],
    rezumat:
      "Guvernul Bolojan a adoptat OUG 38/2026 (modificări la cadrul SAFE) în ședința din 4 mai, dar actul a fost publicat în Monitorul Oficial pe 8 mai — după demiterea guvernului prin moțiune de cenzură. Avocatul Poporului a numit situația „premieră de la 1991”.",
    explicatie:
      "Pe 5 mai 2026, guvernul Bolojan a fost demis prin moțiune de cenzură (281 de voturi pentru, inițiată de PSD și AUR, pe tema planului economic și a privatizărilor). Problema: OUG 38/2026, care modifica regulile programului SAFE ca să permită semnarea contractelor până pe 30 mai, fusese adoptată în ședința de guvern din 4 mai, dar a ajuns la Monitorul Oficial și a fost publicată abia pe 8 mai — când guvernul era deja demis și avea doar atribuții limitate de administrare curentă.\n\nMai grav, potrivit Avocatului Poporului, varianta trimisă spre publicare ar fi fost cea avizată negativ de Consiliul Legislativ. Renate Weber a calificat situația drept o premieră de la 1991: un guvern fără capacitate legală deplină care emite legislație primară. AUR, SOS și PACE au sesizat CCR (sesizare respinsă pe 4 iunie pe cadrul general SAFE), iar Sorin Grindeanu (PSD) și Avocatul Poporului au depus sesizări separate, distincte, pe OUG 38 — amânate de CCR pentru 18 iunie 2026.\n\nMiza practică era reală: fără OUG 38, contractele SAFE riscau să rateze termenul-limită de 30 mai impus de mecanismul european. Dar miza de principiu e și mai mare: dacă un guvern demis poate emite ordonanțe de urgență, cenzura parlamentară — singurul instrument constituțional prin care Parlamentul oprește un executiv — devine decorativă.",
    pro: [
      "Fără modificările din OUG 38, România risca să rateze termenul de 30 mai pentru semnarea contractelor SAFE, cu pierderi potențiale de miliarde în finanțare avantajoasă.",
      "Ordonanța fusese adoptată formal în ședința din 4 mai, înainte de căderea guvernului — întârzierea ar fi fost doar administrativă, în circuitul de publicare.",
      "Senatul a validat ulterior conținutul (71 pentru / 1 contra / 30 abțineri pe 26 mai), eliminând articolele problematice strecurate în text.",
    ],
    contra: [
      "Un guvern demis prin moțiune de cenzură nu mai are legitimitate politică pentru legislație primară; publicarea după demitere golește de sens controlul parlamentar.",
      "Varianta publicată ar fi fost cea avizată negativ de Consiliul Legislativ — un viciu de procedură suplimentar, semnalat de Avocatul Poporului.",
      "În ordonanță fuseseră strecurate 12 articole fără legătură cu SAFE (industria vinului, gaze, TVA) — practică tipică de „legiferare-tren” care ascunde interese particulare în acte urgente.",
      "Precedentul e periculos: validarea acestei practici ar permite oricărui guvern demis să legifereze „în prelungiri”.",
    ],
    votParalel: {
      vot: "contra",
      verdict: "defavorabil",
      scor: -5,
      motivare:
        "Guvernul paralel votează CONTRA — nu împotriva SAFE (pe care îl susținem pe fond), ci împotriva metodei. Statul de drept nu e un lux procedural: dacă acceptăm că un guvern demis poate publica ordonanțe de urgență, cu text avizat negativ de Consiliul Legislativ și cu articole străine strecurate înăuntru, am acceptat că regulile se suspendă ori de câte ori există o „urgență” suficient de bine vândută. Termenul de 30 mai putea fi gestionat altfel: publicare pe 4-5 mai înainte de moțiune, asumare de către guvernul interimar în limitele mandatului său, sau negociere politică transparentă cu noua majoritate. Scorul -5 reflectă dauna instituțională, parțial atenuată de faptul că Senatul a curățat ulterior textul.",
    },
    votReal: {
      rezultat:
        "Ordonanța a rămas în vigoare și a produs efecte (contractele SAFE au fost semnate până pe 30 mai). Senatul a aprobat-o pe 26 mai 2026, eliminând cele 12 articole străine de SAFE. Sesizările CCR ale lui Grindeanu și Avocatului Poporului au fost amânate pentru 18 iunie 2026 — rezultat în așteptare.",
      detalii: "Senat: 71 pentru / 1 contra / 30 abțineri.",
      cifre: { pentru: 71, contra: 1, abtineri: 30 },
      pePartide:
        "Coaliția pro-SAFE (PNL, USR) a susținut; PSD a votat conținutul dar a contestat procedura la CCR; AUR/SOS contra sau abținere.",
    },
    aliniere: "divergent",
    verdictFinal:
      "Aici votul guvernului paralel diverge de decizia reală. Parlamentul a ales pragmatismul: a validat ordonanța ca să nu pună în pericol contractele SAFE, mulțumindu-se să elimine articolele parazite. Înțelegem rațiunea, dar nu o împărtășim: scopul bun nu validează procedura proastă, iar costul real al acestui precedent se va vedea abia la următorul guvern demis care va decide să legifereze „în prelungiri”. Dacă CCR va admite sesizările Avocatului Poporului sau ale lui Grindeanu, poziția guvernului paralel va fi fost confirmată juridic; dacă le respinge, rămâne confirmată politic — un Parlament care își apără propriul instrument de control ar fi trebuit să reacționeze mai dur.",
    controverse: [
      "Avocatul Poporului Renate Weber: situație „premieră de la 1991” — un guvern fără capacitate legală deplină adoptă o ordonanță; sesizare depusă la CCR, amânată pentru 18 iunie 2026.",
      "Textul publicat în Monitorul Oficial ar fi cel avizat negativ de Consiliul Legislativ, nu varianta corectată.",
      "Cele 12 articole străine de SAFE (vin, gaze, TVA) strecurate în ordonanță au fost eliminate de Senat — dar nimeni nu a explicat public cine și de ce le-a introdus.",
    ],
    surse: [
      {
        titlu: "OUG 38/2026 — textul oficial (legislatie.just.ro, M.Of. 8 mai 2026)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/310375",
      },
      {
        titlu: "Avocatul Poporului — excepția de neconstituționalitate pe OUG 38/2026 (document oficial)",
        url: "https://avp.ro/wp-content/uploads/2026/05/EXCEPTIE_OUG-38-2026.pdf",
      },
      {
        titlu: "Antena3 — Avocatul Poporului a depus la CCR sesizarea pentru OUG 38",
        url: "https://www.antena3.ro/politica/avocatul-poporului-a-depus-la-ccr-sesizarea-pentru-oug-38-a-lui-bolojan-a-trimis-la-monitorul-oficial-un-text-avizat-negativ-787868.html",
      },
      {
        titlu: "Digi24 — CCR discută sesizarea lui Grindeanu privind programul SAFE",
        url: "https://www.digi24.ro/stiri/actualitate/politica/judecatorii-ccr-discuta-azi-sesizarea-lui-grindeanu-privind-programul-safe-bolojan-acuzat-ca-a-adoptat-oug-dupa-ce-a-fost-demis-3808791",
      },
      {
        titlu: "Agerpres — Moțiunea de cenzură adoptată cu 281 de voturi; guvernul Bolojan demis",
        url: "https://agerpres.ro/politic/2026/05/05/motiunea-de-cenzura---adoptata-de-parlament-cu-281-de-voturi-guvernul-bolojan-a-fost-demis--1553085",
      },
      {
        titlu: "AUR — sesizarea către Avocatul Poporului pe OUG 38/2026",
        url: "https://partidulaur.ro/aur-sesizeaza-avocatul-poporului-oug-38-2026-semnata-de-un-guvern-demis-este-un-act-vadit-neconstitutional/",
      },
      {
        titlu: "Ziare.com — Senatul aprobă ordonanțele SAFE (scoruri vot)",
        url: "https://m.ziare.com/amp/parlament/senat-safe-psd-pnl-2015027",
      },
    ],
  },
  {
    slug: "motiunea-de-cenzura-caderea-guvernului-bolojan",
    titlu: "Moțiunea de cenzură PSD–AUR: căderea guvernului Bolojan",
    data: "2026-05-05",
    institutie: "Parlament",
    domenii: ["guvernare", "criză politică", "economie"],
    rezumat:
      "Guvernul Bolojan a fost demis cu 281 de voturi — scorul record al unei moțiuni de cenzură în România. PSD, AUR, SOS, POT și grupul PACE au votat împreună, invocând „recesiunea tehnică” și planul de restructurare a companiilor de stat. România a intrat într-o criză politică fără majoritate alternativă.",
    explicatie:
      "Pe 20 aprilie 2026, PSD a votat intern retragerea sprijinului pentru guvernul Bolojan, invocând gestiunea economică și „recesiunea tehnică”; declanșatorul imediat a fost anunțul vicepremierului Oana Gheorghiu privind restructurarea companiilor de stat. Miniștrii PSD au demisionat pe 23 aprilie, iar pe 28 aprilie PSD, AUR, PACE și POT au depus moțiunea „STOP «Planul Bolojan»”, semnată de 254 de parlamentari.\n\nPe 5 mai, moțiunea a trecut cu 281 de voturi pentru și doar 4 împotrivă — PNL, USR și UDMR nu au participat la vot. Este cel mai mare scor din istoria moțiunilor de cenzură din România. Problema fundamentală: cei care au demis guvernul nu aveau o majoritate alternativă pregătită. PSD a exclus alianța cu AUR și guvernul minoritar; AUR a cerut anticipate; PNL și USR au exclus refacerea coaliției cu PSD. Rezultatul: guvern interimar cu atribuții limitate, într-un an cu deficit excesiv, inflație de peste 10% și război la graniță.\n\nBilanțul guvernului demis era el însuși mixt: deficitul a scăzut de la 9,3% (2024) la 7,65% din PIB (2025), cu buget 2026 țintit la 6,2% — dar prin TVA majorat la 21%, accize crescute, CASS pe pensii peste 3.000 lei și înghețarea pensiilor și salariilor, cu inflație de două cifre și creștere economică anemică drept consecințe.",
    pro: [
      "Costul social al austerității a fost real și distribuit inechitabil: inflație ~10,7%, pensii și salarii înghețate, putere de cumpărare în scădere — un guvern trebuie să răspundă politic pentru asta.",
      "Controlul parlamentar e singurul mecanism constituțional de sancționare a unui executiv; folosirea lui nu e ilegitimă în sine.",
      "Restructurarea companiilor de stat fusese anunțată fără dezbatere publică amplă și fără mandat politic explicit.",
    ],
    contra: [
      "Demiterea fără majoritate alternativă pregătită a aruncat țara într-o criză politică prelungită, exact în plin proces de corecție fiscală monitorizat de Comisia Europeană și agențiile de rating.",
      "PSD, AUR, SOS și POT au votat împreună moțiunea, deși conducerea PSD declarase anterior, public, că nu va colabora cu aceste partide — contradicție directă între declarație și vot.",
      "Moțiunea a fost depusă imediat după anunțul restructurării companiilor de stat — companii în care partidele semnatare dețin numeroase poziții de conducere numite politic.",
      "Corecția deficitului — singurul lucru care ținea România departe de retrogradarea rating-ului la „junk” — a rămas fără pilot politic.",
    ],
    votParalel: {
      vot: "contra",
      verdict: "defavorabil",
      scor: -6,
      motivare:
        "Guvernul paralel ar fi votat CONTRA moțiunii — nu din simpatie pentru guvernul Bolojan, căruia i-am taxat distribuția inechitabilă a austerității și derapajele procedurale (vezi analiza OUG 38), ci pentru un principiu elementar de responsabilitate: nu demiți un guvern în plină corecție de deficit dacă nu ai cu ce să-l înlocuiești. O moțiune fără majoritate alternativă nu e control parlamentar, e sabotaj instituțional cu costuri plătite de cetățean: leu sub presiune, dobânzi mai mari la datoria publică, investiții înghețate, o lună (și în continuare) fără guvern deplin funcțional. Scorul -6 reflectă dauna: criza politică prelungită anulează chiar și beneficiile legitime ale sancționării guvernului.",
    },
    votReal: {
      rezultat: "Moțiune adoptată — guvernul Bolojan demis pe 5 mai 2026.",
      detalii:
        "281 voturi pentru, 4 împotrivă, 3 anulate (necesar: 233). Cel mai mare scor al unei moțiuni de cenzură din istoria postdecembristă.",
      cifre: { pentru: 281, contra: 4, abtineri: 0 },
      pePartide:
        "Pentru: PSD (~129), AUR (~90), SOS, POT, grupul PACE, o parte din minorități. PNL, USR și UDMR nu au votat.",
    },
    aliniere: "divergent",
    verdictFinal:
      "Parlamentul a decis invers față de guvernul paralel, iar consecințele i-au dat dreptate votului nostru în doar o lună: niciun guvern nou la 10 iunie, un premier desemnat (Tomac) respins din start de toate partidele mari, presiune pe rating și pe leu, și un precedent toxic — OUG-uri emise de un guvern demis. Cine a votat moțiunea avea obligația să aibă o alternativă. Nu a avut-o. Costul acestei iresponsabilități colective se măsoară în dobânzile pe care le plătim toți.",
    controverse: [
      "PSD a votat alături de AUR, SOS și POT, în contradicție cu declarația anterioară a propriei conduceri că nu va colabora cu aceste partide.",
      "George Simion a acuzat PSD de „jaf de proporții gigantice” pe contractele SAFE chiar în ziua în care vota aceeași moțiune cu PSD.",
      "Moțiunea a invocat „înstrăinarea de active strategice”; programul guvernului anunța restructurarea managementului companiilor de stat.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială a moțiunii de cenzură (rezultat: adoptată, 281–4)",
        url: "https://www.cdep.ro/ords/pls/parlam/parlament.motiuni2015.detalii?leg=2024&cam=0&idm=1584",
      },
      {
        titlu: "Camera Deputaților — textul integral al moțiunii (PDF oficial)",
        url: "https://cdep.ro/motiuni/2026/1583.pdf",
      },
      {
        titlu: "Camera Deputaților — stenograma ședinței comune din 5 mai 2026",
        url: "https://www.cdep.ro/ords/pls/steno/steno2015.data?cam=0&dat=20260505&idl=1",
      },
      {
        titlu: "Agerpres — Moțiunea de cenzură adoptată cu 281 de voturi",
        url: "https://agerpres.ro/politic/2026/05/05/motiunea-de-cenzura---adoptata-de-parlament-cu-281-de-voturi-guvernul-bolojan-a-fost-demis--1553085",
      },
      {
        titlu: "HotNews — Ziua judecății pentru guvernul Bolojan: scenarii și calcule",
        url: "https://hotnews.ro/live-ziua-judecatii-pentru-guvernul-bolojan-in-parlament-ultimele-scenarii-si-calcule-inainte-de-votul-pe-motiunea-de-cenzura-psd-aur-din-aceasta-dimineata-2236630",
      },
      {
        titlu: "Recorder — PSD se leapădă de Bolojan (20 aprilie)",
        url: "https://recorder.ro/stirile-zilei/20-aprilie-2026-psd-se-leapada-de-bolojan/",
      },
      {
        titlu: "Euronews — Bilanțul guvernului Bolojan: austeritate, reforme și controverse",
        url: "https://www.euronews.ro/articole/bilantul-guvernului-bolojan-austeritate-reforme-si-controverse",
      },
    ],
  },
  {
    slug: "desemnarea-eugen-tomac-guvern-tehnic",
    titlu: "Desemnarea lui Eugen Tomac: pariul președintelui pe un „guvern tehnic”",
    data: "2026-06-04",
    institutie: "Președinție",
    domenii: ["guvernare", "criză politică"],
    rezumat:
      "La o lună după căderea guvernului Bolojan, Nicușor Dan l-a desemnat premier pe Eugen Tomac (PMP — partid neparlamentar), cu mandat de guvern tehnocrat. La depunerea listei, niciun partid mare nu își anunțase susținerea: PNL, USR, PSD și AUR au refuzat din start.",
    explicatie:
      "Pe 4 iunie 2026, președintele Nicușor Dan l-a desemnat premier pe Eugen Tomac, fost lider PMP (demisionat din fruntea partidului cu o zi înainte), argumentând că „singura soluție este un prim-ministru independent de partidele parlamentare”. Tomac a propus un cabinet de tehnocrați — printre nume: Sorin Costreie (Educație/vicepremier), Dan Neculăescu (Apărare), Luca Niculescu (Externe) — și a depus lista în Parlament pe 10 iunie, cu audieri pe 11 iunie și vot în jurul datei de 12 iunie.\n\nProblema aritmetică: are nevoie de 233 de voturi și nu are niciunul asigurat. PNL a anunțat că nu votează un guvern tehnocrat, USR l-a numit „paravan pentru ca PSD să exercite puterea”, PSD a refuzat („nu continuăm modelul falimentar Bolojan”), AUR cere anticipate, iar Kelemen Hunor (UDMR) a rezumat: „nu suntem masochiști politici”. Două respingeri consecutive ale unui premier desemnat deschid constituțional ușa dizolvării Parlamentului și alegerilor anticipate.",
    pro: [
      "Un premier fără apartenență la partidele mari poate, teoretic, media între tabere ireconciliabile (PSD vs PNL/USR) și depolitiza guvernarea pe durata crizei.",
      "Menține un semnal de stabilitate pentru piețe și Comisia Europeană într-un moment fiscal critic.",
      "Evită deocamdată alegerile anticipate, care ar prelungi paralizia decizională cu încă 3-4 luni.",
    ],
    contra: [
      "Desemnarea s-a făcut fără un acord politic prealabil — premierul desemnat nu avea nicio majoritate conturată, ceea ce făcea eșecul previzibil și prelungește criza.",
      "Legitimitate democratică slabă: PMP nu a intrat în Parlament; un guvern tehnocrat are responsabilitate politică difuză.",
      "Riscul real semnalat de USR: un guvern „tehnic” devine paravan pentru negocieri netransparente între partide, fără răspundere electorală.",
    ],
    votParalel: {
      vot: "abținere",
      verdict: "mixt",
      scor: -1,
      motivare:
        "Guvernul paralel se abține la învestitura unui guvern condus din afara Parlamentului fără majoritate negociată în prealabil. Intenția președintelui — deblocarea crizei fără anticipate — e legitimă, iar profilul tehnocrat al miniștrilor propuși nu e în sine un defect. Dar o desemnare fără aritmetică parlamentară confirmată e un gest politic, nu o soluție: consumă una dintre cele două încercări constituționale înainte de dizolvare și pierde încă două săptămâni în care România nu are guvern deplin. Soluția corectă era inversă: întâi majoritatea, apoi premierul. Scor -1: nu dăunează grav, dar nici nu rezolvă.",
    },
    votReal: {
      rezultat:
        "Decret de desemnare semnat pe 5 iunie; lista cabinetului depusă pe 10 iunie; audieri în comisii pe 11 iunie. Votul de învestitură, programat inițial pe 12 iunie, a fost amânat la aproximativ 16 iunie 2026. Pe 12 iunie, Comitetul Politic al USR a votat cu peste 90% să nu susțină investitura. PSD urmează să decidă în weekendul 14–15 iunie. Matematic, Tomac nu poate aduna 233 de voturi (maximum disponibil: 224) — în așteptare, rezultat previzibil: respins.",
      pePartide:
        "PNL — refuz unanim (BPN, 11 iunie): Bolojan a calificat formula drept „o formulă de paravan pentru a scuti PSD de răspundere”. USR — refuz oficial (Comitet Politic, 12 iunie, >90% majoritate): Fritz a declarat că un guvern tehnocrat ar fi „nefuncțional, pentru că nimeni nu răspunde cu adevărat de decizii” și a propus un guvern politic minoritar PNL+USR+UDMR. PSD — susținere condiționată (9 condiții), dar Grindeanu menține că PSD nu votează dacă PNL și USR nu o fac; decizie finală așteptată în weekend. AUR — refuz, cere anticipate. UDMR — nu susține, nu participă la vot. Scenariu post-Tomac discutat în PNL: guvern minoritar PNL+USR+UDMR la o a doua desemnare.",
    },
    aliniere: "fără-vot",
    controverse: [
      "Critici că viitorul cabinet ar include oameni PSD; a replicat că nu e cazul să fim mai catolici decât Papa.",
      "AUR a calificat desemnarea drept pericol pentru democrație; USR a afirmat că premierul tehnocrat ar fi paravan pentru ca PSD să exercite puterea.",
      "Pe 10 iunie, chiar în ziua depunerii listei, mandatele celor 6 miniștri interimari numiți de Bolojan în locul miniștrilor PSD au expirat (art. 107 din Constituție — maximum 45 de zile), creând o lacună de conducere la 6 ministere. Fostul judecător CCR Petre Lăzăroiu a declarat că Bolojan poate numi noi interimari; PSD contestă această interpretare. (Surse: Digi24, Stiripesurse, Adevarul, Ziare.com — 10 iunie 2026.)",
    ],
    verdictFinal:
      "Actualizare 11 iunie: PNL a votat unanim în BPN să nu susțină investitura, UDMR nu participă la vot, PSD nu votează fără PNL și USR — suma maximă a voturilor disponibile este de 224 față de 233 necesare. Costul desemnării fără majoritate asigurată — timp pierdut, presiune pe rating, paralizie administrativă — confirmă exact evaluarea guvernului paralel de la momentul desemnării. Mandatele a 6 miniștri interimari expiraseră pe 10 iunie, adâncind starea de limbo constituțional.\n\nActualizare 12 iunie: USR a votat oficial în Comitetul Politic (>90% majoritate) să nu susțină învestirea. Fritz a propus explicit un guvern politic minoritar PNL+USR+UDMR drept alternativă, ceea ce transformă eșecul Tomac dintr-o probabilitate într-o certitudine matematică. Votul de învestitură a fost amânat la aproximativ 16 iunie; PSD urmează să decidă în weekend, dar condiția proprie — „nu votăm fără PNL și USR” — e automat neîndeplinită. Prima din cele două încercări constituționale se consumă. A doua desemnare, cu o formulă mai credibilă aritmetic (PNL+USR+UDMR), devine scenariul cel mai probabil — cu prețul altor câteva săptămâni de vid guvernamental.",
    surse: [
      {
        titlu: "Presidency.ro — decretul de desemnare a lui Eugen Tomac (comunicat oficial, 5 iunie 2026)",
        url: "https://www.presidency.ro/ro/media/comunicate-de-presa/decret-semnat-de-presedintele-romaniei-nicusor-dan1780645277",
      },
      {
        titlu: "Presidency.ro — declarația președintelui la anunțul desemnării (4 iunie 2026)",
        url: "https://www.presidency.ro/ro/media/declaratii-de-presa/declaratia-de-presa-sustinuta-de-presedintele-romaniei-nicusor-dan-la-palatul-cotroceni1780587062",
      },
      {
        titlu: "Recorder — „Guvernul meu”, varianta Nicușor Dan: Tomac premier desemnat",
        url: "https://recorder.ro/stirile-zilei/4-iunie-2026-guvernul-meu-varianta-nicusor-dan-tomac-premier-desemnat/",
      },
      {
        titlu: "HotNews — Nicușor Dan a semnat decretul pentru desemnarea lui Eugen Tomac",
        url: "https://hotnews.ro/nicusor-dan-a-semnat-decretul-pentru-desemnarea-lui-eugen-tomac-2264679",
      },
      {
        titlu: "HotNews — Negocierile lui Tomac cu partidele (9 iunie)",
        url: "https://hotnews.ro/eugen-tomac-premier-desemnat-negocieri-partide-parlament-guvern-2268397",
      },
      {
        titlu: "Ziare.com — USR: premier tehnocrat, paravan pentru PSD",
        url: "https://ziare.com/criza-politica/usr-premier-tehnocrat-paravan-psd-putere-2012317",
      },
      {
        titlu: "G4Media — Ce urmează după desemnarea lui Eugen Tomac",
        url: "https://www.g4media.ro/ce-urmeaza-dupa-desemnarea-lui-eugen-tomac-pentru-postul-de-premier-cat-timp-are-ca-sa-formeze-guvernul-si-sa-ceara-votul-de-investitura-al-parlamentului.html",
      },
      {
        titlu: "TVR Info — PNL nu va susține învestirea Guvernului Tomac (decizie BPN unanimă, 11 iunie 2026)",
        url: "https://tvrinfo.ro/pnl-nu-va-sustine-investirea-guvernului-tomac-bolojan-un-guvern-fara-sustinere-politica-nu-poate-spera-decat-la-supravietuire/",
      },
      {
        titlu: "Digi24 — Șanse tot mai mici pentru Guvernul Tomac; PNL ia în calcul guvern cu USR și UDMR",
        url: "https://www.digi24.ro/stiri/actualitate/politica/sanse-tot-mai-mici-pentru-guvernul-tomac-ce-strategii-isi-fac-partidele-pnl-ia-in-calcul-guvern-cu-usr-si-udmr-surse-3810929",
      },
      {
        titlu: "HotNews — PNL a decis în unanimitate să nu susțină Guvernul Tomac",
        url: "https://hotnews.ro/sedinta-la-pnl-pentru-guvernul-tomac-liberalii-decid-daca-voteaza-guvernul-propus-2270450",
      },
      {
        titlu: "Digi24 — USR nu susține guvernul Tomac (decizie oficială CP, 12 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/usr-nu-sustine-guvernul-tomac-3812977",
      },
      {
        titlu: "CursDeGuvernare — USR a decis: nu votează Guvernul Tomac; Fritz propune guvern PNL+USR+UDMR",
        url: "https://cursdeguvernare.ro/usr-decis-nu-voteaza-guvernul-tomac.html",
      },
      {
        titlu: "ProTV — USR a anunțat oficial că nu votează guvernul Eugen Tomac",
        url: "https://stirileprotv.ro/stiri/politic/usr-a-decis-oficial-sa-nu-voteze-guvernul-lui-eugen-tomac-alternativa-pe-care-o-propune.html",
      },
    ],
  },
  {
    slug: "reforma-codului-de-procedura-penala",
    titlu: "Reforma Codului de procedură penală: procese mai scurte, ÎCCJ contestă la CCR",
    data: "2026-05-13",
    institutie: "Parlament",
    domenii: ["justiție", "stat de drept"],
    rezumat:
      "Parlamentul a adoptat aproape în unanimitate (284–1) o reformă care scurtează procesele penale: cameră preliminară eficientizată, termene mai strânse, citare doar la primul termen. 96 de judecători ai Înaltei Curți au atacat legea la CCR, invocând dreptul la apărare.",
    explicatie:
      "Legea (PL-x 228/2026) modifică Codul de procedură penală cu un scop declarat simplu: procese mai scurte. Camera preliminară — etapa în care se verifică legalitatea probelor și care durează uneori ani — primește reguli stricte de reunire și disjungere a cauzelor și termene mai scurte între ședințe. Părțile sunt citate doar la primul termen, apoi au obligația să-și urmărească singure dosarul. Deciziile camerei preliminare privind legalitatea probelor devin definitive.\n\nVotul a fost zdrobitor: 284 pentru, 1 contra, 2 abțineri în Camera Deputaților (13 mai), după 110–0 în Senat. Ambasada SUA a susținut public reforma („procesele pentru abuzuri asupra copiilor nu trebuie să dureze cât copilăria”).\n\nReplica a venit de la vârful magistraturii: cele 96 de judecători ai ÎCCJ (Secțiile Unite, instanță condusă de Lia Savonea) au sesizat CCR pe 22 mai, susținând că eliminarea citării dezavantajează persoanele vulnerabile, iar caracterul definitiv al deciziilor camerei preliminare ar împiedica instanța de fond să mai înlăture probe obținute ilegal. Decizia CCR era în așteptare la 10 iunie.",
    pro: [
      "Justiția întârziată e justiție refuzată: procesele penale românești durează ani, iar prescripția a îngropat dosare majore de corupție — scurtarea procedurilor atacă exact această problemă.",
      "Reducerea termenelor în camera preliminară elimină una dintre cele mai folosite tactici de tergiversare ale avocaților apărării în dosarele grele.",
      "Protecție sporită pentru victime, în special minori — argumentul susținut public și de Ambasada SUA.",
      "Consens politic transpartinic rar: 284–1 în Camera Deputaților.",
    ],
    contra: [
      "96 de judecători ai instanței supreme — oamenii care aplică zilnic aceste norme — avertizează că legea încalcă dreptul la apărare și la un proces echitabil.",
      "Citarea doar la primul termen poate lăsa persoane vulnerabile (vârstnici, persoane fără acces digital) fără apărare efectivă în propriul dosar.",
      "Caracterul definitiv al deciziilor camerei preliminare poate cimenta în proces probe obținute ilegal, dacă judecătorul de cameră preliminară greșește.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 3,
      motivare:
        "Guvernul paralel votează PENTRU: tergiversarea proceselor e una dintre cele mai adânci surse de neîncredere în justiția românească și un motor direct al impunității prin prescripție. Direcția legii e corectă și consensul politic e remarcabil. Dar obiecțiile celor 96 de judecători ÎCCJ nu sunt de ignorat — vin de la practicieni, nu de la politicieni — și vizează exact echilibrul dintre celeritate și dreptul la apărare. Votul nostru ar fi fost însoțit de corecții: păstrarea citării pentru persoanele fără reprezentare legală și o supapă de reexaminare a probelor în cazuri excepționale. Scor +3: câștig net probabil, cu riscuri reale care țin de calibrare, nu de principiu.",
    },
    votReal: {
      rezultat:
        "Adoptată de Parlament; atacată la CCR de ÎCCJ pe 22 mai 2026 — decizia CCR în așteptare la data analizei.",
      detalii:
        "Camera Deputaților (for decizional, 13 mai): 284 pentru / 1 contra / 2 abțineri. Senat (16 martie): 110 pentru / 0 contra / 3 abțineri.",
      cifre: { pentru: 284, contra: 1, abtineri: 2 },
      pePartide: "Susținere transpartinică cvasi-unanimă; defalcare pe partide nedisponibilă.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Parlamentul și guvernul paralel au votat la fel — caz rar de aliniere pe o temă de justiție. Conflictul instituțional care a urmat (Parlament + Ambasada SUA vs. Înalta Curte condusă de Lia Savonea) mută însă decizia finală la CCR. Poziția noastră: dacă CCR cere corecții punctuale pe citare și pe reexaminarea probelor, legea iese mai bună; o invalidare totală ar reînchide pe ani de zile singura fereastră de consens politic pentru accelerarea justiției penale.",
    controverse: [
      "Poziționarea publică a Ambasadei SUA de partea unei legi contestate de Curtea Supremă — situație diplomatică neobișnuită.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 228/2026 (parcurs legislativ)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23119",
      },
      {
        titlu: "Camera Deputaților — votul electronic din 13 mai 2026 (284–1–2)",
        url: "https://www.cdep.ro/ords/pls/steno/eVot.Data?dat=20260513&idl=1",
      },
      {
        titlu: "Agerpres — ÎCCJ sesizează CCR pe modificarea procedurii camerei preliminare",
        url: "https://agerpres.ro/justitie/2026/05/22/iccj-sesizeaza-ccr-in-legatura-cu-modificarea-legislatiei-penale-care-reglementeaza-procedura-de-cam--1559041",
      },
      {
        titlu: "G4Media — ÎCCJ: modificările la Codul de procedură penală sunt neconstituționale",
        url: "https://www.g4media.ro/inalta-curte-de-casatie-si-justitie-sesizeaza-curtea-constitutionala-modificarile-la-codul-de-procedura-penala-sunt-neconstitutionale.html",
      },
      {
        titlu: "Avocatnet — Reforma Codului de procedură penală a trecut de Parlament",
        url: "https://www.avocatnet.ro/articol_70769/Reforma-Codului-de-procedur%C4%83-penal%C4%83-a-trecut-de-Parlament-procese-mai-scurte-%C8%99i-protec%C8%9Bie-sporit%C4%83-pentru-victime.html",
      },
      {
        titlu: "Stiripesurse — Ambasada SUA susține reforma penală contestată de ÎCCJ",
        url: "https://www.stiripesurse.ro/ambasada-sua-sustine-reforma-penala-contestata-de-iccj-la-ccr_3891855",
      },
    ],
  },
  {
    slug: "legea-64-2026-concedii-medicale",
    titlu: "Legea 64/2026: prima zi de concediu medical neplătită și control pe certificate",
    data: "2026-05-15",
    institutie: "Parlament",
    domenii: ["sănătate", "social", "buget"],
    rezumat:
      "Legea menține prima zi de concediu medical neplătită (cu excepții), introduce un mecanism de control al certificatelor medicale și plafonează finanțarea medicinei de familie la nivelul din 2025 — în plină inflație de peste 10%. Combate frauda, dar lovește și bolnavii de bună-credință.",
    explicatie:
      "Legea 64/2026 (publicată pe 15 mai, aplicabilă de la 1 iunie) aprobă OUG 91/2025 privind măsuri în sănătate. Concret, pentru cetățean: prima zi de concediu medical rămâne, în general, neplătită — excepție fac, de exemplu, pacienții internați. Se introduce un mecanism de control: dacă un certificat medical a fost eliberat cu încălcarea legii, asiguratul pierde indemnizația. Medicii din ambulatoriile spitalelor pot lucra pe două contracte într-o normă și jumătate, iar finanțarea medicinei de familie se împarte 25% per capita / 75% per serviciu — plafonată însă la nivelul din 2025.\n\nLogica guvernamentală: frauda cu concedii medicale „fabricate” costă fondul de sănătate sute de milioane anual, iar prima zi neplătită descurajează concediile de complezență. Costul colateral: salariatul realmente bolnav pierde o zi de venit, iar medicina de familie — poarta de intrare în sistem — primește, în termeni reali, mai puțini bani decât anul trecut, cu inflație de peste 10%.",
    pro: [
      "Atacă o fraudă reală și endemică: concediile medicale de complezență, care costau FNUASS sute de milioane de lei anual.",
      "Mecanismul de control responsabilizează atât medicii care eliberează certificate nelegale, cât și beneficiarii.",
      "Plata preponderent per serviciu (75%) în medicina de familie stimulează consultațiile efective, nu listele pasive de pacienți.",
    ],
    contra: [
      "Prima zi neplătită penalizează nediferențiat și bolnavii de bună-credință — exact categoria pe care sistemul ar trebui să o protejeze; bolnavii vor veni la muncă, răspândind boli.",
      "Plafonarea fondurilor medicinei de familie la nivelul 2025, cu inflație de ~10%, e o tăiere reală mascată — în zona cea mai ieftină și mai eficientă a sistemului.",
      "Sarcina birocratică a controlului cade pe medici, într-un sistem deja subdimensionat ca personal.",
      "Avocatul Poporului a ridicat excepție de neconstituționalitate pe articolul II din OUG 91/2025 — semnal că măsura are și vicii juridice.",
    ],
    votParalel: {
      vot: "abținere",
      verdict: "mixt",
      scor: -1,
      motivare:
        "Guvernul paralel se abține. Jumătate din lege e corectă: controlul certificatelor frauduloase trebuia făcut de mult, iar reorientarea plății spre serviciu în medicina de familie e sănătoasă. Cealaltă jumătate transferă costul fraudei asupra bolnavului cinstit (prima zi neplătită) și taie în termeni reali finanțarea medicinei primare — penny wise, pound foolish: fiecare leu economisit la medicul de familie se întoarce înmulțit în spitalizări evitabile. Am fi votat pentru o variantă care păstra controlul anti-fraudă dar plătea prima zi pentru certificatele validate și indexa măcar cu inflația fondul medicinei de familie. Scor -1: economii bugetare mici, riscuri de sănătate publică reale.",
    },
    votReal: {
      rezultat:
        "Adoptată de Parlament, promulgată și publicată în Monitorul Oficial pe 15 mai 2026; în vigoare de la 1 iunie 2026.",
      detalii:
        "Camera Deputaților (PL-x 147/2026): 264 pentru / 14 contra / 3 abțineri; promulgată prin Decretul 267/2026.",
      cifre: { pentru: 264, contra: 14, abtineri: 3 },
    },
    aliniere: "parțial",
    verdictFinal:
      "Parlamentul a adoptat integral ce guvernul paralel ar fi adoptat doar pe jumătate. Componenta anti-fraudă ne găsește de aceeași parte; transferul costului pe pacientul corect și subfinanțarea reală a medicinei de familie, nu. Excepția de neconstituționalitate ridicată de Avocatul Poporului rămâne de urmărit — dacă va fi admisă, exact componentele punitive vor cădea primele.",
    controverse: [
      "Avocatul Poporului a ridicat excepție de neconstituționalitate pe articolul II din OUG 91/2025 (februarie 2026).",
      "Medicii de familie au avertizat că plafonarea la nivelul 2025, cu inflație de două cifre, înseamnă tăiere în termeni reali.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 147/2026 (vot 264–14–3, Decret 267/2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23048",
      },
      {
        titlu: "Legislatie.just.ro — Legea 64/2026 (text oficial)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/310545",
      },
      {
        titlu: "Contabun — Legea 64/2026: neplata primei zile de concediu medical și excepțiile",
        url: "https://www.contabun.ro/2026/05/18/legea-nr-642026-diminuarea-unei-singure-zile-pentru-concediile-medicale-in-continuare-si-exceptiile-de-la-neplata-primei-zile-de-concediu-medical/",
      },
      {
        titlu: "Juridice.ro — Mecanism de control al concediilor medicale",
        url: "https://www.juridice.ro/810879/mecanism-de-control-al-concediilor-medicale.html",
      },
      {
        titlu: "Avocatul Poporului — excepție de neconstituționalitate art. II OUG 91/2025",
        url: "https://avp.ro/wp-content/uploads/2026/02/Exc-art-II-OUG-91-2025.pdf",
      },
    ],
  },
  {
    slug: "prelungirea-plafonarii-adaosului-alimente",
    titlu: "Prelungirea plafonării adaosului comercial la alimentele de bază până la final de 2026",
    data: "2026-06-10",
    institutie: "Parlament",
    domenii: ["economie", "social", "prețuri"],
    rezumat:
      "Camera Deputaților a prelungit cu aproape unanimitate (292–1) plafonarea adaosului comercial la 17 categorii de alimente de bază până la 31 decembrie 2026. Măsura „temporară” din 2023 intră în al patrulea an, cu inflație alimentară încă peste 10%.",
    explicatie:
      "Plafonarea adaosului comercial la alimentele de bază — pâine, lapte, ouă, carne, legume etc., 17 categorii — funcționează din 2023 și expira pe 30 iunie 2026. Pe 10 iunie, Camera Deputaților (for decizional) a votat prelungirea până la 31 decembrie 2026, cu 292 de voturi pentru și unul singur împotrivă. Practic, supermarketurile nu pot aplica adaos comercial peste plafonul legal la aceste produse.\n\nContextul care explică cvasi-unanimitatea: inflație anuală de ~10,7% în aprilie 2026, pensii și salarii bugetare înghețate, putere de cumpărare în scădere — niciun partid nu își permite electoral să voteze contra „pâinii ieftine”. Criticii (procesatori, retaileri, economiști liberali) subliniază însă că o măsură anunțată ca temporară devine, prelungire după prelungire, cvasipermanentă, distorsionând lanțul agroalimentar: marjele comprimă prețurile plătite fermierilor și procesatorilor, iar investițiile în sector încetinesc.",
    pro: [
      "Protejează direct coșul zilnic al gospodăriilor sărace — cele care cheltuie peste jumătate din venit pe mâncare — în plină inflație de două cifre.",
      "Expirarea bruscă pe 30 iunie, în plin vid guvernamental, ar fi riscat scumpiri imediate la alimentele de bază.",
      "Măsura are termen clar (31 decembrie 2026), nu e permanentizată legal.",
    ],
    contra: [
      "Al patrulea an de „măsură temporară”: controlul prețurilor devine substitut pentru politici reale anti-inflație și anti-sărăcie (transferuri țintite, concurență în retail).",
      "Marjele comprimate se mută în amonte, spre procesatori și fermieri români — exact veriga pe care România ar trebui să o întărească.",
      "Distorsionează concurența și poate descuraja investițiile în retail și industria alimentară; vicepreședintele ANCMMR a numit-o „intervenție brutală într-o piață liberă”.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 2,
      motivare:
        "Guvernul paralel votează PENTRU această prelungire — dar pentru ultima dată fără condiții. Cu inflație alimentară de două cifre, venituri înghețate și fără guvern funcțional care să livreze alternative, a lăsa plafonarea să expire pe 30 iunie ar fi fost o lovitură directă în cei mai săraci. Realismul cere prelungirea. Dar votul nostru ar fi fost legat de o foaie de ieșire: până la 31 decembrie, înlocuirea plafonării cu sprijin țintit (tichete/transferuri pentru gospodăriile vulnerabile) și o anchetă reală a Consiliului Concurenței asupra marjelor din lanțul alimentar. Plafonarea tratează simptomul; al patrulea an de simptom netratat înseamnă că boala — lipsa concurenței și a politicilor sociale țintite — convine tuturor. Scor +2.",
    },
    votReal: {
      rezultat:
        "Adoptată de Camera Deputaților (for decizional) pe 10 iunie 2026 — formal, legea de aprobare a OUG 22/2026 (PL-x 340/2026); promulgată de președintele Nicușor Dan pe 11 iunie 2026.",
      detalii: "292 pentru / 1 contra / 1 abținere — susținere transpartinică cvasi-unanimă.",
      cifre: { pentru: 292, contra: 1, abtineri: 1 },
      pePartide: "Defalcare pe partide nedisponibilă; scorul indică vot comun al puterii și opoziției.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere între votul real și cel paralel — dar dintr-o unanimitate care ar trebui să dea de gândit: când 292 de parlamentari din toate taberele votează la fel, de regulă votează ce e popular, nu neapărat ce e suficient. Prelungirea era necesară; mulțumirea cu ea, nu. Dacă în decembrie 2026 plafonarea va fi prelungită a cincea oară, fără politici țintite construite între timp, vom vota contra.",
    controverse: [
      "Vicepreședintele ANCMMR: „intervenție brutală într-o piață liberă”; fermierii și procesatorii acuză transferul presiunii pe marjele lor.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 340/2026 (vot 292–1–1, 10 iunie 2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23223",
      },
      {
        titlu: "Camera Deputaților — votul electronic din 10 iunie 2026",
        url: "https://www.cdep.ro/ords/pls/steno/eVot.Data?dat=20260610&idl=1",
      },
      {
        titlu: "OUG 22/2026 — textul oficial (legislatie.just.ro, M.Of. 254/31.03.2026)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/308940",
      },
      {
        titlu: "HotNews — Plafonarea adaosului comercial, prelungită până la finalul anului",
        url: "https://hotnews.ro/plafonarea-adaosului-comercial-pentru-alimentele-de-baza-prelungita-pana-la-finalul-anului-ce-alimente-sunt-vizate-2269748",
      },
      {
        titlu: "Digi24 — Plafonarea adaosului la alimentele de bază, prelungită",
        url: "https://www.digi24.ro/stiri/economie/plafonarea-adaosului-comercial-la-alimentele-de-baza-a-fost-prelungita-pana-la-sfarsitul-anului-ce-produse-sunt-vizate-3808907",
      },
      {
        titlu: "CursDeGuvernare — Votul Camerei Deputaților pe prelungirea plafonării",
        url: "https://cursdeguvernare.ro/parlament-camera-deputatilor-vot-prelungire-plafonare-adaos-comercial-alimente-baza.html",
      },
      {
        titlu: "Stiripesurse — Criticile ANCMMR la prelungirea plafonării",
        url: "https://www.stiripesurse.ro/plafonarea-adaosului-la-alimente-criticata-vicepresedintele-ancmmr-o-numeste-interventie-brutala-intr-o-piata-libera_3893710",
      },
      {
        titlu: "Stiripesurse — Nicușor Dan a semnat decretul: plafonarea continuă și după 30 iunie (confirmare promulgare 11 iunie 2026)",
        url: "https://www.stiripesurse.ro/nicusor-dan-a-semnat-decretul-plafonarea-preturilor-la-alimentele-de-baza-continua-si-dupa-30-iunie-lista-completa-a-produselor-vizate_3889505",
      },
    ],
  },
  {
    slug: "legea-apararii-digitale-hacking-etic",
    titlu: "Legea apărării digitale: dezincriminarea „hackingului etic”",
    data: "2026-06-10",
    institutie: "Parlament",
    domenii: ["securitate cibernetică", "digitalizare"],
    rezumat:
      "Camera Deputaților a adoptat legea care elimină sancțiunile penale pentru cercetătorii de securitate care descoperă și raportează vulnerabilități (responsible disclosure) și obligă DNSC la un mecanism interinstituțional de alertare rapidă.",
    explicatie:
      "Până acum, un specialist IT care descoperea o vulnerabilitate într-un sistem informatic românesc și o raporta risca teoretic dosar penal pentru acces neautorizat — efect: vulnerabilitățile rămâneau neraportate sau ajungeau pe piața neagră. Legea adoptată pe 10 iunie (inițiată, între alții, de deputatul USR Cristina Prună) dezincriminează „hackingul etic”: activitatea de cercetare de securitate făcută cu bună-credință, urmată de raportarea responsabilă a vulnerabilității.\n\nÎn paralel, Directoratul Național de Securitate Cibernetică (DNSC) e obligat să colaboreze cu un comitet interinstituțional de alertare rapidă pentru incidentele cibernetice în desfășurare. Contextul face legea cu atât mai relevantă: România e ținta constantă a atacurilor cibernetice rusești, iar pe 5 iunie o dronă marină explodase în Portul Constanța — războiul hibrid nu mai e teorie.",
    pro: [
      "Aliniază România la practica internațională a divulgării responsabile (responsible disclosure), standard în UE și SUA.",
      "Mobilizează gratuit comunitatea de securitate cibernetică — una dintre cele mai competitive resurse umane ale României — în apărarea infrastructurii naționale.",
      "Mecanismul de alertare rapidă adresează o slăbiciune reală: reacția fragmentată a instituțiilor la incidente în desfășurare.",
    ],
    contra: [
      "Granița dintre cercetare „etică” și acces infracțional trebuie definită chirurgical în normele de aplicare — o formulare laxă poate deveni apărare juridică pentru atacatori reali.",
      "Fără proceduri clare de raportare și termene de remediere impuse instituțiilor, dezincriminarea singură nu garantează că vulnerabilitățile se și repară.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 6,
      motivare:
        "Guvernul paralel votează PENTRU fără ezitare. E o lege ieftină, modernă și cu efect de securitate națională real: transformă o comunitate întreagă de specialiști din potențiali inculpați în santinele voluntare. Riscul de abuz există, dar se gestionează prin norme de aplicare, nu prin menținerea unei incriminări care proteja, în practică, doar instituțiile neglijente de jena de a-și afla vulnerabilitățile. Scor +6 — una dintre puținele decizii curat pozitive ale perioadei.",
    },
    votReal: {
      rezultat:
        "Adoptată de Camera Deputaților pe 10 iunie 2026 (Pl-x 350/2026 — modifică OUG 155/2024 privind securitatea cibernetică și completează Codul penal).",
      detalii: "268 pentru / 11 contra / 4 abțineri.",
      cifre: { pentru: 268, contra: 11, abtineri: 4 },
    },
    aliniere: "aliniat",
    verdictFinal:
      "Vot real și vot paralel pe aceeași pagină. De urmărit normele de aplicare: definiția bunei-credințe, procedura de raportare și termenele de remediere vor decide dacă legea rămâne un model sau devine literă moartă. Un test bun: câte vulnerabilități raportate public în următoarele 12 luni.",
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială Pl-x 350/2026 (vot 268–11–4, 10 iunie 2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23237",
      },
      {
        titlu: "Camera Deputaților — votul electronic din 10 iunie 2026",
        url: "https://www.cdep.ro/ords/pls/steno/eVot.Data?dat=20260610&idl=1",
      },
      {
        titlu: "BURSA — Proiect de lege pentru consolidarea apărării digitale, adoptat",
        url: "https://www.bursa.ro/proiect-de-lege-pentru-consolidarea-apararii-digitale-a-romaniei-adoptat-de-parlament-67462953",
      },
    ],
  },
  {
    slug: "legea-statiilor-de-incarcare-ev",
    titlu: "Legea infrastructurii pentru combustibili alternativi: reguli unice la stațiile de încărcare EV",
    data: "2026-06-08",
    institutie: "Președinție",
    domenii: ["energie", "transport", "protecția consumatorului"],
    rezumat:
      "Promulgată pe 8 iunie (Decretul 317/2026 — devine Legea 89/2026): operatorii stațiilor de încărcare pentru mașini electrice trebuie să accepte plata fără abonament, să afișeze transparent prețurile și să se integreze într-un sistem digital unificat. Amenzi între 5.000 și 40.000 lei.",
    explicatie:
      "Legea implementează regulamentul european AFIR și rezolvă o problemă practică pe care o știe orice șofer de mașină electrică din România: jungla de aplicații, abonamente și tarife opace de la stațiile de încărcare. De acum, operatorii sunt obligați să permită plata directă, fără abonament sau contract prealabil, să afișeze transparent prețurile și să se integreze într-un sistem digital unificat. Ministerul Energiei coordonează, iar CNAIR răspunde de rețeaua de pe drumurile naționale și autostrăzi. Nerespectarea se sancționează cu amenzi între 5.000 și 40.000 lei.",
    pro: [
      "Elimină o barieră reală de adopție a mașinilor electrice: imposibilitatea de a încărca fără 5 aplicații și 3 abonamente.",
      "Transparența prețurilor permite concurență reală între operatori.",
      "Obligație europeană (AFIR) oricum scadentă — implementarea la timp evită infringement.",
    ],
    contra: [
      "Costurile de conformare ale operatorilor pot ajunge parțial în prețul la încărcare.",
      "Sancțiunile presupun capacitate reală de control — istoric, veriga slabă a implementărilor românești.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 5,
      motivare:
        "Vot PENTRU fără rezerve majore: protecția consumatorului, concurența și obligația europeană converg. O lege mică, dar din categoria celor care chiar schimbă viața de zi cu zi a unui număr crescând de cetățeni. Scor +5.",
    },
    votReal: {
      rezultat:
        "Adoptată de Parlament (PL-x 242/2026) și promulgată pe 8 iunie 2026 prin Decretul 317/2026 — devine Legea 89/2026.",
      detalii:
        "Vot final Camera Deputaților: 213 pentru / 0 contra / 20 abțineri (56 de deputați nu au votat).",
      cifre: { pentru: 213, contra: 0, abtineri: 20 },
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere completă. Testul real urmează la implementare: integrarea în sistemul digital unificat și controalele efective. De reverificat peste 6 luni dacă plata fără abonament funcționează la stațiile mari de pe autostrăzi.",
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 242/2026 (vot 213–0–20, Decret 317/2026, Legea 89/2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23138",
      },
      {
        titlu: "Presidency.ro — decretele semnate pe 8 iunie 2026 (include promulgarea legii AFIR)",
        url: "https://www.presidency.ro/ro/media/comunicate-de-presa/decrete-semnate-de-presedintele-romaniei-nicusor-dan1780916328",
      },
      {
        titlu: "Stiripesurse — Nicușor Dan a promulgat legea care schimbă regulile pentru mașinile electrice",
        url: "https://www.stiripesurse.ro/nicusor-dan-a-promulgat-legea-care-schimba-regulile-pentru-masinile-electrice-apar-obligatii-noi-investitii-majore-in-infrastructura-si-beneficii-pentru-soferi_3893510",
      },
    ],
  },
  {
    slug: "consiliul-nord-atlantic-drona-marea-neagra",
    titlu:
      "România convoacă Consiliul Nord-Atlantic: cerere NATO pentru scut anti-dronă la Marea Neagră",
    data: "2026-06-10",
    institutie: "Președinție",
    domenii: ["apărare", "securitate", "politică externă"],
    rezumat:
      "La cererea României, Consiliul Nord-Atlantic s-a întrunit de urgență pe 10 iunie la Bruxelles, după explozia unei drone marine în Portul Constanța (5 iunie). NATO a convenit accelerarea proiectelor anti-dronă pentru Flancul Estic; un pachet de măsuri urmează să fie aprobat la Summit-ul de la Ankara (7–8 iulie 2026).",
    explicatie:
      "Pe 5 iunie 2026, o dronă marină ucraineană a explodat în Portul Constanța, forțând evacuarea a peste 1.000 de turiști — al doilea incident similar în câteva săptămâni, după unul în largul Mării Negre lângă Galați. România, stat de graniță NATO fără sistem anti-dronă maritim complet operațional, a solicitat convocarea de urgență a Consiliului Nord-Atlantic (NAC) la Bruxelles.\n\nReuniunea din 10 iunie a fost convocată la solicitarea exclusivă a României și dedicată în întregime securității Mării Negre. Președintele Nicușor Dan a prezentat cererile concrete: radare de detecție a dronelor, sisteme de interceptare anti-dronă și aeronave suplimentare pentru poliția aeriană pe Flancul Estic. Aliații au exprimat solidaritate fermă, iar NAC a convenit accelerarea proiectelor dedicate acestor capabilități.\n\nLa Summit-ul NATO de la Ankara (7–8 iulie 2026) urmează să fie aprobat un pachet concret de măsuri de suport pentru aliații de pe Flancul Estic afectați de amenințările cu drone. Nicușor Dan a afirmat că s-a agreat accelerarea proiectelor NATO anti-dronă și că securitatea Mării Negre este esențială pentru România și Alianță.",
    pro: [
      "Incident real cu consecințe directe pentru cetățeni: o explozie în cel mai mare port al României nu e o amenințare abstractă — răspunsul diplomatic a fost rapid și a produs angajamente concrete.",
      "România a utilizat corect mecanismele de apărare colectivă ale Alianței: convocarea NAC e instrumentul prevăzut exact pentru astfel de situații.",
      "S-a obținut un angajament verificabil — pachetul de măsuri pentru Ankara, nu simple declarații de solidaritate.",
      "Mișcarea ancorează amenințarea din Marea Neagră pe agenda NATO permanentă, cu implicații pentru Neptun Deep, infrastructura energetică și comerțul naval.",
    ],
    contra: [
      "Livrarea rămâne de confirmat la Ankara: reuniunea NAC a convenit accelerarea proiectelor, nu capabilitățile în sine — decalajul între angajament și implementare poate fi mare.",
      "Sistemele anti-dronă solicitate necesită buget suplimentar sau redistribuire — detaliile financiare nu au fost comunicate public.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 7,
      motivare:
        "Guvernul paralel votează PENTRU această acțiune diplomatică fără rezerve. România are o vulnerabilitate de securitate reală și documentată — drone care explodează în portul civil principal al țării — și a folosit corect mecanismele colective ale NATO. Convocarea NAC este exact pentru ce România a intrat în Alianță, iar angajamentul de accelerare a proiectelor anti-dronă este un rezultat concret, nu o promisiune vagă. Livrarea reală a capabilităților rămâne de urmărit la Ankara și ulterior — de aceea nu dăm +9. Scor +7.",
    },
    votReal: {
      rezultat:
        "Consiliul Nord-Atlantic s-a întrunit pe 10 iunie 2026, la Bruxelles, la solicitarea României. S-a convenit accelerarea proiectelor NATO de răspuns la amenințările cu drone. Un pachet de măsuri de suport pentru aliații de pe Flancul Estic urmează să fie aprobat la Summit-ul NATO de la Ankara (7–8 iulie 2026).",
      detalii:
        "România a cerut radare de detecție a dronelor, sisteme anti-dronă și aeronave suplimentare pentru poliția aeriană. Aliații au exprimat solidaritate fermă cu România.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Acțiunea diplomatică și răspunsul NATO sunt aliniate cu votul paralel — unul dintre puținele dosare pozitive ale perioadei, alături de legea hackingului etic. Testul real este Summit-ul de la Ankara (7–8 iulie): dacă pachetul de capabilități anti-dronă pentru Flancul Estic va fi adoptat și finanțat, inițiativa din 10 iunie va fi produs rezultate concrete. Dacă va rămâne la declarații, va fi o formă de presiune necesară, dar insuficientă față de gravitatea amenințării. De urmărit public, contract cu contract și sistem cu sistem.",
    surse: [
      {
        titlu: "Presidency.ro — declarații de presă Nicușor Dan (pagina oficială)",
        url: "https://www.presidency.ro/ro/media/declaratii-de-presa",
      },
      {
        titlu: "Mediafax — Nicușor Dan: s-a convenit accelerarea proiectelor NATO anti-dronă",
        url: "https://www.mediafax.ro/politic/update-nicusor-dan-s-a-convenit-accelerarea-proiectelor-nato-privind-raspunsul-la-amenintarile-cu-drone-23752754",
      },
      {
        titlu: "CursDeGuvernare — Discuții la NATO: România cere radare, sisteme anti-dronă și aeronave pentru securitatea Mării Negre",
        url: "https://cursdeguvernare.ro/discutii-nato-sedinta-bruxelles-securitate-romania-marea-neagra-incidente-drona-flanc-est.html",
      },
      {
        titlu: "Bursa.ro — Reuniune NATO la Bruxelles pe tema securității Mării Negre (10.06.2026)",
        url: "https://www.bursa.ro/-reuniune-nato-la-bruxelles-pe-tema-securitatii-marii-negre-noi-masuri-impotriva-amenintarilor-cu-drone-84862954",
      },
      {
        titlu: "Stiripesurse — NATO se întrunește de urgență la cererea României după cazul dronei de la Constanța",
        url: "https://www.stiripesurse.ro/nato-se-intruneste-de-urgenta-la-cererea-romaniei-dupa-cazul-dronei-de-la-constanta_3893713",
      },
    ],
  },
  {
    slug: "bugetul-de-stat-2026",
    titlu: "Bugetul de stat pe 2026: deficit țintit 6,2%, adoptat după luni de așteptare",
    data: "2026-03-20",
    institutie: "Parlament",
    domenii: ["buget", "fiscal", "economie"],
    rezumat:
      "După luni de amânări, Parlamentul a adoptat bugetul pe 2026 în ședință comună, cu 319 voturi pentru și 104 contra. Deficitul țintit scade la 6,2% din PIB (de la 7,6% în 2025), cu investiții record finanțate preponderent din fonduri europene — dar construit pe o creștere economică de 1% pe care prognoza oficială a tăiat-o ulterior la 0,1%.",
    explicatie:
      "Pe 20 martie 2026, plenul reunit al Camerei Deputaților și Senatului a votat Legea bugetului de stat pe 2026 (Legea 43/2026, PL-x 184/2026) și Legea bugetului asigurărilor sociale (Legea 44/2026). Bugetul a fost adoptat de cabinetul Ilie Bolojan — același guvern care avea să cadă la moțiunea de cenzură din 5 mai. Președintele Nicușor Dan le-a promulgat pe 27 martie (Decretul 192/2026), după ce CCR respinsese, în unanimitate, sesizările AUR; publicate în Monitorul Oficial nr. 242/27 martie.\n\nCifrele-cheie (Ministerul Finanțelor): deficit cash de 6,2% din PIB (6,0% ESA), în scădere de la 7,6% cash / 7,8% ESA în 2025; investiții publice de ~163,8 miliarde lei (peste 8% din PIB), aproximativ două treimi din fonduri europene; apărare la ~2,45% din PIB; punctul de pensie înghețat la 81 lei, fără indexare; fără majorare de TVA. Construcția se sprijină pe o creștere economică asumată de 1% — pe care Comisia Națională de Strategie și Prognoză a revizuit-o ulterior, în primăvară, la doar 0,1%.",
    pro: [
      "Țara primește un buget după luni de incertitudine — alternativa (funcționare pe douăsprezecimi) bloca investițiile și absorbția de fonduri europene.",
      "Deficitul intră pe traiectorie descendentă (de la 7,8% ESA la 6,0%), pasul minim cerut de procedura de deficit excesiv și de evitarea retrogradării ratingului la „junk”.",
      "Investiții publice la nivel record (~163,8 mld lei), cu accent pe fondurile europene — singura sursă de creștere sustenabilă în condiții de consolidare fiscală.",
      "Fără majorare de TVA și fără tăieri nominale de pensii sau salarii, în pofida presiunii bugetare.",
    ],
    contra: [
      "Creșterea de 1% pe care e construit bugetul a fost tăiată la 0,1% de propria prognoză oficială (CNSP) — dacă PIB-ul real e mai mic, veniturile estimate nu se realizează și deficitul derapează.",
      "Corecția se bazează preponderent pe partea de cheltuieli, istoric greu de ținut în an electoral și de instabilitate politică.",
      "Punctul de pensie înghețat și salariile bugetare blocate, cu inflație de două cifre, înseamnă pierdere reală de putere de cumpărare pentru milioane de oameni.",
      "Un deficit de 6,2% rămâne printre cele mai mari din UE; Consiliul Fiscal a avizat bugetul, dar l-a numit fragil și a avertizat asupra colectării slabe a veniturilor.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 3,
      motivare:
        "Guvernul paralel votează PENTRU, dar fără entuziasm. Un buget care există e mai bun decât niciunul, iar traiectoria descendentă a deficitului (de la 7,8% spre 6%) e exact corecția pe care România trebuie s-o facă pentru a nu plăti dobânzi de criză și a nu fi retrogradată. Investițiile finanțate european sunt singurul motor real de creștere. DAR votul nostru ar fi fost condiționat de realism: bugetul e clădit pe o creștere de 1% pe care chiar prognoza oficială a coborât-o la 0,1% — adică pe venituri care riscă să nu apară. O construcție onestă ar fi pornit de la scenariul prudent al CNSP și ar fi protejat veniturile mici (punctul de pensie înghețat lovește exact gospodăriile vulnerabile). Scor +3: direcție corectă, ipoteze optimiste; testul e execuția, nu adoptarea.",
    },
    votReal: {
      rezultat:
        "Adoptat în ședință comună a Parlamentului pe 20 martie 2026; promulgat pe 27 martie (Decretul 192/2026), publicat în Monitorul Oficial nr. 242/27 martie. Bugetul asigurărilor sociale (Legea 44/2026) a fost votat în aceeași ședință.",
      detalii:
        "Bugetul de stat: 319 pentru / 104 contra / 1 abținere. Bugetul asigurărilor sociale: 314 / 105 / 12. CCR a respins în unanimitate sesizările AUR (26 martie).",
      cifre: { pentru: 319, contra: 104, abtineri: 1 },
      pePartide:
        "Coaliția de guvernare (PNL, PSD, USR, UDMR, minorități) a votat pentru; AUR, POT și SOS au votat contra. Defalcarea nominală nu e disponibilă public.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere între votul real și cel paralel pe necesitatea unui buget cu deficit descendent — divergență pe realismul ipotezelor. Bugetul a fost adoptat de guvernul Bolojan cu șase săptămâni înainte să cadă; execuția lui revine acum unui guvern interimar și, ulterior, unuia nou. Testul nu e cifra de pe hârtie (6,2%), ci dacă veniturile țin când creșterea reală e de 0,1%, nu de 1%. De urmărit rectificarea de la mijlocul anului.",
    controverse: [
      "AUR a sesizat CCR pe ambele legi ale bugetului, invocând procedura de urgență și ipoteze macroeconomice optimiste; sesizările au fost respinse în unanimitate pe 26 martie 2026.",
      "Consiliul Fiscal a avizat bugetul, dar cu avertismente: construcție fragilă, colectare slabă a veniturilor, dependență de corecția pe cheltuieli.",
      "CNSP a revizuit ulterior creșterea economică reală pentru 2026 de la 1% la ~0,1%, sub ipoteza pe care a fost clădit bugetul.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 184/2026 (bugetul de stat pe 2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=23109",
      },
      {
        titlu: "ANAF — textul oficial al Legii 43/2026 (bugetul de stat pe 2026, PDF)",
        url: "https://static.anaf.ro/static/10/Anaf/legislatie/L_43_2026.pdf",
      },
      {
        titlu: "Ministerul Finanțelor — Bugetul de stat pe 2026 (indicatori oficiali)",
        url: "https://mfinante.gov.ro/buget-2026",
      },
      {
        titlu: "CCR — comunicat: legile bugetului pe 2026, constituționale (26 martie 2026)",
        url: "https://www.ccr.ro/comunicat-de-presa-i-26-martie-2026/",
      },
      {
        titlu: "Mediafax — Bugetul de stat, adoptat cu 319 voturi pentru / 104 contra",
        url: "https://www.mediafax.ro/politic/news-alert-romania-are-buget-dupa-luni-de-asteptare-bugetul-de-stat-a-fost-votat-de-parlament-cu-319-voturi-pentru-104-impotriva-23706671",
      },
      {
        titlu: "Digi24 — Nicușor Dan a promulgat legea bugetului și pe cea a asigurărilor sociale pentru 2026",
        url: "https://www.digi24.ro/stiri/actualitate/politica/nicusor-dan-a-promulgat-legea-bugetului-si-cea-a-bugetului-asigurarilor-sociale-pentru-2026-3698767",
      },
      {
        titlu: "CursDeGuvernare — CNSP a revizuit în scădere creșterea economică pe 2026",
        url: "https://cursdeguvernare.ro/cnsp-prognoza-primvara-crestere-pib-real-inflatie-revizuire-negativa.html",
      },
    ],
  },
  {
    slug: "cadrul-fiscal-bugetar-plafoane-2026",
    titlu: "Noul cadru fiscal-bugetar: plafoane de cheltuieli și alinierea la regulile UE",
    data: "2026-03-19",
    institutie: "Parlament",
    domenii: ["fiscal", "buget", "UE"],
    rezumat:
      "Odată cu bugetul, Parlamentul a adoptat două legi care îi stabilesc cadrul: plafoanele fiscal-bugetare pe 2026 (Legea 42/2026) și modificarea Legii responsabilității fiscal-bugetare (Legea 45/2026), care aliniază regulile interne la cadrul de guvernanță economică al UE. Tehnic, dar acestea sunt gardurile de protecție ale finanțelor publice.",
    explicatie:
      "Pe 19 martie 2026, Camera Deputaților (for decizional) a adoptat două acte care însoțesc bugetul. Legea 42/2026 (plafoane, M.Of. 239/27 martie) fixează limitele anuale: sold bugetar de −6,2% din PIB în 2026 (−5,1% în 2027), cheltuieli de personal de 8,1% din PIB, datorie publică de ~62,5% din PIB la finalul anului — peste pragul de referință de 60%. Legea 45/2026 (M.Of. 248/30 martie, Decretul 194/2026) modifică Legea responsabilității fiscal-bugetare nr. 69/2010, transpunând Directiva (UE) 2024/1265 și raportarea la cadrul european revizuit: standarde de raportare ESA, regula datoriei peste 60%, regula cheltuielilor nete și un rol consolidat al Consiliului Fiscal (mecanism „comply or explain”).\n\nContext: România e în procedură de deficit excesiv din 2020, cu termen de corectare a deficitului în 2030, și a depus la Bruxelles un plan bugetar-structural pe termen mediu. Aceste două legi sunt pasul intern de aliniere (L69/2010) și de stabilire a plafoanelor anuale (L42/2026) în acest cadru.",
    pro: [
      "Aliniază România la regulile fiscale revizuite ale UE — condiție pentru credibilitate, acces la fonduri și ieșirea din procedura de deficit excesiv.",
      "Transformă în lege plafoane explicite (deficit, cheltuieli de personal, datorie), nu doar ținte declarative.",
      "Întărește rolul și transparența Consiliului Fiscal prin mecanismul „comply or explain”.",
    ],
    contra: [
      "Plafoanele consfințesc un deficit încă foarte mare (6,2%) și o datorie peste pragul de 60% din PIB — gardurile sunt așezate departe.",
      "Regulile contează doar dacă sunt respectate: România are un istoric de plafoane depășite și rectificate ulterior.",
      "Complexitatea tehnică reduce scrutinul public; dezbaterea parlamentară a fost limitată, votate în pachet cu bugetul.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 2,
      motivare:
        "Guvernul paralel votează PENTRU. Alinierea la cadrul de guvernanță economică al UE și plafoanele legale explicite sunt, în principiu, guvernare fiscală responsabilă — o ancoră de care România are nevoie. Dar valoarea unei reguli stă în aplicarea ei, nu în adoptare: am mai avut plafoane, depășite an de an și rectificate „tehnic”. Votul nostru e pentru arhitectură, cu rezerva că adevăratul test e dacă mecanismul „comply or explain” al Consiliului Fiscal va avea dinți sau va rămâne formal. Scor +2: cadru corect, credibilitate de demonstrat.",
    },
    votReal: {
      rezultat:
        "Adoptate de Camera Deputaților (for decizional) pe 19 martie 2026 și promulgate: Legea 42/2026 (plafoane, M.Of. 239/27 martie) și Legea 45/2026 (responsabilitate fiscal-bugetară, M.Of. 248/30 martie, Decretul 194/2026).",
      detalii:
        "Adoptate odată cu pachetul bugetar. Cifrele exacte ale votului nu sunt disponibile public din fișa oficială și nu le prezentăm până la confirmare.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere pe necesitatea unui cadru fiscal-bugetar coerent cu regulile UE. Divergența nu e pe text, ci pe încredere: plafoanele și regula cheltuielilor nete vor conta doar dacă vor fi respectate la rectificări și de către guvernele care urmează. De urmărit primul moment în care un guvern va fi tentat să le depășească — atunci se va vedea dacă legea e ancoră sau decor.",
    surse: [
      {
        titlu: "Guvernul României — actele adoptate în ședința din 5 martie 2026 (modificarea L69/2010)",
        url: "https://gov.ro/ro/guvernul/sedinte-guvern/informatie-de-presa-privind-actele-normative-adoptate-in-edinta-guvernului-romaniei-din-5-martie-2026",
      },
      {
        titlu: "Guvernul României — ședința extraordinară din 12 martie 2026 (plafoanele fiscal-bugetare)",
        url: "https://gov.ro/ro/guvernul/sedinte-guvern/informatie-de-presa-privind-actele-normative-adoptate-in-edinta-extraordinara-a-guvernului-romaniei-din-12-martie-2026",
      },
      {
        titlu: "AGERPRES — Camera Deputaților a adoptat plafoanele indicatorilor fiscal-bugetari (19 martie 2026)",
        url: "https://agerpres.ro/politic/2026/03/19/camera-deputatilor-au-fost-adoptate-plafoanele-unor-indicatori-specificati-in-cadrul-fiscal-bugetar---1539270",
      },
      {
        titlu: "Portal Legislativ — Legea responsabilității fiscal-bugetare nr. 69/2010 (acte modificatoare)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/118059",
      },
      {
        titlu: "Consiliul UE — revizuirea traiectoriei corective pentru România (procedura de deficit excesiv)",
        url: "https://www.consilium.europa.eu/en/press/press-releases/2025/07/08/stability-and-growth-pact-council-opens-new-excessive-deficit-procedure-for-austria-and-revises-the-corrective-path-for-romania/",
      },
    ],
  },
  {
    slug: "legea-femicidului-53-2026",
    titlu: "Legea femicidului: definiție în Codul penal și pedepse pentru omorul pe criteriu de gen",
    data: "2026-03-25",
    institutie: "Parlament",
    domenii: ["justiție", "drepturi", "social"],
    rezumat:
      "Parlamentul a adoptat, cu sprijin cvasi-unanim, prima lege care definește femicidul în legislația românească și completează Codul penal cu circumstanțe agravante pentru omorul comis pe criteriu de gen. Legea introduce și obligații de colectare standardizată a datelor. Promulgată pe 23 aprilie, în vigoare din 26 aprilie 2026.",
    explicatie:
      "Legea 53/2026 (Senat 2 februarie, Camera Deputaților ca for decizional pe 25 martie, promulgată 23 aprilie, M.Of. nr. 323) definește pentru prima dată femicidul — uciderea unei femei pe criteriu de gen — cu tipurile intim, non-intim și indirect. Concret, completează art. 189 din Codul penal (omor calificat) cu circumstanțe noi: omorul săvârșit pe criteriu de gen, ca urmare a refuzului victimei de a continua sau relua o relație, ori în context de control și dominație. Pedeapsa se situează pe palierul omorului calificat (15–25 de ani sau detențiune pe viață).\n\nDincolo de Codul penal, legea obligă poliția, parchetele și institutele medico-legale să colecteze și să raporteze anual date standardizate despre aceste crime, atribuie analiza lor unui mecanism de prevenție și prevede educație pentru egalitate de gen în școli. România a avut zeci de femei ucise anual de parteneri sau foști parteneri, fără ca fenomenul să fie numit ori măsurat unitar.",
    pro: [
      "Numește și măsoară un fenomen real și letal, până acum invizibil statistic — fără date standardizate, nicio politică de prevenție nu poate fi evaluată.",
      "Obligația de raportare anuală (poliție, parchete, INML) creează, prima dată, o bază de date publică pe care se pot construi măsuri.",
      "Consens transpartinic rar pe o temă de justiție penală — semn că problema e recunoscută dincolo de tabere.",
    ],
    contra: [
      "Omorul comis în aceste circumstanțe era deja, în multe cazuri, încadrabil la omor calificat — o parte dintre juriști atrag atenția asupra riscului de normă simbolică, suprapusă peste cea existentă.",
      "Eficacitatea reală depinde de resurse (ordine de protecție aplicate, adăposturi, psihologi, poliție instruită), nu de textul penal — iar acestea nu sunt garantate prin lege.",
      "Definițiile noi (femicid „indirect”) pot ridica probleme de aplicare și probatoriu în instanță.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 6,
      motivare:
        "Guvernul paralel votează PENTRU. O lege care numește o crimă reală și obligă statul să o măsoare e un câștig net: nu poți preveni ce nu numești și nu numeri. Componenta de date — raportare anuală standardizată de la poliție, parchete și medicină legală — e, de fapt, partea cea mai valoroasă, fiindcă pe ea se pot construi politici verificabile. Rezerva noastră nu e împotriva legii, ci o condiție pentru ca ea să nu rămână pe hârtie: protecția reală a victimelor se face cu ordine de protecție aplicate pe loc, adăposturi și psihologi, nu doar cu un articol în plus în Codul penal. Scor +6: direcție clar pozitivă, cu testul în implementare.",
    },
    votReal: {
      rezultat:
        "Adoptată de Senat pe 2 februarie 2026 și de Camera Deputaților (for decizional) pe 25 martie 2026; promulgată de președintele Nicușor Dan pe 23 aprilie 2026, publicată în Monitorul Oficial nr. 323; în vigoare din 26 aprilie 2026.",
      detalii:
        "Vot final cvasi-unanim în Camera Deputaților (relatări de presă: 284 pentru / 1 contra / 2 abțineri); cifrele oficiale pe camere rămân de confirmat în fișa cdep.ro (PL-x 42/2026).",
      cifre: { pentru: 284, contra: 1, abtineri: 2 },
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere între votul real și cel paralel, pe o temă unde consensul a fost aproape total. Valoarea legii nu se va vedea în textul ei, ci în statistica pe care o va produce și în resursele de protecție pe care le va atrage. Dacă peste un an vom avea date publice despre femicid dar nu și mai multe ordine de protecție aplicate și adăposturi, legea va fi rămas un gest, nu o soluție.",
    surse: [
      {
        titlu: "Juridice.ro — Legea nr. 53/2026 privind femicidul (text și conținut)",
        url: "https://www.juridice.ro/804794/legea-nr-53-2026-privind-femicidul.html",
      },
      {
        titlu: "G4Media — Legea pentru prevenirea și combaterea femicidului, publicată în Monitorul Oficial",
        url: "https://www.g4media.ro/legea-pentru-prevenirea-si-combaterea-femicidului-publicata-in-monitorul-oficial.html",
      },
      {
        titlu: "Europa FM — Legea femicidului, promulgată: definiție și pedepse",
        url: "https://www.europafm.ro/legea-femicidului-promulgata-definitie-pedepse-romania/",
      },
      {
        titlu: "Camera Deputaților — urmărirea procesului legislativ (PL-x 42/2026)",
        url: "https://www.cdep.ro/pls/proiecte/upl_pck2015.home",
      },
    ],
  },
  {
    slug: "legea-deseurilor-78-2026",
    titlu: "Legea deșeurilor: răspunderea extinsă a producătorului și țintele de reciclare, confirmate",
    data: "2026-04-29",
    institutie: "Parlament",
    domenii: ["mediu", "economie"],
    rezumat:
      "Camera Deputaților a aprobat, cu 215 voturi pentru și niciunul contra, legea care confirmă modificările la regimul deșeurilor: răspundere extinsă a producătorului, indicatori de prevenție și țintele europene de reciclare (55%/60%/65%). Modificări utile, dar preponderent procedurale — fără ambiție nouă pe fond. Promulgată pe 26 mai 2026.",
    explicatie:
      "Legea 78/2026 (PL-x 32/2024) aprobă OUG 114/2023, care modifică regimul deșeurilor (OUG 92/2021). Senatul o adoptase încă din februarie 2024; Camera Deputaților, for decizional, a votat-o pe 29 aprilie 2026, iar președintele a promulgat-o pe 26 mai (Decretul 293/2026, M.Of. nr. 445).\n\nConcret: introduce un dialog periodic obligatoriu în cadrul răspunderii extinse a producătorului (producători, distribuitori, operatori, autorități locale, ONG-uri, rețele de reparare și reutilizare); adaugă „pregătirea pentru reutilizare” ca operațiune; prevede că deșeurile trimise în alte state UE contează la țintele naționale doar dacă au fost colectate de pe teritoriul României (anti-eludare); și introduce indicatori de prevenție (Anexa 4¹). Țintele de reciclare a deșeurilor municipale — 55% în 2025, 60% în 2030, 65% în 2035 — sunt reafirmate, nu modificate. Sistemul Garanție-Returnare (RetuRO) nu e atins de această lege.",
    pro: [
      "Aliniază România la obligațiile europene de economie circulară și consolidează răspunderea producătorilor pentru ambalajele puse pe piață.",
      "Clauza care contează deșeurile exportate la țintele naționale doar dacă au fost colectate intern descurajează „umflarea” statistică a reciclării.",
      "Recunoaște explicit rețelele de reparare și reutilizare — veriga ieftină și ignorată a economiei circulare.",
    ],
    contra: [
      "Modificări preponderent procedurale: nu ridică țintele și nu schimbă sancțiunile — ambiție nouă redusă, într-o țară codașă la reciclarea municipală.",
      "Legea nu adaugă mecanisme reale de aplicare; problema României nu e textul, ci execuția — rata de reciclare stagnează sub țintă.",
      "Întârziere mare: o ordonanță din 2023 aprobată de Parlament abia în 2026.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 3,
      motivare:
        "Guvernul paralel votează PENTRU. E o lege fără controverse, care aliniază România la regulile europene de mediu și întărește răspunderea producătorului — corect și necesar. Dar e și o ocazie ratată: aprobă, cu trei ani întârziere, o ordonanță care reafirmă țintele fără să adauge ambiție sau dinți de aplicare. Problema reciclării în România nu e că lipsește legea, ci că rata reală stagnează mult sub țintă. Scor +3: pas înainte, dar mic, când era nevoie de un salt.",
    },
    votReal: {
      rezultat:
        "Adoptată de Senat pe 12 februarie 2024 și de Camera Deputaților (for decizional) pe 29 aprilie 2026; promulgată pe 26 mai 2026 (Decretul 293/2026), publicată în Monitorul Oficial nr. 445.",
      detalii:
        "Camera Deputaților: 215 pentru / 0 contra / 20 abțineri (fișa oficială cdep.ro, PL-x 32/2024).",
      cifre: { pentru: 215, contra: 0, abtineri: 20 },
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere între votul real și cel paralel — votul cvasi-unanim (215–0) confirmă că legea e necontroversată. Tocmai de aceea verdictul e temperat: alinierea la regulile UE e bună, dar adevăratul indicator nu e legea, ci rata de reciclare. De urmărit dacă România se apropie de ținta de 60% pentru 2030 sau rămâne, ca până acum, sub prag.",
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 32/2024 (vot 215–0–20, 29 aprilie 2026)",
        url: "https://cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=21494",
      },
      {
        titlu: "Portal Legislativ — OUG 114/2023 pentru modificarea regimului deșeurilor (OUG 92/2021)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/277397",
      },
      {
        titlu: "Juridice.ro — Decrete semnate de Președinte pe 26 mai 2026 (promulgarea legii deșeurilor)",
        url: "https://www.juridice.ro/831129/decrete-semnate-26-mai-2026.html",
      },
      {
        titlu: "AGERPRES — comunicat Administrația Prezidențială, 26 mai 2026",
        url: "https://agerpres.ro/comunicate/2026/05/26/comunicate-de-presa---administratia-prezidentiala--1560118",
      },
    ],
  },
  {
    slug: "legea-fondului-pentru-mediu-79-2026",
    titlu: "Fondul pentru mediu: mai puțină birocrație pentru primării — și finanțare pentru rețele de gaze",
    data: "2026-04-29",
    institutie: "Parlament",
    domenii: ["mediu", "buget", "administrație"],
    rezumat:
      "Camera Deputaților a aprobat, cu 219 voturi pentru și niciunul contra, modificările la Fondul pentru mediu: scheme de ajutor de stat prin AFM, prefinanțare într-o singură tranșă pentru primării și — punctul discutabil — finanțarea unor proiecte de rețele de gaze. Modificări procedurale, fără taxe noi. Promulgată pe 26 mai 2026, după o sesizare de neconstituționalitate.",
    explicatie:
      "Legea 79/2026 (PL-x 496/2024) aprobă OUG 104/2024, care modifică OUG 196/2005 privind Fondul pentru mediu și art. 22 din OUG 60/2022 (Fondul pentru modernizare). Senatul o adoptase în septembrie 2024; Camera Deputaților, for decizional, a votat-o pe 29 aprilie 2026; promulgată pe 26 mai (Decretul 294/2026, M.Of. nr. 445).\n\nModificările sunt administrative, nu fiscale — nu se introduc, modifică sau elimină taxe ori contribuții. Concret: Administrația Fondului pentru Mediu poate institui scheme de ajutor de stat sau de minimis pentru finanțarea programelor; beneficiarii publici (primării, instituții publice) pot primi prefinanțare într-o singură tranșă de până la 30% din valoarea contractului — reducere de birocrație; și se permite finanțarea din Fondul pentru mediu a proiectelor de extindere, conversie sau modernizare a rețelelor de gaze, pentru integrarea gazelor cu emisii reduse.",
    pro: [
      "Reduce birocrația pentru primării: prefinanțarea într-o singură tranșă (până la 30%) deblochează proiectele de mediu ale comunităților fără capacitate de cofinanțare.",
      "Permite AFM să folosească scheme de ajutor de stat — instrument care accelerează deconcentrarea banilor către beneficiari.",
      "Nu introduce taxe noi; modificările sunt de procedură și de eficiență administrativă.",
    ],
    contra: [
      "Finanțarea rețelelor de gaze din Fondul pentru mediu e discutabilă climatic: gazul rămâne combustibil fosil, chiar „cu emisii reduse”, iar un fond de mediu ar trebui să prioritizeze alternativele curate.",
      "O sesizare de neconstituționalitate a fost depusă pe 6 mai 2026; legea a fost totuși trimisă la promulgare două zile mai târziu.",
      "Lege cu vizibilitate publică redusă, deși mișcă bani publici de mediu — scrutinul a fost minim.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 2,
      motivare:
        "Guvernul paralel votează PENTRU, cu un semnal de alarmă. Partea de debirocratizare — prefinanțare într-o singură tranșă pentru primării — e exact genul de reformă administrativă care deblochează proiecte reale de mediu în comunități fără bani de cofinanțare; o susținem. Steagul galben e finanțarea rețelelor de gaze din chiar Fondul pentru mediu: gazul „cu emisii reduse” e tot fosil, iar un fond de mediu ar trebui să tragă banii spre alternative curate, nu spre infrastructură pe care o vom amortiza decenii. Votăm pentru fiindcă debirocratizarea atârnă mai greu decât rezerva, dar marcăm finanțarea gazelor ca punct de urmărit. Scor +2.",
    },
    votReal: {
      rezultat:
        "Adoptată de Senat pe 23 septembrie 2024 și de Camera Deputaților (for decizional) pe 29 aprilie 2026; promulgată pe 26 mai 2026 (Decretul 294/2026), publicată în Monitorul Oficial nr. 445.",
      detalii:
        "Camera Deputaților: 219 pentru / 0 contra / 15 abțineri (fișa oficială cdep.ro, PL-x 496/2024). O sesizare de neconstituționalitate a fost depusă pe 6 mai 2026, înainte de promulgare.",
      cifre: { pentru: 219, contra: 0, abtineri: 15 },
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere pe votul de fond — debirocratizarea accesului primăriilor la banii de mediu e necontroversată și utilă. Rezerva guvernului paralel privește direcția: cât din Fondul pentru mediu va merge spre rețele de gaze și cât spre alternative curate. De urmărit rezultatul sesizării de neconstituționalitate și, mai ales, structura cheltuielilor pe care AFM le va finanța efectiv.",
    controverse: [
      "Sesizare de neconstituționalitate depusă pe 6 mai 2026 (consemnată în fișa cdep.ro); legea a fost totuși trimisă la promulgare pe 8 mai și promulgată pe 26 mai. Autorii și soluția sesizării rămân de confirmat.",
    ],
    surse: [
      {
        titlu: "Camera Deputaților — fișa oficială PL-x 496/2024 (vot 219–0–15, 29 aprilie 2026)",
        url: "https://www.cdep.ro/ords/pls/proiecte/upl_pck2015.proiect?cam=2&idp=21973",
      },
      {
        titlu: "Portal Legislativ — OUG 196/2005 privind Fondul pentru mediu (acte modificatoare)",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/67529",
      },
      {
        titlu: "Juridice.ro — OUG 104/2024: finanțarea proiectelor pentru diminuarea emisiilor de gaze cu efect de seră",
        url: "https://www.juridice.ro/749145/se-asigura-finantarea-pentru-proiectele-care-vor-contribui-la-diminuarea-emisiilor-de-gaze-cu-efect-de-sera.html",
      },
      {
        titlu: "Juridice.ro — Decrete semnate de Președinte pe 26 mai 2026",
        url: "https://www.juridice.ro/831129/decrete-semnate-26-mai-2026.html",
      },
    ],
  },
  {
    slug: "consiliere-psihologica-parinti-autism-down",
    titlu: "Consiliere psihologică gratuită pentru părinții copiilor cu autism sau sindrom Down",
    data: "2026-04-08",
    institutie: "Parlament",
    domenii: ["sănătate", "social", "drepturi"],
    rezumat:
      "Parlamentul a adoptat, cvasi-unanim, o lege care include în programele naționale de sănătate consilierea psihologică gratuită, decontată integral de stat, pentru părinții și tutorii copiilor cu tulburare de spectru autist sau sindrom Down. Cost mic, nevoie reală — dar prevederile intră în vigoare abia în 2027.",
    explicatie:
      "Legea 61/2026 modifică Legea 95/2006 privind reforma în sănătate și introduce consilierea psihologică a părinților sau tutorilor copiilor cu tulburare de spectru autist (TSA) ori sindrom Down în programele naționale de sănătate curative, decontată integral din Fondul național unic de asigurări sociale de sănătate (FNUASS). Inițiativa a aparținut deputatei Raluca Turcan. Camera Deputaților, for decizional, a adoptat-o pe 8 aprilie 2026, cu cvasi-unanimitate (relatări: două abțineri).\n\nPrevederile intră în vigoare în 2027 (la 30 de zile de la legea bugetului pe 2027), pentru a fi acoperite bugetar. Povara psihologică asupra îngrijitorilor unui copil cu dizabilitate severă e documentată, dar până acum sprijinul de specialitate pentru părinți nu era decontat de stat.",
    pro: [
      "Recunoaște o nevoie reală și documentată: epuizarea și depresia îngrijitorilor unui copil cu TSA sau sindrom Down, ignorate de sistem până acum.",
      "Cost bugetar mic raportat la impactul uman; un părinte funcțional e și cel mai bun terapeut al copilului.",
      "Consens parlamentar aproape total — semn că măsura nu e contestată politic.",
    ],
    contra: [
      "Intrarea în vigoare amânată la 2027 — niciun efect imediat pentru familiile care au nevoie acum.",
      "Eficacitatea depinde de existența psihologilor în sistemul public, deja subdimensionat — dreptul pe hârtie nu garantează accesul în practică.",
      "Sfera îngustă (două afecțiuni) ridică o întrebare de echitate față de părinții copiilor cu alte dizabilități severe.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 5,
      motivare:
        "Guvernul paralel votează PENTRU. E o lege ieftină, umană și corect direcționată: sprijină îngrijitorul, nu doar pacientul — iar un părinte care nu cedează psihic e prima linie de îngrijire a copilului. Rezervele țin de aplicare, nu de principiu: amânarea la 2027 lasă familiile fără sprijin încă un an, iar dreptul e real doar dacă există psihologi în sistemul public care să-l ofere. Am fi cerut și o foaie de parcurs pentru extinderea treptată către alte dizabilități severe, ca să nu rămână o măsură de nișă. Scor +5: nevoie reală, cost mic, testul e în implementare și în calendar.",
    },
    votReal: {
      rezultat:
        "Adoptată de Camera Deputaților (for decizional) pe 8 aprilie 2026 cu cvasi-unanimitate; Legea 61/2026, publicată în Monitorul Oficial în aprilie 2026. Prevederile intră în vigoare în 2027.",
      detalii:
        "Vot final cvasi-unanim (relatări de presă: două abțineri); cifrele complete pe camere rămân de confirmat în fișa cdep.ro.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Aliniere între votul real și cel paralel, pe o măsură consensuală și umană. Valoarea ei se va vedea în 2027, când intră în vigoare: dacă vor exista psihologi în sistemul public care să ofere efectiv consilierea decontată, legea își atinge scopul; dacă nu, rămâne un drept pe hârtie. De urmărit și dacă va fi extinsă către părinții copiilor cu alte dizabilități severe.",
    surse: [
      {
        titlu: "Juridice.ro — Consiliere psihologică gratuită pentru părinții copiilor cu autism sau sindrom Down",
        url: "https://www.juridice.ro/823759/consiliere-psihologica-gratuita-pentru-parintii-copiilor-cu-autism-sau-sindrom-down.html",
      },
      {
        titlu: "Edupedu — Lege adoptată de Parlament: consiliere psihologică gratuită, decontată integral de stat",
        url: "https://www.edupedu.ro/parintii-copiilor-cu-tulburare-de-spectru-autist-sau-sindrom-down-vor-primi-consiliere-psihologica-gratuita-decontata-integral-de-stat-lege-adoptata-de-parlament/",
      },
      {
        titlu: "Observatorul Prahovean — Legea 61/2026",
        url: "https://www.observatorulph.ro/social/2786937",
      },
    ],
  },
];

export function getDecizie(slug: string): Decizie | undefined {
  return decizii.find((d) => d.slug === slug);
}

export function deciziiSortate(): Decizie[] {
  return [...decizii].sort((a, b) => (a.data < b.data ? 1 : -1));
}
