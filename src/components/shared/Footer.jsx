export default function Footer() {
  return (
    <footer className="relative z-10 px-16 py-8 border-t border-[rgba(0,245,255,0.07)] flex items-center justify-between flex-wrap gap-5">
      <span className="font-orbitron text-[0.85rem] font-black text-[rgba(0,245,255,0.4)] tracking-[0.2em]">
        BL//UX
      </span>

      <p className="font-mono text-[0.65rem] text-[rgba(200,232,240,0.2)] tracking-[0.15em] text-center">
        © 2025 Belmain Loric · UX Designer Junior · Tous droits réservés
      </p>

      <div className="flex gap-5">
        <a
          href="#"
          className="font-mono text-[0.7rem] text-[rgba(200,232,240,0.35)] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-cyan"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="font-mono text-[0.7rem] text-[rgba(200,232,240,0.35)] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-cyan"
        >
          Behance
        </a>
      </div>
    </footer>
  )
}
