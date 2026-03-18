import SectionEyebrow from '../shared/SectionEyebrow'
import { processSteps } from '../../data/services'

export default function ProcessSteps() {
  return (
    <section className="relative z-10 px-16 py-20 pb-[100px] bg-gradient-to-b from-transparent via-[rgba(0,245,255,0.01)] to-transparent max-[900px]:px-6 max-[900px]:py-[60px]">
      <SectionEyebrow text="Ma méthode" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Mon <span className="text-cyan text-glow-cyan">process</span>
      </h2>

      <div className="flex gap-0 mt-[50px] relative items-start max-[900px]:flex-col max-[900px]:gap-8">
        {processSteps.map((step, i) => (
          <div
            key={step.ref}
            className="process-step flex-1 text-center relative z-[1] px-3 group"
          >
            {/* Connector line */}
            {i < processSteps.length - 1 && (
              <span
                className="absolute top-[30px] left-[calc(50%+30px)] right-[calc(-50%+30px)] h-px bg-gradient-to-r from-[rgba(0,245,255,0.4)] to-[rgba(255,0,170,0.2)] z-0 max-[900px]:hidden"
                aria-hidden
              />
            )}

            {/* Hex node */}
            <div className="w-[60px] h-[60px] relative mx-auto mb-5 flex items-center justify-center">
              <span className="absolute inset-0 clip-hex bg-bg z-0" />
              <span className="absolute inset-0 clip-hex bg-[rgba(0,245,255,0.06)] border border-[rgba(0,245,255,0.25)] transition-all duration-300 z-[1] group-hover:bg-[rgba(0,245,255,0.12)] group-hover:border-cyan group-hover:shadow-cyan" />
              {/* Scan line */}
              <span className="step-scan-inner">
                <span className="step-scan-line" />
              </span>
              <span className="relative z-[2] font-orbitron text-[0.85rem] font-black text-cyan text-glow-cyan tracking-[0.05em]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Corners */}
              <span className="absolute top-[-2px] left-[calc(50%-30px)] w-2 h-2 border-t border-l border-cyan opacity-40" />
              <span className="absolute top-[-2px] right-[calc(50%-30px)] w-2 h-2 border-t border-r border-cyan opacity-40" />
            </div>

            <span
              className="block w-1.5 h-1.5 rounded-full bg-cyan shadow-cyan mx-auto mb-2 animate-pulse-dot"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <p className="font-mono text-[0.6rem] text-[rgba(0,245,255,0.35)] tracking-[0.2em] mb-2">{step.ref}</p>
            <p className="font-orbitron text-[0.78rem] font-semibold text-white mb-2">{step.name}</p>
            <p className="text-[0.82rem] leading-[1.6] text-[rgba(200,232,240,0.45)]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
