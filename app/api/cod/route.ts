import { NextResponse } from "next/server";
import {
  citesteCod,
  citesteContor,
  genereazaCod,
  incrementeazaContor,
  normalizeazaCod,
  ofsetZilnic,
  scrieCod,
} from "@/lib/coduri";
import { semneazaAcces } from "@/lib/semnatura";

const UN_AN = 60 * 60 * 24 * 365;

export async function GET() {
  const intrari = await citesteContor();
  return NextResponse.json(
    { inauntru: intrari + ofsetZilnic() },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(req: Request) {
  let cod: string;
  try {
    const body = await req.json();
    cod = normalizeazaCod(String(body.cod ?? ""));
  } catch {
    return NextResponse.json({ eroare: "Cerere invalidă." }, { status: 400 });
  }
  if (!cod || cod.length < 4 || cod.length > 40) {
    return NextResponse.json({ eroare: "Introdu un cod valid." }, { status: 400 });
  }

  const info = await citesteCod(cod);
  if (!info) {
    return NextResponse.json(
      { eroare: "Codul nu există. Cere unul de la un prieten care e deja înăuntru." },
      { status: 401 }
    );
  }
  if (info.ramase <= 0) {
    return NextResponse.json(
      {
        eroare:
          "Codul a fost folosit deja de 3 ori — locurile lui s-au ocupat. Cere alt cod de la un prieten.",
      },
      { status: 401 }
    );
  }

  // consumă un loc din codul prietenului
  await scrieCod(cod, { ...info, ramase: info.ramase - 1 });

  // emite codul personal al noului vizitator: 3 locuri pentru prietenii lui
  const codNou = genereazaCod();
  await scrieCod(codNou, {
    ramase: 3,
    creat: new Date().toISOString(),
    parinte: cod,
  });
  await incrementeazaContor();

  const secret = process.env.ACCES_SECRET;
  if (!secret) {
    return NextResponse.json({ eroare: "Configurare lipsă pe server." }, { status: 500 });
  }
  const semnatura = await semneazaAcces(secret);

  // pe domeniul propriu, cookie-ul e valabil și pe www și pe apex
  const host = (req.headers.get("host") ?? "").split(":")[0];
  const domeniu =
    host === "guvernare.online" || host.endsWith(".guvernare.online")
      ? ".guvernare.online"
      : undefined;

  const res = NextResponse.json({ ok: true, cod: codNou });
  res.cookies.set("gv_acces", semnatura, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: UN_AN,
    ...(domeniu ? { domain: domeniu } : {}),
  });
  res.cookies.set("gv_cod", codNou, {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: UN_AN,
    ...(domeniu ? { domain: domeniu } : {}),
  });
  return res;
}
