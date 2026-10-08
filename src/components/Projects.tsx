import { lazy, Suspense, useCallback, useMemo, useState } from 'react'
import { m, type Variants } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

// Loaded only when a project is opened
const ProjectModal = lazy(() => import('./ProjectModal'))

const CATEGORIES = ['All', 'Full Stack', 'Backend', 'Real-Time', 'AI'] as const
type Category = (typeof CATEGORIES)[number]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const open = useCallback((project: Project) => setSelected(project), [])
  const close = useCallback(() => setSelected(null), [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter(
      (p) =>
        p.categories?.includes(activeCategory) ||
        p.category.toLowerCase().includes(activeCategory.toLowerCase()),
    )
  }, [activeCategory])

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="projects-title"
            title="Featured Projects"
            subtitle="Full-stack real-time applications, Java Spring Boot backends, and AI-powered systems."
          />
        </Reveal>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex items-center justify-start overflow-x-auto no-scrollbar px-1 py-1.5 min-[640px]:flex-wrap min-[640px]:justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-400 text-ink-950 shadow-md shadow-cyan-400/20'
                    : 'border border-white/10 bg-ink-800/60 text-slate-300 hover:border-cyan-400/30 hover:text-white'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 opacity-60 text-[10px]">
                    (
                    {
                      projects.filter(
                        (p) =>
                          p.categories?.includes(cat) ||
                          p.category.toLowerCase().includes(cat.toLowerCase()),
                      ).length
                    }
                    )
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <m.div
          key={activeCategory}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={open} />
          ))}
        </m.div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center text-sm text-slate-400">
            No projects found in this category.
          </div>
        )}
      </div>

      {selected && (
        <Suspense fallback={null}>
          <ProjectModal project={selected} onClose={close} />
        </Suspense>
      )}
    </section>
  )
}
