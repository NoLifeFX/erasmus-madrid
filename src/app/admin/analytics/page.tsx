import TrafficChart from "@/components/admin/TrafficChart";
import TrafficDonut from "@/components/admin/TrafficDonut";
import RealTimeVisitors from "@/components/admin/RealTimeVisitors";
import TopArticlesTable from "@/components/admin/TopArticlesTable";
import RevenueEstimator from "@/components/admin/RevenueEstimator";
import GoalsProgress from "@/components/admin/GoalsProgress";
import { getAnalyticsData } from "@/lib/analytics-data";

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  const data = getAnalyticsData();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytiques</h1>
        <p className="text-sm text-gray-500 mt-1">Performance de votre site</p>
      </div>

      {data.isDemoMode && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <span className="text-amber-500 text-lg mt-0.5">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-amber-800">Mode démonstration</p>
            <p className="text-xs text-amber-700 mt-0.5">
              Les données affichées sont simulées. Configurez{" "}
              <code className="font-mono bg-amber-100 px-1 rounded">VERCEL_ACCESS_TOKEN</code> et{" "}
              <code className="font-mono bg-amber-100 px-1 rounded">VERCEL_PROJECT_ID</code> pour afficher les vraies statistiques.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <TrafficChart
            data={data.daily}
            totalVisitors={data.totalVisitors}
            previousMonthVisitors={data.prevMonthVisitors}
          />
        </div>
        <RealTimeVisitors />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <TopArticlesTable rows={data.topArticles} />
        <TrafficDonut data={data.trafficSources} />
      </div>

      <div className="mt-5">
        <RevenueEstimator monthlyVisitors={data.stats.monthlyVisitors} />
      </div>

      <div className="mt-5">
        <GoalsProgress
          dailyVisitors={data.stats.dailyAvgVisitors}
          monthlyVisitors={data.stats.monthlyVisitors}
        />
      </div>
    </div>
  );
}
