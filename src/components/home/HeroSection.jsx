import { Link } from 'react-router-dom'
import IdentityCard from './IdentityCard'

export default function HeroSection() {
  return (
    <section className="relative z-10 grid grid-cols-2 items-center px-16 pt-[120px] pb-20 gap-[60px] overflow-hidden max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:pt-20">
      {/* Left */}
      <div>
        <div
          className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] max-[700px]:text-[0.6rem] tracking-[0.3em] text-magenta uppercase px-[18px] py-2 border border-[rgba(255,0,170,0.3)] bg-[rgba(255,0,170,0.04)] mb-8"
          style={{ animation: 'fadeUp 0.8s ease both' }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-magenta shadow-mag animate-pulse-dot" />
          Disponible — Open to work
        </div>

        <h1
          className="font-orbitron font-black leading-none mb-4"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', animation: 'fadeUp 0.8s ease 0.15s both' }}
        >
          <span className="block text-[rgba(255,255,255,0.9)] tracking-[0.05em]">Belmain</span>
          <span className="block text-cyan text-glow-cyan relative after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan after:to-transparent after:shadow-cyan">
            Loric
          </span>
        </h1>

        <p
          className="font-mono text-[0.9rem] max-[700px]:text-[0.75rem] tracking-[0.3em] text-[rgba(230,230,230,0.45)] uppercase mb-8 mt-4"
          style={{ animation: 'fadeUp 0.8s ease 0.3s both' }}
        >
          // UX Designer Junior
        </p>

        <p
          className="text-[1.05rem] max-[700px]:text-[0.9rem] leading-[1.8] text-[rgba(230,230,230,0.65)] max-w-[480px] mb-11 border-l-2 border-[rgba(0,245,255,0.2)] pl-5"
          style={{ animation: 'fadeUp 0.8s ease 0.45s both' }}
        >
          Je conçois des expériences numériques qui mettent l'humain au centre. Recherche, prototypage, tests — chaque décision de design est guidée par les données et l'empathie.
        </p>

        <div className="flex gap-[18px] flex-wrap" style={{ animation: 'fadeUp 0.8s ease 0.6s both' }}>
          <Link
            to="/projects"
            className="font-mono text-[0.78rem] max-[700px]:text-[0.68rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-cyan text-cyan bg-transparent shadow-cyan clip-btn transition-all duration-300 hover:bg-cyan hover:text-bg"
          >
            Voir mes projets
          </Link>
          <Link
            to="/about"
            className="font-mono text-[0.78rem] max-[700px]:text-[0.68rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-magenta text-magenta bg-transparent shadow-mag clip-btn transition-all duration-300 hover:bg-magenta hover:text-bg"
          >
            À propos
          </Link>
        </div>
      </div>

      {/* Right — IdentityCard */}
      <div
        className="flex items-center justify-center pt-[72px] max-[900px]:hidden"
        style={{ animation: 'fadeUp 1s ease 0.5s both' }}
      >
        <IdentityCard />
      </div>
    </section>
  )
}
