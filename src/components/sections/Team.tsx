import { TEAM } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Team() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Notre équipe"
          title="Des experts passionnés à votre service"
          subtitle="Chacun de nos conseillers a visité les destinations qu’il vous recommande."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <div>
                <img src={member.photo} alt={member.name} className="aspect-square w-full rounded-3xl object-cover" loading="lazy" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{member.name}</h3>
                <p className="text-sm font-semibold text-primary-600">{member.role}</p>
                <p className="mt-2 text-sm text-muted">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
