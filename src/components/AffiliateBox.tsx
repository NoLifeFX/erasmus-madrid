interface AffiliateBoxProps {
  icon?: string;
  badge?: string;
  provider: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  savings?: string;
}

export default function AffiliateBox({
  icon = "⭐",
  badge = "Notre bon plan",
  provider,
  title,
  description,
  ctaText,
  ctaHref,
  savings,
}: AffiliateBoxProps) {
  return (
    <div className="my-8 rounded-2xl border-2 border-yellow-300 bg-yellow-50 overflow-hidden">
      {/* Header stripe */}
      <div className="bg-yellow-100 px-5 py-3 flex items-center gap-2 border-b border-yellow-200">
        <span aria-hidden="true">{icon}</span>
        <span className="text-xs font-bold text-yellow-800 uppercase tracking-widest">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-5">
        <p className="font-bold text-ink text-lg mb-0.5">{provider}</p>
        <p className="font-semibold text-ink text-sm mb-2">{title}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {savings && (
          <p className="mt-3 inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {savings}
          </p>
        )}

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          {ctaText}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <p className="mt-2 text-xs text-gray-400">Lien affilié — commission sans frais supplémentaires pour vous</p>
      </div>
    </div>
  );
}
