import { aboutHighlights, aboutParagraphs } from '../data/about'
import { profile } from '../data/config'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="about-title"
            title="About Me"
            subtitle="Background, engineering focus, and technical strengths."
          />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid items-start gap-8 lg:grid-cols-12">
          {/* Profile Picture Card */}
          <Reveal className="lg:col-span-4">
            <div className="group relative mx-auto max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 p-3 shadow-2xl shadow-black/60 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-950">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-ink-900/90 p-2.5 backdrop-blur-md">
                  <p className="font-semibold text-white text-sm">{profile.name}</p>
                  <p className="text-xs font-mono text-cyan-300">{profile.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio & Paragraphs */}
          <div className="space-y-6 lg:col-span-8">
            <Reveal className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            {/* Highlights Grid */}
            <div className="grid gap-3 min-[480px]:grid-cols-2 sm:grid-cols-3 pt-2">
              {aboutHighlights.map(({ title, detail, icon: Icon }, i) => (
                <Reveal key={title} delay={0.06 * i} className={i === 2 ? 'min-[480px]:col-span-2 sm:col-span-1' : ''}>
                  <div className="card h-full flex flex-col justify-between p-4 transition-colors hover:border-cyan-400/30">
                    <span className="icon-tile mb-3">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{title}</h3>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
