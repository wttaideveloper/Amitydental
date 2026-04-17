import type { ReactNode } from 'react'
import { Container } from '../layout/Container'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
  /** Surface behind section */
  surface?: 'default' | 'muted' | 'brand'
}

const surfaceClass = {
  default:
    'bg-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] backdrop-blur-[2px]',
  muted:
    'bg-gradient-to-b from-[#f3f7fd] via-[#eef3fa] to-[#e8eef6] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)]',
  brand:
    'bg-gradient-to-br from-brand-50/95 via-white to-lime-50/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]',
} as const

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  align = 'left',
  surface = 'default',
}: SectionProps) {
  const headerAlign = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <section id={id} className={`section-y ${surfaceClass[surface]} ${className}`}>
      <Container>
        <header className={`section-inner-gap max-w-3xl ${headerAlign}`}>
          {eyebrow ? <p className="text-eyebrow">{eyebrow}</p> : null}
          <h2 className="text-h2 mt-2">{title}</h2>
          {description ? <p className="text-body mt-4 max-w-2xl">{description}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  )
}
