import { Clock3, Compass, Headset, ShieldCheck, Sparkles, Wallet } from 'lucide-react'
import { FEATURES } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const icons = { ShieldCheck, Wallet, Headset, Sparkles, Compass, Clock: Clock3 }

export default function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Pourquoi Horizon Voyages"
          title="Le voyage commence avec les bonnes personnes"
          subtitle="Nous prenons tout en charge pour que vous n’ayez qu’à profiter."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = icons[feature.icon]
            return (
              <Reveal key={feature.title} delay={index * 100}>
                <div className="rounded-3xl bg-primary-50 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-3 text-muted">{feature.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
