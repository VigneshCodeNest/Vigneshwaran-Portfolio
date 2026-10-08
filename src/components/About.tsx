import { aboutHighlights, aboutParagraphs } from '../data/about'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="about-title" title="About Me" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 lg:col-span-3">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {aboutHighlights.map(({ title, detail, icon: Icon }, i) => (
              <Reveal key={title} delay={0.08 * i}>
                <div className="card flex items-start gap-4 p-5 transition-colors hover:border-cyan-400/30">
                  <span className="icon-tile">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
