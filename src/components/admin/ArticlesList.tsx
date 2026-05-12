"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ArticleRow {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: "published" | "draft";
  updatedAt: string;
}

export default function ArticlesList({ articles }: { articles: ArticleRow[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Supprimer "${title}" ?`)) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      }
    } finally {
      setDeleting(null);
    }
  }

  if (articles.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-10 shadow-sm text-center">
        <p className="text-gray-400 text-sm mb-3">Aucun article pour l&apos;instant</p>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 bg-brand text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          <span>+</span> Créer un article
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">Titre</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Catégorie</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Statut</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Modifié</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {articles.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-5 py-3.5">
                <span className="font-medium text-gray-900 block truncate max-w-[240px]">
                  {article.title}
                </span>
                <span className="text-xs text-gray-400 mt-0.5 block">/articles/{article.slug}</span>
              </td>
              <td className="px-5 py-3.5 hidden md:table-cell text-gray-600">{article.category}</td>
              <td className="px-5 py-3.5 hidden sm:table-cell">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    article.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {article.status === "published" ? "Publié" : "Brouillon"}
                </span>
              </td>
              <td className="px-5 py-3.5 hidden lg:table-cell text-gray-400 text-xs">
                {new Date(article.updatedAt).toLocaleDateString("fr-FR")}
              </td>
              <td className="px-5 py-3.5">
                <div className="flex items-center justify-end gap-2">
                  <a
                    href={`/articles/${article.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded hover:bg-gray-100"
                    title="Prévisualiser"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="text-gray-400 hover:text-brand transition-colors p-1.5 rounded hover:bg-gray-100"
                    title="Modifier"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id, article.title)}
                    disabled={deleting === article.id}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded hover:bg-red-50 disabled:opacity-50"
                    title="Supprimer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
