import { readArticles } from "./articles-store";

export interface DailyPoint { date: string; visitors: number; pageviews: number }
export interface TopArticleRow { title: string; slug: string; views: number; bounceRate: number; avgTime: string }
export interface TrafficSource { source: string; value: number }

export interface AnalyticsData {
  isDemoMode: boolean;
  stats: { totalArticles: number; publishedArticles: number; draftArticles: number; monthlyVisitors: number; dailyAvgVisitors: number };
  daily: DailyPoint[];
  totalVisitors: number;
  prevMonthVisitors: number;
  topArticles: TopArticleRow[];
  trafficSources: TrafficSource[];
}

function seededRand(seed: number): () => number {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

function generateDailyData(days: number, seedOffset = 0): DailyPoint[] {
  const rand = seededRand(42 + seedOffset);
  const now = new Date();
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - 1 - i));
    const label = d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
    const visitors = 20 + Math.floor(rand() * 40);
    return { date: label, visitors, pageviews: Math.floor(visitors * 1.8) };
  });
}

export function getAnalyticsData(): AnalyticsData {
  const articles = readArticles();
  const published = articles.filter((a) => a.status === "published");
  const drafts = articles.filter((a) => a.status === "draft");

  const daily = generateDailyData(30, 0);
  const prev = generateDailyData(30, 7);
  const totalVisitors = daily.reduce((s, d) => s + d.visitors, 0);
  const prevMonthVisitors = prev.reduce((s, d) => s + d.visitors, 0);

  const topArticles: TopArticleRow[] = [
    { title: "Meilleure carte SIM en Espagne", slug: "meilleure-carte-sim-espagne-erasmus", views: 412, bounceRate: 42, avgTime: "3m 24s" },
    { title: "Compte bancaire sans NIE", slug: "compte-bancaire-espagne-sans-nie", views: 287, bounceRate: 55, avgTime: "2m 51s" },
    { title: "Assurance Erasmus Espagne", slug: "assurance-erasmus-espagne", views: 193, bounceRate: 61, avgTime: "2m 10s" },
    ...published.slice(0, 2).map((a, i) => ({
      title: a.title, slug: a.slug,
      views: 50 + i * 30,
      bounceRate: 50 + i * 5,
      avgTime: `${2 + i}m 00s`,
    })),
  ].slice(0, 5);

  const isDemoMode = !process.env.VERCEL_ACCESS_TOKEN || !process.env.VERCEL_PROJECT_ID;

  return {
    isDemoMode,
    stats: {
      totalArticles: articles.length,
      publishedArticles: published.length,
      draftArticles: drafts.length,
      monthlyVisitors: totalVisitors,
      dailyAvgVisitors: Math.round(totalVisitors / 30),
    },
    daily,
    totalVisitors,
    prevMonthVisitors,
    topArticles,
    trafficSources: [
      { source: "Recherche organique", value: 58 },
      { source: "Direct", value: 22 },
      { source: "Réseaux sociaux", value: 13 },
      { source: "Référents", value: 7 },
    ],
  };
}
