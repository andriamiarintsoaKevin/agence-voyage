import { STATS } from '../../data/content'

export default function Stats() {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container-page grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">{stat.value}</div>
            <div className="mt-2 text-primary-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
