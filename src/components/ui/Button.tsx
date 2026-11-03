import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'accent' | 'outline' | 'outlineWhite'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  className?: string
}

const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:opacity-60'
const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  accent: 'bg-accent-500 text-white hover:bg-accent-600',
  outline: 'border border-primary-200 bg-white text-primary-700 hover:bg-primary-50',
  outlineWhite: 'border border-white/60 bg-transparent text-white hover:bg-white/10',
}
const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({ variant = 'primary', size = 'md', to, href, className = '', children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
