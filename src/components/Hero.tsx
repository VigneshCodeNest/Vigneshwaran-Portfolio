import { m, type MotionProps } from 'framer-motion'
import { Download, Eye } from 'lucide-react'
import { profile } from '../data/config'
import CodeCard from './CodeCard'
import SocialLinks from './ui/SocialLinks'

const enter = (i: number): MotionProps => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.06 * i, ease: 'easeOut' },
})

// Decorative floating tech chips (shown on larger screens)
const chips = [
  { label: 'Java', pos: 'left-0 top-2', dur: 5 },
  { label: 'Spring Boot', pos: 'right-0 top-6', dur: 6 },
  { label: 'REST API', pos: 'left-2 top-[48%]', dur: 5.5 },
  { label: 'Python', pos: 'right-2 top-[58%]', dur: 6.5 },
  { label: 'MySQL', pos: 'bottom-4 left-6', dur: 5.8 },
  { label: 'AI', pos: 'bottom-0 right-10', dur: 6.2 },
]

const btn = 'inline-flex min-h-12 w-full min-[480px]:w-auto items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition-all'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-24 min-[400px]:pt-28 sm:pt-32 sm:pb-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <m.div {...enter(0)} className="flex flex-wrap items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-cyan-400/40 bg-ink-900 shadow-md shadow-cyan-400/20">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] min-[380px]:text-xs font-medium text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Software Development Opportunities
            </div>
          </m.div>

          <m.p {...enter(1)} className="mt-6 font-mono text-xs sm:text-sm tracking-wide text-cyan-300">
            HELLO, I&apos;M
          </m.p>
          <m.h1
            {...enter(2)}
            id="hero-title"
            className="mt-2 text-3xl font-bold tracking-tight text-white min-[380px]:text-4xl sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </m.h1>
          <m.p
            {...enter(3)}
            className="mt-2.5 sm:mt-3 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-lg sm:text-2xl font-semibold text-transparent"
          >
            {profile.role}
          </m.p>
          <m.p {...enter(4)} className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 sm:text-slate-400">
            I build scalable web applications, REST APIs, backend services, and AI-powered solutions using Java,
            Spring Boot, Python, and modern web technologies.
          </m.p>

          <m.div {...enter(5)} className="mt-7 sm:mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
            <m.a
              href={profile.resumeUrl}
              download="Vigneshwaran_B_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${btn} bg-gradient-to-r from-cyan-400 to-sky-500 text-ink-950 shadow-lg shadow-cyan-500/20 active:brightness-95`}
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </m.a>
            <m.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${btn} border border-cyan-400/50 text-cyan-200 transition-colors hover:bg-cyan-400/10 active:bg-cyan-400/20`}
            >
              <Eye size={16} aria-hidden="true" />
              View Resume
            </m.a>
          </m.div>

          <m.div {...enter(6)} className="mt-7 sm:mt-8">
            <SocialLinks />
          </m.div>
        </div>

        <m.div
          className="relative mx-auto w-full max-w-lg py-4 sm:py-8 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="mx-auto max-w-md">
            <CodeCard />
          </div>
          <div aria-hidden="true" className="pointer-events-none select-none">
            {chips.map((chip) => (
              <m.span
                key={chip.label}
                className={`absolute hidden rounded-full border border-white/10 bg-ink-800/90 px-3 py-1 font-mono text-xs text-slate-300 shadow-lg shadow-black/30 md:inline-flex ${chip.pos}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: chip.dur, repeat: Infinity, ease: 'easeInOut' }}
              >
                {chip.label}
              </m.span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
