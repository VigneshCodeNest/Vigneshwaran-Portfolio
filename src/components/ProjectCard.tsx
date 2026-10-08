import { memo } from 'react'
import { m, type Variants } from 'framer-motion'
import { Check, Github } from 'lucide-react'
import type { Project } from '../data/projects'
import ArchitectureDiagram from './ui/ArchitectureDiagram'
import FlowDiagram from './ui/FlowDiagram'
import LinkButton from './ui/LinkButton'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const VISIBLE_HIGHLIGHTS = 4

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hidden = project.highlights.length - VISIBLE_HIGHLIGHTS
  const displayTechs = project.cardTechnologies || project.technologies

  return (
    <m.article
      variants={item}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-white/10 bg-ink-800/70 p-5 sm:p-7 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-glow focus-within:border-cyan-400/40 focus-within:shadow-glow"
    >
      <p className="font-mono text-xs text-cyan-300">{project.category}</p>

      <h3 className="mt-2.5 text-xl font-bold tracking-tight text-white sm:text-2xl">{project.title}</h3>
      {project.subtitle && <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">{project.subtitle}</p>}
      <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-300">{project.cardDescription || project.description}</p>

      {/* Architecture / Visual representation */}
      <div className="mt-5">
        {project.useCustomArchitectureDiagram ? (
          <ArchitectureDiagram compact />
        ) : (
          <div className="rounded-xl border border-white/10 bg-ink-950/50 p-3.5 sm:p-4">
            <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">{project.architectureTitle}</h4>
            <FlowDiagram steps={project.architecture} label={project.architectureTitle} compact />
          </div>
        )}
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Problem solved</h4>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-400">{project.problem}</p>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Technical highlights</h4>
        <ul className="mt-2 space-y-2">
          {project.highlights.slice(0, VISIBLE_HIGHLIGHTS).map((h) => (
            <li key={h} className="flex gap-2 text-xs sm:text-sm text-slate-300">
              <Check size={15} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        {hidden > 0 && (
          <p className="mt-2 pl-6 text-xs text-slate-500">
            +{hidden} more in the project details
          </p>
        )}
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2" aria-label="Technologies">
        {displayTechs.map((t, i) => (
          <li
            key={t}
            className="chip text-[11px] sm:text-xs transition-transform duration-300 group-hover:-translate-y-0.5"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 sm:pt-7">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={(e) => {
            e.stopPropagation()
            onOpen(project)
          }}
          className="inline-flex min-h-10 items-center rounded-xl bg-cyan-400/10 px-3.5 py-2 text-xs sm:text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20 active:bg-cyan-400/30"
        >
          View details
          <span className="sr-only">: {project.title}</span>
        </button>
        <div
          className="flex flex-wrap items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <LinkButton href={project.github} label="GitHub" icon={Github} />
        </div>
      </div>
    </m.article>
  )
}

export default memo(ProjectCard)
