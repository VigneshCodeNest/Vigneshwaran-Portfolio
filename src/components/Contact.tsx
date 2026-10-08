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

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={`mailto:${profile.email}`}
              className="card flex h-full flex-col justify-between p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="icon-tile">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="mt-1 block text-xs min-[360px]:text-sm font-medium text-white break-all">
                    {profile.email}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <a
              href={profile.phoneHref}
              className="card flex h-full flex-col justify-between p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="icon-tile">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</span>
                  <span className="mt-1 block text-sm font-medium text-white">{profile.phone}</span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.12} className="sm:col-span-2 lg:col-span-1">
            <div className="card flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="icon-tile">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
                  <span className="mt-1 block text-sm font-medium text-white">{profile.location}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400">Open to on-site &amp; remote opportunities</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
