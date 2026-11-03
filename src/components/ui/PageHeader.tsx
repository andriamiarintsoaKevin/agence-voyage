interface PageHeaderProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-24 sm:py-32">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/60" />
      <div className="relative container-page text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">{subtitle}</p>
      </div>
    </section>
  )
}
