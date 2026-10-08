interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" aria-hidden="true" />
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  )
}
