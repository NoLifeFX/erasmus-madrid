import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const ARTICLES_FILE = path.join(process.cwd(), "src/content/articles.json");

export interface JsonArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readTime: number;
  status: "published" | "draft";
  content: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  toc?: Array<{ id: string; title: string; level: 2 | 3 }>;
  faqs?: Array<{ question: string; answer: string }>;
}

const CATEGORY_COLORS: Record<string, string> = {
  sim: "bg-blue-100 text-blue-700",
  telephonie: "bg-blue-100 text-blue-700",
  banque: "bg-green-100 text-green-700",
  assurance: "bg-purple-100 text-purple-700",
  logement: "bg-orange-100 text-orange-700",
  "bons-plans": "bg-yellow-100 text-yellow-700",
  "vie-pratique": "bg-gray-100 text-gray-700",
  quartiers: "bg-teal-100 text-teal-700",
};

export function getCategoryColor(categorySlug: string): string {
  return CATEGORY_COLORS[categorySlug] ?? "bg-gray-100 text-gray-700";
}

export function readArticles(): JsonArticle[] {
  try {
    const content = fs.readFileSync(ARTICLES_FILE, "utf-8");
    return JSON.parse(content) as JsonArticle[];
  } catch {
    return [];
  }
}

function writeArticles(articles: JsonArticle[]): void {
  fs.writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2), "utf-8");
}

export function createArticle(
  data: Omit<JsonArticle, "id" | "createdAt" | "updatedAt">
): JsonArticle {
  const articles = readArticles();
  const now = new Date().toISOString();
  const article: JsonArticle = { ...data, id: nanoid(), createdAt: now, updatedAt: now };
  articles.push(article);
  writeArticles(articles);
  return article;
}

export function updateArticle(
  id: string,
  data: Partial<Omit<JsonArticle, "id" | "createdAt">>
): JsonArticle | null {
  const articles = readArticles();
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  articles[idx] = { ...articles[idx], ...data, updatedAt: new Date().toISOString() };
  writeArticles(articles);
  return articles[idx];
}

export function deleteArticle(id: string): boolean {
  const articles = readArticles();
  const filtered = articles.filter((a) => a.id !== id);
  if (filtered.length === articles.length) return false;
  writeArticles(filtered);
  return true;
}

export function getArticleById(id: string): JsonArticle | undefined {
  return readArticles().find((a) => a.id === id);
}

export function getJsonArticleBySlug(slug: string): JsonArticle | undefined {
  return readArticles().find((a) => a.slug === slug);
}
