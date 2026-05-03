import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GarmentModal({ garment, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll when modal is open
 useEffect(() => {
  if (!garment) return
  document.body.style.overflow = 'hidden'
  return () => { document.body.style.overflow = '' }
}, [garment])

  return (
    <AnimatePresence>
      {garment && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/70 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-xl bg-parchment z-50 overflow-y-auto shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-xs tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors"
            >
              Close ×
            </button>

            {/* Image */}
            <div className="w-full aspect-[3/4] bg-ink/5">
              <img
                src={garment.image}
                alt={garment.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-8 py-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                {garment.century} Century · {garment.era}
              </p>
              <h2 className="font-serif text-4xl text-ink leading-tight">
                {garment.title}
              </h2>

              <p className="mt-6 text-base text-ink/80 leading-relaxed">
                {garment.description}
              </p>

              {/* Metadata table */}
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8">
                {[
                  ['Origin', garment.origin],
                  ['Period', garment.decade],
                  ['Material', garment.material],
                  ['Collection', garment.collection],
                  ['Category', garment.category],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                      {label}
                    </dt>
                    <dd className="text-sm text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {garment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase border border-border text-muted px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}