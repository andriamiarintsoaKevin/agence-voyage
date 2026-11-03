import { Star } from 'lucide-react'
import logoImage from '../../assets/horizon-logo.png'
import { img } from '../../data/images'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={img('hero-voyage', 1920, 1080)}
        alt="Plage paradisiaque au coucher du soleil"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-transparent" />

      <div className="relative container-page py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-white/60">
            <img src={logoImage} alt="Horizon Voyages" className="h-24 w-auto object-contain sm:h-28" />
          </div>
          <Badge tone="white">✈ Agence de voyage sur mesure</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl">
            Voyagez là où vos rêves vous emmènent
          </h1>
          <p className="mt-6 text-lg text-primary-100">
            Séjours, circuits et escapades préparés par des conseillers passionnés. Dites-nous vos envies, nous construisons le voyage parfait.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/offres" variant="accent" size="lg">Découvrir nos offres</Button>
            <Button to="/contact" variant="outlineWhite" size="lg">Parler à un conseiller</Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-white">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={18} className="fill-accent-500 text-accent-500" />
            ))}
            <span>4,9/5 · plus de 2 400 avis vérifiés</span>
          </div>
        </div>
      </div>
    </section>
  )
}
