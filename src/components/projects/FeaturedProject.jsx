import { Hospital } from 'lucide-react'
import { featuredProject } from '../../data/projects'

export default function FeaturedProject({ onOpenModal }) {
  const p = featuredProject

  return (
    <div className="relative z-10 px-16 py-12 max-[700px]:px-5">
      <div
        className="featured-card bg-gradient-to-br from-[rgba(0,245,255,0.03)] to-[rgba(255,0,170,0.02)] border border-[rgba(0,245,255,0.15)] grid grid-cols-[1.1fr_1fr] overflow-hidden clip-card-lg transition-all duration-400 cursor-pointer hover:border-[rgba(0,245,255,0.4)] hover:shadow-cyan max-[1000px]:grid-cols-1"
        onClick={() => onOpenModal(p.id)}
      >
        {/* Visual side */}
        <div className="relative bg-bg2 min-h-[420px] flex items-center justify-center overflow-hidden border-r border-[rgba(0,245,255,0.08)] max-[1000px]:min-h-[280px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.04)_1px,transparent_1px)] bg-[30px_30px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,245,255,0.07),transparent)]" />
          <span className="absolute top-5 left-5 font-mono text-[0.65rem] text-[rgba(0,245,255,0.35)] tracking-[0.2em]">
            {p.num}
          </span>
          <span className="absolute top-5 right-5 font-mono text-[0.65rem] px-3.5 py-[5px] bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.25)] text-cyan tracking-[0.15em] z-[2]">
            {p.badge}
          </span>
          <Hospital size={80} className="text-cyan opacity-60 relative z-[2]" strokeWidth={1} />
        </div>

        {/* Content side */}
        <div className="px-10 py-12 flex flex-col justify-center max-[1000px]:px-8 max-[1000px]:py-8">
          <p className="font-mono text-[0.62rem] tracking-[0.3em] text-magenta opacity-70 uppercase mb-3 flex items-center gap-2 before:content-['★'] before:text-[0.55rem]">
            Projet phare
          </p>

          <div className="flex gap-2 flex-wrap mb-4">
            {p.tags.map((tag) => (
              <span key={tag} className="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-1 border border-[rgba(255,0,170,0.25)] text-[rgba(255,0,170,0.65)] bg-[rgba(255,0,170,0.04)]">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-orbitron text-[1.4rem] font-bold text-white mb-3.5 leading-snug">{p.title}</h2>
          <p className="text-[0.92rem] leading-[1.75] text-[rgba(200,232,240,0.6)] mb-6">{p.desc}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-7 p-5 bg-[rgba(0,245,255,0.02)] border border-[rgba(0,245,255,0.07)]">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <span className="font-orbitron text-[1.2rem] font-bold text-cyan text-glow-cyan block">{m.val}</span>
                <span className="font-mono text-[0.6rem] text-[rgba(200,232,240,0.35)] tracking-[0.12em] uppercase mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex gap-3.5 items-center mb-7 flex-wrap">
            {p.tools.map((t) => (
              <span key={t} className="font-mono text-[0.68rem] px-3.5 py-[5px] bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.1)] text-[rgba(200,232,240,0.5)] tracking-[0.08em]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3.5">
            <button
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-cyan text-cyan bg-transparent shadow-cyan clip-btn transition-all duration-300 hover:bg-cyan hover:text-bg"
              onClick={(e) => { e.stopPropagation(); onOpenModal(p.id) }}
            >
              Voir le case study
            </button>
            <button
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-[rgba(200,232,240,0.15)] text-[rgba(200,232,240,0.5)] bg-transparent clip-btn-sm transition-all duration-300 hover:bg-[rgba(200,232,240,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              Figma →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
