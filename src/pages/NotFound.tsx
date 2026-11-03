import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="section container-page text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Erreur 404</p>
      <h1 className="mt-4 text-4xl font-bold">Cette destination n’existe pas… encore</h1>
      <p className="mt-4 text-muted">La page que vous cherchez a été déplacée ou n’existe plus.</p>
      <Button to="/" size="lg" className="mt-8">Retour à l’accueil</Button>
    </section>
  )
}
