import { useState } from 'react'
import { DESTINATIONS, REGIONS } from '../data/destinations'
import CtaBanner from '../components/sections/CtaBanner'
import DestinationsGrid from '../components/sections/DestinationsGrid'
import PageHeader from '../components/ui/PageHeader'
import { img } from '../data/images'

export default function Destinations() {
  const [region, setRegion] = useState<(typeof REGIONS)[number]>('Toutes')
  const filtered = region === 'Toutes' ? DESTINATIONS : DESTINATIONS.filter((destination) => destination.region === region)

  return (
    <>
      <PageHeader
        title="Nos destinations"
        subtitle="Du soleil des îles aux temples d’Asie, trouvez le lieu qui vous ressemble."
        image={img('header-destinations', 1920, 600)}
      />
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-3">
            {REGIONS.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={region === item}
                onClick={() => setRegion(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100 ${region === item ? 'bg-primary-600 text-white' : 'bg-white text-ink hover:bg-primary-100'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-12">
            <DestinationsGrid items={filtered} />
          </div>
        </div>
      </section>
      <CtaBanner
        title="Votre destination n’est pas dans la liste ?"
        text="Nous organisons des voyages partout dans le monde. Dites-nous où vous rêvez d’aller."
        buttonLabel="Contacter un conseiller"
        to="/contact"
      />
    </>
  )
}
