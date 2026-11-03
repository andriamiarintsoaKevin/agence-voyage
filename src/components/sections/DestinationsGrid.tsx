import type { Destination } from '../../types'
import Reveal from '../ui/Reveal'
import DestinationCard from './DestinationCard'

interface DestinationsGridProps {
  items: Destination[]
}

export default function DestinationsGrid({ items }: DestinationsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((destination, index) => (
        <Reveal key={destination.id} delay={index * 100}>
          <DestinationCard destination={destination} />
        </Reveal>
      ))}
    </div>
  )
}
