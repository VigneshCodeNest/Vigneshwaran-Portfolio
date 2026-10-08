import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/config'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="contact-title"
            title="Let's Build Something Together"
            subtitle="I am currently looking for opportunities in Java Full Stack Development, Backend Development, and Software Engineering."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={`mailto:${profile.email}`}
              className="card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="icon-tile">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="mt-1 block text-sm font-medium text-white break-words">
                    {profile.email}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={profile.phoneHref}
              className="card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="icon-tile">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</span>
                  <span className="mt-1 block font-medium text-white">{profile.phone}</span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.16} className="sm:col-span-2 lg:col-span-1">
            <div className="card flex h-full flex-col justify-between p-6">
              <div className="flex items-center gap-4">
                <span className="icon-tile">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
                  <span className="mt-1 block font-medium text-white">{profile.location}</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400">Open to on-site & remote opportunities</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
