import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-end bg-ink overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Robe_%C3%A0_la_fran%C3%A7aise_MET_DT773.jpg/800px-Robe_%C3%A0_la_fran%C3%A7aise_MET_DT773.jpg')`,
        }}
      />

      {/* Gradient overlay — bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs tracking-[0.3em] uppercase text-parchment/60 mb-4"
        >
          Digital Archive · 17th &amp; 18th Century
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-5xl md:text-7xl text-parchment leading-[1.1] max-w-3xl"
        >
          Dress as a<br />record of power.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-parchment/70 text-lg max-w-xl leading-relaxed"
        >
          A curated archive of garments from the courts, salons,
          and streets of early modern Europe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10"
        >
          <Link
            to="/collection"
            className="inline-block border border-parchment/60 text-parchment text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-parchment hover:text-ink transition-all duration-300"
          >
            Enter the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}