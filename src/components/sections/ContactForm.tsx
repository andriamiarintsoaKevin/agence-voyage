import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check } from 'lucide-react'
import { DESTINATIONS } from '../../data/destinations'
import Button from '../ui/Button'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-6 text-center shadow-card sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <Check size={30} />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold">Merci, votre demande est envoyée !</h2>
        <p className="mt-2 text-muted">Un conseiller vous répondra sous 24 heures.</p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card sm:p-10">
      <h2 className="text-2xl font-bold">Demandez votre devis gratuit</h2>
      <p className="mt-2 text-muted">Réponse garantie sous 24 heures.</p>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full-name" className="mb-1.5 block text-sm font-semibold">Nom complet</label>
          <input id="full-name" name="name" type="text" required placeholder="Ex. : Marie Dupont" className="input-field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Adresse e-mail</label>
          <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className="input-field" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">Téléphone</label>
          <input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" className="input-field" />
        </div>
        <div>
          <label htmlFor="destination" className="mb-1.5 block text-sm font-semibold">Destination souhaitée</label>
          <select id="destination" name="destination" className="input-field" defaultValue="">
            <option value="">Choisissez une destination</option>
            {DESTINATIONS.map((destination) => (
              <option key={destination.id} value={destination.id}>{destination.name}</option>
            ))}
            <option value="undecided">Je ne sais pas encore</option>
          </select>
        </div>
        <div>
          <label htmlFor="departure-date" className="mb-1.5 block text-sm font-semibold">Date de départ approximative</label>
          <input id="departure-date" name="departureDate" type="date" className="input-field" />
        </div>
        <div>
          <label htmlFor="travelers" className="mb-1.5 block text-sm font-semibold">Nombre de voyageurs</label>
          <input id="travelers" name="travelers" type="number" min={1} defaultValue={2} className="input-field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="input-field sm:col-span-2"
            placeholder="Parlez-nous de votre voyage idéal : budget, envies, durée…"
          />
        </div>
        <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-primary-300 text-primary-600 focus:ring-primary-500" />
          <span>J’accepte d’être recontacté(e) par Horizon Voyages au sujet de ma demande.</span>
        </label>
        <Button type="submit" variant="accent" size="lg" className="sm:col-span-2">Envoyer ma demande</Button>
      </form>
    </div>
  )
}
