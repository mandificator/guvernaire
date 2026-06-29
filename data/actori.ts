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
        data: "2026-06-27",
        text: "A acuzat public PNL de schimbarea poziției față de 23 iunie, susținând că partidul s-ar fi angajat anterior să voteze un guvern minoritar PSD condus de Sorin Grindeanu; Ilie Bolojan și Siegfried Mureșan i-au contrazis public versiunea, declarând că PNL nu a promis niciodată susținere necondiționată pentru Grindeanu.",
      },
      {
        data: "2026-06-26",
        text: "I-a convocat de la ora 18:00 la Cotroceni pe Sorin Grindeanu (PSD), Ilie Bolojan (PNL), Dominic Fritz (USR), Kelemen Hunor (UDMR) și Varujan Pambuccian, pentru a decide între propunerea PSD (Grindeanu) și propunerea PNL–USR–UDMR (Siegfried Mureșan); întâlnirea s-a încheiat fără acord și fără o nouă desemnare. A declarat: „Am revenit la blocajul politic pe care marți îl credeam depășit. Pe baza pozițiilor partidelor din consultări, exista o singură formulă care părea să asigure susținerea unei majorități parlamentare: guvernul minoritar PSD. Marți, PNL s-a angajat să voteze un guvern minoritar PSD, cu anumite condiții privind programul de guvernare” — acuzând PNL că și-a schimbat poziția.",
      },
      {
        data: "2026-06-25",
        text: "După ce negocierile de la Vila Lac dintre PSD și blocul PNL–USR–UDMR s-au încheiat fără acord, a reacționat: „Suntem în criză pentru că niște lideri nu și-au ținut promisiunea”; a recunoscut că a greșit în gestionarea negocierilor pentru desemnarea premierului, fără să precizeze unde anume, și a cerut din nou partidelor o majoritate pro-occidentală, exprimându-și speranța să existe un Guvern până marți.",
      },
      {
        data: "2026-06-24",
        text: "Aflat la Cluj-Napoca, a declarat: „Vom avea un guvern minoritar, pro-occidental” și le-a cerut partidelor să vină vineri, 26 iunie, cu concluziile negocierilor, precizând că pe 25 iunie va participa la un summit internațional în Polonia.",
      },
      {
        data: "2026-06-23",
        text: "A desfășurat la Cotroceni o nouă rundă de consultări, de peste șase ore, cu toate partidele parlamentare, fără să desemneze un nou premier; a indicat drept variantă posibilă un guvern politic minoritar bazat pe un acord parlamentar de sprijin negociat în avans.",
      },
      {
        data: "2026-06-22",
        text: "Guvernul Veștea, pe care l-a desemnat, a picat la votul de învestitură din Parlament (207 voturi exprimate, sub pragul de 233), după ce AUR și UDMR au părăsit sala. L-a convocat la Cotroceni, împreună cu liderul PSD Sorin Grindeanu, pentru o nouă rundă de consultări — procedura de desemnare a unui premier se reia de la zero.",
      },
      {
        data: "2026-06-19",
        text: "Întrebat la Bruxelles dacă e de acord ca Guvernul Veștea să primească voturi de la AUR, a răspuns: „Când l-am desemnat, l-am desemnat să facă o majoritate” — plasând responsabilitatea negocierii exact pe umerii premierului desemnat, nu pe ai săi.",
      },
      {
        data: "2026-06-16",
        text: "L-a primit pe Adrian Veștea la Cotroceni; potrivit declarațiilor lui Veștea, i-a transmis că există o majoritate în jurul său și nu i-a solicitat retragerea mandatului.",
      },
      {
        data: "2026-06-14",
        text: "L-a desemnat premier pe Adrian Veștea (PNL, economist, fostul președinte al CJ Brașov, fost ministru al Dezvoltării), fără să consulte în prealabil conducerea PNL — decizie calificată de Ilie Bolojan drept „act ostil, evidentă încercare de rupere a PNL\". A semnat decretul de revocare a mandatului lui Tomac și decretul de desemnare a lui Veștea în aceeași zi.",
      },
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
      {
        titlu: "Ziare.com — Nicușor Dan: „Când l-am desemnat, l-am desemnat ca să facă o majoritate” (19 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/nicusor-dan-declaratii-criza-guvernamentala-2019430",
      },
      {
        titlu: "Europa FM — Veștea și Grindeanu, convocați de președinte la Cotroceni, după ce negocierile cu partidele nu au dus la niciun rezultat (23 iunie 2026)",
        url: "https://www.europafm.ro/vestea-si-grindeanu-convocati-de-presedinte-la-cotroceni-dupa-ce-negocierile-cu-partidele-nu-au-dus-la-niciun-rezultat-surse/",
      },
      {
        titlu: "DCNews — Nicușor Dan a zburat cu Spartan la Cluj! Semnal către liderii partidelor (24 iunie 2026)",
        url: "https://www.dcnews.ro/nicusor-dan-declaratii-despre-formarea-guvernului-minoritar_1064339.html",
      },
      {
        titlu: "Adevărul — Prima reacție a lui Nicușor Dan, după eșecul de la Vila Lac: „Suntem în criză pentru că niște lideri nu și-au ținut promisiunea” (25 iunie 2026)",
        url: "https://adevarul.ro/politica/prima-reactie-a-lui-nicusor-dan-dupa-esecul-de-la-2539019.html",
      },
      {
        titlu: "Digi24 — Președintele recunoaște că a greșit în negocierile pentru desemnarea premierului (25 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/nicusor-dan-recunoaste-ca-a-gresit-in-negocierile-pentru-desemnarea-premierului-ce-spune-despre-o-eventuala-suspendare-3833011",
      },
      {
        titlu: "Digi24 — Nicușor Dan anunță blocaj în rezolvarea crizei politice și acuză PNL că și-a schimbat poziția (27 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/nicusor-dan-anunta-blocaj-in-rezolvarea-crizei-politice-si-acuza-pnl-ca-si-a-schimbat-pozitia-3835021",
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
        data: "2026-06-28",
        text: "A replicat public acuzațiilor președintelui Nicușor Dan, declarând că „PNL nu blochează, PNL rămâne consecvent” și confirmând că președintele nu a agreat, la discuția de la Cotroceni, varianta de premier Siegfried Mureșan.",
      },
      {
        data: "2026-06-27",
        text: "A contrazis public versiunea președintelui Nicușor Dan, conform căreia PNL ar fi promis pe 23 iunie să susțină un guvern minoritar PSD condus de Sorin Grindeanu, susținând că partidul nu a făcut niciodată un asemenea angajament necondiționat. PNL a respins public „lecțiile despre responsabilitate” venite din partea președinției.",
      },
      {
        data: "2026-06-26",
        text: "PNL, alături de USR și UDMR, a propus oficial pe europarlamentarul Siegfried Mureșan (PNL) ca alternativă de premier la Sorin Grindeanu (PSD), pentru un guvern PNL–USR–UDMR cu rotativă a premieratului către PSD din aprilie 2027. A participat la întâlnirea convocată de președintele Nicușor Dan la Cotroceni, încheiată fără acord.",
      },
      {
        data: "2026-06-25",
        text: "A participat la negocierile de la Vila Lac alături de Sorin Grindeanu, Dominic Fritz și Kelemen Hunor. PNL și UDMR au propus un acord de susținere parlamentară limitat la șase luni pentru un guvern minoritar condus de Grindeanu, fără ca semnatarii să facă parte din el. Întâlnirea s-a încheiat fără acordul tuturor părților, blocată pe cererea unui calendar fix de predare a mandatului de premier.",
      },
      {
        data: "2026-06-22",
        text: "Guvernul Veștea — pe care PNL nu l-a susținut — a picat la votul de învestitură (207 voturi exprimate, sub pragul de 233), confirmând riscul pe care îl semnalase. Alternativa propusă de el, un guvern minoritar PNL–USR–UDMR, rămâne pe masă în consultările repornite de la Cotroceni.",
      },
      {
        data: "2026-06-21",
        text: "Reales președinte PNL la Congresul Extraordinar, cu 1.769 din 1.842 de voturi exprimate (96%), pe moțiunea „Modernizare cu Rădăcini”. Congresul a adoptat în unanimitate două rezoluții — reconfirmarea interdicției de coaliție cu PSD, cu excludere automată pentru membrii care ar vota un guvern cu PSD, și un ultimatum de demisie din partid, până luni, 22 iunie, ora 12:00, pentru Lucian Bode, Rareș Bogdan, Adrian Veștea, Hubert Thuma și Alina Gorghiu. A anunțat că va propune președintelui Nicușor Dan un guvern minoritar PNL–USR–UDMR, ca alternativă la Cabinetul Veștea.",
      },
      {
        data: "2026-06-20",
        text: "A depus candidatura pentru un nou mandat de președinte PNL, cu moțiunea „Modernizare cu Rădăcini” și o echipă propusă (Dan Motreanu — prim-vicepreședinte, Robert Sighiartău — secretar general, 8 vicepreședinți, între care Dragoș Pîslaru și Oana Gheorghiu). A rămas singurul candidat după ce Adrian Veștea, care anunțase cu o seară înainte intenția de a-l contracandida, și-a retras candidatura.",
      },
      {
        data: "2026-06-19",
        text: "Consiliul Național Extraordinar al PNL (online) a votat, la inițiativa sa, convocarea Congresului Extraordinar din 21 iunie (566 pentru, 97 contra, 19 abțineri) și modificări de statut (551 pentru, 128 contra, 3 abțineri) — pași premergători excluderii lui Adrian Veștea din partid.",
      },
      {
        data: "2026-06-18",
        text: "Tribunalul Ilfov a admis cererea celor 16 parlamentari pro-Veștea și a suspendat cele două decizii BPN din 15 iunie prin care gruparea sa obliga parlamentarii PNL să nu voteze Guvernul Veștea; PNL a anunțat că atacă decizia, contestând competența teritorială a instanței.",
      },
      {
        data: "2026-06-17",
        text: "La inițiativa sa, PNL a convocat Consiliul Național Extraordinar (19 iunie, online) și un Congres extraordinar (21 iunie, Romexpo) cu excluderea din partid a lui Adrian Veștea pe ordinea de zi, în urma desemnării acestuia ca premier fără consultarea conducerii PNL.",
      },
      {
        data: "2026-06-11",
        text: "A prezidat ședința BPN PNL care a decis unanim să nu voteze investitura Guvernului Tomac. A declarat că formula este „o formulă de paravan pentru a scuti PSD de răspundere” și că „un guvern fără susținere politică nu poate spera decât la supraviețuire”.",
      },
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
      "Convocarea unui Congres extraordinar pentru a exclude propriul premier desemnat (Veștea) a fost interpretată drept o luptă internă pentru controlul PNL, nu doar o sancțiune pentru lipsa de consultare.",
      "Tribunalul Ilfov a suspendat, pe 18 iunie, deciziile BPN prin care gruparea sa obliga parlamentarii PNL să nu voteze Guvernul Veștea — o instanță a intervenit direct într-un proces decizional intern al partidului pe care îl conduce.",
      "Congresul pe care l-a convocat a cerut, pe 21 iunie, sub sancțiunea excluderii, demisia a cinci lideri liberali — Bode, Bogdan, Veștea, Thuma și Gorghiu — invocând decizii BPN deja suspendate de Tribunalul Ilfov; tabăra Veștea a anunțat că va contesta excluderile în instanță.",
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
      {
        titlu: "HotNews — PNL a decis în unanimitate să nu susțină Guvernul Tomac (11 iunie 2026)",
        url: "https://hotnews.ro/sedinta-la-pnl-pentru-guvernul-tomac-liberalii-decid-daca-voteaza-guvernul-propus-2270450",
      },
      {
        titlu: "HotNews — Congres extraordinar la PNL duminică, 21 iunie",
        url: "https://hotnews.ro/congres-extraordinar-la-pnl-duminica-2276227",
      },
      {
        titlu: "HotNews — Cătălin Predoiu a demisionat din conducerea PNL",
        url: "https://hotnews.ro/catalin-predoiu-a-demisionat-din-conducerea-pnl-2276186",
      },
      {
        titlu: "Digi24 — Instanța a suspendat decizia BPN al PNL de excludere a liberalilor care votează cu Veștea (18 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/contestatarii-lui-bolojan-au-atacat-in-instanta-decizia-pnl-de-a-i-exclude-pe-cei-care-voteaza-guvernul-vestea-surse-3821731",
      },
      {
        titlu: "HotNews — PNL va ataca decizia Tribunalului Ilfov care a suspendat hotărârile privind votul pentru Guvernul Veștea (19 iunie 2026)",
        url: "https://hotnews.ro/pnl-va-ataca-decizia-tribunalului-ilfov-care-a-suspendat-hotararile-privind-votul-pentru-guvernul-vestea-nu-afecteaza-in-niciun-fel-optiunile-poltice-ale-partidului-2277517",
      },
      {
        titlu: "Stiripesurse — Consiliul Național al PNL a aprobat convocarea Congresului Extraordinar pentru 21 iunie (19 iunie 2026)",
        url: "https://www.stiripesurse.ro/consiliul-national-al-pnl-a-aprobat-convocarea-congresului-extraordinar_3896513",
      },
      {
        titlu: "Agerpres — PNL: Ilie Bolojan și-a depus candidatura pentru funcția de președinte al partidului (20 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/20/pnl-ilie-bolojan-si-a-depus-candidatura-pentru-functia-de-presedinte-al-partidului--1568427",
      },
      {
        titlu: "Adevărul — LIVE TEXT Congresul PNL: Bolojan reales președinte cu 1.769 de voturi (21 iunie 2026)",
        url: "https://adevarul.ro/politica/congres-tensionat-in-pnl-ilie-bolojan-candideaza-2537914.html",
      },
      {
        titlu: "TVR Info — Au fost adoptate două rezoluții la Congresul PNL: fără coaliție cu PSD; demisiile lui Veștea, Bode, Bogdan, Thuma și Gorghiu (21 iunie 2026)",
        url: "https://tvrinfo.ro/au-fost-adoptate-doua-rezolutii-la-congresul-pnl-partidul-reconfirma-ca-nu-mai-face-coalitie-cu-psd-se-cer-demisiile-lui-vestea-bode-bogdan-thuma-si-gorghiu/",
      },
      {
        titlu: "Ziare.com — Bolojan, după realegere: îi va propune lui Nicușor Dan un guvern minoritar PNL-USR-UDMR (21 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/ilie-bolojan-guvern-minoritar-pnl-usr-udmr-2019931",
      },
      {
        titlu: "Digi24 — Guvernul Veștea, susținut de PSD și disidenții liberali, a picat la vot în Parlament (22 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/surse-lista-ministrilor-din-guvernul-vestea-va-fi-depusa-in-aceasta-seara-la-parlament-cine-ar-face-parte-din-cabinetul-propus-3825177",
      },
      {
        titlu: "DCNews — Ședința de la Vila Lac s-a încheiat. S-ar fi ajuns la... blocaj! (25 iunie 2026)",
        url: "https://www.dcnews.ro/grindeanu-bolojan-si-fritz-intalnire-la-vila-lac-inainte-de-desemnarea-premierului_1064525.html",
      },
      {
        titlu: "Ziare.com — Eșec total la Vila Lac. Negocierile s-au blocat în orgolii (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/esec-total-vila-lac-negocieri-blocate-orgolii-2020794",
      },
      {
        titlu: "Gandul — Ilie Bolojan îl contrazice pe președintele Nicușor Dan și zice că nu l-a mințit. Ce spune despre varianta Mureșan (27 iunie 2026)",
        url: "https://www.gandul.ro/politica/ilie-bolojan-il-contrazice-pe-presedintele-nicusor-dan-si-zice-ca-nu-l-a-mintit-ce-spune-despre-varianta-muresan-20935744",
      },
      {
        titlu: "Ziarul Profit — PNL, reacție după ce Nicușor Dan a avut o atitudine neașteptată față de Ilie Bolojan: „Nu acceptăm lecții despre responsabilitate de la cei care au aruncat România în criză” (27 iunie 2026)",
        url: "https://www.ziarulprofit.ro/pnl-reactie-dupa-ce-nicusor-dan-a-avut-o-atitudine-neasteptata-fata-de-ilie-bolojan-nu-acceptam-lectii-despre-responsabilitate-de-la-cei-care-au-aruncat-romania-in-criza/",
      },
    ],
  },
  {
    slug: "eugen-tomac",
    nume: "Eugen Tomac",
    functie: "Lider PMP (mandat de premier desemnat renunțat pe 14 iunie 2026)",
    partid: "PMP (demisionat de la șefia partidului)",
    dinCand: "desemnat 4 iunie 2026; mandat renunțat 14 iunie 2026",
    rezumat:
      "Desemnat premier pe 4 iunie 2026 pentru un guvern tehnocrat; lider al unui partid neparlamentar (PMP), de la a cărui șefie a demisionat. Lista de miniștri a fost depusă pe 10 iunie; PNL, USR, PSD și AUR au declarat că nu susțin învestirea. Pe 14 iunie, a renunțat la mandat înainte de votul de învestitură, constatând că suma maximă a voturilor disponibile (224) nu putea atinge pragul constituțional de 233.",
    actiuniRecente: [
      {
        data: "2026-06-14",
        text: "A renunțat la mandatul de premier desemnat înainte de votul de învestitură, după ce suma maximă a voturilor disponibile (224) rămânea sub pragul de 233. Aceasta a consumat prima din cele două tentative constituționale permise de Constituție.",
      },
      {
        data: "2026-06-12",
        text: "USR a votat oficial în Comitetul Politic (>90% majoritate) să nu susțină învestirea. Votul de învestitură, programat inițial pe 12 iunie, a fost amânat la aproximativ 16 iunie. Matematic, Tomac nu poate atinge pragul de 233 de voturi (maximum disponibil: 224).",
      },
      {
        data: "2026-06-11",
        text: "Miniștrii propuși sunt audiați în comisiile reunite ale Parlamentului. PNL a decis unanim în BPN să nu voteze cabinetul; PSD a condiționat susținerea de un vot comun cu PNL și USR.",
      },
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
        status: "nelivrat",
        detalii:
          "Lista depusă pe 10 iunie, audieri pe 11 iunie, vot amânat la ~16 iunie. PNL refuză unanim, USR a decis oficial pe 12 iunie (CP, >90%) să nu voteze, PSD condiționat dar nu votează fără PNL/USR — maximum 224 voturi disponibile față de 233 necesare. Eșecul primei încercări constituționale este previzibil.",
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
        data: "2026-06-29",
        text: "S-a declarat de acord cu propunerea liderului UDMR Kelemen Hunor de refacere a unei majorități PSD–PNL–UDMR cu un premier acceptabil tuturor părților, spunând că „e nevoie de calmare” în negocierile blocate.",
      },
      {
        data: "2026-06-28",
        text: "PSD a respins ferm candidatura lui Siegfried Mureșan la funcția de premier, declarând că „sub nicio formă” nu îl va vota, după ce Mureșan l-a criticat dur, numindu-l „premierul OUG 13”.",
      },
      {
        data: "2026-06-26",
        text: "După ce PNL, USR și UDMR au anunțat susținerea lui Siegfried Mureșan ca propunere alternativă de premier, a participat la întâlnirea convocată de președintele Nicușor Dan la Cotroceni alături de Ilie Bolojan, Dominic Fritz, Kelemen Hunor și Varujan Pambuccian; întâlnirea s-a încheiat fără acord și fără o nouă desemnare de premier.",
      },
      {
        data: "2026-06-25",
        text: "A participat la negocierile de la Vila Lac alături de Ilie Bolojan, Dominic Fritz și Kelemen Hunor; întâlnirea s-a încheiat fără acord. A respins explicit propunerea USR a unui guvern minoritar PNL–USR–UDMR cu rotație ulterioară spre PSD: „PSD nu va vota un guvern minoritar PNL-USR-UDMR! România are nevoie de stabilitate, nu de moraliști care stau pe funcții.”",
      },
      {
        data: "2026-06-24",
        text: "Biroul Permanent Național al PSD l-a nominalizat în unanimitate ca propunere a partidului pentru funcția de premier.",
      },
      {
        data: "2026-06-22",
        text: "Guvernul Veștea, pe care PSD îl susținuse formal de la Consiliul Politic Național din 21 iunie, a picat la votul de învestitură (207 voturi exprimate, sub pragul de 233), după ce AUR și UDMR au părăsit sala. A fost convocat la Cotroceni, alături de Veștea, pentru o nouă rundă de consultări cu președintele Nicușor Dan; surse din presă l-au indicat drept posibilă variantă următoare de premier desemnat.",
      },
      {
        data: "2026-06-21",
        text: "Consiliul Politic Național PSD, convocat la Vila Lac, a decis în unanimitate să susțină votul de învestitură al Guvernului Veștea și să intre la guvernare cu opt-nouă ministere (Interne și funcția de vicepremier — Marian Neacșu; Justiție — Radu Marinescu; Sănătate — Alexandru Rogobete; Energie — Bogdan Ivan; Muncă — Florin Manole; Agricultură — Florin Barbu; Mediu — Mihai Ghigiu; Dezvoltare — Romeo Lungu; Cultură — Ionuț Vulpescu), condiționat de includerea în programul de guvernare a unui pachet de măsuri împotriva majorării taxelor pentru veniturile mici și mijlocii și pentru micii întreprinzători.",
      },
      {
        data: "2026-06-18",
        text: "CCR a amânat pentru a doua oară sesizarea sa privind conflictul constituțional dintre Guvern și Parlament pe OUG 38/2026, cu noul termen fixat la 15 iulie 2026.",
      },
      {
        data: "2026-06-17",
        text: "PSD a cerut audierea miniștrilor propuși de Veștea și votul de învestitură până vineri, în timp ce PNL, USR, UDMR și AUR cer amânarea pentru săptămâna viitoare prin Birourile Permanente Reunite. Surse de presă, neconfirmate oficial de partid, au relatat reticența a circa 6 parlamentari PSD față de votul pentru Veștea.",
      },
      {
        data: "2026-06-11",
        text: "PSD l-a acuzat pe Bolojan că „blochează toată România” după decizia PNL de a nu vota Guvernul Tomac. Grindeanu a reiterat că PSD nu va vota investitura dacă nici PNL și nici USR nu o fac.",
      },
      {
        data: "2026-06-05",
        text: "A respins guvernul Tomac: „nu continuăm modelul falimentar Bolojan”; exclude atât guvernul minoritar, cât și alianța cu AUR.",
      },
      {
        data: "2026-05-20",
        text: "A sesizat CCR pe OUG 38/2026, acuzând guvernul demis că a legiferat după retragerea încrederii (art. 110(4) din Constituție) — termen amânat de două ori, ultima dată pentru 15 iulie 2026.",
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
      "Susținerea condiționată de un pachet de măsuri economico-sociale a fost anunțată pe 21 iunie, la trei zile după ce Veștea depusese la Parlament programul de guvernare (18 iunie), fără ca renegocierea textului să fi fost făcută public.",
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
        titlu: "Adevărul — Blocaj pe formarea guvernului Veștea: PSD vrea vot rapid, restul partidelor cer amânare",
        url: "https://adevarul.ro/politica/blocaj-pe-formarea-guvernului-vestea-psd-vrea-vot-2537131.html",
      },
      {
        titlu: "Antena3 — Grindeanu acuză lipsa de transparență în programul SAFE",
        url: "https://www.antena3.ro/politica/grindeanu-acuza-lipsa-de-transparenta-in-programul-safe-am-aflat-de-el-luni-decizia-s-a-luat-la-nivelul-cancelariei-786474.html",
      },
      {
        titlu: "Recorder — PSD se leapădă de Bolojan",
        url: "https://recorder.ro/stirile-zilei/20-aprilie-2026-psd-se-leapada-de-bolojan/",
      },
      {
        titlu: "Mediafax — PSD îl acuză pe Bolojan că „blochează toată România” după decizia PNL de a nu vota Guvernul Tomac",
        url: "https://www.mediafax.ro/politic/psd-il-acuza-pe-bolojan-ca-blocheaza-toata-romania-dupa-decizia-pnl-de-a-nu-vota-guvernul-tomac-23753435",
      },
      {
        titlu:
          "Radio România — CCR a amânat pentru 15 iulie sesizarea lui Sorin Grindeanu pe OUG privind Programul SAFE (18 iunie 2026)",
        url: "https://www.radioromania.ro/Actualitate/ccr-a-amanat-pentru-iulie-sesizarea-lui-sorin-grindeanu-pe-oug-privind-programul-safe-id191333.html",
      },
      {
        titlu: "RomaniaTV.net — SURSE: PSD a votat în unanimitate intrarea în Guvernul Veștea; lista miniștrilor propuși (21 iunie 2026)",
        url: "https://www.romaniatv.net/surse-psd-a-votat-in-unanimitate-intrarea-in-guvernul-vestea-lista-ministrilor-propusi-de-social-democrati_9647011.html",
      },
      {
        titlu: "G4Media — Surse: PSD a decis să intre în Guvernul Veștea; Marian Neacșu — ministru de Interne, Radu Marinescu — Justiție (21 iunie 2026)",
        url: "https://www.g4media.ro/surse-psd-a-decis-sa-intre-in-guvernul-vestea-marian-neacsu-ministru-de-interne-radu-marinescu-la-justitie.html",
      },
      {
        titlu: "DCNews — PSD a decis printr-un vot în unanimitate să intre la guvernare. Portofoliile și viitorii miniștri ai PSD (21 iunie 2026)",
        url: "https://www.dcnews.ro/psd-a-decis-printr-un-vot-in-unanimitate-sa-intre-la-guvernare_1063529.html",
      },
      {
        titlu: "Europa FM — Veștea și Grindeanu, convocați de președinte la Cotroceni, după ce negocierile cu partidele nu au dus la niciun rezultat (23 iunie 2026)",
        url: "https://www.europafm.ro/vestea-si-grindeanu-convocati-de-presedinte-la-cotroceni-dupa-ce-negocierile-cu-partidele-nu-au-dus-la-niciun-rezultat-surse/",
      },
      {
        titlu: "Digi24 — Guvernul Veștea, susținut de PSD și disidenții liberali, a picat la vot în Parlament (22 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/surse-lista-ministrilor-din-guvernul-vestea-va-fi-depusa-in-aceasta-seara-la-parlament-cine-ar-face-parte-din-cabinetul-propus-3825177",
      },
      {
        titlu: "BURSA — Grindeanu: „PSD a decis să-și asume responsabilitatea guvernării” (24 iunie 2026)",
        url: "https://www.bursa.ro/grindeanu-8221psd-a-decis-sa-si-asume-responsabilitatea-guvernarii8221-44293952",
      },
      {
        titlu: "Realitatea.NET — Sorin Grindeanu: „PSD nu va vota un guvern minoritar PNL-USR-UDMR! România are nevoie de stabilitate, nu de moraliști care stau pe funcții” (25 iunie 2026)",
        url: "https://www.realitatea.net/stiri/actual/sorin-grindeanu-psd-nu-va-vota-un-guvern-minoritar-pnl-usr-udmr-romania-are-nevoie-de-stabilitate-nu-de-moralisti-care-stau-pe-functii-71oila",
      },
      {
        titlu: "Ziare.com — Eșec total la Vila Lac. Negocierile s-au blocat în orgolii (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/esec-total-vila-lac-negocieri-blocate-orgolii-2020794",
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
        data: "2026-06-29",
        text: "A reluat amenințarea cu suspendarea președintelui Nicușor Dan, declarând despre felul „cum s-a comportat până acum” că „trebuie suspendat”, în contextul în care AUR are doar circa 90 de mandate în Parlament, insuficiente pentru a iniția singur procedura.",
      },
      {
        data: "2026-06-22",
        text: "În timpul dezbaterilor de învestitură, a anunțat retragerea parlamentarilor AUR din sala de plen, calificând drept „trădător” pe orice parlamentar care ar vota Cabinetul Veștea: „Noi toți care nu suntem trădători părăsim această sală.” Decizia a anulat varianta de susținere individuală pe care o cultivase Veștea și a contribuit decisiv la eșecul votului (207 voturi exprimate, sub pragul de 233).",
      },
      {
        data: "2026-06-17",
        text: "AUR a reconfirmat oficial, prin liderul Petrișor Peiu, refuzul de a vota Guvernul Veștea: „Nu în viața asta”. Deputatul AUR Mohammad Murad a indicat susținere individuală pentru Veștea, contrar liniei partidului.",
      },
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
      "A calificat drept „trădător” pe orice parlamentar AUR care ar fi votat Cabinetul Veștea, chiar înainte de votul din 22 iunie — presiune publică asupra propriilor parlamentari, în contradicție cu susținerile individuale pe care chiar premierul desemnat le invocase ca posibile.",
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
      {
        titlu:
          "HotNews — Un lider AUR exclude ca parlamentari ai partidului să voteze Guvernul Veștea: „Nu în viața asta”",
        url: "https://hotnews.ro/un-lider-aur-exclude-ca-parlamentari-ai-partidului-sa-voteze-guvernul-vestea-e-o-informatie-fabricata-nu-in-viata-asta-2275465",
      },
      {
        titlu: "Mediafax — A început ședința Parlamentului pentru votul de învestire: Simion — „Noi toți care nu suntem trădători părăsim această sală” (22 iunie 2026)",
        url: "https://www.mediafax.ro/politic/a-inceput-sedinta-parlamentului-pentru-votul-de-investire-a-guvernului-vestea-simion-noi-toti-care-nu-suntem-tradatori-parasim-aceasta-sala-premierul-desemnat-cere-stabilitate-s-23759285",
      },
      {
        titlu: "Recorder — 22 iunie 2026: Guvernul Veștea-Nicușor, la mila AUR",
        url: "https://recorder.ro/stirile-zilei/22-iunie-2026-guvernul-vestea-nicusor-la-mila-aur/",
      },
      {
        titlu: "Știrile ProTV — George Simion, despre președintele Nicușor Dan: „La cum s-a comportat până acum, trebuie suspendat” (29 iunie 2026)",
        url: "https://stirileprotv.ro/stiri/politic/george-simion-despre-presedintele-nicusor-dan-la-cum-s-a-comportat-pana-acum-trebuie-suspendat.html",
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
        data: "2026-06-25",
        text: "A participat la negocierile de la Vila Lac alături de Ilie Bolojan, Sorin Grindeanu și Kelemen Hunor. USR a refuzat să susțină un guvern condus de PSD și a contrapropus, pentru o perioadă de șase luni, un guvern minoritar PNL–USR–UDMR urmat de o rotație a guvernării în favoarea PSD — propunere respinsă explicit de Grindeanu. Întâlnirea s-a încheiat fără acord.",
      },
      {
        data: "2026-06-17",
        text: "Comitetul Politic al USR a decis în unanimitate să nu susțină Cabinetul Veștea. Fritz: „Peste PSD, Guvernul Veștea ar avea nevoie să adune voturi de la peste 100 de traseiști. Un Guvern de pe Temu: de proastă calitate și care ar costa românii scump.”",
      },
      {
        data: "2026-06-12",
        text: "Comitetul Politic al USR a votat cu peste 90% să nu susțină învestirea Guvernului Tomac. Fritz a declarat că un guvern tehnocrat ar fi „nefuncțional, pentru că nimeni nu răspunde cu adevărat de decizii” și a propus ca alternativă un guvern politic minoritar PNL+USR+UDMR.",
      },
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
      {
        titlu: "Digi24 — USR nu susține guvernul Tomac (decizie CP, 12 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/usr-nu-sustine-guvernul-tomac-3812977",
      },
      {
        titlu: "ProTV — USR a anunțat oficial că nu votează guvernul Tomac; alternativa propusă",
        url: "https://stirileprotv.ro/stiri/politic/usr-a-decis-oficial-sa-nu-voteze-guvernul-lui-eugen-tomac-alternativa-pe-care-o-propune.html",
      },
      {
        titlu:
          "AGERPRES — Comitetul Politic al USR a decis să nu susțină Cabinetul Veștea; Dominic Fritz: „un Guvern de pe Temu” (17 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/17/comitetul-politic-al-usr-a-decis-sa-nu-sustina-cabinetul-vestea-dominic-fritz-un-guvern-de-pe-temu--1567459",
      },
      {
        titlu: "DCNews — Ședința de la Vila Lac s-a încheiat. S-ar fi ajuns la... blocaj! (25 iunie 2026)",
        url: "https://www.dcnews.ro/grindeanu-bolojan-si-fritz-intalnire-la-vila-lac-inainte-de-desemnarea-premierului_1064525.html",
      },
      {
        titlu: "Ziare.com — Eșec total la Vila Lac. Negocierile s-au blocat în orgolii (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/esec-total-vila-lac-negocieri-blocate-orgolii-2020794",
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
        data: "2026-06-29",
        text: "A anunțat că termenul de 30 iunie nu va fi respectat și a estimat o soluție posibilă abia spre finalul lunii iulie; a propus reluarea negocierilor pentru o coaliție PSD–PNL–UDMR cu un premier „acceptabil pentru toate părțile”, propunere la care Sorin Grindeanu și-a exprimat acordul.",
      },
      {
        data: "2026-06-25",
        text: "A participat la negocierile de la Vila Lac alături de Ilie Bolojan, Sorin Grindeanu și Dominic Fritz, în cadrul propunerii PNL–UDMR a unui acord de susținere parlamentară limitat la șase luni pentru un guvern minoritar condus de Grindeanu. Întâlnirea s-a încheiat fără acordul tuturor părților.",
      },
      {
        data: "2026-06-22",
        text: "Cei 31 de parlamentari UDMR au părăsit sala la votul de învestitură, conform deciziei anunțate pe 17 iunie. De la tribuna Parlamentului, după anunțul lui George Simion că AUR se retrage din sală, l-a felicitat ironic: „Există un singur om care astăzi a câștigat. Nu este în sală, dar talentul trebuie recunoscut. Felicitări, George Simion, ai dat șah și mat!” Guvernul Veștea a picat (207 voturi exprimate, sub pragul de 233).",
      },
      {
        data: "2026-06-17",
        text: "A clarificat poziția anunțată cu o zi înainte: cei 31 de parlamentari UDMR nu vor vota CONTRA, ci vor ieși din sală la momentul votului de învestitură: „Noi am luat decizia să ieșim din sală în momentul votului.”",
      },
      {
        data: "2026-06-16",
        text: "Consiliul Permanent UDMR a decis să nu intre în Guvernul Veștea și a recomandat parlamentarilor UDMR (31 mandate) să voteze CONTRA învestițirii. Vicepreședintele Csoma Botond: „Nu vedem cum va putea face o majoritate.”",
      },
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
        status: "nelivrat",
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
      {
        titlu: "HotNews — UDMR a decis să nu intre la guvernare și a recomandat parlamentarilor să nu voteze Cabinetul Veștea (16 iunie 2026)",
        url: "https://hotnews.ro/udmr-a-decis-privind-vestea-nu-intra-la-guvernare-si-parlamentarii-sai-au-fost-indemnati-sa-nu-voteze-acest-guvern-2275053",
      },
      {
        titlu: "Bursa.ro — UDMR decide să rămână în afara executivului și recomandă vot împotriva la învestitură (16 iunie 2026)",
        url: "https://www.bursa.ro/udmr-decide-sa-ramana-in-afara-executivului-si-recomanda-vot-impotriva-la-investitura-66913953",
      },
      {
        titlu:
          "Capital.ro — Kelemen Hunor: „Noi am luat decizia să ieșim din sală în momentul votului” (17 iunie 2026)",
        url: "https://www.capital.ro/udmr-nu-va-vota-guvernul-vestea-kelemen-hunor-noi-am-luat-decizia-sa-iesim-din-sala-in-momentul-votului.html",
      },
      {
        titlu: "HotNews — Kelemen Hunor, de la tribuna Parlamentului: „Felicitări, George Simion, ai dat șah și mat!” (22 iunie 2026)",
        url: "https://hotnews.ro/kelemen-hunor-omagiu-pentru-george-simion-de-la-tribuna-parlmanetului-exista-un-singur-om-care-astazi-a-castigat-nu-este-in-sala-dar-talentul-trebuie-recunoscut-felicitari-george-simion-2281430",
      },
      {
        titlu: "Ziare.com — Kelemen Hunor: „Bravo, George Simion, ai dat șah și mat” (22 iunie 2026)",
        url: "https://ziare.com/guvernul-vestea/kelemen-hunor-sedinta-vot-investire-guvern-vestea-2020192",
      },
      {
        titlu: "DCNews — Ședința de la Vila Lac s-a încheiat. S-ar fi ajuns la... blocaj! (25 iunie 2026)",
        url: "https://www.dcnews.ro/grindeanu-bolojan-si-fritz-intalnire-la-vila-lac-inainte-de-desemnarea-premierului_1064525.html",
      },
      {
        titlu: "Ziare.com — Eșec total la Vila Lac. Negocierile s-au blocat în orgolii (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/esec-total-vila-lac-negocieri-blocate-orgolii-2020794",
      },
      {
        titlu:
          "G4Media — BREAKING: Kelemen Hunor anunță că un nou guvern se poate forma abia spre sfârșitul lunii iulie, „dacă nu are cineva o baghetă magică” (29 iunie 2026)",
        url: "https://www.g4media.ro/breaking-kelemen-hunor-anunta-ca-un-nou-guvern-se-poate-forma-abia-spre-sfarsitul-lunii-iulie-daca-nu-are-cineva-o-bagheta-magica.html",
      },
      {
        titlu:
          "HotNews — VIDEO Kelemen Hunor invită la „răcirea temperaturii declarațiilor”. Soluția de guvern pe care o vede încă posibilă (29 iunie 2026)",
        url: "https://hotnews.ro/video-kelemen-hunor-invita-la-racirea-temperaturii-declaratiilor-solutia-de-guvern-pe-care-o-vede-inca-posibila-2287549",
      },
      {
        titlu: "Adevărul — Kelemen Hunor propune refacerea coaliției (29 iunie 2026)",
        url: "https://adevarul.ro/politica/kelemen-hunor-propune-refacerea-coalitiei-2539772.html",
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
          "Activitate parlamentară dominată de apărarea lui Călin Georgescu (inculpat pentru acțiuni contra ordinii constituționale; ÎCCJ urmează să decidă legalitatea rechizitoriului în camera preliminară pe 29 iunie, după ce termenul din 19 iunie a fost amânat ca urmare a unei cereri de abținere formulate de unul dintre judecători), nu de inițiative pentru cetățean.",
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
      {
        titlu: "Stiripesurse — ÎCCJ reia dezbaterile în dosarul Georgescu–Potra; decizia privind legalitatea rechizitoriului, amânată după schimbarea completului (19 iunie 2026)",
        url: "https://www.stiripesurse.ro/iccj-reia-dezbaterile-in-dosarul-georgescu-potra-decizia-privind-legalitatea-rechizitoriului-a-fost-amanata-dupa-schimbarea-completului_3896442",
      },
    ],
  },
  {
    slug: "adrian-vestea",
    nume: "Adrian Veștea",
    functie: "Fost premier desemnat (mandat picat la votul de învestitură, 22 iunie 2026)",
    partid: "PNL (prim-vicepreședinte)",
    dinCand: "desemnat 14 iunie 2026; vot de învestitură picat 22 iunie 2026",
    rezumat:
      "Economist, fost primar al Râșnovului (2004–2016), fost președinte al CJ Brașov (2016–2023, a finalizat Aeroportul Brașov-Ghimbav), ministru al Dezvoltării în guvernul Ciolacu (iun. 2023 – nov. 2024). Desemnat premier pe 14 iunie 2026 fără consultarea conducerii PNL. La 16 iunie, după refuzul UDMR, acceptă voturi individuale de la parlamentari AUR și caută o majoritate de conjunctură. Pe 18 iunie a depus la Parlament programul de guvernare și lista miniștrilor, fără să aibă majoritatea necesară; pe 19 iunie, Grindeanu (PSD) a anunțat că partidul are voturile pentru investitură, iar votul a fost recalendarizat pentru 22 iunie 2026. În seara de 19 iunie a anunțat și retras, în câteva ore, o candidatură la șefia PNL împotriva lui Bolojan, pe care apoi a calificat-o drept un „simulacru democratic”. Pe 21 iunie, Congresul PNL i-a cerut, sub sancțiunea excluderii, să demisioneze din partid până luni, 22 iunie, ora 12:00, alături de alți patru lideri liberali; în aceeași zi, Consiliul Politic Național al PSD a decis în unanimitate să-i susțină investitura și să intre la guvernare cu opt-nouă ministere. Votul de învestitură din 22 iunie a picat (207 voturi exprimate, sub pragul de 233), după ce AUR și UDMR au părăsit sala; procedura de desemnare a unui premier se reia de la zero.",
    actiuniRecente: [
      {
        data: "2026-06-22",
        text: "Votul de învestitură a picat — 207 voturi exprimate, sub pragul de 233 — după ce George Simion a retras AUR din sală în timpul dezbaterilor, urmat de cei 31 de parlamentari UDMR. A fost convocat, alături de Sorin Grindeanu, la Cotroceni de președintele Nicușor Dan pentru o nouă rundă de consultări; procedura de desemnare a unui premier se reia de la zero.",
      },
      {
        data: "2026-06-21",
        text: "PNL i-a cerut, sub sancțiunea excluderii, să demisioneze din partid până luni, 22 iunie, ora 12:00, alături de Lucian Bode, Rareș Bogdan, Hubert Thuma și Alina Gorghiu. Tabăra sa a anunțat că va contesta excluderile în instanță, invocând suspendarea judecătorească a deciziilor BPN din 15 iunie. În aceeași zi, Consiliul Politic Național al PSD a decis în unanimitate să susțină votul său de învestitură și să intre la guvernare cu opt-nouă ministere.",
      },
      {
        data: "2026-06-19",
        text: "A anunțat candidatura la șefia PNL și a cerut amânarea Congresului din 21 iunie cu o săptămână, pentru 28 iunie; câteva ore mai târziu a renunțat la candidatură, calificând Congresul drept „acest simulacru democratic prin care se instalează dictatura în partid” și anunțând că îl va contesta în instanță, fără să cheme în discuție data votului de învestitură (23 iunie).",
      },
      {
        data: "2026-06-19",
        text: "Sorin Grindeanu a anunțat în ședința grupurilor parlamentare PSD că partidul are voturile necesare pentru a vota investitura sa, condiționat de decizia Consiliului Politic Național PSD din 21 iunie. Calendarul comunicat fixează audierile în comisii pentru 22 iunie și votul de învestitură în plen pentru 23 iunie 2026.",
      },
      {
        data: "2026-06-18",
        text: "A depus la Parlament programul de guvernare (68 de pagini, priorități: SAFE, aderarea la OCDE, finalizarea PNRR, absorbția fondurilor europene) și lista miniștrilor propuși. Calculul voturilor disponibile la această dată indica circa 211–217 din cele 233 necesare. Tot pe 18 iunie, Tribunalul Ilfov a suspendat deciziile BPN PNL care obligau parlamentarii partidului să nu îl voteze; PNL a anunțat că face apel.",
      },
      {
        data: "2026-06-17",
        text: "Depunerea programului de guvernare și a listei de miniștri, anunțată pentru aceeași zi, a fost pusă pe pauză din cauza fragmentării negocierilor; disputa dintre PSD (vot rapid) și restul partidelor (amânare) privind data votului de învestitură rămâne nerezolvată.",
      },
      {
        data: "2026-06-16",
        text: "A acceptat voturi individuale de la parlamentari AUR: „Nu mă deranjează că vor fi parlamentari AUR care vor da dovadă de patriotism.\" A continuat negocierile cu PSD, POT și parlamentari PNL dizidenți, după ce UDMR a anunțat că nu intră la guvernare.",
      },
      {
        data: "2026-06-16",
        text: "PNL (prin Bolojan) a anunțat că parlamentarii care îl vor vota riscă excluderea din partid.",
      },
      {
        data: "2026-06-14",
        text: "Desemnat premier de Nicușor Dan, fără consultarea prealabilă a conducerii PNL. A primit mandatul și a demarat consultările cu partidele parlamentare.",
      },
    ],
    promisiuniVsFapte: [
      {
        promisiune: "Formarea unui guvern politic și obținerea votului de învestitură",
        status: "nelivrat",
        detalii:
          "Fără PNL oficial, fără USR și fără UDMR (după 16 iunie), a căutat majoritate de la PSD, POT, minorități, dizidenți PNL și voturi individuale AUR. Pe 17 iunie, Ludovic Orban estima 276 de parlamentari împotrivă, peste pragul de 233 necesar pentru respingere. Pe 18 iunie a depus programul de guvernare și lista miniștrilor, dar calculul voturilor disponibile (~211–217) rămânea sub pragul de 233. Pe 21 iunie, PSD a confirmat formal susținerea și intrarea la guvernare cu opt-nouă ministere, dar condiționat de un pachet de măsuri sociale suplimentar; în aceeași zi, Bolojan a anunțat o alternativă (guvern minoritar PNL-USR-UDMR) și PNL i-a cerut demisia sub sancțiunea excluderii. La votul din 22 iunie, retragerea AUR din sală (anunțată de George Simion în timpul dezbaterilor) și ieșirea celor 31 de parlamentari UDMR au lăsat doar 207 voturi exprimate, sub pragul de 233 — guvernul nu a fost învestit.",
      },
    ],
    controverse: [
      "Desemnarea a fost calificată de liderul PNL Ilie Bolojan drept „act ostil, evidentă încercare de rupere a PNL\" — premierul desemnat face parte din partidul care refuză să îl susțină.",
      "Acceptarea voturilor de la parlamentari AUR (decizie individuală, nu de bloc) a declanșat critici că guvernul ar urma să depindă de formațiuni cu care PNL declarase anterior că nu va colabora.",
      "Proximitatea față de PSD în negocieri — condiția PSD de a exclude USR din guvernare ridică întrebări despre independența cabinetului față de cel mai mare partid din opoziție.",
      "PNL a convocat un Congres extraordinar pentru 21 iunie cu excluderea sa din partid pe ordinea de zi.",
      "Pe 19 iunie seara și-a anunțat candidatura la șefia PNL împotriva lui Bolojan, cerând amânarea Congresului, pentru ca în aceeași seară să renunțe și să califice respectivul Congres drept „simulacru democratic” — schimbare de poziție în decurs de câteva ore.",
      "Ultimatumul PNL din 21 iunie (demisie până la 22 iunie, ora 12:00, sub sancțiunea excluderii) a fost calificat de tabăra sa drept nelegal, întrucât se bazează pe decizii ale BPN deja suspendate de Tribunalul Ilfov.",
      "Mizase public pe susținere individuală de la parlamentari AUR („Nu mă deranjează că vor fi parlamentari AUR care vor da dovadă de patriotism”); George Simion a anulat exact această variantă, calificând drept „trădător” pe orice parlamentar AUR care ar fi votat Cabinetul.",
    ],
    pozitionare: [
      { tema: "Criza politică", pozitie: "Intenționează să formeze un guvern politic fără PNL oficial, fără USR și fără UDMR, bazat pe PSD, POT, minorități și dizidenți." },
      { tema: "PNRR / fiscal", pozitie: "Nu a comunicat public un program fiscal detaliat; negocierile au vizat compoziția politică, nu platforma programatică." },
      { tema: "UE / NATO", pozitie: "Fără declarații publice specifice în calitate de premier desemnat; angajamentele internaționale ale României nu sunt contestate." },
    ],
    surse: [
      {
        titlu: "HotNews — Nicușor Dan l-a desemnat premier pe Adrian Veștea (14 iunie 2026)",
        url: "https://hotnews.ro/nicusor-dan-l-a-desemnat-premier-pe-adrian-vestea-pnl-2274317",
      },
      {
        titlu: "HotNews — UDMR a decis să nu intre la guvernare și a recomandat parlamentarilor să nu voteze Cabinetul Veștea (16 iunie 2026)",
        url: "https://hotnews.ro/udmr-a-decis-privind-vestea-nu-intra-la-guvernare-si-parlamentarii-sai-au-fost-indemnati-sa-nu-voteze-acest-guvern-2275053",
      },
      {
        titlu: "Ziare.com — Veștea acceptă voturi de la AUR (16 iunie 2026)",
        url: "https://ziare.com/adrian-vestea/premierul-desemnat-ajuns-ceara-voturi-suveranisti-2018999",
      },
      {
        titlu: "HotNews — Ce șanse are Guvernul Veștea după decizia UDMR (16 iunie 2026)",
        url: "https://hotnews.ro/ce-sanse-are-vestea-sa-treaca-de-votul-parlamentului-dupa-decizia-udmr-ultimele-calcule-2275118",
      },
      {
        titlu: "Ziare.com — Bolojan amenință cu excluderea parlamentarilor PNL care votează Veștea",
        url: "https://ziare.com/ilie-bolojan/bolojan-parlamentari-pnl-excludere-vot-vestea-2019003",
      },
      {
        titlu: "Bursa.ro — UDMR decide să rămână în afara executivului și recomandă vot împotriva la învestitură (16 iunie 2026)",
        url: "https://www.bursa.ro/udmr-decide-sa-ramana-in-afara-executivului-si-recomanda-vot-impotriva-la-investitura-66913953",
      },
      {
        titlu: "BURSA — Adrian Veștea depune la Parlament programul de guvernare și lista miniștrilor (18 iunie 2026)",
        url: "https://www.bursa.ro/adrian-vestea-depune-la-parlament-programul-de-guvernare-si-lista-ministrilor-60833958",
      },
      {
        titlu: "Economica.net — Votul pentru învestirea Guvernului Veștea se amână pentru luni, 22 iunie",
        url: "https://www.economica.net/votul-pentru-investirea-guvernului-vestea-se-amana-pentru-luni_951525.html",
      },
      {
        titlu: "Digi24 — Instanța a suspendat decizia BPN al PNL de excludere a liberalilor care votează cu Veștea (18 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/contestatarii-lui-bolojan-au-atacat-in-instanta-decizia-pnl-de-a-i-exclude-pe-cei-care-voteaza-guvernul-vestea-surse-3821731",
      },
      {
        titlu: "Replica Online — Grindeanu, mesaj în ședința PSD: „Vă anunț că avem voturile pentru a trece acest Guvern” (19 iunie 2026)",
        url: "https://www.replicaonline.ro/grindeanu-mesaj-in-sedinta-psd-va-anunt-ca-avem-voturile-pentru-a-trece-acest-guvern-660642",
      },
      {
        titlu: "Replica Online — Votul pentru Guvernul Veștea se amână pentru săptămâna viitoare: Grindeanu a făcut anunțul în ședința PSD (19 iunie 2026)",
        url: "https://www.replicaonline.ro/votul-pentru-guvernul-vestea-se-amana-pentru-saptamana-viitoare-grindeanu-a-facut-anuntul-in-sedinta-psd-660643",
      },
      {
        titlu: "HotNews — Adrian Veștea anunță că nu mai candidează la șefia PNL la congresul de duminică, pe care îl voia amânat cu o săptămână (19 iunie 2026)",
        url: "https://hotnews.ro/adrian-vestea-anunta-ca-nu-mai-candideaza-la-sefia-pnl-la-congresul-de-duminica-pe-care-il-voia-amanat-cu-o-saptamana-cum-motiveaza-2278789",
      },
      {
        titlu: "Antena 3 CNN — Adrian Veștea îi cere lui Bolojan să amâne Congresul cu o săptămână și îl anunță că-l va contracandida (19 iunie 2026)",
        url: "https://www.antena3.ro/politica/adrian-vestea-ii-cere-lui-bolojan-sa-amane-congresul-cu-o-saptamana-si-il-anunta-ca-l-va-contracandida-sunt-convins-ca-nu-va-refuza-792605.html",
      },
      {
        titlu: "TVR Info — Au fost adoptate două rezoluții la Congresul PNL: fără coaliție cu PSD; demisiile lui Veștea, Bode, Bogdan, Thuma și Gorghiu (21 iunie 2026)",
        url: "https://tvrinfo.ro/au-fost-adoptate-doua-rezolutii-la-congresul-pnl-partidul-reconfirma-ca-nu-mai-face-coalitie-cu-psd-se-cer-demisiile-lui-vestea-bode-bogdan-thuma-si-gorghiu/",
      },
      {
        titlu: "Știrile ProTV — Tabăra Veștea contraatacă după Congresul PNL: „Excluderile nu produc efecte și pot fi anulate în instanță” (21 iunie 2026)",
        url: "https://stirileprotv.ro/stiri/politic/tabara-vestea-contraataca-dupa-congresul-pnl-excluderile-nu-produc-efecte-si-pot-fi-anulate-in-instanta.html",
      },
      {
        titlu: "RomaniaTV.net — SURSE: PSD a votat în unanimitate intrarea în Guvernul Veștea; lista miniștrilor propuși (21 iunie 2026)",
        url: "https://www.romaniatv.net/surse-psd-a-votat-in-unanimitate-intrarea-in-guvernul-vestea-lista-ministrilor-propusi-de-social-democrati_9647011.html",
      },
      {
        titlu: "HotNews — Lovitură de forță în Parlament: Kelemen Hunor, George Simion și parlamentarii AUR au părăsit sala; rezultatul votului (22 iunie 2026)",
        url: "https://hotnews.ro/guvern-adrian-vestea-parlament-ministri-audieri-vot-investitura-birourile-reunite-2280072",
      },
      {
        titlu: "Digi24 — Guvernul Veștea, susținut de PSD și disidenții liberali, a picat la vot în Parlament: decizia AUR a schimbat meciul (22 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/surse-lista-ministrilor-din-guvernul-vestea-va-fi-depusa-in-aceasta-seara-la-parlament-cine-ar-face-parte-din-cabinetul-propus-3825177",
      },
      {
        titlu: "Mediafax — A început ședința Parlamentului pentru votul de învestire: Simion — „Noi toți care nu suntem trădători părăsim această sală” (22 iunie 2026)",
        url: "https://www.mediafax.ro/politic/a-inceput-sedinta-parlamentului-pentru-votul-de-investire-a-guvernului-vestea-simion-noi-toti-care-nu-suntem-tradatori-parasim-aceasta-sala-premierul-desemnat-cere-stabilitate-s-23759285",
      },
      {
        titlu: "Europa FM — Veștea și Grindeanu, convocați de președinte la Cotroceni, după ce negocierile cu partidele nu au dus la niciun rezultat (23 iunie 2026)",
        url: "https://www.europafm.ro/vestea-si-grindeanu-convocati-de-presedinte-la-cotroceni-dupa-ce-negocierile-cu-partidele-nu-au-dus-la-niciun-rezultat-surse/",
      },
    ],
  },
];

export function getActor(slug: string): Actor | undefined {
  return actori.find((a) => a.slug === slug);
}
