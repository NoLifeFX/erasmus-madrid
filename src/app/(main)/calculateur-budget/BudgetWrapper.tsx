'use client'

import dynamic from 'next/dynamic'

const BudgetCalculator = dynamic(() => import('./BudgetCalculator'), {
  ssr: false,
  loading: () => (
    <div className="lg:grid lg:grid-cols-5 lg:gap-8">
      <div className="lg:col-span-3 space-y-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-100 rounded-2xl animate-pulse" />
        ))}
      </div>
      <div className="lg:col-span-2 mt-6 lg:mt-0">
        <div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
      </div>
    </div>
  ),
})

export default function BudgetWrapper() {
  return <BudgetCalculator />
}
