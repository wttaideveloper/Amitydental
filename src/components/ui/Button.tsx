import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fc] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-700/25 ring-1 ring-white/15 hover:from-brand-600 hover:to-brand-800 hover:shadow-xl hover:shadow-brand-800/30 active:scale-[0.98]',
  secondary:
    'border border-slate-200/90 bg-white/95 text-slate-900 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/[0.04] backdrop-blur-sm hover:border-brand-300/90 hover:bg-gradient-to-b hover:from-white hover:to-brand-50/80 hover:text-brand-900 hover:shadow-lg',
  ghost:
    'text-brand-800 hover:bg-brand-50/90 hover:ring-1 hover:ring-brand-200/70',
  /** Solid white control on brand blue (nav CTA, footer on dark band) */
  onDark:
    'bg-white text-brand-600 shadow-md shadow-black/15 ring-1 ring-white/50 hover:bg-white/95 hover:shadow-lg active:scale-[0.98] focus-visible:ring-lime-300/90 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type ButtonAsLink = {
  to: string
  onClick?: () => void
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = {
  to?: undefined
  type?: 'button' | 'submit'
  onClick?: () => void
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export type ButtonProps = ButtonAsLink | ButtonAsButton

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const size = props.size ?? 'md'
  const className = [base, variants[variant], sizes[size], props.className].filter(Boolean).join(' ')

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className} onClick={props.onClick}>
        {props.children}
      </Link>
    )
  }

  const btn = props as ButtonAsButton
  return (
    <button type={btn.type ?? 'button'} onClick={btn.onClick} className={className}>
      {btn.children}
    </button>
  )
}
