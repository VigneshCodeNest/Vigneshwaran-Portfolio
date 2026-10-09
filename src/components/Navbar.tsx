import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { navIds, navLinks, profile } from '../data/config'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape, and when the viewport grows to desktop size
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)

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

  const linkClass = (id: string) =>
    `rounded-lg px-2.5 py-1.5 lg:px-3 lg:py-2 text-xs lg:text-sm font-medium transition-colors ${
      active === id ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-ink-950/90 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label={`${profile.name}, back to top`}
          className="flex items-center gap-2.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <img
            src={profile.avatar}
            alt=""
            className="h-8 w-8 rounded-full object-cover object-top ring-1 ring-cyan-400/40"
          />
          <span>
            VB<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              aria-current={active === link.id ? 'true' : undefined}
              className={linkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download="Vigneshwaran_B_Resume.pdf"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
          >
            <Download size={13} aria-hidden="true" />
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 transition-colors hover:bg-white/5 active:scale-95 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="max-h-[80svh] overflow-y-auto border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="container-x flex flex-col py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      aria-current={active === link.id ? 'true' : undefined}
                      className={`flex min-h-11 items-center justify-between rounded-xl px-3.5 text-sm font-medium transition-colors ${
                        active === link.id
                          ? 'bg-cyan-400/15 font-semibold text-cyan-300'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {active === link.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Quick Action Buttons & Socials */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <a
                  href={profile.resumeUrl}
                  download="Vigneshwaran_B_Resume.pdf"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-sm font-semibold text-ink-950 shadow-md shadow-cyan-500/20"
                  onClick={() => setOpen(false)}
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume (PDF)
                </a>

                <div className="mt-3 flex items-center justify-center gap-4 pt-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-300"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
