import type { MetadataRoute } from "next";
import { decizii } from "@/data/decizii";
import { actori } from "@/data/actori";
import { pozitiiGuvern } from "@/data/guvern";

const BASE = "https://guvernare.online";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/decizii`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/actori`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/guvern`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/metodologie`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/despre`, changeFrequency: "monthly", priority: 0.4 },
    ...decizii.map((d) => ({
      url: `${BASE}/decizii/${d.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...actori.map((a) => ({
      url: `${BASE}/actori/${a.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...pozitiiGuvern.map((p) => ({
      url: `${BASE}/guvern/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
