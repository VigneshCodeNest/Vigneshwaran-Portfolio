import { ExternalLink, type LucideIcon } from 'lucide-react'
import { isPlaceholder } from '../../data/config'

interface LinkButtonProps {
  href?: string
  label: string
  icon: LucideIcon
  solid?: boolean
}

const base =
  'inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors'

/** Real link when a URL is set; a clearly disabled button while it is still a YOUR_* placeholder; hidden if no URL provided. */
export default function LinkButton({ href, label, icon: Icon, solid = false }: LinkButtonProps) {
  if (!href || href.trim() === '') {
    return null
  }

  if (isPlaceholder(href)) {
    return (
      <span title="Link not added yet. Set it in src/data/projects.ts">
        <button
          type="button"
          disabled
          className={`${base} cursor-not-allowed border border-dashed border-slate-600 text-slate-400`}
        >
          <Icon size={16} aria-hidden="true" />
          {label}
          <span className="sr-only">(link not added yet)</span>
        </button>
      </span>
    )
  }

  const style = solid
    ? 'bg-cyan-400 text-ink-950 hover:bg-cyan-300'
    : 'border border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
      <Icon size={16} aria-hidden="true" />
      {label}
      <ExternalLink size={13} className="opacity-60" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
