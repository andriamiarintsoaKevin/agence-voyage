import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'accent' | 'primary' | 'white'
  className?: string
}

export default function Badge({ children, tone = 'primary', className = '' }: BadgeProps) {
  const styles = {
    accent: 'bg-accent-500 text-white',
    primary: 'bg-primary-100 text-primary-700',
    white: 'bg-white/90 text-primary-700',
  }

  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]} ${className}`}>{children}</span>
}
