import fs from "fs/promises";
import path from "path";
import { getCategoryColor } from "./articles-store";

const ARTICLES_FILE = path.join(process.cwd(), "src/content/articles.json");

interface TocItem { id: string; title: string; level: 2 | 3 }
interface Faq { question: string; answer: string }

interface RawArticle {
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
  toc?: TocItem[];
  faqs?: Faq[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  readTime: number;
  status: "published" | "draft";
  content: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  toc: TocItem[];
  faqs: Faq[];
}

function mapArticle(raw: RawArticle): Article {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    category: raw.category,
    categorySlug: raw.categorySlug,
    categoryColor: getCategoryColor(raw.categorySlug),
    readTime: raw.readTime,
    status: raw.status,
    content: raw.content,
    excerpt: raw.excerpt,
    datePublished: raw.createdAt,
    dateModified: raw.updatedAt,
    toc: raw.toc ?? [],
    faqs: raw.faqs ?? [],
  };
}

async function readRaw(): Promise<RawArticle[]> {
  try {
    const text = await fs.readFile(ARTICLES_FILE, "utf-8");
    return JSON.parse(text) as RawArticle[];
  } catch {
    return [];
  }
}

export async function getArticles(): Promise<Article[]> {
  const raw = await readRaw();
  return raw.map(mapArticle);
}

export async function getPublishedArticles(): Promise<Article[]> {
  const raw = await readRaw();
  return raw.filter((a) => a.status === "published").map(mapArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const raw = await readRaw();
  const found = raw.find((a) => a.slug === slug);
  return found ? mapArticle(found) : undefined;
}
