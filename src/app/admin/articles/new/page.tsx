import ArticleEditor from "@/components/admin/ArticleEditor";

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Nouvel article</h1>
        <p className="text-sm text-gray-500 mt-1">Rédigez et publiez un nouvel article</p>
      </div>
      <ArticleEditor />
    </div>
  );
}
