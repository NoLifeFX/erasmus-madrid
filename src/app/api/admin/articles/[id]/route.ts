import { NextResponse } from "next/server";
import { getArticleById, updateArticle, deleteArticle, readArticles } from "@/lib/articles-store";
import type { JsonArticle } from "@/lib/articles-store";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json(article);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = (await request.json()) as Partial<JsonArticle>;

    // Check slug uniqueness (excluding current article)
    if (body.slug) {
      const existing = readArticles();
      if (existing.some((a) => a.slug === body.slug && a.id !== id)) {
        return NextResponse.json({ error: "Ce slug est déjà utilisé" }, { status: 409 });
      }
    }

    const updated = updateArticle(id, body);
    if (!updated) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = deleteArticle(id);
  if (!deleted) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json({ success: true });
}
