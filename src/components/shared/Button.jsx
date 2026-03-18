import { Link } from 'react-router-dom'

const variants = {
  cyan: 'text-cyan border-cyan shadow-cyan clip-btn hover:bg-cyan hover:text-bg',
  mag: 'text-magenta border-magenta shadow-mag clip-btn hover:bg-magenta hover:text-bg',
  ghost: 'text-[rgba(200,232,240,0.5)] border-[rgba(200,232,240,0.15)] clip-btn-sm hover:bg-[rgba(200,232,240,0.1)]',
}

export default function Button({ variant = 'cyan', href, to, onClick, children, className = '' }) {
  const base =
    'font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border bg-transparent relative overflow-hidden transition-all duration-300 inline-block cursor-pointer ' +
    (variants[variant] || variants.cyan) +
    ' ' +
    className

  if (to) return <Link to={to} className={base}>{children}</Link>
  if (href) return <a href={href} className={base}>{children}</a>
  return <button onClick={onClick} className={base}>{children}</button>
}
