import { m } from 'framer-motion'
import { skillCategories } from '../data/skills'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="skills-title" title="Technical Skills" />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={0.04 * i}>
              <m.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="card h-full p-5 sm:p-6 transition-colors hover:border-cyan-400/30"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-tile">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-white text-sm sm:text-base">{title}</h3>
                </div>
                <ul className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </m.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
