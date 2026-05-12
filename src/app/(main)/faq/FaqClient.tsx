'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { faq, categoryLabels, type FaqItem, type FaqCategory } from '@/lib/faq'

// ── Highlight helper ─────────────────────────────────────────────────────────
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'))
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 text-yellow-900 rounded-sm not-italic">{p}</mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

// ── Accordion item ────────────────────────────────────────────────────────────
function AccordionItem({
  item,
  isOpen,
  onToggle,
  query,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
  query: string
}) {
  return (
    <div
      id={item.id}
      className={`border rounded-2xl transition-all duration-150 ${
        isOpen ? 'border-brand/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 min-w-0">
          {item.popularite === 5 && (
            <span className="shrink-0 text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full mt-0.5">
              🔥
            </span>
          )}
          <h3 className="font-semibold text-ink text-sm sm:text-base leading-snug">
            <Highlight text={item.question} query={query} />
          </h3>
        </div>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all ${
            isOpen ? 'border-brand text-brand bg-brand/5 rotate-45' : 'border-gray-300 text-gray-400'
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* Animated body */}
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1">
            <p className="text-gray-700 text-sm leading-relaxed">
              <Highlight text={item.reponse} query={query} />
            </p>
            {item.lien_article && (
              <Link
                href={item.lien_article}
                className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-brand hover:underline"
              >
                Lire le guide complet →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Ask modal ─────────────────────────────────────────────────────────────────
function AskModal({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState('')
  const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/erasmusmadrid'

  const send = () => {
    if (!text.trim()) return
    const msg = `Question Erasmus Madrid : ${text}`
    window.open(`${TELEGRAM_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-4 py-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-ink text-lg">Pose ta question</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        </div>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          rows={4}
          placeholder="Ma question sur l'Erasmus à Madrid..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <p className="text-xs text-gray-400 mt-2 mb-4">Ta question sera envoyée au groupe Telegram des Erasmus Madrid.</p>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={send}
            disabled={!text.trim()}
            className="flex-1 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors disabled:opacity-40"
          >
            Envoyer sur Telegram →
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
const ALL_CATEGORIES = 'all'
type ActiveCategory = FaqCategory | typeof ALL_CATEGORIES

export default function FaqClient() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(ALL_CATEGORIES)
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Handle hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setOpenId(hash)
      // Scroll to item after short delay for render
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }, [])

  // Featured question of the day (rotates by day of month)
  const featuredQuestion = useMemo(() => {
    const top = faq.filter((q) => q.popularite === 5)
    return top[new Date().getDate() % top.length]
  }, [])

  // Category counts
  const counts = useMemo(() => {
    const map: Partial<Record<FaqCategory, number>> = {}
    for (const item of faq) {
      map[item.categorie] = (map[item.categorie] ?? 0) + 1
    }
    return map
  }, [])

  // Filtered list
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return faq.filter((item) => {
      const matchCat = activeCategory === ALL_CATEGORIES || item.categorie === activeCategory
      const matchSearch =
        !q || item.question.toLowerCase().includes(q) || item.reponse.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  const handleToggle = (id: string) => {
    const newId = openId === id ? null : id
    setOpenId(newId)
    window.history.replaceState(
      null,
      '',
      newId ? `#${newId}` : window.location.pathname + window.location.search
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('https://erasmus-madrid.vercel.app/faq').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareWA = () => {
    const text = 'La FAQ des Erasmus à Madrid — 100 vraies questions 🇪🇸 → erasmus-madrid.vercel.app/faq'
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  const categories: { key: ActiveCategory; label: string }[] = [
    { key: ALL_CATEGORIES, label: `Toutes (${faq.length})` },
    ...Object.entries(categoryLabels).map(([key, label]) => ({
      key: key as FaqCategory,
      label: `${label} (${counts[key as FaqCategory] ?? 0})`,
    })),
  ]

  return (
    <>
      {/* Featured question */}
      {featuredQuestion && (
        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-5 mb-6">
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">
            🔥 Question du moment
          </p>
          <button
            onClick={() => {
              setActiveCategory(featuredQuestion.categorie)
              setSearch('')
              setOpenId(featuredQuestion.id)
              setTimeout(() => {
                document.getElementById(featuredQuestion.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }, 100)
            }}
            className="text-left font-semibold text-ink hover:text-brand transition-colors text-sm sm:text-base leading-snug"
          >
            {featuredQuestion.question}
          </button>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-4">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={searchRef}
          type="search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setOpenId(null) }}
          placeholder="Recherche : NIE, loyer, carte SIM, assurance..."
          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand shadow-sm"
          aria-label="Rechercher une question"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
            aria-label="Effacer la recherche"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide" role="tablist">
        {categories.map((c) => (
          <button
            key={c.key}
            role="tab"
            aria-selected={activeCategory === c.key}
            onClick={() => { setActiveCategory(c.key); setOpenId(null) }}
            className={`shrink-0 px-3 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
              activeCategory === c.key
                ? 'bg-brand text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-brand hover:text-brand'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs text-gray-400 mb-4">
        {filtered.length} question{filtered.length > 1 ? 's' : ''}
        {search ? ` pour "${search}"` : ''}
      </p>

      {/* Accordion list */}
      {filtered.length > 0 ? (
        <div className="space-y-2">
          {filtered.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              query={search}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
          <p className="font-semibold text-ink mb-1">Pas de réponse pour cette recherche</p>
          <p className="text-sm text-gray-500 mb-4">Pose ta question directement à la communauté Erasmus Madrid</p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-dark transition-colors"
          >
            Poser ma question sur Telegram →
          </button>
        </div>
      )}

      {/* Bottom share */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-ink mb-0.5">Tu n&apos;as pas trouvé ta réponse ?</p>
            <p className="text-sm text-gray-500">La communauté Telegram répond en quelques minutes</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="shrink-0 inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-dark transition-colors"
          >
            Poser une question →
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <p className="text-sm text-gray-500 w-full sm:w-auto sm:self-center">Partager cette FAQ :</p>
          <button
            onClick={shareWA}
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
          >
            {copied ? '✓ Copié !' : 'Copier le lien'}
          </button>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-lg hover:bg-brand-dark transition-colors"
        aria-label="Poser une question"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Poser une question
      </button>

      {/* Modal */}
      {showModal && <AskModal onClose={() => setShowModal(false)} />}
    </>
  )
}
