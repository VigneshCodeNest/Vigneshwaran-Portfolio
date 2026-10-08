import { Github, Linkedin, Mail } from 'lucide-react'
import { isPlaceholder, profile } from '../../data/config'

const items = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

const tile =
  'flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors'

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3" aria-label="Social and contact links">
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          {isPlaceholder(href) ? (
            <button
              type="button"
              disabled
              aria-label={`${label} (link not added yet)`}
              title={`${label} link not added yet. Set it in src/data/config.ts`}
              className={`${tile} cursor-not-allowed border-dashed text-slate-500`}
            >
              <Icon size={18} aria-hidden="true" />
            </button>
          ) : (
            <a
              href={href}
              aria-label={label}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${tile} text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300`}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
