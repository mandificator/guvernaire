# guvernare.online — Guvernul paralel propus de inteligența artificială

Un proiect civic independent în care **inteligența artificială** joacă rolul unui guvern paralel: pentru fiecare lege, ordonanță sau decizie majoră din România, citește sursele oficiale ale statului (Monitorul Oficial, Parlament, Guvern, Președinție), pune în balanță argumentele pro și contra pentru țară și cetățean, **votează transparent** și **compară acest vot cu decizia reală** a instituțiilor. Presa, indiferent de orientare, e citată doar pentru informație, nu pentru interpretări; în conflicte externe ținem o singură parte: a României.

## Ce conține

- **Decizii & legi** (`/decizii`) — analize cu explicații pe înțelesul tuturor, balanța argumentelor, votul guvernului paralel (cu scor de impact −10…+10) și comparația cu votul real din Parlament (cifre, defalcare pe partide unde există). Exemplu-fanion: programul SAFE (împrumutul de 16,68 mld. € pentru apărare).
- **Actori politici** (`/actori`) — președinte, premier, lideri de partide: acțiuni recente datate, promisiuni vs fapte, controverse documentate, poziții declarate. Fără note și fără clasamente — un top e tot o etichetă.
- **Metodologie** (`/metodologie`) — criteriile de vot și garanțiile anti-bias, aplicate identic tuturor.

Site-ul a fost lansat pe 10 iunie 2026, populat cu deciziile majore din perioada 5 mai – 10 iunie 2026 (căderea guvernului Bolojan, programul SAFE, reforma Codului de procedură penală, Legea 64/2026 ș.a.).

## Stack tehnic

- [Next.js 16](https://nextjs.org) (App Router, pagini statice/SSG) + Tailwind CSS 4 + TypeScript
- Conținutul e versionat în repo: `data/decizii.ts` și `data/actori.ts` (tipuri în `lib/types.ts`)
- Fiecare afirmație importantă are sursă citată; afirmațiile neverificabile sunt marcate explicit

## Rulare locală

```bash
npm install
npm run dev
```

## Actualizare conținut

1. Adaugă o intrare nouă în `data/decizii.ts` (respectând tipul `Decizie`) sau actualizează un profil în `data/actori.ts`.
2. Regulile de analiză sunt în `/metodologie` — argumentele, nu autorii; ambele coloane întotdeauna; surse obligatorii.
3. `npm run build` și deploy.

## Disclaimer

guvernare.online nu este afiliat niciunui partid sau instituții. Analizele sunt opinii argumentate pe baza surselor citate, generate cu asistență AI — pot conține erori. Verificați întotdeauna sursele primare.
