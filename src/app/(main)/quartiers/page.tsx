import type { Metadata } from 'next'
import { quartiers } from '@/lib/quartiers'
import MapWrapper from './MapWrapper'

export const metadata: Metadata = {
  title: 'Carte des quartiers Erasmus Madrid 2025 — Où habiter ?',
  description:
    "Carte interactive des meilleurs quartiers pour Erasmus français à Madrid. Prix des loyers, ambiance, transports, bars — tout sur une carte cliquable.",
  alternates: {
    canonical: 'https://erasmus-madrid.fr/quartiers',
  },
  openGraph: {
    title: 'Carte des quartiers Erasmus Madrid 2025 — Où habiter ?',
    description:
      "Carte interactive des meilleurs quartiers pour Erasmus à Madrid. Prix, ambiance, transports sur une carte cliquable.",
    url: 'https://erasmus-madrid.fr/quartiers',
    type: 'website',
  },
}


const faqs = [
  {
    question: "Quel est le quartier le moins cher pour un Erasmus à Madrid ?",
    answer:
      "Vallecas est le quartier le moins cher de Madrid avec des loyers moyens autour de 400€/mois. Lavapiés est aussi très abordable (500€/mois) tout en étant plus central et bien desservi.",
  },
  {
    question: "Où habitent la plupart des Erasmus à Madrid ?",
    answer:
      "La majorité des Erasmus se concentrent à Malasaña et Chueca pour l'ambiance festive, ou à Lavapiés pour les prix abordables. Ces trois quartiers forment le triangle Erasmus de Madrid.",
  },
  {
    question: "Quel budget prévoir pour un loyer à Madrid en 2025 ?",
    answer:
      "Il faut compter entre 400€ et 700€/mois pour une chambre en colocation selon le quartier. Le loyer moyen toutes zones confondues est d'environ 600€. Vallecas (400€) est le moins cher, Salamanca (900€) le plus onéreux.",
  },
  {
    question: "Malasaña ou Chueca : quel quartier choisir pour son Erasmus ?",
    answer:
      "Malasaña est plus alternatif et rock'n'roll avec de nombreux concerts et bars vintage, tandis que Chueca est plus festif et inclusif avec une communauté internationale très active. Les deux ont des loyers similaires (620-680€). Choisissez selon votre style de vie.",
  },
  {
    question: "Est-il possible de trouver une coloc à Madrid pour moins de 500€ ?",
    answer:
      "Oui, c'est possible dans les quartiers de Vallecas (300-500€), Lavapiés (400-650€) ou dans certaines parties de Chamberí. Il faut chercher tôt (2-3 mois avant l'arrivée) et être flexible sur la taille de la chambre.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const placesSchema = quartiers.map((q) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: q.nom,
  description: q.description,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: q.coords[0],
    longitude: q.coords[1],
  },
  containedInPlace: {
    '@type': 'City',
    name: 'Madrid',
    addressCountry: 'ES',
  },
}))

export default function QuartiersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {placesSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-semibold px-4 py-2 rounded-full">
              <span aria-hidden="true">🗺️</span>
              <span>Outil interactif 2025</span>
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3 leading-tight">
            Carte des quartiers Erasmus à Madrid
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Cliquez sur un quartier pour voir loyers, ambiance, transports et conseils.
            Utilisez les filtres pour trouver le quartier qui correspond à votre profil.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              7 quartiers comparés
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand inline-block" />
              Prix mis à jour 2025
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Données vérifiées par des Erasmus
            </span>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="bg-warm py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapWrapper />
        </div>
      </div>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-8 text-center"
          >
            Questions fréquentes sur les quartiers de Madrid
          </h2>
          <dl className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-warm rounded-2xl p-6 border border-gray-100">
                <dt className="font-semibold text-ink text-base leading-snug mb-3">{faq.question}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
