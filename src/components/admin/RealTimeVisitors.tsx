"use client";

import { useState, useEffect } from "react";

interface ActivePage {
  page: string;
  label: string;
  visitors: number;
}

interface RealtimeData {
  visitors: number;
  activePages: ActivePage[];
}

export default function RealTimeVisitors() {
  const [data, setData] = useState<RealtimeData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/analytics/realtime");
      if (res.ok) {
        const json = (await res.json()) as RealtimeData;
        setData(json);
        setLastUpdated(new Date());
      }
    } catch {
      // keep previous data
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Visiteurs en temps réel</h3>
        <span className="text-xs text-gray-400">
          Mis à jour à {lastUpdated.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      <div className="flex flex-col items-center py-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-4xl font-bold text-gray-900">
            {data?.visitors ?? "—"}
          </span>
        </div>
        <p className="text-sm text-gray-500">personnes sur le site maintenant</p>
      </div>

      {data?.activePages && data.activePages.length > 0 && (
        <div className="mt-3 border-t border-gray-50 pt-3 space-y-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Pages actives
          </p>
          {data.activePages.map((page) => (
            <div key={page.page} className="flex items-center justify-between text-sm">
              <span className="text-gray-600 truncate max-w-[200px]">{page.label}</span>
              <span className="flex items-center gap-1.5 text-gray-900 font-medium shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                {page.visitors}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
