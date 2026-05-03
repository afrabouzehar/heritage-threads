import { motion } from 'framer-motion'
import { useState } from 'react'
import { garments } from '../data/garments'
import GarmentModal from '../components/ui/GarmentModal'

const ERA_ORDER = ['Baroque', 'Rococo', 'Enlightenment']

function groupByEra(garments) {
  return ERA_ORDER.reduce((acc, era) => {
    const items = garments.filter((g) => g.era === era)
    if (items.length > 0) acc[era] = items
    return acc
  }, {})
}

const ERA_YEARS = {
  Baroque: '1600 — 1715',
  Rococo: '1715 — 1780',
  Enlightenment: '1715 — 1789',
}

const ERA_DESCRIPTION = {
  Baroque: 'The age of absolute power. Dress as ceremony, rank, and allegiance.',
  Rococo: 'Lightness and artifice. Pastel silks and the culture of sensibility.',
  Enlightenment: 'Reason over ceremony. The first gestures toward modern dress.',
}

export default function Timeline() {
  const [selectedGarment, setSelectedGarment] = useState(null)
  const grouped = groupByEra(garments)

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20 pb-12 border-b border-border"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">
          Chronological Archive
        </p>
        <h1 className="font-serif text-6xl text-ink">Timeline</h1>
        <p className="mt-4 text-muted max-w-lg leading-relaxed">
          Two centuries of European dress, ordered by era and decade.
        </p>
      </motion.div>

      {/* Era sections */}
      {Object.entries(grouped).map(([era, items], eraIndex) => (
        <motion.div
          key={era}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: eraIndex * 0.1 }}
          className="mb-24"
        >
          {/* Era header */}
          <div className="flex items-start gap-8 mb-12">
            {/* Year spine */}
            <div className="hidden md:flex flex-col items-center pt-1">
              <div className="w-px h-full bg-border" style={{ minHeight: '60px' }} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end gap-3 mb-3">
                <h2 className="font-serif text-4xl text-ink">{era}</h2>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted md:mb-1.5">
                  {ERA_YEARS[era]}
                </p>
              </div>
              <p className="text-sm text-muted max-w-lg">
                {ERA_DESCRIPTION[era]}
              </p>
            </div>
          </div>

          {/* Garments in this era */}
          <div className="space-y-0">
            {items.map((garment, i) => (
              <TimelineEntry
                key={garment.id}
                garment={garment}
                index={i}
                isLast={i === items.length - 1}
                onClick={setSelectedGarment}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      <GarmentModal
        garment={selectedGarment}
        onClose={() => setSelectedGarment(null)}
      />
    </div>
  )
}

function TimelineEntry({ garment, index, isLast, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_80px_1fr] gap-0 cursor-pointer"
      onClick={() => onClick(garment)}
    >
      {/* Decade — left column */}
      <div className="pt-6 pb-6 pr-6 text-right hidden md:block">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted">
          {garment.decade}
        </p>
      </div>

      {/* Spine with dot */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent mt-7 transition-colors duration-300 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>

      {/* Content */}
      <div className={`pb-10 pl-6 ${!isLast ? '' : ''}`}>
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1 md:hidden">
          {garment.decade}
        </p>

        <div className="flex gap-6 items-start">
          {/* Thumbnail */}
          <div className="w-20 h-28 shrink-0 overflow-hidden bg-[#E8E4DC]">
            <img
              src={garment.image}
              alt={garment.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="pt-1">
            <span className="text-[9px] tracking-[0.2em] uppercase bg-ink/5 text-muted px-2 py-1 mb-3 inline-block">
              {garment.category}
            </span>
            <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors duration-300 leading-tight">
              {garment.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {garment.origin} · {garment.material}
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg line-clamp-2">
              {garment.description}
            </p>
            <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-muted/60 group-hover:text-accent transition-colors duration-300">
              View details →
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}