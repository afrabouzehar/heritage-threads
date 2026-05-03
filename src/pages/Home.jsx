import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { garments } from '../data/garments'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">

      {/* Background image */}
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url('/images/robe-francaise.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 20%',
    filter: 'brightness(0.75)',
  }}
/>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top left label */}
      <div className="absolute top-8 left-8 z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40">
          Est. 17th Century · Digital Archive
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >

          <h1 className="font-serif text-6xl md:text-8xl text-white leading-[1.05] max-w-4xl">
            Dress as a<br />record of power.
          </h1>

          <div className="mt-6 w-16 h-px bg-white/30" />

          <p className="mt-6 text-white/60 text-base max-w-lg leading-relaxed">
            A curated archive of garments from the courts, salons,
            and streets of early modern Europe. 17th and 18th century.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              to="/collection"
              className="inline-block border border-white/50 text-white text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-white hover:text-ink transition-all duration-500"
            >
              Enter the Collection
            </Link>
            <span className="text-white/30 text-xs tracking-widest uppercase">
              {garments.length} Garments
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/20" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mt-2">
          Scroll
        </p>
      </div>
    </section>
  )
}

function FeaturedSection() {
  const featured = garments.slice(0, 3)

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">

      {/* Section header */}
      <div className="flex items-end justify-between mb-14 pb-6 border-b border-border">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
            Selected Works
          </p>
          <h2 className="font-serif text-4xl text-ink">From the Archive</h2>
        </div>
        <Link
          to="/collection"
          className="text-[10px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors duration-300 border-b border-border pb-1"
        >
          View all →
        </Link>
      </div>

      {/* 3 column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {featured.map((garment, i) => (
          <motion.div
            key={garment.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link to="/collection" className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-[#E8E4DC] mb-4">
                <img
                  src={garment.image}
                  alt={garment.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                {garment.origin} · {garment.decade}
              </p>
              <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors duration-300">
                {garment.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom divider section */}
      <div className="mt-24 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { number: '6', label: 'Garments' },
          { number: '2', label: 'Centuries' },
          { number: '4', label: 'Origins' },
        ].map(({ number, label }) => (
          <div key={label}>
            <p className="font-serif text-5xl text-ink">{number}</p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}