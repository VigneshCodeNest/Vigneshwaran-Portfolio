import { ArrowDown, Database, Globe, Key, Network, Server, Shield, Layers, Workflow, Zap } from 'lucide-react'

interface ArchitectureDiagramProps {
  compact?: boolean
}

export default function ArchitectureDiagram({ compact = false }: ArchitectureDiagramProps) {
  if (compact) {
    return (
      <div className="w-full rounded-xl border border-white/10 bg-ink-950/60 p-3.5 sm:p-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          Real-Time Architecture
        </h4>
        <div className="flex flex-col items-center gap-1.5 text-xs font-mono">
          {/* Frontend */}
          <div className="flex w-full items-center justify-between rounded-lg border border-cyan-400/30 bg-cyan-950/30 px-3 py-2">
            <span className="flex items-center gap-2 font-semibold text-cyan-200">
              <Globe size={14} className="text-cyan-400 shrink-0" />
              React.js Frontend
            </span>
            <span className="text-[10px] text-slate-400">UI / WebSocket Client</span>
          </div>

          <div className="flex items-center gap-1 py-0.5 text-[11px] text-slate-400">
            <ArrowDown size={13} className="text-cyan-400 shrink-0" />
            <span>REST API / WebSocket</span>
            <ArrowDown size={13} className="text-cyan-400 shrink-0" />
          </div>

          {/* Spring Boot Backend Container */}
          <div className="w-full rounded-lg border border-white/15 bg-ink-900/90 p-2.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
              <span className="flex items-center gap-1.5 font-semibold text-sky-200 text-xs">
                <Server size={14} className="text-sky-400 shrink-0" />
                Spring Boot Backend
              </span>
              <span className="text-[10px] text-slate-400">Java Core</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 rounded bg-purple-950/30 border border-purple-500/20 px-2 py-1 text-purple-200">
                <Shield size={11} className="text-purple-400 shrink-0" />
                <span className="truncate">Spring Security / JWT</span>
              </div>
              <div className="flex items-center gap-1.5 rounded bg-cyan-950/30 border border-cyan-500/20 px-2 py-1 text-cyan-200">
                <Workflow size={11} className="text-cyan-400 shrink-0" />
                <span className="truncate">WebSocket Engine</span>
              </div>
              <div className="flex items-center gap-1.5 rounded bg-blue-950/30 border border-blue-500/20 px-2 py-1 text-blue-200">
                <Network size={11} className="text-blue-400 shrink-0" />
                <span className="truncate">REST Controllers</span>
              </div>
              <div className="flex items-center gap-1.5 rounded bg-emerald-950/30 border border-emerald-500/20 px-2 py-1 text-emerald-200">
                <Database size={11} className="text-emerald-400 shrink-0" />
                <span className="truncate">Spring Data JPA / ORM</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 py-0.5 text-[11px] text-emerald-400/80">
            <ArrowDown size={13} className="text-emerald-400 shrink-0" />
            <span>JPA / Hibernate</span>
            <ArrowDown size={13} className="text-emerald-400 shrink-0" />
          </div>

          {/* Database */}
          <div className="flex w-full items-center justify-between rounded-lg border border-emerald-400/30 bg-emerald-950/30 px-3 py-2">
            <span className="flex items-center gap-2 font-semibold text-emerald-200">
              <Database size={14} className="text-emerald-400 shrink-0" />
              MySQL Database
            </span>
            <span className="text-[10px] text-slate-400">Persistent Storage</span>
          </div>
        </div>
      </div>
    )
  }

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
