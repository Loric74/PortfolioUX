import { NavLink, useNavigate } from 'react-router-dom'
import { Home, User, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { to: '/', icon: Home, label: 'Accueil' },
  { to: '/about', icon: User, label: 'À Propos' },
  { to: '/projects', icon: FolderOpen, label: 'Projets' },
  { href: 'https://mail.google.com/mail/?view=cm&to=loricbelmain@gmail.com', icon: Mail, label: 'Contact' },
]

export default function SideNav() {
  return (
    <div className="fixed right-3 max-[600px]:right-2 top-1/2 -translate-y-1/2 z-[190] flex flex-col gap-3 max-[600px]:gap-2">
      {navItems.map(({ to, href, icon: Icon, label }) => {
        const inner = (isActive = false) => (
          <div className="group relative flex items-center justify-end">
            {/* Label */}
            <span className="absolute right-[48px] max-[600px]:right-[38px] font-mono text-[0.6rem] max-[600px]:text-[0.5rem] tracking-[0.2em] uppercase text-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none pr-2 text-glow-cyan">
              {label}
            </span>

            {/* Hex button */}
            <div className={`relative w-[44px] h-[44px] max-[600px]:w-[34px] max-[600px]:h-[34px] flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
              <span className={`absolute inset-0 clip-hex transition-all duration-300 ${isActive ? 'bg-[rgba(0,245,255,0.15)]' : 'bg-[rgba(0,245,255,0.04)]'} group-hover:bg-[rgba(0,245,255,0.15)]`} />
              <span className={`absolute inset-0 clip-hex border transition-all duration-300 ${isActive ? 'border-cyan shadow-[0_0_12px_rgba(0,245,255,0.4)]' : 'border-[rgba(0,245,255,0.2)]'} group-hover:border-cyan group-hover:shadow-[0_0_12px_rgba(0,245,255,0.4)]`} />
              <Icon
                size={16}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={`relative z-[1] transition-colors duration-300 ${isActive ? 'text-cyan' : 'text-[rgba(0,245,255,0.45)]'} group-hover:text-cyan max-[600px]:w-[12px] max-[600px]:h-[12px]`}
              />
            </div>
          </div>
        )

        if (href) {
          return (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {inner(false)}
            </a>
          )
        }

        return (
          <NavLink key={label} to={to} end={to === '/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {({ isActive }) => inner(isActive)}
          </NavLink>
        )
      })}
    </div>
  )
}
