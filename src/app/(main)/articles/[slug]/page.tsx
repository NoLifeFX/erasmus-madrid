import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getPublishedArticles } from "@/lib/articles";
import { getContentComponent } from "@/lib/article-content";
import MarkdownRenderer from "@/components/admin/MarkdownRenderer";
import AdUnit from "@/components/AdUnit";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) return {};

  const canonicalUrl = `https://erasmus-madrid.fr/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article || article.status !== "published") notFound();

  const ContentComponent = getContentComponent(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@type": "Organization", name: "Erasmus Madrid", url: "https://erasmus-madrid.fr" },
    publisher: { "@type": "Organization", name: "Erasmus Madrid", url: "https://erasmus-madrid.fr" },
    inLanguage: "fr-FR",
    url: `https://erasmus-madrid.fr/articles/${article.slug}`,
  };

  const faqSchema = article.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Affiliate disclosure */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-xs text-yellow-800">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>
            Cet article contient des liens affiliés — nous touchons une petite commission si vous
            souscrivez, sans frais supplémentaires pour vous.{" "}
            <Link href="/mentions-legales#affiliation" className="underline font-medium">
              En savoir plus
            </Link>
          </span>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted flex-wrap">
              <li><Link href="/" className="hover:text-brand transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/articles" className="hover:text-brand transition-colors">Articles</Link></li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/articles?cat=${article.categorySlug}`} className="hover:text-brand transition-colors">
                  {article.category}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink font-medium truncate max-w-xs">{article.title}</li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${article.categoryColor}`}>
                {article.category}
              </span>
              <span className="text-xs text-muted">{article.readTime} min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4 max-w-4xl">
              {article.title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-5">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Publié le{" "}
                <time dateTime={article.datePublished}>
                  {new Date(article.datePublished).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Mis à jour le{" "}
                <time dateTime={article.dateModified}>
                  {new Date(article.dateModified).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Erasmus Madrid
              </span>
            </div>
          </header>

          {/* Two-column: content + sidebar */}
          <div className="lg:grid lg:grid-cols-10 lg:gap-10">
            <article className="lg:col-span-7 min-w-0">
              {/* Render JSX component for static articles, markdown for admin-created ones */}
              {ContentComponent ? (
                <ContentComponent />
              ) : article.content ? (
                <MarkdownRenderer content={article.content} />
              ) : (
                <p className="text-gray-400 italic">Contenu en cours de rédaction…</p>
              )}

              {/* Ad before FAQ */}
              <AdUnit slot="XXXXXXXX" format="horizontal" className="my-8" />

              {/* FAQ section */}
              {article.faqs.length > 0 && (
                <section id="faq" className="mt-12 pt-10 border-t border-gray-100">
                  <h2 className="font-bold text-2xl text-ink mb-6">Questions fréquentes</h2>
                  <dl className="space-y-5">
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="bg-warm rounded-xl p-5 border border-gray-100">
                        <dt className="font-semibold text-ink mb-2 text-base leading-snug">{faq.question}</dt>
                        <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Related articles */}
              <RelatedArticles currentSlug={slug} />
            </article>

            {/* Sidebar TOC */}
            {article.toc.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <nav aria-label="Table des matières" className="bg-warm rounded-2xl p-5 border border-gray-100">
                    <p className="font-semibold text-xs uppercase tracking-wider text-muted mb-4">
                      Dans cet article
                    </p>
                    <ol className="space-y-1.5">
                      {article.toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm hover:text-brand transition-colors leading-snug ${
                              item.level === 2
                                ? "text-gray-700 font-medium"
                                : "text-gray-500 pl-3 border-l border-gray-200"
                            }`}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <AdUnit slot="XXXXXXXX" format="rectangle" className="mb-4" />

                  <div className="bg-brand-light rounded-2xl p-5 border border-brand/20">
                    <p className="font-semibold text-ink text-sm mb-2">Ce guide vous aide ?</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                      Partagez-le avec vos amis qui partent en Erasmus à Madrid.
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="https://wa.me/?text=Guide+Erasmus+Madrid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-[#25D366] text-white text-xs font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
                        aria-label="Partager sur WhatsApp"
                      >
                        WhatsApp
                      </Link>
                      <Link
                        href="/articles"
                        className="flex-1 text-center bg-ink text-white text-xs font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        + de guides
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

async function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const all = await getPublishedArticles();
  const related = all.filter((a) => a.slug !== currentSlug).slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-10 border-t border-gray-100">
      <h2 className="font-bold text-xl text-ink mb-5">Autres guides utiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group bg-warm rounded-xl p-4 border border-gray-100 hover:border-brand/30 hover:shadow-sm transition-all"
          >
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.categoryColor} mb-2 inline-block`}>
              {article.category}
            </span>
            <p className="font-semibold text-sm text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
              {article.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
