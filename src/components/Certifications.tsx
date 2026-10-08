import { useState, useCallback, useEffect } from 'react'
import { m, type Variants } from 'framer-motion'
import { Award, Calendar, CheckCircle2, Download, ExternalLink, Eye, ShieldCheck, X } from 'lucide-react'
import { certificates, type Certificate } from '../data/certifications'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const openPreview = useCallback((cert: Certificate) => {
    setSelectedCert(cert)
  }, [])

  const closePreview = useCallback(() => {
    setSelectedCert(null)
  }, [])

  // Lock scroll & handle Escape key when certificate modal is open
  useEffect(() => {
    if (!selectedCert) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [selectedCert, closePreview])

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="certifications-title"
            title="Certifications"
            subtitle="Verified credentials in Java, Spring Boot, Artificial Intelligence, and Backend Development."
          />
        </Reveal>

        <m.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certificates.map((cert) => (
            <m.article
              key={cert.id}
              variants={item}
              className="card group flex flex-col justify-between overflow-hidden p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow sm:p-6"
            >
              <div>
                {/* Certificate Preview Image Thumbnail */}
                <div
                  onClick={() => openPreview(cert)}
                  className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-ink-950/80 shadow-inner"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-xl bg-ink-900/90 border border-cyan-400/40 px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan-200 shadow-lg backdrop-blur-md">
                      <Eye size={14} aria-hidden="true" />
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Metadata & Header */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-300">
                    <Award size={14} className="text-cyan-400 shrink-0" />
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                    <Calendar size={12} className="text-slate-500 shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="mt-2.5 text-lg font-bold tracking-tight text-white sm:text-xl">
                  {cert.title}
                </h3>
                {cert.partner && (
                  <p className="mt-0.5 text-xs font-medium text-slate-400">
                    Partner / Training: <span className="text-slate-300">{cert.partner}</span>
                  </p>
                )}

                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills covered">
                  {cert.skills.map((skill) => (
                    <li key={skill} className="chip text-[11px]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions Footer */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => openPreview(cert)}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-cyan-400/10 px-3.5 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
                >
                  <Eye size={14} aria-hidden="true" />
                  View
                </button>

                <a
                  href={cert.pdfUrl}
                  download={`${cert.id}.pdf`}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/15 px-3.5 text-xs font-semibold text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Download size={14} aria-hidden="true" />
                  Download PDF
                </a>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-950/20 px-3.5 text-xs font-semibold text-purple-200 transition-colors hover:border-purple-400/50 hover:bg-purple-950/40"
                  >
                    <ShieldCheck size={14} className="text-purple-400" />
                    Verify on Credly
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                )}
              </div>
            </m.article>
          ))}
        </m.div>
      </div>

      {/* Certificate Lightbox Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <m.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
            onClick={closePreview}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />

          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink-900 shadow-2xl shadow-black/80"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-ink-950/60 px-5 py-4 sm:px-6">
              <div>
                <span className="font-mono text-xs text-cyan-300">{selectedCert.issuer}</span>
                <h2 id="cert-modal-title" className="mt-0.5 text-base font-bold text-white sm:text-lg">
                  {selectedCert.title}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={closePreview}
                aria-label="Close certificate preview"
                className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-ink-800 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-red-400/60 hover:bg-red-500/20 hover:text-red-200"
              >
                <X size={16} className="stroke-[2.5]" aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center">
              <div className="relative max-h-[70dvh] w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70dvh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Modal Footer with Actions */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 w-full border-t border-white/10 pt-4">
                <p className="text-xs text-slate-400">
                  Issued: <span className="font-medium text-slate-300">{selectedCert.date}</span>
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={selectedCert.pdfUrl}
                    download={`${selectedCert.id}.pdf`}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-cyan-400 px-4 text-xs font-semibold text-ink-950 transition-colors hover:bg-cyan-300"
                  >
                    <Download size={14} aria-hidden="true" />
                    Download PDF
                  </a>

                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-purple-500/40 bg-purple-950/40 px-3.5 text-xs font-semibold text-purple-200 transition-colors hover:border-purple-300"
                    >
                      <CheckCircle2 size={14} className="text-purple-400" />
                      Verify on Credly
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </section>
  )
}
