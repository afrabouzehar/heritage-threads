import { motion } from 'framer-motion'

export default function GarmentCard({ garment, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(garment)}
      className="group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-ink/5 aspect-[3/4]">
        <img
  src={garment.image}
  alt={garment.title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  loading="lazy"
  onError={(e) => {
    e.target.style.display = 'none'
  }}
/>
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-parchment text-ink px-2 py-1">
          {garment.category}
        </span>
      </div>

      {/* Text below image */}
      <div className="pt-4 pb-6 border-b border-border">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
          {garment.origin} · {garment.decade}
        </p>
        <h3 className="font-serif text-xl text-ink leading-snug group-hover:text-accent transition-colors duration-300">
          {garment.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {garment.description}
        </p>
      </div>
    </motion.article>
  )
}