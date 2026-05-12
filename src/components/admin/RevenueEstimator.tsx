"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-0.5">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function RevenueEstimator({ monthlyVisitors = 800 }: { monthlyVisitors?: number }) {
  const [conversionRate, setConversionRate] = useState(1.5);
  const [avgCommission, setAvgCommission] = useState(20);
  const [cpm, setCpm] = useState(3);

  const { monthly, annual, chartData } = useMemo(() => {
    const affiliate = (monthlyVisitors * conversionRate) / 100 * avgCommission;
    const adsense = (monthlyVisitors / 1000) * cpm;
    const total = affiliate + adsense;

    const growth = 1.08;
    const data = MONTHS.map((month, i) => ({
      month,
      affilié: Math.round(affiliate * Math.pow(growth, i)),
      adsense: Math.round(adsense * Math.pow(growth, i)),
    }));

    const annual = data.reduce((acc, d) => acc + d.affilié + d.adsense, 0);
    return { monthly: Math.round(total), annual, chartData: data };
  }, [monthlyVisitors, conversionRate, avgCommission, cpm]);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Estimation des revenus</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <Slider
            label="Taux de conversion affilié"
            value={conversionRate}
            min={0.5}
            max={5}
            step={0.1}
            format={(v) => `${v.toFixed(1)}%`}
            onChange={setConversionRate}
          />
          <Slider
            label="Commission moyenne / conversion"
            value={avgCommission}
            min={5}
            max={80}
            step={1}
            format={(v) => `${v}€`}
            onChange={setAvgCommission}
          />
          <Slider
            label="CPM AdSense"
            value={cpm}
            min={1}
            max={8}
            step={0.5}
            format={(v) => `${v}€`}
            onChange={setCpm}
          />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-brand-light rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand">{monthly}€</p>
              <p className="text-xs text-gray-500 mt-0.5">ce mois</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{annual.toLocaleString("fr-FR")}€</p>
              <p className="text-xs text-gray-500 mt-0.5">projection annuelle</p>
            </div>
          </div>
        </div>

        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 9, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ border: "1px solid #e5e7eb", borderRadius: "8px", fontSize: "12px" }}
                formatter={(v) => [`${v ?? 0}€`, ""]}
              />
              <Bar dataKey="affilié" stackId="a" fill="#C60B1E" radius={[0, 0, 0, 0]} />
              <Bar dataKey="adsense" stackId="a" fill="#fca5a5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
