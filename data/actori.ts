import type { Actor } from "@/lib/types";

/**
 * Actorii politici analizați: președinte, premier, lideri de partide.
 * Doar fapte documentate în `surse`: acțiuni, promisiuni vs livrare, poziții declarate.
 * NOTĂ: câmpul `evaluare` este DEZAFECTAT (nu se mai afișează și nu se mai actualizează) —
 * notele pentru oameni politici sunt ele însele o etichetă. Actualizat la 10 iunie 2026.
 */
export const actori: Actor[] = [
  {
    slug: "nicusor-dan",
    nume: "Nicușor Dan",
    functie: "Președintele României",
    partid: "independent",
    dinCand: "26 mai 2025",
    rezumat:
      "Un an de mandat: politică externă consecventă pe angajamentele României în UE și NATO și gestionarea crizelor de securitate (dronele de la Constanța), dar restanțe majore la promisiunile proprii — șefii SRI/SIE nenumiți, raportul privind anularea alegerilor din 2024 întârziat — și desemnarea unui premier (Tomac) fără majoritate conturată.",
    actiuniRecente: [
      {
        data: "2026-06-10",
        text: "A participat la reuniunea Consiliului Nord-Atlantic de la Bruxelles, convocată la cererea României, dedicată securității Mării Negre. S-a convenit accelerarea proiectelor NATO de răspuns la amenințările cu drone; noi măsuri urmează să fie aprobate la Summit-ul de la Ankara (7–8 iulie 2026). A afirmat că securitatea Mării Negre este esențială și că aliații au exprimat solidaritate fermă cu România.",
      },
      {
        data: "2026-06-05",
        text: "A gestionat incidentul dronelor marine ucrainene (una a explodat în Portul Constanța, peste 1.000 de turiști evacuați): ședință de lucru la Constanța și convocarea unei întâlniri NATO dedicate Mării Negre pe 10 iunie.",
      },
      {
        data: "2026-06-04",
        text: "L-a desemnat premier pe Eugen Tomac (PMP, partid neparlamentar), pariind pe un „guvern tehnic” — respins din start de PNL, USR, PSD și AUR.",
      },
      {
        data: "2026-05-26",
        text: "A promulgat legea de prelungire a plafonării adaosului comercial; serie de promulgări tehnice (fonduri UE 2014–2020, achiziții, mediu).",
      },
      {
        data: "2026-05-05",
        text: "Nu a făcut declarații publice în sprijinul guvernului Bolojan înaintea moțiunii de cenzură din 5 mai.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Numirea șefilor SRI și SIE",
        status: "nelivrat",
        detalii:
          "După un an de mandat, serviciile rămân conduse interimar — restanța cel mai des citată de presă.",
      },
      {
        promisiune: "Raport public privind anularea alegerilor din 2024",
        status: "nelivrat",
        detalii: "Promis în campanie, întârziat fără termen clar.",
      },
      {
        promisiune: "Depolitizarea administrației și reforma statului",
        status: "parțial",
        detalii:
          "A susținut corecția fiscală și reformele guvernului Bolojan, fără inițiative legislative proprii pe această temă; numirile de la conducerea parchetelor au fost criticate public.",
      },
      {
        promisiune: "Ancorarea fermă în UE/NATO și apărarea flancului estic",
        status: "livrat",
        detalii:
          "Linie externă consecventă: summit UE–Balcanii de Vest, reuniune NATO pe Marea Neagră, sprijin pentru programul SAFE.",
      },
    ],
    controverse: [
      "Numirile de la conducerea Parchetului General, DNA și DIICOT au fost criticate public, inclusiv de o parte a propriilor susținători.",
      "Șefii SRI și SIE nu au fost numiți după mai bine de un an de mandat — atribuție prezidențială exercitată doar prin conduceri interimare.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Susține apartenența României la UE și NATO; prioritate declarată: securitatea Mării Negre." },
      { tema: "Austeritate / deficit", pozitie: "A susținut corecția fiscală a guvernului Bolojan." },
      {
        tema: "Stat de drept",
        pozitie: "Discurs reformist; numirile de la conducerea parchetelor au fost criticate public.",
      },
      {
        tema: "Criza politică",
        pozitie: "Refuză anticipatele; încearcă deblocarea prin guvern tehnocrat fără majoritate asigurată.",
      },
    ],
    evaluare: {
      nota: 6,
      motivare:
        "Plusuri solide pe securitate și politică externă — domeniile-cheie ale președinției — și o linie constantă pe angajamentele externe asumate de România într-un an turbulent. Minusuri grele la livrarea propriilor promisiuni (SRI/SIE, raportul alegerilor) și la managementul crizei politice: desemnarea Tomac fără aritmetică parlamentară prelungește vidul de guvernare. Nota 6: peste medie pe extern, sub așteptări pe intern.",
    },
    surse: [
      {
        titlu: "Presidency.ro — declarații după ședința privind dronele de la Constanța",
        url: "https://www.presidency.ro/ro/media/declaratii-de-presa",
      },
      {
        titlu: "TVR Info — Un an de mandat la Cotroceni: promisiuni și restanțe",
        url: "https://tvrinfo.ro/nicusor-dan-un-an-de-mandat-la-palatul-cotroceni-promisiuni-obiective-atinse-si-restante/",
      },
      {
        titlu: "Ziare.com — Restanțele lui Nicușor Dan la un an de mandat",
        url: "https://ziare.com/nicusor-dan/restante-promisiuni-preluare-functie-presedinte-nerespectate-1995695",
      },
      {
        titlu: "Recorder — Tomac premier desemnat",
        url: "https://recorder.ro/stirile-zilei/4-iunie-2026-guvernul-meu-varianta-nicusor-dan-tomac-premier-desemnat/",
      },
    ],
  },
  {
    slug: "ilie-bolojan",
    nume: "Ilie Bolojan",
    functie: "Premier interimar (guvern demis)",
    partid: "PNL (președinte)",
    dinCand: "premier din 23 iunie 2025, demis 5 mai 2026",
    rezumat:
      "A condus guvernul între iunie 2025 și mai 2026: deficitul a scăzut de la 9,3% la 7,65% din PIB și ~45.600 de posturi au fost eliminate din administrație, pe fondul majorării TVA la 21%, al accizelor crescute și al înghețării pensiilor și salariilor. Mandatul s-a încheiat cu demiterea prin moțiune de cenzură, publicarea OUG 38/2026 după demitere și un conflict instituțional cu ÎCCJ.",
    actiuniRecente: [
      {
        data: "2026-06-10",
        text: "Mandatele celor 6 miniștri interimari numiți în locul miniștrilor PSD au expirat (art. 107 din Constituție — maximum 45 de zile), creând o lacună constituțională fără precedent clar. Fostul judecător CCR Petre Lăzăroiu a declarat că Bolojan poate numi noi interimari; PSD contestă această interpretare.",
      },
      {
        data: "2026-06-04",
        text: "A anunțat că PNL nu va vota guvernul tehnocrat Tomac și că nu va bloca alegerile anticipate.",
      },
      {
        data: "2026-05-28",
        text: "Ca interimar, a condus ședințe de guvern strict administrative (fuziunea Electrocentrale–SAPE, transfer Elcen către București, modernizarea DN2 Siret–Porubne).",
      },
      {
        data: "2026-05-08",
        text: "OUG 38/2026 (modificări SAFE) a fost publicată în Monitorul Oficial după demiterea guvernului său — sesizată la CCR de Avocatul Poporului și PSD; „premieră de la 1991”.",
      },
      {
        data: "2026-05-05",
        text: "Demis prin moțiune de cenzură (281 voturi). A refuzat să demisioneze de la șefia PNL: „PNL are un președinte ales la congres”.",
      },
      {
        data: "2026-02-19",
        text: "CCR a validat reforma pensiilor magistraților — jalon PNRR de 231 mil. €, salvat la a doua încercare.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Reducerea deficitului bugetar",
        status: "parțial",
        detalii:
          "Livrat în cifre: 7,65% din PIB în 2025 (de la 9,3%), buget 2026 cu țintă 6,2%. Costul: TVA 21%, accize majorate, CASS pe pensii >3.000 lei, înghețări de venituri — inflație ~10,7% și creștere anemică.",
      },
      {
        promisiune: "Reforma administrației publice",
        status: "livrat",
        detalii: "~45.600 de posturi eliminate (februarie 2026), economii estimate la 1,6 mld. lei.",
      },
      {
        promisiune: "Tăierea privilegiilor politicienilor",
        status: "parțial",
        detalii:
          "A amenințat cu demisia pe această temă; pensiile magistraților reformate (jalon PNRR), dar privilegiile aleșilor au rămas în mare parte intacte.",
      },
      {
        promisiune: "Reforma companiilor de stat",
        status: "nelivrat",
        detalii:
          "Anunțul restructurării (via vicepremierul Oana Gheorghiu) a declanșat ruptura cu PSD și căderea guvernului înainte de implementare.",
      },
    ],
    controverse: [
      "OUG 38/2026 adoptată/publicată după demitere, în varianta avizată negativ de Consiliul Legislativ — viciul procedural central al finalului său de mandat.",
      "Conflict cu CSM și ÎCCJ pe pensiile magistraților; șefa ÎCCJ i-a calificat scrisoarea către CCR drept „ingerință incompatibilă cu separația puterilor”.",
      "Acuzat de PSD/AUR de guvernare „autoritară” și de sărăcirea populației prin pachetul fiscal.",
    ],
    pozitionare: [
      {
        tema: "Austeritate / deficit",
        pozitie: "Asumată integral: „nu s-au văzut nicăieri în lume corectări de deficite fără costuri”.",
      },
      { tema: "UE / NATO", pozitie: "A coordonat participarea României la programul european SAFE; fără abateri de la angajamentele externe oficiale." },
      {
        tema: "Stat de drept",
        pozitie: "Reformist pe pensiile speciale, dar cu derapaje procedurale (OUG 38) și conflict instituțional cu magistratura.",
      },
      { tema: "Criza politică", pozitie: "Refuză guvernul tehnocrat; nu blochează anticipatele." },
    ],
    evaluare: {
      nota: 6,
      motivare:
        "Singurul lider recent care a livrat corecție fiscală reală — fără ea, România risca retrogradarea la „junk” și o criză de finanțare. Asta cântărește greu. Dar distribuția costurilor a protejat sistematic mai puțin cetățeanul de rând decât aparatul politic, iar finalul de mandat (OUG 38 după demitere) a încălcat exact principiile de bună guvernare pe care le invoca. Nota 6: corecție fiscală livrată, costuri sociale ridicate pentru veniturile mici și mijlocii, plus un derapaj procedural grav la final de mandat.",
    },
    surse: [
      {
        titlu: "Euronews — Bilanțul guvernului Bolojan: austeritate, reforme și controverse",
        url: "https://www.euronews.ro/articole/bilantul-guvernului-bolojan-austeritate-reforme-si-controverse",
      },
      {
        titlu: "BURSA — CCR a aprobat tăierea pensiilor magistraților",
        url: "https://www.bursa.ro/ccr-a-aprobat-taierea-pensiilor-magistratilor-80434854",
      },
      {
        titlu: "News.ro — Conflictul Bolojan–ÎCCJ pe pensiile magistraților",
        url: "https://www.news.ro/justitie/update-bolojan-scris-ccr-tema-legii-pensiilor-magistratiilor-contestata-iccj-comisia-europeana-considera-neindeplinit-jalonul-pnrr-efectul-pierderea-231-milioane-euro-sefa-iccj-ingerinta-1922404706002026021222337379",
      },
      {
        titlu: "Mediafax — „Nu există corecții de deficit fără costuri”",
        url: "https://www.mediafax.ro/politic/bolojan-nu-s-a-vazut-nicaieri-in-lume-corectari-de-deficite-fara-niste-costuri-23750761",
      },
    ],
  },
  {
    slug: "eugen-tomac",
    nume: "Eugen Tomac",
    functie: "Premier desemnat",
    partid: "PMP (demisionat de la șefia partidului)",
    dinCand: "desemnat 4 iunie 2026",
    rezumat:
      "Desemnat premier pe 4 iunie 2026 pentru un guvern tehnocrat; lider al unui partid neparlamentar (PMP), de la a cărui șefie a demisionat. Lista de miniștri a fost depusă pe 10 iunie, cu vot de învestitură estimat pe 12 iunie; PNL, USR, PSD și AUR au declarat că nu o susțin.",
    actiuniRecente: [
      {
        data: "2026-06-10",
        text: "A depus în Parlament lista cabinetului tehnocrat (Sorin Costreie — Educație/vicepremier, Dan Neculăescu — Apărare, Luca Niculescu — Externe, Nicolae Istudor — Agricultură) și programul de guvernare.",
      },
      {
        data: "2026-06-08",
        text: "Consultări cu PNL, USR, PSD, UDMR și minoritățile (fără AUR) — niciun partid nu și-a anunțat susținerea.",
      },
      {
        data: "2026-06-03",
        text: "A demisionat de la șefia PMP pentru a-și susține profilul de premier „independent de partide”.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Formarea unui guvern tehnocrat care să deblocheze criza",
        status: "în curs",
        detalii:
          "Lista depusă la termen; aritmetica parlamentară îi este însă net defavorabilă — 233 de voturi necesare, zero asigurate public.",
      },
    ],
    controverse: [
      "Critici că viitorul cabinet ar include „oamenii PSD” — a replicat: „să nu fim mai catolici decât Papa”.",
      "AUR a numit desemnarea „un pericol pentru democrație”; USR — „paravan pentru ca PSD să exercite puterea”.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Susține declarativ angajamentele României în UE și NATO." },
      { tema: "Criza politică", pozitie: "Guvern tehnic, fără apartenență de partid, până la clarificarea majorității." },
    ],
    evaluare: {
      nota: 5,
      motivare:
        "Prea devreme pentru un verdict pe fapte de guvernare — nota 5 e una de start, neutră. A acceptat o misiune aproape imposibilă, ceea ce denotă fie curaj instituțional, fie calcul politic pentru vizibilitate. Profilul cabinetului propus e onorabil. Va fi reevaluat după votul de învestitură și, eventual, după primele decizii.",
    },
    surse: [
      {
        titlu: "HotNews — Tomac, negocieri cu partidele înainte de vot",
        url: "https://hotnews.ro/eugen-tomac-premier-desemnat-negocieri-partide-parlament-guvern-2268397",
      },
      {
        titlu: "Național — Pe ce voturi se bazează Eugen Tomac; lista miniștrilor propuși",
        url: "https://www.national.ro/politica/premierul-desemnat-cauta-majoritatea-in-parlament-pe-ce-voturi-se-bazeaza-de-fapt-eugen-tomac-lista-ministrilor-propusi-874319.html/",
      },
    ],
  },
  {
    slug: "sorin-grindeanu",
    nume: "Sorin Grindeanu",
    functie: "Președinte PSD",
    partid: "PSD",
    dinCand: "7 noiembrie 2025",
    rezumat:
      "Președinte PSD din noiembrie 2025. A retras partidul de la guvernare, a inițiat moțiunea de cenzură care a demis guvernul Bolojan — votată împreună cu AUR, SOS și POT — și a refuzat formulele de guvern propuse ulterior. A sesizat CCR pe OUG 38/2026, act emis de guvernul demis.",
    actiuniRecente: [
      {
        data: "2026-06-05",
        text: "A respins guvernul Tomac: „nu continuăm modelul falimentar Bolojan”; exclude atât guvernul minoritar, cât și alianța cu AUR.",
      },
      {
        data: "2026-05-20",
        text: "A sesizat CCR pe OUG 38/2026, acuzând guvernul demis că a legiferat după retragerea încrederii (art. 110(4) din Constituție) — termen amânat pentru 18 iunie.",
      },
      {
        data: "2026-05-05",
        text: "Moțiunea de cenzură inițiată de PSD a trecut cu 281 de voturi — guvernul Bolojan demis.",
      },
      {
        data: "2026-04-20",
        text: "A condus votul intern PSD (97,7%) de retragere a sprijinului pentru guvern; a cerut demisia prefecților și secretarilor de stat PSD.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "„PSD nu colaborează cu extremiștii”",
        status: "nelivrat",
        detalii: "PSD a depus și a votat moțiunea de cenzură împreună cu AUR, SOS și POT.",
      },
      {
        promisiune: "„Guvern stabil cu majoritate clară”",
        status: "nelivrat",
        detalii: "La peste o lună de la moțiune, România nu are guvern; PSD a refuzat toate formulele puse pe masă.",
      },
      {
        promisiune: "Protejarea nivelului de trai împotriva austerității",
        status: "parțial",
        detalii:
          "Discurs anti-austeritate constant; în practică, PSD a guvernat alături de Bolojan în perioada majorărilor de taxe pe care acum le denunță.",
      },
    ],
    controverse: [
      "Bolojan și lideri USR l-au acuzat public că a declanșat criza pentru a opri reforma companiilor de stat — acuzație pe care o respinge.",
      "A acuzat lipsa de transparență a programului SAFE („am aflat de el luni”), deși PSD era la guvernare când programul a fost construit.",
      "Nu au fost identificate anchete penale pe numele său în perioada analizată.",
    ],
    pozitionare: [
      { tema: "Austeritate / deficit", pozitie: "Anti-austeritate: „România nu poate fi guvernată doar prin aroganță”." },
      { tema: "UE / NATO", pozitie: "Fără abateri documentate de la linia externă oficială a României." },
      { tema: "SAFE / apărare", pozitie: "Susține înzestrarea, contestă procedura (sesizare CCR pe OUG 38)." },
      { tema: "Criza politică", pozitie: "Refuză guvern minoritar, alianța cu AUR și formula Tomac — fără a propune o alternativă cu majoritate." },
    ],
    evaluare: {
      nota: 4,
      motivare:
        "Critica sa pe transparența SAFE și sesizarea CCR pe OUG 38 sunt exerciții legitime și utile de control. Dar fapta politică dominantă a perioadei — demolarea guvernului în plină corecție fiscală, cu voturile partidelor cu care declarase că nu va colabora și fără nicio alternativă pregătită — a produs costuri directe pentru cetățean: criză prelungită, presiune pe rating, paralizie administrativă. Nota 4: control parlamentar exercitat, dar fără alternativă de guvernare livrată — iar costul instabilității îl plătește cetățeanul.",
    },
    surse: [
      {
        titlu: "Europa Liberă — Grindeanu, ales președinte PSD la congres",
        url: "https://romania.europalibera.org/a/psd-congres-alegeri-presedinte-sorin-grindeanu/33584040.html",
      },
      {
        titlu: "Mediafax — „PSD nu va vota un guvern minoritar și nu va face alianță cu AUR”",
        url: "https://www.mediafax.ro/politic/sorin-grindeanu-despre-viitorul-coalitiei-psd-ul-nu-va-vota-un-guvern-minoritar-si-psd-nu-va-face-alianta-cu-aur-23706946",
      },
      {
        titlu: "Antena3 — Grindeanu acuză lipsa de transparență în programul SAFE",
        url: "https://www.antena3.ro/politica/grindeanu-acuza-lipsa-de-transparenta-in-programul-safe-am-aflat-de-el-luni-decizia-s-a-luat-la-nivelul-cancelariei-786474.html",
      },
      {
        titlu: "Recorder — PSD se leapădă de Bolojan",
        url: "https://recorder.ro/stirile-zilei/20-aprilie-2026-psd-se-leapada-de-bolojan/",
      },
    ],
  },
  {
    slug: "george-simion",
    nume: "George Simion",
    functie: "Președinte AUR",
    partid: "AUR",
    dinCand: "2019 (co-fondator)",
    rezumat:
      "Lider al AUR, al doilea partid din Parlament. AUR a co-inițiat și votat moțiunea care a demis guvernul Bolojan; Simion cere alegeri anticipate și refuză guvernele de tranziție. Are interdicție de intrare în Ucraina, motivată de autoritățile ucrainene prin „activități anti-ucrainene sistematice” — acuzație pe care o respinge.",
    actiuniRecente: [
      {
        data: "2026-06-05",
        text: "A anunțat că AUR nu susține guvernul Tomac și a repetat cererea de alegeri anticipate.",
      },
      {
        data: "2026-05-05",
        text: "AUR a co-inițiat și votat moțiunea de cenzură; discurs în Parlament: AUR „își asumă o guvernare viitoare”, „e timpul pentru reconciliere națională”.",
      },
      {
        data: "2026-05-04",
        text: "A acuzat PSD de „jaf de proporții gigantice” pe contractele SAFE — cu o zi înainte de a vota aceeași moțiune cu PSD.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Guvernare AUR / alegeri anticipate",
        status: "nelivrat",
        detalii:
          "Nu există cale constituțională spre anticipate fără concursul PSD, pe care îl atacă; a dărâmat guvernul fără a putea oferi unul.",
      },
      {
        promisiune: "Combaterea corupției „sistemului”",
        status: "nelivrat",
        detalii:
          "A refuzat public să răspundă dacă PSD e „partid corupt” în perioada în care AUR avea nevoie de voturile PSD pentru moțiunea de cenzură.",
      },
    ],
    controverse: [
      "Interdicție de intrare în Ucraina, motivată printr-un document al autorităților ucrainene (SBU) prin „activități anti-ucrainene sistematice”; Simion respinge acuzațiile.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Promovează conceptul „Europa națiunilor”; critică frecvent deciziile instituțiilor UE." },
      { tema: "Ucraina / Rusia", pozitie: "Anti-sprijin pentru Ucraina; sub interdicție de intrare în Ucraina." },
      { tema: "Austeritate", pozitie: "Anti-austeritate, fără plan fiscal alternativ articulat." },
      { tema: "Criza politică", pozitie: "Anticipate cu orice preț; refuză orice guvern de tranziție." },
    ],
    evaluare: {
      nota: 3,
      motivare:
        "Canalizează nemulțumiri sociale reale — costul austerității e documentat, iar critica achizițiilor fără licitație din SAFE are temei. Judecata noastră nu ține partea niciunei tabere a războiului, ci doar a României, al cărei interes e definit oficial prin apartenența la UE și NATO (Constituție, Strategia Națională de Apărare): pozițiile sale publice contra acestor angajamente, interdicția primită în Ucraina și votul de demitere a guvernului fără alternativă pregătită trag nota în jos. Nota 3: semnalează probleme reale, dar acțiunile documentate slăbesc poziția externă și stabilitatea internă a țării.",
    },
    surse: [
      {
        titlu: "Digi24 — Simion: AUR „își asumă o guvernare viitoare”",
        url: "https://www.digi24.ro/stiri/actualitate/politica/george-simion-anunta-ca-aur-isi-asuma-o-guvernare-viitoare-este-timpul-pentru-reconciliere-nationala-3756841",
      },
      {
        titlu: "HotNews — Simion atacă PSD înainte de moțiune: „jaf de proporții gigantice”",
        url: "https://hotnews.ro/george-simion-ataca-psd-inainte-de-motiunea-de-cenzura-seful-aur-acuza-fosta-coalitie-de-jaf-de-proportii-gigantice-2235250",
      },
      {
        titlu: "HotNews — Motivele interdicției lui Simion în Ucraina (document SBU)",
        url: "https://hotnews.ro/document-motivele-pentru-care-george-simion-a-primit-interdictie-in-ucraina-activitati-antiucrainene-sistematice-neaga-legitimitatea-frontierei-1836339",
      },
    ],
  },
  {
    slug: "dominic-fritz",
    nume: "Dominic Fritz",
    functie: "Președinte USR, primar al Timișoarei",
    partid: "USR",
    dinCand: "președinte USR din iunie 2025",
    rezumat:
      "Președinte USR din iunie 2025, primar al Timișoarei din 2020. A susținut corecția fiscală a guvernului Bolojan, a exclus refacerea coaliției cu PSD și a respins guvernul tehnocrat Tomac, pe care l-a calificat drept „paravan pentru ca PSD să exercite puterea”.",
    actiuniRecente: [
      {
        data: "2026-06-05",
        text: "A respins guvernul tehnocrat Tomac: „paravan pentru ca PSD să exercite puterea”.",
      },
      {
        data: "2026-06-04",
        text: "Primul lider consultat informal de Nicușor Dan la Cotroceni în căutarea unei soluții la criză.",
      },
      {
        data: "2026-05-20",
        text: "A exclus refacerea coaliției cu PSD („nu mai există nicio șansă”) și i-a atacat pe Grindeanu și Kelemen pe tema deficitului: „nu a fost o plagă biblică, ci decizii politice”.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Susținerea reformelor fiscale și tăierea privilegiilor",
        status: "parțial",
        detalii:
          "USR a susținut constant pachetul de corecție în guvernul Bolojan; tăierea privilegiilor politice a rămas nelivrată de întreaga coaliție.",
      },
      {
        promisiune: "Fără compromisuri cu „vechiul sistem” (PSD)",
        status: "livrat",
        detalii:
          "Linie menținută chiar și cu prețul prelungirii crizei politice — coerent cu promisiunea, costisitor pentru stabilitate.",
      },
    ],
    controverse: [
      "Saga cetățeniei române: cerere depusă în iulie 2024, examen abia în noiembrie 2025 — AUR îl atacă sistematic pe această temă; nu e clar dacă procesul s-a finalizat până la 10 iunie 2026.",
      "Contestație internă în USR privind eligibilitatea sa ca președinte de partid.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Susține apartenența la UE și NATO și sprijinul pentru Ucraina." },
      { tema: "Austeritate / deficit", pozitie: "Pro-corecție fiscală; deficitul = „decizii politice”, nu fatalitate." },
      { tema: "Stat de drept", pozitie: "Linie anticorupție; critică numirile din parchete girate de președinte." },
      { tema: "Criza politică", pozitie: "Refuză coaliția cu PSD și guvernul tehnocrat; preferă clarificare prin alegeri dacă e nevoie." },
    ],
    evaluare: {
      nota: 6,
      motivare:
        "Consecvență doctrinară rară în politica românească și poziții corecte pe fond în majoritatea dosarelor perioadei (deficit, stat de drept, SAFE-procedură). Dar guvernarea unei țări în criză cere și capacitatea de a construi majorități imperfecte — refuzul simultan al tuturor formulelor (PSD, tehnocrați) e confortabil moral și costisitor practic. Nota 6: busolă bună, fără hartă de ieșire din criză.",
    },
    surse: [
      {
        titlu: "Digi24 — Fritz despre refacerea coaliției: „îl admir pe Kelemen pentru optimism”",
        url: "https://www.digi24.ro/stiri/actualitate/politica/dominic-fritz-despre-afirmatia-lui-kelemen-hunor-privind-refacerea-coalitiei-il-admir-pentru-capacitatea-lui-de-optimism-3767327",
      },
      {
        titlu: "ProTV — Fritz: deficitul nu a fost „plagă biblică”, ci decizii politice",
        url: "https://stirileprotv.ro/stiri/politic/presedintele-usr-atac-la-colegii-din-coalitie.html",
      },
      {
        titlu: "Jurnalul — Saga cetățeniei lui Dominic Fritz",
        url: "https://jurnalul.ro/special-jurnalul/alegeri-usr-dominic-fritz-cetatenie-999944.html",
      },
    ],
  },
  {
    slug: "kelemen-hunor",
    nume: "Kelemen Hunor",
    functie: "Președinte UDMR",
    partid: "UDMR",
    dinCand: "2011",
    rezumat:
      "Președinte UDMR din 2011, fost vicepremier în guvernul Bolojan. Singurul lider parlamentar care propune explicit o formulă de ieșire din criză: refacerea coaliției PSD–PNL–USR–UDMR și un „guvern politic până la sfârșitul lunii iunie”. Fără controverse personale identificate în perioada analizată.",
    actiuniRecente: [
      {
        data: "2026-06-08",
        text: "Despre guvernul Tomac: „masochism politic să votez un guvern din care nu fac parte” — dar UDMR nu va vota împotrivă.",
      },
      {
        data: "2026-06-05",
        text: "A estimat un guvern politic „din a doua sau a treia încercare”, până la finalul lui iunie; pledează pentru refacerea coaliției largi.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Stabilitate guvernamentală prin coaliție largă",
        status: "în curs",
        detalii:
          "Singura propunere concretă de pe masă; blocată deocamdată de refuzul reciproc PSD–USR/PNL.",
      },
    ],
    controverse: [
      "Nu au fost identificate anchete sau scandaluri personale noi în perioada analizată.",
    ],
    pozitionare: [
      { tema: "Criza politică", pozitie: "Refacerea coaliției largi; guvern politic, nu tehnocrat." },
      { tema: "UE / NATO", pozitie: "Susține angajamentele României în UE și NATO; accent pe stabilitate." },
      { tema: "Austeritate / deficit", pozitie: "A susținut corecția din interiorul guvernului Bolojan, fără entuziasm public." },
    ],
    evaluare: {
      nota: 7,
      motivare:
        "În luna analizată, singurul lider mare care s-a comportat ca un om de stat: fără contribuție la declanșarea crizei, cu o propunere concretă de ieșire și fără a închide uși. I se poate reproșa flexibilitatea excesivă (UDMR a guvernat cu aproape oricine), dar într-o criză exact această flexibilitate e materia primă a soluției. Nota 7 — cea mai mare a perioadei, acordată însă unui rol de mediator, nu de reformator.",
    },
    surse: [
      {
        titlu: "G4Media — Kelemen: „până la sfârșitul lunii iunie ar trebui să avem un guvern politic”",
        url: "https://www.g4media.ro/kelemen-hunor-pana-la-sfarsitul-lunii-iunie-ar-trebui-sa-avem-un-guvern-politic-trebuie-un-guvern-politic-cu-cine-cum-cu-ce-voturi-nu-stiu.html",
      },
      {
        titlu: "Ziare.com — Kelemen despre votul pe guvernul Tomac",
        url: "https://ziare.com/guvernul-tomac/kelemen-hunor-vot-2017661",
      },
    ],
  },
  {
    slug: "diana-sosoaca",
    nume: "Diana Șoșoacă",
    functie: "Președintă SOS România, europarlamentar",
    partid: "SOS România",
    rezumat:
      "Inculpată de Parchetul General pentru 11 infracțiuni (inclusiv promovarea ideologiei legionare), cu imunitatea europarlamentară ridicată prin vot al Parlamentului European. În iunie 2026 a participat la Forumul Economic Internațional de la Sankt Petersburg, unde a criticat oficialii români la o televiziune rusă; MAE a calificat demersul drept „propagandă mincinoasă care nu reprezintă România”.",
    actiuniRecente: [
      {
        data: "2026-06-05",
        text: "Participare la Forumul Economic de la Sankt Petersburg, sub patronajul lui Putin, alături de Marina Tauber; declarații contra oficialilor români la o televiziune rusă, inclusiv pe tema dronei de la Constanța.",
      },
      {
        data: "2026-05-05",
        text: "SOS România (15 deputați) a votat moțiunea de cenzură care a demis guvernul Bolojan.",
      },
      {
        data: "2026-04-28",
        text: "Parlamentul European a votat ridicarea imunității sale, la cererea Parchetului General.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "„Apărarea suveranității României”",
        status: "nelivrat",
        detalii:
          "Fapte documentate oficial: participare la un forum economic în Rusia în timpul războiului, declarații contra oficialilor români calificate de MAE drept „propagandă mincinoasă”, inculpare de către Parchetul General și imunitate ridicată de Parlamentul European.",
      },
    ],
    controverse: [
      "Inculpată de Parchetul General pentru 11 infracțiuni: ultraj, promovarea ideologiei fasciste/legionare, cultul persoanelor vinovate de genocid (elogii repetate la Zelea Codreanu).",
      "MAE a calificat participarea la forumul de la Sankt Petersburg drept „propagandă mincinoasă care nu reprezintă România”.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Declarații publice repetate împotriva apartenenței României la UE și NATO." },
      { tema: "Ucraina / Rusia", pozitie: "Participare la evenimente oficiale în Rusia în plin război; declarații publice contra sancțiunilor și a sprijinului pentru Ucraina." },
    ],
    evaluare: {
      nota: 1,
      motivare:
        "Nota 1 nu e o etichetă ideologică, ci suma actelor oficiale ale statului român și ale instituțiilor europene: inculpare pentru 11 infracțiuni (inclusiv promovarea ideologiei legionare — infracțiune, nu opinie), imunitate ridicată de Parlamentul European, acțiuni externe calificate de MAE drept propagandă care nu reprezintă România. Raportat strict la interesul României — singura parte căreia îi ținem partea — faptele documentate trag nota la minimum.",
    },
    surse: [
      {
        titlu: "Digi24 — Șoșoacă, acuzată de 11 infracțiuni de Parchetul General",
        url: "https://www.digi24.ro/stiri/actualitate/diana-sosoaca-si-fostul-sot-citati-la-parchetul-general-sefa-sos-este-acuzata-de-11-infractiuni-3443711",
      },
      {
        titlu: "Adevărul — Șoșoacă participă la „Davosul Rusiei”",
        url: "https://adevarul.ro/amp/stiri-interne/evenimente/sosoaca-participa-la-davosul-rusiei-cu-vecinii-2534213.html",
      },
      {
        titlu: "Mediafax — Reacția MAE la participarea la forumul rusesc",
        url: "https://www.mediafax.ro/stirile-zilei/reactia-mae-la-participarea-dianei-sosoaca-la-davosul-rusesc-singuratatea-agresorului-nu-se-poate-ascunde-23750592",
      },
    ],
  },
  {
    slug: "anamaria-gavrila",
    nume: "Anamaria Gavrilă",
    functie: "Președintă POT",
    partid: "POT",
    rezumat:
      "Președinta POT (~14 deputați). Partidul a co-semnat moțiunea care a demis guvernul Bolojan, iar liderul grupului său parlamentar a fost exclus din partid. Agenda publică a partidului s-a concentrat pe situația juridică a lui Călin Georgescu.",
    actiuniRecente: [
      {
        data: "2026-05-05",
        text: "POT (~14 deputați) a co-semnat și votat moțiunea de cenzură care a demis guvernul Bolojan.",
      },
      {
        data: "2026-04-15",
        text: "A condiționat semnarea unei eventuale suspendări a președintelui de permisiunea ca Georgescu să candideze — „nu o semnăm cât timp domnul Georgescu nu este lăsat să candideze”.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Reprezentarea „poporului” împotriva sistemului",
        status: "nelivrat",
        detalii:
          "Activitate parlamentară dominată de apărarea lui Călin Georgescu (inculpat pentru acțiuni contra ordinii constituționale; ÎCCJ decide pe 19 iunie dacă procesul începe), nu de inițiative pentru cetățean.",
      },
    ],
    controverse: [
      "Chemare la proteste de stradă când Georgescu a fost dus la parchet.",
      "Sciziuni interne: liderul grupului parlamentar POT, exclus din partid.",
      "Atac la Patriarhul BOR pe tema neinvitării lui Georgescu la sfințirea Catedralei.",
    ],
    pozitionare: [
      { tema: "UE / NATO", pozitie: "Fără program extern articulat; declarații publice critice la adresa instituțiilor UE." },
      { tema: "Criza politică", pozitie: "A votat demiterea guvernului; agendă centrată pe reabilitarea politică a lui Georgescu." },
    ],
    evaluare: {
      nota: 2,
      motivare:
        "În perioada analizată, activitatea documentată a partidului s-a concentrat pe apărarea lui Călin Georgescu — inculpat pentru acțiuni contra ordinii constituționale — și pe votul de demitere a guvernului, fără inițiative legislative majore proprii. Nota 2 reflectă acest bilanț faptic: contribuție minimă la politicile publice și contribuție directă la instabilitate, fără însă fapte documentate de promovare a intereselor unei puteri străine.",
    },
    surse: [
      {
        titlu: "HotNews — Gavrilă cheamă lumea în stradă după ducerea lui Georgescu la parchet",
        url: "https://hotnews.ro/ana-maria-gavrila-dupa-ce-calin-georgescu-a-fost-ridicat-si-dus-la-parchet-este-foarte-important-ca-toata-lumea-sa-iasa-in-strada-1910534",
      },
      {
        titlu: "Gândul — POT nu semnează suspendarea „cât timp Georgescu nu e lăsat să candideze”",
        url: "https://www.gandul.ro/actualitate/anamaria-gavrila-spune-ca-pot-nu-semneaza-pentru-suspendarea-lui-nicusor-dan-nu-o-semnam-cat-timp-domnul-georgescu-nu-este-lasat-sa-candideze-20751354",
      },
      {
        titlu: "Ziare.com — Liderul grupului parlamentar POT, exclus din partid",
        url: "https://ziare.com/anamaria-gavrila-pot/sef-grup-parlamentar-exclus-1991967",
      },
    ],
  },
];

export function getActor(slug: string): Actor | undefined {
  return actori.find((a) => a.slug === slug);
}
