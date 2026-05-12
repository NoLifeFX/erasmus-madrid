'use client'

interface TelegramCTAProps {
  variant?: 'default' | 'inline' | 'banner'
}

const TELEGRAM_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
  </svg>
)

export default function TelegramCTA({ variant = 'default' }: TelegramCTAProps) {
  const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/erasmusmadrid'

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
        <span className="text-2xl" aria-hidden="true">✈️</span>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">Rejoins le groupe Telegram</p>
          <p className="text-xs text-gray-500">500+ étudiants français à Madrid</p>
        </div>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Rejoindre
        </a>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
        <p className="text-3xl mb-3" aria-hidden="true">✈️</p>
        <h3 className="font-serif text-xl font-bold mb-2">
          La communauté des Erasmus français à Madrid
        </h3>
        <p className="text-blue-100 text-sm mb-6">
          Bons plans, colocations, sorties, questions admin — tout se passe sur le groupe Telegram.
          Rejoins 500+ étudiants français.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
        >
          {TELEGRAM_ICON}
          Rejoindre le groupe
        </a>
        <p className="text-blue-200 text-xs mt-3">Gratuit · Communauté bienveillante · Modéré</p>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
      <p className="text-3xl mb-3" aria-hidden="true">✈️</p>
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
        Rejoins la communauté Telegram
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        Bons plans, colocations, sorties, questions admin — tout se passe là-bas.
        500+ étudiants français à Madrid t&apos;attendent.
      </p>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
      >
        {TELEGRAM_ICON}
        Rejoindre gratuitement
      </a>
      <p className="text-gray-400 text-xs mt-3">Gratuit · Sans spam · Communauté bienveillante</p>
    </div>
  )
}
