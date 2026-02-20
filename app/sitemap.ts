import { MetadataRoute } from "next";
import { VACANCIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.humanis.com.mx";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/para-empresas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/talento`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/vacantes`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/casos-de-exito`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/faq-empresas`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq-talento`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const vacancyRoutes: MetadataRoute.Sitemap = VACANCIES.map((v) => ({
    url: `${base}/vacantes/${v.slug}`,
    lastModified: new Date(v.datePosted),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [...staticRoutes, ...vacancyRoutes];
}
