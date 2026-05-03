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
<div className="mb-16 pb-12 border-b border-border">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div>
      <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">
        Digital Archive · European Dress
      </p>
      <h1 className="font-serif text-6xl text-ink">The Collection</h1>
    </div>
    <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right">
      Two centuries of dress from the courts and salons of early modern Europe.
    </p>
  </div>
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