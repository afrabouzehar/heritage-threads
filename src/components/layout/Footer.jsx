export default function Footer() {
  return (
    <footer className="border-t border-border bg-parchment mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg tracking-widest uppercase text-ink">
          Heritage Threads
        </p>
        <p className="text-xs tracking-widest uppercase text-muted">
          A digital archive of 17th &amp; 18th century dress
        </p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}