import Link from "next/link";
import ArticlesList from "@/components/admin/ArticlesList";
import { readArticles } from "@/lib/articles-store";

export const dynamic = "force-dynamic";

export default function ArticlesPage() {
  const articles = readArticles();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes articles</h1>
          <p className="text-sm text-gray-500 mt-1">{articles.length} article{articles.length !== 1 ? "s" : ""} au total</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 bg-brand text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nouvel article
        </Link>
      </div>

      <ArticlesList articles={articles} />
    </div>
  );
}
