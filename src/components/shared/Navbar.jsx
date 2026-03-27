import { NavLink } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-[72px] px-16 flex items-center justify-between bg-gradient-to-b from-[rgba(2,8,18,0.98)] to-[rgba(2,8,18,0.4)] border-b border-[rgba(0,245,255,0.08)] backdrop-blur-[10px]">
      <div className="flex items-center gap-4">
        <NavLink to="/" className="font-orbitron text-base font-black tracking-[0.25em] text-cyan text-glow-cyan no-underline">
          BL<em className="text-magenta not-italic">//</em>UX
        </NavLink>
        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[rgba(0,245,255,0.45)] transition-colors duration-300 hover:text-cyan flex items-center">
          <Home size={18} strokeWidth={2.5} />
        </NavLink>
      </div>

      <a
        href="mailto:loricbelmain@gmail.com"
        className="font-mono text-[0.72rem] tracking-[0.15em] px-[22px] py-[9px] border border-cyan text-cyan bg-transparent uppercase no-underline transition-all duration-300 clip-btn-sm hover:bg-cyan hover:text-bg hover:shadow-cyan"
      >
        Contact
      </a>
    </nav>
  )
}
