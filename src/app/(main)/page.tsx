import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import AdUnit from "@/components/AdUnit";
import TelegramCTA from "@/components/TelegramCTA";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Erasmus Madrid — Guide complet pour étudiants français",
  description:
    "Le guide indépendant pour bien s'installer à Madrid : SIM espagnole, compte bancaire sans NIE, assurance, logement et bons plans pour étudiants Erasmus.",
  openGraph: {
    title: "Erasmus Madrid — Guide complet pour étudiants français",
    description:
      "Tout ce qu'il faut savoir pour vivre son Erasmus à Madrid : SIM, banque, assurance, logement.",
    type: "website",
    url: "https://erasmus-madrid.fr",
  },
  alternates: {
    canonical: "https://erasmus-madrid.fr",
  },
};

const categories = [
  {
    slug: "logement",
    icon: "🏠",
    title: "Logement",
    description:
      "Trouver un appartement, colocation ou résidence à Madrid. Idealista, Fotocasa, les arnaques à éviter.",
    border: "border-orange-200 hover:border-orange-400",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    slug: "banque",
    icon: "💳",
    title: "Banque",
    description:
      "Ouvrir un compte sans NIE avec N26, Revolut ou Wise. Comparatif honnête des meilleures options.",
    border: "border-green-200 hover:border-green-400",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    slug: "sim",
    icon: "📱",
    title: "Carte SIM",
    description:
      "Yoigo, Orange, Lebara : quelle SIM espagnole choisir pour votre Erasmus à Madrid ?",
    border: "border-blue-200 hover:border-blue-400",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    slug: "assurance",
    icon: "🛡️",
    title: "Assurance",
    description:
      "CEAM, Chapka, AVA : être bien couvert pour votre séjour Erasmus sans dépenser trop.",
    border: "border-purple-200 hover:border-purple-400",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    slug: "bons-plans",
    icon: "💡",
    title: "Bons plans",
    description:
      "Restaurants pas chers, transport, culture, sorties : profiter de Madrid sans se ruiner.",
    border: "border-yellow-200 hover:border-yellow-400",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
  },
  {
    slug: "quartiers",
    icon: "🗺️",
    title: "Quartiers",
    description:
      "Malasaña, Lavapiés, Salamanca… Quel quartier choisir pour vivre votre Erasmus ?",
    border: "border-teal-200 hover:border-teal-400",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
  },
];

export default async function HomePage() {
  const articles = await getPublishedArticles();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-warm overflow-hidden" aria-labelledby="hero-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/6 via-transparent to-transparent" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-brand/4 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span aria-hidden="true">🇪🇸</span>
              <span>Guide Erasmus 2025</span>
            </span>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6"
            >
              Votre Erasmus à Madrid,{" "}
              <span className="text-brand">bien préparé</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Le guide indépendant des étudiants français à Madrid. Carte SIM, compte
              bancaire, assurance, logement : tout ce qu&apos;il faut savoir, sans langue de bois.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base shadow-lg"
              >
                Découvrir les guides
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#categories"
                className="text-gray-600 hover:text-ink font-medium transition-colors"
              >
                Voir les catégories →
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 mt-10 pt-10 border-t border-gray-200">
              {[
                { value: String(articles.length), label: "guides complets" },
                { value: "100%", label: "gratuit" },
                { value: "2025", label: "mis à jour" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-ink">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section id="categories" className="py-16 sm:py-20 bg-white" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="categories-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4"
            >
              Tous les guides par catégorie
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Trouvez rapidement l&apos;information dont vous avez besoin pour votre Erasmus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/articles?cat=${cat.slug}`}
                className={`group rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-md ${cat.bg} ${cat.border}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 ${cat.iconBg}`}
                  aria-hidden="true"
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-ink mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                <div className="mt-4 text-brand font-semibold text-sm flex items-center gap-1">
                  Voir les guides
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured articles ─── */}
      <section className="py-16 sm:py-20 bg-warm" aria-labelledby="articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                id="articles-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2"
              >
                Nos guides essentiels
              </h2>
              <p className="text-muted">Les articles les plus lus par les étudiants Erasmus</p>
            </div>
            <Link
              href="/articles"
              className="hidden sm:flex items-center gap-1 text-brand font-semibold hover:gap-2 transition-all"
            >
              Tous les articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-brand font-semibold"
            >
              Voir tous les articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AdSense ─── */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit slot="XXXXXXXX" format="horizontal" className="mx-auto max-w-3xl" />
        </div>
      </div>

      {/* ─── Telegram CTA ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <TelegramCTA variant="banner" />
        </div>
      </section>

      {/* ─── Trust signals ─── */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="trust-heading" className="sr-only">Pourquoi nous faire confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "✍️",
                title: "Contenu honnête",
                desc: "Nos guides sont rédigés par des étudiants ayant vécu l'Erasmus à Madrid. Nous ne recommandons que des services que nous avons testés.",
              },
              {
                icon: "🔄",
                title: "Régulièrement mis à jour",
                desc: "Tarifs, offres, règlements : le monde Erasmus évolue vite. Nos guides sont mis à jour régulièrement pour rester fiables.",
              },
              {
                icon: "🎓",
                title: "Site 100% indépendant",
                desc: "Erasmus Madrid n'est affilié à aucune université ni programme officiel. Notre seul objectif : vous aider à vivre le meilleur Erasmus.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
