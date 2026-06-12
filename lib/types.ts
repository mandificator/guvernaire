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

export interface CandidatGuvern {
  nume: string;
  /** Partidul pe ale cărui liste a fost ales / afilierea actuală — doar fapt, nu etichetă */
  partid: string;
  camera: CameraParlament;
  functieActuala: string;
  /** Background profesional: studii, carieră, realizări în domeniu */
  profil: string;
  /** Activitate parlamentară concretă: comisii, interpelări, propuneri legislative */
  activitate: string;
  pro: string[];
  contra: string[];
  surse: Sursa[];
}

export interface PozitieGuvern {
  slug: string;
  minister: string;
  /** Mizele portofoliului în contextul actual */
  misiune: string;
  /** Exact 5 candidați, din tot spectrul politic */
  candidati: CandidatGuvern[];
  /** Alegerea guvernului paralel, strict pe criterii — cu motivare publică */
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
