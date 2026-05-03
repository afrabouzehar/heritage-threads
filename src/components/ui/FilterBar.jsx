const FILTERS = ['All', 'Womenswear', 'Menswear', 'Accessories']

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`text-[11px] tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-200 ${
            active === filter
              ? 'bg-ink text-parchment border-ink'
              : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}