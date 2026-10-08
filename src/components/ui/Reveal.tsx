import type { ReactNode } from 'react'
import { m } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Subtle fade-and-rise on scroll entry. Reduced-motion users get opacity only (see MotionConfig in App). */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  )
}
