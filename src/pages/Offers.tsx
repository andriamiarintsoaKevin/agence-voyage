import { useMemo, useState } from 'react'
import type { ChangeEvent } from 'react'
import { OFFERS } from '../data/offers'
import OfferCard from '../components/sections/OfferCard'
import CtaBanner from '../components/sections/CtaBanner'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { img } from '../data/images'

type SortOrder = 'asc' | 'desc' | 'days'

export default function Offers() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const sortedOffers = useMemo(() => {
    const offers = [...OFFERS]
    if (sortOrder === 'asc') return offers.sort((a, b) => a.price - b.price)
    if (sortOrder === 'desc') return offers.sort((a, b) => b.price - a.price)
    return offers.sort((a, b) => a.days - b.days)
  }, [sortOrder])

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'asc' || value === 'desc' || value === 'days') {
      setSortOrder(value)
    }
  }

  return (
    <>
      <PageHeader
        title="Nos offres de voyage"
        subtitle="Des séjours complets, prêts à réserver et modifiables selon vos envies."
        image={img('header-offres', 1920, 600)}
      />
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">{sortedOffers.length} offres disponibles</p>
            <select
              aria-label="Trier les offres"
              className="input-field sm:w-64"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
              <option value="days">Durée la plus courte</option>
            </select>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedOffers.map((offer, index) => (
              <Reveal key={offer.id} delay={index * 80}>
                <OfferCard offer={offer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Un voyage 100 % personnalisé ?"
        text="Nos conseillers créent votre itinéraire sur mesure, selon votre budget et vos envies."
        buttonLabel="Demander un devis sur mesure"
        to="/contact"
      />
    </>
  )
}
