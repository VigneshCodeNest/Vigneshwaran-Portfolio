import { CheckCheck, MessageSquare, Shield, Zap, User } from 'lucide-react'

export default function ConnectlyVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-ink-950/70 p-4 shadow-inner">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-300">
            <MessageSquare size={13} aria-hidden="true" />
          </div>
          <span className="font-mono text-xs font-semibold text-white tracking-wide">Connectly</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span>WebSocket Active</span>
        </div>
      </div>

      {/* Chat Simulation Visual */}
      <div className="mt-3.5 space-y-2.5 text-xs">
        {/* Incoming Message */}
        <div className="flex items-start gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 ring-1 ring-white/10">
            <User size={12} aria-hidden="true" />
          </div>
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-white/10 bg-ink-900/90 px-3 py-2 text-slate-200 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-slate-400">User 1</span>
              <span className="text-[9px] text-slate-500">10:42 AM</span>
            </div>
            <p className="leading-snug text-[11px] sm:text-xs">Hey, are you available?</p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-start justify-end gap-2">
          <div className="max-w-[78%] rounded-2xl rounded-tr-sm border border-cyan-400/30 bg-gradient-to-r from-cyan-950/80 to-ink-900/90 px-3 py-2 text-slate-100 shadow-sm">
            <p className="leading-snug text-[11px] sm:text-xs">Yes! What&apos;s up?</p>
            <div className="mt-0.5 flex items-center justify-end gap-1">
              <span className="text-[9px] text-slate-400">10:43 AM</span>
              <CheckCheck size={12} className="text-cyan-400" aria-hidden="true" />
            </div>
          </div>
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/30">
            <User size={12} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Bottom Visual Badges */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5 font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-cyan-300">
          <Zap size={11} aria-hidden="true" />
          WebSocket
        </span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1 text-sky-300">
          <Shield size={11} aria-hidden="true" />
          JWT Auth
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-slate-300">Spring Boot</span>
      </div>
    </div>
  )
}
