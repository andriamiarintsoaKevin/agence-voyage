import { Link } from 'react-router-dom'
import type { Destination } from '../../types'
import Badge from '../ui/Badge'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link to="/contact" className="group relative block h-96 overflow-hidden rounded-3xl shadow-card">
      <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <Badge tone="white" className="absolute left-4 top-4">{destination.region}</Badge>
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-display text-2xl font-semibold text-white">{destination.name}</h3>
        <p className="mt-1 text-sm text-primary-100">{destination.country}</p>
        <p className="mt-2 text-sm text-white/90">{destination.tagline}</p>
        <p className="mt-3 text-sm font-semibold">À partir de {destination.priceFrom.toLocaleString('fr-FR')} €</p>
      </div>
    </Link>
  )
}
