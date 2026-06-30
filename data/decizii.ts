import type { Decizie } from "@/lib/types";

/**
 * Deciziile analizate de guvernul paralel.
 * Fiecare intrare e construită din surse oficiale și presă citată în `surse`.
 * Populat cu deciziile și legile majore din perioada martie–iunie 2026; se actualizează continuu.
 */
export const decizii: Decizie[] = [
  {
    slug: "desemnarea-adrian-vestea-criza-pnl",
    titlu:
      "Desemnarea lui Adrian Veștea: a doua tentativă și criza din PNL",
    data: "2026-06-14",
    institutie: "Președinție",
    domenii: ["guvernare", "criză politică"],
    rezumat:
      "La 40 de zile de la căderea guvernului Bolojan, Nicușor Dan l-a desemnat premier pe liberalul Adrian Veștea — fără să consulte conducerea PNL. Bolojan a calificat decizia drept „act ostil, evidentă încercare de rupere a PNL\". Veștea refuză să-și depună mandatul, acceptă voturi individuale AUR și caută majoritate cu PSD, dizidenți PNL, POT și minorități. Pe 17 iunie, UDMR a clarificat că cei 31 de parlamentari nu vor vota CONTRA, ci vor ieși din sală la momentul votului; PNL a convocat un Congres extraordinar pe 21 iunie, iar Cătălin Predoiu a demisionat din funcția de prim-vicepreședinte PNL. Veștea a renunțat pe 19 iunie seara să candideze la șefia partidului, iar pe 20 iunie Bolojan a depus, ca singură candidatură, moțiunea „Modernizare cu Rădăcini”, cu doi miniștri din propriul guvern interimar înscriși proaspăt în PNL în echipa de conducere propusă. Pe 21 iunie, Congresul Extraordinar l-a reales pe Bolojan cu 96% din voturi și a dat un ultimatum de demisie, sub sancțiunea excluderii, lui Veștea și altor patru lideri liberali; în aceeași zi, Consiliul Politic Național al PSD a decis în unanimitate să susțină investitura lui Veștea și să intre la guvernare cu opt-nouă ministere.",
    explicatie:
      "Pe 14 iunie 2026, Eugen Tomac a renunțat la mandat de premier desemnat înainte de votul de învestitură — consacrând eșecul primei tentative fără a ajunge la vot. Motivul: aritmetica parlamentară era ireversibilă (PNL, USR și UDMR refuzaseră investitura, suma maximă disponibilă era 224, sub pragul de 233).\n\nImediat, Nicușor Dan l-a desemnat premier pe Adrian Veștea: economist (ASE București, expert contabil), fost primar al Râșnovului (2004–2016), fostul președinte al Consiliului Județean Brașov (2016–2023, perioadă în care a construit Aeroportul Internațional Brașov-Ghimbav, primul aeroport nou din România de la 1989), ulterior ministru al Dezvoltării în guvernul Ciolacu (iun. 2023 – nov. 2024). La momentul desemnării era prim-vicepreședintele PNL, din gruparea considerată pro-PSD a partidului.\n\nProblema: Nicușor Dan nu a consultat conducerea PNL înainte de desemnare. Ilie Bolojan a reacționat imediat: „Nici conducerea PNL și nici eu, personal, nu am fost informați anterior de președinte. Un act ostil, o evidentă încercare de rupere a PNL.\" BPN PNL a votat să nu susțină guvernul Veștea și i-a dat lui Veștea un ultimatum să-și depună mandatul până marți dimineața la ora 10 (16 iunie). Veștea a refuzat: „Vreau să fie foarte clar: nu îmi depun mandatul.\" PNL a amenințat cu excluderi din partid.\n\nÎntre timp, PSD a mandatat pe Grindeanu să negocieze cu Veștea — dar cu condiția explicită a excluderii USR din orice formulă de guvernare. Pe 16 iunie (la data acestei analize), ultimatumul PNL expirase. Veștea a început negocieri cu POT (Anamaria Gavrilă), urma să se întâlnească cu UDMR și PSD. Aritmetica e la fel de incertă ca la Tomac.",
    pro: [
      "Profil administrativ verificabil: aeroportul Brașov e un proiect livrat, concret și atipic pentru politica românească.",
      "Veștea declară că dorește un guvern politic, nu tehnocrat — mai coerent cu cererile exprimate de USR (Fritz propusese PNL+USR+UDMR) și cu principiul responsabilității politice.",
      "PSD a dat mandat de negociere lui Grindeanu, deschizând posibilitatea unui acord cu cel mai mare partid din Parlament.",
      "A doua desemnare consumă ultima șansă constituțională — crește presiunea pe toți actorii să ajungă la un acord și să evite dizolvarea Parlamentului și alegerile anticipate.",
    ],
    contra: [
      "Desemnarea s-a făcut fără consultarea PNL — care e principalul rezervor de voturi pentru un eventual guvern al lui Veștea. S-a repetat exact greșeala Tomac: premier desemnat fără majoritate asigurată în prealabil.",
      "Bolojan și conducerea PNL se opun, iar amenințarea cu excluderea transformă criza guvernamentală într-o criză internă PNL — daună adițională față de tentativa Tomac.",
      "PSD condiționează sprijinul de excluderea USR — o formulă PSD+minorități+POT ar fi sub 233 de voturi; fără USR sau PNL, matematica nu funcționează.",
      "Dacă și a doua tentativă eșuează (vot negativ sau retragere forțată), Constituția prevede dizolvarea Parlamentului și alegeri anticipate, prelungind paralizia cu alte 3–4 luni.",
    ],
    votParalel: {
      vot: "abținere",
      verdict: "mixt",
      scor: -2,
      motivare:
        "Guvernul paralel se abține din nou — și din aceleași motive structurale ca la Tomac, cu un punct în minus suplimentar pentru escaladarea daunelor. Profilul lui Veștea e mai bun decât al lui Tomac: are experiență administrativă concretă și un aeroport ca dovadă. Și intenția de guvern politic e mai sănătoasă decât formula tehnocrată. Dar metoda e la fel de greșită: o desemnare fără majoritate negociată în prealabil, care a creat și o criză internă în cel mai mare partid de centru-dreapta. Dacă tentativa Tomac a costat o lună de vid guvernamental, tentativa Veștea poate costa fie alegeri anticipate, fie un guvern PSD fără USR, fără PNL și fără legitimitate electorală reală. Abținerea vine cu o cerință nenegociabilă: majoritate confirmată înainte de vot, nu după. Scorul -2 (față de -1 la Tomac) reflectă escaladarea — criza internă PNL e o daună adițională față de tentativa anterioară.",
    },
    votReal: {
      rezultat:
        "Desemnare oficializată prin decret pe 14 iunie 2026. Ultimatumul PNL a expirat; Veștea a refuzat să-și depună mandatul. Pe 16 iunie, UDMR a decis să nu intre în guvern și a recomandat parlamentarilor săi să voteze CONTRA învestiturii; pe 17 iunie, Kelemen Hunor a clarificat că cei 31 de parlamentari nu vor vota CONTRA, ci vor ieși din sală la momentul votului. Tot pe 17 iunie, Comitetul Politic al USR a confirmat oficial, în unanimitate, refuzul de a susține Cabinetul Veștea. Pe 18 iunie, Veștea a depus la Parlament programul de guvernare (document de 68 de pagini, cu patru priorități declarate: programul SAFE, aderarea la OCDE, finalizarea PNRR și absorbția fondurilor europene, inclusiv creșterea graduală a cheltuielilor pentru apărare către 5% din PIB) și lista miniștrilor propuși. Votul de învestitură a fost amânat pentru săptămâna 22–23 iunie 2026, cu audieri în comisiile parlamentare programate pentru luni, 22 iunie. La 18 iunie, calculul voturilor disponibile (PSD, o parte din PNL, Grupul Uniți pentru România, Grupul PACE, minorități naționale, neafiliați) se situa în jurul a 211–217 voturi, sub pragul de 233 necesar pentru învestitură. Tot pe 18 iunie, Tribunalul Ilfov a suspendat, la cererea celor 16 parlamentari pro-Veștea, cele două decizii ale BPN PNL care interziceau parlamentarilor liberali să voteze investitura și prevedeau sancțiuni pentru nerespectarea liniei de partid; PNL a anunțat că va ataca decizia, contestând competența teritorială a Tribunalului Ilfov (susținând că ar fi fost de competența Tribunalului București). Pe 19 iunie, Sorin Grindeanu a anunțat în ședința grupurilor parlamentare PSD că partidul are voturile necesare pentru investitură — condiționat de decizia Consiliului Politic Național PSD din 21 iunie — iar calendarul comunicat indică audieri în comisii luni, 22 iunie, și votul de învestitură în plen marți, 23 iunie 2026. Pe 21 iunie, Congresul Extraordinar al PNL l-a reales pe Ilie Bolojan președinte cu 1.769 din 1.842 de voturi exprimate (96%), pe moțiunea „Modernizare cu Rădăcini”, și a adoptat în unanimitate, prin vot la ridicarea mâinii, două rezoluții: reconfirmarea interdicției de coaliție cu PSD, cu excludere automată pentru orice membru PNL care ar vota, susține sau participa la formarea unui guvern cu PSD, și un ultimatum de demisie din partid, până luni, 22 iunie, ora 12:00, pentru Lucian Bode, Rareș Bogdan, Adrian Veștea, Hubert Thuma și Alina Gorghiu, sub sancțiunea declanșării procedurii de excludere. Delegații au aprobat și modificarea statutului (introducerea moțiunilor pentru candidaturi, înființarea Biroului Permanent Național, întărirea disciplinei de partid) cu o singură abținere și niciun vot împotrivă. În prima declarație după realegere, Bolojan a anunțat că îi va propune președintelui Nicușor Dan un guvern minoritar PNL–USR–UDMR, ca alternativă la Cabinetul Veștea. Tabăra Veștea a respins ultimatumul, susținând că deciziile BPN din 15 iunie pe care se bazează excluderile sunt deja suspendate printr-o hotărâre judecătorească și că orice excludere ar putea fi anulată în instanță. În aceeași zi, Consiliul Politic Național al PSD, convocat de Sorin Grindeanu la Vila Lac, a decis în unanimitate să susțină votul de învestitură al Guvernului Veștea și să intre la guvernare, condiționând susținerea de includerea în programul de guvernare a unui pachet de măsuri economico-sociale (oprirea majorărilor de taxe pentru veniturile mici și mijlocii și pentru micii întreprinzători) și cerând opt-nouă ministere — printre care Internele și funcția de vicepremier (Marian Neacșu), Justiția (Radu Marinescu), Sănătatea (Alexandru Rogobete), Energia (Bogdan Ivan), Munca (Florin Manole), Agricultura (Florin Barbu), Mediul (Mihai Ghigiu), Dezvoltarea (Romeo Lungu) și Cultura (Ionuț Vulpescu) — precum și conducerea Secretariatului General al Guvernului. Pe 22 iunie, ședința Birourilor Permanente Reunite pentru stabilirea calendarului final a fost cerută suspendată de PNL, care a invocat un viciu de procedură: mențiunea apartenenței politice „PNL” pentru premierul desemnat pe lista Cabinetului, calificată de partid drept „falsă și abuzivă”, partidul precizând că nu participă la această formulă de guvernare și nu a propus niciun ministru; PNL a citat deciziile CCR nr. 85/2018 și nr. 67/2021, fără ca acestea să aibă legătură directă cu procedura de învestitură. Ședința a fost suspendată și reluată, calendarul fiind aprobat cu susținerea AUR alături de PSD. Audierile miniștrilor propuși în comisiile de specialitate au început la ora 12:00; opt dintre miniștrii propuși au primit aviz consultativ pozitiv (printre care Alexandru Nazare — Finanțe, Bogdan Ivan — Energie, Sorin Cîmpeanu — Apărare, Cristian Pistol — Transporturi, Monica Anisie — Educație și Marian Bârgău — Economie), iar Romeo-Daniel Lungu (PSD), propus la Ministerul Dezvoltării, a primit aviz negativ (18 voturi pentru, 18 contra, 2 abțineri, 8 prezenți care nu au votat — sub cvorumul de 22 necesar pentru aviz pozitiv), după ce parlamentarii AUR au părăsit sala comisiei fără a vota. Avizele comisiilor sunt consultative, nu blochează votul final. Votul de învestitură în plenul reunit al Parlamentului a fost programat pentru 22 iunie, ora 21:30, și rămânea în așteptare la momentul acestei actualizări. Rezultatul votului din seara de 22 iunie face obiectul unei analize separate.",
      pePartide:
        "PNL — refuz oficial (BPN); Bolojan amenință cu excluderi. Pe 17 iunie, partidul a convocat Consiliul Național Extraordinar (19 iunie) și un Congres extraordinar (21 iunie, Romexpo) cu excluderea lui Veștea pe ordinea de zi; Cătălin Predoiu a demisionat din funcția de prim-vicepreședinte. Liderul de grup Ludovic Orban estimează 276 de parlamentari împotrivă: „Nu pot să cred că un doctor în matematică poate să rămână corigent la aritmetica parlamentară.” Pe 18 iunie, 16 parlamentari din tabăra pro-Veștea au dat partidul în judecată la Tribunalul Ilfov, cerând anularea deciziilor BPN din 15 iunie, pe motiv de mandat imperativ interzis constituțional; instanța le-a admis cererea și a suspendat cele două decizii, iar PNL a anunțat că va ataca hotărârea, contestând competența teritorială a instanței. Pe 19 iunie, Consiliul Național Extraordinar al PNL (online) a votat cu 566 pentru, 97 contra, 19 abțineri (din 682) convocarea Congresului Extraordinar din 21 iunie (Romexpo, ora 12:00) și a aprobat modificări de statut cu 551 pentru, 128 contra, 3 abțineri; în replică, cei 16 parlamentari pro-Veștea au depus aceeași zi o nouă acțiune la Tribunalul Ilfov, cerând suspendarea deciziilor de convocare a Consiliului și Congresului și daune morale de 4 milioane de lei de la PNL — instanța a fixat termen de judecată pe 3 iulie, după Congres. Pe 19 iunie seara, Veștea a anunțat că nu candidează la șefia PNL împotriva lui Bolojan la Congresul de duminică, pe care îl consideră „neregulamentar și ilegal”, după ce cererea sa de amânare cu o săptămână a fost respinsă: „Nu voi gira printr-o candidatură acest simulacru democratic prin care se instalează dictatura în partid.\" Pe 20 iunie, la termenul-limită de ora 17:00, Bolojan a depus oficial — singura candidatură înregistrată — moțiunea „Modernizare cu Rădăcini”, cu o echipă în care intră, ca nume noi, doi miniștri din propriul guvern interimar, proaspăt înscriși în partid: Oana Gheorghiu (vicepremier interimar, cofondatoare Dăruiește Viață) și Dragoș Pîslaru (ministrul interimar al investițiilor și proiectelor europene). Potrivit liderului PNL Gheorghe Falcă, excluderea lui Veștea nu figurează formal pe ordinea de zi a Congresului, dar modificarea statutului (reducerea prim-vicepreședinților de la patru la unu, revenirea la alegerea pe moțiuni) ar produce o „auto-excludere” a taberei sale. Pe 21 iunie, Congresul Extraordinar a confirmat acest calcul: Bolojan a fost reales președinte cu 1.769 din 1.842 de voturi (96%), delegații au aprobat modificarea statutului cu o singură abținere, și au adoptat în unanimitate cele două rezoluții — interdicția de coaliție cu PSD cu excludere automată, și ultimatumul de demisie până luni, 22 iunie, ora 12:00, pentru Bode, Bogdan, Veștea, Thuma și Gorghiu. Bolojan a anunțat că va propune președintelui un guvern minoritar PNL–USR–UDMR. Tabăra Veștea a anunțat că va contesta excluderile în instanță, invocând suspendarea judecătorească a deciziilor BPN din 15 iunie pe care se bazează. PSD — mandat de negociere dat lui Grindeanu, cu condiția excluderii USR; Grindeanu: „Exclus USR din guvernarea Veștea.\" Pe 19 iunie, Grindeanu a anunțat în ședința grupurilor parlamentare PSD că partidul are voturile necesare pentru investitură, condiționat de decizia Consiliului Politic Național PSD din 21 iunie. Surse de presă, neconfirmate oficial de conducerea partidului, vorbesc despre circa 6 parlamentari PSD reticenți să voteze. Pe 21 iunie, Consiliul Politic Național PSD, convocat de Grindeanu la Vila Lac, a decis în unanimitate susținerea votului de învestitură și intrarea la guvernare cu opt-nouă ministere (Interne și vicepremier — Marian Neacșu; Justiție — Radu Marinescu; Sănătate — Alexandru Rogobete; Energie — Bogdan Ivan; Muncă — Florin Manole; Agricultură — Florin Barbu; Mediu — Mihai Ghigiu; Dezvoltare — Romeo Lungu; Cultură — Ionuț Vulpescu) și conducerea SGG, condiționat de includerea în programul de guvernare a unui pachet de măsuri împotriva majorării taxelor pentru veniturile mici și mijlocii și pentru micii întreprinzători. USR — a declarat că nu susține învestirea Cabinetului Veștea. AUR — Petrișor Peiu a reconfirmat oficial refuzul de a vota guvernul: „Nu în viața asta”; deputatul Mohammad Murad a indicat susținere individuală, contrar liniei partidului. Veștea acceptă voturi individuale: „Nu mă deranjează că vor fi parlamentari AUR care vor da dovadă de patriotism.\" UDMR — pe 16 iunie, Consiliul Permanent a decis să nu intre în guvern; pe 17 iunie, Kelemen Hunor a clarificat poziția celor 31 de parlamentari: „Noi am luat decizia să ieșim din sală în momentul votului.” POT — deschisă dialogului; negocieri în curs. Pe 22 iunie, PNL a contestat formal, în ședința Birourilor Permanente Reunite, mențiunea propriei apartenențe politice pe lista Cabinetului Veștea, cerând suspendarea ședinței — cerere respinsă, calendarul fiind aprobat cu sprijinul AUR. AUR a votat alături de PSD pentru aprobarea calendarului de învestitură, dar parlamentarii partidului au părăsit sala comisiei de specialitate la audierea lui Romeo Lungu, fără a vota, contribuind decisiv la avizul negativ al acestuia; poziția oficială a AUR rămâne, declarativ, contra investiturii Cabinetului Veștea, deputatul Petrișor Peiu reconfirmând că parlamentarii partidului nu vor intra în sală la votul final din plen. Comportamentul fiecărui partid la votul final din plenul de seara face parte din analiza separată dedicată rezultatului votului.",
    },
    aliniere: "fără-vot",
    verdictFinal:
      "La 16 iunie — data acestei analize — Veștea se află în aceeași capcană ca Tomac: desemnat fără majoritate asigurată, cu opoziția liderului propriului partid și cu PSD care vrea să excludă USR din orice formulă. Diferența față de Tomac: există mai multă flexibilitate politică declarată — Veștea vrea un guvern politic, PSD e la masă. Dar și mai multă instabilitate: o criză internă PNL suprapusă crizei constituționale. Verdictul rămâne deschis: dacă se naște o majoritate reală, costul acestei a doua desemnări haotice se va fi plătit; dacă nu, România merge spre anticipate.\n\nActualizare 16 iunie (după-amiaza): Consiliul Permanent UDMR a decis să nu intre în Guvernul Veștea și a recomandat parlamentarilor UDMR (31 mandate) să voteze CONTRA învestiturii. Fără UDMR, Veștea ar trebui să compenseze cu voturi AUR și PNL dizidenți — ceea ce a și anunțat că acceptă. Matematic, dacă PSD (~129), POT (~14), PACE (~8), minorități (~18) și aproximativ 25 de parlamentari PNL dizidenți plus voturi AUR individuale ajung la pragul de 233, investitura rămâne teoretic posibilă — dar un guvern fără PNL oficial, fără USR și fără UDMR ar fi cel mai slab legitimat executiv din istoria recentă a României. CCR urmează să judece pe 18 iunie sesizarea Avocatului Poporului și a lui Grindeanu pe OUG 38/2026; ÎCCJ urmează să se pronunțe pe 19 iunie dacă procesul Georgescu-Potra poate începe pe fond.\n\nActualizare 17 iunie: criza s-a extins formal în interiorul PNL. Cătălin Predoiu — susținător declarat al lui Veștea — a demisionat din funcția de prim-vicepreședinte al partidului (rămânând membru PNL), după ce conducerea Bolojan a anunțat că pregătește excluderea lui Veștea. PNL a convocat Consiliul Național Extraordinar pentru 19 iunie (format online) și Congresul Extraordinar pentru 21 iunie la Romexpo (circa 2.500 de delegați), cu excluderea lui Veștea pe ordinea de zi. UDMR a nuanțat poziția anunțată cu o zi înainte — cei 31 de parlamentari nu vor vota CONTRA, ci vor ieși din sală la momentul votului, schimbare procedurală care nu ameliorează structural aritmetica disponibilă lui Veștea. Liderul de grup PNL Ludovic Orban estimează 276 de parlamentari împotrivă, peste pragul de 233 necesar pentru respingere; AUR a reconfirmat oficial, prin Petrișor Peiu, refuzul de a vota guvernul, în timp ce deputatul Mohammad Murad a indicat susținere individuală — exact tipul de fisură pe care Veștea miza. În paralel, depunerea programului de guvernare și a listei de miniștri — anunțată inițial pentru 17 iunie — a fost pusă pe pauză, semn al unor negocieri încă neîncheiate între partenerii de dialog. Bătălia s-a mutat și pe procedură: în Birourile permanente reunite, PSD cere audieri și vot de învestitură rapide, în timp ce PNL, USR, UDMR și AUR susțin amânarea calendarului pentru începutul săptămânii viitoare — o majoritate conjuncturală formată exact din partidele care refuză investitura, cu scopul declarat de a câștiga timp. Cu o majoritate ostilă declarată și o criză internă PNL deschisă, a doua tentativă de învestitură pare, la această oră, mai aproape de eșec decât de succes.\n\nActualizare 18 iunie: Veștea a depus programul de guvernare și lista miniștrilor la Parlament, dar fără să fi rezolvat aritmetica — calculele disponibile la această dată indică circa 211–217 voturi din 233 necesare, un deficit de 16–22 de voturi pe care negocierile din ultimele zile nu l-au redus structural. Votul a fost amânat pentru 22 iunie, ceea ce dă timp atât pentru noi negocieri, cât și pentru congresul PNL de excludere a lui Veștea (21 iunie) să-și producă efectele înainte de vot. Tot pe 18 iunie, conflictul intern din PNL a trecut din interiorul partidului în instanță: 16 parlamentari din tabăra pro-Veștea (printre care Alina Gorghiu și Nicoleta Pauliuc) au atacat la Tribunalul Ilfov deciziile BPN din 15 iunie, care îi obligau să nu voteze investitura — invocând faptul că mandatul imperativ asupra unui parlamentar e interzis constituțional; instanța a fixat termen de judecată chiar în aceeași zi. Dacă lista de miniștri și programul depuse rămân fără majoritate luni, România se va îndrepta spre o a doua respingere consecutivă — condiția constituțională pentru dizolvarea Parlamentului și alegeri anticipate.\n\nActualizare 19 iunie: bătălia juridică din PNL s-a clarificat parțial și s-a redeschis imediat. Tribunalul Ilfov a soluționat pe 18 iunie cererea celor 16 parlamentari pro-Veștea și a suspendat cele două decizii BPN care îi obligau să nu voteze investitura — o victorie procedurală pentru tabăra Veștea, pe care PNL a anunțat imediat că o va ataca, contestând competența teritorială a instanței. PNL nu a cedat pe fond: pe 19 iunie, Consiliul Național Extraordinar (online) a votat cu 566 pentru, 97 contra, 19 abțineri convocarea Congresului Extraordinar de duminică, 21 iunie, la Romexpo, și a aprobat modificări de statut cu 551 pentru, 128 contra, 3 abțineri — majoritate confortabilă pentru conducerea Bolojan, semn că baza de partid rămâne de partea ei. Cei 16 parlamentari au răspuns în aceeași zi cu o nouă acțiune la Tribunalul Ilfov, cerând suspendarea convocării Consiliului și a Congresului și daune morale de 4 milioane de lei de la PNL — dar instanța a fixat termen abia pe 3 iulie, după Congres, ceea ce înseamnă că excluderea lui Veștea poate fi parafată duminică fără ca acest nou proces să o blocheze. Pe partea guvernării, Sorin Grindeanu a anunțat în ședința grupurilor parlamentare PSD că partidul are voturile necesare pentru investitură, dar a condiționat angajamentul formal de decizia Consiliului Politic Național PSD din 21 iunie — exact ziua Congresului PNL. Calendarul comunicat fixează audierile în comisii pentru luni, 22 iunie, și votul de învestitură în plen pentru marți, 23 iunie. Practic, cele trei evenimente decisive — Congresul de excludere a lui Veștea, decizia CPN a PSD și audierile parlamentare — converg în același weekend, iar votul final depinde de ordinea în care se produc: dacă Veștea e exclus din PNL înainte de 23 iunie, pierde orice argument că vine cu sprijin de partid; dacă PSD confirmă duminică susținerea, aritmetica s-ar putea închide independent de soarta lui în PNL.\n\nActualizare 20 iunie: criza s-a transferat din aritmetica parlamentară în lupta pentru conducerea PNL. Veștea a renunțat să candideze la șefia partidului împotriva lui Bolojan, acuzând un „simulacru democratic” și calificând Congresul de duminică drept neregulamentar și ilegal — dar fără să obțină amânarea cu o săptămână pe care o ceruse. La termenul-limită de azi, ora 17:00, Bolojan a rămas candidat unic, depunând moțiunea „Modernizare cu Rădăcini” cu o echipă remaniată în care intră, ca nume noi, doi miniștri din propriul guvern interimar — Oana Gheorghiu și Dragoș Pîslaru — proaspăt înscriși în partid chiar în ziua depunerii candidaturii. Potrivit liderului PNL Gheorghe Falcă, excluderea lui Veștea nu se află formal pe ordinea de zi a Congresului, dar modificarea de statut propusă ar produce, în fapt, o „auto-excludere” a taberei sale. Niciuna dintre evoluțiile de azi nu schimbă structura voturilor disponibile lui Veștea pentru 23 iunie, dar adâncesc dependența lui de voturi individuale, nu de sprijin de partid — motiv pentru care scorul guvernului paralel rămâne neschimbat: abținere, cu cerința nenegociabilă a unei majorități confirmate înainte de vot.\n\nActualizare 21 iunie: ziua a produs două mișcări simultane care cresc, nu reduc, incertitudinea. În PNL, Congresul a confirmat fără echivoc puterea lui Bolojan (96% din voturi) și a transformat amenințarea de excludere într-un ultimatum cu termen ferm — dar a făcut-o invocând decizii ale BPN deja suspendate de o instanță, ceea ce deschide un nou front juridic chiar în ziua în care partidul își consolidează aparent rândurile. Anunțul lui Bolojan că va propune un guvern minoritar PNL–USR–UDMR arată că tabăra sa nu mizează doar pe blocarea lui Veștea, ci pregătește o alternativă proprie — fără să fi demonstrat, la această oră, că o asemenea formulă ar întruni cele 233 de voturi pe care nici Veștea nu le are confirmate. În paralel, PSD a transformat sprijinul condiționat în decizie formală: intră la guvernare cu opt-nouă miniștri și cere un pachet de măsuri sociale introdus într-un program deja depus pe 18 iunie, fără negociere publică a textului — exact tipul de proces opac pe care guvernul paralel îl penalizează indiferent de cine îl practică. Niciuna dintre cele două mișcări nu schimbă structural pragul de 233 de voturi necesar la 23 iunie: PSD confirmat plus voturi AUR/POT/SOS negociate individual rămâne calculul pe care se bazează Veștea, iar alternativa Bolojan rămâne, la acest moment, doar o intenție declarată. Scorul guvernului paralel rămâne neschimbat: abținere, cu cerința nenegociabilă a unei majorități confirmate și a unui program negociat public, nu impus prin ultimatum de partid sau prin condiționări de culise.\n\nActualizare 22 iunie: ziua votului a început cu un incident procedural — PNL a cerut suspendarea ședinței Birourilor Permanente Reunite, calificând drept „falsă și abuzivă” mențiunea propriei apartenențe politice pe lista Cabinetului depusă de Veștea, deși partidul nu a propus niciun ministru și nu susține formula de guvernare; citarea unor decizii CCR fără legătură directă cu procedura de învestitură a slăbit, nu a întărit, argumentul liberalilor. Calendarul a fost totuși aprobat, cu votul comun al AUR și PSD — exact alianța conjuncturală care, câteva ore mai târziu, în comisii, a arătat fisuri: parlamentarii AUR au părăsit sala la audierea lui Romeo Lungu, propunerea PSD pentru Dezvoltare, lăsându-l fără cele 22 de voturi necesare pentru aviz pozitiv. Restul echipei propuse a trecut comisiile fără incidente majore. Cu un aviz negativ consultativ și o poziție AUR ambiguă — vot comun pe procedură, dar retragere declarată din sala de plen la votul final — aritmetica rămâne exact la fel de fragilă cum era înainte de începerea zilei: scorul guvernului paralel rămâne neschimbat, abținere, în așteptarea rezultatului votului de învestitură programat pentru această seară. Rezultatul votului face obiectul unei analize separate, publicată după închiderea ședinței de plen.",
    controverse: [
      "Desemnarea fără consultarea conducerii PNL a fost calificată de Bolojan drept „act ostil, evidentă încercare de rupere a PNL\" — tensiune internă fără precedent recent în PNL.",
      "Veștea face parte din gruparea liberalilor considerați pro-PSD, ceea ce a alimentat suspiciunea că desemnarea urmărește fragmentarea PNL în interesul PSD.",
      "Ultimatumul dat de Bolojan lui Veștea — propriul coleg de partid, premier desemnat de un președinte ales democratic — e o situație politică fără precedent în România postcomunistă.",
      "PNL a convocat un Congres extraordinar pentru 21 iunie cu excluderea propriului premier desemnat pe ordinea de zi — un partid care își exclude omul pe care l-a propus pentru guvernare e o premieră fără precedent recent.",
      "Cătălin Predoiu a demisionat din funcția de prim-vicepreședinte PNL pe 17 iunie, semn al fracturii interne provocate de desemnarea Veștea.",
      "Pe 18 iunie, 16 parlamentari liberali din tabăra pro-Veștea (între care Alina Gorghiu și Nicoleta Pauliuc) au atacat în instanță, la Tribunalul Ilfov, deciziile BPN PNL din 15 iunie prin care gruparea Bolojan a mandatat imperativ grupurile parlamentare să nu voteze Guvernul Veștea — invocând interdicția constituțională a mandatului imperativ asupra parlamentarilor. Un partid care își cheamă în judecată propriii membri pe tema unui vot de guvernare e o premieră fără precedent recent.",
      "Tribunalul Ilfov a admis pe 18 iunie cererea celor 16 parlamentari și a suspendat deciziile BPN anti-Veștea; PNL a anunțat că va ataca decizia instanței, ridicând o excepție de necompetență teritorială — un partid care contestă în instanță o decizie favorabile propriilor parlamentari.",
      "Cei 16 parlamentari pro-Veștea cer de la propriul partid daune morale de 4 milioane de lei (250.000 lei/persoană) pentru deciziile de excludere — o cifră fără precedent în litigiile interne dintre un partid parlamentar și membrii săi.",
      "Doi miniștri din guvernul interimar condus de facto de Bolojan — Oana Gheorghiu și Dragoș Pîslaru — s-au înscris în PNL chiar în ziua depunerii candidaturii acestuia la șefia partidului, intrând direct în echipa propusă de conducere, fără vechime de partid.",
      "Congresul PNL din 21 iunie a cerut, sub sancțiunea excluderii, demisia din partid a cinci lideri liberali — Lucian Bode, Rareș Bogdan, Adrian Veștea, Hubert Thuma și Alina Gorghiu — invocând decizii ale BPN din 15 iunie deja suspendate de Tribunalul Ilfov; o epurare de această amploare, vizând inclusiv foști miniștri, e fără precedent recent în PNL.",
      "PSD a condiționat intrarea la guvernare de un pachet de măsuri economico-sociale cerut pentru programul de guvernare deja depus de Veștea la Parlament pe 18 iunie, fără ca renegocierea textului să fi fost făcută publică — ridicând întrebări asupra cărui document va fi supus de fapt votului de învestitură din 23 iunie.",
      "PNL a contestat pe 22 iunie propria mențiune de apartenență politică pe lista Cabinetului pe care chiar Bolojan o calificase drept ostilă — un partid care se distanțează public de un guvern construit, în parte, din proprii săi disidenți, invocând în sprijin două decizii CCR (85/2018 și 67/2021) fără legătură directă cu procedura de învestitură.",
      "AUR a votat pe 22 iunie alături de PSD pentru aprobarea calendarului de învestitură, dar a abandonat audierea propriului partener declarat de negociere la comisie, contribuind la avizul negativ al lui Romeo Lungu — o incoerență între sprijinul procedural acordat și retorica oficială de refuz al Cabinetului Veștea.",
    ],
    surse: [
      {
        titlu:
          "Stiripesurse — Nicușor Dan a semnat decretele: desemnarea Tomac, revocată; Adrian Veștea, desemnat oficial",
        url: "https://www.stiripesurse.ro/nicusor-dan-a-semnat-decretele-desemnarea-lui-eugen-tomac-revocata-adrian-vestea-desemnat-oficial_3894862",
      },
      {
        titlu:
          "HotNews — Nicușor Dan l-a desemnat pe Adrian Veștea premier (14 iunie 2026)",
        url: "https://hotnews.ro/nicusor-dan-a-semnat-decretul-adrian-vestea-este-noul-premier-desemnat-2273107",
      },
      {
        titlu:
          "G4Media — Cine este Adrian Veștea, premierul desemnat de Nicușor Dan",
        url: "https://www.g4media.ro/cine-este-adrian-vestea-premierul-desemnat-de-nicusor-dan-prim-vicepresedinte-pnl-din-gruparea-pro-psd-presedinte-al-consiliului-judetean-brasov-fost-primar-la-rasnov-si-fost-ministru-al-dezvoltar.html",
      },
      {
        titlu:
          "TVR Info — Bolojan: desemnarea Veștea, „un act ostil, o evidentă încercare de rupere a PNL\"",
        url: "https://tvrinfo.ro/ilie-bolojan-reactie-la-nominalizarea-lui-adrian-vestea-un-act-ostil-o-evidenta-incercare-de-rupere-a-pnl/",
      },
      {
        titlu:
          "CursDeGuvernare — Bolojan: PNL nu a fost consultat; Veștea somat să renunțe",
        url: "https://cursdeguvernare.ro/desemnarea-lui-adrian-vestea-pentru-functia-de-premier-facuta-fara-consultarea-conducerii-pnl-ilie-bolojan-un-act-ostil-o-evidenta-incercare-de-rupere-a-pnl.html",
      },
      {
        titlu:
          "Ziare.com — Ultimatumul PNL a expirat; Veștea nu și-a depus mandatul",
        url: "https://ziare.com/adrian-vestea-desemnat-premier/ultimatum-pnl-bolojan-expirat-2018817",
      },
      {
        titlu:
          "Ziare.com — Veștea: „Vreau să fie foarte clar: nu îmi depun mandatul\"",
        url: "https://www.national.ro/politica/adrian-vestea-l-a-infruntat-pe-ilie-bolojan-dupa-ce-i-a-dat-ultimatum-vreau-sa-fie-foarte-clar-nu-imi-depun-mandatul-874815.html/",
      },
      {
        titlu:
          "Mediafax — PNL retrage sprijinul pentru Veștea și amenință cu excluderi",
        url: "https://www.mediafax.ro/politic/pnl-retrage-sprijinul-pentru-premierul-desemnat-adrian-vestea-si-ameninta-cu-excluderi-23755990",
      },
      {
        titlu:
          "Ziare.com — Veștea a început negocierile cu POT; urmează UDMR și PSD",
        url: "https://ziare.com/formare-guvern/adrian-vestea-negocieri-formare-guvern-anamaria-gavrila-2018840",
      },
      {
        titlu: "Ziare.com — Grindeanu: „Exclus USR din guvernarea Veștea\"",
        url: "https://ziare.com/sorin-grindeanu/sedinta-psd-exclus-usr-guvern-vestea-2018688",
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
        titlu: "HotNews — Congres extraordinar la PNL duminică, 21 iunie",
        url: "https://hotnews.ro/congres-extraordinar-la-pnl-duminica-2276227",
      },
      {
        titlu: "HotNews — Cătălin Predoiu a demisionat din conducerea PNL",
        url: "https://hotnews.ro/catalin-predoiu-a-demisionat-din-conducerea-pnl-2276186",
      },
      {
        titlu:
          "Stiripesurse — Ludovic Orban: „Nu pot să cred că un doctor în matematică poate să rămână corigent la aritmetica parlamentară”",
        url: "https://www.stiripesurse.ro/ludovic-orban-nicusor-dan-retragerea-mandatului-lui-vestea-nu-pot-sa-cred-ca-un-doctor-in-matematica-poate-sa-ramana-corigent-la-aritmetica-parlamentara_3895781",
      },
      {
        titlu:
          "HotNews — Un lider AUR exclude ca parlamentari ai partidului să voteze Guvernul Veștea: „Nu în viața asta”",
        url: "https://hotnews.ro/un-lider-aur-exclude-ca-parlamentari-ai-partidului-sa-voteze-guvernul-vestea-e-o-informatie-fabricata-nu-in-viata-asta-2275465",
      },
      {
        titlu:
          "Adevărul — Blocaj pe formarea guvernului Veștea: PSD vrea vot rapid, restul partidelor cer amânare",
        url: "https://adevarul.ro/politica/blocaj-pe-formarea-guvernului-vestea-psd-vrea-vot-2537131.html",
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
        titlu: "Antena3 CNN — Cătălin Predoiu și-a dat demisia din funcția de prim-vicepreședinte PNL; Congresul partidului, convocat pentru duminică (17 iunie 2026)",
        url: "https://www.antena3.ro/politica/catalin-predoiu-si-a-dat-demisia-din-functia-de-primvicepresedinte-pnl-congresul-partidului-convocat-pentru-duminica-792444.html",
      },
      {
        titlu: "Adevărul — Mobilizare în PNL: Consiliu Național Extraordinar pe 19 iunie și Congres pe 21 iunie (17 iunie 2026)",
        url: "https://adevarul.ro/politica/sedinta-la-pnl-se-discuta-excluderea-premierului-2537162.html",
      },
      {
        titlu: "Ziare.com — Votul pentru Guvernul Veștea ar putea fi amânat: ce încearcă să facă PNL, USR și UDMR (17 iunie 2026)",
        url: "https://m.ziare.com/amp/adrian-vestea/votul-pentru-guvernul-vestea-putea-fi-amanat-2019170",
      },
      {
        titlu: "MonitorulCJ — Premierul desemnat Adrian Veștea: depunerea listei de miniștri și a programului de guvernare, pusă pe pauză (17 iunie 2026)",
        url: "https://www.monitorulcj.ro/politica-administratie/138238-adrian-vestea-nu-isi-depune-mandatul-ministri-parlament",
      },
      {
        titlu:
          "AGERPRES — Comitetul Politic al USR a decis să nu susțină Cabinetul Veștea; Dominic Fritz: „un Guvern de pe Temu” (17 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/17/comitetul-politic-al-usr-a-decis-sa-nu-sustina-cabinetul-vestea-dominic-fritz-un-guvern-de-pe-temu--1567459",
      },
      {
        titlu:
          "BURSA — Adrian Veștea depune la Parlament programul de guvernare și lista miniștrilor (18 iunie 2026)",
        url: "https://www.bursa.ro/adrian-vestea-depune-la-parlament-programul-de-guvernare-si-lista-ministrilor-60833958",
      },
      {
        titlu:
          "Economica.net — Votul pentru învestirea Guvernului Veștea se amână pentru luni, 22 iunie (document program de guvernare)",
        url: "https://www.economica.net/votul-pentru-investirea-guvernului-vestea-se-amana-pentru-luni_951525.html",
      },
      {
        titlu:
          "Newsweek România — Calculul pentru a trece Guvernul Veștea: are 211 voturi sigure, îi trebuie 233",
        url: "https://newsweek.ro/politica/calculul-rece-pentru-a-trece-guvernul-vestea-are-211-voturi-sigure-ii-trebuie-233-udmr-decide-totul",
      },
      {
        titlu: "Digi24 — Contestatarii lui Bolojan au atacat în instanță decizia PNL de a-i exclude pe cei care votează Guvernul Veștea (18 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/contestatarii-lui-bolojan-au-atacat-in-instanta-decizia-pnl-de-a-i-exclude-pe-cei-care-voteaza-guvernul-vestea-surse-3821731",
      },
      {
        titlu: "G4Media — EXCLUSIV: 16 membri ai „taberei Thuma” au dat în judecată PNL (18 iunie 2026)",
        url: "https://www.g4media.ro/exclusiv-16-membri-ai-taberei-thuma-au-dat-in-judecata-pnl-ei-cer-anularea-deciziilor-anti-vestea-luate-luni-de-conducerea-pnl.html",
      },
      {
        titlu: "HotNews — Tribunalul Ilfov a dat imediat termen de judecată liberalilor care contestă decizia lui Bolojan (18 iunie 2026)",
        url: "https://hotnews.ro/contestatarii-lui-bolojan-muta-lupta-in-instanta-au-dat-in-judecata-pnl-ce-vor-sa-obtina-2277229",
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
        titlu: "News.ro — PNL continuă pregătirile pentru Congresul Extraordinar din 21 iunie; Consiliul Național, convocat vineri (19 iunie 2026)",
        url: "https://www.news.ro/politic-intern/pnl-continua-pregatirile-pentru-congresul-extraordinar-din-21-iunie-consiliul-national-convocat-vineri-pentru-a-stabili-agenda-si-detaliile-evenimentului-ionel-bogdan-despre-modificarile-la-statut-1922400019002026060622485744",
      },
      {
        titlu: "G4Media — EXCLUSIV: cei 16 membri ai „taberei Thuma” au dat din nou în judecată PNL, la Tribunalul Ilfov; miza, stoparea Congresului și daune morale de 4 milioane de lei (19 iunie 2026)",
        url: "https://www.g4media.ro/exclusiv-cei-16-membri-ai-taberei-thuma-au-dat-iar-in-judecata-pnl-tot-la-tribunalul-ilfov-miza-ar-fi-stoparea-congresului-pnl-programat-duminica.html",
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
        titlu: "HotNews — Adrian Veștea anunță că nu mai candidează la șefia PNL la congresul de duminică, pe care îl voia amânat cu o săptămână (19 iunie 2026, seara)",
        url: "https://hotnews.ro/adrian-vestea-anunta-ca-nu-mai-candideaza-la-sefia-pnl-la-congresul-de-duminica-pe-care-il-voia-amanat-cu-o-saptamana-cum-motiveaza-2278789",
      },
      {
        titlu: "Ziare.com — Adrian Veștea nu mai candidează la șefia PNL, vrea să conteste în justiție Congresul (19/20 iunie 2026)",
        url: "https://ziare.com/adrian-vestea/nu-mai-candideaza-pnl-2019701",
      },
      {
        titlu: "Gandul — Bolojan și-a depus oficial candidatura la președinția PNL; echipa de conducere propusă (20 iunie 2026)",
        url: "https://gandul.ro/actualitate/bolojan-si-a-depus-oficial-candidatura-pentru-functia-de-presedinte-al-pnl-cine-face-parte-din-echipa-de-conducere-propusa-de-premierul-demis-20929037",
      },
      {
        titlu: "HotNews — Oana Gheorghiu și Dragoș Pîslaru s-au înscris în PNL înainte de Congresul Extraordinar de duminică (20 iunie 2026)",
        url: "https://hotnews.ro/oana-gheorghiu-si-dragos-pislaru-au-depus-cereri-de-inscriere-in-pnl-inainte-de-congresul-extraordinar-de-duminica-2279011",
      },
      {
        titlu: "Știrile ProTV — PNL are congres, alegeri și reorganizare internă, în ciuda „puciului” lui Veștea (20 iunie 2026)",
        url: "https://stirileprotv.ro/stiri/politic/pnl-are-congres-alegeri-si-reorganizare-interna-in-ciuda-puciului-lui-vestea-ce-urmeaza-pentru-liberali.html",
      },
      {
        titlu: "Stiripesurse — Ilie Bolojan, reales președinte al PNL cu 96% din voturi (21 iunie 2026)",
        url: "https://www.stiripesurse.ro/a-candidat-singur-si-a-castigat-la-un-scor-ca-in-alte-vremuri-ilie-bolojan-reales-presedinte-al-pnl-cu-96-din-voturi_3896917",
      },
      {
        titlu: "ZF — Congresul PNL: liberalii au cerut cu unanimitate de voturi excluderea lui Veștea, Bode, Gorghiu și Thuma dacă nu demisionează (21 iunie 2026)",
        url: "https://www.zf.ro/eveniment/congresul-pnl-liberalii-au-cerut-unanimitate-voturi-excluderea-23179377",
      },
      {
        titlu: "Radio România — Congres PNL: rezoluție pentru demisia lui Veștea, Bode, Bogdan, Thuma și Gorghiu (21 iunie 2026)",
        url: "https://www.radioromania.ro/Actualitate/congres-pnl-rezolutie-pentru-demisia-lui-vestea-bode-bogdan-thuma-si-gorghiu-id192173.html",
      },
      {
        titlu: "HotNews — Ultimatum dat de PNL pentru Adrian Veștea și alți patru liberali (21 iunie 2026)",
        url: "https://hotnews.ro/ultimatum-dat-de-pnl-pentru-adrian-vestea-si-alti-patru-liberali-2279621",
      },
      {
        titlu: "Mediafax — Ilie Bolojan a fost confirmat, prin vot, la președinția PNL (21 iunie 2026)",
        url: "https://www.mediafax.ro/politic/ilie-bolojan-a-fost-confirmat-prin-vot-la-presedintia-pnl-23759118",
      },
      {
        titlu: "Mediafax — Adrian Veștea anunță propunerea pentru Ministerul Investițiilor și Proiectelor Europene: Florin Zaharia (21 iunie 2026)",
        url: "https://www.mediafax.ro/politic/adrian-vestea-anunta-propunerea-pentru-ministerul-investitiilor-si-proiectelor-europene-florin-zaharia-viitorul-ministru-mipe-23758994",
      },
      {
        titlu: "AlephNews — Boicot la Congresul Extraordinar al PNL, peste 1.000 de absenți; Bolojan reales cu 1.769 de voturi (21 iunie 2026)",
        url: "https://alephnews.ro/guvern/breaking-boicot-la-congresul-extraordinar-al-pnl-peste-1000-de-absenti-ilie-bolojan-singurul-candidat-la-sefia-partidului-a-fost-reales-cu-1769-de-voturi-congresul-pnl-cere-demisia-lui-adrian-vestea-r/",
      },
      {
        titlu: "Adevărul — LIVE TEXT Congresul PNL: Bolojan reales președinte cu 1.769 de voturi; liderii din gruparea Veștea, somați să demisioneze (21 iunie 2026)",
        url: "https://adevarul.ro/politica/congres-tensionat-in-pnl-ilie-bolojan-candideaza-2537914.html",
      },
      {
        titlu: "TVR Info — Au fost adoptate două rezoluții la Congresul PNL: fără coaliție cu PSD; demisiile lui Veștea, Bode, Bogdan, Thuma și Gorghiu (21 iunie 2026)",
        url: "https://tvrinfo.ro/au-fost-adoptate-doua-rezolutii-la-congresul-pnl-partidul-reconfirma-ca-nu-mai-face-coalitie-cu-psd-se-cer-demisiile-lui-vestea-bode-bogdan-thuma-si-gorghiu/",
      },
      {
        titlu: "Radio România — Ilie Bolojan, reales președinte al PNL (21 iunie 2026)",
        url: "https://www.radioromania.ro/Actualitate/ilie-bolojan-reales-presedinte-al-pnl-id192187.html",
      },
      {
        titlu: "Ziare.com — Bolojan, după realegere: îi va propune lui Nicușor Dan un guvern minoritar PNL-USR-UDMR (21 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/ilie-bolojan-guvern-minoritar-pnl-usr-udmr-2019931",
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
        titlu: "G4Media — Surse: PSD a decis să intre în Guvernul Veștea; Marian Neacșu — ministru de Interne, Radu Marinescu — Justiție (21 iunie 2026)",
        url: "https://www.g4media.ro/surse-psd-a-decis-sa-intre-in-guvernul-vestea-marian-neacsu-ministru-de-interne-radu-marinescu-la-justitie.html",
      },
      {
        titlu: "DCNews — PSD a decis printr-un vot în unanimitate să intre la guvernare. Portofoliile și viitorii miniștri ai PSD (21 iunie 2026)",
        url: "https://www.dcnews.ro/psd-a-decis-printr-un-vot-in-unanimitate-sa-intre-la-guvernare_1063529.html",
      },
      {
        titlu: "Ziare.com — Liberalii acuză un viciu de procedură în lista Cabinetului Veștea: „Este falsă și abuzivă” (22 iunie 2026)",
        url: "https://ziare.com/parlament/liberalii-viciu-procedura-constitutionalitate-2020016",
      },
      {
        titlu: "BURSA — PNL cere suspendarea ședinței Birourilor Permanente și contestă lista Guvernului Veștea (22 iunie 2026)",
        url: "https://www.bursa.ro/pnl-cere-suspendarea-sedintei-birourilor-permanente-si-contesta-constitutionalitatea-listei-guvernului-vestea-89763959",
      },
      {
        titlu: "Stiripesurse — Gafă a PNL în scandalul Guvernului Veștea: liberalii invocă două decizii CCR care nu au legătură cu învestirea Guvernului (22 iunie 2026)",
        url: "https://www.stiripesurse.ro/gafa-a-pnl-in-scandalul-guvernului-vestea-liberalii-invoca-doua-decizii-ccr-care-nu-au-legatura-cu-investirea-guvernului_3897118",
      },
      {
        titlu: "News.ro — Romeo-Daniel Lungu, propunerea PSD la Dezvoltare, primul ministru din Cabinetul Veștea avizat negativ în comisiile parlamentare (22 iunie 2026)",
        url: "https://www.news.ro/politic-intern/cabinetul-vestea-romeo-daniel-lungu-propunerea-psd-la-dezvoltare-apropiat-al-lui-marcel-ciolacu-primul-ministru-din-cabinetul-vestea-avizat-negativ-in-comisiile-parlamentare-de-specialitate-1922403522352026061422489826",
      },
      {
        titlu: "BURSA — Lungu, după avizul negativ: Guvernul Veștea va obține minimum 233 de voturi (22 iunie 2026)",
        url: "https://www.bursa.ro/lungu-dupa-avizul-negativ-guvernul-vestea-va-obtine-minimum-233-de-voturi-06073950",
      },
      {
        titlu: "HotNews — Votul programat luni pentru Guvernul Veștea e acum incert. Audieri pe bandă rulantă în Parlament (22 iunie 2026)",
        url: "https://hotnews.ro/guvern-adrian-vestea-parlament-ministri-audieri-vot-investitura-birourile-reunite-2280072",
      },
    ],
  },
  {
    slug: "vot-investitura-cabinet-vestea-picat",
    titlu: "Votul de învestitură al Cabinetului Veștea a picat",
    data: "2026-06-22",
    institutie: "Parlament",
    domenii: ["guvernare", "criză politică"],
    rezumat:
      "Votul de învestitură al Cabinetului Veștea a picat în plenul reunit al Parlamentului, în seara de 22 iunie 2026: doar 207 voturi exprimate, sub pragul de 233. George Simion a anunțat, chiar din timpul dezbaterilor, retragerea AUR din sală, calificând drept „trădător” orice parlamentar care ar fi votat Cabinetul; UDMR și-a confirmat ieșirea anunțată încă pe 17 iunie, iar Kelemen Hunor l-a felicitat ironic pe Simion de la tribună: „Ai dat șah și mat!” E a doua tentativă de învestitură respinsă consecutiv, după cea a lui Eugen Tomac. Pe 23 iunie, președintele Nicușor Dan a consultat la Cotroceni toate partidele parlamentare, dar nu a desemnat un nou premier — a indicat drept variantă posibilă un guvern politic minoritar bazat pe un acord parlamentar de sprijin agreat în prealabil. Pe 24 iunie, Biroul Permanent Național al PSD l-a nominalizat în unanimitate pe liderul partidului, Sorin Grindeanu, ca propunere a partidului pentru funcția de premier — o decizie internă de partid, fără ca președintele să facă, la acest moment, o nouă desemnare oficială. Pe 25 iunie, negocierile de la Vila Lac dintre Ilie Bolojan (PNL), Dominic Fritz (USR), Kelemen Hunor (UDMR) și Sorin Grindeanu (PSD) au eșuat fără un acord asupra formulei de guvernare, iar președintele Nicușor Dan a cerut partidelor un guvern format până marți, 30 iunie — data începerii vacanței parlamentare de vară. Pe 26 iunie, PNL, USR și UDMR au anunțat o propunere comună de premier — europarlamentarul Siegfried Mureșan (PNL) —, cu o variantă de rotativă a guvernării către PSD abia din aprilie 2027; PSD a respins atât candidatura, cât și rotativa, menținând nominalizarea lui Sorin Grindeanu. Întâlnirea convocată de Nicușor Dan la Cotroceni, în aceeași seară, cu liderii PSD, PNL, USR, UDMR și ai minorităților naționale, s-a încheiat fără un acord. Pe 27 iunie, disputa s-a mutat din sala de consultări în spațiul public: președintele a reiterat acuzația că PNL și-a schimbat poziția față de 23 iunie — când partidul s-ar fi angajat să susțină un guvern minoritar PSD —, iar Ilie Bolojan și Siegfried Mureșan i-au contrazis public versiunea, susținând că PNL nu a promis niciodată o susținere necondiționată pentru Sorin Grindeanu și că varianta PNL–USR–UDMR a fost pe masă de la bun început. PNL a reacționat oficial, respingând „lecțiile despre responsabilitate” venite din partea președinției. Niciuna dintre cele două propuneri de premier — Grindeanu (PSD) sau Mureșan (PNL–USR–UDMR) — nu a fost agreată oficial de președinte până la această actualizare, cu termenul de 30 iunie tot mai apropiat. Pe 29 iunie, liderul UDMR Kelemen Hunor a anunțat oficial că termenul de 30 iunie nu va fi respectat, estimând o posibilă soluție abia spre finalul lunii iulie, și a propus refacerea unei majorități PSD–PNL–UDMR cu un premier acceptabil tuturor — propunere la care Sorin Grindeanu s-a declarat de acord public.",
    explicatie:
      "Adrian Veștea fusese desemnat premier pe 14 iunie, fără consultarea conducerii PNL, declanșând opt zile de criză internă în partid (excluderi, procese, congres extraordinar) în paralel cu negocierile pentru o majoritate parlamentară. Pentru cronologia completă a celor opt zile dintre desemnare și vot — inclusiv poziționarea PSD, UDMR, USR și PNL —, vezi analiza dedicată acestei desemnări.\n\nȘedința de vot din 22 iunie s-a deschis cu o întârziere de câteva ore. George Simion a anunțat, chiar din timpul dezbaterilor, decizia AUR de a părăsi sala, calificând drept „trădător” orice parlamentar care ar fi votat Cabinetul: „Noi toți care nu suntem trădători părăsim această sală.” Parlamentarii AUR au ieșit din sală, urmați de cei 31 de parlamentari UDMR, conform deciziei anunțate încă pe 17 iunie de Kelemen Hunor, care l-a felicitat ironic pe Simion de la tribuna Parlamentului: „Există un singur om care astăzi a câștigat. Nu este în sală, dar talentul trebuie recunoscut. Felicitări, George Simion, ai dat șah și mat!” Liderul Grupului minorităților naționale, Varujan Pambuccian, anunțase anterior susținerea a 15 din cei 17 parlamentari ai grupului. La numărarea finală au fost exprimate 207 voturi în total — sub pragul de 233 necesar —, iar Guvernul Veștea nu a obținut investitura. Sursele de presă citează cifre diferite și neconfirmate oficial pentru defalcarea exactă pe „pentru”/„contra”; fără o cifră unanim confirmată, nu redăm o defalcare exactă pe pentru/contra/abțineri.\n\nEșecul obligă la restartarea integrală a procedurii de desemnare a unui premier. Constituția impune dizolvarea Parlamentului și alegeri anticipate doar după două cereri de învestitură respinse, formulate de președinte în 60 de zile de la prima cerere; rămâne deschisă întrebarea dacă retragerea lui Tomac din 14 iunie — produsă înainte de orice vot — se va considera juridic o „respingere” alături de cea a lui Veștea, sau dacă abia un al doilea vot negativ propriu-zis ar declanșa mecanismul. Pe 23 iunie, președintele Nicușor Dan a desfășurat la Cotroceni o nouă rundă de consultări, de peste șase ore, cu toate partidele parlamentare, fără să anunțe o nouă desemnare; la final, a indicat drept variantă care „pare să se contureze” un guvern politic minoritar, bazat pe un acord parlamentar de sprijin negociat și semnat în avans între formațiuni, cerând partidelor să accelereze aceste discuții. Pozițiile rămân divergente: PSD s-a declarat dispus să își asume guvernarea, inclusiv funcția de premier; USR a exclus un vot pentru orice guvern cu PSD, oferind în schimb susținere unui guvern minoritar PNL–USR–UDMR; Bolojan a propus, ca alternative, fie un guvern minoritar PSD, fie unul PNL–USR–UDMR; grupul Uniți pentru România a propus desemnarea lui Victor Ponta. Pe 24 iunie, Biroul Permanent Național al PSD a decis în unanimitate să își asume guvernarea și l-a nominalizat pe liderul partidului, Sorin Grindeanu, ca propunere a partidului pentru funcția de premier — o decizie de partid, nu o nouă desemnare prezidențială, care rămâne la latitudinea președintelui.\n\nActualizare 25 iunie: liderii PNL, USR și UDMR s-au întâlnit cu Sorin Grindeanu la Vila Lac pentru a negocia formula de guvernare, dar discuțiile au eșuat. PNL și UDMR au propus un acord de sprijin parlamentar pe șase luni — fără moțiune de cenzură — pentru un guvern minoritar condus de Sorin Grindeanu (PSD), în schimbul susținerii PSD pentru proiecte de interes național; USR a respins formula și a cerut, în schimb, ca PSD să se angajeze să voteze, la rândul lui, un guvern minoritar PNL–USR–UDMR, cu o rotativă ulterioară a premierului către PSD. PSD a refuzat să susțină un guvern din care face parte USR, iar negocierile s-au blocat definitiv pe mecanismul de partajare a mandatului de premier, fără ca liderii să ajungă la un acord. Președintele Nicușor Dan a reacționat cerând partidelor un guvern format până marți, 30 iunie — data începerii vacanței parlamentare de vară —, avertizând asupra riscului ca România să rateze fonduri europene în absența unui guvern cu puteri depline. Dragoș Pîslaru (PNL), vicepreședinte al partidului, l-a acuzat public pe Grindeanu de „un tupeu formidabil”, susținând că acesta „a spus că nu acceptă nicio condiție, nu acceptă nimic, este un guvern în care PSD face și desface singur” — în condițiile în care PSD se prezenta public drept partidul flexibil al negocierilor.\n\nActualizare 26 iunie: PNL, USR și UDMR au anunțat o propunere comună pentru funcția de premier — europarlamentarul Siegfried Mureșan, vicepreședinte al PNL și al Partidului Popular European, eurodeputat de 12 ani, economist de profesie. Potrivit PNL, propunerea vine cu o variantă de rotativă a guvernării: un cabinet PNL–USR–UDMR condus de Mureșan ar funcționa până în aprilie 2027, urmat de trecerea premiaturii la PSD. Liderul PNL, Ilie Bolojan, a motivat alegerea prin experiența lui Mureșan în gestionarea fondurilor europene; Mureșan a declarat că a fost unul dintre negociatorii Mecanismului European de Redresare și Reziliență și a precizat: „România are nevoie de un guvern competent și realmente pro-european.” PSD a respins formula Mureșan și rotativa propusă, menținându-și susținerea pentru candidatura lui Sorin Grindeanu, nominalizată pe 24 iunie. Cu cele două propuneri pe masă, președintele Nicușor Dan a convocat la Cotroceni, vineri seară de la ora 18:00, pe liderii PSD (Sorin Grindeanu), PNL (Ilie Bolojan), USR (Dominic Fritz), UDMR (Kelemen Hunor) și ai Grupului minorităților naționale (Varujan Pambuccian). Întâlnirea a durat circa o oră și s-a încheiat fără un acord: partidele și-au păstrat pozițiile, iar președintele nu a desemnat un nou premier. La final, Nicușor Dan a declarat: „Am revenit la blocajul politic pe care marți îl credeam depășit”, explicând că pe 23 iunie PNL se angajase să voteze un guvern minoritar PSD, sub anumite condiții de program, dar și-a schimbat poziția până pe 26 iunie; președintele a reafirmat că singura formulă care pare să adune, la acest moment, o majoritate este un guvern minoritar condus de PSD, a cerut partidelor să reia negocierile între ele și a reamintit nevoia unui guvern cu puteri depline înainte de termenul de 30 iunie pe care îl ceruse pe 25 iunie.\n\nActualizare 28 iunie: disputa publică dintre președinție și PNL s-a intensificat. Ilie Bolojan a replicat oficial acuzațiilor lui Nicușor Dan, declarând că PNL „rămâne consecvent” și nu a oferit niciun „cec în alb” pentru susținerea lui Sorin Grindeanu, confirmând că președintele nu a agreat, în discuția de la Cotroceni, varianta Mureșan. Siegfried Mureșan l-a criticat dur pe Grindeanu, numindu-l „premierul OUG 13, incapabil să câștige încrederea pentru România”; PSD a replicat că „sub nicio formă” nu îl va vota pe Mureșan premier.\n\nActualizare 29 iunie: liderul UDMR, Kelemen Hunor, a declarat la Parlament că formarea unui nou guvern nu este posibilă până la termenul de marți, 30 iunie, cerut de președinte, estimând că o soluție politică s-ar putea găsi cel mai timpuriu spre finalul lunii iulie, „dacă nu are cineva o baghetă magică”, și a cerut „răcirea temperaturii declarațiilor” pentru a evita ca țara să fie „aruncată în aer”. Hunor a propus, ca alternativă la formulele Grindeanu și Mureșan — niciuna susceptibilă să întrunească 233 de voturi fără AUR, inacceptabil pentru UDMR —, refacerea unei majorități PSD–PNL–UDMR cu un premier acceptabil tuturor. Sorin Grindeanu s-a declarat de acord cu propunerea lui Hunor, spunând că „e nevoie de calmare”. George Simion a reiterat amenințările cu suspendarea președintelui Nicușor Dan, susținând că „fără AUR nu se poate” rezolva criza. Liderul senatorilor AUR, Petrișor Peiu, a precizat că partidul nu va juca rolul de „salvator de serviciu” cât timp președintele și foștii coaliționari nu își schimbă pozițiile, iar Csoma Botond (UDMR) a confirmat că Nicușor Dan nu va face o nouă desemnare până nu există certitudinea unei majorități parlamentare. Pe fondul negocierilor, doi senatori din grupul „Pace-Întâi România” au trecut la grupul PNL, cu doar două zile înainte de vacanța parlamentară.",
    pro: [
      "Eșecul confirmă, la prima testare reală în plen, diagnosticul guvernului paralel din 14 și 16 iunie: o desemnare fără majoritate negociată și confirmată în avans nu rezistă la vot, indiferent de profilul candidatului.",
      "Respingerea evită instalarea unui guvern construit, în ultimă instanță, din voturi individuale disparate și disidenți de partid, fără un program negociat public.",
      "AUR și UDMR și-au respectat public angajamentele anunțate cu zile înainte (ieșirea din sală), oferind un grad de predictibilitate procedurală rar în această criză.",
    ],
    contra: [
      "Eșecul prelungește cu cel puțin câteva săptămâni vidul guvernamental, deja la peste 40 de zile de la căderea guvernului Bolojan, cu impact asupra calendarului bugetar și al PNRR.",
      "Decizia lui Simion de a retrage AUR din sală chiar în timpul dezbaterilor, sub presiunea publică a etichetei de „trădător” pentru oricine ar fi votat, a anulat exact varianta de rezervă — voturi individuale AUR — pe care o cultivase Veștea de la desemnare.",
      "Lipsa unei defalcări oficiale, confirmate, pe pentru/contra/abțineri lasă electoratul fără o evidență clară a modului în care a votat fiecare parlamentar la un moment decisiv.",
    ],
    votParalel: {
      vot: "abținere",
      verdict: "mixt",
      scor: -2,
      motivare:
        "Guvernul paralel se abținuse pe 14 și 16 iunie, cu o cerință nenegociabilă: majoritate confirmată înainte de vot, nu după. Eșecul din 22 iunie confirmă exact acest diagnostic — Veștea a ajuns în plen cu 211–217 voturi calculate, sub pragul de 233, și fără sprijinul oficial al propriului partid. Scorul rămâne -2, neschimbat față de desemnare: costul nu mai e teoretic, ci constă în opt zile de criză internă PNL (excluderi, procese, congres extraordinar) și o lună și jumătate de vid guvernamental, plătite pentru o tentativă care nu a trecut de prima testare aritmetică reală.",
    },
    votReal: {
      rezultat:
        "207 voturi exprimate în total în plenul reunit al Camerei Deputaților și Senatului, sub pragul de 233 necesar — Cabinetul Veștea nu a obținut învestitura. Sursele de presă citează cifre diferite și neconfirmate oficial pentru defalcarea exactă pe „pentru”/„contra”; fără o cifră unanim confirmată, nu redăm o defalcare exactă pe pentru/contra/abțineri.",
      pePartide:
        "AUR — prin George Simion — a anunțat în timpul dezbaterilor decizia de a părăsi sala, calificând drept „trădător” pe orice parlamentar care ar fi votat Cabinetul: „Noi toți care nu suntem trădători părăsim această sală.” UDMR a confirmat ieșirea celor 31 de parlamentari din sală, conform deciziei anunțate pe 17 iunie de Kelemen Hunor, care l-a felicitat ironic pe Simion de la tribună: „Există un singur om care astăzi a câștigat. Nu este în sală, dar talentul trebuie recunoscut. Felicitări, George Simion, ai dat șah și mat!” Grupul minorităților naționale (17 mandate), prin Varujan Pambuccian, a anunțat susținerea a 15 dintre cei 17 parlamentari. PNL și USR și-au confirmat poziția de refuz, anunțată cu zile înainte.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Rezultatul confirmă, la prima testare reală în plen, exact diagnosticul guvernului paralel din 14 și 16 iunie: o desemnare făcută fără o majoritate negociată și confirmată în avans nu rezistă la votul din plen, indiferent cât de solid e profilul administrativ al candidatului sau cât de coerentă e intenția unui guvern politic. Costul nu mai e teoretic — opt zile de criză internă PNL și o lună și jumătate de vid guvernamental au fost plătite pentru o tentativă care nu a trecut de prima testare aritmetică reală. Verdictul asupra crizei în ansamblu se va da abia când va exista o propunere nouă cu majoritate reală în spate.\n\nActualizare 25 iunie: eșecul negocierilor de la Vila Lac confirmă din nou diagnosticul guvernului paralel — o majoritate negociată „pe hârtie”, fără un acord ferm asupra partajării puterii executive, rămâne blocată la masa discuțiilor, nu doar în plen. Termenul de 30 iunie cerut de președinte adaugă o presiune de calendar reală, dar nu rezolvă divergența de fond dintre tabere asupra mecanismului de sprijin parlamentar; o soluție impusă în grabă, sub presiunea vacanței parlamentare, riscă să repete exact eroarea care a dus la căderea Cabinetului Veștea.\n\nActualizare 26 iunie: apariția unei a treia propuneri de premier — Siegfried Mureșan, susținut de PNL, USR și UDMR, cu o rotativă a guvernării promisă abia pentru aprilie 2027 — confirmă încă o dată diagnosticul guvernului paralel: niciuna dintre formulele puse pe masă până acum nu a fost precedată de o majoritate negociată și confirmată în avans. Declarația președintelui Nicușor Dan, care a semnalat explicit schimbarea de poziție a PNL față de varianta discutată pe 23 iunie, arată că instabilitatea nu vine doar din lipsa de aritmetică, ci și din inconsecvența actorilor implicați. Termenul de 30 iunie cerut de președinte se apropie fără ca vreo formulă să aibă, la această oră, o majoritate confirmată în prealabil.\n\nActualizare 27 iunie: disputa publică dintre președinție și conducerea PNL pe varianta corectă a discuțiilor de la Cotroceni nu schimbă aritmetica — niciuna dintre cele două propuneri (Grindeanu, Mureșan) nu are o majoritate confirmată —, dar adaugă un cost suplimentar, nemăsurat până acum în acest dosar: o ruptură de comunicare la vârful instituțiilor statului, cu președintele și liderul PNL contrazicându-se public pe conținutul unor negocieri private. Cu trei zile rămase până la termenul de 30 iunie și până la intrarea Parlamentului în vacanță, lipsa unui acord ferm pe formula de guvernare — nu doar pe nume — rămâne motivul abținerii guvernului paralel.\n\nActualizare 28 iunie: contrazicerea publică dintre președinție și conducerea PNL, semnalată pe 27 iunie, s-a adâncit — fără ca vreo propunere de premier să se apropie de pragul de 233 de voturi. Schimbul dur de declarații dintre Mureșan și PSD arată că nici varianta Mureșan, nici cea Grindeanu nu beneficiază, la această oră, de minimul de bunăvoință reciprocă necesar pentru o negociere reală — un cost suplimentar, peste cel pur aritmetic, în a opta săptămână de vid guvernamental.\n\nActualizare 29 iunie: declarația liderului UDMR confirmă oficial ce guvernul paralel semnalase încă din 25 iunie — termenul de 30 iunie cerut de președinte nu va fi respectat. Propunerea lui Hunor de a reface o majoritate PSD–PNL–UDMR, cu un premier acceptabil tuturor, e prima variantă de pe masă care recunoaște explicit limita structurală a crizei: nicio formulă care exclude PSD sau UDMR poate ajunge la 233 de voturi fără AUR, iar sprijinul AUR rămâne condiționat de cereri pe care UDMR și restul partidelor democratice nu le pot accepta (guvernare proprie a AUR sau suspendarea președintelui). Scorul guvernului paralel rămâne neschimbat — abținere, până la o majoritate confirmată în avans — dar costul crește cu fiecare săptămână: încă un termen ratat, fără premier desemnat, cu Parlamentul intrând oficial în vacanța de vară.\n\nActualizare 30 iunie: termenul-limită cerut de președinte a expirat fără nicio nouă desemnare. Nicușor Dan a explicat public că nu dorește „să facem un exercițiu de hai să ne jucăm de-a premierul\" — refuzând să desemneze un candidat în absența unei majorități de 233 de voturi confirmate în prealabil, câtă vreme știe cu certitudine că niciuna dintre propunerile existente (Grindeanu sau Mureșan) nu poate trece votul în plen. Sesiunea parlamentară ordinară s-a încheiat pe 30 iunie; din 1 iulie, Parlamentul este în vacanță de vară, cu posibilitatea convocării în sesiune extraordinară de o treime din parlamentari sau de președinții celor două camere. Guvernul Bolojan continuă interimatul cu atribuții limitate cel puțin până la finalul lunii iulie — cel mai optimist termen avansat de Kelemen Hunor. AUR a anunțat pe 30 iunie inițierea demersurilor pentru suspendarea lui Nicușor Dan: George Simion îl somează să desemneze premier „săptămâna aceasta\"; suspendarea necesită minimum 156 de semnături (o treime din Parlament), AUR deținând circa 90 de mandate — insuficient fără aliați. Scorul și verdictul guvernului paralel rămân neschimbate: abținere, cu cerința nenegociabilă a unei majorități confirmate în avans — dar criza a depășit granița aritmetic-parlamentară și a intrat într-o criză de legitimitate instituțională: cu Parlamentul în vacanță, executiv interimar cu atribuții limitate și un președinte refuzând să desemneze, România intră în iulie fără un premier activ și fără un orizont politic confirmat.",
    controverse: [
      "George Simion a anunțat retragerea AUR din sală chiar în timpul dezbaterilor de învestitură, calificând drept „trădător” pe orice parlamentar care ar fi votat Cabinetul Veștea — o presiune publică asupra propriilor parlamentari, în contradicție cu susținerile individuale pe care chiar Veștea le invocase ca posibile.",
      "Negocierile de la Vila Lac dintre PNL, USR, UDMR și PSD (25 iunie) au eșuat fără un acord asupra formulei de guvernare, prelungind blocajul cu doar câteva zile înainte de începerea vacanței parlamentare de vară.",
      "Dragoș Pîslaru (PNL) l-a acuzat public pe Sorin Grindeanu de „un tupeu formidabil” pentru impunerea de condiții la negocierile de guvernare, în contradicție cu poziția afișată public de flexibilitate a PSD.",
      "PNL a propus pe 26 iunie un candidat la premier (Siegfried Mureșan) cu o rotativă a guvernării către PSD abia din aprilie 2027, după ce pe 23 iunie președintele declarase că PNL se angajase să susțină un guvern minoritar PSD — o schimbare de poziție pe care Nicușor Dan a semnalat-o public drept cauza directă a reapariției blocajului politic.",
      "Pe 27 iunie, conflictul s-a mutat la vedere între președinție și conducerea PNL: Nicușor Dan a acuzat public partidul de schimbarea poziției, iar Ilie Bolojan și Siegfried Mureșan i-au contrazis public versiunea — o ruptură de comunicare între instituții la vârful statului, în plin vid guvernamental de peste șapte săptămâni.",
      "Pe 28 iunie, Siegfried Mureșan l-a numit pe Sorin Grindeanu „premierul OUG 13, incapabil să câștige încrederea pentru România”, iar PSD a replicat că „sub nicio formă” nu îl va vota premier — atac direct între cei doi candidați propuși la funcția de premier, în plină criză de guvernare.",
      "Pe 29 iunie, George Simion a reiterat amenințările cu suspendarea președintelui Nicușor Dan, susținând că criza nu se poate rezolva „fără AUR” — în condițiile în care AUR are doar circa 90 de mandate, insuficiente pentru o guvernare proprie.",
      "Pe 29 iunie, doi senatori din grupul „Pace-Întâi România” au trecut la grupul PNL, cu doar două zile înainte de vacanța parlamentară — o regrupare de forțe în plin calcul al unei eventuale majorități pentru un viitor vot de învestitură.",
      "Pe 30 iunie, Nicușor Dan a anunțat că nu va desemna premier înaintea vacanței parlamentare, invocând absența unei majorități confirmate: nu dorește „să facem un exercițiu de hai să ne jucăm de-a premierul” — o formulare care lasă implicit că propunerile Grindeanu și Mureșan nu au, la această dată, pragul de 233 de voturi.",
      "Pe 30 iunie, AUR a anunțat inițierea demersurilor pentru suspendarea lui Nicușor Dan — un demers constituțional care necesită minimum 156 de semnături de parlamentari (o treime din total), AUR deținând circa 90 de mandate și neputând declanșa procedura fără sprijinul altor formațiuni.",
    ],
    surse: [
      {
        titlu: "HotNews — Kelemen Hunor, de la tribuna Parlamentului: „Felicitări, George Simion, ai dat șah și mat!” (22 iunie 2026)",
        url: "https://hotnews.ro/kelemen-hunor-omagiu-pentru-george-simion-de-la-tribuna-parlmanetului-exista-un-singur-om-care-astazi-a-castigat-nu-este-in-sala-dar-talentul-trebuie-recunoscut-felicitari-george-simion-2281430",
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
        titlu: "Recorder — 22 iunie 2026: Guvernul Veștea-Nicușor, la mila AUR",
        url: "https://recorder.ro/stirile-zilei/22-iunie-2026-guvernul-vestea-nicusor-la-mila-aur/",
      },
      {
        titlu: "AGERPRES — Kelemen Hunor reafirmă că parlamentarii UDMR vor părăsi sala în momentul votului privind Guvernul Veștea (22 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/22/kelemen-hunor-reafirma-ca-parlamentarii-udmr-vor-parasi-sala-in-momentul-votului-privind-guvernul-ve--1569097",
      },
      {
        titlu: "Ziare.com — Kelemen Hunor: „Bravo, George Simion, ai dat șah și mat” (22 iunie 2026)",
        url: "https://ziare.com/guvernul-vestea/kelemen-hunor-sedinta-vot-investire-guvern-vestea-2020192",
      },
      {
        titlu: "HotNews — Anunțul lui Nicușor Dan, după consultările-fulger de la Cotroceni: varianta „care pare să se contureze” și ce le cere partidelor să facă (23 iunie 2026)",
        url: "https://hotnews.ro/anuntul-lui-nicusor-dan-dupa-consultarile-fulger-de-la-cotroceni-varianta-care-pare-sa-se-contureze-si-ce-le-cere-partidelor-sa-faca-2282373",
      },
      {
        titlu: "Radio România — Președintele Nicușor Dan, după consultări: varianta care pare să se contureze este aceea a unui guvern politic minoritar (23 iunie 2026)",
        url: "https://www.radioromania.ro/Actualitate/presedintele-nicusor-dan-dupa-consultari-varianta-care-pare-sa-se-contureze-este-aceea-a-unui-guvern-politic-minoritar-care-sa-se-bazeze-pe-un-acord-parlamentar-de-sprijin-agreat-in-prealabil-id192947.html",
      },
      {
        titlu: "BURSA — Grindeanu: „PSD a decis să-și asume responsabilitatea guvernării” (24 iunie 2026)",
        url: "https://www.bursa.ro/grindeanu-8221psd-a-decis-sa-si-asume-responsabilitatea-guvernarii8221-44293952",
      },
      {
        titlu: "Ziare.com — Eșec total la Vila Lac. Negocierile s-au blocat în orgolii, iar Guvernul rămâne deocamdată o iluzie (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/esec-total-vila-lac-negocieri-blocate-orgolii-2020794",
      },
      {
        titlu: "Adevărul — Negocieri decisive la Vila Lac: Bolojan, Fritz, Kelemen și Grindeanu discută condițiile pentru noul guvern (25 iunie 2026)",
        url: "https://adevarul.ro/politica/negocieri-decisive-la-vila-lac-bolojan-fritz-2538966.html",
      },
      {
        titlu: "Ziare.com — Nicușor Dan a aflat de eșecul negocierilor de la Vila Lac și cere guvern până marți: „Suntem toți oameni serioși” (25 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/nicusor-dan-aflat-esec-negocieri-vila-lac-2020801",
      },
      {
        titlu: "DCNews — Ședința de la Vila Lac s-a încheiat. S-ar fi ajuns la... blocaj! (25 iunie 2026)",
        url: "https://www.dcnews.ro/grindeanu-bolojan-si-fritz-intalnire-la-vila-lac-inainte-de-desemnarea-premierului_1064525.html",
      },
      {
        titlu: "Digi24 — Pîslaru îl acuză pe Grindeanu de „tupeu formidabil”: „PSD, de unde era exponentul flexibilității, e primul care a impus o linie roșie” (25 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/pislaru-il-acuza-pe-grindeanu-de-tupeu-formidabil-psd-de-unde-era-exponentul-flexibilitatii-e-primul-care-a-impus-o-linie-rosie-3832121",
      },
      {
        titlu: "Mediafax — Dragoș Pîslaru, critici la adresa lui Grindeanu privind negocierile: „Un tupeu formidabil, a spus că nu acceptă nicio condiție. PSD face și desface singur” (25 iunie 2026)",
        url: "https://www.mediafax.ro/politic/dragos-pislaru-critici-la-adresa-lui-grindeanu-privind-negocierile-un-tupeu-formidabil-a-spus-ca-nu-accepta-nicio-conditie-psd-face-si-desface-singur-23761389",
      },
      {
        titlu:
          "Mediafax — PNL îl propune pe Siegfried Mureșan pentru funcția de premier și acceptă rotativa cu PSD; UDMR și USR îl susțin tot pe Mureșan (26 iunie 2026)",
        url: "https://www.mediafax.ro/politic/update-pnl-il-propune-pe-siegfried-muresan-pentru-functia-de-premier-si-accepta-rotativa-cu-psd-udmr-si-usr-il-sustin-tot-pe-muresan-23761956",
      },
      {
        titlu:
          "Capital — PNL, USR și UDMR îl propun oficial pe Siegfried Mureșan pentru funcția de premier. Ilie Bolojan: „Credem că este o soluție pentru România” (26 iunie 2026)",
        url: "https://www.capital.ro/siegfried-muresan-propus-pentru-functia-de-premier-pnl-usr-si-udmr-negociaza-o-alternativa-la-candidatul-psd.html",
      },
      {
        titlu:
          "RomaniaTV — Siegfried Mureșan, primele declarații după ce a fost propus premier de PNL-USR-UDMR: „Oamenii din România vor modernizare, vor reformare” (26 iunie 2026)",
        url: "https://www.romaniatv.net/siegfried-muresan-primele-declaratii-dupa-ce-a-fost-propus-premier-de-catre-pnl-usr-udmr-oamenii-din-romania-vor-modernizare-vor-reformare-iar-dorinta-noastra-este-sa-facem-o-oferta-cinst_9659365.html",
      },
      {
        titlu:
          "Mediafax — Întâlnirea de la Cotroceni s-a încheiat fără rezultat: „Am revenit la blocajul politic pe care marți îl credeam depășit” (26 iunie 2026)",
        url: "https://www.mediafax.ro/politic/intalnirea-de-la-cotroceni-s-a-incheiat-fara-rezultat-partidele-si-au-pastrat-pozitiile-iar-nicusor-dan-nu-desemneaza-astazi-premierul-am-revenit-la-blocajul-politic-pe-care-marti-il-crede-23761970",
      },
      {
        titlu:
          "Adevărul — Nicușor Dan le cere partidelor să revină la dialog: „De marți până azi, PNL și-a schimbat poziția” (26 iunie 2026)",
        url: "https://adevarul.ro/politica/nicusor-dan-ii-primeste-la-cotroceni-pe-liderii-2539267.html",
      },
      {
        titlu:
          "Digi24 — Nicușor Dan anunță blocaj în rezolvarea crizei politice și acuză PNL că și-a schimbat poziția (27 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/nicusor-dan-anunta-blocaj-in-rezolvarea-crizei-politice-si-acuza-pnl-ca-si-a-schimbat-pozitia-3835021",
      },
      {
        titlu:
          "Gandul — Ilie Bolojan îl contrazice pe președintele Nicușor Dan și zice că nu l-a mințit. Ce spune despre varianta Mureșan (27 iunie 2026)",
        url: "https://www.gandul.ro/politica/ilie-bolojan-il-contrazice-pe-presedintele-nicusor-dan-si-zice-ca-nu-l-a-mintit-ce-spune-despre-varianta-muresan-20935744",
      },
      {
        titlu:
          "Realitatea.NET — Premierul lui Bolojan îl contrazice pe Nicușor Dan: „PNL nu a spus niciodată că îl susține pe Grindeanu” (27 iunie 2026)",
        url: "https://www.realitatea.net/stiri/actual/premierul-lui-bolojan-il-contrazice-pe-nicusor-dan-pnl-nu-a-spus-niciodata-ca-il-sustine-pe-grindeanu-lko4m5",
      },
      {
        titlu:
          "HotNews — Siegfried Mureșan îl contrazice public pe Nicușor Dan, după acuzațiile la adresa PNL: „Este timpul să decidem ce vrem cu adevărat” (27 iunie 2026)",
        url: "https://hotnews.ro/siegfried-muresan-in-contrazice-public-pe-nicusor-dan-este-timpul-sa-decidem-ce-vrem-cu-adevarat-2285847",
      },
      {
        titlu:
          "Ziarul Profit — PNL, reacție după ce Nicușor Dan a avut o atitudine neașteptată față de Ilie Bolojan: „Nu acceptăm lecții despre responsabilitate de la cei care au aruncat România în criză” (27 iunie 2026)",
        url: "https://www.ziarulprofit.ro/pnl-reactie-dupa-ce-nicusor-dan-a-avut-o-atitudine-neasteptata-fata-de-ilie-bolojan-nu-acceptam-lectii-despre-responsabilitate-de-la-cei-care-au-aruncat-romania-in-criza/",
      },
      {
        titlu:
          "HotNews — Ilie Bolojan, replică după acuzațiile lui Nicușor Dan: „PNL nu blochează, PNL rămâne consecvent” (28 iunie 2026)",
        url: "https://hotnews.ro/ilie-bolojan-replica-dupa-acuzatiile-lui-nicusor-dan-pnl-nu-blocheaza-pnl-ramane-consecvent-2285942",
      },
      {
        titlu:
          "Digi24 — PSD îl atacă pe Siegfried Mureșan și susține că nu îl va vota premier „sub nicio formă” (28 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/psd-il-ataca-pe-siegfried-muresan-si-sustine-ca-nu-il-va-vota-premier-sub-nicio-forma-3838073",
      },
      {
        titlu:
          "G4Media — Kelemen Hunor anunță că un nou guvern se poate forma abia spre sfârșitul lunii iulie (29 iunie 2026)",
        url: "https://www.g4media.ro/breaking-kelemen-hunor-anunta-ca-un-nou-guvern-se-poate-forma-abia-spre-sfarsitul-lunii-iulie-daca-nu-are-cineva-o-bagheta-magica.html",
      },
      {
        titlu:
          "HotNews — Kelemen Hunor invită la „răcirea temperaturii declarațiilor”; soluția de guvern pe care o vede încă posibilă (29 iunie 2026)",
        url: "https://hotnews.ro/video-kelemen-hunor-invita-la-racirea-temperaturii-declaratiilor-solutia-de-guvern-pe-care-o-vede-inca-posibila-2287549",
      },
      {
        titlu:
          "Adevărul — Kelemen Hunor propune refacerea coaliției PSD-PNL-UDMR (29 iunie 2026)",
        url: "https://adevarul.ro/politica/kelemen-hunor-propune-refacerea-coalitiei-2539772.html",
      },
      {
        titlu:
          "Antena3 — Grindeanu e de acord cu propunerea lui Kelemen Hunor pentru deblocarea negocierilor: „E nevoie de calmare” (29 iunie 2026)",
        url: "https://www.antena3.ro/politica/grindeanu-e-de-acord-cu-propunerea-lui-kelemen-hunor-pentru-deblocarea-negocierilor-e-nevoie-de-calmare-793859.html",
      },
      {
        titlu:
          "Știrile ProTV — George Simion, despre președintele Nicușor Dan: „La cum s-a comportat până acum, trebuie suspendat” (29 iunie 2026)",
        url: "https://stirileprotv.ro/stiri/politic/george-simion-despre-presedintele-nicusor-dan-la-cum-s-a-comportat-pana-acum-trebuie-suspendat.html",
      },
      {
        titlu: "Ziare.com — AUR anunță că nu va juca rolul de salvator de serviciu. Condiția pentru a susține un guvern pro-occidental (29 iunie 2026)",
        url: "https://ziare.com/criza-guvernamentala/aur-anunta-rol-salvator-serviciu-2021442",
      },
      {
        titlu:
          "Digi24 — Csoma Botond: „Nicușor Dan nu va face o desemnare până nu există o majoritate”. Președintele a fost mâhnit după eșecul negocierilor (29 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/csoma-botond-nicusor-dan-nu-va-face-o-desemnare-pana-nu-exista-o-majoritate-presedintele-a-fost-mahnit-dupa-esecul-negocierilor-3838673",
      },
      {
        titlu: "Ziare.com — Regrupări de forțe în ultima clipă: doi senatori din grupul PACE au trecut la PNL (29 iunie 2026)",
        url: "https://ziare.com/senatori/mutati-pnl-2021440",
      },
      {
        titlu: "Ziare.com — Motivele pentru care Nicușor Dan a refuzat să-i nominalizeze pe Grindeanu sau pe Mureșan: \"Nu vreau să facem un exercițiu de hai să ne jucăm de-a premierul\" (30 iunie 2026)",
        url: "https://ziare.com/nominalizare-premier/motive-nicusor-dan-refuzat-nominalizeze-grindeanu-muresan-2021632",
      },
      {
        titlu: "G4Media — Ultima zi în care Nicușor Dan putea desemna premier înainte de vacanța parlamentară; se preconizează interimatul Bolojan până la toamnă (30 iunie 2026)",
        url: "https://www.g4media.ro/ultima-zi-in-care-nicusor-dan-poate-desemna-un-premier-inaintea-vacantei-parlamentare-se-preconizeaza-un-guvern-interimar-condus-de-ilie-bolojan-pana-in-toamna-ce-solutii-de-criza-pot-fi-luate-pen.html",
      },
      {
        titlu: "Digi24 — Blocajul continuă: Parlamentul intră în vacanță, Bolojan mai rămâne cel puțin o lună (30 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/blocajul-continua-parlamentul-intra-in-vacanta-iar-bolojan-mai-ramane-cel-putin-o-luna-alesii-ar-putea-fi-chemati-la-jumatatea-verii-3840023",
      },
      {
        titlu: "Digi24 — George Simion îl „somează” pe Nicușor Dan să desemneze premier; AUR anunță procedura de suspendare (30 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/george-simion-il-someaza-pe-nicusor-dan-sa-desemneze-premier-aur-anunta-ca-incepe-procedura-de-suspendare-3840755",
      },
      {
        titlu: "BURSA — George Simion anunță că AUR începe demersurile pentru suspendarea lui Nicușor Dan (30 iunie 2026)",
        url: "https://www.bursa.ro/george-simion-anunta-ca-aur-incepe-demersurile-pentru-suspendarea-presedintelui-nicusor-dan-60644958",
      },
    ],
  },
  {
    slug: "ccr-valideaza-cotele-dublate-de-extractie-a-ursilor",
    titlu: "CCR validează dublarea cotelor de extracție a urșilor pentru 2026",
    data: "2026-06-24",
    institutie: "CCR",
    domenii: ["mediu", "siguranță publică"],
    rezumat:
      "Curtea Constituțională a respins, pe 24 iunie 2026, cu majoritate de voturi, obiecția de neconstituționalitate a președintelui Nicușor Dan împotriva legii care dublează cotele de extracție a ursului brun pentru 2026: de la 426 la 859 de exemplare la nivel de prevenție și de la 55 la 110 la nivel de intervenție. Legea rămâne constituțională și își poate produce efectele.",
    explicatie:
      "Legea pentru modificarea și completarea Ordonanței de urgență a Guvernului nr. 81/2021 — care reglementează metodele de intervenție imediată pentru prevenirea și combaterea atacurilor exemplarelor de urs brun asupra persoanelor și bunurilor acestora — a fost transmisă Parlamentului spre promulgare pe 4 mai 2026 (PL-x 218/2026). Actul modifică art. 31 alin. (1) și (2) din OUG 81/2021, stabilind pentru 2026 un nivel de prevenție de 859 de exemplare (față de 426 anterior) și un nivel de intervenție de 110 exemplare (față de 55 anterior) — practic o dublare a cotelor de recoltare a ursului brun, motivată de creșterea documentată a atacurilor asupra oamenilor și bunurilor.\n\nPreședintele Nicușor Dan a sesizat CCR cu o obiecție de neconstituționalitate, criticând faptul că interdicția împușcării femelelor cu pui nu e dublată de o sancțiune expresă, că legea nu stabilește clar procedura prin care se determină vârsta puilor, cine face determinarea și care sunt consecințele unei erori, precum și absența unui sistem digital de monitorizare în timp real a cotelor, care ar preveni depășirea plafonului aprobat.\n\nCCR a respins obiecția pe 24 iunie 2026, cu majoritate de voturi, constatând că actul normativ se bazează pe date științifice detaliate din care rezultă că populația de urși bruni este „excesiv de numeroasă” și că soluțiile alternative destinate protejării siguranței publice nu sunt suficiente. Decizia validează dublarea cotelor și permite aplicarea lor pentru 2026.",
    pro: [
      "Cotele mai mari răspund unei creșteri documentate a atacurilor ursului brun asupra oamenilor și animalelor, mai ales în zonele de munte și la marginea localităților.",
      "CCR a confirmat existența unei baze științifice („date detaliate”) care justifică nivelul cotelor, nu o decizie arbitrară a Guvernului sau a Parlamentului.",
      "Decizia oferă predictibilitate autorităților locale și silvice chiar în sezonul cu cele mai multe incidente, evitând un blocaj juridic prelungit.",
    ],
    contra: [
      "Dublarea cotelor nu e acompaniată de un mecanism digital de monitorizare în timp real, susține președintele Nicușor Dan, ceea ce face dificilă verificarea respectării plafonului aprobat o dată atins.",
      "Procedura de determinare a vârstei puilor de urs — relevantă pentru interdicția împușcării femelelor cu pui — rămâne neclară: legea nu spune cine face determinarea, cum, și ce se întâmplă în caz de eroare.",
      "CCR s-a pronunțat doar pe conformitatea constituțională a criticilor punctuale formulate de președinte, nu pe fondul politicii cinegetice — întrebarea dacă dublarea cotelor e proporțională cu riscul real rămâne deschisă.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "mixt",
      scor: 2,
      motivare:
        "Guvernul paralel votează PENTRU dublarea cotelor, pe fond: presiunea reală a atacurilor de urs asupra oamenilor și gospodăriilor justifică o ajustare, iar CCR a confirmat existența unei baze științifice pentru decizie. Dar votul rămâne condiționat de exact lacunele semnalate de președinte și nerezolvate de Curte: fără un sistem de monitorizare în timp real al cotelor și fără o procedură clară de determinare a vârstei puilor, riscul de aplicare inconsecventă sau de depășire necontrolată a plafonului rămâne real. Scor moderat: +2, nu mai mult, până când aceste lacune administrative sunt acoperite prin norme de aplicare.",
    },
    votReal: {
      rezultat:
        "CCR a respins, pe 24 iunie 2026, cu majoritate de voturi, obiecția de neconstituționalitate a președintelui Nicușor Dan și a constatat că legea pentru modificarea OUG 81/2021 (PL-x 218/2026) este constituțională. Legea își produce efectele: cotele de extracție a ursului brun pentru 2026 sunt 859 de exemplare la nivel de prevenție și 110 la nivel de intervenție.",
      detalii:
        "Vot CCR cu majoritate, nu unanimitate; defalcarea exactă pe judecători nu a fost făcută publică în sursele consultate.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "CCR a confirmat constituționalitatea legii, validând pe fond aceeași direcție pe care ar fi votat-o guvernul paralel: cotele de extracție trebuiau ajustate la realitatea de teren. Dar validarea Curții se limitează la conformitatea cu Constituția a criticilor punctuale formulate de președinte — nu înlocuiește nevoia unor norme de aplicare clare (monitorizare în timp real a cotelor, procedură de determinare a vârstei puilor) care să transforme cifrele aprobate într-o politică aplicabilă și verificabilă pe teren, nu doar într-un plafon teoretic.",
    controverse: [
      "Decizia dublează cotele de extracție a ursului brun (prevenție 426→859, intervenție 55→110) fără un mecanism de monitorizare în timp real care să blocheze automat recoltarea după atingerea plafonului.",
    ],
    surse: [
      {
        titlu:
          "Administrația Prezidențială — Sesizare de neconstituționalitate asupra Legii pentru modificarea și completarea OUG nr. 81/2021",
        url: "https://www.presidency.ro/ro/media/comunicate-de-presa/sesizare-de-neconstitutionalitate-asupra-legii-pentru-modificarea-si-completarea-ordonantei-de-urgenta-a-guvernului-nr-81-2021-privind-aprobarea-metodelor-de-interventie-imediata-pentru-prevenirea-si-combaterea-atacurilor-exemplarelor-de-urs-brun-asupra-persoanelor-si-bunurilor-acestora-precum-si-pentru-modificarea-si-completarea-unor-acte-normative",
      },
      {
        titlu:
          "Digi24 — CCR a respins sesizarea președintelui Nicușor Dan pe Legea privind prevenirea și combaterea atacurilor de urs brun (24 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/justitie/ccr-a-respins-sesizarea-presedintelui-nicusor-dan-pe-legea-privind-prevenirea-si-combaterea-atacurilor-de-urs-brun-3830243",
      },
      {
        titlu:
          "Stiripesurse — CCR anunță că a respins sesizarea lui Nicușor Dan pe legea urșilor: cotele de extracție pentru ursul brun rămân constituționale (24 iunie 2026)",
        url: "https://www.stiripesurse.ro/ccr-anunta-ca-a-respins-sesizarea-lui-nicusor-dan-pe-legea-ursilor-cotele-de-extractie-pentru-ursul-brun-raman-constitutionale_3897846",
      },
      {
        titlu:
          "Mediafax — Nicușor Dan pierde la CCR pe tema urșilor și regimului ariilor naturale protejate (24 iunie 2026)",
        url: "https://www.mediafax.ro/stirile-zilei/nicusor-dan-pierde-la-ccr-pe-tema-ursilor-si-regimului-ariilor-naturale-protejate-unde-a-gresit-presedintele-romaniei-23760836",
      },
      {
        titlu:
          "Antena3 — CCR a respins sesizarea președintelui Nicușor Dan privind legea care dublează numărul urșilor ce pot fi împușcați (24 iunie 2026)",
        url: "https://www.antena3.ro/politica/ccr-a-respins-sesizarea-presedintelui-nicusor-dan-privind-legea-care-dubleaza-numarul-ursilor-ce-pot-fi-impuscati-793279.html",
      },
      {
        titlu:
          "JURIDICE.ro — Obiecție de neconstituționalitate respinsă privind modificarea regimului intervențiilor asupra ursului brun",
        url: "https://www.juridice.ro/830509/obiectie-de-neconstitutionalitate-respinsa-privind-modificarea-regimului-interventiilor-asupra-ursului-brun.html",
      },
    ],
  },
  {
    slug: "lege-interzicere-vanzare-actiuni-stat-sesizata-la-ccr",
    titlu:
      "Legea care interzice vânzarea acțiunilor statului la companii naționale până în 2027, atacată la CCR",
    data: "2026-05-27",
    institutie: "Parlament",
    domenii: ["economie", "companii de stat", "guvernanță corporativă"],
    rezumat:
      "Parlamentul a adoptat, prin votul Camerei Deputaților din 27 mai 2026 (178 pentru, 103 contra, 8 abțineri), o lege inițiată de senatori PSD care interzice, până la 31 decembrie 2027, vânzarea acțiunilor deținute de stat la companii și societăți naționale, instituții de credit și orice altă societate în care statul e acționar. Pe 24 iunie 2026, președintele Nicușor Dan a sesizat CCR cu o obiecție de neconstituționalitate.",
    explicatie:
      "Un grup de senatori PSD, condus de Daniel Zamfir, a depus la Senat, pe 20 aprilie 2026, proiectul „privind unele măsuri pentru protejarea intereselor naționale în activitatea economică” (PL-x 376/2026), ca reacție directă la planul vicepremierului Oana Gheorghiu de reformă a 22 de companii de stat, care includea posibila listare la bursă a unor pachete minoritare de acțiuni, în linie cu angajamente din PNRR. Senatul a aprobat proiectul în procedură de urgență; Camera Deputaților, cameră decizională, l-a adoptat pe 27 mai 2026 cu 178 de voturi pentru, 103 contra și 8 abțineri, cu sprijinul PSD și AUR.\n\nLegea interzice, până la 31 decembrie 2027, înstrăinarea acțiunilor deținute de stat la companii și societăți naționale, la instituții de credit, precum și la orice altă societate unde statul are calitatea de acționar, indiferent de cota de capital deținută — cu excepția companiilor cu pierderi 5 ani consecutivi sau aflate în insolvență prin hotărâre judecătorească definitivă, și a pachetelor cu valoare totală sub 5 milioane de lei. Legea a fost transmisă președintelui spre promulgare pe 8 iunie 2026.\n\nActualizare 24 iunie: președintele Nicușor Dan a sesizat CCR cu o obiecție de neconstituționalitate, susținând că legea contravine unei direcții legislative recente și coerente a statului român — inclusiv Legii 48/2025 privind politica publică a proprietății private a statului — care încurajează listarea companiilor de stat pe piața de capital și participarea fondurilor de pensii. Sesizarea semnalează și efecte asupra investitorilor privați aflați în proceduri suspendate (câștigători declarați ai unor licitații, participanți care au depus garanții sau au plătit avansuri), pentru care legea nu prevede nimic explicit, precum și posibile incompatibilități cu obligațiile asumate de România față de Uniunea Europeană.",
    pro: [
      "Protejează pe termen scurt activele strategice ale statului de vânzări sub presiune politică sau de piață, într-un moment de instabilitate guvernamentală prelungită.",
      "Exceptările pentru companii cu pierderi cronice sau insolvență evită blocarea restructurărilor inevitabile la firme nefuncționale.",
      "Vine ca reacție la un plan de listare anunțat unilateral de un vicepremier, fără un cadru parlamentar prealabil — un contrasemnal care forțează o discuție publică despre ce companii de stat ar trebui sau nu vândute.",
    ],
    contra: [
      "Contrazice direct Legea 48/2025 și direcția legislativă recentă privind politica publică a proprietății private a statului, ale cărei obiective explicite includ stimularea listărilor la bursă și atragerea fondurilor de pensii ca investitori.",
      "Lege adoptată în procedură de urgență, în câteva săptămâni, fără un studiu de impact public asupra companiilor afectate sau a investitorilor aflați deja în proceduri de privatizare în curs.",
      "Nu reglementează explicit soarta garanțiilor depuse, avansurilor plătite sau răspunderii statului față de câștigătorii unor licitații aflate în plină desfășurare la momentul interzicerii — un vid care poate genera litigii costisitoare.",
      "Blochează generic, pe doi ani, orice vânzare de acțiuni ale statului, indiferent de companie sau context economic — o interdicție rigidă, nu o evaluare caz cu caz.",
    ],
    votParalel: {
      vot: "contra",
      verdict: "defavorabil",
      scor: -3,
      motivare:
        "Guvernul paralel votează CONTRA: o interdicție generală, de doi ani, pe toate companiile de stat — indiferent de performanța sau relevanța strategică a fiecăreia — e o soluție disproporționată la o problemă reală (decizii de privatizare anunțate fără consultare parlamentară). Forma corectă de a proteja interesul național nu e blocarea oricărei tranzacții pe doi ani, ci o evaluare individuală, transparentă, companie cu companie, cu criterii publice. Legea contrazice o direcție legislativă recentă (Legea 48/2025) fără să o abroge explicit, creează incertitudine pentru investitorii deja angajați în proceduri și nu rezolvă cauza reală a conflictului — coordonarea, sau lipsa ei, între Guvern și Parlament pe planul de reformă a companiilor de stat. Scor -3: dauna e mai degrabă de claritate legislativă și predictibilitate decât una bugetară imediată.",
    },
    votReal: {
      rezultat:
        "Adoptată. Camera Deputaților (cameră decizională) a votat legea pe 27 mai 2026 cu 178 de voturi pentru, 103 contra și 8 abțineri. Transmisă președintelui spre promulgare pe 8 iunie 2026. Pe 24 iunie 2026, președintele Nicușor Dan a sesizat CCR cu o obiecție de neconstituționalitate; promulgarea rămâne suspendată până la soluționarea sesizării — rezultat final în așteptare.",
      detalii:
        "Inițiată de senatori PSD (Daniel Zamfir); votată și de AUR. PNL și USR s-au opus.",
      cifre: { pentru: 178, contra: 103, abtineri: 8 },
      pePartide:
        "PSD și AUR — pentru. PNL și USR — contra. Pozițiile UDMR și ale celorlalte formațiuni nu sunt documentate exact pe acest vot în sursele consultate.",
    },
    aliniere: "divergent",
    verdictFinal:
      "Parlamentul a ales o interdicție generală în locul unei evaluări companie cu companie — exact opusul direcției pe care ar fi votat-o guvernul paralel. Sesizarea președintelui la CCR, depusă pe 24 iunie, pune punctul central pe masă: o lege adoptată în procedură de urgență, în câteva săptămâni, poate contrazice un cadru legislativ mai amplu construit anterior (Legea 48/2025) și poate lăsa fără soluție investitori aflați deja în proceduri suspendate. Verdictul rămâne deschis până la decizia CCR; dacă Curtea admite sesizarea, poziția guvernului paralel va fi confirmată juridic — dacă o respinge, rămâne confirmată politic, ca un exemplu de legiferare reactivă, în regim de urgență, fără coordonare reală cu Executivul pe planul de reformă a companiilor de stat.",
    controverse: [
      "Legea a fost depusă de PSD la doar câteva zile după ce vicepremierul Oana Gheorghiu a anunțat planul de listare a unor pachete minoritare la 22 de companii de stat — un conflict direct, nemediat politic, între un proiect de guvern și o inițiativă parlamentară a unui partid din afara guvernului.",
      "Președintele Nicușor Dan susține că legea contravine direct Legii 48/2025, adoptată recent, fără ca Parlamentul să fi abrogat-o explicit sau să fi explicat public contradicția.",
    ],
    surse: [
      {
        titlu:
          "Agerpres — Camera Deputaților: Acțiunile statului la companiile și societățile naționale nu pot fi înstrăinate până la 31 decembrie 2027 (27 mai 2026)",
        url: "https://agerpres.ro/politic/2026/05/27/camera-deputatilor-actiunile-statului-la-companiile-si-societatile-nationale-nu-pot-fi-instrainate-p--1560352",
      },
      {
        titlu:
          "Digi24 — Proiectul care interzice vânzarea activelor statului până în 2027 a fost adoptat de Senat",
        url: "https://www.digi24.ro/stiri/economie/proiectul-care-interzice-vanzarea-activelor-statului-pana-in-2027-a-fost-adoptat-de-senat-3755921",
      },
      {
        titlu:
          "Capital.ro — Proiectul PSD privind interzicerea vânzării companiilor de stat, votat în regim de urgență",
        url: "https://www.capital.ro/proiectul-psd-privind-interzicerea-vanzarii-companiilor-de-stat-votat-in-regim-de-urgenta-ciprian-serban-despre-tarom-nu-se-inchide.html",
      },
      {
        titlu:
          "Agerpres — Nicușor Dan sesizează CCR în legătură cu legea privind protejarea intereselor naționale în activitatea economică (24 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/24/nicusor-dan-sesizeaza-ccr-in-legatura-cu-legea-privind-protejarea-intereselor-nationale-in-activitat--1569954",
      },
      {
        titlu:
          "G4Media — Nicușor Dan sesizează Curtea Constituțională în legătură cu legea ce privește protejarea intereselor naționale în activitatea economică (24 iunie 2026)",
        url: "https://www.g4media.ro/nicusor-dan-sesizeaza-curtea-constitutionala-in-legatura-cu-legea-ce-priveste-protejarea-intereselor-nationale-in-activitatea-economica-parlamentul-a-instituit-o-interdictie-pana-pe-31-decembrie-20.html",
      },
      {
        titlu:
          "Antena3 — Nicușor Dan a atacat la CCR legea PSD-AUR care interzice vânzarea de acțiuni la companii de stat până la finalul lui 2027 (24 iunie 2026)",
        url: "https://www.antena3.ro/politica/nicusor-dan-a-atacat-la-ccr-legea-psd-aur-care-interzice-vanzarea-de-actiuni-la-companii-de-stat-pana-la-finalul-lui-2027-793312.html",
      },
    ],
  },
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
        "Adoptat parțial. Senatul a aprobat pe 26 mai 2026 legile pentru OUG 21/2026 și OUG 38/2026 (cu eliminarea a 12 articole din OUG 38 considerate nerelaționate cu SAFE). CCR a respins pe 4 iunie sesizarea AUR+SOS+PACE, declarând cadrul SAFE constituțional. Actualizare 30 iunie 2026: Camera Deputaților nu a adoptat proiectul de lege de aprobare a OUG 38/2026 — 110 voturi pentru, 107 abțineri (PNL în bloc) și 16 contra, 59 de deputați neprezenți la vot —, sub pragul de majoritate necesară. Actul revine la comisii și va fi rediscutat în plenul Camerei în sesiunea parlamentară de toamnă (septembrie 2026).",
      detalii:
        "OUG 21/2026: 69 pentru / 3 contra / 31 abțineri. OUG 38/2026: 71 pentru / 1 contra / 30 abțineri (cu eliminarea a 12 articole străine de SAFE, strecurate în ordonanță). Lista de proiecte MApN (8,33 mld. €) a primit doar raport favorabil în comisiile reunite de apărare (28 aprilie), fără vot în plen — opoziția s-a abținut.",
      pePartide:
        "PNL și USR — pentru, ferm. PSD — a votat legea dar a atacat procedura (Grindeanu a sesizat CCR pe OUG 38). AUR și SOS — contra/abținere, au sesizat CCR și Avocatul Poporului. Pozițiile POT și UDMR nu sunt documentate public în sursele consultate.",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Parlamentul a decis în aceeași direcție cu votul guvernului paralel: programul SAFE merge înainte — și e bine pentru țară că merge. Dar alinierea e doar pe rezultat, nu pe proces. Ceea ce Parlamentul a tolerat — achiziții fără licitație, listă confidențială votată în comisii, o ordonanță emisă de un guvern deja demis — guvernul paralel nu ar fi tolerat. Dacă vulnerabilitățile procedurale semnalate de generali în rezervă, sindicate (BNS a sesizat OLAF) și economiști se materializează, SAFE poate aluneca din cea mai mare oportunitate de modernizare a apărării în cel mai mare scandal de achiziții al deceniului. Verdictul rămâne deschis pe execuție: contractele trebuie monitorizate public, contract cu contract.\n\nActualizare 30 iunie: Camera Deputaților nu a adoptat OUG 38/2026, din cauza abținerii masive a PNL (107 abțineri, 16 contra, față de 110 pentru). Actul revine în sesiunea de toamnă — o ilustrare că un Parlament fără majoritate stabilă amână finalizarea cadrului legal SAFE exact în timp ce contractele de miliarde de euro sunt deja semnate și execuția a început. Contractele rămân valide (sunt acte de drept privat și nu depind de aprobarea parlamentară a OUG pentru executare), dar incertitudinea legislativă prelungită poate alimenta litigiile deja anunțate de producătorii excluși din proceduri.",
    controverse: [
      "Beretta acuză „11 luni fără competiție reală” și pregătește litigiu; BNS a anunțat sesizarea Comisiei Europene și a OLAF pe lipsa de transparență.",
      "OUG 38/2026 a fost adoptată în ședința din 4 mai dar publicată pe 8 mai — după demiterea guvernului Bolojan; Avocatul Poporului Renate Weber a numit-o „premieră de la 1991” și a sesizat CCR (sesizare amânată pentru 18 iunie 2026).",
      "Eroarea „de redactare” 198 → 298 blindate Lynx a modificat valoarea contractului cu circa 1 miliard de euro.",
      "Pe 30 iunie 2026, Camera Deputaților nu a adoptat proiectul de lege de aprobare a OUG 38/2026 (110 voturi pentru, 107 abțineri — PNL în bloc —, 16 contra); actul revine la comisii și va fi rediscutat în sesiunea de toamnă. Contractele SAFE sunt deja semnate pentru 6,6 miliarde €, dar cadrul legal principal al OUG 38 rămâne neaprobat de camera decizională.",
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
      {
        titlu: "AGERPRES — Camera Deputaților: Ordonanța 38/2026 cu privire la programul SAFE nu a putut fi adoptată; se rediscută în sesiunea următoare (30 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/30/camera-deputatilor-ordonanta-38-2026-cu-privire-la-programul-safe-nu-a-putut-fi-adoptata-se-rediscut--1571678",
      },
      {
        titlu: "Forbes România — Ordonanța privind programul SAFE pentru înzestrarea Armatei a fost respinsă în Camera Deputaților (30 iunie 2026)",
        url: "https://www.forbes.ro/ordonanta-privind-programul-safe-pentru-inzestrarea-armatei-a-fost-respinsa-in-camera-deputatilor-509037",
      },
      {
        titlu: "CursDeGuvernare — Ordonanța SAFE nu a întrunit numărul de voturi necesare; se întoarce la comisii și revine în plen la toamnă (30 iunie 2026)",
        url: "https://cursdeguvernare.ro/ordonanta-safe-nu-intrunit-numarul-voturi-necesare.html",
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
        "Ordonanța a rămas în vigoare și a produs efecte (contractele SAFE au fost semnate până pe 30 mai). Senatul a aprobat-o pe 26 mai 2026, eliminând cele 12 articole străine de SAFE. CCR a amânat pe 18 iunie 2026, pentru a doua oară, sesizarea lui Sorin Grindeanu (conflict juridic de natură constituțională între Guvern și Parlament) — noul termen este 15 iulie 2026. Sesizarea separată a Avocatului Poporului (excepție de neconstituționalitate) rămâne de asemenea în așteptare, fără termen comunicat public — rezultat final în așteptare.",
      detalii: "Senat: 71 pentru / 1 contra / 30 abțineri.",
      cifre: { pentru: 71, contra: 1, abtineri: 30 },
      pePartide:
        "Coaliția pro-SAFE (PNL, USR) a susținut; PSD a votat conținutul dar a contestat procedura la CCR; AUR/SOS contra sau abținere.",
    },
    aliniere: "divergent",
    verdictFinal:
      "Aici votul guvernului paralel diverge de decizia reală. Parlamentul a ales pragmatismul: a validat ordonanța ca să nu pună în pericol contractele SAFE, mulțumindu-se să elimine articolele parazite. Înțelegem rațiunea, dar nu o împărtășim: scopul bun nu validează procedura proastă, iar costul real al acestui precedent se va vedea abia la următorul guvern demis care va decide să legifereze „în prelungiri”. Dacă CCR va admite sesizările Avocatului Poporului sau ale lui Grindeanu, poziția guvernului paralel va fi fost confirmată juridic; dacă le respinge, rămâne confirmată politic — un Parlament care își apără propriul instrument de control ar fi trebuit să reacționeze mai dur.\n\nActualizare 18 iunie 2026: CCR a amânat a doua oară sesizarea lui Grindeanu, pentru 15 iulie 2026 — peste o lună de la termenul inițial. Amânările repetate lasă conflictul constituțional nerezolvat exact în perioada în care miza lui practică (contractele SAFE) s-a consumat deja, ceea ce reduce orice decizie viitoare la un precedent pe hârtie, nu la o remediere reală.",
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
      {
        titlu:
          "Radio România — CCR a amânat pentru 15 iulie sesizarea lui Sorin Grindeanu pe OUG privind Programul SAFE (18 iunie 2026)",
        url: "https://www.radioromania.ro/Actualitate/ccr-a-amanat-pentru-iulie-sesizarea-lui-sorin-grindeanu-pe-oug-privind-programul-safe-id191333.html",
      },
      {
        titlu:
          "Digi24 — CCR a amânat decizia pe sesizarea lui Grindeanu privind un conflict între Guvern și Parlament (18 iunie 2026)",
        url: "https://www.digi24.ro/stiri/actualitate/politica/ccr-a-amanat-decizia-pe-sesizarea-lui-grindeanu-privind-un-conflict-intre-guvern-si-parlament-dupa-adoptarea-oug-pentru-programul-safe-3821421",
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
        "Decret de desemnare semnat pe 5 iunie; lista cabinetului depusă pe 10 iunie; audieri în comisii pe 11 iunie. Votul de învestitură, programat inițial pe 12 iunie, a fost amânat. Matematic, Tomac nu putea aduna 233 de voturi (maximum disponibil: 224 — PNL, USR și UDMR refuzaseră cu toții). Pe 14 iunie 2026, Tomac a renunțat la mandat înainte de votul de învestitură — prima din cele două tentative constituționale s-a consumat fără a ajunge la vot.",
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
      "Actualizare 11 iunie: PNL a votat unanim în BPN să nu susțină investitura, UDMR nu participă la vot, PSD nu votează fără PNL și USR — suma maximă a voturilor disponibile este de 224 față de 233 necesare. Costul desemnării fără majoritate asigurată — timp pierdut, presiune pe rating, paralizie administrativă — confirmă exact evaluarea guvernului paralel de la momentul desemnării. Mandatele a 6 miniștri interimari expiraseră pe 10 iunie, adâncind starea de limbo constituțional.\n\nActualizare 12 iunie: USR a votat oficial în Comitetul Politic (>90% majoritate) să nu susțină învestirea. Fritz a propus explicit un guvern politic minoritar PNL+USR+UDMR drept alternativă, ceea ce transforma eșecul Tomac dintr-o probabilitate într-o certitudine matematică.\n\nActualizare 14 iunie: Tomac a renunțat la mandat pe 14 iunie 2026, înainte de votul de învestitură, consumând prima tentativă constituțională fără a ajunge la vot. Nicușor Dan l-a desemnat imediat pe Adrian Veștea (PNL, economist, fost primar Râșnov, fostul președinte al CJ Brașov, fost ministru al Dezvoltării în gov. Ciolacu) — din nou fără să consulte conducerea PNL. Bolojan a calificat decizia drept „un act ostil, o evidentă încercare de rupere a PNL”. Veștea refuză să-și depună mandatul în ciuda ultimatumului propriului partid. Criza guvernamentală s-a adâncit cu o criză internă PNL. Analiza desemnării Veștea, în intrarea separată.",
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
      "Legea (PL-x 228/2026) modifică Codul de procedură penală cu un scop declarat simplu: procese mai scurte. Camera preliminară — etapa în care se verifică legalitatea probelor și care durează uneori ani — primește reguli stricte de reunire și disjungere a cauzelor și termene mai scurte între ședințe. Părțile sunt citate doar la primul termen, apoi au obligația să-și urmărească singure dosarul. Deciziile camerei preliminare privind legalitatea probelor devin definitive.\n\nVotul a fost zdrobitor: 284 pentru, 1 contra, 2 abțineri în Camera Deputaților (13 mai), după 110–0 în Senat. Ambasada SUA a susținut public reforma („procesele pentru abuzuri asupra copiilor nu trebuie să dureze cât copilăria”).\n\nReplica a venit de la vârful magistraturii: cele 96 de judecători ai ÎCCJ (Secțiile Unite, instanță condusă de Lia Savonea) au sesizat CCR pe 22 mai, susținând că eliminarea citării dezavantajează persoanele vulnerabile, iar caracterul definitiv al deciziilor camerei preliminare ar împiedica instanța de fond să mai înlăture probe obținute ilegal. CCR a fixat termen de soluționare pe 24 iunie 2026.",
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
        "Adoptată de Parlament; atacată la CCR de ÎCCJ pe 22 mai 2026. CCR a fixat termen de soluționare pe 24 iunie 2026 — decizie în așteptare.",
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
        titlu: "Agerpres — CCR discută pe 24 iunie sesizarea ÎCCJ pe modificarea legislației penale privind camera preliminară",
        url: "https://agerpres.ro/justitie/2026/05/25/ccr-discuta-pe-24-iunie-sesizarea-iccj-pe-modificarea-legislatiei-penale-care-reglementeaza-procedur--1559775",
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
  {
    slug: "legea-93-2026-ziua-memoriei-mineriadei",
    titlu:
      "Legea 93/2026: 15 iunie devine Ziua Națională a Memoriei Victimelor Mineriadei",
    data: "2026-06-10",
    institutie: "Parlament",
    domenii: ["stat de drept", "justiție", "drepturi"],
    rezumat:
      "Nicușor Dan a promulgat, pe 10 iunie 2026, legea care instituie 15 iunie ca Ziua Națională a Memoriei Victimelor Mineriadei din 13-15 iunie 1990 și a Represiunii Antidemocratice — prima recunoaștere legală oficială a represiunii, la 36 de ani de la evenimentele care au umbrit prima vară a democrației românești. Adoptată cu 271 de voturi pentru și un singur vot contra în Camera Deputaților.",
    explicatie:
      "Pe 13-15 iunie 1990, minerii convocați la București au reprimat violent manifestanții din Piața Universității (zeci de morți și răniți) și au devastat sediile partidelor de opoziție și ale unor instituții. Evenimentele au marcat Europa la mai puțin de un an după căderea comunismului; o parte din vinovați au fost judecați — inclusiv Ion Iliescu, trimis în judecată pentru crime împotriva umanității —, dar procesul penal a progresat extrem de lent, iar o zi oficială a memoriei a lipsit timp de 36 de ani.\n\nLegea 93/2026 (PL-x 108/2026), inițiată de deputații PNL Gabriel Andronache și Florin Roman în decembrie 2025, a fost adoptată de Senat pe 26 februarie 2026 (87 voturi pentru / 3 abțineri) și de Camera Deputaților — for decizional — pe 13 mai 2026, cu 271 voturi pentru, 1 contra și 6 abțineri. Promulgată prin Decretul 322/2026 pe 10 iunie 2026. Prima observare a zilei comemorative a avut loc pe 15 iunie 2026, cu momente de reculegere la Camera Deputaților și cu depunere de coroane de flori de către Nicușor Dan la Monumentul dedicat memoriei victimelor Mineriadei.\n\nLegea prevede organizarea de evenimente culturale, educative și comemorative dedicate memoriei victimelor și consolidarea educației civice privind evenimentele din 1990. Nu include mecanisme de reparație pentru victime sau familii și nu stabilește sancțiuni.",
    pro: [
      "Recunoaștere oficială, cu 36 de ani întârziere, a unui eveniment care a marcat profund democrația română — un stat de drept are obligația să nominalizeze victimele represiunii.",
      "Componenta educativă introduce în calendarul civic un moment anual de reflecție și documentare, combătând tendințele de relativizare a evenimentelor din 1990.",
      "Consens parlamentar larg (271–1) — evaluarea evenimentelor din 1990 ca represiune antidemocratică este împărtășită de toate marile forțe politice.",
    ],
    contra: [
      "Lege simbolică fără mecanism de reparație: victimele și familiile lor nu primesc nicio compensație sau recunoaștere personală prin acest act.",
      "Lipsa unui proces penal finalizat — dosarul Iliescu a tergiversat decenii — face ca ziua comemorativă să fie percepută, de o parte a victimelor, ca substitut fără substanță al dreptății.",
      "Formularea amplă a componentei educative lasă la latitudinea autorităților locale forma și conținutul evenimentelor — fără standarde minime obligatorii, impactul în școli poate fi nul.",
    ],
    votParalel: {
      vot: "pentru",
      verdict: "favorabil",
      scor: 5,
      motivare:
        "Guvernul paralel votează PENTRU. O zi a memoriei nu înlocuiește justiția tranzițională, dar recunoașterea oficială a victimelor represiunii din 1990 e un act moral pe care un stat de drept nu trebuia să-l amâne 36 de ani. Votul este pentru principiu — memoria colectivă contează —, cu o condiție pentru ca legea să nu rămână pe hârtie: programe educative cu standarde clare și, mai ales, finalizarea proceselor penale. Scor +5: câștig net, cu testul în implementare.",
    },
    votReal: {
      rezultat:
        "Adoptată de Senat pe 26 februarie 2026 și de Camera Deputaților (for decizional) pe 13 mai 2026; promulgată prin Decretul 322/2026 pe 10 iunie 2026.",
      detalii:
        "Camera Deputaților: 271 pentru / 1 contra / 6 abțineri. Senat: 87 pentru / 3 abțineri.",
      cifre: { pentru: 271, contra: 1, abtineri: 6 },
      pePartide:
        "Susținere transpartinică largă (271–1); inițiativă PNL (Gabriel Andronache, Florin Roman).",
    },
    aliniere: "aliniat",
    verdictFinal:
      "Vot real și vot paralel pe aceeași pagină. Testul acestei legi va fi vizibil pe termen mediu: câte ore de educație despre Mineriada intră efectiv în programele școlare și dacă evenimentele comemorative au substanță sau rămân gesturi formale. Dosarul Iliescu — proces pentru crime împotriva umanității, unul dintre cele mai lungi din România postdecembristă — rămâne singura cale de reparație judiciară autentică, pe care o zi comemorativă nu o poate înlocui.",
    surse: [
      {
        titlu:
          "AGERPRES — Lege promulgată: 15 iunie — Ziua Națională a Memoriei Victimelor Mineriadei (10 iunie 2026)",
        url: "https://agerpres.ro/politic/2026/06/10/lege-promulgata-15-iunie---ziua-nationala-a-memoriei-victimelor-mineriadei--1565045",
      },
      {
        titlu:
          "AGERPRES — Comunicat Administrația Prezidențială: Decretul 322/2026 (promulgare, 10 iunie 2026)",
        url: "https://agerpres.ro/comunicate/2026/06/10/comunicat-de-presa---administratia-prezidentiala--1565031",
      },
      {
        titlu:
          "AGERPRES — 15 iunie: Ziua Memoriei Victimelor Mineriadei marcată pentru prima dată în România (15 iunie 2026)",
        url: "https://agerpres.ro/documentare/2026/06/15/15-iunie---ziua-nationala-a-memoriei-victimelor-mineriadei-din-13-15-iunie-1990-si-a-represiunii-ant--1566261",
      },
      {
        titlu:
          "Stiripesurse — Nicușor Dan a promulgat legea: 15 iunie, Ziua Memoriei Victimelor Mineriadei",
        url: "https://www.stiripesurse.ro/decizie-cu-puternica-incarcatura-istorica-15-iunie-devine-ziua-nationala-a-memoriei-victimelor-mineriadei-legea-a-fost-promulgata_3893924",
      },
    ],
  },
  {
    slug: "ccr-respinge-sesizarea-hidrocentrale-arii-protejate",
    titlu:
      "CCR respinge sesizarea lui Nicușor Dan: hidrocentralele pre-2007 pot fi finalizate în arii protejate",
    data: "2026-06-24",
    institutie: "CCR",
    domenii: ["mediu", "energie", "stat de drept"],
    rezumat:
      "Curtea Constituțională a respins, pe 24 iunie 2026, cu majoritate de voturi, obiecția de neconstituționalitate a președintelui Nicușor Dan împotriva legii inițiate de senatorul PSD Daniel Zamfir care permite reluarea și finalizarea proiectelor hidroenergetice începute înainte de 29 iunie 2007 în interiorul ariilor naturale protejate, prin modificarea limitelor acestora, și scutește de evaluare a impactului asupra mediului proiectele declarate de interes pentru securitatea națională de către CSAT. Decizia CCR este definitivă și general obligatorie.",
    explicatie:
      "Proiectul de lege, redepus în 2025 de senatorul PSD Daniel Zamfir (alături de Radu Oprea) după mai multe tentative anterioare începând din 2022, modifică regimul ariilor naturale protejate pentru a permite reluarea unor proiecte hidroenergetice — majoritatea aprobate sau începute în perioada comunistă, prin hotărâri de guvern sau decrete de stat — ale căror amplasamente au fost incluse ulterior, prin legislație de mediu, în arii protejate. Legea (PL-x 14/2023) a fost adoptată de Camera Deputaților, for decizional, pe 15 octombrie 2025, cu 262 de voturi pentru și 33 contra, cu sprijinul PSD, PNL, UDMR și AUR; USR a votat aproape în unanimitate împotrivă. Pe lângă modificarea limitelor ariilor protejate pentru proiectele pre-2007, legea exceptează de la evaluarea impactului asupra mediului proiectele declarate de interes pentru securitatea națională printr-o decizie a Consiliului Suprem de Apărare a Țării (CSAT).\n\nPreședintele Nicușor Dan a sesizat CCR cu o obiecție de neconstituționalitate în noiembrie 2025, susținând că legea contravine obligațiilor României față de Uniunea Europeană în materie de protecție a mediului și ridică probleme privind dreptul constituțional la un mediu sănătos. Ministra Mediului, Diana Buzoianu, s-a opus public legii, susținând că mecanismul exceptărilor generalizate de la evaluarea de mediu pe baza unei decizii CSAT nu are echivalent în alte state membre UE și poate contraveni directivelor europene.\n\nCCR a respins sesizarea pe 24 iunie 2026, cu majoritate de voturi, constatând conformitatea legii cu Constituția în raport cu criticile formulate de președinte. Decizia este definitivă și general obligatorie. Senatorul Daniel Zamfir a salutat decizia, afirmând că aceasta deblochează investiții estimate de el la circa un miliard de euro, și a comentat public, cu adresă la ministra Buzoianu: „Aud că Buzoianu e cu gheață la inimă.” Ministrul Energiei, Bogdan Ivan, a calificat decizia drept „victorie pentru România”, descriind proiectele vizate drept „strategice pentru securitatea energetică”. Organizații de mediu (printre care Agent Green, Declic și Bankwatch România) au criticat decizia, susținând că afectează limitele a 27 de parcuri naționale și naturale, și au anunțat că vor sesiza Comisia Europeană.",
    pro: [
      "Legea vizează un set delimitat de proiecte hidroenergetice începute înainte de 2007, multe în stadiu avansat de execuție din perioada comunistă — finalizarea lor valorifică investiții deja făcute, în loc să le lase definitiv blocate.",
      "Guvernul susține că deblochează investiții estimate la circa un miliard de euro și contribuie la capacitatea de producție a energiei electrice, relevantă pentru securitatea energetică a României.",
      "CCR a confirmat conformitatea legii cu Constituția în raport cu criticile punctuale formulate de președinte — decizia Curții este definitivă și general obligatorie.",
    ],
    contra: [
      "Scutirea de evaluare a impactului asupra mediului pentru proiectele declarate „de securitate națională” printr-o simplă decizie CSAT — fără criterii publice explicite în lege pentru o astfel de declarare — deschide o portiță care poate fi folosită dincolo de cele câteva hidrocentrale pre-2007 vizate inițial.",
      "Modificarea limitelor a 27 de parcuri naționale și naturale, potrivit organizațiilor de mediu, afectează un regim de protecție instituit prin legislație ulterioară pentru rațiuni de conservare, nu printr-o eroare administrativă.",
      "Ministra Mediului a semnalat un risc concret de incompatibilitate cu directivele europene de mediu, pe care decizia CCR nu îl elimină — ea confirmă doar conformitatea cu Constituția română, nu cu dreptul UE; ONG-urile au anunțat sesizarea Comisiei Europene.",
    ],
    votParalel: {
      vot: "contra",
      verdict: "mixt",
      scor: -3,
      motivare:
        "Guvernul paralel ar fi votat CONTRA acestei legi, cu o distincție clară între cele două componente. Finalizarea unui set delimitat de hidrocentrale pre-2007, deja începute și abandonate decenii la rând, e un argument legitim de valorificare a investiției publice — pe acest punct, singur, scorul ar fi fost pozitiv. Dar legea nu se limitează la atât: scutirea de evaluare de mediu pentru orice proiect declarat „de securitate națională” printr-o decizie CSAT, fără criterii publice de delimitare în text, transformă o excepție punctuală într-un mecanism care poate fi extins discreționar la proiecte viitoare, fără control judiciar sau public asupra deciziei de declarare. Asta cântărește mai mult decât beneficiul energetic imediat: e o problemă de calitate a procesului și de transparență, nu doar de mediu. Scor -3: deficitul de garanții împotriva extinderii necontrolate a excepției depășește beneficiul economic al deblocării proiectelor istorice.",
    },
    votReal: {
      rezultat:
        "CCR a respins, pe 24 iunie 2026, cu majoritate de voturi, obiecția de neconstituționalitate a președintelui Nicușor Dan. Legea e constituțională și își produce efectele; decizia CCR este definitivă și general obligatorie.",
      detalii:
        "Lege adoptată de Camera Deputaților (for decizional) pe 15 octombrie 2025, cu 262 voturi pentru și 33 contra; PSD, PNL, UDMR și AUR au votat pentru, USR aproape în unanimitate împotrivă. Sesizare CCR depusă de președinte în noiembrie 2025; decizie CCR pe 24 iunie 2026. Defalcarea exactă a votului din CCR pe judecători nu a fost făcută publică în sursele consultate.",
      cifre: { pentru: 262, contra: 33, abtineri: 0 },
      pePartide:
        "PSD (inițiator, prin Daniel Zamfir), PNL, UDMR și AUR au votat pentru lege la Camera Deputaților; USR a votat aproape în unanimitate împotrivă.",
    },
    aliniere: "divergent",
    verdictFinal:
      "CCR a validat legea pe conformitatea ei cu Constituția română, nu pe meritele ei de fond. Guvernul paralel ar fi separat cele două componente ale legii, votate ca pachet unic: finalizarea hidrocentralelor pre-2007 e un argument defendabil de valorificare a investiției, dar scutirea de evaluare de mediu pentru proiecte declarate unilateral „de securitate națională”, fără criterii publice de delimitare, instituie un mecanism cu risc de extindere necontrolată, dincolo de cazurile vizate inițial. Rămân deschise atât sesizarea anunțată de organizațiile de mediu la Comisia Europeană — care va testa legea pe compatibilitatea cu dreptul UE, nu cu Constituția română —, cât și întrebarea practică a câte proiecte vor fi efectiv declarate „de securitate națională” în anii următori.",
    controverse: [
      "Legea modifică limitele a 27 de parcuri naționale și naturale, potrivit organizațiilor de mediu (Agent Green, Declic, Bankwatch România), care au anunțat sesizarea Comisiei Europene.",
      "Scutirea de evaluare a impactului de mediu pentru proiecte declarate „de securitate națională” printr-o decizie CSAT, fără criterii publice explicite de delimitare în text, a fost semnalată ca incompatibilă cu directivele europene de mediu de către ministra Mediului, Diana Buzoianu.",
      "Senatorul Daniel Zamfir a comentat public, cu adresă la ministra Buzoianu, după decizia CCR: „Aud că Buzoianu e cu gheață la inimă” — declarație atribuită, nu o caracterizare proprie.",
    ],
    surse: [
      {
        titlu:
          "Economedia — CCR respinge sesizarea lui Nicușor Dan pe legea hidrocentralelor: proiectele vechi de dinainte de 2007 pot fi scoase din ariile protejate și exceptate de la evaluarea de mediu (24 iunie 2026)",
        url: "https://economedia.ro/ccr-respinge-sesizarea-lui-nicusor-dan-pe-legea-hidrocentralelor-proiectele-vechi-de-dinainte-de-2007-pot-fi-scoase-din-ariile-protejate-si-exceptate-de-la-evaluarea-de-mediu.html",
      },
      {
        titlu:
          "News.ro — Activiștii de mediu, indignați de decizia CCR care declară constituțională legea inițiată de senatorul Daniel Zamfir: 27 de parcuri naționale și naturale sunt mutilate (24 iunie 2026)",
        url: "https://www.news.ro/social/activistii-mediu-indignati-decizia-ccr-declara-constitutionala-lege-initiata-senatorul-daniel-zamfir-27-parcuri-nationale-naturale-mutilate-niste-proiecte-hidroenergetice-ceausiste-1922401824002026061822492742",
      },
      {
        titlu:
          "DCNews — Înfrângere majoră pentru ONG-urile de mediu după decizia CCR de azi privind hidrocentralele. Daniel Zamfir: se deblochează investiții de 1 miliard de euro (24 iunie 2026)",
        url: "https://www.dcnews.ro/infrangere-majora-pentru-ong-urile-de-mediu-dupa-decizia-ccr-de-azi-privind-hidrocentralele-daniel-zamfir-se-deblocheaza-investitii-de-1-miliard-de-euro_1064279.html",
      },
      {
        titlu:
          "Profit.ro — În pofida lui Nicușor Dan, hidrocentralele vor „mușca” din ariile naturale protejate. CCR a dat undă verde legii și scutește de evaluare de mediu proiectele declarate de securitate națională de către CSAT (24 iunie 2026)",
        url: "https://www.profit.ro/povesti-cu-profit/energie/video-foto-pofida-nicusor-dan-hidrocentralele-vor-musca-ariile-naturale-protejate-ccr-dat-unda-verde-legii-proiecte-istorice-le-scuteste-evaluare-mediu-cele-declarate-securitate-nationala-catre-csat-22492574",
      },
      {
        titlu:
          "Antena 3 — CCR permite finalizarea hidrocentralelor în arii protejate. Bogdan Ivan: „Proiecte strategice pentru securitate energetică” (24 iunie 2026)",
        url: "https://www.antena3.ro/politica/ccr-permite-finalizarea-hidrocentralelor-in-arii-protejate-bogdan-ivan-proiecte-strategice-pentru-securitate-energetica-793318.html",
      },
      {
        titlu:
          "ActiveNews — Ziua și lovitura pentru Nicușor Dan: CCR dă undă verde legii care permite continuarea și finalizarea hidrocentralelor în zone protejate. Sesizarea lui Nicușor Dan a fost respinsă (24 iunie 2026)",
        url: "https://www.activenews.ro/stiri/Ziua-si-lovitura-pentru-Nicusor-Dan.-CCR-da-unda-verde-legii-care-permite-continuarea-si-finalizarea-hidrocentralelor-in-zone-protejate.-Sesizarea-lui-Nicusor-a-fost-respinsa-206167",
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
