import type { Metadata } from 'next'
import { faq } from '@/lib/faq'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ Erasmus Madrid 2025 — 100 questions réelles des étudiants français',
  description:
    "Toutes les réponses aux questions les plus posées par les Erasmus français à Madrid : logement, banque, SIM, admin, sorties. 100 vraies questions, réponses claires.",
  alternates: {
    canonical: 'https://erasmus-madrid.fr/faq',
  },
  openGraph: {
    title: 'FAQ Erasmus Madrid 2025 — 100 questions réelles',
    description:
      "Logement, banque, admin, sorties : 100 vraies questions posées par des étudiants français à Madrid. Réponses claires et actualisées.",
    url: 'https://erasmus-madrid.fr/faq',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.reponse,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-semibold px-4 py-2 rounded-full">
              <span aria-hidden="true">❓</span>
              <span>100 questions · mis à jour 2025</span>
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3 leading-tight">
            FAQ Erasmus Madrid
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Les vraies questions posées par des étudiants français à Madrid — et leurs réponses
            claires. Cherche par mot-clé ou filtre par thème.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              100 questions répondues
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand" />
              7 catégories
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Recherche instantanée
            </span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="bg-warm py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqClient />
        </div>
      </div>
    </>
  )
}
