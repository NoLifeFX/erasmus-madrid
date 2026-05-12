interface Goal {
  label: string;
  current: number;
  target: number;
  unit: string;
}

function ProgressBar({ goal }: { goal: Goal }) {
  const pct = Math.min(Math.round((goal.current / goal.target) * 100), 100);
  const color = pct >= 100 ? "bg-green-500" : pct >= 60 ? "bg-brand" : "bg-amber-400";

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700">{goal.label}</span>
        <span className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{goal.current.toLocaleString("fr-FR")}</span>
          {" / "}{goal.target.toLocaleString("fr-FR")} {goal.unit}
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">{pct}%</p>
    </div>
  );
}

export default function GoalsProgress({ dailyVisitors, monthlyVisitors }: { dailyVisitors: number; monthlyVisitors: number }) {
  const goals: Goal[] = [
    { label: "Visiteurs / jour", current: dailyVisitors, target: 100, unit: "visiteurs" },
    { label: "Visiteurs / mois", current: monthlyVisitors, target: 1000, unit: "visiteurs" },
    { label: "Articles publiés", current: 3, target: 10, unit: "articles" },
    { label: "Revenus affiliés", current: 0, target: 500, unit: "€/mois" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Objectifs</h3>
      <div className="space-y-4">
        {goals.map((goal) => (
          <ProgressBar key={goal.label} goal={goal} />
        ))}
      </div>
    </div>
  );
}
