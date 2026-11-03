import Button from '../ui/Button'

interface CtaBannerProps {
  title: string
  text: string
  buttonLabel: string
  to: string
}

export default function CtaBanner({ title, text, buttonLabel, to }: CtaBannerProps) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-16 text-center shadow-card">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-50">{text}</p>
          <Button to={to} variant="accent" size="lg" className="mt-8">{buttonLabel}</Button>
        </div>
      </div>
    </section>
  )
}
