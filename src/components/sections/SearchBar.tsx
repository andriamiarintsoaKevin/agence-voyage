import { CalendarDays, MapPin, Search, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'
import { DESTINATIONS } from '../../data/destinations'
import Button from '../ui/Button'

export default function SearchBar() {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/offres')
  }

  return (
    <div className="relative z-10 container-page -mt-12">
      <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-4 shadow-card sm:p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
        <div>
          <label htmlFor="search-destination" className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
            <MapPin size={15} /> Destination
          </label>
          <select id="search-destination" className="input-field" defaultValue="">
            <option value="" disabled>Où voulez-vous aller ?</option>
            {DESTINATIONS.map((destination) => (
              <option key={destination.id} value={destination.id}>{destination.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="search-date" className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
            <CalendarDays size={15} /> Date de départ
          </label>
          <input id="search-date" type="date" className="input-field" />
        </div>

        <div>
          <label htmlFor="search-travelers" className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
            <Users size={15} /> Voyageurs
          </label>
          <select id="search-travelers" className="input-field" defaultValue="2 voyageurs">
            <option>1 voyageur</option>
            <option>2 voyageurs</option>
            <option>3 voyageurs</option>
            <option>4 voyageurs</option>
            <option>5 voyageurs et plus</option>
          </select>
        </div>

        <Button type="submit" variant="accent" size="lg" className="w-full lg:w-auto">
          <Search size={18} /> Rechercher
        </Button>
      </form>
    </div>
  )
}
