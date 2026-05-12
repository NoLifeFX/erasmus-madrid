'use client'

import dynamic from 'next/dynamic'

const MapQuartiers = dynamic(() => import('@/components/MapQuartiers'), {
  ssr: false,
  loading: () => (
    <div className="h-[350px] sm:h-[500px] bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
      <p className="text-gray-400 text-sm">Chargement de la carte…</p>
    </div>
  ),
})

export default function MapWrapper() {
  return <MapQuartiers />
}
