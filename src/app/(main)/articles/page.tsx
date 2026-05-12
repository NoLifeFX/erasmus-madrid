import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tous nos guides Erasmus Madrid",
  description:
    "Tous les guides pour bien préparer et vivre votre Erasmus à Madrid : SIM, banque, assurance, logement, bons plans et quartiers.",
  alternates: {
    canonical: "https://erasmus-madrid.fr/articles",
  },
  openGraph: {
    title: "Tous nos guides Erasmus Madrid",
    description: "SIM, banque, assurance, logement : tous nos guides pour bien vivre son Erasmus à Madrid.",
    url: "https://erasmus-madrid.fr/articles",
    type: "website",
  },
};

const categoryLabels: Record<string, string> = {
  sim: "SIM & Mobile",
  telephonie: "Téléphonie",
  banque: "Banque",
  assurance: "Assurance",
  logement: "Logement",
  "bons-plans": "Bons plans",
  "vie-pratique": "Vie pratique",
  quartiers: "Quartiers",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const articles = await getPublishedArticles();

  const filtered = cat
    ? articles.filter((a) => a.categorySlug === cat)
    : articles;

  const categoryName = cat ? (categoryLabels[cat] ?? cat) : null;

  return (
    <div className="bg-warm min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
            {categoryName ? `Guides : ${categoryName}` : "Tous nos guides Erasmus Madrid"}
          </h1>
          <p className="text-muted text-lg">
            {categoryName
              ? `${filtered.length} guide${filtered.length > 1 ? "s" : ""} dans la catégorie ${categoryName}`
              : `${articles.length} guide${articles.length > 1 ? "s" : ""} complet${articles.length > 1 ? "s" : ""} pour bien préparer votre Erasmus à Madrid`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <CategoryTab href="/articles" label="Tous" active={!cat} />
          {Object.entries(categoryLabels).map(([slug, label]) => (
            <CategoryTab
              key={slug}
              href={`/articles?cat=${slug}`}
              label={label}
              active={cat === slug}
            />
          ))}
        </div>

        {/* Articles grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
            <p className="font-semibold text-ink text-lg mb-2">Aucun article dans cette catégorie</p>
            <p className="text-muted">
              Nous travaillons sur de nouveaux guides. Revenez bientôt !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryTab({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
        active
          ? "bg-brand text-white"
          : "bg-white text-gray-600 border border-gray-200 hover:border-brand hover:text-brand"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  );
}
