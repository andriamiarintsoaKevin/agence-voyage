import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/site'
import logoImage from '../../assets/horizon-logo.png'
import Button from '../ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Accueil Horizon Voyages">
          <img src={logoImage} alt="Horizon Voyages" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-primary-600' : 'text-ink hover:text-primary-600'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:inline-flex">
          <Button to="/contact" variant="accent">Demander un devis</Button>
        </div>

        <button type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} className="rounded-full p-2 text-ink lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-primary-100 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block rounded-xl px-4 py-3 text-base font-medium ${isActive ? 'bg-primary-50 text-primary-600' : 'text-ink hover:bg-primary-50'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Button to="/contact" className="mt-3 w-full" variant="accent">Demander un devis</Button>
        </div>
      ) : null}
    </header>
  )
}
