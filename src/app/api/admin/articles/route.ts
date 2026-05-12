import { NextResponse } from "next/server";
import { readArticles, createArticle } from "@/lib/articles-store";
import type { JsonArticle } from "@/lib/articles-store";

export async function GET() {
  const articles = readArticles();
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Omit<
      JsonArticle,
      "id" | "createdAt" | "updatedAt"
    >;

    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: "Titre et slug requis" },
        { status: 400 }
      );
    }

    // Check slug uniqueness
    const existing = readArticles();
    if (existing.some((a) => a.slug === body.slug)) {
      return NextResponse.json(
        { error: "Ce slug est déjà utilisé" },
        { status: 409 }
      );
    }

    const article = createArticle(body);
    return NextResponse.json(article, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
