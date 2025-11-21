import { Link, NavLink } from 'react-router-dom'
import { Music, Sparkles, Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight">Yash • Artist</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/about', 'About')}
            {navItem('/work', 'Work')}
            {navItem('/timeline', 'Timeline')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItem('/about', 'About')}
              {navItem('/work', 'Work')}
              {navItem('/timeline', 'Timeline')}
              {navItem('/contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <Sparkles className="absolute top-2 left-4 text-fuchsia-400" />
      </div>
    </header>
  )
}

export default Navbar
