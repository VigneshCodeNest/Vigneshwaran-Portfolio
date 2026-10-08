import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TimelineItem from './ui/TimelineItem'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="education-title" title="Education" />
        </Reveal>

        <ol className="ml-2 mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-10">
          {education.map((item) => (
            <TimelineItem key={item.degree}>
              <article className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                <div className="flex gap-4">
                  <span className="icon-tile">
                    <GraduationCap size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="mt-1 text-slate-300">{item.institution}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.field}</p>
                    <p className="mt-3 font-mono text-xs text-slate-500">{item.period}</p>
                  </div>
                </div>
                <p className="shrink-0 self-start rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                  {item.scoreLabel}: <span className="font-semibold">{item.score}</span>
                </p>
              </article>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
