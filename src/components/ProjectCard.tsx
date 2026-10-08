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
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-white/10 bg-ink-800/70 p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-glow focus-within:border-cyan-400/40 focus-within:shadow-glow sm:p-8"
    >
      <p className="font-mono text-xs text-cyan-300">{project.category}</p>

      <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">{project.title}</h3>
      {project.subtitle && <p className="mt-1 text-sm font-medium text-slate-400">{project.subtitle}</p>}
      <p className="mt-4 leading-relaxed text-slate-300">{project.cardDescription || project.description}</p>

      {/* Architecture / Visual representation */}
      <div className="mt-6">
        {project.useCustomArchitectureDiagram ? (
          <ArchitectureDiagram compact />
        ) : (
          <div className="rounded-xl border border-white/10 bg-ink-950/50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-white">{project.architectureTitle}</h4>
            <FlowDiagram steps={project.architecture} label={project.architectureTitle} compact />
          </div>
        )}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white">Problem solved</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{project.problem}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white">Technical highlights</h4>
        <ul className="mt-2 space-y-2">
          {project.highlights.slice(0, VISIBLE_HIGHLIGHTS).map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-slate-300">
              <Check size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        {hidden > 0 && (
          <p className="mt-2 pl-[26px] text-xs text-slate-500">
            +{hidden} more in the project details
          </p>
        )}
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {displayTechs.map((t, i) => (
          <li
            key={t}
            className="chip transition-transform duration-300 group-hover:-translate-y-0.5"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={(e) => {
            e.stopPropagation()
            onOpen(project)
          }}
          className="inline-flex min-h-11 items-center rounded-xl bg-cyan-400/10 px-4 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
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
