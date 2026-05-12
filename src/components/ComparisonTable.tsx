interface ComparisonRow {
  cells: string[];
  recommended?: boolean;
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  caption?: string;
  recommendedLabel?: string;
}

export default function ComparisonTable({
  headers,
  rows,
  caption,
  recommendedLabel = "Recommandé",
}: ComparisonTableProps) {
  return (
    <div className="my-8 -mx-4 sm:mx-0 overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
        {caption && (
          <caption className="text-left text-gray-400 text-xs mb-2 px-4 sm:px-0 caption-bottom pt-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-warm">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3.5 text-left font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.recommended
                  ? "bg-brand-light border-l-4 border-brand"
                  : "hover:bg-gray-50 transition-colors"
              }
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3.5 ${j === 0 ? "font-medium text-ink" : "text-gray-600"}`}
                >
                  {j === 0 && row.recommended ? (
                    <span className="flex items-center gap-2 flex-wrap">
                      {cell}
                      <span className="inline-flex items-center bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        {recommendedLabel}
                      </span>
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
