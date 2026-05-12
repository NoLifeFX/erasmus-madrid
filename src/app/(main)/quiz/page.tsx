import type { Metadata } from 'next'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: "Quiz Erasmus Madrid — Quel type d'Erasmus es-tu ?",
  description:
    "Réponds à 10 questions et découvre ton profil Erasmus à Madrid. Fêtard, Explorateur, Économe... et partage ton résultat !",
  alternates: {
    canonical: 'https://erasmus-madrid.fr/quiz',
  },
  openGraph: {
    title: "Quiz Erasmus Madrid — Quel type d'Erasmus es-tu ?",
    description:
      "Réponds à 10 questions et découvre ton profil Erasmus à Madrid. Fêtard, Explorateur, Économe... et partage ton résultat !",
    url: 'https://erasmus-madrid.fr/quiz',
    type: 'website',
  },
}

export default function QuizPage() {
  return <QuizClient />
}
