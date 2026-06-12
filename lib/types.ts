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
 * Absența unei funcții anterioare nu se penalizează nicăieri — cine nu a condus încă
 * pornește de la zero doar la „livrări", nu cu minus.
 */
export interface PunctajCandidat {
  /** Competență în domeniu: pregătire (10) + carieră și realizări (20) + livrări verificabile la vârf (10). Max 40. */
  competenta: number;
  /** Activitate verificabilă: funcții în comisii/instituții (10) + producție legislativă sau echivalent (10) + control/expertiză publică (10). Max 30. */
  activitate: number;
  /** Integritate: pornește de la 30; scad doar penalizările documentate. Max 30. */
  integritate: number;
  total: number;
  /** Penalizările semnificative de integritate (afișate când integritate ≤ 24) */
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
