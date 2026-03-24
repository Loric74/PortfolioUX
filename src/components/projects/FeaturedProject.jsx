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
        <div className="relative bg-black min-h-[420px] flex items-center justify-center overflow-hidden border-r border-[rgba(0,245,255,0.08)] max-[1000px]:min-h-[280px]">
          <div className="absolute inset-0 flex items-center justify-center gap-3 px-4 max-[500px]:gap-1.5 max-[500px]:px-2">
            <img src="/bambinets_screen1.png" alt="" className="h-full max-h-[360px] w-auto object-contain rounded shadow-lg max-[1000px]:max-h-[220px] max-[500px]:max-h-[160px]" />
            <img src="/bambinets_screen2.png" alt="" className="h-full max-h-[360px] w-auto object-contain rounded shadow-lg max-[1000px]:max-h-[220px] max-[500px]:max-h-[160px]" />
            <img src="/bambinets_screen3.png" alt="" className="h-full max-h-[360px] w-auto object-contain rounded shadow-lg max-[1000px]:max-h-[220px] max-[500px]:max-h-[160px]" />
          </div>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)] z-[1]" />
          <span className="absolute top-5 left-5 font-mono text-[0.65rem] max-[700px]:text-[0.58rem] text-[rgba(0,245,255,0.35)] tracking-[0.2em] z-[2]">
            {p.num}
          </span>
          <span className="absolute top-5 right-5 font-mono text-[0.65rem] max-[700px]:text-[0.58rem] px-3.5 py-[5px] bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.25)] text-cyan tracking-[0.15em] z-[2]">
            {p.badge}
          </span>
        </div>

        {/* Content side */}
        <div className="px-10 py-12 flex flex-col justify-center max-[1000px]:px-8 max-[1000px]:py-8">
          <p className="font-mono text-[0.62rem] tracking-[0.3em] text-magenta opacity-70 uppercase mb-3 flex items-center gap-2 before:content-['★'] before:text-[0.55rem]">
            Projet mis en avant
          </p>

          <div className="flex gap-2 flex-wrap mb-4">
            {p.tags.map((tag) => (
              <span key={tag} className="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-1 border border-[rgba(255,0,170,0.25)] text-[rgba(255,0,170,0.65)] bg-[rgba(255,0,170,0.04)]">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-orbitron text-[1.4rem] max-[700px]:text-[1.1rem] font-bold text-white mb-3.5 leading-snug">{p.title}</h2>
          <p className="text-[0.92rem] max-[700px]:text-[0.82rem] leading-[1.75] text-[rgba(230,230,230,0.6)] mb-6">{p.desc}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-7 p-5 bg-[rgba(0,245,255,0.02)] border border-[rgba(0,245,255,0.07)]">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <span className="font-orbitron text-[1.2rem] max-[700px]:text-[1rem] font-bold text-cyan text-glow-cyan block">{m.val}</span>
                <span className="font-mono text-[0.6rem] max-[700px]:text-[0.54rem] text-[rgba(230,230,230,0.35)] tracking-[0.12em] uppercase mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex gap-3.5 items-center mb-7 flex-wrap">
            {p.tools.map((t) => (
              <span key={t} className="font-mono text-[0.68rem] px-3.5 py-[5px] bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.1)] text-[rgba(230,230,230,0.5)] tracking-[0.08em]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3.5">
            <button
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-cyan text-cyan bg-transparent shadow-cyan clip-btn transition-all duration-300 hover:bg-cyan hover:text-bg"
              onClick={(e) => { e.stopPropagation(); onOpenModal(p.id) }}
            >
              Voir le cas d'étude
            </button>
            <a
              href="https://www.figma.com/proto/5zGOf49vAteTeuTEcGCEFN/Design---Les-Bambinets?page-id=7587%3A2&node-id=7590-889&p=f&viewport=577%2C-337%2C0.41&t=P0OEI5vZehuibS6d-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7590%3A889&hide-ui=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-[rgba(230,230,230,0.15)] text-[rgba(230,230,230,0.5)] bg-transparent clip-btn-sm transition-all duration-300 hover:bg-[rgba(230,230,230,0.1)] no-underline"
              onClick={(e) => e.stopPropagation()}
            >
              Prototype Figma
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
