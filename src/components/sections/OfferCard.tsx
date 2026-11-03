import { Check, Clock, Star } from 'lucide-react'
import type { Offer } from '../../types'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

interface OfferCardProps {
  offer: Offer
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img src={offer.image} alt={offer.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <Badge tone="accent" className="absolute left-4 top-4">{offer.badge}</Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Clock size={16} />
          <span>{offer.duration}</span>
        </div>

        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{offer.title}</h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <Star size={16} className="fill-accent-500 text-accent-500" />
          <span className="font-semibold text-ink">{offer.rating.toFixed(1)}</span>
          <span>({offer.reviews} avis)</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-muted">
          {offer.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 text-primary-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <p className="text-xs text-muted">À partir de</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary-600">{offer.price.toLocaleString('fr-FR')} €</span>
              {offer.oldPrice ? <span className="text-sm text-muted line-through">{offer.oldPrice.toLocaleString('fr-FR')} €</span> : null}
            </div>
          </div>
          <Button to="/contact" size="md" variant="accent">Réserver</Button>
        </div>
      </div>
    </article>
  )
}
