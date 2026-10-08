import { navLinks, profile } from '../data/config'
import SocialLinks from './ui/SocialLinks'

const footerLinks = navLinks.filter((l) => l.id !== 'education')

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/80">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-xl font-bold text-white">
            VB<span className="text-cyan-400">.</span>
          </p>
          <p className="mt-2 font-medium text-slate-200">{profile.role}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
            Building scalable applications and exploring intelligent software solutions.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 md:max-w-[14rem]">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="inline-flex min-h-10 items-center text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vigneshwaran B. All rights reserved.</p>
          <p>Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
