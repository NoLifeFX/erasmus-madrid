import { notFound } from "next/navigation";
import ArticleEditor from "@/components/admin/ArticleEditor";
import { getArticleById } from "@/lib/articles-store";

export const dynamic = "force-dynamic";

export default async function EditArticlePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const article = getArticleById(id);

  if (!article) notFound();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Modifier l&apos;article</h1>
        <p className="text-sm text-gray-500 mt-1 truncate max-w-lg">{article.title}</p>
      </div>
      <ArticleEditor
        articleId={id}
        initialData={{
          title: article.title,
          slug: article.slug,
          description: article.description,
          excerpt: article.excerpt,
          category: article.category,
          categorySlug: article.categorySlug,
          readTime: article.readTime,
          status: article.status,
          content: article.content,
        }}
      />
    </div>
  );
}
