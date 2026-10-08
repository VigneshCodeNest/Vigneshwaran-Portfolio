import { ArrowDown } from 'lucide-react'

interface FlowDiagramProps {
  steps: string[]
  label: string
  compact?: boolean
}

/** Vertical flow of boxes joined by arrows. Semantic ordered list so it reads well with a screen reader. */
export default function FlowDiagram({ steps, label, compact = false }: FlowDiagramProps) {
  return (
    <ol
      aria-label={label}
      className={`mx-auto flex w-full flex-col items-center gap-1 ${compact ? 'max-w-xs' : 'max-w-sm'}`}
    >
      {steps.map((step, i) => (
        <li key={step} className="flex w-full flex-col items-center gap-1">
          <span
            className={`w-full rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-center font-mono text-slate-200 ${
              compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm'
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowDown size={compact ? 14 : 16} className="text-cyan-400/70" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  )
}
