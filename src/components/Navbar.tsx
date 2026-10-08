import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navIds, navLinks, profile } from '../data/config'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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

  const linkClass = (id: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === id ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-ink-950/85 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          aria-label={`${profile.name}, back to top`}
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          VB<span className="text-cyan-400">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={linkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-white/10 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container-x flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`flex min-h-12 items-center rounded-xl px-3 text-base font-medium ${
                      active === link.id ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-300'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
