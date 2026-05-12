'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, CircleMarker, useMap } from 'react-leaflet'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { quartiers, type Quartier } from '@/lib/quartiers'

// Fix default marker icons (required even when using CircleMarker)
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

type Filter = 'all' | 'budget' | 'festif' | 'calme'

const PRICE_MIN = 300
const PRICE_MAX = 1200

function priceColor(loyer: number) {
  if (loyer < 500) return '#22c55e'
  if (loyer < 700) return '#eab308'
  return '#ef4444'
}

function priceTailwind(loyer: number) {
  if (loyer < 500) return 'text-green-600'
  if (loyer < 700) return 'text-yellow-600'
  return 'text-red-600'
}

// ── Map controller: pans map when a quartier is selected from outside ────────
function MapController({ target }: { target: string | null }) {
  const map = useMap()
  useEffect(() => {
    if (!target) return
    const q = quartiers.find((q) => q.id === target)
    if (q) map.flyTo(q.coords, 15, { duration: 0.5 })
  }, [target, map])
  return null
}

// ── Price bar ────────────────────────────────────────────────────────────────
function PriceBar({ loyer }: { loyer: number }) {
  const pct = ((loyer - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: priceColor(loyer) }}
      />
    </div>
  )
}

// ── Star rating ───────────────────────────────────────────────────────────────
function Stars({ n }: { n: number }) {
  return (
    <span className="text-sm leading-none">
      <span className="text-yellow-400">{'★'.repeat(n)}</span>
      <span className="text-gray-200">{'★'.repeat(5 - n)}</span>
    </span>
  )
}

// ── Detail panel ─────────────────────────────────────────────────────────────
function DetailPanel({ q, onClose }: { q: Quartier; onClose?: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100" style={{ backgroundColor: q.couleur + '18' }}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-3xl block mb-2" aria-hidden="true">{q.emoji}</span>
            <h3 className="font-serif text-xl font-bold text-ink leading-tight">{q.nom}</h3>
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full text-white mt-2"
              style={{ backgroundColor: q.couleur }}
            >
              {q.vibe}
            </span>
          </div>
          <div className="text-right shrink-0">
            <p className={`text-xl font-bold ${priceTailwind(q.loyer_moyen)}`}>{q.loyer_moyen}€</p>
            <p className="text-xs text-gray-400">moy./mois</p>
            {onClose && (
              <button
                onClick={onClose}
                className="mt-2 text-gray-400 hover:text-gray-600 text-sm"
                aria-label="Fermer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4 max-h-[420px] overflow-y-auto">
        {/* Price range */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>{q.loyer_min}€ — {q.loyer_max}€ / mois</span>
            <span className={`font-semibold ${priceTailwind(q.loyer_moyen)}`}>Moy. {q.loyer_moyen}€</span>
          </div>
          <PriceBar loyer={q.loyer_moyen} />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">{q.description}</p>

        {/* Pour */}
        <div>
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">✅ Parfait pour</p>
          <ul className="space-y-1">
            {q.pour.map((item) => (
              <li key={item} className="text-xs text-gray-700 flex items-center gap-1.5">
                <span className="text-green-500 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contre */}
        <div>
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">❌ Inconvénients</p>
          <ul className="space-y-1">
            {q.contre.map((item) => (
              <li key={item} className="text-xs text-gray-700 flex items-center gap-1.5">
                <span className="text-red-400 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Métros */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">🚇 Métro</p>
          <div className="flex flex-wrap gap-1.5">
            {q.metros.map((m) => (
              <span key={m} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Bars */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">🍺 Bars emblématiques</p>
          <p className="text-xs text-gray-600">{q.bars_emblematiques.join(' · ')}</p>
        </div>

        {/* CTA */}
        <Link
          href={q.article_lien}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90 bg-brand"
        >
          Voir le guide complet →
        </Link>

        {/* Affiliate */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Trouve ta coloc à {q.nom}</p>
          <Link
            href="/articles?cat=logement"
            className="text-xs font-semibold text-brand hover:underline"
          >
            Voir les annonces de colocation →
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Comparison table ─────────────────────────────────────────────────────────
function ComparisonTable({
  selectedId,
  onSelect,
  isVisible,
}: {
  selectedId: string | null
  onSelect: (id: string) => void
  isVisible: (q: Quartier) => boolean
}) {
  const sorted = [...quartiers].sort((a, b) => a.loyer_moyen - b.loyer_moyen)
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <h2 className="font-bold text-ink text-base">Comparaison des quartiers</h2>
        <p className="text-xs text-gray-400 mt-0.5">Cliquez sur une ligne pour voir le quartier sur la carte</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-4 py-3 font-semibold">Quartier</th>
              <th className="text-left px-4 py-3 font-semibold">Loyer moyen</th>
              <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Ambiance</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Métro</th>
              <th className="text-left px-4 py-3 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {sorted.map((q) => {
              const isActive = selectedId === q.id
              const dimmed = !isVisible(q)
              return (
                <tr
                  key={q.id}
                  onClick={() => onSelect(q.id)}
                  className={`cursor-pointer transition-colors ${
                    isActive ? 'bg-brand/5' : dimmed ? 'opacity-40' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />}
                      <span className="text-base" aria-hidden="true">{q.emoji}</span>
                      <span className={`font-semibold ${isActive ? 'text-brand' : 'text-ink'}`}>{q.nom}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`font-bold ${priceTailwind(q.loyer_moyen)}`}>{q.loyer_moyen}€</span>
                    <span className="text-gray-400 text-xs">/mois</span>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="text-xs text-gray-600">{q.vibe}</span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-xs text-gray-500">{q.metros.slice(0, 2).join(', ')}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Stars n={q.popularite} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function MapQuartiers() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [filter, setFilter] = useState<Filter>('all')
  const [panTarget, setPanTarget] = useState<string | null>(null)

  const selected = quartiers.find((q) => q.id === selectedId) ?? null

  const isVisible = (q: Quartier) => {
    if (filter === 'budget') return q.loyer_moyen < 500
    if (filter === 'festif') return q.popularite >= 4
    if (filter === 'calme') return q.popularite <= 3
    return true
  }

  const selectFromTable = (id: string) => {
    setSelectedId(id)
    setPanTarget(id)
    setTimeout(() => setPanTarget(null), 900)
  }

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: '🌟 Tous' },
    { key: 'budget', label: '💰 Budget < 500€' },
    { key: 'festif', label: '🎉 Festif' },
    { key: 'calme', label: '📚 Calme' },
  ]

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtres de quartiers">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === f.key
                ? 'bg-brand text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-brand hover:text-brand'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Map + Sidebar */}
      <div className="lg:flex lg:gap-5 lg:items-start">
        {/* Map column */}
        <div className="lg:flex-1">
          <div className="h-[350px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <MapContainer
              center={[40.4168, -3.7038]}
              zoom={13}
              className="h-full w-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapController target={panTarget} />

              {quartiers.map((q) => {
                const visible = isVisible(q)
                const isSelected = selectedId === q.id
                const isHovered = hoveredId === q.id
                return (
                  <CircleMarker
                    key={q.id}
                    center={q.coords}
                    pathOptions={{
                      color: q.couleur,
                      fillColor: q.couleur,
                      fillOpacity: !visible ? 0.08 : isSelected ? 0.75 : isHovered ? 0.6 : 0.3,
                      weight: isSelected ? 3 : 2,
                      opacity: visible ? 1 : 0.25,
                    }}
                    radius={30}
                    eventHandlers={{
                      click: () => setSelectedId(q.id),
                      mouseover: () => setHoveredId(q.id),
                      mouseout: () => setHoveredId(null),
                    }}
                  />
                )
              })}
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-gray-500 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block shrink-0" />
              🟢 &lt; 500€/mois
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block shrink-0" />
              🟡 500–700€/mois
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block shrink-0" />
              🔴 &gt; 700€/mois
            </span>
            <span className="text-gray-400 hidden sm:inline">· Cliquez sur un cercle pour les détails</span>
          </div>
        </div>

        {/* Detail sidebar */}
        <div className="lg:w-80 xl:w-96 mt-4 lg:mt-0">
          {selected ? (
            <DetailPanel
              q={selected}
              onClose={() => setSelectedId(null)}
            />
          ) : (
            <div className="h-40 lg:h-full flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-8 text-center">
              <div>
                <p className="text-3xl mb-3" aria-hidden="true">👆</p>
                <p className="font-semibold text-gray-700 text-sm">Cliquez sur un quartier</p>
                <p className="text-gray-400 text-xs mt-1">pour voir prix, ambiance et conseils</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile detail (same panel, below map on small screens) — rendered inline above on desktop */}

      {/* Comparison table */}
      <ComparisonTable
        selectedId={selectedId}
        onSelect={selectFromTable}
        isVisible={isVisible}
      />
    </div>
  )
}
