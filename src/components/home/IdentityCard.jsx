export default function IdentityCard() {
  return (
    <div className="w-[560px] bg-gradient-to-br from-[rgba(0,245,255,0.04)] to-[rgba(255,0,170,0.03)] border border-[rgba(0,245,255,0.2)] relative clip-identity transition-all duration-400 hover:border-[rgba(0,245,255,0.5)] hover:shadow-cyan overflow-hidden flex">
      {/* Corners */}
      {[
        'top-2 left-2 border-t-2 border-l-2',
        'top-2 right-2 border-t-2 border-r-2',
        'bottom-2 left-2 border-b-2 border-l-2',
        'bottom-2 right-2 border-b-2 border-r-2',
      ].map((cls, i) => (
        <span key={i} className={`absolute w-[18px] h-[18px] border-cyan opacity-50 z-[1] ${cls}`} />
      ))}

      {/* Left — Illustration */}
      <div className="w-[240px] flex-shrink-0 flex items-end justify-center bg-gradient-to-b from-transparent to-[rgba(0,245,255,0.03)] border-r border-[rgba(0,245,255,0.08)] overflow-hidden">
        <img src="/hero_illustration.png" alt="UX illustration" className="w-full object-contain" />
      </div>

      {/* Right — Info */}
      <div className="flex-1 p-9 flex flex-col justify-center">
        <p className="font-mono text-[0.65rem] text-[rgba(0,245,255,0.4)] tracking-[0.3em] mb-4">
          ID // 2025-BL-001
        </p>
        <div className="h-px bg-gradient-to-r from-[rgba(0,245,255,0.2)] to-transparent mb-5" />

        <div className="flex flex-col gap-3.5">
          {[
            { label: 'Spécialité', value: 'UX / UI Design' },
            { label: 'Outils', value: 'Figma · Miro · Maze' },
            { label: 'Localisation', value: 'France 🇫🇷' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-mono text-[0.6rem] text-[rgba(230,230,230,0.35)] tracking-[0.1em] uppercase">{label}</span>
              <span className="font-mono text-[0.75rem] text-[rgba(230,230,230,0.8)]">{value}</span>
            </div>
          ))}
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.6rem] text-[rgba(230,230,230,0.35)] tracking-[0.1em] uppercase">Statut</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-cyan animate-pulse-dot" />
              <span className="font-mono text-[0.75rem] text-[rgba(230,230,230,0.8)]">Actif</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
