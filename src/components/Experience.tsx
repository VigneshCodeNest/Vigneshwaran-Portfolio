import { Building2, Calendar, Check, MapPin } from 'lucide-react'
import { experience } from '../data/experience'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TimelineItem from './ui/TimelineItem'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="experience-title" title="Experience" />
        </Reveal>

        <ol className="ml-2 mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-10">
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`}>
              <article className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-cyan-300">
                      <Building2 size={16} aria-hidden="true" />
                      {item.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {item.type}
                  </span>
                </div>

                <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} aria-hidden="true" />
                    {item.period}
                  </span>
                </p>

                <p className="mt-5 leading-relaxed text-slate-300">{item.description}</p>

                <ul className="mt-5 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm text-slate-300">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {item.technologies.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
