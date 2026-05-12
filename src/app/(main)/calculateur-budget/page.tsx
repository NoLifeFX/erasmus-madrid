import type { Metadata } from 'next'
import BudgetWrapper from './BudgetWrapper'

export const metadata: Metadata = {
  title: 'Calculateur de budget Erasmus Madrid 2025 — Combien ça coûte ?',
  description:
    "Calcule ton budget mensuel exact pour ton Erasmus à Madrid. Loyer, nourriture, sorties, transport — résultat personnalisé en 30 secondes.",
  alternates: {
    canonical: 'https://erasmus-madrid.fr/calculateur-budget',
  },
  openGraph: {
    title: 'Calculateur de budget Erasmus Madrid 2025',
    description:
      "Loyer, nourriture, sorties, transport — calcule ton budget Erasmus à Madrid en 30 secondes.",
    url: 'https://erasmus-madrid.fr/calculateur-budget',
    type: 'website',
  },
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculateur de budget Erasmus Madrid',
  applicationCategory: 'FinanceApplication',
  description:
    "Calculateur de budget mensuel interactif pour étudiants Erasmus à Madrid. Loyer, alimentation, transport, sorties.",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  operatingSystem: 'Web',
  url: 'https://erasmus-madrid.fr/calculateur-budget',
  inLanguage: 'fr-FR',
}

export default function CalculateurBudgetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-semibold px-4 py-2 rounded-full">
              <span aria-hidden="true">💶</span>
              <span>Outil gratuit 2025</span>
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3 leading-tight">
            Calculateur de budget Erasmus Madrid
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Ajuste les sliders selon ton mode de vie et découvre ton budget mensuel exact.
            Résultat mis à jour en temps réel.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Moyenne Erasmus Madrid : 780€/mois
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand" />
              5 catégories de dépenses
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Conseils personnalisés
            </span>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-warm py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BudgetWrapper />
        </div>
      </div>
    </>
  )
}
