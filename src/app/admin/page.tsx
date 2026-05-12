import StatsCard from "@/components/admin/StatsCard";
import { readArticles } from "@/lib/articles-store";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const articles = readArticles();
  const published = articles.filter((a) => a.status === "published").length;
  const drafts = articles.filter((a) => a.status === "draft").length;

  const stats = [
    {
      title: "Articles total",
      value: articles.length,
      icon: "📝",
      accent: "bg-blue-50 text-blue-600",
      subtitle: "Tous statuts confondus",
    },
    {
      title: "Articles publiés",
      value: published,
      icon: "✅",
      accent: "bg-green-50 text-green-600",
      subtitle: "Visibles sur le site",
    },
    {
      title: "Brouillons",
      value: drafts,
      icon: "✏️",
      accent: "bg-amber-50 text-amber-600",
      subtitle: "En cours de rédaction",
    },
    {
      title: "Visiteurs / mois",
      value: "~800",
      icon: "👥",
      accent: "bg-brand-light text-brand",
      subtitle: "Estimation (données démo)",
      trend: { value: 12, positive: true },
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Vue d&apos;ensemble de votre site</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h2 className="font-semibold text-gray-900 mb-4">Accès rapide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/admin/articles/new", label: "Nouvel article", icon: "✍️", desc: "Créer et publier" },
            { href: "/admin/analytics", label: "Analytiques", icon: "📊", desc: "Stats & revenus" },
            { href: "/admin/articles", label: "Mes articles", icon: "📚", desc: "Gérer le contenu" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-brand/30 hover:bg-brand-light/30 transition-colors group"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-brand transition-colors">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
