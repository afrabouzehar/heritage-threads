import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { garments } from '../data/garments'
import GarmentCard from '../components/ui/GarmentCard'
import FilterBar from '../components/ui/FilterBar'
import GarmentModal from '../components/ui/GarmentModal'

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedGarment, setSelectedGarment] = useState(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return garments
    return garments.filter((g) => g.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-screen">

      {/* Page header */}
      <div className="mb-12 border-b border-border pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">
          Digital Archive
        </p>
        <h1 className="font-serif text-5xl text-ink">The Collection</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          {garments.length} garments spanning two centuries of European dress.
          Filtered by category, ordered by decade.
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-10">
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Results count */}
      <p className="text-xs tracking-widest uppercase text-muted mb-8">
        {filtered.length} {filtered.length === 1 ? 'garment' : 'garments'}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        <AnimatePresence>
          {filtered.map((garment) => (
            <GarmentCard
              key={garment.id}
              garment={garment}
              onClick={setSelectedGarment}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <GarmentModal
        garment={selectedGarment}
        onClose={() => setSelectedGarment(null)}
      />
    </div>
  )
}