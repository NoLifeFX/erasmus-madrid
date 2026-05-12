"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-100 rounded-lg h-64" />,
});

interface ArticleFormData {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: number;
  status: "published" | "draft";
  content: string;
}

const CATEGORIES = [
  { label: "Téléphonie", slug: "telephonie" },
  { label: "Banque", slug: "banque" },
  { label: "Assurance", slug: "assurance" },
  { label: "Logement", slug: "logement" },
  { label: "Vie pratique", slug: "vie-pratique" },
];

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function ArticleEditor({
  initialData,
  articleId,
}: {
  initialData?: Partial<ArticleFormData>;
  articleId?: string;
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoSlug, setAutoSlug] = useState(!articleId);

  const [form, setForm] = useState<ArticleFormData>({
    title: "",
    slug: "",
    description: "",
    excerpt: "",
    category: "Vie pratique",
    categorySlug: "vie-pratique",
    readTime: 5,
    status: "draft",
    content: "",
    ...initialData,
  });

  const update = useCallback(
    <K extends keyof ArticleFormData>(key: K, value: ArticleFormData[K]) => {
      setForm((prev) => {
        const next = { ...prev, [key]: value };
        if (key === "title" && autoSlug) {
          next.slug = slugify(value as string);
        }
        if (key === "category") {
          const cat = CATEGORIES.find((c) => c.label === value);
          if (cat) next.categorySlug = cat.slug;
        }
        return next;
      });
    },
    [autoSlug]
  );

  async function handleSubmit(status: "published" | "draft") {
    setSaving(true);
    setError(null);
    try {
      const payload = { ...form, status };
      const url = articleId ? `/api/admin/articles/${articleId}` : "/api/admin/articles";
      const method = articleId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Erreur serveur");
      }
      router.push("/admin/articles");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div data-color-mode="light" className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Meilleure carte SIM en Espagne pour Erasmus"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug URL
              <button
                type="button"
                onClick={() => setAutoSlug(!autoSlug)}
                className={`ml-2 text-xs px-2 py-0.5 rounded-full border ${
                  autoSlug ? "bg-brand text-white border-brand" : "text-gray-500 border-gray-200"
                }`}
              >
                {autoSlug ? "auto" : "manuel"}
              </button>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 shrink-0">/articles/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => { setAutoSlug(false); update("slug", e.target.value); }}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description SEO</label>
            <textarea
              rows={2}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="Description affichée dans Google (150-160 caractères)"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand resize-none"
            />
            <p className="text-xs text-gray-400 mt-0.5">{form.description.length} / 160 caractères</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Extrait (carte article)</label>
            <textarea
              rows={2}
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="Résumé court pour la liste des articles"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
            <MDEditor
              value={form.content}
              onChange={(val) => update("content", val ?? "")}
              height={480}
              preview="live"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-4">
            <h3 className="font-semibold text-gray-800 text-sm">Paramètres</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Temps de lecture (min)
              </label>
              <input
                type="number"
                min={1}
                max={30}
                value={form.readTime}
                onChange={(e) => update("readTime", Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              />
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm">Publication</h3>
            <button
              onClick={() => handleSubmit("published")}
              disabled={saving || !form.title || !form.slug}
              className="w-full bg-brand text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? "Enregistrement…" : "Publier"}
            </button>
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving || !form.title || !form.slug}
              className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Enregistrer le brouillon
            </button>
            <button
              onClick={() => router.push("/admin/articles")}
              className="w-full text-gray-400 hover:text-gray-600 text-sm py-1 transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
