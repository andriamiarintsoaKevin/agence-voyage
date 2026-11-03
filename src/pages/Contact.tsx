import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/sections/ContactForm'
import Faq from '../components/sections/Faq'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import { img } from '../data/images'
import { SITE } from '../data/site'

const CONTACT_DETAILS = [
  { title: 'Téléphone', text: SITE.phone, href: SITE.phoneHref, Icon: Phone },
  { title: 'E-mail', text: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail },
  { title: 'Agence', text: SITE.address, Icon: MapPin },
  { title: 'Horaires', text: SITE.hours, Icon: Clock },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contactez-nous"
        subtitle="Une question, une envie, un projet ? Nos conseillers vous répondent sous 24 heures."
        image={img('header-contact', 1920, 600)}
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside className="space-y-4">
            {CONTACT_DETAILS.map(({ title, text, href, Icon }) => (
              <div key={title} className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="font-semibold text-ink">{title}</h2>
                  {href ? (
                    <a href={href} className="text-sm text-muted hover:text-primary-600">{text}</a>
                  ) : (
                    <p className="text-sm text-muted">{text}</p>
                  )}
                </div>
              </div>
            ))}
            <Button href={`https://wa.me/${SITE.whatsappNumber}`} variant="primary" size="lg" className="w-full">
              Écrire sur WhatsApp
            </Button>
          </aside>
        </div>
      </section>
      <Faq />
    </>
  )
}
