import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/config'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

type FieldName = 'name' | 'email' | 'subject' | 'message'
type Values = Record<FieldName, string>

const validators: Record<FieldName, (v: string) => string> = {
  name: (v) => (v.trim().length < 2 ? 'Enter your name (at least 2 characters).' : ''),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.',
  subject: (v) => (v.trim().length < 3 ? 'Enter a subject (at least 3 characters).' : ''),
  message: (v) => (v.trim().length < 10 ? 'Write a message of at least 10 characters.' : ''),
}

const fields: { name: FieldName; label: string; type: string; autoComplete?: string; multiline?: boolean }[] = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', type: 'text', multiline: true },
]

const empty: Values = { name: '', email: '', subject: '', message: '' }
const noneTouched: Record<FieldName, boolean> = { name: false, email: false, subject: false, message: false }

const inputBase =
  'w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors'

export default function Contact() {
  const [values, setValues] = useState<Values>(empty)
  const [touched, setTouched] = useState(noneTouched)
  const [opened, setOpened] = useState(false)

  const errors = (Object.keys(validators) as FieldName[]).reduce(
    (acc, key) => ({ ...acc, [key]: validators[key](values[key]) }),
    {} as Record<FieldName, string>,
  )

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOpened(false)
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onBlur = (name: FieldName) => setTouched((t) => ({ ...t, [name]: true }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })

    const firstInvalid = fields.find((f) => errors[f.name])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid.name}`)?.focus()
      return
    }

    // No email service is configured, so open the visitor's own email app instead.
    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject.trim(),
    )}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

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

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-cyan-400/30"
                >
                  <span className="icon-tile">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-400">Email</span>
                    <span className="block break-all font-medium text-white">{profile.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-cyan-400/30"
                >
                  <span className="icon-tile">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">Phone</span>
                    <span className="block font-medium text-white">{profile.phone}</span>
                  </span>
                </a>
              </li>
              <li className="card flex items-center gap-4 p-5">
                <span className="icon-tile">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Location</span>
                  <span className="block font-medium text-white">{profile.location}</span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.slice(0, 2).map((f) => renderField(f))}
              </div>
              {fields.slice(2).map((f) => renderField(f))}

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-semibold text-ink-950 transition-[filter] hover:brightness-110 sm:w-auto"
              >
                <Send size={16} aria-hidden="true" />
                Send Message
              </button>

              <p role="status" aria-live="polite" className="text-sm text-slate-400">
                {opened
                  ? `Your email app should open with this message ready to send. Nothing is sent until you press send there. No email app? Write to ${profile.email}.`
                  : 'Sending opens your email app with this message filled in.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )

  function renderField(f: (typeof fields)[number]) {
    const id = `contact-${f.name}`
    const error = touched[f.name] ? errors[f.name] : ''
    const common = {
      id,
      name: f.name,
      value: values[f.name],
      onChange,
      onBlur: () => onBlur(f.name),
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `${id}-error` : undefined,
      className: `${inputBase} ${error ? 'border-red-400/70' : 'border-white/10'}`,
    }
    return (
      <div key={f.name}>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
          {f.label}
        </label>
        {f.multiline ? (
          <textarea {...common} rows={5} className={`${common.className} resize-y`} />
        ) : (
          <input {...common} type={f.type} autoComplete={f.autoComplete} />
        )}
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    )
  }
}
