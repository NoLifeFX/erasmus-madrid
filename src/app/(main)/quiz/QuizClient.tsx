'use client'

import { useState } from 'react'
import Link from 'next/link'

type ProfileKey = 'fetatrd' | 'explorateur' | 'econome' | 'sociable' | 'studieux'

interface Profile {
  name: string
  emoji: string
  color: string
  description: string
  tips: string[]
  affiliate: { text: string; label: string; href: string }
  articles: { href: string; label: string }[]
}

interface QuestionOption {
  text: string
  profile: ProfileKey
}

interface Question {
  text: string
  options: QuestionOption[]
}

const profiles: Record<ProfileKey, Profile> = {
  fetatrd: {
    name: 'Le Fêtard de Malasaña',
    emoji: '🎉',
    color: '#C60B1E',
    description:
      "Tu es venu à Madrid pour vivre, pas pour étudier. Malasaña c'est ton quartier, les tapas à 1€ c'est ton régime, et tu rentres quand le soleil se lève.",
    tips: [
      'Meilleures boîtes : Kapital, Fabrik, Mondo Club — plein tarif ou prévente ?',
      'Happy hours 19h-21h dans tous les bars de Malasaña et Chueca',
      'Soirées ESN Erasmus : inscris-toi sur leur app pour les events exclusifs',
    ],
    affiliate: {
      text: "Pour payer les shots sans frais de change, Revolut est indispensable. Zéro commission sur les paiements en euros.",
      label: 'Ouvrir Revolut gratuitement →',
      href: '/articles/compte-bancaire-espagne-sans-nie',
    },
    articles: [
      { href: '/articles?cat=bons-plans', label: 'Les meilleurs bons plans Madrid' },
      { href: '/articles?cat=quartiers', label: 'Choisir son quartier à Madrid' },
    ],
  },
  explorateur: {
    name: "L'Explorateur de Retiro",
    emoji: '🌿',
    color: '#27500A',
    description:
      "Musées le matin, parcs l'après-midi, restos locaux le soir. Tu veux VRAIMENT découvrir Madrid, pas juste la photo pour Instagram.",
    tips: [
      'Musées gratuits le dimanche après-midi : Prado, Reina Sofía, Thyssen',
      'Marchés incontournables : El Rastro le dimanche, Mercado de San Miguel',
      'Quartiers cachés : Lavapiés, La Latina, Las Letras — loin des circuits touristiques',
    ],
    affiliate: {
      text: "Tu voyages chaque week-end ? L'assurance Chapka couvre tous tes déplacements hors Espagne.",
      label: 'Comparer les assurances →',
      href: '/articles/assurance-erasmus-espagne',
    },
    articles: [
      { href: '/articles?cat=quartiers', label: 'Guide des quartiers de Madrid' },
      { href: '/articles/assurance-erasmus-espagne', label: 'Assurance pour voyager le week-end' },
    ],
  },
  econome: {
    name: "L'Économe de Vallecas",
    emoji: '💰',
    color: '#633806',
    description:
      "Budget serré, esprit malin. Tu connais tous les Mercadona du coin, tu cuisines 90% du temps et tu es fier de vivre comme un vrai Madrilène.",
    tips: [
      'Abonnement mensuel Transporte Público : 20€/mois — rentabilisé en une semaine',
      'Courses : Mercadona et Lidl pour tout, évite Carrefour et El Corte Inglés',
      'Manger dehors : repère les menus del día à moins de 10€ avec eau et dessert',
    ],
    affiliate: {
      text: 'Zéro frais bancaires avec N26 — parfait pour gérer ton budget serré sans mauvaises surprises.',
      label: 'Ouvrir N26 gratuitement →',
      href: '/articles/compte-bancaire-espagne-sans-nie',
    },
    articles: [
      { href: '/articles?cat=banque', label: 'Compte bancaire sans frais' },
      { href: '/articles?cat=logement', label: 'Trouver un appart pas cher' },
    ],
  },
  sociable: {
    name: 'Le Sociable de Chueca',
    emoji: '🌈',
    color: '#3C3489',
    description:
      "En 2 semaines tu connais tout le monde. Ton Telegram déborde, tu organises des sorties pour 30 personnes et tu parles espagnol mieux que les locaux.",
    tips: [
      'ESN Madrid : l\'asso Erasmus qui organise tous les événements sociaux — rejoins dès l\'arrivée',
      "Tandem linguistique : trouve un Espagnol qui veut apprendre le français sur Tandem app",
      'Meetup.com : événements thématiques pour rencontrer des locaux et sortir du bubble Erasmus',
    ],
    affiliate: {
      text: 'Data illimitée avec Yoigo — pour rester connecté avec tes 500 nouveaux amis sans jamais manquer de réseau.',
      label: 'Comparer les SIM espagnoles →',
      href: '/articles/meilleure-carte-sim-espagne-erasmus',
    },
    articles: [
      { href: '/articles/meilleure-carte-sim-espagne-erasmus', label: 'Meilleure SIM pour Erasmus' },
      { href: '/articles?cat=bons-plans', label: 'Sortir à Madrid' },
    ],
  },
  studieux: {
    name: 'Le Studieux de Salamanca',
    emoji: '📚',
    color: '#0C447C',
    description:
      "Tu es là pour ton diplôme et tu l'assumes. Bibliothèque le matin, café tranquille l'après-midi, mais tu sais quand même où sont les meilleurs churros.",
    tips: [
      'Bibliothèques : BNE (gratuite), Biblioteca Regional de Madrid, et celle de ton université',
      'Cafés calmes pour bosser : Café Comercial, Federal Café, Toma Café (wifi fiable)',
      "Cours de langue : Instituto Cervantes, cours du soir à l'université, ou app Tandem",
    ],
    affiliate: {
      text: 'Reçois facilement l\'argent de ta famille avec Wise — sans frais cachés sur les virements.',
      label: 'Découvrir Wise →',
      href: '/articles/compte-bancaire-espagne-sans-nie',
    },
    articles: [
      { href: '/articles?cat=banque', label: 'Gérer son argent à Madrid' },
      { href: '/articles?cat=logement', label: 'Logement étudiant Madrid' },
    ],
  },
}

const questions: Question[] = [
  {
    text: 'Il est 23h un jeudi soir, tu fais quoi ?',
    options: [
      { text: "Je sors, c'est jeudi c'est comme vendredi 🍻", profile: 'fetatrd' },
      { text: "Je lis un livre sur l'histoire de Madrid 📖", profile: 'studieux' },
      { text: 'Je prépare mes courses Mercadona du lendemain 🛒', profile: 'econome' },
      { text: "J'organise une sortie pour 15 Erasmus 📱", profile: 'sociable' },
    ],
  },
  {
    text: 'Ton petit-déj idéal à Madrid ?',
    options: [
      { text: 'Churros con chocolate dans une chocolatería historique ☕', profile: 'explorateur' },
      { text: 'Café et tostada au bar du coin pour 1,50€ 🥖', profile: 'econome' },
      { text: 'Brunch avec 10 amis dans un café hipster de Malasaña 🥑', profile: 'sociable' },
      { text: 'Je skip le petit-déj, je dormais encore 😴', profile: 'fetatrd' },
    ],
  },
  {
    text: 'Comment tu trouves ton appart ?',
    options: [
      { text: 'Groupe Facebook, je négocie et je prends le moins cher 💸', profile: 'econome' },
      { text: 'Je cherche dans le quartier le plus festif possible 🎵', profile: 'fetatrd' },
      { text: 'Je prends le temps, je veux le quartier parfait 🗺️', profile: 'explorateur' },
      { text: 'Peu importe, tant que mes colocataires sont sympas 🤝', profile: 'sociable' },
    ],
  },
  {
    text: 'Un week-end libre, tu fais quoi ?',
    options: [
      { text: 'Road trip à Tolède ou Ségovie 🚗', profile: 'explorateur' },
      { text: 'Je rattrape mes cours en retard 📚', profile: 'studieux' },
      { text: 'Soirée vendredi, grasse mat samedi, soirée samedi 🌙', profile: 'fetatrd' },
      { text: 'Pique-nique géant au Retiro avec tous mes amis ☀️', profile: 'sociable' },
    ],
  },
  {
    text: 'Ton budget mensuel à Madrid ?',
    options: [
      { text: 'Moins de 600€, je gère parfaitement 💪', profile: 'econome' },
      { text: '600-800€, équilibré et sans stress ⚖️', profile: 'studieux' },
      { text: '800-1000€, je vis bien et je profite 😊', profile: 'explorateur' },
      { text: 'Je préfère ne pas regarder mon compte 🙈', profile: 'fetatrd' },
    ],
  },
  {
    text: 'Tu parles espagnol comment ?',
    options: [
      { text: 'Niveau débutant mais je fais des progrès 📈', profile: 'studieux' },
      { text: "Je suis venu exprès pour apprendre 🎓", profile: 'explorateur' },
      { text: "J'ai appris en 3 semaines par osmose 🤯", profile: 'sociable' },
      { text: '"Una cerveza por favor" c\'est suffisant 🍺', profile: 'fetatrd' },
    ],
  },
  {
    text: 'Ton endroit préféré à Madrid ?',
    options: [
      { text: 'Le Retiro un dimanche matin 🌳', profile: 'explorateur' },
      { text: 'La bibliothèque nationale 📖', profile: 'studieux' },
      { text: 'La rue où il y a les meilleurs bars 🍻', profile: 'fetatrd' },
      { text: "N'importe où tant qu'il y a du monde 🎊", profile: 'sociable' },
    ],
  },
  {
    text: 'Tu ramènes quoi de Madrid ?',
    options: [
      { text: 'Des photos de chaque monument visité 📸', profile: 'explorateur' },
      { text: 'Des économies (si si ça existe) 💰', profile: 'econome' },
      { text: '500 nouveaux contacts Instagram 📱', profile: 'sociable' },
      { text: 'Des souvenirs flous mais heureux ✨', profile: 'fetatrd' },
    ],
  },
  {
    text: 'Ta dépense imprévue la plus fréquente ?',
    options: [
      { text: 'Entrées de clubs 🎵', profile: 'fetatrd' },
      { text: 'Livres et billets de musées 🎨', profile: 'studieux' },
      { text: 'Cadeaux pour mes nouveaux amis 🎁', profile: 'sociable' },
      { text: "Jamais, j'ai tout budgété 📊", profile: 'econome' },
    ],
  },
  {
    text: 'Dans 10 ans tu raconteras quoi de ton Erasmus ?',
    options: [
      { text: 'Les soirées légendaires 🎉', profile: 'fetatrd' },
      { text: "Les endroits secrets que j'ai découverts 🗺️", profile: 'explorateur' },
      { text: "Les amis que j'ai gardés à vie 💛", profile: 'sociable' },
      { text: "Que j'ai validé tous mes cours avec mention 🏆", profile: 'studieux' },
    ],
  },
]

type Scores = Record<ProfileKey, number>

function computeResult(answers: ProfileKey[]): ProfileKey {
  const scores: Scores = { fetatrd: 0, explorateur: 0, econome: 0, sociable: 0, studieux: 0 }
  for (const a of answers) scores[a]++

  const maxScore = Math.max(...Object.values(scores))
  const winners = (Object.keys(scores) as ProfileKey[]).filter((k) => scores[k] === maxScore)
  if (winners.length === 1) return winners[0]

  // Tiebreak: last 3 answers
  const tieScores: Scores = { fetatrd: 0, explorateur: 0, econome: 0, sociable: 0, studieux: 0 }
  for (const a of answers.slice(-3)) tieScores[a]++
  const maxTie = Math.max(...winners.map((w) => tieScores[w]))
  return winners.find((w) => tieScores[w] === maxTie) ?? winners[0]
}

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
  </svg>
)

export default function QuizClient() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<ProfileKey[]>([])
  const [selected, setSelected] = useState<ProfileKey | null>(null)
  const [animating, setAnimating] = useState(false)
  const [showAllProfiles, setShowAllProfiles] = useState(false)
  const [copied, setCopied] = useState(false)

  const startQuiz = () => {
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setAnimating(false)
    setPhase('quiz')
  }

  const handleAnswer = (profileKey: ProfileKey) => {
    if (selected !== null || animating) return
    setSelected(profileKey)

    setTimeout(() => {
      const newAnswers = [...answers, profileKey]
      if (current < 9) {
        setAnimating(true)
        setTimeout(() => {
          setAnswers(newAnswers)
          setCurrent((c) => c + 1)
          setSelected(null)
          setAnimating(false)
        }, 180)
      } else {
        setAnswers(newAnswers)
        setPhase('result')
        setSelected(null)
      }
    }, 320)
  }

  const reset = () => {
    setPhase('intro')
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setAnimating(false)
    setShowAllProfiles(false)
    setCopied(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('https://erasmus-madrid.vercel.app/quiz').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="min-h-[calc(100dvh-4rem)] bg-warm flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="text-7xl mb-6 select-none">🎯</div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
            Quel type d&apos;Erasmus es-tu ?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            10 questions pour découvrir ton profil Erasmus à Madrid.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Fêtard, Explorateur, Économe, Sociable ou Studieux ?
          </p>
          <button
            onClick={startQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-colors shadow-lg"
          >
            Commencer le quiz
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-gray-400 text-xs mt-4">2 minutes · Sans inscription · À partager</p>
        </div>
      </div>
    )
  }

  // ── QUIZ ───────────────────────────────────────────────────────────────────
  if (phase === 'quiz') {
    const q = questions[current]
    const progressPct = ((current + 1) / 10) * 100

    return (
      <div className="min-h-[calc(100dvh-4rem)] bg-warm flex flex-col">
        {/* Progress */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-16 z-30">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-brand">Question {current + 1} / 10</span>
              <span className="text-gray-400">{Math.round(progressPct)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question + answers */}
        <div className="flex-1 flex items-center justify-center px-4 py-6">
          <div
            className={`max-w-lg w-full transition-all duration-150 ${
              animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink text-center mb-6 leading-snug px-2">
              {q.text}
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {q.options.map((opt) => {
                const isSelected = selected === opt.profile
                const isOther = selected !== null && !isSelected
                return (
                  <button
                    key={`${current}-${opt.profile}`}
                    onClick={() => handleAnswer(opt.profile)}
                    disabled={selected !== null}
                    className={`
                      w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-sm sm:text-base
                      transition-all duration-200
                      ${
                        isSelected
                          ? 'border-brand bg-brand text-white scale-[1.01] shadow-md'
                          : isOther
                          ? 'border-gray-100 bg-white text-gray-300 cursor-default'
                          : 'border-gray-200 bg-white text-gray-800 hover:border-brand hover:text-brand hover:shadow-sm active:scale-[0.99] cursor-pointer'
                      }
                    `}
                  >
                    {opt.text}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── RESULT ─────────────────────────────────────────────────────────────────
  if (phase !== 'result' || answers.length < 10) return null

  const resultKey = computeResult(answers)
  const profile = profiles[resultKey]
  const shareText = `Je suis "${profile.name}" ${profile.emoji} sur Erasmus Madrid ! Découvre ton profil 👉`
  const shareUrl = 'https://erasmus-madrid.vercel.app/quiz'
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`

  return (
    <div className="bg-warm pb-20">
      <div className="max-w-lg mx-auto px-4 pt-8 space-y-4">

        {/* Profile card */}
        <div
          className="rounded-3xl p-8 text-center text-white shadow-xl"
          style={{ backgroundColor: profile.color }}
        >
          <div className="text-6xl mb-4 select-none">{profile.emoji}</div>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
            Ton profil Erasmus
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            {profile.name}
          </h1>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">{profile.description}</p>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-bold text-ink text-base mb-4 flex items-center gap-2">
            <span aria-hidden="true">💡</span> Nos conseils pour toi
          </h2>
          <ul className="space-y-3">
            {profile.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <span className="font-bold mt-0.5 shrink-0" style={{ color: profile.color }}>→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Affiliate */}
        <div className="rounded-2xl p-5 border-2" style={{ borderColor: profile.color }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: profile.color }}>
            Le bon plan pour ton profil
          </p>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{profile.affiliate.text}</p>
          <Link
            href={profile.affiliate.href}
            className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-75 transition-opacity"
            style={{ color: profile.color }}
          >
            {profile.affiliate.label}
          </Link>
        </div>

        {/* Recommended articles */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-ink text-base mb-3">Articles recommandés pour toi</h2>
          <div className="space-y-2">
            {profile.articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand transition-colors"
              >
                <span className="text-brand" aria-hidden="true">→</span>
                {a.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-ink text-base mb-1 text-center">Partage ton résultat !</h2>
          <p className="text-xs text-gray-400 text-center mb-4">Tes amis méritent de connaître leur profil aussi</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 text-sm font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              {copied ? (
                <><span aria-hidden="true">✓</span> Copié !</>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copier le lien
                </>
              )}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-brand hover:text-brand transition-colors"
          >
            🔄 Refaire le quiz
          </button>
          <button
            onClick={() => setShowAllProfiles((v) => !v)}
            className="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            {showAllProfiles ? 'Masquer les profils' : '👀 Voir tous les profils'}
          </button>
        </div>

        {/* All profiles */}
        {showAllProfiles && (
          <div className="space-y-3 pt-2">
            <h2 className="font-bold text-ink text-base">Les 5 profils Erasmus</h2>
            {(Object.entries(profiles) as [ProfileKey, Profile][]).map(([key, p]) => (
              <div
                key={key}
                className="rounded-2xl p-5 border-2 bg-white transition-all"
                style={{
                  borderColor: p.color,
                  backgroundColor: key === resultKey ? p.color + '12' : undefined,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl select-none">{p.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <p className="font-bold text-sm text-ink">{p.name}</p>
                      {key === resultKey && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: p.color }}
                        >
                          Ton profil
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Telegram CTA */}
        <div className="pt-2">
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/erasmusmadrid'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 hover:bg-blue-100 transition-colors"
          >
            <TelegramIcon />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Rejoins le groupe Telegram</p>
              <p className="text-xs text-gray-500">500+ étudiants français à Madrid</p>
            </div>
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  )
}
