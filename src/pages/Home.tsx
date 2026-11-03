import CtaBanner from '../components/sections/CtaBanner'
import DestinationsGrid from '../components/sections/DestinationsGrid'
import Hero from '../components/sections/Hero'
import Newsletter from '../components/sections/Newsletter'
import SearchBar from '../components/sections/SearchBar'
import Stats from '../components/sections/Stats'
import Steps from '../components/sections/Steps'
import Testimonials from '../components/sections/Testimonials'
import WhyUs from '../components/sections/WhyUs'
import { DESTINATIONS } from '../data/destinations'
import { OFFERS } from '../data/offers'
import OfferCard from '../components/sections/OfferCard'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />

      <section className="section pt-20">
        <div className="container-page">
          <SectionTitle eyebrow="Destinations" title="Nos destinations coup de cœur" subtitle="Des lieux d’exception sélectionnés par nos conseillers pour vous." />
          <div className="mt-14">
            <DestinationsGrid items={DESTINATIONS.slice(0, 4)} />
          </div>
          <div className="mt-12 text-center">
            <Button to="/destinations" variant="outline" size="lg">Voir toutes les destinations</Button>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="section bg-primary-50">
        <div className="container-page">
          <SectionTitle eyebrow="Offres du moment" title="Des séjours prêts à réserver" subtitle="Personnalisables à 100 %. Prix par personne, vols inclus." />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {OFFERS.slice(0, 3).map((offer, index) => (
              <Reveal key={offer.id} delay={index * 100}>
                <OfferCard offer={offer} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/offres" variant="outline" size="lg">Voir toutes les offres</Button>
          </div>
        </div>
      </section>

      <Steps />
      <Stats />
      <Testimonials />
      <CtaBanner
        title="Prêt à partir ?"
        text="Parlez-nous de votre projet. Votre devis personnalisé est gratuit et sans engagement."
        buttonLabel="Demander mon devis gratuit"
        to="/contact"
      />
      <Newsletter />
    </>
  )
}
