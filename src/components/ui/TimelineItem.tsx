import type { ReactNode } from 'react'
import { m } from 'framer-motion'
import Reveal from './Reveal'

/** One entry on a vertical timeline. Must be a child of an <ol> with a left border. */
export default function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative">
      <m.span
        className="timeline-dot"
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />
      <Reveal>{children}</Reveal>
    </li>
  )
}
