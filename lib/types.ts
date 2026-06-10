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
  /** Notă 1–10: cât de aliniat e cu interesul public, pe baza faptelor de până acum */
  evaluare: { nota: number; motivare: string };
  surse: Sursa[];
}
