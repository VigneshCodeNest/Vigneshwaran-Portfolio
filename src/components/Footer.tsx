import { navLinks, profile } from '../data/config'
import SocialLinks from './ui/SocialLinks'

const footerLinks = navLinks.filter((l) => l.id !== 'education')

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (id === 'home' || !target) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/80">
      <div className="container-x grid gap-8 sm:gap-10 py-10 sm:py-12 md:grid-cols-3">
        <div>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="inline-block font-mono text-lg sm:text-xl font-bold text-white transition-opacity hover:opacity-90"
            aria-label={`${profile.name}, back to top`}
          >
            VB<span className="text-cyan-400">.</span>
          </a>
          <p className="mt-1.5 font-medium text-slate-200 text-sm sm:text-base">{profile.role}</p>
          <p className="mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">
            Building scalable applications, REST APIs, and intelligent software solutions.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 md:max-w-[14rem]">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="inline-flex min-h-9 sm:min-h-10 items-center text-xs sm:text-sm text-slate-400 transition-colors hover:text-cyan-300"
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
        <div className="container-x flex flex-col gap-2 py-4 sm:py-5 text-xs sm:text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vigneshwaran B. All rights reserved.</p>
          <p>Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
