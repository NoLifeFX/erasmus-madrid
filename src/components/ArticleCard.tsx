import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
    >
      {/* Colored accent bar */}
      <div className="h-1.5 bg-brand flex-shrink-0" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category + read time */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400">{article.readTime} min</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-ink leading-snug mb-3 group-hover:text-brand transition-colors line-clamp-2 flex-1">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <time
            className="text-xs text-gray-400"
            dateTime={article.datePublished}
          >
            {new Date(article.datePublished).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span
            className="text-brand text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
