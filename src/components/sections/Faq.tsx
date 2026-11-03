import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../../data/content'
import SectionTitle from '../ui/SectionTitle'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Toutes vos questions, nos réponses"
          subtitle="Vous ne trouvez pas la réponse ? Écrivez-nous, nous répondons en moins de 24 heures."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="rounded-2xl border border-primary-100 bg-sand-50">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold text-ink"
                >
                  {item.question}
                  <ChevronDown size={20} className={`shrink-0 text-primary-600 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? <p className="px-6 pb-6 text-muted">{item.answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
