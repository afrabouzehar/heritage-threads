import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">

      {/* Header */}
      <motion.div {...fadeUp} className="mb-20 pb-12 border-b border-border">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">
          About the Archive
        </p>
        <h1 className="font-serif text-6xl text-ink leading-tight">
          Why clothing<br />is evidence.
        </h1>
      </motion.div>

      {/* Mission */}
      <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="font-serif text-2xl text-ink mb-6">The Archive</h2>
          <p className="text-muted leading-relaxed mb-4">
            Heritage Threads is a digital archive dedicated to the dress
            of early modern Europe — specifically the 17th and 18th centuries,
            a period of extraordinary sartorial invention.
          </p>
          <p className="text-muted leading-relaxed">
            Clothing in this era was not decoration. It was communication.
            A garment's fabric, cut, and embellishment declared the wearer's
            rank, allegiance, nationality, and wealth with precision that
            words could not match.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink mb-6">The Method</h2>
          <p className="text-muted leading-relaxed mb-4">
            Each entry in the archive is documented with provenance,
            material composition, cultural context, and dating. Where
            possible, objects are traced to specific collections held
            in European and American museums.
          </p>
          <p className="text-muted leading-relaxed">
            The archive draws on collections at the Metropolitan Museum
            of Art, the Victoria & Albert Museum, the Musée des Arts
            Décoratifs, and regional European collections.
          </p>
        </div>
      </motion.div>

      {/* Divider with quote */}
      <motion.div
        {...fadeUp}
        className="my-20 py-16 border-t border-b border-border text-center"
      >
        <p className="font-serif text-3xl text-ink italic leading-relaxed max-w-2xl mx-auto">
          "Dress is at all times a frivolous distinction, and excessive
          solicitude about it often destroys its own aim."
        </p>
        <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-muted">
          Jane Austen · Northanger Abbey · 1817
        </p>
      </motion.div>

      {/* Periods covered */}
      <motion.div {...fadeUp} className="mb-20">
        <h2 className="font-serif text-2xl text-ink mb-10">Periods Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              era: 'Baroque',
              years: '1600 — 1715',
              description: 'The age of Versailles. Heavy fabrics, strict formality, and dress as an instrument of absolute power.',
            },
            {
              era: 'Rococo',
              years: '1715 — 1780',
              description: 'Lightness, ornament, and artifice. Pastel silks, sack-back gowns, and the culture of sensibility.',
            },
            {
              era: 'Enlightenment',
              years: '1715 — 1789',
              description: 'Reason dressed in informality. The banyan, the undress, and the first gestures toward modern clothing.',
            },
          ].map(({ era, years, description }) => (
            <div key={era} className="border-t border-border pt-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                {years}
              </p>
              <h3 className="font-serif text-xl text-ink mb-3">{era}</h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        {...fadeUp}
        className="pt-12 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <p className="font-serif text-2xl text-ink">Explore the collection</p>
          <p className="text-sm text-muted mt-1">
            {' '}6 garments currently archived.
          </p>
        </div>
        <a
          href="/Collection"
          className="text-[11px] tracking-[0.3em] uppercase border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-parchment transition-all duration-300"
        >
          View Collection
        </a>
      </motion.div>

    </div>
  )
}