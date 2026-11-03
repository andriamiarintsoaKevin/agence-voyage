import CtaBanner from '../components/sections/CtaBanner'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import PageHeader from '../components/ui/PageHeader'
import SectionTitle from '../components/ui/SectionTitle'
import { img } from '../data/images'

const VALUES = [
  { title: 'Authenticité', text: 'Nous privilégions les rencontres, les saveurs locales et les adresses qui ont une âme.' },
  { title: 'Transparence', text: 'Un prix clair, un programme détaillé et aucun frais caché, du devis à la facture.' },
  { title: 'Responsabilité', text: 'Nous travaillons avec des partenaires locaux qui respectent les habitants et l’environnement.' },
  { title: 'Écoute', text: 'Votre conseiller prend le temps de comprendre vos envies avant de proposer quoi que ce soit.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="À propos d’Horizon Voyages"
        subtitle="Depuis 15 ans, nous transformons vos envies d’ailleurs en souvenirs inoubliables."
        image={img('header-apropos', 1920, 600)}
      />
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={img('notre-histoire', 900, 700)} alt="Découverte d’une destination avec Horizon Voyages" className="rounded-3xl object-cover shadow-card" loading="lazy" />
          <div>
            <SectionTitle eyebrow="Notre histoire" title="Une agence née de la passion du voyage" align="left" />
            <p className="mt-6 text-muted">
              Horizon Voyages est née d’une conviction simple : un beau voyage ne se choisit pas dans un catalogue, il se construit avec une personne qui vous écoute. Depuis 15 ans, nous créons des séjours qui ressemblent à ceux qui les vivent.
            </p>
            <p className="mt-6 text-muted">
              Aujourd’hui, notre équipe a accompagné plus de 12 000 voyageurs dans plus de 60 destinations. Notre promesse reste la même : de la sincérité, des prix clairs et une assistance à toute heure.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-primary-50">
        <div className="container-page">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui guide chacun de nos voyages" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <article key={value.title} className="rounded-3xl bg-white p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <Team />
      <CtaBanner
        title="Faisons connaissance"
        text="Appelez-nous ou écrivez-nous : votre prochain voyage commence par une conversation."
        buttonLabel="Nous contacter"
        to="/contact"
      />
    </>
  )
}
