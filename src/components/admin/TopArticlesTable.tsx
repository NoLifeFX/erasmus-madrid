interface ArticleRow {
  title: string;
  slug: string;
  views: number;
  bounceRate: number;
  avgTime: string;
}

export default function TopArticlesTable({ rows }: { rows: ArticleRow[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Top articles</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider pb-3">Article</th>
              <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider pb-3">Vues</th>
              <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider pb-3">Rebond</th>
              <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider pb-3">Tps moy.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {rows.map((row) => (
              <tr key={row.slug} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 pr-4">
                  <a
                    href={`/articles/${row.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 hover:text-brand font-medium truncate block max-w-[220px]"
                  >
                    {row.title}
                  </a>
                </td>
                <td className="py-3 text-right font-semibold text-gray-900">
                  {row.views.toLocaleString("fr-FR")}
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      row.bounceRate > 60
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {row.bounceRate}%
                  </span>
                </td>
                <td className="py-3 text-right text-gray-600">{row.avgTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
