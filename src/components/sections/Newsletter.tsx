import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../ui/Button'

export default function Newsletter() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-sand-100 py-16">
      <div className="container-page mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Recevez nos meilleures offres en avant-première</h2>
        <p className="mt-3 text-muted">Inscrivez-vous et profitez de 10 % de réduction sur votre premier voyage.</p>
        {sent ? (
          <p className="mt-8 text-lg font-semibold text-primary-700">
            Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              aria-label="Adresse e-mail"
              className="input-field flex-1"
            />
            <Button type="submit" variant="primary">S’inscrire</Button>
          </form>
        )}
      </div>
    </section>
  )
}
