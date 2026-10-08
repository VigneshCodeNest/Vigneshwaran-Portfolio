import { m } from 'framer-motion'

const code = [
  'public class Developer {',
  '',
  '    String name = "Vigneshwaran";',
  '    String role = "Java Full Stack Developer";',
  '',
  '    public void build() {',
  '        System.out.println(',
  '            "Building scalable solutions..."',
  '        );',
  '    }',
  '}',
]

const TOKENS = /("[^"]*"|\b(?:public|class|void)\b|\b(?:String|Developer)\b|System\.out\.println)/

function highlight(line: string) {
  return line.split(TOKENS).map((part, i) => {
    if (!part) return null
    if (part.startsWith('"')) return <span key={i} className="text-emerald-300">{part}</span>
    if (/^(public|class|void)$/.test(part)) return <span key={i} className="text-sky-400">{part}</span>
    if (part === 'String' || part === 'Developer') return <span key={i} className="text-cyan-300">{part}</span>
    if (part === 'System.out.println') return <span key={i} className="text-amber-200">{part}</span>
    return <span key={i}>{part}</span>
  })
}

/** Decorative editor window. Hidden from assistive tech since it carries no extra information. */
export default function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 font-mono text-xs text-slate-500">Developer.java</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-6 text-slate-300 sm:text-xs sm:leading-6">
        <code>
          {code.map((line, i) => (
            <m.div
              key={i}
              className="flex whitespace-pre"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
            >
              <span className="mr-4 inline-block w-4 select-none text-right text-slate-600">{i + 1}</span>
              <span>{highlight(line)}</span>
              {i === code.length - 1 && (
                <span className="ml-1 inline-block h-4 w-1.5 translate-y-1 bg-cyan-400 motion-safe:animate-pulse" />
              )}
            </m.div>
          ))}
        </code>
      </pre>
    </div>
  )
}
