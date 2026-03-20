import { Star } from 'lucide-react'
import SectionEyebrow from '../shared/SectionEyebrow'
import { testimonials } from '../../data/skills'

export default function RecommendationCard() {
  return (
    <section className="relative z-10 px-16 py-20 max-[760px]:px-5">
      <SectionEyebrow text="01 // Recommandations" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Ce qu'ils <span className="text-cyan text-glow-cyan">disent</span>
      </h2>

      {testimonials.map((t, i) => (
        <div
          key={i}
          className="reco-card w-full bg-gradient-to-br from-[rgba(0,245,255,0.03)] to-[rgba(255,0,170,0.02)] border border-[rgba(0,245,255,0.12)] px-12 py-10 relative clip-card-28 transition-all duration-400 hover:border-[rgba(0,245,255,0.45)] hover:shadow-cyan max-[1000px]:px-6 max-[760px]:px-5 max-[760px]:py-6"
        >
          {/* Big quote */}
          <span className="absolute top-5 right-9 text-[8rem] text-cyan opacity-[0.07] font-serif leading-none pointer-events-none select-none">
            "
          </span>

          {/* Stars */}
          <div className="flex gap-1.5 mb-5">
            {Array.from({ length: t.stars }).map((_, j) => (
              <Star key={j} size={14} className="text-yellow fill-yellow" />
            ))}
          </div>

          <p className="text-[1rem] leading-[1.85] text-[rgba(230,230,230,0.78)] mb-8 italic whitespace-pre-line">
            {t.text}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-cyan to-magenta flex items-center justify-center font-orbitron text-[0.85rem] font-bold text-bg flex-shrink-0 shadow-cyan">
              {t.author.initials}
            </div>
            <div>
              <span className="font-mono text-[0.88rem] text-cyan block">{t.author.name}</span>
              <span className="text-[0.78rem] text-[rgba(230,230,230,0.4)] tracking-[0.08em]">{t.author.role}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
