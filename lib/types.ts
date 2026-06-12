export type Institutie =
  | "Parlament"
  | "Guvern"
  | "Președinție"
  | "CCR"
  | "CSAT";

export type Verdict = "favorabil" | "defavorabil" | "mixt";

export type VotPozitie = "pentru" | "contra" | "abținere";

export type Aliniere = "aliniat" | "divergent" | "parțial" | "fără-vot";

export interface Sursa {
  titlu: string;
  url: string;
}

export interface VotParalel {
  /** Cum ar fi votat guvernul paralel, strict pe interesul țării și al cetățeanului */
  vot: VotPozitie;
  verdict: Verdict;
  /** Scor net pentru țară și cetățean, de la -10 (foarte dăunător) la +10 (foarte benefic) */
  scor: number;
  motivare: string;
}

export interface VotReal {
  rezultat: string;
  detalii?: string;
  pePartide?: string;
  /** Cifrele oficiale ale votului, pentru afișare vizuală */
  cifre?: { pentru: number; contra: number; abtineri: number };
}

export interface Decizie {
  slug: string;
  titlu: string;
  data: string;
  institutie: Institutie;
  domenii: string[];
  rezumat: string;
  explicatie: string;
  pro: string[];
  contra: string[];
  votParalel: VotParalel;
  votReal: VotReal | null;
  aliniere: Aliniere;
  verdictFinal: string;
  controverse?: string[];
  surse: Sursa[];
}

export type CameraParlament = "Camera Deputaților" | "Senat" | "neparlamentar";

/**
 * Grila de punctare a candidaților (max. 100), aplicată identic tuturor.
 * Susținerea politică — votul poporului — are cea mai mare pondere: un guvern există
 * doar dacă poate fi votat. Absența unei funcții anterioare nu se penalizează nicăieri.
 * Reguli: propunerea = totalul maxim; la egalitate decide integritatea; un candidat
 * prezent pe mai multe poziții e propus doar acolo unde are punctajul lui maxim.
 */
export interface PunctajCandidat {
  /**
   * Susținere politică — votul poporului. Max 35 (cea mai mare pondere):
   * mandat direct de la electorat (parlamentar ales în dec. 2024 = 12; europarlamentar = 10;
   * fost ales = 4) + votul pentru partidul care îl susține (PSD 15, AUR 12, PNL 9, USR 8,
   * SOS 5, POT 4, UDMR 4, minorități 2; independent susținut demonstrat de un partid =
   * jumătate din punctele partidului) + capital electoral personal demonstrat (0–8).
   */
  sustinere: number;
  /** Competență în domeniu: pregătire + carieră și realizări + livrări verificabile la vârf. Max 25. */
  competenta: number;
  /** Activitate verificabilă: funcții în comisii/instituții + producție legislativă sau echivalent + control/expertiză publică. Max 20. */
  activitate: number;
  /** Integritate: pornește de la 20; scad doar penalizările documentate. Max 20. */
  integritate: number;
  total: number;
  /** Penalizările semnificative de integritate, când există */
  penalizari?: string;
}

export interface CandidatGuvern {
  nume: string;
  /** Partidul pe ale cărui liste a fost ales / afilierea actuală — doar fapt, nu etichetă */
  partid: string;
  camera: CameraParlament;
  functieActuala: string;
  /** Background profesional: studii, carieră, realizări în domeniu */
  profil: string;
  /** Activitate concretă: comisii, interpelări, propuneri legislative — sau echivalentul din afara Parlamentului */
  activitate: string;
  pro: string[];
  contra: string[];
  punctaj: PunctajCandidat;
  surse: Sursa[];
}

export interface PozitieGuvern {
  slug: string;
  minister: string;
  /** Mizele portofoliului în contextul actual */
  misiune: string;
  /** 5 candidați, din Parlament și din afara lui */
  candidati: CandidatGuvern[];
  /** Alegerea guvernului paralel = punctajul maxim pe grilă, cu motivare publică */
  propunere: { nume: string; motivare: string };
}

export type StatusPromisiune = "livrat" | "parțial" | "nelivrat" | "în curs";

export interface Actor {
  slug: string;
  nume: string;
  functie: string;
  partid?: string;
  dinCand?: string;
  rezumat: string;
  actiuniRecente: { data: string; text: string }[];
  promisiuniVsFapte: {
    promisiune: string;
    status: StatusPromisiune;
    detalii: string;
  }[];
  controverse: string[];
  pozitionare: { tema: string; pozitie: string }[];
  /** @deprecated Nu se mai afișează și nu se mai actualizează — notele pentru oameni sunt etichete. */
  evaluare?: { nota: number; motivare: string };
  surse: Sursa[];
}
