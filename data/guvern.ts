import type { PozitieGuvern } from "@/lib/types";
import ilustratii from "@/data/ilustratii.json";

/**
 * Guvernul României — componența propusă de guvernul paralel al cetățeanului.
 * Pentru fiecare poziție: 5 candidați reali, din Parlament și din afara lui, cu argumente
 * pro și contra, activitate verificabilă (cdep.ro / senat.ro sau echivalent instituțional),
 * surse și un punctaj pe grila publică (vezi PunctajCandidat în lib/types.ts):
 * competență 0–40 + activitate 0–30 + integritate 0–30. Propunerea = punctajul maxim;
 * diferențele de 1–3 puncte sunt în marja grilei și sunt semnalate în motivare.
 * Absența unei funcții anterioare nu se penalizează nicăieri. Zero etichete.
 * Actualizat la 12 iunie 2026.
 */
export const pozitiiGuvern: PozitieGuvern[] = [
  {
    slug: "prim-ministru",
    minister: "Prim-ministru",
    misiune:
      "România nu are guvern cu puteri depline din 5 mai 2026: cabinetul Bolojan a fost demis prin moțiune de cenzură cu 281 de voturi, iar premierul desemnat Eugen Tomac nu are majoritate. Premierul propus aici ar trebui să treacă un buget de criză printr-un parlament fragmentat și să țină deficitul (7,65% din PIB) pe traiectoria convenită cu Comisia Europeană.",
    candidati: [
      {
        nume: "Ilie Bolojan",
        partid: "PNL",
        camera: "Senat",
        functieActuala:
          "Prim-ministru interimar (guvern demis la 5 mai 2026); senator de Bihor, fost președinte al Senatului",
        profil:
          "Administrator public cu cel mai documentat bilanț local din România: primar al Oradiei (2008–2020), oraș devenit referință națională pentru fonduri europene și investiții, apoi președinte al CJ Bihor (2020–2024). A condus succesiv Senatul, Președinția interimară (feb.–mai 2025) și Guvernul (iun. 2025–mai 2026).",
        activitate:
          "Senator ales în dec. 2024 și primul președinte al Senatului din legislatură; activitatea legislativă individuală a fost limitată de funcțiile executive deținute aproape continuu din decembrie 2024.",
        pro: [
          "Bilanț administrativ concret și verificabil la Oradea și CJ Bihor (investiții, fonduri UE, reducerea aparatului administrativ).",
          "Singurul candidat care a condus toate palierele: administrație locală, județeană, Senat, Președinție interimară, Guvern.",
          "Locul 3 în topul încrederii INSCOP (martie 2026, 25,1% încredere multă/foarte multă).",
          "Disciplină bugetară demonstrată practic, nu doar declarativ: deficitul a scăzut de la 9,3% la 7,65% din PIB sub guvernul său.",
        ],
        contra: [
          "Demis prin moțiune de cenzură cu 281 de voturi — record istoric, semn de izolare parlamentară totală.",
          "58,2% dintre români declară încredere puțină sau deloc în el (INSCOP, martie 2026).",
          "Stil decizional centralizat, criticat inclusiv în propriul partid (stenograme din ședința PNL de validare a miniștrilor).",
        ],
        punctaj: {
          sustinere: 25,
          competenta: 23,
          activitate: 14,
          integritate: 19,
          total: 81,
        },
        surse: [
          {
            titlu: "AGERPRES — Moțiunea de cenzură adoptată cu 281 de voturi",
            url: "https://agerpres.ro/politic/2026/05/05/motiunea-de-cenzura---adoptata-de-parlament-cu-281-de-voturi-guvernul-bolojan-a-fost-demis--1553085",
          },
          {
            titlu: "INSCOP, martie 2026 — topul încrederii în politicieni",
            url: "https://www.inscop.ro/10-martie-2026-fanatik-sondaj-inscop-cine-sunt-cei-mai-populari-politicieni-din-tara-ce-loc-ocupa-george-simion-nicusor-dan-sau-ilie-bolojan/",
          },
          {
            titlu: "Wikipedia — Guvernul Ilie Bolojan",
            url: "https://ro.wikipedia.org/wiki/Guvernul_Ilie_Bolojan",
          },
        ],
      },
      {
        nume: "Sorin Grindeanu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Președinte al Camerei Deputaților (din 24 iunie 2025), președinte al PSD (din 7 noiembrie 2025)",
        profil:
          "Absolvent de matematică-informatică la Universitatea de Vest din Timișoara; fost prim-ministru (ian.–iun. 2017), fost președinte ANCOM, fost vicepremier și ministru al transporturilor (2021–2025), perioadă în care s-au semnat contractele marilor autostrăzi finanțate european.",
        activitate:
          "Deputat reales în dec. 2024, ales președinte al Camerei Deputaților la 24 iunie 2025; conduce ședințele plenului și Biroul permanent; ca lider PSD a coordonat poziționarea celui mai mare grup parlamentar, inclusiv la moțiunea din 5 mai 2026.",
        pro: [
          "Experiență de prim-ministru și de ministru de linie cu portofoliu greu (Transporturi).",
          "Conduce partidul cu cel mai mare scor la alegerile din dec. 2024 (~22%) — singurul candidat care poate coagula rapid o majoritate.",
          "A doua funcție în stat pe linie legislativă, cu experiență directă în procedurile parlamentare.",
          "Profil de inginer-administrator, nu de retorician.",
        ],
        contra: [
          "Guvernul său din 2017 a căzut după doar 5 luni, pe fondul OUG 13 și al celor mai mari proteste postdecembriste.",
          "Doar locul 7 în topul încrederii INSCOP (martie 2026).",
          "Cumulul președinte de partid + președinte al Camerei concentrează puterea și contrazice ideea de premier echidistant.",
        ],
        punctaj: {
          sustinere: 30,
          competenta: 19,
          activitate: 14,
          integritate: 13,
          total: 76,
          penalizari: "−4 OUG 13, adoptată de guvernul condus de el (2017); −3 acuzații de numiri clientelare, documentate de presă",
        },
        surse: [
          {
            titlu: "Euronews România — Portret Sorin Grindeanu",
            url: "https://www.euronews.ro/articole/portret-cine-este-sorin-grindeanu",
          },
          {
            titlu: "Digi24 — Grindeanu, despre condițiile în care ar accepta să fie premier",
            url: "https://www.digi24.ro/stiri/actualitate/politica/grindeanu-anunta-ce-va-face-psd-dupa-ce-i-a-retras-sprijinul-lui-bolojan-ce-spune-despre-functia-lui-la-camera-deputatilor-3736435",
          },
          {
            titlu: "Ziare.com — Grindeanu: PSD discută trei scenarii politice (martie 2026)",
            url: "https://ziare.com/sorin-grindeanu/psd-discuta-trei-scenarii-2003386",
          },
        ],
      },
      {
        nume: "George Simion",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala: "Deputat, președinte AUR, lider al principalului partid de opoziție",
        profil:
          "Licențiat în administrație și afaceri (Universitatea din București), master în istorie la UAIC Iași; activist civic înainte de politică, fondator AUR; finalist al alegerilor prezidențiale din mai 2025, pierdute în turul al doilea în fața lui Nicușor Dan.",
        activitate:
          "Deputat din dec. 2020 (al doilea mandat); în legislatura 2020–2024 a fost vicepreședinte al Comisiei pentru politică economică, reformă și privatizare; lider de grup parlamentar; a coagulat în aprilie–mai 2026 majoritatea care a demis guvernul Bolojan.",
        pro: [
          "Primul loc în topul încrederii în politicieni (INSCOP, martie 2026: 34,3%).",
          "Reprezintă al doilea bazin electoral din țară (~18% la parlamentare, finalist la prezidențiale 2025) — fără el, echidistanța ar fi formală.",
          "Două mandate de deputat, cu experiență în comisia economică a Camerei.",
          "A demonstrat capacitate de negociere parlamentară transpartinică (moțiunea din 5 mai 2026, semnată cu PSD).",
        ],
        contra: [
          "Comportament conflictual documentat în plen, inclusiv atacuri personale în ziua moțiunii de cenzură.",
          "Interdicții de intrare în Ucraina și Republica Moldova — handicap direct pentru un șef de guvern în politica externă regională.",
        ],
        punctaj: {
          sustinere: 32,
          competenta: 8,
          activitate: 11,
          integritate: 16,
          total: 67,
          penalizari: "−4 comportament conflictual documentat în plen",
        },
        surse: [
          {
            titlu: "CV oficial George Simion — cdep.ro",
            url: "https://www.cdep.ro/camera_deputatilor/deputati/cv/7315.pdf",
          },
          {
            titlu: "AGERPRES — George Simion, fișă biografică",
            url: "https://agerpres.ro/2025/05/15/prezidentiale2025-george-simion-candidat-din-partea-aliantei-pentru-unirea-romanilor-fisa-biografica--1449206",
          },
          {
            titlu: "INSCOP, martie 2026 — Simion primul în topul încrederii",
            url: "https://www.inscop.ro/10-martie-2026-b1-sondaj-george-simion-primul-in-topul-increderii-nicusor-dan-si-ilie-bolojan-il-urmeaza-in-cine-mai-au-incredere-romanii-grafice/",
          },
        ],
      },
      {
        nume: "Kelemen Hunor",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala: "Deputat de Harghita, președinte al UDMR",
        profil:
          "Studii de medicină veterinară și filosofie la Cluj; deputat fără întrerupere din 2000; fost ministru al culturii în mai multe guverne și viceprim-ministru (2020–2023); cel mai longeviv lider de partid parlamentar din România.",
        activitate:
          "Deputat reales în dec. 2024; conduce grupul UDMR, formațiune-balama în toate negocierile de majoritate din legislatura curentă; activitate legislativă constantă pe administrație, culte și minorități.",
        pro: [
          "Cea mai lungă experiență de negociere guvernamentală din Parlament — a guvernat și cu PSD, și cu PNL/USR; profil natural de echilibru.",
          "Experiență de viceprim-ministru cu coordonare interministerială.",
          "Predictibilitate și stabilitate recunoscute transpartinic — rar implicat în scandaluri personale.",
          "Un premier din rândul minorităților ar fi un semnal puternic de echidistanță civică.",
        ],
        contra: [
          "Partidul său a obținut doar ~6% — legitimitate electorală redusă pentru funcția supremă în executiv.",
          "Prezent aproape neîntrerupt la guvernare din anii 2000 — greu de prezentat ca alternativă la sistem.",
          "Relația strânsă cu guvernul de la Budapesta (subiect reactivat de alegerile din Ungaria, aprilie 2026) ridică sensibilități de politică externă.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 16,
          activitate: 12,
          integritate: 19,
          total: 64,
        },
        surse: [
          {
            titlu: "Profil oficial Kelemen Hunor — udmr.ro",
            url: "https://udmr.ro/profil/Kelemen-Hunor",
          },
          {
            titlu: "Ziare.com — Kelemen Hunor, poziția sa după alegerile din Ungaria (aprilie 2026)",
            url: "https://ziare.com/alegeri-ungaria-2026/kelemen-demisie-2006505",
          },
        ],
      },
      {
        nume: "Victor Ponta",
        partid: "independent (grupul Uniți pentru România)",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat; membru al grupului parlamentar Uniți pentru România (din 2026), exclus din PSD în martie 2025",
        profil:
          "Jurist, fost procuror; prim-ministru al României în perioada 2012–2015 — cel mai lung mandat de premier post-2008; candidat independent la prezidențialele din 2025.",
        activitate:
          "Deputat ales în dec. 2024 pe listele PSD; după excluderea din partid a activat ca neafiliat, iar în 2026 s-a alăturat grupului Uniți pentru România, formație parlamentară desprinsă din POT.",
        pro: [
          "Experiență de guvernare reală: peste trei ani ca premier, cu trecerea României prin consolidarea fiscală post-criză.",
          "Locul 4 în topul încrederii INSCOP (martie 2026, 20,9%) — peste Grindeanu și Kelemen.",
          "Actualmente independent față de toate partidele mari — corespunde profilului de premier echidistant.",
          "Cunoaște atât tabăra pro-europeană, cât și electoratul suveranist, putând media între ele.",
        ],
        contra: [
          "Doctorat constatat ca plagiat — scandal academic documentat, încheiat cu renunțarea la titlu.",
          "Traseism politic repetat (PSD → Pro România → PSD → Uniți pentru România) — ridică dubii de consecvență.",
          "Mandatul de premier s-a încheiat cu demisia în urma tragediei Colectiv (2015).",
        ],
        punctaj: {
          sustinere: 18,
          competenta: 18,
          activitate: 9,
          integritate: 7,
          total: 52,
          penalizari: "−10 plagiat constatat, cu renunțarea la titlu; −3 traseism politic repetat",
        },
        surse: [
          {
            titlu: "Mediafax — Ponta demisionează din grupul PSD și trece la Uniți pentru România",
            url: "https://www.mediafax.ro/politic/victor-ponta-demsioneaza-din-grupul-psd-si-se-alatura-grupului-uniti-pentru-romania-23749934",
          },
          {
            titlu: "Mediafax — Ce este grupul Uniți pentru România",
            url: "https://www.mediafax.ro/politic/ce-este-uniti-pentru-romania-grupul-desprins-din-pot-in-care-intra-victor-ponta-23749946",
          },
          {
            titlu: "CursDeGuvernare — Sondaj INSCOP: Ponta locul 4, Grindeanu locul 7",
            url: "https://cursdeguvernare.ro/george-simion-politicianul-in-care-alegatorii-au-cea-mai-mare-incredere.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Ilie Bolojan",
      motivare:
        "81 de puncte: competența și bilanțul administrativ (23/25) compensează susținerea politică mai mică decât a lui Grindeanu (76, susținere 30/35, dar penalizat la integritate). Simion (67) are cea mai mare susținere populară din listă (32/35), însă competența de guvernare (8/25) îl ține departe. Singura poziție unde meritul bate aritmetica voturilor — la limită.",
    },
  },
  {
    slug: "finante",
    minister: "Ministrul Finanțelor",
    misiune:
      "Deficitul bugetar rămâne printre cele mai mari din UE (7,65% din PIB după corecția din 2025), iar bugetul pe 2027 trebuie construit de un guvern cu legitimitate parlamentară. Ministrul de finanțe va negocia simultan cu Comisia Europeană (planul fiscal-bugetar pe 7 ani) și cu un parlament fragmentat.",
    candidati: [
      {
        nume: "Alexandru Nazare",
        partid: "PNL",
        camera: "Senat",
        functieActuala:
          "Ministru al finanțelor (iun. 2025 – prezent, interimar după demiterea guvernului); senator din 2020",
        profil:
          "Studii la SNSPA și Bard College Berlin, master în administrație publică la Hertie School Berlin; ministru al finanțelor în două mandate (dec. 2020–iul. 2021 și iun. 2025–prezent), fost ministru al transporturilor (2012), fost europarlamentar — a obținut aprobarea CE pentru finanțări feroviare de circa 800 mil. euro.",
        activitate:
          "Senator din 2020, membru al Comisiei pentru buget, finanțe, activitate bancară și piață de capital și al Comisiei pentru afaceri europene; activitatea legislativă recentă limitată de mandatul ministerial.",
        pro: [
          "Singurul candidat cu două mandate la Ministerul Finanțelor — cunoaște instituția și dosarul fiscal curent în detaliu.",
          "Experiență dovedită în deblocarea finanțărilor europene (transporturi, 2012).",
          "Formație tehnică internațională (Hertie School) și experiență de europarlamentar.",
          "Membru al comisiei de specialitate a Senatului (buget-finanțe).",
        ],
        contra: [
          "Demis în 2021 după conflictul public cu premierul Cîțu pe rectificarea bugetară — mandat neîncheiat.",
          "Asociat direct cu pachetele de austeritate care au dus la căderea guvernului Bolojan.",
          "Deficitul bugetar a rămas printre cele mai mari din UE pe durata mandatului său actual.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 20,
          activitate: 11,
          integritate: 19,
          total: 71,
        },
        surse: [
          {
            titlu: "Fișă senator Alexandru Nazare — senat.ro",
            url: "https://www.senat.ro/FisaSenator.aspx?ParlamentarID=0731ae55-816f-48a9-a4f6-167dee8749ac",
          },
          {
            titlu: "CV oficial Alexandru Nazare — gov.ro",
            url: "https://gov.ro/fisiere/ministri_fisiere/CURRICULUM_VITAE-Alexandru_Nazare.pdf",
          },
          {
            titlu: "AGERPRES — Alexandru Nazare, fișă biografică",
            url: "https://agerpres.ro/2025/06/22/alexandru-nazare-propus-ministru-al-finantelor-fisa-biografica--1461645",
          },
        ],
      },
      {
        nume: "Tánczos Barna",
        partid: "UDMR",
        camera: "Senat",
        functieActuala:
          "Senator de Harghita; viceprim-ministru în guvernul demis; fost ministru al finanțelor (dec. 2024 – iun. 2025)",
        profil:
          "Economist, absolvent al Academiei de Studii Economice București, în serviciul public de la 22 de ani; senator din 2012; ministru al mediului (2020–2023), apoi viceprim-ministru și ministru al finanțelor (dec. 2024–iun. 2025) și viceprim-ministru în guvernul Bolojan.",
        activitate:
          "Senator la al patrulea mandat; experiență îndelungată în comisiile economice ale Senatului și în negocierile bugetare ale tuturor coalițiilor recente; a gestionat direct construcția bugetului pe 2025.",
        pro: [
          "Economist de formație (ASE) cu mandat recent și complet la Ministerul Finanțelor.",
          "Profil moderat, acceptat atât de partidele fostei coaliții, cât și tolerat de opoziție — cel mai „coalizabil” candidat.",
          "Experiență de viceprim-ministru cu vedere de ansamblu asupra execuției bugetare.",
          "Senator în funcție, cu vechime parlamentară din 2012.",
        ],
        contra: [
          "Pachetul fiscal adoptat în mandatul său („ordonanța trenuleț”, dec. 2024) a fost criticat pentru creșteri de taxe decise netransparent.",
          "Ca ministru al mediului a fost criticat pentru progres insuficient împotriva tăierilor ilegale de păduri.",
          "Prezență continuă la guvernare în toate coalițiile recente — vulnerabil la critica de „om al sistemului”.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 19,
          activitate: 13,
          integritate: 17,
          total: 65,
        },
        surse: [
          {
            titlu: "AGERPRES — Tánczos Barna, fișă biografică",
            url: "https://agerpres.ro/documentare/2025/06/22/t-nczos-barna-udmr-propus-vicepremier-fisa-biografica--1461640",
          },
          {
            titlu: "HotNews — Tánczos Barna, propus ministru de finanțe de UDMR",
            url: "https://hotnews.ro/tanczos-barna-propus-ministru-de-finante-de-catre-udmr-vom-intari-economia-obiectivul-este-sa-asiguram-predictibilitate-si-credibilitate-1867545",
          },
          {
            titlu: "Profil oficial Tánczos Barna — udmr.ro",
            url: "https://udmr.ro/profil/tanczos-barna",
          },
        ],
      },
      {
        nume: "Petrișor Peiu",
        partid: "AUR",
        camera: "Senat",
        functieActuala: "Senator de București, liderul grupului senatorial AUR",
        profil:
          "Inginer, absolvent și doctor al Universității Politehnica București; fost consilier al premierilor Radu Vasile și Adrian Năstase, fost subsecretar de stat și vicepreședinte al Agenției pentru Investiții Străine; analist economic, propunerea AUR de premier după alegerile din 2024.",
        activitate:
          "Senator din dec. 2024; membru al Comisiei pentru buget, finanțe, activitate bancară și piață de capital și al Comisiei pentru energie; lider de grup; intervenții publice constante pe deficit, inflație și execuție bugetară.",
        pro: [
          "Cel mai vizibil specialist economic al opoziției suveraniste — includerea sa acoperă ~18% din electorat la portofoliul-cheie.",
          "Membru al comisiei de specialitate a Senatului (buget-finanțe).",
          "Experiență guvernamentală tehnică reală (consilier de premier, conducerea agenției de investiții străine).",
          "Avertismentele sale privind depășirea țintei de deficit au fost confirmate de evaluările Comisiei Europene.",
        ],
        contra: [
          "Conflict de interese semnalat de presă: a inițiat interzicerea cumpărării de acțiuni la companii de stat de către străini, deși deține acțiuni la 32 de companii (Newsweek).",
          "Retorica economică protecționistă intră în tensiune cu angajamentele asumate de România față de UE.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 18,
          activitate: 13,
          integritate: 13,
          total: 68,
          penalizari: "−5 conflict de interese documentat (portofoliu de acțiuni vs. inițiative pe companiile de stat); −2 alte controverse semnalate de presă",
        },
        surse: [
          {
            titlu: "Grupul parlamentar AUR — senat.ro",
            url: "https://www.senat.ro/ComponentaGrupuri.aspx?Zi=&GrupID=66ce7e9a-a70d-4c69-83ce-774e9e17c315",
          },
          {
            titlu: "Newsweek România — Peiu și acțiunile la 32 de companii",
            url: "https://newsweek.ro/economie/petrisor-peiu-aur-interzice-strainilor-sa-cumpere-actiuni-la-firme-romanesti-el-are-actiuni-la-32-companii",
          },
          {
            titlu: "Factual.ro — fișa de declarații Petrișor Peiu",
            url: "https://www.factual.ro/persoane/petrisor-peiu/",
          },
        ],
      },
      {
        nume: "Claudiu Năsui",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala: "Deputat de București (al treilea mandat), vicepreședinte USR",
        profil:
          "Economist cu carieră în sectorul financiar privat înainte de politică; fost ministru al economiei, antreprenoriatului și turismului (dec. 2020–sep. 2021); autor al unor pachete legislative de debirocratizare adoptate în mandatul 2016–2020.",
        activitate:
          "Membru al Comisiei pentru buget, finanțe și bănci a Camerei în toate cele trei mandate; intervenții documentate pe execuția bugetară (a votat contra creșterii bugetului propriu al Camerei în dec. 2025, semnalând creșteri de 28% la sporuri); critic constant, cu cifre, al risipei bugetare.",
        pro: [
          "Consecvență documentată pe disciplină fiscală și reducerea cheltuielilor statului, inclusiv contra propriei instituții.",
          "Experiență de ministru cu portofoliu economic.",
          "Cea mai constantă activitate în comisia de specialitate dintre candidații tineri.",
          "Profil integru, fără dosare sau acuzații de corupție.",
        ],
        contra: [
          "Mandatul la Ministerul Economiei a fost criticat pentru întârzierea schemelor de compensare HoReCa.",
          "Agenda de reduceri de taxe este greu de aplicat cu un deficit excesiv — percepută ca ideologică.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 14,
          integritate: 20,
          total: 68,
        },
        surse: [
          {
            titlu: "Profil oficial Claudiu Năsui — usr.ro",
            url: "https://usr.ro/oameni/claudiu-nasui",
          },
          {
            titlu: "AGERPRES — Năsui critică bugetul Camerei Deputaților (dec. 2025)",
            url: "https://agerpres.ro/viata-parlamentara/2025/12/23/nasui-usr-critica-bugetul-propus-pentru-camera-deputatilor-e-clar-ca-austeritatea-nu-e-pentru-toti--1514366",
          },
          {
            titlu: "Comisia pentru buget, finanțe și bănci — cdep.ro",
            url: "https://www.cdep.ro/pls/parlam/structura.co?idc=2",
          },
        ],
      },
      {
        nume: "Daniel Dăianu",
        partid: "independent",
        camera: "neparlamentar",
        functieActuala:
          "Președintele Consiliului Fiscal; membru titular al Academiei Române; profesor la SNSPA",
        profil:
          "Economist, membru titular al Academiei Române; fost ministru al finanțelor (1997–1998), fost economist-șef al BNR, fost membru în Consiliul de Administrație al BNR și fost europarlamentar; conduce Consiliul Fiscal — instituția independentă care avizează toate planurile bugetare ale României.",
        activitate:
          "Neparlamentar; sub conducerea sa, Consiliul Fiscal a publicat avize și rapoarte documentate pe fiecare buget de stat și rectificare din ultimul deceniu — avertismentele privind derapajul deficitului din 2019–2024 s-au confirmat integral.",
        pro: [
          "Cea mai înaltă autoritate profesională disponibilă pe finanțe publice: academician, fost ministru de finanțe, fost economist-șef al BNR.",
          "Cunoaște în detaliu execuția bugetară curentă din poziția de președinte al Consiliului Fiscal — instituția care a analizat fiecare buget recent.",
          "Avertismentele Consiliului Fiscal pe deficit s-au dovedit sistematic corecte, sub guverne de toate culorile.",
          "Independent politic de două decenii — profil compatibil cu un buget de criză negociat transpartinic.",
        ],
        contra: [
          "Mandatul de ministru al finanțelor s-a încheiat în 1998 prin demitere, după opoziția față de contractul Bell Helicopters — experiența executivă directă e veche de aproape trei decenii.",
          "Critic constant al tuturor planurilor fiscale recente — relația de lucru cu partidele care votează bugetul ar porni tensionat.",
          "Ar prelua, la 73 de ani, cel mai solicitant portofoliu economic, într-o criză prelungită.",
        ],
        punctaj: {
          sustinere: 2,
          competenta: 23,
          activitate: 15,
          integritate: 19,
          total: 59,
        },
        surse: [
          {
            titlu: "Consiliul Fiscal — site oficial",
            url: "https://www.consiliulfiscal.ro/",
          },
          {
            titlu: "Wikipedia — Daniel Dăianu",
            url: "https://ro.wikipedia.org/wiki/Daniel_D%C4%83ianu",
          },
        ],
      },
    ],
    propunere: {
      nume: "Alexandru Nazare",
      motivare:
        "71 de puncte: două mandate la Finanțe, formație internațională și susținerea PNL (21/35). Peiu și Năsui (68) sunt la trei puncte; Dăianu (59) are cel mai mare punctaj de competență din rubrică (23/25), dar fără susținere politică (2/35) nu poate trece un buget prin Parlament — exact cazul în care tehnocratul nu surclasează.",
    },
  },
  {
    slug: "investitii-proiecte-europene",
    minister: "Ministrul Investițiilor și Proiectelor Europene",
    misiune:
      "Termenul-limită al PNRR este august 2026: fiecare lună fără guvern cu puteri depline riscă pierderea de fonduri. Ministrul trebuie să închidă cererile de plată rămase și să pregătească negocierea politicii de coeziune post-2027.",
    candidati: [
      {
        nume: "Victor Negrescu",
        partid: "PSD",
        camera: "neparlamentar",
        functieActuala:
          "Vicepreședinte al Parlamentului European (din 2024), europarlamentar PSD/S&D",
        profil:
          "Cadru universitar specializat în afaceri europene; fost ministru delegat pentru afaceri europene (2017–2018); raportor general al Parlamentului European pentru bugetul UE pe 2025 și vicepreședinte al PE responsabil, între altele, de domeniul anticorupție.",
        activitate:
          "Nu activează în Parlamentul României; la Bruxelles a fost ales vicepreședinte al PE cu 394 de voturi din 665 și a coordonat ca raportor general negocierea bugetului UE 2025 — exact mecanismele financiare pe care le gestionează MIPE.",
        pro: [
          "Cea mai înaltă funcție deținută de un român în Parlamentul European — acces direct la decidenții care aprobă renegocierile PNRR și politica de coeziune.",
          "Expertiză tehnică exactă pe bugetul UE (raportor general 2025).",
          "Fost ministru pe portofoliul afacerilor europene.",
          "Reprezentarea celui mai votat partid (PSD, ~22%) la un portofoliu pe competență, nu pe clientelism.",
        ],
        contra: [
          "A demisionat din guvern în 2018, în context conflictual, fără a finaliza pregătirea președinției Consiliului UE.",
        ],
        punctaj: {
          sustinere: 26,
          competenta: 21,
          activitate: 17,
          integritate: 18,
          total: 82,
        },
        surse: [
          {
            titlu: "Victor Negrescu — profil oficial Parlamentul European",
            url: "https://www.europarl.europa.eu/meps/ro/88882/VICTOR_NEGRESCU/home",
          },
          {
            titlu: "CV Victor Negrescu — Parlamentul European",
            url: "https://www.europarl.europa.eu/meps/ro/88882/VICTOR_NEGRESCU/cv",
          },
          {
            titlu: "Europa FM — Negrescu, ales vicepreședinte al PE",
            url: "https://www.europafm.ro/victor-negrescu-a-fost-ales-vicepresedinte-al-parlamentului-european-audio/",
          },
        ],
      },
      {
        nume: "Cristian Ghinea",
        partid: "USR",
        camera: "Senat",
        functieActuala: "Senator USR (ales în dec. 2024)",
        profil:
          "Expert în politici europene, fondator și fost director al Centrului Român de Politici Europene (CRPE); ministru al fondurilor europene (2016, guvernul Cioloș) și ministru al investițiilor și proiectelor europene (dec. 2020–sep. 2021), mandat în care a negociat și obținut aprobarea PNRR al României; ca europarlamentar (2019–2020) a participat la negocierea regulamentelor de coeziune 2021–2027.",
        activitate:
          "Senator din dec. 2024; fost coordonator al departamentului de politici publice al USR; intervenții constante pe temele PNRR și absorbție.",
        pro: [
          "Singurul parlamentar în funcție care a condus de două ori ministerul fondurilor europene.",
          "A negociat personal PNRR-ul României cu Comisia Europeană.",
          "Expertiză tehnică pe regulamentele de coeziune, dobândită ca negociator în PE.",
        ],
        contra: [
          "Unele jaloane PNRR negociate de el s-au dovedit nerealiste și au necesitat renegociere (ex. reforma pensiilor).",
          "Stil de comunicare abraziv, autoasumat („caporal obraznic al partidului”) — risc de conflicte în coordonarea interinstituțională.",
          "Ambele mandate ministeriale au fost întrerupte prematur de crize politice.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 19,
          activitate: 12,
          integritate: 19,
          total: 70,
        },
        surse: [
          {
            titlu: "Profil oficial Cristian Ghinea — usr.ro",
            url: "https://usr.ro/oameni/cristian-ghinea",
          },
          {
            titlu: "HotNews — Ghinea demisionează din funcția internă USR, rămâne senator",
            url: "https://hotnews.ro/cristian-ghinea-si-a-dat-demisia-din-functia-de-coordonator-al-politicilor-publice-din-usr-raman-in-continuare-caporal-obraznic-al-partidului-la-senat-1896824",
          },
          {
            titlu: "Ziare.com — Cine este Cristian Ghinea, fost ministru MIPE",
            url: "https://ziare.com/politica/guvern/cine-este-cristian-ghinea-propus-ministru-al-fondurilor-europene-1652193",
          },
        ],
      },
      {
        nume: "Dragoș Pîslaru",
        partid: "independent (fost REPER)",
        camera: "neparlamentar",
        functieActuala:
          "Ministru al investițiilor și proiectelor europene (iun. 2025 – prezent, interimar după demiterea guvernului)",
        profil:
          "Economist, doctor în economie, cu master la London School of Economics; consultant economic înainte de politică; ministru al muncii în guvernul Cioloș (2016), europarlamentar 2019–2024 activ pe dosare economice și sociale, ministru MIPE din iunie 2025.",
        activitate:
          "Nu este parlamentar; conduce MIPE de un an, gestionând cererile de plată PNRR în perioada critică de final a mecanismului (termen august 2026).",
        pro: [
          "Continuitate totală pe dosarele PNRR aflate în plină derulare — orice schimbare bruscă riscă pierderi de fonduri.",
          "Pregătire economică solidă (doctorat, LSE) recunoscută transpartinic.",
          "Experiență combinată guvern + Parlamentul European.",
          "Fără apartenență la vreun partid parlamentar — profil tehnocrat compatibil cu un guvern de criză.",
        ],
        contra: [
          "Numirea sa din 2025 a fost contestată chiar în interiorul PNL, partidul pe a cărui cotă a fost numit fără a fi membru (stenograme publicate).",
          "Face parte din guvernul demis cu 281 de voturi — politic uzat în relația cu actualul Parlament.",
        ],
        punctaj: {
          sustinere: 4,
          competenta: 18,
          activitate: 12,
          integritate: 19,
          total: 53,
        },
        surse: [
          {
            titlu: "Europa Liberă — componența guvernului Bolojan",
            url: "https://romania.europalibera.org/a/guvernul-bolojan-cabinet-cu-cinci-vicepremieri-11-ministri-noi-si-cinci-din-vechiul-executiv-numai-doua-femei-pe-lista/33452580.html",
          },
          {
            titlu: "Antena 3 — stenogramele ședinței PNL privind numirea lui Pîslaru",
            url: "https://www.antena3.ro/politica/stenograme-scandal-in-sedinta-pnl-pentru-validarea-ministrilor-bolojan-atacat-de-roman-e-o-greseala-propunerea-lui-pislaru-750238.html",
          },
        ],
      },
      {
        nume: "Dumitrina Mitrea",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Neamț (al doilea mandat), vicepreședinte al Biroului Național de Conducere al AUR",
        profil:
          "Economistă (ASE, management economic), cu carieră în sectorul privat de asigurări (ING, Allianz Țiriac); parlamentar la al doilea mandat; în legislatura 2020–2024 a fost vicepreședinte al Comisiei pentru afaceri europene a Camerei Deputaților.",
        activitate:
          "18 inițiative legislative în nume propriu și 4 transpartinice; interpelări documentate către miniștri (ex. ministrul mediului, pe reorganizarea regionalei Romsilva); activitate constantă de circumscripție raportată public.",
        pro: [
          "Experiență directă de conducere în comisia de profil european a Camerei (vicepreședinte, 2021–2024).",
          "Activitate parlamentară cuantificabilă: 18 inițiative legislative proprii și interpelări pe teme administrative concrete.",
          "Asigură reprezentarea AUR (~18% din voturi) la un portofoliu-cheie.",
          "Al doilea mandat — cunoaște procedurile legislative și de control parlamentar.",
        ],
        contra: [
          "Rată redusă de succes legislativ — propriile proiecte blocate în comisii, unele de peste un an.",
          "Pozițiile AUR critice față de o parte din politicile UE pot complica relația de lucru cu Comisia Europeană.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 8,
          activitate: 11,
          integritate: 20,
          total: 63,
        },
        surse: [
          {
            titlu: "Ziar Piatra Neamț — interviu-bilanț cu deputatul Dumitrina Mitrea",
            url: "https://www.ziarpiatraneamt.ro/aur-dupa-prezidentiale-despre-ce-urmeaza-pentru-partid-si-pentru-romani-cu-deputatul-dumitrina-mitrea",
          },
          {
            titlu: "Ziar Piatra Neamț — Mitrea, vicepreședinte al Biroului Național AUR",
            url: "https://www.ziarpiatraneamt.ro/neamtul-reprezentat-in-structurile-centrale-aur-deputatul-dumitrina-mitrea-aleasa-vicepresedinte-al-biroului-national-de-conducere",
          },
        ],
      },
      {
        nume: "Anamaria Gavrilă",
        partid: "POT",
        camera: "Camera Deputaților",
        functieActuala: "Deputat de Hunedoara (al doilea mandat), președinte al POT",
        profil:
          "Licențiată în economie la Universitatea de Vest din Timișoara, cu studii postuniversitare în Germania și Marea Britanie (IREBS Regensburg, University of Reading) și nivelul I CFA; a lucrat în 2007–2018 în sectorul investițiilor imobiliare din Germania și Regatul Unit.",
        activitate:
          "Membră a Comisiei pentru afaceri europene, a Comisiei pentru apărare și a comisiei de control al activității SIE; al doilea mandat parlamentar (primul obținut în 2020 pe listele AUR).",
        pro: [
          "Parlamentar în funcție chiar în comisia de profil (afaceri europene).",
          "Pregătire economică formală, cu componentă internațională (CFA nivel I, studii în Germania și UK).",
          "Experiență privată în structurarea de investiții — relevantă pentru componenta de investiții a ministerului.",
          "Reprezintă electoratul POT (~6%) — completează acoperirea spectrului politic.",
        ],
        contra: [
          "Ieșiri nervoase și gafe publice documentate de presă în 2024–2025.",
          "Grupul parlamentar POT s-a destrămat (10 deputați plecați spre Uniți pentru România) — capacitate redusă de a susține politic un mandat ministerial.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 10,
          activitate: 8,
          integritate: 17,
          total: 52,
        },
        surse: [
          {
            titlu: "Euronews România — Portret Anamaria Gavrilă",
            url: "https://www.euronews.ro/articole/portret-cine-este-anamaria-gavrila",
          },
          {
            titlu: "Adevărul — grupul parlamentar POT dispare după plecarea a zece deputați",
            url: "https://adevarul.ro/politica/reconfigurare-in-camera-deputatilor-grupul-2524752.html",
          },
          {
            titlu: "Fișa de deputat Anamaria Gavrilă — cdep.ro",
            url: "https://www.cdep.ro/pls/parlam/structura2015.mp?idm=118&cam=2&leg=2020",
          },
        ],
      },
    ],
    propunere: {
      nume: "Victor Negrescu",
      motivare:
        "82 de puncte — cel mai mare total din rubrică: europarlamentar ales, susținut de cel mai votat partid (26/35), vicepreședinte al PE cu acces direct la decidenții PNRR (activitate 17/20). Ghinea (70) rămâne rezerva imediată.",
    },
  },
  {
    slug: "afaceri-externe",
    minister: "Ministrul Afacerilor Externe",
    misiune:
      "Securitatea Mării Negre a devenit dosarul extern numărul unu (incidentul dronei din Portul Constanța, reuniunea NATO din 10 iunie, Summit-ul de la Ankara din 7–8 iulie 2026), pe fondul finalizării aderării la OCDE și al negocierilor pe bugetul UE post-2027.",
    candidati: [
      {
        nume: "Titus Corlățean",
        partid: "PSD",
        camera: "Senat",
        functieActuala: "Senator, președintele Comisiei pentru politică externă a Senatului",
        profil:
          "Jurist și diplomat de formație, doctor în drept internațional și profesor universitar; fost ministru al afacerilor externe (2012–2014) și fost ministru al justiției (2012).",
        activitate:
          "Conduce Comisia pentru politică externă a Senatului și în legislatura 2024–2028, cu activitate diplomatică parlamentară constantă în 2025–2026 (întrevederi oficiale cu ambasadori, delegații oficiale ale comisiei — ex. Ankara); membru și raportor cu vechime în Comisia de monitorizare a APCE.",
        pro: [
          "Singurul parlamentar activ care a condus efectiv diplomația României (ministru de externe 2012–2014).",
          "Expertiză juridică internațională atestată academic (doctorat, profesor de drept internațional) și experiență la APCE.",
          "Conduce neîntrerupt comisia de specialitate a Senatului, cu activitate verificabilă pe senat.ro în 2025–2026.",
          "Experiență dublă executiv–legislativ, utilă într-un guvern fără majoritate.",
        ],
        contra: [
          "A demisionat din funcția de ministru de externe în noiembrie 2014, în urma scandalului organizării defectuoase a votului din diaspora la prezidențiale.",
          "Profil puternic partizan: carieră de peste două decenii exclusiv în PSD, inclusiv în perioadele cele mai contestate ale partidului.",
          "Stil diplomatic considerat conservator de critici, cu apetență redusă pentru reforma serviciului diplomatic.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 19,
          activitate: 15,
          integritate: 16,
          total: 77,
          penalizari: "−4 demisia din 2014, după organizarea defectuoasă a votului din diaspora",
        },
        surse: [
          {
            titlu: "Senat — întrevederea președintelui Comisiei pentru politică externă",
            url: "https://www.senat.ro/StiriSenatDetaliu.aspx?ID=4C998CB8-252C-4777-B7BC-1A4A1E8F296C",
          },
          {
            titlu: "Senat — vizita oficială a delegației Comisiei pentru politică externă la Ankara",
            url: "https://www.senat.ro/StiriSenatDetaliu.aspx?ID=CCDFF550-E2D9-4331-A74C-499FDED21312",
          },
          {
            titlu: "AGERPRES — componența comisiilor permanente ale Senatului (dec. 2024)",
            url: "https://www.agerpres.ro/politic/2024/12/21/senat-a-fost-stabilita-componenta-comisiilor-permanente--1406755",
          },
        ],
      },
      {
        nume: "Oana Țoiu",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Ministrul afacerilor externe în exercițiu (guvernul Bolojan, demis la 5 mai 2026); deputat la al doilea mandat",
        profil:
          "Deputat realeasă în decembrie 2024, fost secretar de stat în Ministerul Muncii (guvernul Cioloș), absolventă de jurnalism și a unui program executiv de politici publice la Harvard Kennedy School.",
        activitate:
          "Ca deputat a prezidat Comisia pentru muncă; ca ministru de externe din iunie 2025 a reprezentat România la CAE Bruxelles, la ministerialele NATO și la Reuniunea Ministerială OCDE (Paris, 3–4 iunie 2026), unde a prezentat cele 100 de reforme din procesul de aderare a României la OCDE.",
        pro: [
          "Un an de exercițiu efectiv al funcției, cu dosarele curente (OCDE, flancul estic NATO, amenințări hibride) deja în mână.",
          "A coordonat prezentarea progreselor României în aderarea la OCDE, prioritate strategică transpartinică.",
          "Două mandate parlamentare și experiență guvernamentală anterioară ca secretar de stat.",
          "Asigură continuitate diplomatică într-o perioadă de criză politică internă.",
        ],
        contra: [
          "La numirea din 2025, presa a documentat lipsa oricărei experiențe anterioare în politică externă (profil construit pe muncă și politici sociale).",
          "Gafe de comunicare semnalate de presă la începutul mandatului de ministru.",
          "Membră a unui guvern demis prin moțiune de cenzură, ceea ce slăbește argumentul continuității.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 11,
          integritate: 19,
          total: 64,
        },
        surse: [
          {
            titlu: "MAE — rezultatele participării ministrului Oana Țoiu la CAE Bruxelles",
            url: "https://www.mae.ro/node/68314",
          },
          {
            titlu: "AGERPRES — Oana Țoiu, fișă biografică",
            url: "https://agerpres.ro/documentare/2025/06/22/oana-toiu-propusa-ministru-al-afacerilor-externe-fisa-biografica--1461656",
          },
          {
            titlu: "G4Media — analiză critică la numirea din 2025",
            url: "https://www.g4media.ro/oana-toiu-si-ionut-mosteanu-doi-ministri-usr-care-nu-prea-au-legatura-cu-domeniile-pentru-care-au-fost-propusi-toiu-si-a-trecut-in-cv-si-participarile-la-diverse-conferinte-ionut-mosteanu-a-fost.html",
          },
        ],
      },
      {
        nume: "Luminița Odobescu",
        partid: "independent (diplomat de carieră)",
        camera: "neparlamentar",
        functieActuala:
          "Diplomat de carieră; fost consilier prezidențial pentru politică externă (2025), apoi consilier de stat la cancelaria prim-ministrului (nov. 2025)",
        profil:
          "Diplomat de carieră: ministru al afacerilor externe (iunie 2023 – decembrie 2024), reprezentant permanent al României la UE (2015–2021), inclusiv în timpul primei președinții române a Consiliului UE (2019), consilier prezidențial pentru afaceri europene (2021–2023).",
        activitate:
          "Nu este parlamentar; activitatea relevantă este executivă și diplomatică: a condus MAE, a gestionat președinția Consiliului UE din 2019 și a lucrat în structurile de politică externă ale Administrației Prezidențiale sub doi președinți.",
        pro: [
          "Cea mai solidă carieră diplomatică instituțională dintre candidați: ambasador la UE, ministru de externe, consilier prezidențial.",
          "Experiență directă pe dosarele UE (fonduri, extindere, Schengen) și pe relația transatlantică.",
          "Profil tehnocrat, fără apartenență de partid — avantaj într-un guvern de echilibru fără majoritate.",
          "Cunoaște din interior atât MAE, cât și Administrația Prezidențială, reducând riscul de conflict instituțional pe politica externă.",
        ],
        contra: [
          "Percepută ca exponentă a establishment-ului diplomatic din era Iohannis, fără bază politică proprie.",
          "A fost eliberată „la cerere” din funcția de consilier prezidențial în 2025, în contextul restructurării echipei de la Cotroceni.",
        ],
        punctaj: {
          sustinere: 4,
          competenta: 23,
          activitate: 13,
          integritate: 19,
          total: 59,
        },
        surse: [
          {
            titlu: "Administrația Prezidențială — fișa Luminița-Teodora Odobescu",
            url: "https://www.presidency.ro/ro/administratia-prezidentiala/consilierii-presedintelui/odobescu",
          },
          {
            titlu: "AGERPRES — Luminița Odobescu numită consilier prezidențial (feb. 2025)",
            url: "https://agerpres.ro/politic/2025/02/12/primul-decret-semnat-de-ilie-bolojan-luminita-odobescu---numita-consilier-prezidential--1421937",
          },
          {
            titlu: "Gazeta de Sud — Odobescu, consilier de stat la cancelaria prim-ministrului",
            url: "https://www.gds.ro/politica/national/2025-11-03/luminita-odobescu-numita-consilier-de-stat-la-cancelaria-prim-ministrului/",
          },
        ],
      },
      {
        nume: "Andrei-Emil Dîrlău",
        partid: "AUR",
        camera: "Senat",
        functieActuala:
          "Senator, membru al Comisiei pentru politică externă și al Comisiei pentru afaceri europene",
        profil:
          "Senator la primul mandat (ales în decembrie 2024), cu carieră anterioară în administrația centrală pe integrare europeană și fonduri UE: a lucrat la Delegația Comisiei Europene, a condus Agenția SAPARD și a activat în ministerele Finanțelor, Agriculturii și Culturii.",
        activitate:
          "Membru al Comisiei pentru politică externă a Senatului (din dec. 2024) și al Comisiei pentru afaceri europene; a participat la delegații oficiale ale comisiei (ex. Ankara) și a depus întrebări parlamentare pe orientarea politicii externe, de securitate și apărare.",
        pro: [
          "Singurul parlamentar AUR din comisia de politică externă a Senatului, cu activitate documentată pe site-urile oficiale.",
          "Experiență administrativă reală în relația cu instituțiile UE (Delegația CE, SAPARD, fonduri europene).",
          "Activitate parlamentară verificabilă pe domeniu: întrebări și luări de poziție pe politică externă și de securitate.",
          "Includerea sa reflectă ponderea electorală a AUR (~18% în dec. 2024).",
        ],
        contra: [
          "Pozițiile sale publice urmează linia AUR, critică față de orientarea actuală a politicii externe și față de sprijinul pentru Ucraina — risc de ruptură de consensul strategic NATO/UE.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 13,
          activitate: 12,
          integritate: 20,
          total: 69,
        },
        surse: [
          {
            titlu: "Senat — fișa senatorului Andrei-Emil Dîrlău",
            url: "https://www.senat.ro/FisaSenator.aspx?ParlamentarID=d8dd6e7c-73a3-4e06-9107-f2c510c7374c",
          },
          {
            titlu: "AUR — întrebare parlamentară: orientarea politicii externe a României",
            url: "https://partidulaur.ro/andrei-emil-dirlau-intrebare-parlamentara-orientarea-politicii-externe-de-securitate-si-aparare-a-romaniei-relatia-cu-partenerul-strategic-sua-si-razboiul-din-ucraina/",
          },
        ],
      },
      {
        nume: "Kelemen Hunor",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala: "Deputat, președintele UDMR",
        profil:
          "Parlamentar din 2000, președinte al UDMR din 2011; fost viceprim-ministru al României (2020–2023) și fost ministru al culturii în două mandate.",
        activitate:
          "Deputat reales în decembrie 2024; activitatea sa parlamentară și politică recentă este dominată de negocierile pentru formarea majorităților (inclusiv consultările de la Cotroceni din criza din 2026), nu de o comisie de politică externă.",
        pro: [
          "Experiență guvernamentală la vârf (vicepremier trei ani) și încredere transpartinică rară.",
          "Notorietate și predictibilitate: șase legislaturi parlamentare.",
          "Ar aduce minoritatea maghiară într-o formulă de echilibru, semnal de incluziune într-o criză politică.",
          "Bun cunoscător al uneia dintre relațiile externe sensibile ale României: București–Budapesta–Bruxelles.",
        ],
        contra: [
          "Relația UDMR cu guvernul Viktor Orbán, analizată critic de presă, ar ridica semne de întrebare asupra echidistanței diplomatice la Externe.",
          "Scoruri electorale proprii constant sub 5% la prezidențiale — notorietate fără susținere electorală largă.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 16,
          activitate: 12,
          integritate: 19,
          total: 64,
        },
        surse: [
          {
            titlu: "UDMR — profil Kelemen Hunor",
            url: "https://udmr.ro/profil/kelemen-hunor",
          },
          {
            titlu: "G4Media — analiză: Kelemen Hunor între Budapesta și București",
            url: "https://www.g4media.ro/analiza-kelemen-hunor-prins-in-menghina-budapesta-bucuresti-ce-ne-spune-candidatura-lui-la-prezidentiale-despre-grupurile-de-forta-din-udmr-si-relatia-cu-viktor-orban.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Titus Corlățean",
      motivare:
        "77 de puncte: singurul cu mandat complet la MAE dintre cei cu susținere politică reală (27/35), președintele comisiei de specialitate. Odobescu (59) îl depășește la competență (23/25 față de 19/25), dar fără vot popular sau partid în spate nu surclasează; demisia lui din 2014 rămâne penalizată (−4).",
    },
  },
  {
    slug: "aparare",
    minister: "Ministrul Apărării Naționale",
    misiune:
      "Război la graniță, incidente repetate cu drone pe teritoriul național (Galați, Portul Constanța), programul SAFE de 16,68 mld. € de implementat și programele F-35 și de înzestrare în plină derulare — totul cu un guvern interimar cu atribuții limitate.",
    candidati: [
      {
        nume: "Angel Tîlvăr",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala: "Deputat de Vrancea (ales în decembrie 2024)",
        profil:
          "Parlamentar cu vechime (în Parlament din 2008), fost ministru al apărării naționale între octombrie 2022 și iunie 2025 — întreaga primă fază a războiului la scară largă din Ucraina; de formație profesor, cu lungă activitate pe afaceri europene.",
        activitate:
          "Ca ministru a gestionat MApN doi ani și jumătate în plin război la granița României; în plan parlamentar a condus Comisia pentru afaceri europene a Senatului și prezidează Comisia pentru democrație și securitate din Adunarea Parlamentară a NATO; reales deputat în 2024.",
        pro: [
          "Cea mai recentă și mai lungă experiență executivă la MApN dintre parlamentarii actuali (oct. 2022 – iun. 2025).",
          "În mandatul său au avansat programele majore de înzestrare (F-16, demararea programului F-35) și creșterea bugetului apărării.",
          "Poziție internațională activă: președinte al Comisiei pentru democrație și securitate din AP NATO.",
        ],
        contra: [
          "Mandatul său a inclus incidentele repetate cu fragmente de drone căzute pe teritoriul României, gestionate cu o comunicare publică criticată ca lentă și minimalistă.",
          "Fidelitate de partid îndelungată față de PSD, inclusiv în perioade controversate ale guvernărilor PSD.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 17,
          activitate: 12,
          integritate: 18,
          total: 74,
        },
        surse: [
          {
            titlu: "AGERPRES — Angel Tîlvăr, fișă biografică",
            url: "https://agerpres.ro/documentare/2024/12/23/angel-tilvar-propus-ministru-al-apararii-nationale-fisa-biografica--1407295",
          },
          {
            titlu: "Europa Liberă — Cine este Angel Tîlvăr",
            url: "https://romania.europalibera.org/a/tilvar-psd-ministerul-apararii/32108907.html",
          },
        ],
      },
      {
        nume: "Nicoleta Pauliuc",
        partid: "PNL",
        camera: "Senat",
        functieActuala:
          "Senator, președinta Comisiei pentru apărare, ordine publică și siguranță națională a Senatului",
        profil:
          "Senator PNL cu mai multe mandate, specializată în legislația de apărare și securitate națională; a condus comisia de apărare a Senatului și în legislatura precedentă, fiind realeasă președintă la constituirea Senatului în decembrie 2024.",
        activitate:
          "Președintă a Comisiei pentru apărare (confirmată la împărțirea comisiilor din 21 decembrie 2024); a condus audieri și avizări pe legislația de înzestrare și pe numirile din sistemul de securitate; activitate legislativă constantă pe domeniu.",
        pro: [
          "Conduce comisia de specialitate a Senatului — cea mai înaltă poziție parlamentară pe apărare din legislatura actuală.",
          "Ani de experiență acumulată exclusiv pe dosarele de apărare și siguranță națională, inclusiv pe controlul parlamentar al serviciilor.",
          "Profil fără scandaluri majore documentate.",
        ],
        contra: [
          "Notorietate publică mai redusă decât a contracandidaților, construită parțial pe teme din afara apărării.",
          "Apartenența la PNL, partid aflat în centrul crizei politice din 2026, poate complica un mandat de echilibru.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 13,
          activitate: 14,
          integritate: 20,
          total: 68,
        },
        surse: [
          {
            titlu: "HotNews — componența comisiilor permanente ale Senatului (dec. 2024)",
            url: "https://hotnews.ro/componenta-comisiilor-permanente-ale-senatulului-a-fost-stabilita-ce-loc-a-prins-nicolae-ciuca-1867022",
          },
          {
            titlu: "Bursa — senatorii au votat componența comisiilor de specialitate",
            url: "https://www.bursa.ro/senatorii-au-votat-componenta-comisiilor-de-specialitate-pentru-noul-senat-65513453",
          },
        ],
      },
      {
        nume: "Mircia Chelaru",
        partid: "AUR",
        camera: "Senat",
        functieActuala:
          "Senator de Argeș, membru al comisiilor de apărare ale Parlamentului și al comisiei de control al SIE",
        profil:
          "General (r), fost șef al Statului Major General al Armatei Române (martie–octombrie 2000) — cea mai înaltă funcție militară din România; ales senator AUR în decembrie 2024.",
        activitate:
          "Nominalizat de AUR în comisiile parlamentare de apărare (Senat) și în comisia comună de control al SIE; în iunie 2026 a cerut anchetă în Comisia de apărare a Senatului privind incidentul cu drona din portul Constanța.",
        pro: [
          "Singurul candidat cu carieră militară completă, până la vârful ierarhiei (șef al SMG).",
          "Activitate parlamentară concretă și verificabilă pe domeniu: solicitări de anchetă, control parlamentar al serviciilor.",
          "Membru actual al Senatului, în comisia de specialitate.",
          "Reprezintă ponderea electorală a AUR (~18%), esențială pentru echidistanța formulei.",
        ],
        contra: [
          "Cariera militară activă s-a încheiat în 2000, printr-o demisie forțată după declarații publice considerate incompatibile cu statutul de șef al SMG; expertiza operațională este veche de peste 25 de ani.",
          "Presa a relatat un litigiu privind sume pe care ar refuza să le restituie statului.",
          "A respins public condițiile în care România a aderat la programul SAFE — pe care le-a descris drept „plătește, supune-te și taci” — precizând că nu se opune programelor de acest tip; ministerul ar avea însă de executat programul exact în condițiile deja asumate de România.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 16,
          activitate: 11,
          integritate: 15,
          total: 66,
          penalizari: "−3 litigiul cu statul, relatat de presă; −2 demisia forțată din fruntea SMG (2000)",
        },
        surse: [
          {
            titlu: "Ziare.com — senatorul Chelaru cere anchetă după explozia dronei la Constanța",
            url: "https://ziare.com/drona-explozie-portul-constanta/mircia-chelaru-aur-ancheta-2017396",
          },
          {
            titlu: "AUR — Mircia Chelaru despre programul SAFE",
            url: "https://partidulaur.ro/mircia-chelaru-senator-aur-pozitia-noastra-nu-este-impotriva-unui-program-de-tip-safe-este-impotriva-unui-program-de-tip-plateste-supune-te-si-taci/",
          },
          {
            titlu: "Defapt.ro — litigiul generalului Chelaru cu statul",
            url: "https://defapt.ro/politica/generalul-aur-mircia-chelaru-senator-nu-vrea-sa-dea-inapoi-banii-furati-de-la-statul-roman",
          },
        ],
      },
      {
        nume: "Radu Miruță",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Viceprim-ministru și ministrul apărării naționale în exercițiu (titular din decembrie 2025; guvern demis la 5 mai 2026); deputat de Gorj",
        profil:
          "Inginer, deputat din 2020 (fost președinte al Comisiei pentru comunicații și IT), ministru al economiei din iunie 2025, apoi titular la MApN din decembrie 2025, după demisia lui Ionuț Moșteanu.",
        activitate:
          "Ca deputat a activat în comisiile pentru tehnologia informației și economică; ca ministru al apărării a gestionat incidentele cu drone din 2026 (Galați, Portul Constanța) și a blocat o achiziție de blindate considerată supraevaluată (10 milioane euro/bucată).",
        pro: [
          "Ministrul în funcție: cunoaște dosarele curente (incidente cu drone, programe de înzestrare, SAFE) la zi.",
          "Decizii documentate de disciplină a achizițiilor (refuzul blindatelor supraevaluate) — exact tipul de integritate cerut la MApN.",
          "Dublă experiență ministerială (Economie + Apărare) într-un singur ciclu guvernamental.",
        ],
        contra: [
          "Criticat pentru absența de la conferința de presă a MApN după prăbușirea dronei de la Galați.",
          "A recunoscut public dependența de ajutorul NATO și lipsurile de capabilități fără a prezenta un plan de remediere asumat.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 13,
          activitate: 11,
          integritate: 19,
          total: 63,
        },
        surse: [
          {
            titlu: "MApN — conducerea ministerului: Radu-Dinel Miruță",
            url: "https://www.mapn.ro/conducere/radu-dinel-miruta-ministrul-apararii-nationale_63",
          },
          {
            titlu: "Adevărul — MApN a refuzat blindate de 10 milioane de euro bucata",
            url: "https://adevarul.ro/stiri-interne/evenimente/mapn-a-refuzat-blindate-de-10-milioane-de-euro-2533707.html",
          },
          {
            titlu: "HotNews — „Militarii fac minuni cu ce au la dispoziție”, spune ministrul apărării",
            url: "https://hotnews.ro/militarii-fac-minuni-cu-ce-au-la-dispozitie-spune-ministrul-apararii-miruta-admite-ca-este-nevoie-de-ajutorul-nato-2266537",
          },
        ],
      },
      {
        nume: "Mircea Geoană",
        partid: "independent",
        camera: "neparlamentar",
        functieActuala:
          "Fost secretar general adjunct al NATO (2019–2024); fără funcție publică",
        profil:
          "Diplomat și politician cu carieră internațională: ambasador al României în SUA (1996–2000), ministru de externe (2000–2004), președinte al Senatului, apoi secretar general adjunct al NATO timp de cinci ani — cea mai înaltă poziție deținută vreodată de un român în Alianță.",
        activitate:
          "Nu este parlamentar; la NATO a coordonat agenda de inovare, reziliență și tehnologii emergente a Alianței; a demisionat în septembrie 2024 pentru a candida la președinția României.",
        pro: [
          "Cea mai înaltă expertiză de securitate euroatlantică disponibilă în România: cinci ani în conducerea NATO.",
          "Rețea personală de contacte la vârful Alianței, critică în actualul context de securitate.",
          "Experiență guvernamentală și diplomatică anterioară (MAE, ambasada la Washington).",
          "Statut de independent — fără obligații față de partidele aflate în conflict în criza din 2026.",
        ],
        contra: [
          "Nominalizarea sa la NATO a fost umbrită de ancheta DNA care îl viza pe cumnatul său, Ionuț Costea (fost președinte Eximbank).",
          "Eșec electoral sever în 2024 (~6% la prezidențiale), după o campanie cu controverse privind anturajul.",
        ],
        punctaj: {
          sustinere: 1,
          competenta: 21,
          activitate: 12,
          integritate: 15,
          total: 49,
          penalizari: "−3 umbra anchetei DNA a cumnatului la nominalizarea NATO; −2 controversele de anturaj din campania 2024",
        },
        surse: [
          {
            titlu: "NATO — biografia oficială Mircea Geoană",
            url: "https://www.nato.int/en/about-us/organization/who-we-are/nato-deputy-secretaries-general/mircea-geoan_",
          },
          {
            titlu: "Digi24 — problema cumnatului cercetat de DNA la momentul nominalizării",
            url: "https://www.digi24.ro/stiri/actualitate/politica/cum-a-ajuns-geoana-adjunct-al-sefului-nato-1-problema-cumnatului-cercetat-de-dna-in-momentul-nominalizarii-2968939",
          },
        ],
      },
    ],
    propunere: {
      nume: "Angel Tîlvăr",
      motivare:
        "74 de puncte: doi ani și jumătate la MApN în plin război, plus susținerea PSD (27/35). Pauliuc (68) și Chelaru (66) urmează; Geoană (49) are competența maximă a listei (21/25), dar 1/35 la susținere — fără partid și după eșecul electoral din 2024, nu surclasează. Chelaru rămâne și sub principiul asumat: nu propui la minister un om care a respins public condițiile proiectului SAFE pe care ministerul îl aplică.",
    },
  },
  {
    slug: "interne",
    minister: "Ministrul Afacerilor Interne",
    misiune:
      "După finalizarea aderării complete la Schengen (1 ianuarie 2025), dosarele grele rămân reforma poliției, statutul polițistului și pensiile din sistemul de ordine publică — plus gestionarea securității interne în contextul incidentelor de la Marea Neagră.",
    candidati: [
      {
        nume: "Cătălin Predoiu",
        partid: "PNL",
        camera: "Senat",
        functieActuala:
          "Senator de Satu Mare; viceprim-ministru și ministrul afacerilor interne în exercițiu (guvern demis la 5 mai 2026)",
        profil:
          "Avocat, unul dintre cei mai longevivi miniștri postdecembriști: ministru al justiției în mai multe guverne, de trei ori prim-ministru interimar, ministru al afacerilor interne din iunie 2023; ales senator în decembrie 2024.",
        activitate:
          "Ca senator activează în paralel cu mandatul de ministru; bilanțul executiv la MAI include finalizarea aderării complete a României la spațiul Schengen (aerian/maritim în martie 2024, terestru la 1 ianuarie 2025) și negocierile tehnice cu Austria și Comisia Europeană.",
        pro: [
          "Bilanț verificabil pe cel mai important dosar al MAI din ultimul deceniu: aderarea completă la Schengen.",
          "Experiență de guvernare neîntreruptă în cinci guverne consecutive, inclusiv trei interimate de premier — utilă într-un executiv de criză.",
          "Jurist cu expertiză dublă justiție–interne, relevantă pentru reforma poliției și statutul polițistului.",
        ],
        contra: [
          "Simbol al „ministrului de serviciu” care supraviețuiește oricărei coaliții — exact opusul înnoirii promise de un guvern al cetățeanului.",
          "Membru al guvernului demis prin moțiune și exponent al PNL, partid acuzat public că blochează învestirea guvernului Tomac.",
          "Înainte de 2024 nu a trecut niciodată testul votului popular, fiind numit, nu ales, timp de 16 ani.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 19,
          activitate: 10,
          integritate: 19,
          total: 69,
        },
        surse: [
          {
            titlu: "AGERPRES — Cătălin Predoiu, fișă biografică (iun. 2025)",
            url: "https://agerpres.ro/documentare/2025/06/22/catalin-marian-predoiu-propus-ministru-al-afacerilor-interne-vicepremier-fisa-biografica--1461643",
          },
          {
            titlu: "Observator News — Predoiu, ministru în cinci guverne consecutive",
            url: "https://observatornews.ro/politic/cine-este-si-ce-avere-are-catalin-predoiu-de-trei-ori-premier-interimar-si-ministru-in-cinci-guverne-consecutive-618585.html",
          },
        ],
      },
      {
        nume: "Mihai Fifor",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat, vicepreședinte al Comisiei pentru apărare, ordine publică și siguranță națională a Camerei Deputaților",
        profil:
          "Doctor în antropologie, parlamentar cu mai multe mandate (senator, apoi deputat), fost ministru al apărării naționale (2017–2018) și fost ministru al afacerilor interne ad-interim (2019) — singurul candidat parlamentar care a condus ambele ministere de forță.",
        activitate:
          "Vicepreședinte al Comisiei pentru apărare, ordine publică și siguranță națională a Camerei în legislatura 2024–2028, cu activitate legislativă constantă pe ordine publică și securitate; anterior a condus Senatul ca președinte interimar.",
        pro: [
          "Experiență executivă directă la MAI (ministru ad-interim în 2019) și la MApN — combinație rară de portofolii de forță.",
          "Funcție de conducere în comisia de specialitate a Camerei, verificabilă pe cdep.ro.",
          "Reprezintă proporțional principalul partid din Parlament (~22% în dec. 2024).",
        ],
        contra: [
          "Ministru în guvernările PSD din perioada Dragnea (2017–2019), inclusiv în perioada confruntărilor dintre guvern și sistemul judiciar.",
          "Mandatul său la Apărare a coincis cu blocaje majore în programele de înzestrare (ex. stagnarea programului corvetelor).",
          "Profil intens partizan: ani de zile purtător de mesaj al PSD în confruntările politice.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 14,
          activitate: 13,
          integritate: 19,
          total: 73,
        },
        surse: [
          {
            titlu: "Camera Deputaților — Comisia pentru apărare (legislatura 2024–2028)",
            url: "https://www.cdep.ro/pls/parlam/structura2015.co?idc=12&cam=2&leg=2024&idl=0",
          },
          {
            titlu: "Antena 3 — cine conduce noile comisii de specialitate din Camera Deputaților",
            url: "https://www.antena3.ro/politica/cine-conduce-noile-comisii-de-specialitate-din-camera-deputatilor-componenta-lor-a-fost-aprobata-duminica-731343.html",
          },
        ],
      },
      {
        nume: "Dumitru Coarnă",
        partid: "ales pe listele SOS România; în prezent neafiliat (fondator FAR)",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat neafiliat (a părăsit grupul SOS România la 31 martie 2025); a lansat partidul Forța Alternativă pentru România",
        profil:
          "Fost ofițer de poliție (șef de structură la IPJ Călărași până în 2009) și cel mai cunoscut sindicalist din MAI: vicepreședinte, apoi președinte (2016–2020) al SNPPC — sindicatul național al polițiștilor; deputat din 2020.",
        activitate:
          "Deputat la al doilea mandat, reales în decembrie 2024 pe listele SOS; a activat în trecut în Comisia de apărare a Camerei; activitate publică intensă pe statutul polițistului, salarizare și pensiile din sistemul de ordine publică.",
        pro: [
          "Singurul parlamentar actual care cunoaște MAI din interior, ca polițist operativ și ca lider al celui mai mare sindicat al polițiștilor.",
          "Notorietate reală în rândul personalului MAI, cu capacitate de dialog cu sindicatele din sistem.",
          "Acoperă electoratul suveranist SOS/FAR (~7% în dec. 2024), necesar echidistanței formulei.",
        ],
        contra: [
          "Presa a dezvăluit că este anchetat de DNA, ca suspect de șantaj, trafic de influență și aderare la un grup infracțional organizat — potențial dezechilibrant pentru funcția de ministru de interne.",
          "Traseism politic extrem, documentat: PSD → AUR (exclus în 2024) → SOS România (părăsit în 2025) → partid propriu (FAR).",
          "Vizite și poziții pro-ruse documentate (audiență la Ambasada Rusiei în timpul mandatului de deputat PSD); pensionar special la 45 de ani, în contradicție cu discursul public despre reformă.",
        ],
        punctaj: {
          sustinere: 14,
          competenta: 13,
          activitate: 10,
          integritate: 3,
          total: 40,
          penalizari: "−14 anchetă DNA în curs (șantaj, trafic de influență, grup infracțional organizat); −3 traseism politic extrem",
        },
        surse: [
          {
            titlu: "Gândul — deputatul Dumitru Coarnă, anchetat de procurorii DNA",
            url: "https://www.gandul.ro/dezvaluiri/deputatul-dumitru-coarna-anchetat-de-procurorii-dna-fostul-sindicalist-din-politie-este-suspect-de-santaj-trafic-de-influenta-si-aderare-la-un-grup-criminal-organizat-exclusiv-19566835",
          },
          {
            titlu: "Ziare.com — cine e Dumitru Coarnă, fost polițist și sindicalist",
            url: "https://ziare.com/dumitru-coarna/cine-e-dumitru-coarna-deputat-psd-mers-audienta-ambasada-rusiei-fost-politist-curtat-aur-1733524",
          },
          {
            titlu: "Fanatik — Coarnă părăsește grupul parlamentar SOS România",
            url: "https://www.fanatik.ro/demisie-cu-scandal-in-s-o-s-romania-dumitru-coarna-pleaca-din-grupul-parlamentar-din-cauza-blestemelor-dianei-sosoaca-21099430",
          },
        ],
      },
      {
        nume: "Daniel Grofu",
        partid: "POT (grup redenumit „Uniți pentru România” în mai 2026)",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București, membru al Comisiei pentru apărare, ordine publică și siguranță națională",
        profil:
          "Economist, deputat la primul mandat, ales în decembrie 2024 pe listele POT (partid intrat în Parlament cu 6,39%); unul dintre puținii parlamentari POT plasați într-o comisie de forță.",
        activitate:
          "Membru al Comisiei pentru apărare, ordine publică și siguranță națională a Camerei Deputaților și al Comisiei pentru antreprenoriat și turism, conform repartizării din legislatura 2024–2028.",
        pro: [
          "Membru actual al comisiei de specialitate a Camerei pe ordine publică.",
          "Asigură reprezentarea electoratului POT (~6% în dec. 2024) în formula echidistantă.",
          "Profil economic util pe componenta de buget și achiziții a MAI, una dintre vulnerabilitățile cronice ale ministerului.",
        ],
        contra: [
          "Partidul său s-a fragmentat masiv după mai 2025 — semn de instabilitate politică.",
          "Notorietate publică foarte redusă — încredere publică neconstruită.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 7,
          activitate: 8,
          integritate: 20,
          total: 51,
        },
        surse: [
          {
            titlu: "PS News — ce funcții a obținut POT în comisiile din Cameră și Senat",
            url: "https://psnews.ro/extremistii-in-parlament-ce-functii-a-obtinut-pot-in-comisiile-din-camera-si-senat/",
          },
          {
            titlu: "AGERPRES — grupul deputaților POT, redenumit „Uniți pentru România” (mai 2026)",
            url: "https://agerpres.ro/viata-parlamentara/2026/05/11/chirita-grupul-deputatilor-pot-si-a-schimbat-denumirea-in-uniti-pentru-romania-anamaria-gavrila---me--1554987",
          },
        ],
      },
      {
        nume: "Bogdan Despescu",
        partid: "fără apartenență politică (polițist de carieră)",
        camera: "neparlamentar",
        functieActuala:
          "Chestor general de poliție, secretar de stat pentru ordine și siguranță publică în MAI",
        profil:
          "Polițist de carieră, fost inspector general al Poliției Române (2015–2018), secretar de stat în MAI pentru ordine și siguranță publică din 2019, menținut în funcție sub guverne de toate culorile.",
        activitate:
          "Nu este parlamentar; conduce operațional componenta de ordine publică a MAI de peste șase ani, fiind interfața ministerului cu Parlamentul în ședințele comune ale comisiilor de apărare (audieri consemnate pe mai.gov.ro).",
        pro: [
          "Cea mai lungă experiență operațională continuă la vârful MAI dintre toți candidații: șef al Poliției Române, apoi secretar de stat sub cinci guverne.",
          "Profil tehnic, fără apartenență politică — potrivit filosofiei unui guvern de merit.",
          "Cunoaște în detaliu aparatul, bugetul și slăbiciunile structurale ale ministerului, fără perioadă de acomodare.",
        ],
        contra: [
          "Demis de la șefia Poliției Române în 2018, în urma scandalului polițistului pedofil Eugen Stan — eșec de management al resurselor umane documentat.",
          "Longevitatea sub toate guvernele poate fi citită și ca apartenență la „sistemul” pe care un guvern al cetățeanului promite să-l reformeze.",
        ],
        punctaj: {
          sustinere: 0,
          competenta: 18,
          activitate: 11,
          integritate: 16,
          total: 45,
          penalizari: "−4 demiterea de la șefia Poliției Române (2018, scandalul polițistului pedofil)",
        },
        surse: [
          {
            titlu: "MAI — chestor general de poliție Bogdan Despescu, secretar de stat",
            url: "https://www.mai.gov.ro/chestor-general-de-politie-bogdan-despescu-secretar-de-stat/",
          },
          {
            titlu: "MAI — intervențiile secretarilor de stat în ședința comună a comisiilor de apărare",
            url: "https://www.mai.gov.ro/interventiile-secretarilor-de-stat-din-cadrul-mai-in-sedinta-comuna-a-comisiilor-reunite-pentru-aparare-ordine-publica-si-siguranta-nationala-din-cadrul-camera-deputatilor-si-senatul-romaniei/",
          },
          {
            titlu: "HotNews — Despescu, demis de la conducerea Poliției Române, numit secretar de stat",
            url: "https://hotnews.ro/bogdan-despescu-demis-de-la-conducerea-politiei-romne-n-urma-scandalului-politistului-pedofil-numit-secretar-de-stat-n-mai-287570",
          },
        ],
      },
    ],
    propunere: {
      nume: "Mihai Fifor",
      motivare:
        "73 de puncte: experiență dublă la ministerele de forță (MApN, MAI ad-interim), vicepreședinte al comisiei de apărare și susținerea celui mai mare partid (27/35). Predoiu (69) pierde la susținere (21/35) ce câștigă la livrări (Schengen); Despescu (45) arată limita tehnocratului fără vot.",
    },
  },
  {
    slug: "justitie",
    minister: "Ministrul Justiției",
    misiune:
      "Reforma Codului de procedură penală, conflictul instituțional Guvern–ÎCCJ moștenit din primăvara lui 2026 și numirile contestate de la vârful parchetelor cer un ministru cu autoritate profesională și independență față de partid.",
    candidati: [
      {
        nume: "Alina-Ștefania Gorghiu",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Argeș, membru al Comisiei juridice, de disciplină și imunități; vicelider al grupului PNL; fost ministru al justiției (2023–2024)",
        profil:
          "Avocat și mediator de profesie, cu peste două decenii de carieră parlamentară; a condus Ministerul Justiției în 2023–2024 și a fost președinte al Senatului.",
        activitate:
          "Membru al Comisiei juridice a Camerei și vicepreședinte al Comisiei pentru politică externă; conform fișei oficiale cdep.ro are 53 de propuneri legislative inițiate (15 promulgate legi), 23 de întrebări și interpelări și luări de cuvânt la 36 de puncte de sumar.",
        pro: [
          "Experiență executivă directă: a condus Ministerul Justiției ca ministru plin în 2023–2024.",
          "Cea mai ridicată eficiență legislativă din lista pentru Justiție: 15 din 53 de inițiative promulgate legi în legislatura curentă.",
          "Membru al comisiei de specialitate și președinte al comisiei speciale privind violența domestică.",
          "Notorietate națională ridicată și experiență instituțională (fost președinte al Senatului).",
        ],
        contra: [
          "Vicelider al grupului PNL — numirea poate fi percepută ca politizare a Justiției.",
          "În mandatul său de ministru au persistat problemele de fond ale sistemului (supraaglomerarea penitenciarelor, deficitul de grefieri), fără reforme structurale finalizate.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 16,
          activitate: 14,
          integritate: 19,
          total: 70,
        },
        surse: [
          {
            titlu: "Fișa de deputat Alina Gorghiu — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=129&cam=2&leg=2024",
          },
          {
            titlu: "Componența Comisiei juridice — cdep.ro",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.co?idc=11&leg=2024&cam=2",
          },
        ],
      },
      {
        nume: "Radu Marinescu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Dolj; ministru al justiției dec. 2024 – apr. 2026 (demisionat la retragerea PSD de la guvernare)",
        profil:
          "Avocat din Craiova, cu doctorat în drept; a condus Ministerul Justiției din decembrie 2024 până la retragerea miniștrilor PSD din guvernul Bolojan, în aprilie 2026.",
        activitate:
          "Membru al Comisiei juridice, de disciplină și imunități și al Comisiei pentru cercetarea abuzurilor; activitate parlamentară redusă cantitativ (7 propuneri legislative, 2 promulgate), explicabilă prin exercitarea simultană a mandatului de ministru.",
        pro: [
          "Cunoaște dosarele curente ale ministerului din interior, fiind cel mai recent ministru plin al Justiției.",
          "Avocat practician cu carieră juridică reală înainte de mandat.",
          "Membru al comisiei juridice de specialitate a Camerei.",
          "Asigură reprezentarea celui mai votat partid din decembrie 2024 (PSD, ~22%).",
        ],
        contra: [
          "Acuzat public de Emilia Șercan/PressOne că a plagiat în teza de doctorat — acuzație gravă pentru un ministru al Justiției.",
          "A demisionat din guvern în aprilie 2026 invocând explicit decizia politică a partidului — semn de subordonare față de linia de partid.",
          "Carieră asociată în presă cu gruparea PSD Dolj; activitate parlamentară proprie foarte redusă.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 14,
          activitate: 9,
          integritate: 14,
          total: 64,
          penalizari: "−4 acuzația publică de plagiat (nevalidată); −2 demisia la ordinul partidului",
        },
        surse: [
          {
            titlu: "Fișa de deputat Radu Marinescu — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=179&cam=2&leg=2024",
          },
          {
            titlu: "HotNews — Radu Marinescu, acuzat că a plagiat în teza de doctorat",
            url: "https://hotnews.ro/cine-este-radu-marinescu-ministrul-acuzat-ca-a-plagiat-in-teza-de-doctorat-2147968",
          },
          {
            titlu: "Ziare.com — primul ministru PSD care și-a justificat demisia din guvernul Bolojan",
            url: "https://ziare.com/iesire-psd-guvernare/radu-marinescu-primul-ministru-psd-justificat-demisia-2008402",
          },
        ],
      },
      {
        nume: "Stelian-Cristian Ion",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Constanța, vicepreședinte al Comisiei juridice, de disciplină și imunități; fost ministru al justiției (2020–2021)",
        profil:
          "Avocat, la al patrulea mandat de deputat (2016, 2020, 2024); ca ministru al justiției în guvernul Cîțu a inițiat desființarea Secției pentru Investigarea Infracțiunilor din Justiție și proiectele de reformă a legilor justiției.",
        activitate:
          "Vicepreședinte al Comisiei juridice a Camerei în legislatura 2024–2028; conform fișei cdep.ro are 63 de propuneri legislative inițiate (1 promulgată lege) în legislatura curentă.",
        pro: [
          "Avocat practician cu trei legislaturi de experiență în Comisia juridică.",
          "Experiență executivă la Ministerul Justiției, cu agendă axată pe independența magistraților.",
          "Vicepreședinte în exercițiu al comisiei de specialitate.",
          "Profil public asociat integrității, util pentru încrederea publică în minister.",
        ],
        contra: [
          "Demis din funcția de ministru în septembrie 2021, după conflictul deschis cu premierul Florin Cîțu — mandat executiv încheiat abrupt.",
          "Eficiență legislativă scăzută în actuala legislatură: doar 1 din 63 de inițiative promulgată.",
          "Profil perceput ca militant de tabără politică, ceea ce poate accentua polarizarea în jurul Justiției.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 11,
          integritate: 19,
          total: 64,
        },
        surse: [
          {
            titlu: "Fișa de deputat Stelian-Cristian Ion — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=149&cam=2&leg=2024",
          },
          {
            titlu: "Componența Comisiei juridice — cdep.ro",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.co?idc=11&leg=2024&cam=2",
          },
        ],
      },
      {
        nume: "Valeriu Munteanu",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Dâmbovița, vicepreședinte al Comisiei juridice, de disciplină și imunități; vicelider al grupului AUR",
        profil:
          "Jurist de formație, fost deputat în Parlamentul Republicii Moldova și ministru al mediului la Chișinău (2015–2017); ales deputat în România în 2024 pe lista AUR Dâmbovița.",
        activitate:
          "Vicepreședinte al Comisiei juridice a Camerei și președinte al Comisiei comune pentru integrare europeană dintre Parlamentul României și cel al Republicii Moldova; conform cdep.ro are 75 de propuneri legislative inițiate (3 promulgate), luări de cuvânt la 51 de puncte de sumar și 40 de declarații politice scrise.",
        pro: [
          "Vocea juridică de rang de conducere a AUR în Comisia juridică (vicepreședinte), partid cu ~18% din voturi în 2024.",
          "Experiență executivă reală ca ministru și parlamentară în două state.",
          "Foarte activ parlamentar: 75 de inițiative și prezență constantă la dezbateri în plen.",
          "Președinte al unei comisii bicamerale comune — capacitate de negociere interinstituțională.",
        ],
        contra: [
          "Acuzat în Republica Moldova de încălcarea normelor privind conflictul de interese în mandatul de ministru al mediului.",
          "Presa a documentat că fratele său a fost adjunct al serviciului secret moldovean în perioada oligarhului Plahotniuc — vulnerabilitate de percepție pentru un ministru al Justiției.",
          "Cariera juridică s-a desfășurat majoritar în alt sistem de drept; doar 3 din 75 de inițiative au devenit legi.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 13,
          activitate: 14,
          integritate: 13,
          total: 64,
          penalizari: "−4 acuzațiile de conflict de interese din mandatul de la Chișinău; −3 vulnerabilitatea legăturii de familie cu fostul serviciu secret moldovean",
        },
        surse: [
          {
            titlu: "Fișa de deputat Valeriu Munteanu — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=211&cam=2&leg=2024",
          },
          {
            titlu: "G4Media — controversele deputatului AUR Valeriu Munteanu",
            url: "https://www.g4media.ro/un-controversat-deputat-aur-a-fost-ales-presedinte-al-unei-comisii-parlamentare-comune-cu-republicii-moldova-valeriu-munteanu-e-fratele-fostului-adjunct-al-serviciului-secret-moldovean-din-perioada-o.html",
          },
          {
            titlu: "NewsMaker — fostul ministru moldovean al mediului, pe listele AUR",
            url: "https://newsmaker.md/ro/fostul-ministru-al-mediului-valeriu-munteanu-candideaza-la-alegerile-din-romania-pe-listele-partidului-aur",
          },
        ],
      },
      {
        nume: "Valeriu Stoica",
        partid: "independent (fost PNL)",
        camera: "neparlamentar",
        functieActuala:
          "Profesor de drept civil la Universitatea din București; avocat, fondator al STOICA & Asociații",
        profil:
          "Unul dintre cei mai influenți civiliști români: profesor la Facultatea de Drept a Universității din București, ministru al justiției între 1996 și 2000 (în trei guverne consecutive), implicat în elaborarea Noului Cod Civil; fost președinte al PNL.",
        activitate:
          "Neparlamentar; activitate continuă de doctrină, arbitraj și formare — generații de magistrați și avocați pregătite la catedra sa; în mandatul de ministru a condus prima reformă amplă post-decembristă a organizării judecătorești.",
        pro: [
          "Autoritate doctrinară de primă mărime în dreptul civil — competență juridică greu de contestat de orice tabără.",
          "Patru ani de conducere efectivă a Ministerului Justiției, în perioada reformelor de bază ale sistemului.",
          "Implicarea în elaborarea Noului Cod Civil — contribuție legislativă cu efect direct, de durată.",
          "Profil respectat transpartinic, capabil să medieze conflictul instituțional Guvern–ÎCCJ moștenit din 2026.",
        ],
        contra: [
          "Fost președinte al PNL — independența actuală vine după o carieră politică liberală de prim-plan.",
          "Avocatura de afaceri exercitată în paralel (STOICA & Asociații) ar impune o separare strictă față de dosarele firmei, pentru evitarea conflictelor de interese.",
          "Ultima funcție publică s-a încheiat în 2000 — distanță de un sfert de secol față de administrația ministerului.",
        ],
        punctaj: {
          sustinere: 1,
          competenta: 22,
          activitate: 11,
          integritate: 19,
          total: 53,
        },
        surse: [
          {
            titlu: "Facultatea de Drept, Universitatea din București — cadre didactice",
            url: "https://drept.unibuc.ro/",
          },
          {
            titlu: "Wikipedia — Valeriu Stoica",
            url: "https://ro.wikipedia.org/wiki/Valeriu_Stoica",
          },
        ],
      },
    ],
    propunere: {
      nume: "Alina-Ștefania Gorghiu",
      motivare:
        "70 de puncte: mandat recent la Justiție, cea mai bună activitate legislativă din listă (14/20) și susținerea PNL. Marinescu, Stelian Ion și Munteanu (64) sunt la egalitate în urmă; Stoica (53) domină competența (22/25), dar fără susținere politică (1/35) nu surclasează.",
    },
  },
  {
    slug: "sanatate",
    minister: "Ministrul Sănătății",
    misiune:
      "Reforma managementului spitalelor, începută în 2025 și întreruptă de criză, plus jaloanele PNRR pe sănătate cu termen în august 2026: ministrul trebuie să reia rapid dosarele lăsate în aer de demisia în bloc a miniștrilor PSD din aprilie 2026.",
    candidati: [
      {
        nume: "Alexandru-Florin Rogobete",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Prahova; ministru al sănătății iun. 2025 – apr. 2026 (demisionat la retragerea PSD); fost președinte al Comisiei pentru sănătate și familie",
        profil:
          "Medic specialist ATI (rezidențiat suspendat pentru cariera publică), fost secretar de stat în Ministerul Sănătății; cel mai tânăr membru al guvernului Bolojan, unde a lansat pachetul de reformă privind managementul spitalelor.",
        activitate:
          "Președinte al Comisiei pentru sănătate și familie a Camerei până în iunie 2025, apoi ministru; conform fișei cdep.ro are 12 propuneri legislative inițiate, din care 7 promulgate legi — cea mai ridicată rată de promulgare dintre candidații la Sănătate.",
        pro: [
          "Cel mai recent ministru plin al Sănătății, cu agendă de reformă asumată public (criterii de performanță pentru managerii de spitale).",
          "Dublă legitimitate: parlamentar ales și experiență administrativă în minister (consilier, secretar de stat).",
          "Eficiență legislativă ridicată: 7 din 12 inițiative promulgate.",
          "Cunoaște aparatul ministerului și dosarele PNRR pe sănătate din interior.",
        ],
        contra: [
          "Și-a suspendat rezidențiatul pentru politică — nu a finalizat practic cariera clinică.",
          "A demisionat în aprilie 2026 odată cu ceilalți miniștri PSD, pe criteriu de partid, deși declara public atașament față de reformele începute.",
          "Traseul profesional dependent de numiri politice ridică semne de întrebare privind independența față de PSD.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 16,
          activitate: 13,
          integritate: 18,
          total: 74,
        },
        surse: [
          {
            titlu: "Fișa de deputat Alexandru-Florin Rogobete — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=270&cam=2&leg=2024",
          },
          {
            titlu: "HotNews — pachetul de măsuri pentru reforma sănătății (Bolojan/Rogobete)",
            url: "https://hotnews.ro/ilie-bolojan-si-alexandru-rogobete-anunta-pachetul-de-masuri-pentru-reforma-sanatatii-la-ora-1700-2028010",
          },
        ],
      },
      {
        nume: "Adrian Wiener",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Arad; medic internist; fost secretar al Comisiei pentru sănătate și familie, în prezent membru al comisiei",
        profil:
          "Medic internist cu experiență de management spitalicesc la Arad, la al treilea mandat parlamentar (senator 2016–2020, deputat din 2020); una dintre vocile constante ale USR pe politici de sănătate.",
        activitate:
          "Membru (fost secretar) al Comisiei pentru sănătate și familie; conform fișei cdep.ro are 41 de propuneri legislative inițiate (2 promulgate) și 9 întrebări și interpelări în legislatura curentă.",
        pro: [
          "Medic practician cu trei mandate de experiență legislativă exclusiv pe zona de sănătate.",
          "Experiență de management sanitar la nivel de spital, nu doar teoretică.",
          "A ocupat funcție în biroul comisiei de specialitate (secretar) în actuala legislatură.",
          "Profil public moderat, fără scandaluri de integritate documentate.",
        ],
        contra: [
          "Activitate redusă în plen în legislatura curentă: luări de cuvânt la doar 5 puncte de sumar.",
          "Eficiență legislativă scăzută din opoziție: 2 din 41 de inițiative promulgate.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 11,
          integritate: 20,
          total: 65,
        },
        surse: [
          {
            titlu: "Fișa de deputat Adrian Wiener — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=328&cam=2&leg=2024",
          },
          {
            titlu: "Componența Comisiei pentru sănătate și familie — cdep.ro",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.co?idc=8&leg=2024&cam=2",
          },
        ],
      },
      {
        nume: "Cristian Vântu",
        partid: "AUR",
        camera: "Senat",
        functieActuala: "Senator de Mureș, vicepreședinte al Comisiei pentru sănătate a Senatului",
        profil:
          "Medic de familie format la UMF Târgu Mureș, cu 12 ani de practică în sistemul public și privat din Marea Britanie, fost evaluator al General Medical Council în procesul de relicențiere a medicilor britanici.",
        activitate:
          "Vicepreședinte al Comisiei pentru sănătate a Senatului din decembrie 2024; a condus delegația comisiei în Estonia pe tema digitalizării sănătății; promovează public digitalizarea medicinei de familie și protecția penală a personalului medical.",
        pro: [
          "Medic practician cu experiență directă într-un sistem de sănătate vest-european (NHS) și în evaluarea calității actului medical.",
          "Funcție de conducere în comisia de specialitate a Senatului.",
          "Agendă concretă și verificabilă: digitalizarea medicinei de familie, protecția personalului medical.",
          "Asigură reprezentarea AUR (~18% din voturi), al doilea partid ca pondere electorală.",
        ],
        contra: [
          "Implicarea ca medic coordonator al „Caravanei medicale AUR” îi leagă activitatea profesională de proiectul politic al partidului.",
          "Partidul său a promovat public poziții anti-vaccinare în pandemie — tensiune cu politicile de sănătate publică bazate pe dovezi.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 15,
          activitate: 13,
          integritate: 18,
          total: 70,
        },
        surse: [
          {
            titlu: "Componența Comisiei pentru sănătate a Senatului — senat.ro",
            url: "https://www.senat.ro/ComponentaComisii.aspx?Zi=&ComisieID=7f7c09a7-7ae7-4e99-9018-a9c5774ef858",
          },
          {
            titlu: "Zi de Zi — senatorul Vântu, promotor al digitalizării medicinei de familie",
            url: "https://www.zi-de-zi.ro/2026/03/07/senatorul-cristian-vantu-aur-promotor-al-digitalizarii-medicinei-de-familie/",
          },
        ],
      },
      {
        nume: "Vass Levente",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Mureș, vicepreședinte al Comisiei pentru sănătate și familie",
        profil:
          "Medic la Târgu Mureș, parlamentar UDMR cu experiență în politici de sănătate publică și în administrarea sistemului sanitar local; la al doilea mandat de deputat.",
        activitate:
          "Vicepreședinte al Comisiei pentru sănătate și familie a Camerei; conform fișei cdep.ro are 55 de propuneri legislative inițiate, din care 8 promulgate legi — cel mai mare număr absolut de legi promulgate dintre candidații la Sănătate — plus luări de cuvânt la 21 de puncte de sumar.",
        pro: [
          "Medic cu funcție de conducere în comisia de specialitate.",
          "8 legi promulgate în legislatura curentă — rezultat legislativ concret, verificabil pe cdep.ro.",
          "UDMR are tradiție de stabilitate administrativă la Ministerul Sănătății (precedentul Cseke Attila).",
          "Profil non-conflictual, capabil să treacă printr-un vot de învestitură fragmentat politic.",
        ],
        contra: [
          "Notorietate națională redusă în afara județului Mureș și a comunității maghiare.",
          "Activitate de control parlamentar modestă: doar 4 întrebări și interpelări în legislatura curentă.",
          "UDMR este suprareprezentată istoric în executiv raportat la scorul electoral (~6%).",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 14,
          activitate: 12,
          integritate: 20,
          total: 62,
        },
        surse: [
          {
            titlu: "Fișa de deputat Vass Levente — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=316&cam=2&leg=2024",
          },
          {
            titlu: "Componența Comisiei pentru sănătate și familie — cdep.ro",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.co?idc=8&leg=2024&cam=2",
          },
        ],
      },
      {
        nume: "Raed Arafat",
        partid: "independent",
        camera: "neparlamentar",
        functieActuala:
          "Secretar de stat în MAI, șeful Departamentului pentru Situații de Urgență (DSU)",
        profil:
          "Medic specializat în anestezie-terapie intensivă, fondatorul SMURD (Târgu Mureș, 1991); fost subsecretar și secretar de stat în Ministerul Sănătății, șef al DSU din 2014 — arhitectul sistemului integrat de urgență al României.",
        activitate:
          "Neparlamentar; conduce operațional sistemul național de urgență (SMURD, IGSU, coordonarea spitalelor în crize) sub guverne de toate culorile, de peste un deceniu.",
        pro: [
          "Fondatorul SMURD și al sistemului integrat de urgență — cea mai durabilă reformă instituțională din sănătatea românească post-decembristă, construită de la zero.",
          "Trei decenii de management operațional efectiv, validat în crize reale (accidente colective, pandemie, dezastre).",
          "Încredere publică constant ridicată, peste a oricărui politician din domeniul sănătății.",
          "Independent politic, menținut în funcție de toate coalițiile — competență recunoscută transpartinic.",
        ],
        contra: [
          "Managementul pandemiei rămâne controversat public: restricțiile coordonate prin DSU au fost contestate, iar o parte a electoratului îl percepe negativ.",
          "Concentrarea deciziei și a achizițiilor de urgență la DSU a fost criticată pentru lipsă de transparență.",
          "Longevitatea sub toate guvernele îl expune criticii de „om al sistemului” pe care un guvern al cetățeanului promite să-l reformeze.",
        ],
        punctaj: {
          sustinere: 3,
          competenta: 23,
          activitate: 14,
          integritate: 17,
          total: 57,
        },
        surse: [
          {
            titlu: "DSU — Departamentul pentru Situații de Urgență",
            url: "https://www.dsu.mai.gov.ro/",
          },
          {
            titlu: "Wikipedia — Raed Arafat",
            url: "https://ro.wikipedia.org/wiki/Raed_Arafat",
          },
        ],
      },
    ],
    propunere: {
      nume: "Alexandru-Florin Rogobete",
      motivare:
        "74 de puncte: cel mai recent ministru plin al Sănătății, cu reforma managementului spitalelor începută și susținerea PSD (27/35). Vântu (70) e rezerva imediată; Arafat (57) are competența maximă din întreaga rubrică (23/25), dar 3/35 la susținere — poate intra în calcul doar susținut formal de un partid.",
    },
  },
  {
    slug: "educatie-cercetare",
    minister: "Ministrul Educației și Cercetării",
    misiune:
      "După demisia lui Daniel David (decembrie 2025, în dezacord cu tăierile bugetare) și protestele profesorilor din 2025, ministerul are nevoie de un titular care să refacă încrederea cu sistemul și să apere bugetul educației în negocierile pe 2027.",
    candidati: [
      {
        nume: "Ștefan Pălărie",
        partid: "USR",
        camera: "Senat",
        functieActuala:
          "Senator de București, președinte al Comisiei pentru învățământ, știință și inovare a Senatului (din 2 februarie 2026)",
        profil:
          "Absolvent de Cibernetică (ASE), master SNSPA și Executive MBA; a fondat și condus timp de 10 ani ONG-ul „Școala de Valori”, premiat național și european pentru programe educaționale; la al doilea mandat de senator, ambele dedicate educației.",
        activitate:
          "Președinte al Comisiei pentru învățământ a Senatului din februarie 2026, membru al aceleiași comisii din 2020; autor a zeci de propuneri de modificare a legislației educației și participant în grupurile de lucru educaționale ale Romanian Business Leaders și Coaliției pentru Dezvoltarea României.",
        pro: [
          "Conduce comisia pentru educație a Senatului — camera decizională pentru multe legi din domeniu.",
          "Singurul candidat parlamentar cu carieră anterioară integral construită în educație, cu impact măsurat asupra a zeci de mii de elevi.",
          "Două mandate de specializare exclusivă pe educație, cu expertiză legislativă acumulată în dezbaterea legilor educației.",
          "Profil de integritate fără controverse documentate, esențial pentru refacerea încrederii publice.",
        ],
        contra: [
          "Provine dintr-un partid aflat în conflict deschis cu o parte a Parlamentului, ceea ce poate îngreuna votul de învestitură.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 13,
          integritate: 20,
          total: 67,
        },
        surse: [
          {
            titlu: "Componența Comisiei pentru învățământ a Senatului — senat.ro",
            url: "https://www.senat.ro/ComponentaComisii.aspx?Zi=&ComisieID=b6d9d5f8-bf64-44c3-bdbf-12fe7567ba82",
          },
          {
            titlu: "HotNews — USR preia președinția Comisiei de Învățământ din Senat",
            url: "https://hotnews.ro/usr-preia-presedintia-comisiei-de-invatamant-din-senat-cine-sunt-cei-17-membri-cu-rol-decizional-in-legile-educatiei-1874097",
          },
          {
            titlu: "Ștefan Pălărie — pagina oficială de membru USR",
            url: "https://www.usr.ro/membri/stefan-palarie/",
          },
        ],
      },
      {
        nume: "Daniel David",
        partid: "independent",
        camera: "neparlamentar",
        functieActuala:
          "Rector al Universității Babeș-Bolyai din Cluj-Napoca; ministru al educației și cercetării dec. 2024 – dec. 2025 (demisionat)",
        profil:
          "Profesor de psihologie clinică și științe cognitive, cel mai citat psiholog român în literatura internațională, rector al celei mai mari universități din țară; a condus Ministerul Educației ca independent timp de un an, în guvernele Ciolacu II și Bolojan.",
        activitate:
          "Neparlamentar; ca ministru a gestionat implementarea legilor educației și bugetul sectorului în plină criză fiscală, până la demisia din 22 decembrie 2025, motivată de dezacordul față de tăierile din bugetul educației pe 2026.",
        pro: [
          "Cea mai înaltă competență academică din întreaga listă: rector UBB, reputație științifică internațională.",
          "Experiență ministerială recentă de un an — cunoaște exact dosarele și aparatul ministerului.",
          "Statut de independent autentic, compatibil cu un guvern de merit, echidistant politic.",
          "A demonstrat că pune principiile peste funcție, refuzând să gireze un buget de austeritate pentru educație.",
        ],
        contra: [
          "A demisionat în plină criză în loc să negocieze din interior — întrebări privind reziliența politică.",
          "Măsurile de austeritate din educație aplicate în mandatul său (creșterea normei didactice, comasări) au declanșat proteste ample ale profesorilor și o moțiune simplă AUR împotriva sa.",
        ],
        punctaj: {
          sustinere: 4,
          competenta: 19,
          activitate: 11,
          integritate: 19,
          total: 53,
        },
        surse: [
          {
            titlu: "AGERPRES — Ministrul Educației, Daniel David, a demisionat",
            url: "https://agerpres.ro/politic/2025/12/22/ministrul-educatiei-daniel-david-a-demisionat-din-functie--1514242",
          },
          {
            titlu: "Europa Liberă — David a demisionat după un an la conducerea ministerului",
            url: "https://romania.europalibera.org/a/daniel-david-a-demisionat-de-la-conducerea-ministerului-educatiei-/33630258.html",
          },
          {
            titlu: "Ziare.com — moțiunea simplă AUR împotriva ministrului educației",
            url: "https://ziare.com/daniel-david/demitere-ministrul-educatiei-senat-discuta-motiune-simpla-aur-1964280",
          },
        ],
      },
      {
        nume: "Dan Cașcaval",
        partid: "PSD",
        camera: "Senat",
        functieActuala:
          "Senator de Iași, vicepreședinte al Comisiei pentru învățământ, știință și inovare a Senatului; rector al Universității Tehnice „Gheorghe Asachi” din Iași",
        profil:
          "Profesor universitar de inginerie chimică și rector al Universității Tehnice „Gheorghe Asachi” din Iași, una dintre principalele universități tehnice ale țării; ales senator PSD de Iași în decembrie 2024, la primul mandat parlamentar.",
        activitate:
          "Vicepreședinte al Comisiei pentru învățământ a Senatului din 21 decembrie 2024; implicat în dezbaterile comisiei privind finanțarea universităților și învățământul dual.",
        pro: [
          "Experiență reală de management academic la vârf: conduce o universitate tehnică mare, cu buget și cercetare aplicată.",
          "Funcție de conducere în comisia de specialitate a Senatului.",
          "Reprezintă PSD (~22%), cel mai mare partid, dar cu profil tehnic, nu de aparat.",
          "Înțelege direct problemele finanțării universitare — punctul care a aruncat în aer mandatul predecesorului.",
        ],
        contra: [
          "Cumulul senator–rector ridică probleme de conflict de interese instituțional pentru un viitor ministru al Educației.",
          "Experiența sa este aproape exclusiv universitară; învățământul preuniversitar, zona cu cele mai acute crize, îi este străin administrativ.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 15,
          activitate: 9,
          integritate: 17,
          total: 68,
        },
        surse: [
          {
            titlu: "Componența Comisiei pentru învățământ a Senatului — senat.ro",
            url: "https://www.senat.ro/ComponentaComisii.aspx?Zi=&ComisieID=b6d9d5f8-bf64-44c3-bdbf-12fe7567ba82",
          },
          {
            titlu: "HotNews — cei 17 membri ai Comisiei de Învățământ din Senat",
            url: "https://hotnews.ro/usr-preia-presedintia-comisiei-de-invatamant-din-senat-cine-sunt-cei-17-membri-cu-rol-decizional-in-legile-educatiei-1874097",
          },
        ],
      },
      {
        nume: "Silviu-Octavian Gurlui",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Iași, secretar al Comisiei pentru învățământ (din apr. 2026), vicepreședinte al Comisiei pentru știință și tehnologie",
        profil:
          "Profesor universitar dr. habil. la Facultatea de Fizică a Universității „Alexandru Ioan Cuza” din Iași, director al laboratorului de optică atmosferică, spectroscopie și laser (LOASL), cu zeci de publicații indexate și peste 20 de ani în cercetare avansată.",
        activitate:
          "Secretar al Comisiei pentru învățământ și vicepreședinte al Comisiei pentru știință și tehnologie; conform fișei cdep.ro este unul dintre cei mai activi deputați: 117 propuneri legislative inițiate (3 promulgate), 140 de întrebări și interpelări, luări de cuvânt la 78 de puncte de sumar.",
        pro: [
          "Singurul candidat cu profil dublu real educație + cercetare, cu carieră științifică internațională verificabilă.",
          "Cel mai activ parlamentar din întreaga listă: 140 de întrebări/interpelări și 117 inițiative legislative.",
          "Funcții în birourile ambelor comisii relevante (învățământ; știință și tehnologie).",
          "Oferă AUR (~18%) o reprezentare prin competență academică, nu prin profil ideologic.",
        ],
        contra: [
          "Eficiență legislativă scăzută: doar 3 din 117 inițiative promulgate, multe cu caracter de poziționare politică (a semnat 14 moțiuni).",
          "Afilierea la AUR îl leagă de un partid aflat în conflict cu mediul academic pe teme precum autonomia universitară.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 16,
          activitate: 15,
          integritate: 19,
          total: 74,
        },
        surse: [
          {
            titlu: "Fișa de deputat Silviu-Octavian Gurlui — cdep.ro (legislatura 2024)",
            url: "https://cdep.ro/ords/pls/parlam/structura2015.mp?idm=136&cam=2&leg=2024",
          },
          {
            titlu: "Facultatea de Fizică UAIC — prof. dr. habil. Silviu-Octavian Gurlui",
            url: "https://www.phys.uaic.ro/index.php/en/organizare-en/personal-didactic-en/silviu-octavian-gurlui-en/",
          },
        ],
      },
      {
        nume: "Mircea Miclea",
        partid: "independent",
        camera: "neparlamentar",
        functieActuala:
          "Profesor de psihologie la Universitatea Babeș-Bolyai; fost ministru al educației",
        profil:
          "Profesor la UBB Cluj, fondatorul școlii cognitive românești de psihologie; ministru al educației (2004–2005); președintele comisiei prezidențiale care a produs „raportul Miclea” (2007) — baza Legii educației naționale 1/2011; fondator al platformelor de evaluare psihologică Cognitrom.",
        activitate:
          "Neparlamentar; referința publică numărul unu în dezbaterile despre reforma educației din ultimele două decenii — rapoarte, cărți și intervenții constante, citate transpartinic.",
        pro: [
          "Autorul singurei viziuni sistemice de reformă a educației transpusă în lege („raportul Miclea” → Legea 1/2011).",
          "Combinație rară: experiență de ministru plus autoritate academică de vârf, recunoscută internațional.",
          "A demisionat din guvern în 2005 când finanțarea promisă educației nu a fost alocată — consecvență documentată între principii și funcție.",
          "Independent politic, acceptabil pentru un spectru parlamentar larg.",
        ],
        contra: [
          "Mandatul ministerial a durat sub un an, încheiat prin demisie — nu a apucat implementarea propriilor reforme.",
          "Legea 1/2011, construită pe raportul său, a fost modificată de sute de ori — viziunea s-a dovedit fragilă politic în lipsa unui sprijin de durată.",
          "Interesele comerciale din zona evaluării psihologice și educaționale (Cognitrom) ar cere o separare strictă de politicile ministerului.",
        ],
        punctaj: {
          sustinere: 1,
          competenta: 22,
          activitate: 12,
          integritate: 19,
          total: 54,
        },
        surse: [
          {
            titlu: "Universitatea Babeș-Bolyai — Departamentul de Psihologie",
            url: "https://psychology.psiedu.ubbcluj.ro/",
          },
          {
            titlu: "Wikipedia — Mircea Miclea",
            url: "https://ro.wikipedia.org/wiki/Mircea_Miclea",
          },
        ],
      },
    ],
    propunere: {
      nume: "Silviu-Octavian Gurlui",
      motivare:
        "74 de puncte: profesor universitar cu carieră științifică reală, cel mai activ parlamentar al rubricii (140 de interpelări) și susținerea AUR (24/35). Cașcaval (68) și Pălărie (67) urmează; Miclea (54) are competența 22/25, dar fără susținere politică nu surclasează. Gurlui punctează și la Mediu (70), dar regula e una: e propus acolo unde are maximul — aici.",
    },
  },
  {
    slug: "economie-digitalizare",
    minister: "Ministrul Economiei, Digitalizării, Antreprenoriatului și Turismului",
    misiune:
      "Un super-minister cu patru domenii lipite: reforma guvernanței companiilor de stat (începută în 2025), digitalizarea serviciilor publice cu termene PNRR și un sector HoReCa/turism ieșit dintr-un an de austeritate.",
    candidati: [
      {
        nume: "Radu Miruță",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Gorj; fost ministru al Economiei, Digitalizării, Antreprenoriatului și Turismului (iun.–dec. 2025), apoi ministru al Apărării în guvernul Bolojan",
        profil:
          "Inginer cu experiență în mediul privat înainte de intrarea în politică; a condus ministerul Economiei în prima parte a guvernării Bolojan, unde a inițiat evaluarea managementului companiilor de stat din portofoliul ministerului.",
        activitate:
          "Deputat la al doilea mandat; ca ministru a gestionat exact portofoliul vizat (economie, digitalizare, antreprenoriat, turism) timp de circa șase luni, înainte de a fi mutat la Apărare în decembrie 2025.",
        pro: [
          "Singurul candidat care a condus efectiv acest minister în configurația sa actuală — cunoaște aparatul și dosarele în curs.",
          "A inițiat curățarea consiliilor de administrație și evaluarea managerilor din companiile de stat.",
          "Profil tehnic (inginer), cu carieră în privat înainte de politică.",
          "Validat de două ori în funcții ministeriale (Economie, apoi Apărare) în același guvern.",
        ],
        contra: [
          "Mandat scurt la Economie (circa 6 luni), insuficient pentru rezultate structurale măsurabile.",
          "Mutarea rapidă la Apărare arată că partidul îl folosește ca om bun la toate, nu ca specialist dedicat economiei.",
          "Figură partizană vizibilă a USR, într-un guvern care tocmai a fost demis prin moțiune de cenzură.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 11,
          integritate: 19,
          total: 64,
        },
        surse: [
          {
            titlu: "HotNews — Radu Miruță la Apărare, Irineu Darău la Economie",
            url: "https://hotnews.ro/radu-miruta-la-aparare-irineu-darau-la-economie-usr-isi-valideaza-azi-propunerile-de-ministri-2133568",
          },
          {
            titlu: "Europa Liberă — Miruță și Darău au depus jurământul la Cotroceni",
            url: "https://romania.europalibera.org/a/radu-miruta-si-irineu-darau-au-depus-juramantul-la-cotroceni-pentru-ministerul-apararii-si-cel-al-economiei/33631070.html",
          },
        ],
      },
      {
        nume: "Petrișor Peiu",
        partid: "AUR",
        camera: "Senat",
        functieActuala:
          "Senator de București, lider al grupului senatorial AUR, membru în Comisia pentru buget-finanțe și în Comisia pentru energie",
        profil:
          "Inginer și economist, doctor al Universității Politehnica din București, profesor la Politehnica; fost președinte al Sidex Galați și fost manager la Romtelecom, Electroputere și Omniasig.",
        activitate:
          "Senator din decembrie 2024, lider de grup; membru simultan în două comisii economice ale Senatului; considerat de presă arhitectul tehnic al moțiunii de cenzură care a demis guvernul Bolojan și propunerea AUR pentru funcția de premier.",
        pro: [
          "Una dintre cele mai solide pregătiri economice din actualul Parlament: profesor universitar, doctor inginer, fost șef al celei mai mari companii industriale din România (Sidex).",
          "Experiență de conducere atât în industrie grea, cât și în telecom și asigurări — acoperă economie și digitalizare.",
          "Activitate parlamentară intensă în comisiile economice ale Senatului și vizibilitate publică ridicată ca analist economic.",
          "Numirea ar echilibra politic guvernul alternativ, AUR fiind al doilea partid ca voturi în dec. 2024 (~18%).",
        ],
        contra: [
          "Deține un portofoliu bursier de circa 1,5 milioane de euro, cu poziții majore la Banca Transilvania, Petrom și Romgaz — risc documentat de conflict de interese pentru un ministru al economiei (ZF).",
          "Profil profund partizan: artizanul moțiunii de cenzură și propunerea AUR de premier.",
          "Cariera managerială include perioade controversate ale companiilor de stat pe care le-a condus (Sidex înainte de privatizare).",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 18,
          activitate: 13,
          integritate: 13,
          total: 68,
          penalizari: "−5 conflict de interese documentat (portofoliu de acțiuni vs. inițiative pe companiile de stat); −2 alte controverse semnalate de presă",
        },
        surse: [
          {
            titlu: "ZF — Portofoliul bursier al lui Petrișor Peiu, arhitectul moțiunii de cenzură",
            url: "https://www.zf.ro/burse-fonduri-mutuale/petrisor-peiu-arhitectul-tehnic-motiunii-cenzura-aur-psd-impotriva-23139226",
          },
          {
            titlu: "Mediafax — Cine este Petrișor Peiu, propunerea AUR pentru premier",
            url: "https://www.mediafax.ro/politic/george-simion-a-anuntat-propunerea-aur-pentru-functia-de-premier-cine-este-petrisor-peiu-22616954",
          },
        ],
      },
      {
        nume: "Mohammad Murad",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Constanța, președinte al Comisiei pentru antreprenoriat și turism a Camerei Deputaților",
        profil:
          "Medic de formație devenit unul dintre cei mai mari investitori din turismul românesc: fondator al lanțului hotelier Phoenicia și proprietar al unor hoteluri emblematice de pe litoral.",
        activitate:
          "La primul mandat parlamentar; conduce din 2024 comisia de specialitate exact pe antreprenoriat și turism; a formulat propuneri de reducere a cheltuielilor parlamentare și a subvențiilor partidelor.",
        pro: [
          "Experiență antreprenorială directă, la scară mare, exact în turism și HoReCa — domeniu-cheie al portofoliului.",
          "Președinte al comisiei parlamentare de profil (antreprenoriat și turism) — activitate de specialitate verificabilă.",
          "Cunoaște din interior problemele litoralului românesc și ale investitorilor din ospitalitate.",
          "Notorietate publică ridicată în mediul de afaceri.",
        ],
        contra: [
          "Conflict de interese masiv și evident: ar reglementa un sector în care propriile companii sunt jucător dominant.",
          "Presa a documentat datoriile semnificative ale companiilor sale din turism.",
          "Traseu politic oscilant și declarații publice controversate.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 15,
          activitate: 11,
          integritate: 13,
          total: 63,
          penalizari: "−5 conflict de interese major (jucător dominant în sectorul pe care l-ar reglementa); −2 datoriile companiilor, documentate de presă",
        },
        surse: [
          {
            titlu: "Profit.ro — Murad, președintele Comisiei pentru Turism din Camera Deputaților",
            url: "https://www.profit.ro/stiri/politic/mohammad-murad-a-devenit-presedintele-comisiei-pentru-turism-din-camera-deputatilor-21898522",
          },
          {
            titlu: "Puterea — datoriile companiilor din turism ale deputatului Murad",
            url: "https://www.puterea.ro/perla-turistica-a-aur-ului-de-pe-litoral-s-a-blindat-in-parlament-cu-datorii/",
          },
        ],
      },
      {
        nume: "Varujan Pambuccian",
        partid: "Grupul minorităților naționale (Uniunea Armenilor din România)",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat al minorității armene (al optulea mandat, din 1996), lider istoric al grupului minorităților",
        profil:
          "Matematician și informatician, cel mai longeviv expert IT din Parlamentul României; a condus din 2000 Comisia pentru tehnologia informației și comunicațiilor a Camerei Deputaților.",
        activitate:
          "Autor sau coautor al legilor fondatoare ale digitalizării românești: legea semnăturii electronice, legea comerțului electronic, legea notariatului electronic, pachetul e-finance/e-banking; 24 de propuneri legislative inițiate și peste 600 de amendamente de-a lungul mandatelor.",
        pro: [
          "Cel mai experimentat legislator în digitalizare din România, cu legi concrete adoptate și aplicate de peste două decenii.",
          "Profil tehnic autentic (matematician-informatician), nu doar administrativ.",
          "Apartenența la grupul minorităților îl face perceput ca echidistant față de marile partide.",
          "Memorie instituțională unică privind relația stat–tehnologie.",
        ],
        contra: [
          "30 de ani neîntrerupți în Parlament pot fi citiți ca simbol al clasei politice perene, nu al înnoirii.",
          "Grupul minorităților votează tradițional cu orice putere, ceea ce diluează imaginea de independență.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 18,
          activitate: 14,
          integritate: 19,
          total: 68,
        },
        surse: [
          {
            titlu: "Inițiativa pentru o Justiție Curată — profil Varujan Pambuccian",
            url: "https://justitiecurata.ro/la-al-saptelea-mandat-varujan-pambuccian-seful-grupului-parlamentar-al-minoritatilor-de-20-de-ani/",
          },
          {
            titlu: "ZF — Varujan Pambuccian, membru în Comisia pentru tehnologia informației",
            url: "https://www.zf.ro/info/varujan-pambuccian-deputat-membru-in-comisia-pentru-tehnologia-19563748",
          },
        ],
      },
      {
        nume: "Bende Sándor",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Harghita (al treilea mandat), președinte al Comisiei pentru industrii și servicii a Camerei Deputaților",
        profil:
          "Politician UDMR cu carieră tehnică la Electrica S.A. (din 1993); membru UDMR din 1990, președinte al organizației teritoriale Gheorgheni din 2009.",
        activitate:
          "Conduce Comisia pentru industrii și servicii în legislatura 2024–2028 (comisia prin care trec legile energiei, industriei și serviciilor); poziții publice documentate pe competitivitate industrială, prețurile energiei și situația antreprenorilor din HoReCa.",
        pro: [
          "Președinte al celei mai importante comisii economice de profil din Camera Deputaților — activitate de specialitate curentă și verificabilă.",
          "Trei mandate parlamentare consecutive, cu specializare constantă pe industrie și servicii.",
          "Provine dintr-un județ dependent de turism și HoReCa (Harghita) și dialoghează documentat cu antreprenorii din sector.",
          "UDMR aduce echilibru politic și o reputație de predictibilitate în guvernare.",
        ],
        contra: [
          "Notorietate publică națională redusă.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 9,
          activitate: 12,
          integritate: 20,
          total: 57,
        },
        surse: [
          {
            titlu: "UDMR — profil Bende Sándor",
            url: "https://udmr.ro/profil/bende-sandor",
          },
          {
            titlu: "CursDeGuvernare — Bende Sándor, președintele Comisiei pentru industrii și servicii",
            url: "https://cursdeguvernare.ro/video-sandor-bende-presedinte-comisia-pentru-industrii-si-servicii-din-camera-deputatilor-romania-este-izolata-in-ceea-ce-priveste-energia.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Varujan Pambuccian",
      motivare:
        "68 de puncte, la egalitate cu Peiu — departajează integritatea (19/20 față de 13/20, după penalizarea conflictului de interese bursier). Legile fondatoare ale digitalizării plus mandatul direct de deputat al minorităților fac din el singurul „aproape-tehnocrat” cu vot popular în spate.",
    },
  },
  {
    slug: "energie",
    minister: "Ministrul Energiei",
    misiune:
      "Facturile au crescut după eliminarea plafonării din 2025, iar proiectele strategice (Cernavodă 3 și 4, Neptun Deep, 1.500 MW stocare) au termene ferme. Ministrul trebuie să țină echilibrul între protecția consumatorilor și investițiile care condiționeze independența energetică.",
    candidati: [
      {
        nume: "Bogdan-Gruia Ivan",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Bistrița-Năsăud; fost ministru al Energiei (iun. 2025 – apr. 2026, demisionat la ruperea coaliției), fost ministru al Digitalizării (2023–2025)",
        profil:
          "Cel mai tânăr ministru al cabinetelor Ciolacu și Bolojan; a trecut de la portofoliul Digitalizării la Energie, unde a gestionat tranziția pieței după liberalizare și programul de investiții în capacități noi.",
        activitate:
          "Ca ministru a susținut pentru 2026 unul dintre cele mai mari bugete din istoria sectorului energetic (19,7 miliarde lei, ~90% investiții) și a coordonat instalarea de capacități noi: ~2.000 MW solar, 350 MW eolian, 2.200 MW pe gaz și ținta de 1.500 MW stocare până la finalul lui 2026.",
        pro: [
          "Experiență executivă directă și recentă pe portofoliul Energiei, cu dosarele de stocare și capacități noi încă în derulare.",
          "A obținut un buget record de investiții pentru 2026, cu reducerea cheltuielilor de personal.",
          "Dublă competență energie + digitalizare, utilă pentru modernizarea rețelelor.",
          "Reprezintă partidul cu cel mai mare scor în alegerile din dec. 2024 (~22%).",
        ],
        contra: [
          "A demisionat în aprilie 2026 odată cu retragerea PSD de la guvernare — gest de disciplină de partid, nu de responsabilitate față de portofoliu.",
          "Mandatul său a coincis cu facturi ridicate la energie după eliminarea plafonării, fără scăderi vizibile pentru consumatori până la demisie.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 14,
          activitate: 9,
          integritate: 18,
          total: 68,
        },
        surse: [
          {
            titlu: "Juridice.ro — Bogdan-Gruia Ivan a demisionat din funcția de ministru al Energiei",
            url: "https://www.juridice.ro/826337/bogdan-gruia-ivan-a-demisionat-din-functia-de-ministru-al-energiei.html",
          },
          {
            titlu: "Money.ro — buget record pentru sectorul energetic în 2026",
            url: "https://www.money.ro/bogdan-ivan-in-2026-avem-unul-dintre-cele-mai-mari-bugete-din-istoria-sectorului-energetic-din-romania-19716-miliarde-lei-cheltuielile-de-personal-mai-mici-cu-6-decat-in-anul-precedent/",
          },
        ],
      },
      {
        nume: "Sebastian Burduja",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București, președinte PNL București; fost ministru al Energiei (iun. 2023 – iun. 2025)",
        profil:
          "Economist cu studii la Stanford și Harvard, fost consultant la Banca Mondială; a condus Ministerul Energiei doi ani, perioadă în care s-au semnat contractele pentru reactoarele 3 și 4 de la Cernavodă.",
        activitate:
          "Deputat în legislatura 2024–2028; ca ministru a promovat eliminarea dublei impozitări la stocare; o moțiune simplă împotriva sa a fost respinsă în Senat, chiar liderul PSD declarând că, față de alți miniștri ai Energiei, „domnul Burduja e lumină”.",
        pro: [
          "Cel mai lung mandat recent la Energie (2 ani), cu proiecte strategice semnate: Cernavodă 3 și 4, Neptun Deep în calendar, cadrul legal pentru stocare.",
          "Pregătire economică de elită internațională (Stanford, Harvard, Banca Mondială).",
          "Apreciat transpartinic — moțiunea simplă împotriva sa a picat, cu laude chiar din opoziția PSD.",
          "Activitate publică constantă pe energie și după mandat.",
        ],
        contra: [
          "Mandatul său acoperă perioada în care s-a pregătit liberalizarea care a dus la scumpirile din 2025 — responsabilitate politică directă în designul tranziției.",
          "A pierdut sever alegerile pentru Primăria Capitalei din iunie 2024 — încredere publică limitată în plan electoral.",
          "Ascensiune politică foarte rapidă, asociată de presă cu poziția tatălui său, fost șef al Bancorex.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 18,
          activitate: 10,
          integritate: 18,
          total: 67,
        },
        surse: [
          {
            titlu: "HotNews — moțiunea simplă împotriva ministrului Burduja a picat în Senat",
            url: "https://hotnews.ro/motiunea-simpla-impotriva-ministrului-sebastian-burduja-pnl-a-picat-in-senat-lider-psd-fata-de-alti-ministri-de-la-energie-domnul-burduja-e-lumina-1937559",
          },
          {
            titlu: "Burduja.ro — CV oficial",
            url: "https://burduja.ro/cv/",
          },
        ],
      },
      {
        nume: "Cristina Prună",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București (al treilea mandat), vicepreședinte al Comisiei pentru industrii și servicii",
        profil:
          "Economist cu experiență de project management în sectorul privat și non-profit din mai multe țări europene; unul dintre cei mai constanți parlamentari specializați pe energie din ultimele trei legislaturi.",
        activitate:
          "Vicepreședinte al comisiei prin care trece legislația energetică a Camerei; amendamente și poziții documentate pe liberalizarea pieței, schema pentru prosumatori și eficiența energetică industrială.",
        pro: [
          "Trei mandate de specializare neîntreruptă pe energie în comisia de profil — expertiză legislativă rar întâlnită.",
          "Promotor consecvent al concurenței și investițiilor în piața de energie.",
          "Profil integru, fără controverse patrimoniale documentate.",
          "Economist, cu înțelegerea mecanismelor de preț, nu doar a infrastructurii.",
        ],
        contra: [
          "Pozițiile sale ferm pro-liberalizare sunt politic vulnerabile după scumpirile din 2025.",
          "Vizibilitate publică sub cea a foștilor miniștri din listă.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 12,
          activitate: 13,
          integritate: 20,
          total: 65,
        },
        surse: [
          {
            titlu: "Recorder — Portret de candidat: Cristina Prună",
            url: "https://recorder.ro/portret-de-candidat-cristina-pruna/",
          },
          {
            titlu: "CristinaPruna.ro — Despre mine",
            url: "https://cristinapruna.ro/despre-mine/",
          },
        ],
      },
      {
        nume: "Antal István-Loránt",
        partid: "UDMR",
        camera: "Senat",
        functieActuala:
          "Senator de Harghita (din 2018), președinte al Comisiei pentru energie, infrastructură energetică și resurse minerale a Senatului",
        profil:
          "Economist de formație, președinte al comisiei de energie a Senatului din 2020; una dintre vocile parlamentare cele mai active pe legislația energetică, prezent constant în dezbaterile de profil interne și internaționale.",
        activitate:
          "În ultimii doi ani a inițiat sau coinițiat 27 de inițiative legislative, dintre care 5 au devenit deja legi; autor în octombrie 2025 al inițiativei care a îmbunătățit cadrul legal al prosumatorilor (compensare lunară, acoperirea facturii de gaz din surplus).",
        pro: [
          "Cea mai consistentă activitate legislativă verificabilă pe energie din actualul Parlament: 27 de inițiative, 5 legi promulgate.",
          "Conduce de peste cinci ani comisia de specialitate a Senatului — cunoaște toate dosarele sectorului.",
          "Legea prosumatorilor are efecte directe, măsurabile, pentru sute de mii de gospodării.",
          "Profil echidistant și predictibil, apreciat de industrie pentru accent pe stabilitate legislativă.",
        ],
        contra: [
          "Notorietate redusă în afara sectorului energetic și a electoratului UDMR.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 15,
          activitate: 15,
          integritate: 20,
          total: 66,
        },
        surse: [
          {
            titlu: "UDMR — profil Antal Lóránt",
            url: "https://udmr.ro/profil/antal-lorant",
          },
          {
            titlu: "InvesTenergy — legea prosumatorilor inițiată de senatorul Antal",
            url: "https://www.investenergy.ro/senatorul-antal-lorant-prosumatorii-castiga-noi-drepturi-compensare-lunara-si-surplusul-de-energie-poate-acoperi-si-factura-de-gaz/",
          },
          {
            titlu: "Gândul — Antal István-Loránt despre predictibilitatea pieței de energie",
            url: "https://www.gandul.ro/financiar/energy-now-ii-edition-antal-istvan-lorant-presedintele-comisiei-pentru-energie-din-senat-este-nevoie-de-predictibilitate-este-nevoie-de-semnale-catre-pietele-de-capital-19603958",
          },
        ],
      },
      {
        nume: "Dumitru Chisăliță",
        partid: "independent (neafiliat politic)",
        camera: "neparlamentar",
        functieActuala:
          "Președinte al Asociației Energia Inteligentă; fost președinte al Consiliului de Administrație Romgaz (apr.–nov. 2025)",
        profil:
          "Inginer, unul dintre cei mai cunoscuți experți români în gaze naturale și piețe de energie; carieră completă în Romgaz (director comercial, director de energie, director general) și fondator al celui mai vizibil think-tank energetic independent din România.",
        activitate:
          "Neparlamentar; activitate publică intensă de analiză și avertizare pe politicile energetice; a condus CA Romgaz cinci luni în 2025.",
        pro: [
          "Expertiză tehnică și de piață de top, acumulată în peste 25 de ani în interiorul celui mai mare producător de gaze.",
          "Independent politic — exact profilul de tehnocrat cerut de un guvern al echidistanței.",
          "Experiență recentă de guvernanță corporativă la vârful Romgaz.",
          "Credibilitate publică construită pe analize, nu pe funcții politice.",
        ],
        contra: [
          "Eliminat de pe lista scurtă la selecția noului CA Romgaz în noiembrie 2025, după care a demisionat — relație tensionată documentată cu acționarul de stat.",
          "Specializat preponderent pe gaze; dosarele nuclear, hidro și regenerabile i-ar fi mai puțin familiare.",
        ],
        punctaj: {
          sustinere: 0,
          competenta: 18,
          activitate: 12,
          integritate: 18,
          total: 48,
        },
        surse: [
          {
            titlu: "AGERPRES — Chisăliță pleacă de la Romgaz și revine la Asociația Energia Inteligentă",
            url: "https://agerpres.ro/economic/2025/10/29/dumitru-chisalita-pleaca-de-la-romgaz-si-revine-la-asociatia-energia-inteligenta--1498165",
          },
          {
            titlu: "Digi24 — Chisăliță a plecat din CA Romgaz",
            url: "https://www.digi24.ro/stiri/actualitate/dumitru-chisalita-a-plecat-din-ca-al-romgaz-avem-resurse-dar-nu-stim-sa-le-folosim-3478183",
          },
        ],
      },
    ],
    propunere: {
      nume: "Bogdan-Gruia Ivan",
      motivare:
        "Cea mai strânsă poziție din rubrică: Ivan 68 — Burduja 67 — Antal 66. Departajează susținerea (27/35 față de 21 și 16), exact dimensiunea cu cea mai mare pondere: legea plafonării, bugetul energiei și contractele strategice trec prin Parlament. Anul facturilor mari rămâne în fișa lui, la contra.",
    },
  },
  {
    slug: "transporturi",
    minister: "Ministrul Transporturilor și Infrastructurii",
    misiune:
      "2025 a fost anul record al autostrăzilor (146 km deschiși), dar 2026 are ținte și mai mari (255 km) și termene PNRR critice, în timp ce calea ferată rămâne pe penultimul loc în Europa. Ministrul nu are timp de acomodare.",
    candidati: [
      {
        nume: "Ciprian-Constantin Șerban",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Neamț; fost ministru al Transporturilor și Infrastructurii (23 iun. 2025 – 23 apr. 2026)",
        profil:
          "Parlamentar PSD specializat pe transporturi, fost președinte al Comisiei pentru transporturi în legislatura trecută; a condus ministerul în anul record al infrastructurii rutiere românești.",
        activitate:
          "Sub mandatul său, în 2025 s-au deschis circulației 146 km de autostradă și drum expres (A0, A1, A7), s-au semnat toate cele patru contracte pentru secțiunea montană a A8 (18 miliarde lei), iar investițiile în transporturi au atins 8,4 miliarde euro în 16 luni, cu record de absorbție de fonduri europene.",
        pro: [
          "Rezultate măsurabile și recente: 2025, anul cu cele mai multe deschideri de autostradă din istoria României (146 km).",
          "Contractele A8 montan semnate integral — dosarul cel mai greu al Moldovei, deblocat în mandatul său.",
          "Record de absorbție a fondurilor europene pe transporturi.",
          "Cunoaște dosarele PNRR cu termene critice în 2026 — continuitate fără perioadă de învățare.",
        ],
        contra: [
          "A demisionat în aprilie 2026 la decizia partidului, abandonând portofoliul în plin an de execuție.",
          "O parte semnificativă a meritelor revine contractelor semnate de predecesorul Grindeanu (2021–2025).",
          "Moțiune simplă AUR pe transporturi în noiembrie 2025, care a semnalat performanța feroviară a României — penultimul loc în clasamentul european.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 18,
          activitate: 11,
          integritate: 18,
          total: 74,
        },
        surse: [
          {
            titlu: "ZF — 2025, anul de aur al infrastructurii rutiere: 146 km deschiși",
            url: "https://www.zf.ro/auto/2025-anul-aur-infrastructurii-rutiere-romanesti-ministrul-22995774",
          },
          {
            titlu: "Traficmedia — bilanțul investițiilor MT 2025–2026",
            url: "https://traficmedia.ro/ministerul-transporturilor-a-prezentat-bilantul-proiectelor-de-investitii-aferente-2025-2026/",
          },
          {
            titlu: "AGERPRES — moțiunea simplă AUR pe transporturi (nov. 2025)",
            url: "https://agerpres.ro/politic/2025/11/17/senat---motiune-transporturi-a-inceput-dezbaterea-motiunii-simple-impotriva-ministrului-transporturi--1503628",
          },
        ],
      },
      {
        nume: "Lucian Bode",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Sălaj, președinte al Comisiei pentru transporturi și infrastructură a Camerei Deputaților",
        profil:
          "Inginer energetician, fost ministru al Transporturilor (2019–2020) și fost ministru de Interne (2020–2023); parlamentar cu vechime din 2008, specializat pe infrastructură și energie.",
        activitate:
          "Conduce comisia de specialitate a Camerei în legislatura 2024–2028; în mandatul său de ministru al Transporturilor a gestionat pregătirea proiectelor ulterior contractate pe A7 și A0.",
        pro: [
          "Singura combinație din listă de experiență ministerială la Transporturi plus conducerea actuală a comisiei parlamentare de profil.",
          "Experiență executivă extinsă în două ministere grele (Transporturi, Interne).",
          "Cunoaște aparatul CNAIR și mecanismele de finanțare europeană din interior.",
          "Vechime parlamentară mare, cu rețea instituțională solidă.",
        ],
        contra: [
          "Comisia de etică a UBB a constatat că teza sa de doctorat este „profund viciată” de plagiat; instanța i-a respins plângerea, iar Bode a retras cartea bazată pe teză.",
          "Mandatul său la Transporturi (sub un an) nu a produs deschideri majore de autostradă.",
          "Asociat cu gestionarea controversată a unor dosare din mandatul de la Interne (azilele groazei, scandalul 2 Mai).",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 14,
          activitate: 13,
          integritate: 10,
          total: 58,
          penalizari: "−10 plagiat constatat de comisia de etică a UBB, confirmat în instanță",
        },
        surse: [
          {
            titlu: "cdep.ro — Comisia pentru transporturi și infrastructură",
            url: "https://www.cdep.ro/pls/parlam/structura.co?idc=34",
          },
          {
            titlu: "Digi24 — teza lui Bode, „profund viciată” de plagiat (comisia de etică UBB)",
            url: "https://www.digi24.ro/stiri/actualitate/teza-de-doctorat-a-lui-lucian-bode-este-profund-viciata-de-plagiat-spune-comisia-de-etica-a-ubb-reactia-ministrului-de-interne-2211825",
          },
          {
            titlu: "Europa Liberă — Bode și-a retras cartea scrisă pe baza tezei plagiate",
            url: "https://romania.europalibera.org/a/bode-retras-carte-teza-doctorat-plagiat/32240737.html",
          },
        ],
      },
      {
        nume: "Cătălin Drulă",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București; fost ministru al Transporturilor (dec. 2020 – sep. 2021), fost președinte USR",
        profil:
          "Informatician cu carieră internațională în software înainte de politică; ca ministru a impus standarde de transparență la CNAIR și CFR și a accelerat pregătirea proiectelor de autostradă finanțate ulterior prin PNRR.",
        activitate:
          "Fost președinte al Comisiei pentru transporturi a Camerei (2022); parlamentar activ pe infrastructură de trei legislaturi; în 2025–2026 a continuat să depună inițiative legislative pe domeniu.",
        pro: [
          "Reputație transpartinică de cel mai tehnic ministru recent al Transporturilor: monitorizare publică a șantierelor, presiune pe constructori.",
          "Profil digital — util pentru reforma sistemelor IT din transporturi.",
          "Experiență dublă: executiv (ministru) și legislativ (președinte de comisie).",
          "Integritate personală fără dosare sau acuzații patrimoniale documentate.",
        ],
        contra: [
          "Mandat ministerial scurt (9 luni), încheiat odată cu criza coaliției din 2021 — fără autostrăzi deschise în mandat.",
          "Eșec electoral recent și sever: locul 4 la alegerile pentru Primăria Capitalei din decembrie 2025.",
          "Stil politic conflictual, care i-a fragilizat relațiile chiar și în propria tabără.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 14,
          activitate: 12,
          integritate: 20,
          total: 66,
        },
        surse: [
          {
            titlu: "Euronews România — Portret Cătălin Drulă",
            url: "https://www.euronews.ro/articole/portret-catalin-rula-candidat-usr-primaria-capitalei-alegeri-bucuresti",
          },
          {
            titlu: "AGERPRES — Drulă, președinte al Comisiei pentru transporturi (2022)",
            url: "https://agerpres.ro/viata-parlamentara/2022/02/02/catalin-drula---noul-presedinte-al-comisiei-pentru-transporturi-si-infrastructura-din-camera-deputat--857936",
          },
        ],
      },
      {
        nume: "Sorin Grindeanu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Președinte al Camerei Deputaților, președinte al PSD; fost ministru al Transporturilor (2021–2025), fost prim-ministru (2017)",
        profil:
          "Matematician-informatician de formație, cel mai longeviv ministru al Transporturilor post-1989 (peste 3 ani și jumătate), perioadă în care au fost semnate contractele pentru A7, A8 și A0 și au pornit marile șantiere PNRR.",
        activitate:
          "Deputat de Timiș, conduce Camera Deputaților; ca ministru a semnat majoritatea contractelor de autostradă aflate azi în execuție și a coordonat cea mai mare alocare istorică pentru infrastructura de transport.",
        pro: [
          "Arhitectul portofoliului actual de șantiere: contractele A7, A0 și pregătirea A8 s-au semnat în mandatul său.",
          "Cel mai experimentat om politic din listă pe transporturi (3,5 ani de mandat plus experiență de premier).",
          "Rezultatele rutiere din 2025–2026 derivă direct din deciziile sale din 2021–2024.",
          "Notorietate și greutate politică maximă — ar putea impune ministerului ritm și disciplină.",
        ],
        contra: [
          "Este președintele PSD și al Camerei Deputaților — numirea ar contrazice frontal principiul echidistanței și ar concentra excesiv puterea.",
          "PSD condus de el a retras sprijinul guvernului Bolojan și a votat moțiunea care a produs actuala criză.",
          "Acuzații recurente în presă de numiri clientelare în companiile din subordinea Transporturilor în mandatul 2021–2025.",
        ],
        punctaj: {
          sustinere: 30,
          competenta: 19,
          activitate: 9,
          integritate: 17,
          total: 75,
        },
        surse: [
          {
            titlu: "Euronews — Grindeanu, noul președinte al PSD",
            url: "https://www.euronews.ro/articole/sorin-grindeanu-este-noul-presedinte-psd",
          },
          {
            titlu: "Știrile ProTV — Grindeanu, președintele Camerei Deputaților",
            url: "https://stirileprotv.ro/stiri/politic/parlamentul-isi-alege-azi-noii-presedinti-ai-camerelor-sorin-grindeanu-la-camera-deputatilor-iar-mircea-abrudean-la-senat.html",
          },
        ],
      },
      {
        nume: "Lucian-Florin Pușcașu",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Suceava (al doilea mandat), membru al Comisiei pentru transporturi și infrastructură",
        profil:
          "Deputat AUR specializat pe transporturi și industrie, membru al comisiilor pentru industrii și pentru transporturi încă din legislatura 2020–2024; una dintre vocile critice constante pe starea infrastructurii feroviare.",
        activitate:
          "În mandatul anterior a înregistrat 41 de inițiative legislative și 38 de întrebări și interpelări; în legislatura actuală activează în Comisia pentru transporturi, unde a criticat documentat subfinanțarea căii ferate.",
        pro: [
          "Activitate parlamentară cuantificabilă peste media Camerei: 41 de inițiative și 38 de întrebări/interpelări într-un singur mandat.",
          "Specializare consecventă pe transporturi în două legislaturi succesive.",
          "Singurul din listă concentrat pe feroviar — sectorul unde România e penultima în Europa.",
          "Numirea ar onora echidistanța față de al doilea partid din alegerile din dec. 2024.",
        ],
        contra: [
          "Notorietate națională redusă; activitatea sa e preponderent declarativă, fără legi majore adoptate din inițiativele sale.",
          "Apartenența la un partid fără experiență de guvernare ridică riscuri de execuție într-un minister cu termene PNRR critice.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 8,
          activitate: 12,
          integritate: 20,
          total: 64,
        },
        surse: [
          {
            titlu: "cdep.ro — fișa de deputat Pușcașu Lucian-Florin",
            url: "https://www.cdep.ro/pls/parlam/structura2015.mp?idm=247&leg=2020&cam=2",
          },
          {
            titlu: "Club Feroviar — deputat AUR: Germania bagă miliarde în calea ferată, la noi iau locomotivele foc",
            url: "https://clubferoviar.ro/deputat-aur-germania-baga-miliarde-in-calea-ferata-la-noi-iau-locomotivele-foc/",
          },
        ],
      },
    ],
    propunere: {
      nume: "Sorin Grindeanu",
      motivare:
        "75 de puncte, la un punct de Șerban (74) — marja grilei, decisă de cea mai mare susținere politică din întreaga rubrică (30/35) și de palmaresul contractelor A7/A0/A8. Numirea ar presupune renunțarea la președinția Camerei; acuzațiile de numiri clientelare rămân la contra. Șerban este rezervă cu drepturi practic egale.",
    },
  },
  {
    slug: "agricultura",
    minister: "Ministrul Agriculturii și Dezvoltării Rurale",
    misiune:
      "Negocierea bugetului PAC post-2027 (propunerea actuală a CE e respinsă transversal de fermierii români), infrastructura de irigații într-o țară tot mai afectată de secetă și procesarea — veriga lipsă a lanțului agroalimentar.",
    candidati: [
      {
        nume: "Florin-Ionuț Barbu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Olt, membru al Comisiei pentru agricultură; fost ministru al agriculturii (iun. 2023 – apr. 2026, demisionat la ieșirea PSD de la guvernare)",
        profil:
          "Economist (Univ. din Craiova, doctorat în economie), a condus Agenția Națională de Îmbunătățiri Funciare (ANIF) ca director general în 2014–2020; aproape trei ani ministru al agriculturii în guvernele Ciolacu și Bolojan.",
        activitate:
          "Membru al Comisiei pentru agricultură a Camerei; în legislatura 2024 are 13 propuneri legislative inițiate, din care 5 promulgate legi, dar nicio întrebare/interpelare — activitatea sa fiind preponderent ministerială.",
        pro: [
          "Cea mai lungă și recentă experiență executivă exact pe acest portofoliu: ministru iunie 2023 – aprilie 2026, reconfirmat în două guverne diferite.",
          "Experiență tehnică directă în infrastructura de irigații ca director general ANIF — domeniu critic pentru agricultura românească.",
          "5 din 13 propuneri legislative devenite legi — rată de promulgare ridicată.",
          "Relație de lucru consolidată cu asociațiile de fermieri și cu aparatul MADR.",
        ],
        contra: [
          "Anchete de presă îl acuză că în perioada ANIF instituția ar fi favorizat firme apropiate de liderii PSD Olt.",
          "A demisionat în aprilie 2026 în bloc, ca act politic al PSD — semn de subordonare a portofoliului față de partid.",
          "Activitate parlamentară proprie aproape inexistentă: zero întrebări și interpelări în legislatura curentă.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 17,
          activitate: 9,
          integritate: 13,
          total: 66,
          penalizari: "−5 anchetele de presă privind contractele ANIF (nevalidate judiciar); −2 demisia la ordinul partidului",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Barbu Florin-Ionuț (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=19&cam=2&leg=2024",
          },
          {
            titlu: "AGERPRES — Barbu: mi-am înaintat demisia din funcția de ministru (23 apr. 2026)",
            url: "https://agerpres.ro/politic/2026/04/23/barbu-mi-am-inaintat-demisia-din-functia-de-ministru-al-agriculturii-pana-cand-devine-efectiva-voi-a--1549457",
          },
          {
            titlu: "Ziarul de Vâlcea — anchetă privind activitatea la ANIF",
            url: "https://ziaruldevalcea.ro/2025/09/mafiotul-de-la-anif-cum-a-transformat-ministrul-florin-barbu-irigatiile-romaniei-in-pusculita-baronilor-de-olt/",
          },
        ],
      },
      {
        nume: "Călin-Gheorghe Matieș",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Alba, vicepreședinte al Comisiei pentru agricultură a Camerei Deputaților",
        profil:
          "Antreprenor în industria de panificație și produse tradiționale („Pită de Sântimbru”), președinte al Federației Naționale a Producătorilor de Produse Tradiționale; fost senator de Alba (2020–2024, ales pe listele PSD).",
        activitate:
          "Vicepreședinte al Comisiei pentru agricultură a Camerei; în legislatura 2024: 83 de propuneri legislative inițiate (2 promulgate), 7 întrebări și interpelări, luări de cuvânt la 44 de puncte de sumar; președinte al Delegației la Adunarea Parlamentară a Cooperării Economice a Mării Negre.",
        pro: [
          "Singurul candidat cu experiență antreprenorială directă în lanțul agroalimentar — producător real, cu fabrică și exploatații agricole.",
          "Reprezentant legitim al producătorilor mici: președinte al Federației Naționale a Producătorilor de Produse Tradiționale.",
          "Activitate parlamentară susținută pe domeniu: vicepreședinte de comisie, 83 de inițiative legislative.",
          "Al doilea mandat parlamentar consecutiv pe profil agricol (Senat 2020–2024, Cameră din 2024).",
        ],
        contra: [
          "Traseism politic documentat: ales senator pe listele PSD în 2020, trecut la AUR în noiembrie 2023.",
          "Eficiență legislativă scăzută: doar 2 din 83 de propuneri devenite legi.",
          "Interesele de afaceri proprii în panificație și agricultură ridică un potențial conflict de interese la preluarea MADR.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 15,
          activitate: 12,
          integritate: 13,
          total: 64,
          penalizari: "−3 traseism politic documentat (PSD → AUR); −4 conflict de interese potențial (afaceri proprii în sectorul reglementat)",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Matieș Călin-Gheorghe (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=185&cam=2&leg=2024",
          },
          {
            titlu: "Digi24 — un senator PSD s-a înscris în AUR",
            url: "https://www.digi24.ro/stiri/actualitate/politica/un-senator-psd-s-a-inscris-in-aur-a-contat-pentru-mine-onoarea-2575111",
          },
          {
            titlu: "Alba24 — cine este Călin Matieș: afaceri, avere, declarații",
            url: "https://alba24.ro/cine-este-calin-maties-propunerea-psd-alba-pentru-primaria-alba-iulia-afaceri-avere-declaratii-politice-controversate-911554.html",
          },
        ],
      },
      {
        nume: "Sebastian Cernic",
        partid: "USR",
        camera: "Senat",
        functieActuala:
          "Senator de Bacău, președinte al Comisiei pentru agricultură, industrie alimentară și dezvoltare rurală a Senatului (din dec. 2024)",
        profil:
          "Economist (specializarea marketing), cu carieră de conducere în marketing și vânzări în companii din ospitalitate și FMCG — componenta de piață și industrie alimentară a portofoliului.",
        activitate:
          "Conduce comisia de specialitate a Senatului din decembrie 2024; poziții publice documentate pe bugetul PAC post-2027 („Respingem ferm actuala propunere de buget a CE”) și pe direcționarea fondurilor europene din agricultură; a reprezentat comisia în dialogul cu Comisia Europeană privind Viziunea pentru Agricultură și Alimentație.",
        pro: [
          "Președinte în exercițiu al comisiei de specialitate a Senatului.",
          "Implicare directă în negocierile europene pe agricultură: a dus poziția fermierilor români la Bruxelles.",
          "Profil orientat pe piață și industrie alimentară (FMCG), util pentru procesare și lanțuri scurte — veriga slabă a agriculturii românești.",
          "Discurs anticorupție documentat privind alocarea fondurilor europene agricole.",
        ],
        contra: [
          "Notorietate publică națională redusă în afara sectorului.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 11,
          activitate: 11,
          integritate: 20,
          total: 62,
        },
        surse: [
          {
            titlu: "Fișa oficială de senator — senat.ro",
            url: "https://www.senat.ro/FisaSenator.aspx?ParlamentarID=CE14B3E6-9E25-4840-A0B0-23F33C6DB73C",
          },
          {
            titlu: "Senat.ro — Cernic: am dus vocea fermierilor români la Bruxelles",
            url: "https://www.senat.ro/StiriSenatDetaliu.aspx?ID=C5BD4BF9-3388-4720-9812-866DCBE5D5D2",
          },
          {
            titlu: "Mediafax — președintele comisiei pentru agricultură din Senat respinge bugetul CE",
            url: "https://www.mediafax.ro/politic/presedintele-comisiei-pentru-agricultura-din-senat-respingem-ferm-actuala-propunere-de-buget-a-ce-23623665",
          },
        ],
      },
      {
        nume: "George Scarlat",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Galați, membru al Comisiei pentru agricultură, vicepreședinte al Comisiei pentru politică economică",
        profil:
          "Fermier și economist, fost secretar de stat în MADR (2019–2020), fost președinte al Comisiei pentru agricultură a Senatului (2020–2024), fost deputat 2012–2016 tot pe profil agricol.",
        activitate:
          "Membru al Comisiei pentru agricultură a Camerei în legislatura 2024, cu 35 de propuneri legislative inițiate (3 promulgate); a treia legislatură consecutivă în comisiile de agricultură ale Parlamentului.",
        pro: [
          "Combinație rară de practician (fermier activ) și om de aparat (secretar de stat MADR, președinte de comisie la Senat).",
          "Continuitate instituțională: prezent în comisiile de agricultură în trei legislaturi.",
          "Cunoaște ministerul din interior, inclusiv mecanismele APIA/AFIR.",
          "Echilibru politic: PNL nu a avut recent ministru de agricultură, reducând percepția de continuitate partizană la MADR.",
        ],
        contra: [
          "Vizibilitate redusă în plen în legislatura curentă: luări de cuvânt la doar 5 puncte de sumar.",
          "Presa locală l-a criticat pentru votul împotriva unui proiect de reabilitare a sistemului de irigații.",
          "Mandatul de secretar de stat a durat sub un an și jumătate.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 14,
          activitate: 9,
          integritate: 19,
          total: 63,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Scarlat George (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=276&cam=2&leg=2024",
          },
          {
            titlu: "Agrointeligența — Scarlat, numit secretar de stat la MADR",
            url: "https://agrointel.ro/127286/george-scarlat-secretar-de-stat-madr",
          },
        ],
      },
      {
        nume: "Könczei Csaba",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Covasna, vicepreședinte al Comisiei pentru agricultură a Camerei Deputaților",
        profil:
          "Inginer în mecanică agricolă, director executiv al Direcției Agricole Județene Covasna timp de un deceniu (2010–2020), la al doilea mandat de deputat pe profil agricol.",
        activitate:
          "Vicepreședinte al Comisiei pentru agricultură; 66 de propuneri legislative inițiate în legislatura 2024, din care 7 promulgate legi — printre care schema de ajutor de stat de 15 euro/familie de albine pentru apicultori, adoptată în 2026; campanii documentate de reducere a birocrației pentru fermieri.",
        pro: [
          "Experiență administrativă directă în implementarea politicii agricole la firul ierbii: 10 ani director executiv al DAJ Covasna.",
          "Cea mai bună rată de transformare a inițiativelor în legi dintre candidații de pe această listă: 7 legi promulgate.",
          "Rezultat legislativ concret și recent: legea sprijinului pentru apicultori, adoptată în 2026.",
          "Profil tehnic, non-conflictual, capabil să treacă printr-un parlament fragmentat.",
        ],
        contra: [
          "Vizibilitate națională foarte scăzută: doar 6 luări de cuvânt în plen și nicio întrebare/interpelare în legislatura curentă.",
          "UDMR (~6% din voturi) ar fi suprareprezentată într-un guvern în care deține deja alte portofolii grele.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 14,
          activitate: 11,
          integritate: 20,
          total: 61,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Könczei Csaba (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=163&cam=2&leg=2024",
          },
          {
            titlu: "AGERPRES — inițiativa legislativă UDMR pentru sprijinirea apicultorilor",
            url: "https://agerpres.ro/viata-parlamentara/2026/03/06/covasna-initiativa-legislativa-a-udmr-pentru-sprijinirea-apicultorilor-cu-15-euro-pe-familia-de-albi--1534872",
          },
        ],
      },
    ],
    propunere: {
      nume: "Florin-Ionuț Barbu",
      motivare:
        "66 de puncte: aproape trei ani de mandat la MADR, expertiza ANIF pe irigații și susținerea PSD (27/35). Matieș (64) e rezerva imediată; anchetele de presă privind ANIF rămân penalizate (−5) și afișate. Könczei (61) pierde exclusiv pe susținere — UDMR are 4 puncte de partid față de 15.",
    },
  },
  {
    slug: "mediu",
    minister: "Ministrul Mediului, Apelor și Pădurilor",
    misiune:
      "Reorganizarea Romsilva (HG 123/2026) e contestată în instanță de sindicatele silvice, tăierile ilegale persistă, iar România are infringementuri europene pe calitatea aerului. Ministrul trebuie să ducă reforma la capăt fără să rupă dialogul cu sistemul silvic.",
    candidati: [
      {
        nume: "Diana Buzoianu",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Ministru al mediului, apelor și pădurilor în guvernul demis Bolojan (din iun. 2025, în prezent interimat); deputat de București",
        profil:
          "Juristă, la al doilea mandat de deputat; fost președinte al Comisiei pentru mediu și echilibru ecologic a Camerei (până în iunie 2025). A condus reorganizarea Romsilva, prima reformă structurală a regiei din ultimele decenii.",
        activitate:
          "Ca deputat în legislatura 2024: 31 de propuneri legislative inițiate, din care 7 promulgate legi, 7 întrebări și interpelări; ca ministru a dus în guvern HG privind reorganizarea Romsilva (adoptată în martie 2026) și a demarat restructurarea direcțiilor silvice.",
        pro: [
          "Singura din listă cu mandat ministerial în curs pe exact acest portofoliu și cu o reformă majoră livrată: reorganizarea Romsilva, aprobată prin HG în martie 2026.",
          "Activitate parlamentară de top pe mediu: fost președinte al comisiei de specialitate, 7 legi promulgate din 31 de inițiative.",
          "A rezistat presiunii sindicatelor și structurilor din silvicultură fără a retrage reforma — semnal de independență față de grupurile de interese din sector.",
          "Profil integru, fără dosare sau acuzații de corupție documentate.",
        ],
        contra: [
          "Reforma Romsilva este contestată în instanță de Federația Sindicatelor din Silvicultură „Silva”, care a cerut suspendarea HG nr. 123/2026.",
          "Procesul de adoptare a reformei a ridicat probleme de transparență: varianta publică prevedea 12 direcții silvice, cea finală 19.",
          "Conflict deschis cu personalul silvic (proteste la minister), care i-ar îngreuna implementarea politicilor forestiere.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 16,
          activitate: 13,
          integritate: 18,
          total: 67,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Buzoianu Diana-Anda (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=48&cam=2&leg=2024",
          },
          {
            titlu: "Ministerul Mediului — guvernul a aprobat reorganizarea Romsilva",
            url: "https://mmediu.ro/en/comunicare/comunicate-de-presa/diana-buzoianu-reforma-romsilva-e-o-promisiune-facuta-public-si-livrata-dupa-luni-de-zile-de-munca-guvernul-tocmai-a-aprobat-hotararea-privind-reorganizarea-romsilva/",
          },
          {
            titlu: "Jurnalul — „Reforma Buzoianu”, respinsă de pădurari; sindicaliștii merg în instanță",
            url: "https://jurnalul.ro/special-jurnalul/reforma-buzoianu-respinsa-padurari-sindicalisti-lectii-juridice-ministru-mediu-reforma-1024309.html",
          },
        ],
      },
      {
        nume: "Mircea Fechet",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Bacău, membru al Comisiei pentru mediu și echilibru ecologic și al Comisiei pentru afaceri europene",
        profil:
          "Fost ministru al mediului (iun. 2023 – iun. 2025) și, anterior, ani de zile secretar de stat în același minister; în mandat a dezvoltat SUMAL 2.0 pentru trasabilitatea lemnului și a majorat sprijinul pentru împăduririle private de la 456 la 640 euro/hectar.",
        activitate:
          "În legislatura 2024: 43 de propuneri legislative inițiate (5 promulgate), 9 întrebări și interpelări, luări de cuvânt la 35 de puncte de sumar; monitorizare activă a ministerului din opoziția de comisie, cu avertismente publice pe programul de împăduriri.",
        pro: [
          "Doi ani de mandat ministerial plin pe acest portofoliu, plus experiență îndelungată ca secretar de stat — cunoaște integral aparatul MMAP.",
          "Rezultate măsurabile: majorarea alocării pentru împăduriri la 640 euro/ha și dezvoltarea SUMAL 2.0.",
          "Activitate parlamentară de control consistentă după mandat: 9 întrebări/interpelări.",
          "Expertiză pe dosarele europene de mediu (membru al Comisiei pentru afaceri europene).",
        ],
        contra: [
          "Longevitatea sa în minister îl asociază cu un sistem în care tăierile ilegale și problemele de calitate a aerului au persistat.",
          "Schimb public de acuzații cu actuala conducere a ministerului („sabotaj instituțional”) — climat conflictual cu o parte a aparatului.",
          "Revenirea sa ar fi percepută ca restaurație PNL la un minister deținut de partid până în 2025.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 16,
          activitate: 11,
          integritate: 19,
          total: 67,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Fechet Mircea (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=104&cam=2&leg=2024",
          },
          {
            titlu: "G4Media — fostul ministru al Mediului avertizează asupra programului de împăduriri",
            url: "https://www.g4media.ro/fostul-ministru-al-mediului-constat-cu-dezamagire-ca-padurile-sunt-primele-pe-lista-de-taieri-mircea-fechet-apel-catre-actuala-conducere-in-conditiile-in-care-pierdem-in-fiecare-minut-50-mp-prin.html",
          },
        ],
      },
      {
        nume: "Tánczos Barna",
        partid: "UDMR",
        camera: "Senat",
        functieActuala:
          "Senator de Harghita, membru al Comisiei pentru mediu a Senatului; vicepremier în guvernul demis, ministru interimar al agriculturii din aprilie 2026",
        profil:
          "Fost ministru al mediului, apelor și pădurilor (2020–2023, guvernele Cîțu și Ciucă), fost secretar de stat în Ministerul Agriculturii (2010–2012); în guvernul Bolojan, vicepremier și ministru de finanțe.",
        activitate:
          "Membru al Comisiei pentru mediu a Senatului în legislatura 2024; în mandatul ministerial 2020–2023 a coordonat operaționalizarea SUMAL 2.0 și programele de economie circulară.",
        pro: [
          "Trei ani de mandat ministerial complet la Mediu (2020–2023), cu implementarea sistemului de trasabilitate a lemnului SUMAL 2.0.",
          "Cel mai versatil profil executiv din listă: mediu, finanțe, agricultură (interimar), vicepremier.",
          "Senator cu multiple mandate, negociator experimentat într-un parlament fără majoritate.",
          "Membru în exercițiu al comisiei de specialitate a Senatului.",
        ],
        contra: [
          "Mandatul său la Mediu a fost criticat de ONG-uri pentru gestionarea problemei urșilor și ritmul lent al combaterii tăierilor ilegale.",
          "Cumulul de funcții din 2025–2026 arată un profil mai degrabă de pompier politic decât de ministru dedicat unui singur domeniu.",
          "UDMR ar fi puternic suprareprezentată dacă ar primi și Mediul pe lângă alte portofolii vizate.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 15,
          activitate: 10,
          integritate: 17,
          total: 58,
        },
        surse: [
          {
            titlu: "Fișa oficială de senator — senat.ro",
            url: "https://www.senat.ro/FisaSenator.aspx?ParlamentarID=AD82D70D-0286-45A0-A3CC-E1DF3FA38144",
          },
          {
            titlu: "AGRO TV — Tánczos Barna preia interimar Ministerul Agriculturii",
            url: "https://agro-tv.ro/tanczos-barna-preia-ministerul-agriculturii-dupa-demisia-lui-florin-barbu-cine-este-noul-ministru-interimar-si-ce-urmeaza-pentru-fermieri/",
          },
        ],
      },
      {
        nume: "Silviu-Octavian Gurlui",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Iași, membru al Comisiei pentru mediu și echilibru ecologic, vicepreședinte al Comisiei pentru știință și tehnologie",
        profil:
          "Profesor universitar dr. habil. la Facultatea de Fizică a UAIC Iași, director al Laboratorului de Optică a Atmosferei, Spectroscopie și Laser, autor a peste 75 de lucrări indexate ISI; a construit singurul echipament din țară de monitorizare chimică a atmosferei până la 15 km altitudine.",
        activitate:
          "Unul dintre cei mai activi parlamentari ai legislaturii pe controlul executivului: 140 de întrebări și interpelări, 114 propuneri legislative inițiate (3 promulgate), membru a trei comisii permanente.",
        pro: [
          "Cea mai solidă competență științifică din Parlament pe calitatea aerului și poluare atmosferică — exact domeniul infringementurilor europene.",
          "Activitate parlamentară de control excepțională cantitativ: 140 de întrebări/interpelări.",
          "Recunoscut public ca activist de mediu și cercetător înainte de a intra în politică.",
          "Numirea unui om de știință din opoziția suveranistă ar da credibilitate echidistanței guvernului propus.",
        ],
        contra: [
          "Eficiență legislativă foarte scăzută: doar 3 din 114 inițiative devenite legi.",
          "Apartenența la AUR, partid cu poziții frecvent sceptice față de politicile climatice europene, e în tensiune cu profilul său științific.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 14,
          activitate: 13,
          integritate: 19,
          total: 70,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Gurlui Silviu-Octavian (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=136&cam=2&leg=2024",
          },
          {
            titlu: "Ziarul de Iași — curiosul caz al profesorului Gurlui: fizicianul activist vs. politicianul",
            url: "https://www.ziaruldeiasi.ro/stiri/curiosul-caz-al-profesorului-gurlui-pe-fizicianul-activist-de-mediu-il-stiti-dar-pe-politician--335861.html",
          },
        ],
      },
      {
        nume: "Bogdan Trif",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Sibiu, membru al Comisiei pentru mediu și echilibru ecologic, președinte PSD Sibiu",
        profil:
          "Inginer, fost comisar general al Gărzii Naționale de Mediu (2016–2018) și fost director al Agenției pentru Protecția Mediului Sibiu; fost ministru al turismului (2018–2019).",
        activitate:
          "Membru al Comisiei pentru mediu a Camerei în legislatura 2024; 34 de propuneri legislative inițiate, din care 7 promulgate legi; al treilea mandat consecutiv de deputat.",
        pro: [
          "Singurul candidat PSD cu carieră executivă în instituțiile de mediu propriu-zise: APM Sibiu și conducerea Gărzii Naționale de Mediu.",
          "Experiență ministerială anterioară (Turism, 2018–2019) — cunoaște mecanismele guvernării.",
          "Rată bună de finalizare legislativă: 7 legi promulgate din 34 de inițiative.",
          "Ar asigura reprezentarea celui mai votat partid (~22%) la un minister unde PSD nu a fost recent.",
        ],
        contra: [
          "Mandatul de ministru al turismului în guvernarea Dăncilă nu a lăsat realizări structurale notabile.",
          "Președinte de organizație județeană PSD — risc de politizare a instituțiilor de control de mediu.",
          "Activitatea sa în plen e dominată de declarații politice, nu de dezbatere legislativă pe mediu.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 13,
          activitate: 10,
          integritate: 17,
          total: 67,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Trif Bogdan Gheorghe (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=307&cam=2&leg=2024",
          },
          {
            titlu: "Ziare.com — cine este Bogdan Trif: inginer, fost comisar general al Gărzii de Mediu",
            url: "https://ziare.com/bogdan-gheorghe-trif/ministrul-turismului/cine-este-bogdan-trif-propus-ministru-al-turismului-inginer-si-comisar-general-al-garzii-nationale-de-mediu-1499237",
          },
        ],
      },
    ],
    propunere: {
      nume: "Mircea Fechet",
      motivare:
        "Triplă egalitate la 67 (Fechet, Buzoianu, Trif) — departajează integritatea: 19/20 la Fechet. Doi ani de mandat plin la MMAP plus ani de secretariat de stat. Gurlui punctează aici 70, dar e propus la Educație, unde are maximul (74); Buzoianu, cu reforma Romsilva livrată, rămâne rezerva imediată.",
    },
  },
  {
    slug: "dezvoltare-administratie",
    minister: "Ministrul Dezvoltării, Lucrărilor Publice și Administrației",
    misiune:
      "Cel mai mare buget de investiții locale din executiv (programul Anghel Saligny, criticat recurent pentru alocări discreționare), componenta de administrație din PNRR și reforma administrativ-teritorială amânată de toate guvernele.",
    candidati: [
      {
        nume: "Cseke Attila",
        partid: "UDMR",
        camera: "Senat",
        functieActuala:
          "Ministru al dezvoltării în guvernul demis Bolojan (numit dec. 2024, în prezent interimat); senator de Bihor",
        profil:
          "Jurist, unul dintre cei mai experimentați miniștri în funcțiune: a condus MDLPA în 2020–2023 și din nou din decembrie 2024; anterior ministru al sănătății (2009–2011); parlamentar de Bihor fără întrerupere din 2008.",
        activitate:
          "Senator în legislatura 2024; activitatea sa este preponderent guvernamentală: a gestionat programele naționale de investiții locale (inclusiv Anghel Saligny), fondurile pentru eficiență energetică a clădirilor și componenta de administrație din PNRR pe parcursul a două mandate la MDLPA.",
        pro: [
          "Circa cinci ani cumulați la conducerea exact acestui minister, sub patru premieri diferiți — competență instituțională de necontestat.",
          "Jurist cu expertiză în drept administrativ aplicat, autor al unor coduri și proceduri în administrație încă din 2009–2011.",
          "Reputație transpartinică de ministru tehnic, calm și negociabil — esențială într-un parlament fără majoritate.",
          "Continuitate pe proiectele PNRR de administrație și pe programele de investiții locale aflate în derulare.",
        ],
        contra: [
          "Programul Anghel Saligny, administrat de MDLPA în mandatele sale, a fost criticat constant pentru alocări discreționare către primării pe criterii politice.",
          "Longevitatea guvernamentală (ministru în patru guverne din 2009 încoace) îl face simbolul sistemului politic existent.",
          "UDMR (~6% din voturi) ar păstra unul dintre cele mai mari bugete de investiții — critică recurentă privind supraponderea partidului în executiv.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 19,
          activitate: 9,
          integritate: 17,
          total: 61,
        },
        surse: [
          {
            titlu: "HotNews — cine este Cseke Attila: ministru în trei guverne anterioare",
            url: "https://hotnews.ro/cine-este-cseke-attila-propus-ministru-al-dezvoltarii-in-guvernul-ciolacu-2-a-mai-fost-ministru-in-trei-guverne-1868057",
          },
          {
            titlu: "Profil oficial UDMR — Cseke Attila",
            url: "https://udmr.ro/profil/cseke-attila",
          },
        ],
      },
      {
        nume: "Simona Bucura-Oprescu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Argeș (al patrulea mandat), chestor al Camerei Deputaților; fost ministru al muncii (2023–2025)",
        profil:
          "Economistă, fost președinte al Comisiei pentru administrație publică a Camerei — unul dintre puținii parlamentari PSD cu specializare consecventă pe administrație publică de-a lungul a patru legislaturi (din 2012).",
        activitate:
          "Membru al Comisiei pentru administrație publică în legislatura 2024 (până în februarie 2026) și al Comisiei pentru afaceri europene; a condus comisia de administrație în legislatura trecută; aleasă chestor al Camerei în 2025.",
        pro: [
          "Doisprezece ani de specializare parlamentară pe administrație publică, inclusiv președinția comisiei de resort.",
          "Experiență guvernamentală reală: doi ani ministru al muncii, minister cu aparat și buget mari.",
          "Reprezintă partidul cel mai votat în 2024 (~22%).",
          "Poziție de conducere în Camera Deputaților (chestor) — semn de încredere transpartinică instituțională.",
        ],
        contra: [
          "Investigații de presă au semnalat studiile la Academia SRI, un doctorat dispărut ulterior din CV și apropierea de fostul „baron de Argeș” Constantin Nicolescu.",
          "Mandatul la Ministerul Muncii a fost marcat de întârzieri criticate public în recalcularea pensiilor.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 13,
          activitate: 10,
          integritate: 16,
          total: 66,
          penalizari: "−4 doctoratul dispărut din CV și studiile la Academia SRI, semnalate de presă",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Bucura-Oprescu Simona (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=40&cam=2&leg=2024",
          },
          {
            titlu: "G4Media — cine este Simona Bucura-Oprescu",
            url: "https://www.g4media.ro/cine-este-simona-bucura-oprescu-propusa-de-psd-ministru-al-muncii-a-studiat-la-academia-sri-laude-pentru-china-si-cerere-de-deschidere-in-pitesti-a-unui-institut-confucius-protejata-a-fostului-b.html",
          },
        ],
      },
      {
        nume: "Radu Mihaiu",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București, vicepreședinte al Comisiei pentru administrație publică, președinte al Comisiei pentru tehnologia informației",
        profil:
          "Antreprenor IT (firmă de aplicații digitale fondată în 2006), fost secretar de stat pentru digitalizare (2016) și primar al Sectorului 2 al Capitalei (2020–2024), unde a derulat 1.152 de proiecte într-un mandat, a comandat un audit extern și a redus cu 10% posturile din primărie.",
        activitate:
          "Vicepreședinte al comisiei de resort (administrație publică) și președinte al Comisiei IT&C; în legislatura 2024 are 49 de propuneri legislative inițiate (2 promulgate), cu focus pe digitalizarea administrației și urbanism.",
        pro: [
          "Experiență executivă directă de administrație locală la scară mare: primar al unui sector cu sute de mii de locuitori, cu reorganizare instituțională documentată.",
          "Profilul ideal pentru digitalizarea administrației — prioritate PNRR a MDLPA: antreprenor IT + fost secretar de stat pe digitalizare.",
          "Conduce două structuri parlamentare relevante simultan.",
          "Reputație de integritate și transparență (audituri externe, date deschise în mandatul de primar).",
        ],
        contra: [
          "A pierdut realegerea la Sectorul 2 în 2024 — susținere publică locală erodată.",
          "Bătălia juridică privind PUZ-ul Sectorului 2 arată limitele consolidării reformelor sale de urbanism.",
          "Presa economică i-a contestat creșterea averii după intrarea în politică, deși fără urmări judiciare.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 16,
          activitate: 11,
          integritate: 19,
          total: 66,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Mihaiu Radu-Nicolae (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=189&cam=2&leg=2024",
          },
          {
            titlu: "USR — Radu Nicolae Mihaiu (profil oficial)",
            url: "https://usr.ro/oameni/radu-nicolae-mihaiu",
          },
        ],
      },
      {
        nume: "Răzvan-Daniel Biro",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Mureș, vicepreședinte al Comisiei pentru administrație publică și amenajarea teritoriului",
        profil:
          "Cel mai tânăr candidat al listei (n. 1994), la primul mandat parlamentar, dar cu cea mai intensă activitate de control parlamentar pe administrație din comisie; lider județean AUR Mureș.",
        activitate:
          "Vicepreședinte al comisiei de resort; în legislatura 2024: 252 de întrebări și interpelări (recordul listei), 96 de propuneri legislative inițiate (1 promulgată); interpelări documentate privind blocarea proiectelor de apă-canal în comunele din Mureș.",
        pro: [
          "Activitate de control parlamentar fără egal pe acest domeniu: 252 de întrebări și interpelări, multe vizând exact investițiile locale și programele MDLPA.",
          "Vicepreședinte al comisiei de specialitate, validat instituțional în ciuda vârstei.",
          "Focalizare reală pe infrastructura rurală de bază (apă, canalizare), zona cea mai deficitară a dezvoltării locale.",
          "Ar reprezenta al doilea partid ca pondere electorală (AUR, ~18%).",
        ],
        contra: [
          "Eficiență legislativă minimă: o singură lege promulgată din 96 de inițiative.",
          "Și-a dat propriul partid în judecată pentru recuperarea cheltuielilor electorale — episod care ridică întrebări despre stabilitatea sa politică.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 8,
          activitate: 14,
          integritate: 20,
          total: 66,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Biro Daniel-Răzvan (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=27&cam=2&leg=2024",
          },
          {
            titlu: "AUR — interpelare: întârzierea proiectelor de apă și canalizare în Mureș",
            url: "https://partidulaur.ro/razvan-daniel-biro-intrebare-intarzierea-si-blocarea-proiectelor-de-apa-si-canalizare-in-comunitatile-rurale-din-judetul-mures/",
          },
        ],
      },
      {
        nume: "Verginia Vedinaș",
        partid: "S.O.S. România",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat, membru al Comisiei pentru administrație publică, președinte al Comisiei pentru constituționalitate",
        profil:
          "Profesor universitar doctor la Facultatea de Drept a Universității din București, autoarea principalului tratat de drept administrativ folosit în învățământul juridic românesc (11 ediții); consilier de conturi la Curtea de Conturi (2008–2017), fost senator (2004–2008).",
        activitate:
          "În legislatura 2024: luări de cuvânt la 132 de puncte de sumar în 82 de ședințe (cel mai activ vorbitor al listei), 41 de propuneri legislative inițiate (2 promulgate), 28 de întrebări și interpelări; prezidează Comisia pentru constituționalitate a Camerei.",
        pro: [
          "Autoritatea academică numărul unu a listei în chiar materia ministerului: dreptul administrativ și organizarea administrației publice.",
          "Nouă ani în controlul finanțelor publice locale la Curtea de Conturi — cunoaște exact mecanismele de risipă din administrație.",
          "Activitate parlamentară intensă și verificabilă (132 de luări de cuvânt, 28 de interpelări).",
          "Ar aduce în guvern formațiunea SOS (~7%), lărgind acoperirea spectrului politic.",
        ],
        contra: [
          "Beneficiară a unei pensii speciale de la Curtea de Conturi, în timp ce reforma pensiilor speciale este o temă-cheie a administrației — conflict de credibilitate documentat.",
          "Este conducătoarea de doctorat a judecătorului CCR Gheorghe Stan, relație semnalată de presă ca problematică în contextul blocării la CCR a reformei pensiilor speciale.",
          "Trecut politic la PRM și apartenența la un partid cu poziții extremiste contestă echidistanța numirii.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 17,
          activitate: 13,
          integritate: 9,
          total: 56,
          penalizari: "−5 pensia specială de la Curtea de Conturi, în conflict cu agenda reformei; −6 relația conducător–doctorand cu un judecător CCR pe dosarele pensiilor speciale",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Vedinaș Verginia (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=319&cam=2&leg=2024",
          },
          {
            titlu: "G4Media — judecătorul CCR Gheorghe Stan, doctorandul deputatei Vedinaș",
            url: "https://www.g4media.ro/judecatorul-ccr-gheorghe-stan-zis-geani-este-doctorandul-deputatei-verginia-vedinas-de-la-sos-formatiunea-condusa-de-extremista-pro-rusa-diana-sosoaca-vedinas-e-beneficiara-de-pensie-speciala-de-l.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Răzvan-Daniel Biro",
      motivare:
        "Triplă egalitate la 66 (Biro, Mihaiu, Bucura-Oprescu) — departajează integritatea: 20/20 la Biro, singurul fără nicio penalizare. Cele 252 de interpelări, recordul Parlamentului, sunt exact pe investițiile locale și programele MDLPA. Cseke (61) pierde pe susținere; Mihaiu rămâne rezerva imediată.",
    },
  },
  {
    slug: "munca",
    minister: "Ministrul Muncii, Familiei și Solidarității Sociale",
    misiune:
      "Pensiile nu au fost indexate doi ani la rând (2025, 2026), CASS se aplică pensiilor de peste 3.000 de lei, iar reforma pensiilor — jalon PNRR — e neîncheiată. Portofoliul cu cel mai direct impact social al întregului guvern.",
    candidati: [
      {
        nume: "Petre-Florin Manole",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de București, membru al Comisiei pentru muncă și protecție socială; ministru al Muncii în guvernul Bolojan (iun. 2025 – apr. 2026, demisionat la retragerea PSD)",
        profil:
          "Absolvent de istorie la Universitatea din București, cu activitate îndelungată în apărarea drepturilor omului; primul ministru de etnie romă din istoria post-decembristă a României; deputat ales în 2016 și reales în decembrie 2024.",
        activitate:
          "În legislatura curentă: 8 propuneri legislative inițiate, din care 3 promulgate legi; președinte al Delegației Parlamentului României la Adunarea Parlamentară a NATO; a condus Comisia specială comună pentru combaterea traficului de persoane.",
        pro: [
          "Singura experiență executivă recentă exact pe acest portofoliu: a condus Ministerul Muncii aproape un an, în plină criză bugetară.",
          "Membru al comisiei de specialitate, cu rată bună de promulgare a inițiativelor (3 din 8).",
          "Profil simbolic de incluziune socială, relevant pentru un minister al solidarității sociale.",
          "Experiență de conducere parlamentară: președinte al Delegației la AP NATO.",
        ],
        contra: [
          "Bilanț criticat la Ministerul Muncii: pensiile nu au fost indexate la 1 ianuarie 2025 și 1 ianuarie 2026, iar CASS a fost introdus la pensiile de peste 3.000 lei în mandatul guvernului din care a făcut parte.",
          "A părăsit guvernul printr-o decizie de partid — semne de întrebare privind independența față de linia PSD.",
          "Activitate parlamentară redusă în legislatura curentă, explicabilă parțial prin mandatul de ministru.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 12,
          activitate: 11,
          integritate: 18,
          total: 68,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Manole Petre-Florin (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=177&cam=2&leg=2024",
          },
          {
            titlu: "AGERPRES — Petre-Florin Manole, fișă biografică",
            url: "https://agerpres.ro/documentare/2025/06/22/petre-florin-manole-propus-ministru-al-muncii-fisa-biografica--1461658",
          },
          {
            titlu: "Newsweek România — bilanțul ministrului Muncii",
            url: "https://newsweek.ro/social/nu-a-reusit-sa-creasca-pensie-cum-a-pus-in-pericol-indexarea-din-2027-bilantul-ministrului-muncii",
          },
        ],
      },
      {
        nume: "Raluca Turcan",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputată de Sibiu, vicelider al grupului PNL, membră a Comisiei pentru muncă și protecție socială",
        profil:
          "Politician cu dublă experiență ministerială pe domeniile sociale și culturale: ministru al Muncii și Protecției Sociale (dec. 2020 – nov. 2021) și ministru al Culturii (2023–2025); fost vicepremier; deputată de Sibiu din 2004.",
        activitate:
          "Cea mai intensă activitate parlamentară dintre candidații analizați: 66 propuneri legislative inițiate (12 promulgate legi), 23 de întrebări și interpelări, luări de cuvânt la 327 puncte de sumar; membră simultan în Comisiile pentru muncă, învățământ și cultură.",
        pro: [
          "Experiență executivă directă la Ministerul Muncii (2020–2021), inclusiv în gestionarea măsurilor sociale din pandemie, plus mandat de vicepremier.",
          "Activitate parlamentară verificabilă de top: 66 inițiative, 12 legi promulgate, 23 interpelări.",
          "Membră a comisiei de specialitate, deputată din 2004 — una dintre cele mai experimentate femei politician din Parlament.",
          "Notorietate publică ridicată și experiență de negociere guvernamentală.",
        ],
        contra: [
          "Mandatul la Ministerul Muncii s-a încheiat la remanierea din 2021, pe fondul criticilor privind ritmul recalculării pensiilor.",
          "Profil puternic partizan (vicelider PNL, fost președinte interimar al partidului).",
          "Prezența simultană în trei comisii permanente diluează specializarea strictă pe muncă.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 15,
          activitate: 14,
          integritate: 19,
          total: 69,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Turcan Raluca (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=308&cam=2&leg=2024",
          },
          {
            titlu: "gov.ro — Raluca Turcan, ministrul Muncii și Protecției Sociale (2020–2021)",
            url: "https://gov.ro/ro/guvernul/cabinetul-de-ministri/ministrul-muncii-i-protectiei-sociale1624348861",
          },
        ],
      },
      {
        nume: "Csép Éva-Andrea",
        partid: "UDMR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputată de Mureș, vicepreședintă a Comisiei pentru muncă și protecție socială",
        profil:
          "Deputată din 2016, specializată consecvent în politici sociale: protecția copilului, sprijinul tinerilor post-instituționalizați, politici de familie și combaterea violenței domestice.",
        activitate:
          "A treia legislatură consecutivă în Comisia pentru muncă (acum vicepreședintă); în legislatura curentă: 70 propuneri legislative inițiate, din care 15 promulgate legi — una dintre cele mai bune rate din comisie; vicepreședintă a Comisiei speciale „România fără violență domestică”.",
        pro: [
          "Cel mai solid palmares legislativ pe domeniul social dintre membrii comisiei: 15 legi promulgate în legislatura curentă.",
          "Continuitate și specializare: aproape un deceniu exclusiv pe muncă, familie și protecție socială.",
          "Fără controverse publice majore documentate — profil de integritate.",
          "Un ministru UDMR la un portofoliu social ar reflecta ponderea electorală a Uniunii fără polarizare politică.",
        ],
        contra: [
          "Notorietate națională redusă în afara comunității maghiare și a mediului de specialitate.",
          "UDMR a susținut coaliția Bolojan în perioada măsurilor de austeritate socială criticate de sindicate și pensionari.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 13,
          activitate: 13,
          integritate: 20,
          total: 62,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Csép Éva-Andrea (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=85&cam=2&leg=2024",
          },
          {
            titlu: "UDMR — profil Csép Éva Andrea",
            url: "https://udmr.ro/profil/csep-eva-andrea",
          },
        ],
      },
      {
        nume: "Dumitrina Mitrea",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputată de Neamț, membră a Comisiei pentru muncă și protecție socială",
        profil:
          "Economistă (ASE, management economic), cu carieră reală în sectorul privat de asigurări și management la ING Asigurări de Viață și Allianz Țiriac; deputată din 2020, la al doilea mandat.",
        activitate:
          "Membră a Comisiei pentru muncă și protecție socială (și în mandatul 2020–2024) și a Delegației la APCE; în legislatura curentă: 96 propuneri legislative inițiate (3 promulgate), 12 întrebări și interpelări, 14 moțiuni semnate.",
        pro: [
          "Pregătire economică solidă (ASE) și experiență managerială privată în asigurări — relevantă pentru sistemul de pensii și asigurări sociale.",
          "Al doilea mandat parlamentar, cu experiență anterioară în aceeași comisie de specialitate.",
          "Foarte activă legislativ (96 inițiative) și în controlul parlamentar (12 interpelări).",
          "Ar reprezenta al doilea partid ca pondere electorală (~18%).",
        ],
        contra: [
          "Eficiență legislativă scăzută: doar 3 din 96 de propuneri devenite legi.",
          "Fără experiență executivă în administrația publică centrală.",
          "Activitate preponderent de opoziție (14 moțiuni), fără politici publice asumate cu rezultate concrete.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 10,
          activitate: 11,
          integritate: 20,
          total: 65,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Mitrea Dumitrina (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=200&cam=2&leg=2024",
          },
          {
            titlu: "Mesagerul de Neamț — Dumitrina Mitrea, de la asigurări în Camera Deputaților",
            url: "https://mesagerulneamt.ro/2024/12/cine-ne-va-reprezenta-in-parlament-in-urmatorii-4-ani-dumitrina-mitrea-aur-de-la-asigurari-in-camera-deputatilor/",
          },
        ],
      },
      {
        nume: "Silviu Vexler",
        partid: "Minorități (Federația Comunităților Evreiești din România)",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat al minorității evreiești, vicepreședinte al Comisiei pentru muncă și protecție socială; președinte al FCER",
        profil:
          "Deputat din 2016, președinte al Federației Comunităților Evreiești din România, autor al unor legi sociale cu impact direct: majorarea drepturilor și indemnizațiilor pentru supraviețuitorii Holocaustului, extinse asupra tuturor categoriilor de persecutați; decorat cu Ordinul Național „Pentru Merit”.",
        activitate:
          "Vicepreședinte al Comisiei pentru muncă și protecție socială; în legislatura curentă: 19 propuneri legislative inițiate, din care 5 promulgate legi; autor al legii privind combaterea extremismului („Legea Vexler”), adoptată în 2025.",
        pro: [
          "Palmares legislativ concret în zona drepturilor sociale și a indemnizațiilor reparatorii, cu legi promulgate și aplicate.",
          "Vicepreședinte al comisiei de specialitate, cu reputație transpartinică rară în Parlament.",
          "Independent de partidele mari — profil ideal pentru un guvern echidistant.",
          "Experiență dovedită de conducere instituțională ca președinte al FCER.",
        ],
        contra: [
          "Activitate redusă de control parlamentar (doar 2 întrebări și interpelări în legislatura curentă).",
          "Profilul său legislativ este centrat pe legislație reparatorie, nu pe piața muncii sau sistemul de pensii în ansamblu.",
          "„Legea Vexler” a generat o dispută publică majoră în 2025, obiecțiile președintelui fiind respinse de Parlament — subiect de controversă documentat.",
        ],
        punctaj: {
          sustinere: 16,
          competenta: 14,
          activitate: 11,
          integritate: 19,
          total: 60,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Vexler Silviu (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=322&cam=2&leg=2024",
          },
          {
            titlu: "Europa Liberă — miza scandalului adoptării Legii Vexler",
            url: "https://romania.europalibera.org/a/miza-scandalului-adoptarii-legii-vexler-pentru-combaterea-extremismului/33626603.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Raluca Turcan",
      motivare:
        "69 de puncte, la un punct de Manole (68) — marja grilei, decisă de competență (15/25 față de 12/25: mandat la Muncă plus vicepremier, față de un an cu pensii neindexate) și de cele 12 legi promulgate. Csép (62) rămâne profilul cel mai curat din listă.",
    },
  },
  {
    slug: "cultura",
    minister: "Ministrul Culturii",
    misiune:
      "Alocarea pentru cultură a ajuns la 0,07% din PIB după anul de austeritate, instituțiile de patrimoniu sunt subfinanțate cronic, iar sectorul cultural independent cere de ani de zile o reformă a mecanismelor de finanțare.",
    candidati: [
      {
        nume: "Gigel Știrbu",
        partid: "PNL",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Olt, vicelider al grupului PNL, membru al Comisiei pentru cultură, arte și mijloace de informare în masă",
        profil:
          "Fost ministru al Culturii (dec. 2013 – mar. 2014), fost secretar de stat în Ministerul Culturii (2007–2008) și fost președinte al Comisiei pentru cultură a Camerei; doctor în istorie, autor al unor volume despre patrimoniul religios; deputat fără întrerupere din 2008.",
        activitate:
          "Membru al Comisiei pentru cultură; în legislatura curentă: 38 propuneri legislative inițiate, din care 7 promulgate legi, 5 întrebări și interpelări; membru al Delegației la Adunarea Parlamentară a Francofoniei.",
        pro: [
          "Combinație rară de experiență executivă (ministru și secretar de stat la Cultură) și parlamentară (cinci mandate, fost președinte al comisiei de specialitate).",
          "Pregătire academică relevantă: doctorat în istorie și lucrări publicate despre patrimoniu.",
          "7 legi promulgate în legislatura curentă — eficiență legislativă peste media comisiei.",
          "Profil necontroversat, fără dosare sau scandaluri publice documentate.",
        ],
        contra: [
          "Mandatul de ministru a durat sub trei luni (guvernul Ponta II), fără timp pentru reforme structurale.",
          "Activitate redusă în plen în legislatura curentă (luări de cuvânt la doar 6 puncte de sumar).",
          "Carieră de politician de partid de peste 20 de ani, inclusiv funcția curentă de vicelider PNL.",
        ],
        punctaj: {
          sustinere: 21,
          competenta: 14,
          activitate: 11,
          integritate: 20,
          total: 66,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Știrbu Gigel-Sorinel (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=297&cam=2&leg=2024",
          },
          {
            titlu: "Mediafax — cine este Gigel Știrbu, propunerea PNL pentru Ministerul Culturii",
            url: "https://www.mediafax.ro/politic/biografie-cine-este-gigel-stirbu-propunerea-pnl-pentru-ministerul-culturii-11765919",
          },
        ],
      },
      {
        nume: "Ionuț Vulpescu",
        partid: "PSD",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Ilfov, vicepreședinte al Comisiei pentru cultură, arte și mijloace de informare în masă",
        profil:
          "De două ori ministru al Culturii (2014–2015 și 2017–2018), licențiat în teologie ortodoxă, cu doctorat în filosofie la Universitatea din București; eseist și editorialist.",
        activitate:
          "Vicepreședinte al Comisiei pentru cultură și președinte al Delegației Camerei la Adunarea Interparlamentară a Ortodoxiei; în legislatura curentă: 14 propuneri legislative inițiate, din care 3 promulgate legi.",
        pro: [
          "Cea mai consistentă experiență executivă pe acest portofoliu dintre membrii comisiei: două mandate complete de ministru al Culturii.",
          "Vicepreședinte în exercițiu al comisiei de specialitate.",
          "Pregătire academică solidă (doctorat în filosofie) și operă publicistică în domeniul cultural.",
          "Cunoaște în detaliu instituțiile din subordinea ministerului și mecanismele de finanțare a culturii.",
        ],
        contra: [
          "Activitate aproape nulă în plen în legislatura curentă: luări de cuvânt la un singur punct de sumar și nicio întrebare sau interpelare.",
          "Asociere politică strânsă și de durată cu PSD (fost consilier prezidențial al lui Ion Iliescu).",
          "Mandatele sale ministeriale nu au produs reformele structurale cerute de sectorul cultural independent.",
        ],
        punctaj: {
          sustinere: 27,
          competenta: 16,
          activitate: 8,
          integritate: 19,
          total: 70,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Vulpescu Ioan (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=324&cam=2&leg=2024",
          },
          {
            titlu: "HotNews — profil: cine este Ionuț Vulpescu",
            url: "https://www.hotnews.ro/stiri-esential-21507911-profil-cine-este-ionut-vulpescu-propus-psd-conducerea-ministerului-culturii.htm",
          },
        ],
      },
      {
        nume: "Mihail Neamțu",
        partid: "AUR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Bihor, președinte al Comisiei pentru cultură, arte și mijloace de informare în masă",
        profil:
          "Teolog și eseist, doctor al King's College London (2008), cu studii la Babeș-Bolyai, LMU München și Durham; autor a numeroase volume de eseistică religioasă și politică.",
        activitate:
          "Președinte al Comisiei pentru cultură și membru al Comisiei pentru politică externă și al Comisiei comune pentru relația cu UNESCO; în legislatura curentă: 18 propuneri legislative (2 promulgate), 6 întrebări și interpelări, luări de cuvânt la 32 puncte de sumar.",
        pro: [
          "Pregătire academică de elită în domeniul umanist: doctorat la King's College London și operă publicată consistentă.",
          "Conduce comisia de specialitate a Camerei — cunoaște agenda legislativă curentă a culturii.",
          "Notorietate publică ridicată ca autor și conferențiar.",
          "Reprezintă al doilea partid ca pondere electorală (~18%).",
        ],
        contra: [
          "Anchetă de presă documentată (Context.ro): a folosit sala Comisiei de cultură pentru evenimente cu caracter de partid; USR i-a cerut oficial demiterea de la șefia comisiei.",
          "A recunoscut public că a primit 500 de euro de la Bogdan Peșchir, finanțatorul campaniei online a lui Călin Georgescu.",
          "Portret critic în presă: acuzații de dezinformare și declarații controversate la adresa unor lideri europeni.",
        ],
        punctaj: {
          sustinere: 24,
          competenta: 13,
          activitate: 11,
          integritate: 13,
          total: 61,
          penalizari: "−4 folosirea sălii comisiei pentru evenimente de partid (Context.ro); −3 suma primită de la finanțatorul campaniei online Georgescu",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Neamțu George-Mihail (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=224&cam=2&leg=2024",
          },
          {
            titlu: "Context.ro — propagandă pe banii statului în Parlament",
            url: "https://context.ro/propaganda-pe-banii-statului-in-parlament-mihail-neamtu-a-transformat-sala-comisiei-de-cultura-a-camerei-deputatilor-in-salon-de-evenimente-aur/",
          },
          {
            titlu: "Digi24 — portretul lui Mihail Neamțu, președintele Comisiei de Cultură",
            url: "https://www.digi24.ro/stiri/actualitate/politica/portretul-lui-mihail-neamtu-noul-presedinte-al-comisiei-de-cultura-cunoscut-pentru-dezinformari-si-acuzat-de-propaganda-legionara-3058837",
          },
        ],
      },
      {
        nume: "George Gima",
        partid: "USR",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Constanța, vicepreședinte al Comisiei pentru cultură, arte și mijloace de informare în masă (din feb. 2025)",
        profil:
          "Economist specializat în relații economice internaționale, bursier al guvernului francez la Sciences Po Paris; a lucrat un deceniu în managementul riscului pentru KPMG Paris, Banca Mondială și Banca Centrală Europeană; fost director de cabinet al ministrului Justiției (2021).",
        activitate:
          "Vicepreședinte al Comisiei pentru cultură din februarie 2025, membru al Comisiei pentru politică externă și al Comisiei comune pentru relația cu UNESCO; în legislatura curentă: 87 propuneri legislative inițiate, din care 7 promulgate legi.",
        pro: [
          "Una dintre cele mai ridicate activități legislative din comisie: 87 inițiative, 7 legi promulgate, deși este la primul mandat.",
          "Vicepreședinte al comisiei de specialitate și membru al Comisiei UNESCO — direct relevant pentru dosarele de patrimoniu.",
          "Experiență internațională de management instituțional și financiar (KPMG, Banca Mondială, BCE), utilă pentru reformarea finanțării culturii.",
          "Fără controverse publice documentate.",
        ],
        contra: [
          "Activitate slabă de control parlamentar (doar 4 întrebări și interpelări).",
          "Notorietate publică națională redusă.",
        ],
        punctaj: {
          sustinere: 20,
          competenta: 11,
          activitate: 11,
          integritate: 20,
          total: 62,
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Gima George (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=125&cam=2&leg=2024",
          },
          {
            titlu: "USR — George Gima",
            url: "https://usr.ro/oameni/george-gima",
          },
        ],
      },
      {
        nume: "Tudor Ionescu",
        partid: "S.O.S. România",
        camera: "Camera Deputaților",
        functieActuala:
          "Deputat de Argeș, membru al Comisiei pentru cultură (din nov. 2025), secretar al Comisiei pentru constituționalitate",
        profil:
          "Jurist, deputat la primul mandat, fost vicelider al grupului parlamentar SOS România; anterior intrării în Parlament a fost fondator și lider al organizației naționaliste Noua Dreaptă, activitate amplu documentată de presă.",
        activitate:
          "Membru în cinci comisii, inclusiv cultură, învățământ și Comisia comună pentru relația cu UNESCO; printre cei mai activi deputați SOS: 59 propuneri legislative inițiate (1 promulgată), 19 întrebări și interpelări, luări de cuvânt la 59 puncte de sumar.",
        pro: [
          "Activitate parlamentară cantitativ ridicată: 19 interpelări și prezență constantă la dezbateri.",
          "Membru al comisiei de specialitate și al Comisiei UNESCO.",
          "Pregătire juridică, utilă în legislația patrimoniului.",
          "Ar asigura reprezentarea SOS România (~7% din voturi).",
        ],
        contra: [
          "Fondator și lider de lungă durată al organizației de extremă dreapta Noua Dreaptă, cu participare documentată la manifestații ultranaționaliste — incompatibil cu reprezentarea diversității culturale.",
          "Eficiență legislativă foarte scăzută: o singură lege promulgată din 59 de inițiative.",
          "Membru al Comisiei pentru cultură doar din noiembrie 2025, fără expertiză anterioară în administrarea culturii.",
        ],
        punctaj: {
          sustinere: 17,
          competenta: 8,
          activitate: 11,
          integritate: 12,
          total: 48,
          penalizari: "−8 fondator și lider al organizației extremiste Noua Dreaptă",
        },
        surse: [
          {
            titlu: "Profil oficial cdep.ro — Ionescu Tudor (legislatura 2024)",
            url: "https://www.cdep.ro/ords/pls/parlam/structura2015.mp?idm=152&cam=2&leg=2024",
          },
          {
            titlu: "G4Media — liderul Noua Dreaptă, Tudor Ionescu, în Parlament pe listele SOS",
            url: "https://www.g4media.ro/printre-cei-mai-radicali-extremisti-din-romania-tudor-ionescu-liderul-formatiunii-noua-dreapta-ocupa-pentru-prima-data-un-loc-in-parlament-de-pe-listele-partidului-sos.html",
          },
        ],
      },
    ],
    propunere: {
      nume: "Ionuț Vulpescu",
      motivare:
        "70 de puncte: două mandate complete de ministru al Culturii, doctorat în filosofie și susținerea celui mai votat partid (27/35). Activitatea aproape nulă din legislatura curentă rămâne la contra; Știrbu (66), cu 7 legi promulgate și integritate maximă, este rezerva imediată.",
    },
  },
];

export function getPozitie(slug: string): PozitieGuvern | undefined {
  return pozitiiGuvern.find((p) => p.slug === slug);
}

/** Slug ASCII pentru numele unei persoane (aceeași logică folosită de scripts/poze-resolve.mjs). */
export function slugNume(nume: string): string {
  return nume
    .toLowerCase()
    .replaceAll(/[ăâá]/g, "a")
    .replaceAll(/[î]/g, "i")
    .replaceAll(/[șş]/g, "s")
    .replaceAll(/[țţ]/g, "t")
    .replaceAll(/[éè]/g, "e")
    .replaceAll(/[ó]/g, "o")
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");
}

/** Calea către ilustrația editorială a persoanei, dacă a fost generată (vezi scripts/genereaza-ilustratii.mjs). */
export function ilustratiePentru(nume: string): string | null {
  const s = slugNume(nume);
  return (ilustratii as string[]).includes(s) ? `/ilustratii/${s}.jpg` : null;
}

/** Normalizează afilierea la eticheta principală, pentru statistica de transparență. */
export function partidPrincipal(partid: string): string {
  const p = partid.toLowerCase();
  if (p.startsWith("psd")) return "PSD";
  if (p.startsWith("aur")) return "AUR";
  if (p.startsWith("pnl")) return "PNL";
  if (p.startsWith("usr")) return "USR";
  if (p.startsWith("udmr")) return "UDMR";
  if (p.includes("sos") || p.includes("s.o.s")) return "SOS";
  if (p.startsWith("pot") || p.includes("lista pot")) return "POT";
  if (p.includes("minorit")) return "Minorități";
  return "Independenți / tehnocrați";
}

/** Distribuția candidaților (sau a propunerilor) pe partide — afișată public, ca garanție de echilibru. */
export function distributiePartide(doarPropuneri = false): { partid: string; numar: number }[] {
  const contor = new Map<string, number>();
  for (const poz of pozitiiGuvern) {
    const lista = doarPropuneri
      ? poz.candidati.filter((c) => c.nume === poz.propunere.nume)
      : poz.candidati;
    for (const c of lista) {
      const cheie = partidPrincipal(c.partid);
      contor.set(cheie, (contor.get(cheie) ?? 0) + 1);
    }
  }
  return [...contor.entries()]
    .map(([partid, numar]) => ({ partid, numar }))
    .sort((a, b) => b.numar - a.numar);
}
