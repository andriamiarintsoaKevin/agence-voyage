import { STEPS } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Steps() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionTitle
          eyebrow="Comment ça marche"
          title="Votre voyage en 4 étapes simples"
          subtitle="Du premier message au retour à la maison, nous sommes à vos côtés."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 120}>
              <div className="rounded-3xl bg-white p-6 shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 font-display text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
