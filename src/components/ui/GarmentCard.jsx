import { motion } from 'framer-motion'

export default function GarmentCard({ garment, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(garment)}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#E8E4DC]">
        <img
          src={garment.image}
          alt={garment.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500" />

        {/* Era badge — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-ink/70 to-transparent">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/80">
            View details →
          </p>
        </div>

        {/* Category badge — top left */}
        <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase bg-parchment/90 text-ink px-2.5 py-1">
          {garment.category}
        </span>
      </div>

      {/* Text */}
      <div className="pt-4 pb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted">
            {garment.origin}
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted">
            {garment.decade}
          </p>
        </div>

        <h3 className="font-serif text-xl text-ink leading-snug group-hover:text-accent transition-colors duration-300">
          {garment.title}
        </h3>

        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {garment.description}
        </p>

        {/* Bottom line — animates on hover */}
        <div className="mt-4 w-0 group-hover:w-8 h-px bg-accent transition-all duration-500" />
      </div>
    </motion.article>
  )
}