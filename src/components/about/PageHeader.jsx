export default function PageHeader({ label, title, titleHighlight, subtitle, meta }) {
  return (
    <div className="relative z-10 px-16 pt-[140px] pb-[60px] overflow-hidden after:content-[\'\'] after:absolute after:bottom-0 after:left-16 after:right-16 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgba(0,245,255,0.15)] after:to-transparent max-[760px]:px-5">
      <p className="font-mono text-[0.68rem] tracking-[0.4em] text-cyan opacity-50 uppercase mb-3 flex items-center gap-3">
        <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyan" />
        {label}
      </p>
      <h1
        className="font-orbitron font-black text-white leading-none tracking-[0.05em]"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-cyan text-glow-cyan">{titleHighlight}</span>
        )}
      </h1>
      {subtitle && (
        <p className="text-[1.05rem] text-[rgba(230,230,230,0.5)] mt-4 max-w-[500px] leading-[1.7]">
          {subtitle}
        </p>
      )}
      {meta && (
        <div className="flex items-center gap-8 mt-6 flex-wrap">
          {meta.map((item, i) => (
            <span key={i} className="font-mono text-[0.72rem] text-[rgba(230,230,230,0.4)] tracking-[0.15em] flex items-center gap-2">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
