"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DailyTraffic {
  date: string;
  visitors: number;
  pageviews: number;
}

interface TrafficChartProps {
  data: DailyTraffic[];
  totalVisitors: number;
  previousMonthVisitors: number;
}

export default function TrafficChart({
  data,
  totalVisitors,
  previousMonthVisitors,
}: TrafficChartProps) {
  const variation =
    previousMonthVisitors > 0
      ? Math.round(
          ((totalVisitors - previousMonthVisitors) / previousMonthVisitors) * 100
        )
      : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Trafic — 30 derniers jours</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {totalVisitors.toLocaleString("fr-FR")}
            <span className="text-sm font-normal text-gray-500 ml-2">visiteurs</span>
          </p>
        </div>
        <span
          className={`text-sm font-semibold px-2.5 py-1.5 rounded-full ${
            variation >= 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {variation >= 0 ? "▲" : "▼"} {Math.abs(variation)}% vs mois préc.
        </span>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              interval={4}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => [
                `${value ?? 0} visiteurs`,
                "Visiteurs",
              ]}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#C60B1E"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#C60B1E" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
