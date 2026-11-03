import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Testimonials() {
  return (
    <section className="section bg-primary-50">
      <div className="container-page">
        <SectionTitle eyebrow="Avis clients" title="Ils sont partis, ils racontent" subtitle="Plus de 2 400 avis vérifiés avec une note moyenne de 4,9/5." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 120}>
              <div className="rounded-3xl bg-white p-8 shadow-card">
                <Quote size={32} className="text-primary-300" />
                <div className="mt-4 flex gap-1 text-accent-500">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <p className="mt-4 text-lg text-ink">“{testimonial.text}”</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold text-ink">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.trip}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
