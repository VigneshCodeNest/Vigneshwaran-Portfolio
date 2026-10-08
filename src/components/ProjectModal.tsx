import { useEffect, useRef, type ReactNode } from 'react'
import { m } from 'framer-motion'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Cpu,
  Database,
  Github,
  Key,
  Layers,
  Lock,
  MessageSquare,
  Network,
  Radio,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import type { Project } from '../data/projects'
import ArchitectureDiagram from './ui/ArchitectureDiagram'
import FlowDiagram from './ui/FlowDiagram'
import LinkButton from './ui/LinkButton'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function SectionBlock({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon?: typeof Shield
  children: ReactNode
}) {
  return (
    <section className="border-t border-white/10 pt-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={18} className="text-cyan-400" aria-hidden="true" />}
        <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
          <Check size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = `project-title-${project.id}`

  // Scroll lock, focus trap, Escape to close, and focus restore
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel?.querySelector<HTMLElement>('[data-autofocus]')?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4 md:p-6">
      <m.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        aria-hidden="true"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-white/15 bg-ink-900 shadow-2xl shadow-black/80 sm:rounded-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-ink-950/40 px-5 py-4 sm:px-8">
          <div>
            <p className="font-mono text-xs text-cyan-300">{project.category}</p>
            <h2 id={titleId} className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h2>
            {project.subtitle && <p className="mt-0.5 text-sm text-slate-400">{project.subtitle}</p>}
          </div>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="space-y-7 overflow-y-auto px-5 py-6 sm:px-8">
          {/* Highlights / Metric Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div
                  key={m.title}
                  className="flex flex-col rounded-xl border border-cyan-400/20 bg-ink-950/60 p-3.5 shadow-sm transition-colors hover:border-cyan-400/40"
                >
                  <span className="font-mono text-xs font-semibold text-cyan-300">{m.badge}</span>
                  <p className="mt-1 text-xs text-slate-300">{m.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* 1. Overview */}
          <section>
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-cyan-400" aria-hidden="true" />
              <h3 className="text-base font-semibold text-white sm:text-lg">Overview</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.detailedDescription || project.description}
            </p>
          </section>

          {/* 2. Problem */}
          <SectionBlock title="Problem" icon={ShieldCheck}>
            <p>{project.problem}</p>
            {project.problemPoints && project.problemPoints.length > 0 && (
              <div className="mt-4 rounded-xl border border-white/10 bg-ink-950/40 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Connectly addresses this by combining:
                </p>
                <BulletList items={project.problemPoints} />
              </div>
            )}
          </SectionBlock>

          {/* 3. Solution */}
          <SectionBlock title="Solution" icon={Zap}>
            <p>{project.solution}</p>
            {project.solutionFlow && (
              <div className="mt-4 rounded-xl border border-white/10 bg-ink-950/50 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Separation of Concerns & Request Flow:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {project.solutionFlow.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-cyan-400/30 bg-cyan-950/40 px-3 py-1.5 text-cyan-200">
                        {step}
                      </span>
                      {idx < (project.solutionFlow?.length ?? 0) - 1 && (
                        <ArrowRight size={14} className="text-slate-500 shrink-0" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </SectionBlock>

          {/* 4. Key Features */}
          <SectionBlock title="Key Features" icon={CheckCircle2}>
            {project.featureCategories ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.featureCategories.map((fc) => (
                  <div
                    key={fc.title}
                    className="flex flex-col rounded-xl border border-white/10 bg-ink-950/50 p-4 transition-colors hover:border-cyan-400/30"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      {fc.title}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300">
                      {fc.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <BulletList items={project.highlights} />
            )}
          </SectionBlock>

          {/* 5. Real-Time Architecture */}
          <SectionBlock title={project.architectureTitle || 'Architecture'} icon={Layers}>
            {project.useCustomArchitectureDiagram ? (
              <ArchitectureDiagram />
            ) : (
              <div className="rounded-xl border border-white/10 bg-ink-950/50 p-4">
                <FlowDiagram steps={project.architecture} label={project.architectureTitle} />
              </div>
            )}
          </SectionBlock>

          {/* 6. How Real-Time Messaging Works */}
          {project.realtimeWorkflow && project.realtimeWorkflow.length > 0 && (
            <SectionBlock title="How Real-Time Messaging Works" icon={Radio}>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.realtimeWorkflow.map((wf) => (
                  <div
                    key={wf.step}
                    className="relative flex flex-col rounded-xl border border-white/10 bg-ink-950/40 p-3.5 transition-colors hover:border-cyan-400/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 font-mono text-xs font-bold text-cyan-300">
                        {wf.step}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-slate-400">{wf.title}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{wf.description}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {/* 7. Security */}
          {project.security && project.security.length > 0 && (
            <SectionBlock title="Security" icon={Lock}>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.security.map((sec) => (
                  <div
                    key={sec.title}
                    className="rounded-xl border border-purple-500/20 bg-purple-950/15 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Key size={14} className="text-purple-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-200">
                        {sec.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{sec.description}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {/* 8. Database */}
          {project.databaseInfo && (
            <SectionBlock title="Database & Persistence" icon={Database}>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/15 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Database size={15} />
                  <span>MySQL Persistence Layer</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{project.databaseInfo.summary}</p>
              </div>
            </SectionBlock>
          )}

          {/* 9. API & Communication */}
          {project.apiCommunication && project.apiCommunication.length > 0 && (
            <SectionBlock title="API & Communication" icon={Network}>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.apiCommunication.map((api) => (
                  <div
                    key={api.type}
                    className="flex flex-col rounded-xl border border-white/10 bg-ink-950/50 p-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-mono text-sm font-bold text-cyan-300">{api.type}</span>
                      <span className="text-[11px] font-mono text-slate-400">Communication Mode</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-slate-400">Used for:</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                      {api.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Check size={13} className="text-cyan-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {/* 10. Development Tools */}
          {project.developmentTools && (
            <SectionBlock title="Development Tools" icon={Wrench}>
              <div className="rounded-xl border border-white/10 bg-ink-950/40 p-4">
                <div className="flex flex-wrap gap-2">
                  {project.developmentTools.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-slate-700 bg-ink-800 px-3 py-1 font-mono text-xs font-semibold text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-300">{project.developmentTools.summary}</p>
              </div>
            </SectionBlock>
          )}

          {/* 11. My Contribution / Key Development Areas */}
          <SectionBlock title={project.contributionTitle || 'My Contribution'} icon={Terminal}>
            <BulletList items={project.contribution} />
          </SectionBlock>

          {/* 12. Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <SectionBlock title="Future Improvements" icon={Cpu}>
              <BulletList items={project.futureImprovements} />
            </SectionBlock>
          )}

          {/* 13. Project Tags / Technologies */}
          <SectionBlock title="Project Technologies & Tags" icon={Server}>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </SectionBlock>

          {/* 14. Links */}
          <SectionBlock title="Repository & Links">
            <div className="flex flex-wrap gap-3">
              <LinkButton href={project.github} label="GitHub" icon={Github} solid />
            </div>
          </SectionBlock>
        </div>
      </m.div>
    </div>
  )
}
