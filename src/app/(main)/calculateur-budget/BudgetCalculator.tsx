'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

// ── Sub-components ────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  id,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  id: string
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 ${
        checked ? 'bg-brand' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

function ToggleRow({
  label,
  sub,
  checked,
  onChange,
  id,
}: {
  label: string
  sub?: string
  checked: boolean
  onChange: (v: boolean) => void
  id: string
}) {
  return (
    <label htmlFor={id} className="flex items-center justify-between gap-3 cursor-pointer group">
      <div>
        <p className="text-sm font-medium text-gray-800 group-hover:text-ink transition-colors">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      <Toggle checked={checked} onChange={onChange} id={id} />
    </label>
  )
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => `${v}€`,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-base font-bold text-brand">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
        style={{ accentColor: '#C60B1E' }}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

function ProfileButton<T extends string>({
  value,
  current,
  onSelect,
  icon,
  label,
  sub,
}: {
  value: T
  current: T
  onSelect: (v: T) => void
  icon: string
  label: string
  sub: string
}) {
  const active = value === current
  return (
    <button
      onClick={() => onSelect(value)}
      className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl border-2 text-center transition-all ${
        active
          ? 'border-brand bg-brand/5 text-brand'
          : 'border-gray-200 bg-white text-gray-600 hover:border-brand/40'
      }`}
    >
      <span className="text-xl" aria-hidden="true">{icon}</span>
      <span className="text-xs font-semibold">{label}</span>
      <span className="text-xs text-gray-400">{sub}</span>
    </button>
  )
}

function Card({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="font-bold text-ink text-base mb-5 flex items-center gap-2">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

type AlimProfil = 'cuisine' | 'mixte' | 'dehors'
type SortiesProfil = 'calme' | 'actif' | 'fetard'

const CHART_COLORS = {
  logement: '#C60B1E',
  alimentation: '#22c55e',
  transport: '#3b82f6',
  sorties: '#f59e0b',
  divers: '#8b5cf6',
}

const MOYENNE_ERASMUS = 780

// ── Main component ────────────────────────────────────────────────────────────

export default function BudgetCalculator() {
  // Logement
  const [loyer, setLoyer] = useState(550)
  const [chargesIncluses, setChargesIncluses] = useState(true)
  const [colocation, setColocation] = useState(true)

  // Alimentation
  const [profilAlim, setProfilAlim] = useState<AlimProfil>('mixte')
  const [cafes, setCafes] = useState(30)
  const [livraison, setLivraison] = useState(false)

  // Transport
  const [abonnement, setAbonnement] = useState(true)
  const [velo, setVelo] = useState(false)
  const [uber, setUber] = useState(false)

  // Sorties
  const [profilSorties, setProfilSorties] = useState<SortiesProfil>('actif')
  const [voyages, setVoyages] = useState(50)
  const [sport, setSport] = useState(false)
  const [musees, setMusees] = useState(false)

  // Divers
  const [sim, setSim] = useState(20)
  const [vetements, setVetements] = useState(40)
  const [sante, setSante] = useState(20)
  const [assurance, setAssurance] = useState(false)

  const [copied, setCopied] = useState(false)

  // ── Computation ─────────────────────────────────────────────────────────────

  const { logement, alimentation, transport, sorties, divers, total } = useMemo(() => {
    const logement = loyer + (!chargesIncluses ? 80 : 0) + (!colocation ? 200 : 0)
    const alimBase: Record<AlimProfil, number> = { cuisine: 150, mixte: 250, dehors: 400 }
    const alimentation = alimBase[profilAlim] + cafes + (livraison ? 40 : 0)
    const transport = (abonnement ? 54 : 74) + (velo ? 15 : 0) + (uber ? 30 : 0)
    const sortiesBase: Record<SortiesProfil, number> = { calme: 50, actif: 150, fetard: 300 }
    const sorties = sortiesBase[profilSorties] + voyages + (sport ? 30 : 0) + (musees ? 20 : 0)
    const divers = sim + vetements + sante + (assurance ? 25 : 0)
    return { logement, alimentation, transport, sorties, divers, total: logement + alimentation + transport + sorties + divers }
  }, [loyer, chargesIncluses, colocation, profilAlim, cafes, livraison, abonnement, velo, uber, profilSorties, voyages, sport, musees, sim, vetements, sante, assurance])

  const chartData = [
    { name: 'Logement', value: logement, fill: CHART_COLORS.logement },
    { name: 'Alimentation', value: alimentation, fill: CHART_COLORS.alimentation },
    { name: 'Transport', value: transport, fill: CHART_COLORS.transport },
    { name: 'Sorties', value: sorties, fill: CHART_COLORS.sorties },
    { name: 'Divers', value: divers, fill: CHART_COLORS.divers },
  ]

  const profil = useMemo(() => {
    if (total < 600) return { icon: '🟢', label: 'Super Économe', desc: 'Tu maîtrises ton budget mieux que 90% des Erasmus' }
    if (total < 800) return { icon: '🟡', label: 'Équilibré', desc: 'Le budget idéal pour profiter sans se ruiner' }
    if (total < 1000) return { icon: '🟠', label: 'Confortable', desc: 'Tu vis bien, surveille les postes variables' }
    return { icon: '🔴', label: 'Grand Vivant', desc: 'Pense à appeler tes parents 😅' }
  }, [total])

  const tips = useMemo(() => {
    const list: { text: string; href: string }[] = []
    if (loyer > 700) list.push({ text: "Tu paies trop cher — voir notre guide des quartiers pas chers", href: "/quartiers" })
    if (profilAlim === 'dehors') list.push({ text: "Cuisiner te ferait économiser 150€/mois — nos astuces Mercadona", href: "/articles?cat=bons-plans" })
    if (!abonnement) list.push({ text: "L'abonnement jeune 20€ te ferait économiser 34€/mois", href: "/articles?cat=bons-plans" })
    if (!assurance) list.push({ text: "Une assurance Erasmus coûte 25€/mois et peut te sauver la vie", href: "/articles/assurance-erasmus-espagne" })
    return list.slice(0, 3)
  }, [loyer, profilAlim, abonnement, assurance])

  const diff = total - MOYENNE_ERASMUS
  const barPct = Math.min((total / 1500) * 100, 100)
  const barColor = total < 700 ? 'bg-green-500' : total < 1000 ? 'bg-orange-500' : 'bg-red-500'

  const reset = () => {
    setLoyer(550); setChargesIncluses(true); setColocation(true)
    setProfilAlim('mixte'); setCafes(30); setLivraison(false)
    setAbonnement(true); setVelo(false); setUber(false)
    setProfilSorties('actif'); setVoyages(50); setSport(false); setMusees(false)
    setSim(20); setVetements(40); setSante(20); setAssurance(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('https://erasmus-madrid.vercel.app/calculateur-budget').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareWA = () => {
    const text = `J'ai calculé mon budget Erasmus Madrid : ${total}€/mois 🇪🇸 Calcule le tien → erasmus-madrid.vercel.app/calculateur-budget`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Mobile sticky total bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-xl px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <p className="text-xs text-gray-500">Budget mensuel</p>
            <p className="text-2xl font-bold text-brand leading-tight">{total}€</p>
          </div>
          <a href="#results" className="text-sm font-semibold text-brand underline underline-offset-2">
            Voir le détail ↓
          </a>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-5 lg:gap-8 lg:items-start pb-24 lg:pb-0">
        {/* ── Left: categories ── */}
        <div className="lg:col-span-3 space-y-5">

          {/* Logement */}
          <Card title="Logement" icon="🏠">
            <SliderField
              label="Loyer mensuel"
              value={loyer}
              min={300}
              max={900}
              step={50}
              onChange={setLoyer}
            />
            <p className="text-xs text-gray-400 -mt-2 bg-gray-50 rounded-lg px-3 py-2">
              Malasaña : ~600€ · Vallecas : ~400€ · Salamanca : ~750€
            </p>
            <ToggleRow
              id="charges"
              label="Charges incluses dans le loyer"
              sub="Sinon +80€/mois"
              checked={chargesIncluses}
              onChange={setChargesIncluses}
            />
            <ToggleRow
              id="coloc"
              label="En colocation"
              sub="Studio seul = +200€/mois"
              checked={colocation}
              onChange={setColocation}
            />
          </Card>

          {/* Alimentation */}
          <Card title="Alimentation" icon="🍕">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Ton mode de vie alimentaire</p>
              <div className="flex gap-2">
                <ProfileButton<AlimProfil> value="cuisine" current={profilAlim} onSelect={setProfilAlim} icon="🏠" label="Cuisines souvent" sub="150€/mois" />
                <ProfileButton<AlimProfil> value="mixte" current={profilAlim} onSelect={setProfilAlim} icon="⚖️" label="Mixte" sub="250€/mois" />
                <ProfileButton<AlimProfil> value="dehors" current={profilAlim} onSelect={setProfilAlim} icon="🍽️" label="Mange dehors" sub="400€/mois" />
              </div>
            </div>
            <SliderField label="Cafés & snacks" value={cafes} min={0} max={100} step={5} onChange={setCafes} />
            <ToggleRow id="livraison" label="Livraison (Glovo / Uber Eats)" sub="+40€/mois" checked={livraison} onChange={setLivraison} />
          </Card>

          {/* Transport */}
          <Card title="Transport" icon="🚇">
            <ToggleRow
              id="metro"
              label="Abonnement mensuel métro/bus"
              sub={abonnement ? "54€/mois inclus" : "À la carte : +20€ vs abonnement"}
              checked={abonnement}
              onChange={setAbonnement}
            />
            {abonnement && (
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-800">
                💡 L&apos;abonnement jeune <strong>-26 ans coûte 20€/mois</strong> — économise 34€ !
                <Link href="/articles?cat=bons-plans" className="ml-1 underline font-semibold">En savoir plus</Link>
              </div>
            )}
            <ToggleRow id="velo" label="Vélo / trottinette" sub="+15€/mois" checked={velo} onChange={setVelo} />
            <ToggleRow id="uber" label="Uber / Cabify occasionnel" sub="+30€/mois" checked={uber} onChange={setUber} />
          </Card>

          {/* Sorties */}
          <Card title="Sorties & loisirs" icon="🎉">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Ton profil sorties</p>
              <div className="flex gap-2">
                <ProfileButton<SortiesProfil> value="calme" current={profilSorties} onSelect={setProfilSorties} icon="📚" label="Calme" sub="50€/mois" />
                <ProfileButton<SortiesProfil> value="actif" current={profilSorties} onSelect={setProfilSorties} icon="🎭" label="Actif" sub="150€/mois" />
                <ProfileButton<SortiesProfil> value="fetard" current={profilSorties} onSelect={setProfilSorties} icon="🎉" label="Fêtard" sub="300€/mois" />
              </div>
            </div>
            <SliderField label="Voyages week-end" value={voyages} min={0} max={200} step={10} onChange={setVoyages} />
            <ToggleRow id="sport" label="Abonnement salle de sport" sub="+30€/mois" checked={sport} onChange={setSport} />
            <ToggleRow id="musees" label="Musées & culture" sub="+20€/mois" checked={musees} onChange={setMusees} />
          </Card>

          {/* Divers */}
          <Card title="Divers" icon="📱">
            <SliderField label="Téléphone / SIM espagnole" value={sim} min={10} max={50} step={5} onChange={setSim} />
            <SliderField label="Vêtements & achats" value={vetements} min={0} max={150} step={10} onChange={setVetements} />
            <SliderField label="Santé & pharmacie" value={sante} min={0} max={80} step={5} onChange={setSante} />
            <ToggleRow id="assurance" label="Assurance Erasmus" sub="+25€/mois" checked={assurance} onChange={setAssurance} />
          </Card>

        </div>

        {/* ── Right: results panel ── */}
        <div id="results" className="lg:col-span-2 mt-6 lg:mt-0">
          <div className="sticky top-24 space-y-4">

            {/* Total */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Budget mensuel total</p>
              <p className="text-5xl font-bold text-brand leading-none mb-1">{total}€</p>
              <p className="text-sm text-gray-400 mb-4">
                {diff > 0 ? (
                  <span className="text-red-500">+{diff}€ que la moyenne Erasmus ({MOYENNE_ERASMUS}€)</span>
                ) : diff < 0 ? (
                  <span className="text-green-600">{diff}€ que la moyenne Erasmus ({MOYENNE_ERASMUS}€)</span>
                ) : (
                  <span>Égal à la moyenne Erasmus Madrid</span>
                )}
              </p>

              {/* Progress bar */}
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                  style={{ width: `${barPct}%` }}
                />
              </div>

              {/* Profile badge */}
              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="font-bold text-sm text-ink">{profil.icon} {profil.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{profil.desc}</p>
              </div>
            </div>

            {/* Donut chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-ink mb-4">Répartition du budget</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value">
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: unknown) => [`${Number(value)}€`, '']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-3">
                {chartData.map((d) => (
                  <div key={d.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.fill }} />
                      <span className="text-gray-600">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-ink">{d.value}€</span>
                      <span className="text-gray-400 w-8 text-right">{total > 0 ? Math.round((d.value / total) * 100) : 0}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between text-xs">
                <span className="text-gray-500">Projection sur 10 mois</span>
                <span className="font-bold text-ink">{total * 10}€</span>
              </div>
            </div>

            {/* Tips */}
            {tips.length > 0 && (
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-3">Conseils personnalisés</p>
                <ul className="space-y-2.5">
                  {tips.map((tip, i) => (
                    <li key={i} className="text-xs text-amber-900 leading-relaxed flex gap-2">
                      <span className="shrink-0">💡</span>
                      <Link href={tip.href} className="hover:underline">{tip.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Affiliates */}
            <div className="space-y-3">
              {assurance && (
                <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">🛡️</span>
                  <div>
                    <p className="text-xs font-semibold text-ink">Assurer ton Erasmus dès 25€/mois</p>
                    <Link href="/articles/assurance-erasmus-espagne" className="text-xs text-brand hover:underline font-medium">
                      Comparer Chapka, AVA, AVI →
                    </Link>
                  </div>
                </div>
              )}
              <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-start gap-3">
                <span className="text-xl shrink-0" aria-hidden="true">💳</span>
                <div>
                  <p className="text-xs font-semibold text-ink">0 frais bancaires à Madrid avec Revolut</p>
                  <Link href="/articles/compte-bancaire-espagne-sans-nie" className="text-xs text-brand hover:underline font-medium">
                    Ouvrir un compte gratuitement →
                  </Link>
                </div>
              </div>
              {sim <= 20 && (
                <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">📱</span>
                  <div>
                    <p className="text-xs font-semibold text-ink">Meilleure SIM Espagne dès 12€/mois</p>
                    <Link href="/articles/meilleure-carte-sim-espagne-erasmus" className="text-xs text-brand hover:underline font-medium">
                      Voir Yoigo, Lebara, Orange →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Share / reset */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-3">
              <button
                onClick={shareWA}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Partager mon budget
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {copied ? '✓ Copié !' : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copier le lien
                    </>
                  )}
                </button>
                <button
                  onClick={reset}
                  className="flex-1 text-sm font-semibold py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-brand hover:text-brand transition-colors"
                >
                  🔄 Réinitialiser
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
