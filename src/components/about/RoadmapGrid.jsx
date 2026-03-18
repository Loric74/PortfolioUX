import SectionEyebrow from '../shared/SectionEyebrow'
import { roadmap } from '../../data/skills'

export default function RoadmapGrid() {
  return (
    <section className="relative z-10 px-16 py-20 max-[760px]:px-5">
      <SectionEyebrow text="04 // Roadmap" />
      <h2
        className="font-orbitron font-bold text-white mb-2"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Ma <span className="text-cyan text-glow-cyan">stratégie</span> de recherche
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-2 max-[1000px]:grid-cols-1">
        {roadmap.map((item, i) => {
          const isEven = i % 2 === 1
          return (
            <div
              key={item.weekNum}
              className={`rm-card relative overflow-hidden clip-card p-8 transition-all duration-400 hover:-translate-y-[3px] group
                ${isEven
                  ? 'bg-gradient-to-br from-[rgba(0,245,255,0.025)] to-[rgba(255,0,170,0.015)] border border-[rgba(255,0,170,0.12)] hover:border-[rgba(255,0,170,0.4)] hover:shadow-mag'
                  : 'bg-gradient-to-br from-[rgba(0,245,255,0.025)] to-[rgba(255,0,170,0.015)] border border-[rgba(0,245,255,0.12)] hover:border-[rgba(0,245,255,0.4)] hover:shadow-cyan'
                }`}
            >
              {/* Bottom bar */}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-magenta scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              {/* Week header */}
              <div className={`flex items-center gap-3.5 font-mono text-[0.65rem] tracking-[0.3em] uppercase mb-3 ${isEven ? 'text-magenta' : 'text-cyan'}`}>
                <span
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-orbitron text-[1.1rem] font-black flex-shrink-0
                    ${isEven
                      ? 'border-[rgba(255,0,170,0.4)] text-magenta shadow-mag bg-[rgba(255,0,170,0.05)]'
                      : 'border-[rgba(0,245,255,0.4)] text-cyan shadow-cyan bg-[rgba(0,245,255,0.05)]'
                    }`}
                >
                  {item.weekNum}
                </span>
                {item.week}
              </div>

              <h3 className="font-orbitron text-[0.95rem] font-bold text-white mb-1.5 leading-snug">{item.title}</h3>
              <p className={`font-mono text-[0.72rem] tracking-[0.08em] mb-5 pb-4 border-b border-[rgba(0,245,255,0.07)] ${isEven ? 'text-[rgba(200,232,240,0.45)]' : 'text-[rgba(200,232,240,0.45)]'}`}>
                Objectif — {item.objective}
              </p>

              <span className={`font-mono text-[0.62rem] tracking-[0.2em] uppercase opacity-60 mb-2 mt-3.5 block ${isEven ? 'text-magenta' : 'text-cyan'}`}>
                // Actions
              </span>
              <div className="flex flex-col gap-1.5">
                {item.actions.map((a, j) => (
                  <span key={j} className={`text-[0.84rem] leading-[1.6] text-[rgba(200,232,240,0.65)] flex items-start gap-2 before:text-[0.7rem] before:mt-[3px] before:flex-shrink-0 ${isEven ? 'before:content-["▸"] before:text-magenta' : 'before:content-["▸"] before:text-cyan'}`}>
                    {a}
                  </span>
                ))}
              </div>

              {item.tools.length > 0 && (
                <>
                  <span className={`font-mono text-[0.62rem] tracking-[0.2em] uppercase opacity-60 mb-2 mt-3.5 block ${isEven ? 'text-magenta' : 'text-cyan'}`}>
                    // {item.tools.length > 0 ? (item.week.includes('5') || item.week.includes('6') || item.week.includes('7') || item.week.includes('8') ? 'Plateformes' : 'Outils') : ''}
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2.5">
                    {item.tools.map((t) => (
                      <span key={t} className="font-mono text-[0.62rem] px-3 py-[3px] border border-[rgba(0,245,255,0.15)] text-[rgba(200,232,240,0.5)] bg-[rgba(0,245,255,0.03)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className={`mt-4 px-3.5 py-3 text-[0.83rem] leading-[1.6] text-[rgba(200,232,240,0.6)] border-l-2 ${isEven ? 'border-magenta bg-[rgba(255,0,170,0.02)]' : 'border-cyan bg-[rgba(0,245,255,0.03)]'}`}>
                <strong className={isEven ? 'text-magenta font-semibold' : 'text-cyan font-semibold'}>➡ Résultat attendu :</strong>{' '}
                {item.result}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
