import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://erasmus-madrid.vercel.app/;
  const articles = await getPublishedArticles();

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/articles/compte-bancaire-espagne-sans-nie`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/articles/assurance-erasmus-espagne`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/articles/guide-transport-madrid`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/articles/ouvrir-un-compte-revolut-en-espagne-le-guide-erasmus-2025`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/articles/carte-europeenne-dassurance-maladie-ceam-pour-lespagne-le-guide-2025-2026`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/articles/voter-depuis-lespagne-en-tant-quetudiant-erasmus-le-guide-2026`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/articles/obtenir-le-nie-en-espagne-en-2026-le-guide-ultime-procedures-rdv-et-astuces`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...articleUrls,
  ];
}
