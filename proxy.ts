import { NextRequest, NextResponse } from "next/server";
import { verificaAcces } from "@/lib/semnatura";

// roboții de indexare și de preview (WhatsApp, Facebook etc.) văd site-ul liber,
// ca să funcționeze căutarea Google și preview-urile la share
const BOT_RE =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|twitterbot|linkedinbot|pinterest|discordbot|vercel-screenshot|lighthouse/i;

export default async function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return NextResponse.next();

  const cookie = req.cookies.get("gv_acces")?.value ?? "";
  const secret = process.env.ACCES_SECRET ?? "";
  if (cookie && secret && (await verificaAcces(cookie, secret))) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/poarta";
  url.search =
    req.nextUrl.pathname !== "/" ? `?next=${encodeURIComponent(req.nextUrl.pathname)}` : "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // tot site-ul, MAI PUȚIN: assets Next, API-ul de coduri, poarta însăși,
    // fișierele publice și rutele necesare pentru SEO/preview-uri
    "/((?!_next/|_vercel/|api/cod|poarta|favicon\\.ico|icon\\.svg|manifest\\.json|robots\\.txt|sitemap\\.xml|feed\\.xml|.*opengraph-image).*)",
  ],
};
