import SectionEyebrow from '../shared/SectionEyebrow'
import { hardSkills, softSkills, languages } from '../../data/skills'

function SkillItem({ children }) {
  return (
    <span className="font-mono text-[0.8rem] max-[700px]:text-[0.72rem] text-[rgba(230,230,230,0.75)] py-2.5 border-b border-[rgba(0,245,255,0.05)] flex items-center gap-2.5 before:content-[\'\'] before:w-[5px] before:h-[5px] before:rounded-full before:bg-cyan before:shadow-cyan before:flex-shrink-0">
      {children}
    </span>
  )
}

export default function SkillsSection() {
  return (
    <section className="relative z-10 px-16 py-20 max-[760px]:px-5">
      <SectionEyebrow text="03 // Compétences" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Hard skills <span className="text-cyan text-glow-cyan">&amp;</span> Soft skills
      </h2>

      <div className="grid grid-cols-2 gap-12 max-[1000px]:grid-cols-1">
        {/* Hard skills */}
        <div>
          <p className="font-orbitron text-[0.8rem] max-[700px]:text-[0.72rem] tracking-[0.2em] text-cyan uppercase pb-3 mb-5 border-b border-[rgba(0,245,255,0.1)]">
            // Outils & Prototypage
          </p>
          <div className="flex flex-col">
            {hardSkills.tools.map((s) => <SkillItem key={s}>{s}</SkillItem>)}
          </div>

          <p className="font-orbitron text-[0.8rem] tracking-[0.2em] text-cyan uppercase pb-3 mb-5 border-b border-[rgba(0,245,255,0.1)] mt-8">
            // Design visuel
          </p>
          <div className="flex flex-col">
            {hardSkills.visual.map((s) => <SkillItem key={s}>{s}</SkillItem>)}
          </div>

          <p className="font-orbitron text-[0.8rem] tracking-[0.2em] text-cyan uppercase pb-3 mb-5 border-b border-[rgba(0,245,255,0.1)] mt-8">
            // Méthodes UX
          </p>
          <div className="flex flex-col">
            {hardSkills.methods.map((s) => <SkillItem key={s}>{s}</SkillItem>)}
          </div>
        </div>

        {/* Soft skills + languages */}
        <div>
          <p className="font-orbitron text-[0.8rem] tracking-[0.2em] text-magenta uppercase pb-3 mb-5 border-b border-[rgba(255,0,170,0.15)]">
            // Soft skills
          </p>
          <div className="flex flex-wrap gap-2.5 mb-9">
            {softSkills.map((s) => (
              <span
                key={s}
                className="soft-tag font-mono text-[0.72rem] max-[700px]:text-[0.65rem] tracking-[0.08em] px-[18px] py-[9px] border border-[rgba(255,0,170,0.7)] text-magenta bg-[rgba(255,0,170,0.1)] shadow-[0_0_10px_rgba(255,0,170,0.15),inset_0_0_8px_rgba(255,0,170,0.05)] clip-btn-sm transition-all duration-300 cursor-default hover:border-magenta hover:text-white hover:bg-[rgba(255,0,170,0.22)]"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="font-orbitron text-[0.8rem] tracking-[0.2em] text-cyan uppercase pb-3 mb-5 border-b border-[rgba(0,245,255,0.1)] mt-8">
            // Langues
          </p>
          <div className="flex gap-3 flex-wrap">
            {languages.map((l) => (
              <span
                key={l.label}
                className="font-mono text-[0.72rem] max-[700px]:text-[0.65rem] tracking-[0.08em] px-[18px] py-[9px] border border-[rgba(0,245,255,0.25)] text-[rgba(230,230,230,0.65)] bg-[rgba(0,245,255,0.03)] clip-btn-sm"
              >
                {l.flag} {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
