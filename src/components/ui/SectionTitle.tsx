interface SectionTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }: SectionTitleProps) {
  const isCentered = align === 'center'
  const titleColor = light ? 'text-white' : 'text-ink'
  const subtitleColor = light ? 'text-primary-100' : 'text-muted'
  const eyebrowColor = light ? 'text-primary-200' : 'text-primary-600'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`text-sm font-semibold uppercase tracking-widest ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${titleColor}`}>{title}</h2>
      {subtitle ? <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p> : null}
    </div>
  )
}
