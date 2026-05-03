import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/collection', label: 'Collection' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-border bg-parchment">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <NavLink
          to="/"
          className="font-serif text-xl tracking-widest uppercase text-ink hover:text-accent transition-colors duration-300"
        >
          Heritage Threads
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-accent border-b border-accent pb-0.5'
                      : 'text-muted hover:text-ink'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-parchment px-6 py-6 flex flex-col gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted hover:text-ink transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}