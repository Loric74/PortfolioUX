export default function SectionEyebrow({ text }) {
  return (
    <div className="flex items-center gap-3.5 mb-3">
      <span className="w-9 h-px bg-gradient-to-r from-transparent to-cyan" />
      <span className="font-mono text-[0.68rem] tracking-[0.35em] text-cyan opacity-65 uppercase">
        {text}
      </span>
    </div>
  )
}
