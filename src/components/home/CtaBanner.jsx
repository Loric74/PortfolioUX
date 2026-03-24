import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <div className="relative z-10 mx-16 mb-[100px] px-16 py-14 bg-gradient-to-br from-[rgba(0,245,255,0.04)] to-[rgba(255,0,170,0.03)] border border-[rgba(0,245,255,0.15)] clip-card-lg flex items-center justify-between gap-10 flex-wrap overflow-hidden max-[900px]:mx-6 max-[900px]:mb-[60px] max-[900px]:px-6 max-[900px]:py-9 max-[900px]:flex-col">
      <span className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-radial from-[rgba(0,245,255,0.08)] to-transparent pointer-events-none" />

      <div className="relative z-[1]">
        <h3 className="font-orbitron text-[1.4rem] font-bold text-white mb-2">
          Travaillons <span className="text-cyan text-glow-cyan">ensemble</span>
        </h3>
        <p className="text-[0.95rem] text-[rgba(230,230,230,0.5)]">
          Ouvert aux missions CDI et collaborations sur des projets ambitieux
        </p>
      </div>

      <div className="flex gap-4 flex-shrink-0 relative z-[1]">
        <Link
          to="/projects"
          className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-cyan text-cyan bg-transparent shadow-cyan clip-btn transition-all duration-300 hover:bg-cyan hover:text-bg"
        >
          Voir les projets
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&to=loricbelmain@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-magenta text-magenta bg-transparent shadow-mag clip-btn transition-all duration-300 hover:bg-magenta hover:text-bg"
        >
          Me contacter
        </a>
      </div>
    </div>
  )
}
