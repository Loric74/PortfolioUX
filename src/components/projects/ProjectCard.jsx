export default function ProjectCard({ project, onOpenModal, listView }) {
  const p = project

  return (
    <div
      className={`proj-card bg-gradient-to-br from-[rgba(0,245,255,0.025)] to-[rgba(255,0,170,0.015)] border border-[rgba(0,245,255,0.1)] overflow-hidden clip-card transition-all duration-400 cursor-pointer relative hover:border-[rgba(0,245,255,0.4)] hover:shadow-cyan hover:-translate-y-[5px] group
        ${listView ? 'grid grid-cols-[280px_1fr] !clip-none hover:translate-y-0' : ''}`}
      onClick={() => onOpenModal(p.id)}
    >
      {/* Bottom bar */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan to-magenta scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 z-[1]" />

      {/* Image area */}
      <div className={`proj-img w-full bg-bg2 flex items-center justify-center relative overflow-hidden border-b border-[rgba(0,245,255,0.07)]
        ${listView ? 'aspect-auto h-full border-b-0 border-r border-r-[rgba(0,245,255,0.07)]' : 'aspect-video'}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.04)_1px,transparent_1px)] bg-[24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,245,255,0.04)] via-transparent to-[rgba(255,0,170,0.04)]" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-[1]">
          <span className="font-orbitron text-[1.4rem] font-black text-white tracking-[0.15em] drop-shadow-lg">
            {p.title.split(' ')[0]}
          </span>
        </div>
        <span className="absolute top-3 left-3.5 font-mono text-[0.6rem] text-[rgba(0,245,255,0.35)] tracking-[0.2em] z-[2]">{p.num}</span>
        <span className="absolute top-3 right-3.5 font-mono text-[0.6rem] px-2.5 py-[3px] bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.18)] text-cyan tracking-[0.12em] z-[2]">{p.type}</span>
        <span className="absolute bottom-3 left-3.5 font-mono text-[0.6rem] text-[rgba(230,230,230,0.25)] z-[2]">{p.year}</span>
      </div>

      {/* Body */}
      <div className={`proj-body ${listView ? 'p-7' : 'p-[22px_20px_18px]'}`}>
        <div className="flex gap-1.5 flex-wrap mb-3">
          {p.tags.map((tag) => (
            <span key={tag} className="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-1 border border-[rgba(255,0,170,0.25)] text-[rgba(255,0,170,0.65)] bg-[rgba(255,0,170,0.04)]">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-orbitron text-[0.95rem] font-bold text-white mb-2.5 leading-snug">{p.title}</h3>
        <p className="text-[0.84rem] leading-[1.7] text-[rgba(230,230,230,0.55)] mb-4">{p.desc}</p>

        <div className="flex justify-between items-center pt-3.5 border-t border-[rgba(0,245,255,0.07)]">
          <div className="flex gap-2.5">
            {p.tools.map((t) => (
              <span key={t} className="font-mono text-[0.62rem] text-[rgba(230,230,230,0.35)] tracking-[0.08em] flex items-center gap-1 before:content-[\'\'] before:w-1 before:h-1 before:rounded-full before:bg-[rgba(0,245,255,0.4)]">
                {t}
              </span>
            ))}
          </div>
          <button
            className="font-mono text-[0.68rem] text-cyan tracking-[0.08em] flex items-center gap-1.5 transition-all duration-300 bg-transparent border-none cursor-pointer hover:text-glow-cyan after:content-['→'] after:transition-transform after:duration-300 hover:after:translate-x-1"
            onClick={(e) => { e.stopPropagation(); onOpenModal(p.id) }}
          >
            Voir
          </button>
        </div>
      </div>
    </div>
  )
}
