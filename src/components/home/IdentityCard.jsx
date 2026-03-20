export default function IdentityCard() {
  return (
    <div className="w-[300px] bg-gradient-to-br from-[rgba(0,245,255,0.04)] to-[rgba(255,0,170,0.03)] border border-[rgba(0,245,255,0.2)] p-9 px-7 relative clip-identity transition-all duration-400 hover:border-[rgba(0,245,255,0.5)] hover:shadow-cyan">
      {/* Corners */}
      {[
        'top-2 left-2 border-t-2 border-l-2',
        'top-2 right-2 border-t-2 border-r-2',
        'bottom-2 left-2 border-b-2 border-l-2',
        'bottom-2 right-2 border-b-2 border-r-2',
      ].map((cls, i) => (
        <span key={i} className={`absolute w-[18px] h-[18px] border-cyan opacity-50 ${cls}`} />
      ))}

      {/* Photo */}
      <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[rgba(0,245,255,0.15)] to-[rgba(255,0,170,0.1)] border-2 border-[rgba(0,245,255,0.3)] flex items-center justify-center text-[2.6rem] mx-auto mb-5 shadow-cyan relative">
        🎨
        <span className="absolute inset-[-6px] rounded-full border border-dashed border-[rgba(0,245,255,0.2)] animate-ring-rotate" />
      </div>

      <p className="font-mono text-[0.6rem] text-[rgba(0,245,255,0.4)] tracking-[0.3em] text-center mb-4">
        ID // 2025-BL-001
      </p>
      <p className="font-orbitron text-[0.95rem] font-bold text-white text-center mb-1">
        Belmain Loric
      </p>
      <p className="font-mono text-[0.68rem] text-cyan text-center tracking-[0.2em] mb-5">
        UX Designer Junior
      </p>
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent mb-[18px]" />

      <div className="flex flex-col gap-2.5">
        {[
          { label: 'Spécialité', value: 'UX / UI Design' },
          { label: 'Outils', value: 'Figma · Miro · Maze' },
          { label: 'Localisation', value: 'France 🇫🇷' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="font-mono text-[0.6rem] text-[rgba(230,230,230,0.35)] tracking-[0.1em] uppercase">{label}</span>
            <span className="font-mono text-[0.7rem] text-[rgba(230,230,230,0.8)]">{value}</span>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <span className="font-mono text-[0.6rem] text-[rgba(230,230,230,0.35)] tracking-[0.1em] uppercase">Statut</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-cyan animate-pulse-dot" />
            <span className="font-mono text-[0.7rem] text-[rgba(230,230,230,0.8)]">Actif</span>
          </div>
        </div>
      </div>
    </div>
  )
}
