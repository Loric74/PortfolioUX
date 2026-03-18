import { useEffect } from 'react'
import { X } from 'lucide-react'
import { featuredProject, projects } from '../../data/projects'

const allProjects = [featuredProject, ...projects]

export default function ProjectModal({ projectId, onClose }) {
  const p = allProjects.find((proj) => proj.id === projectId)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!p) return null

  return (
    <div
      className="fixed inset-0 z-[500] bg-[rgba(2,8,18,0.92)] backdrop-blur-[8px] flex items-center justify-center px-5 py-[60px]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="max-w-[780px] w-full bg-bg2 border border-[rgba(0,245,255,0.2)] p-12 relative clip-card-32 max-h-[80vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 border border-[rgba(0,245,255,0.2)] bg-transparent text-[rgba(200,232,240,0.5)] cursor-pointer flex items-center justify-center transition-all duration-300 hover:border-magenta hover:text-magenta"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-[0.62rem] tracking-[0.3em] text-magenta opacity-70 mb-2.5">{p.label}</p>
        <h2 className="font-orbitron text-[1.5rem] font-bold text-white mb-1.5">{p.title}</h2>
        <p className="font-mono text-[0.72rem] text-cyan tracking-[0.2em] mb-6">{p.role}</p>

        {/* Context */}
        <div className="mb-6">
          <p className="font-orbitron text-[0.78rem] font-semibold text-cyan tracking-[0.2em] mb-2.5 pb-1.5 border-b border-[rgba(0,245,255,0.1)]">
            Contexte
          </p>
          <p className="text-[0.9rem] leading-[1.75] text-[rgba(200,232,240,0.65)]">{p.context}</p>
        </div>

        {/* Objectives */}
        {p.objectives && (
          <div className="mb-6">
            <p className="font-orbitron text-[0.78rem] font-semibold text-cyan tracking-[0.2em] mb-2.5 pb-1.5 border-b border-[rgba(0,245,255,0.1)]">
              Objectifs
            </p>
            <ul className="flex flex-col gap-2 mt-2 list-none">
              {p.objectives.map((o, i) => (
                <li key={i} className="text-[0.9rem] leading-[1.7] text-[rgba(200,232,240,0.65)] flex items-start gap-2.5">
                  <span className="text-cyan text-glow-cyan text-[1.1rem] leading-[1.4] flex-shrink-0">›</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Process */}
        {p.process && (
          <div className="mb-6">
            <p className="font-orbitron text-[0.78rem] font-semibold text-cyan tracking-[0.2em] mb-2.5 pb-1.5 border-b border-[rgba(0,245,255,0.1)]">
              Process
            </p>
            <p className="text-[0.9rem] leading-[1.75] text-[rgba(200,232,240,0.65)]">{p.process}</p>
          </div>
        )}

        {/* Result */}
        {p.result && (
          <div className="mb-6">
            <p className="font-orbitron text-[0.78rem] font-semibold text-cyan tracking-[0.2em] mb-2.5 pb-1.5 border-b border-[rgba(0,245,255,0.1)]">
              Résultat
            </p>
            <p className="text-[0.9rem] leading-[1.75] text-[rgba(200,232,240,0.65)]">{p.result}</p>
          </div>
        )}

        {/* Metrics */}
        {p.metrics && (
          <div className="flex gap-6 flex-wrap my-4">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-center px-5 py-4 bg-[rgba(0,245,255,0.03)] border border-[rgba(0,245,255,0.08)]">
                <span className="font-orbitron text-[1.3rem] font-bold text-cyan text-glow-cyan block">{m.val}</span>
                <span className="font-mono text-[0.6rem] text-[rgba(200,232,240,0.35)] tracking-[0.1em] mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tools */}
        {p.tools && (
          <div className="mb-6">
            <p className="font-orbitron text-[0.78rem] font-semibold text-cyan tracking-[0.2em] mb-2.5 pb-1.5 border-b border-[rgba(0,245,255,0.1)]">
              Outils
            </p>
            <div className="flex gap-2.5 flex-wrap mt-2">
              {p.tools.map((t) => (
                <span key={t} className="font-mono text-[0.68rem] px-3.5 py-[5px] bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.1)] text-[rgba(200,232,240,0.5)] tracking-[0.08em]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
