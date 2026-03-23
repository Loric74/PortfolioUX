import { Search, Puzzle, Palette, Accessibility } from 'lucide-react'
import SectionEyebrow from '../shared/SectionEyebrow'
import { services } from '../../data/services'

const iconMap = { Search, Puzzle, Palette, Accessibility }

export default function ServicesGrid() {
  return (
    <section className="relative z-10 px-16 py-10 max-[900px]:px-6 max-[900px]:py-[60px]">
      <SectionEyebrow text="Ce que je fais" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Mes <span className="text-cyan text-glow-cyan">expertises</span>
      </h2>

      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
        {services.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <div
              key={s.num}
              className="service-card bg-gradient-to-br from-[rgba(0,245,255,0.02)] to-[rgba(255,0,170,0.02)] border border-[rgba(0,245,255,0.1)] p-6 px-5 relative overflow-hidden clip-card transition-all duration-400 cursor-default hover:border-[rgba(0,245,255,0.35)] hover:shadow-cyan hover:-translate-y-1 group"
            >
              {/* Bottom gradient bar on hover */}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-magenta scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              {Icon && (
                <span className="block mb-5 text-cyan">
                  <Icon size={34} strokeWidth={1.5} />
                </span>
              )}
              <p className="font-mono text-[0.6rem] text-[rgba(0,245,255,0.3)] tracking-[0.3em] mb-2.5">
                // {s.num}
              </p>
              <h3 className="font-orbitron text-[0.9rem] font-semibold text-white mb-3.5 leading-snug">
                {s.name}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[rgba(230,230,230,0.55)]">
                {s.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
