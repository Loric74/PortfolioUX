import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    [
      'font-mono text-[0.75rem] tracking-[0.18em] uppercase relative transition-colors duration-300',
      'after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:transition-all after:duration-300',
      isActive
        ? 'text-cyan after:w-full after:bg-cyan after:shadow-cyan'
        : 'text-[rgba(230,230,230,0.55)] after:w-0 after:bg-cyan hover:text-cyan hover:after:w-full',
    ].join(' ')

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-[72px] px-16 flex items-center justify-between bg-gradient-to-b from-[rgba(2,8,18,0.98)] to-[rgba(2,8,18,0.4)] border-b border-[rgba(0,245,255,0.08)] backdrop-blur-[10px]">
      <NavLink to="/" className="font-orbitron text-base font-black tracking-[0.25em] text-cyan glow-cyan no-underline">
        BL<em className="text-magenta not-italic">//</em>UX
      </NavLink>

      <ul className="flex gap-9 list-none items-center">
        <li><NavLink to="/" end className={linkClass}>Accueil</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>À Propos</NavLink></li>
        <li><NavLink to="/projects" className={linkClass}>Projets</NavLink></li>
      </ul>

      <NavLink
        to="/projects"
        className="font-mono text-[0.72rem] tracking-[0.15em] px-[22px] py-[9px] border border-cyan text-cyan bg-transparent uppercase no-underline transition-all duration-300 clip-btn-sm hover:bg-cyan hover:text-bg hover:shadow-cyan"
      >
        Voir mes projets
      </NavLink>
    </nav>
  )
}
