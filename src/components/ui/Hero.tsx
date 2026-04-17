import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { images } from '../../lib/images'

type HeroProps = {
  eyebrow?: string
  accent: string
  title: string
  subtitle?: string
  children?: ReactNode
  /** Hero image — defaults to practice + signage photo */
  imageSrc?: string
  imageAlt?: string
  /** Text block alignment */
  align?: 'left' | 'center'
}

export function Hero({
  eyebrow,
  accent,
  title,
  subtitle,
  children,
  imageSrc = images.hero,
  imageAlt = 'Dr. Chester V. Clark Jr. with the Amity Gentle Dental office logo — biological dentistry and breathing wellness',
  align = 'left',
}: HeroProps) {
  const textAlign = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f0f6ff] via-[#e8f0fc] to-[#ecfdf3]/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_95%_5%,rgba(65,90,148,0.12),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_5%_95%,rgba(132,204,22,0.1),transparent_52%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(255,255,255,0.5),transparent_70%)]"
      />
      <Container className="relative section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={`max-w-xl ${align === 'center' ? 'mx-auto text-center lg:mx-0 lg:text-left' : ''}`}
          >
            {eyebrow ? <p className="text-eyebrow">{eyebrow}</p> : null}
            <p
              className={`mt-3 font-display text-3xl font-semibold tracking-tight text-brand-700 sm:text-4xl ${textAlign}`}
            >
              {accent}
            </p>
            <h1 className={`text-h1 mt-3 ${textAlign}`}>{title}</h1>
            {subtitle ? (
              <p className={`text-body mt-5 max-w-xl ${align === 'center' ? 'mx-auto lg:mx-0' : ''}`}>
                {subtitle}
              </p>
            ) : null}
            {children ? (
              <div
                className={`mt-10 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center lg:justify-start' : ''}`}
              >
                {children}
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/90 bg-white shadow-2xl shadow-brand-900/12 ring-1 ring-brand-200/30 ring-offset-[6px] ring-offset-white/80">
              <div
                className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 via-transparent to-lime-500/10"
                aria-hidden
              />
            <div className="aspect-[4/3] w-full sm:aspect-[3/2] lg:max-h-[min(520px,56vh)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-[center_22%]"
                width={1200}
                height={800}
                loading="eager"
                decoding="async"
              />
            </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
