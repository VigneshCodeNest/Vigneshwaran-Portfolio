import { highlights } from '../data/highlights'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="highlights-title" title="Professional Highlights" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={0.06 * i}>
              <div className="card h-full p-6 transition-colors hover:border-cyan-400/30">
                <span className="icon-tile">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
