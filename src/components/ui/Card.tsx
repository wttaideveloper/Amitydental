import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.article
      initial={false}
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      className={`surface-elevated flex h-full flex-col rounded-[var(--radius-card)] p-6 md:p-8 ${hover ? 'transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-900/10 hover:ring-1 hover:ring-brand-200/50' : ''} ${className}`}
    >
      {children}
    </motion.article>
  )
}
