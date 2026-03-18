import { filters } from '../../data/projects'

export default function FiltersBar({ activeFilter, onFilter, count }) {
  return (
    <div className="relative z-10 px-16 pt-10 flex gap-3 flex-wrap items-center max-[700px]:px-5">
      <span className="font-mono text-[0.65rem] tracking-[0.3em] text-[rgba(200,232,240,0.3)] uppercase mr-2">
        Filtrer :
      </span>

      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilter(f.id)}
          className={`font-mono text-[0.7rem] tracking-[0.15em] px-5 py-[9px] border uppercase transition-all duration-300 clip-btn-xs cursor-pointer
            ${activeFilter === f.id
              ? 'border-cyan text-cyan bg-[rgba(0,245,255,0.05)] shadow-cyan'
              : 'border-[rgba(0,245,255,0.15)] text-[rgba(200,232,240,0.45)] bg-transparent hover:border-cyan hover:text-cyan hover:bg-[rgba(0,245,255,0.05)] hover:shadow-cyan'
            }`}
        >
          {f.label}
        </button>
      ))}

      <span className="font-mono text-[0.62rem] px-2 py-[2px] bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.15)] text-cyan ml-auto">
        {count} projet{count > 1 ? 's' : ''}
      </span>
    </div>
  )
}
