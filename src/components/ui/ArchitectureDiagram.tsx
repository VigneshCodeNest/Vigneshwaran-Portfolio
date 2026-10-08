import { ArrowDown, Database, Globe, Key, Network, Server, Shield, Layers, Workflow } from 'lucide-react'

export default function ArchitectureDiagram() {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-ink-950/60 p-4 sm:p-6">
      <div className="flex flex-col items-center gap-3">
        {/* Tier 1: Frontend */}
        <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-xl border border-cyan-400/30 bg-cyan-950/20 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
              <Globe size={18} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">React.js Frontend</h4>
              <p className="text-[11px] text-slate-400">Client UI, State Management, WebSocket Client</p>
            </div>
          </div>
          <span className="rounded bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">Client Tier</span>
        </div>

        {/* Communication Arrow */}
        <div className="flex items-center gap-2 py-0.5 text-xs font-mono text-cyan-300/80">
          <ArrowDown size={15} className="text-cyan-400" aria-hidden="true" />
          <span>REST API / WebSocket Protocol</span>
          <ArrowDown size={15} className="text-cyan-400" aria-hidden="true" />
        </div>

        {/* Tier 2: Spring Boot Backend Box */}
        <div className="w-full rounded-xl border border-white/15 bg-ink-900/80 p-4 shadow-lg sm:p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/20 text-sky-300">
                <Server size={18} aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Spring Boot Backend</h4>
                <p className="text-[11px] text-slate-400">Java Enterprise Core Engine & Business Logic</p>
              </div>
            </div>
            <span className="rounded bg-sky-400/10 px-2 py-0.5 font-mono text-[10px] text-sky-300">Application Tier</span>
          </div>

          {/* Inner Subsystem Grid */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {/* Spring Security + JWT */}
            <div className="rounded-lg border border-purple-500/20 bg-purple-950/20 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                <Shield size={14} />
                <span>Spring Security</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 pl-3 border-l-2 border-purple-400/30 text-[11px] text-slate-300">
                <Key size={12} className="text-purple-400" />
                <span>JWT Authentication & BCrypt</span>
              </div>
            </div>

            {/* REST Controllers */}
            <div className="rounded-lg border border-blue-500/20 bg-blue-950/20 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                <Network size={14} />
                <span>REST Controllers</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">User, Connection, Profile & Message Endpoints</p>
            </div>

            {/* WebSocket Handler */}
            <div className="rounded-lg border border-cyan-500/20 bg-cyan-950/20 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <Workflow size={14} />
                <span>WebSocket Engine</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 pl-3 border-l-2 border-cyan-400/30 text-[11px] text-slate-300">
                <Zap size={12} className="text-cyan-400" />
                <span>Real-Time Messaging & Status Broadcasts</span>
              </div>
            </div>

            {/* Service Layer */}
            <div className="rounded-lg border border-slate-700 bg-ink-950/50 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Layers size={14} className="text-slate-400" />
                <span>Service Layer</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">Business Logic, Request Validation & Lifecycle</p>
            </div>

            {/* Spring Data JPA & Hibernate */}
            <div className="sm:col-span-2 rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <Database size={14} />
                  <span>Spring Data JPA & Hibernate ORM</span>
                </div>
                <span className="text-[11px] text-slate-400">Data Access & Object-Relational Mapping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Database Arrow */}
        <div className="flex items-center gap-2 py-0.5 text-xs font-mono text-emerald-400/80">
          <ArrowDown size={15} className="text-emerald-400" aria-hidden="true" />
          <span>Persistence & Queries</span>
          <ArrowDown size={15} className="text-emerald-400" aria-hidden="true" />
        </div>

        {/* Tier 3: MySQL Database */}
        <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-xl border border-emerald-400/30 bg-emerald-950/20 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
              <Database size={18} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">MySQL Database</h4>
              <p className="text-[11px] text-slate-400">Users, Messages, Connections, Media Records</p>
            </div>
          </div>
          <span className="rounded bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">Storage Tier</span>
        </div>
      </div>
    </div>
  )
}

function Zap({ size = 12, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
