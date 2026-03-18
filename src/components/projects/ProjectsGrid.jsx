import { useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid({ projects, onOpenModal }) {
  const [listView, setListView] = useState(false)

  return (
    <div className="relative z-10 px-16 pb-20 max-[700px]:px-5">
      <div className="flex items-center justify-between py-10 pb-7">
        <span className="font-orbitron text-[1rem] font-semibold text-[rgba(200,232,240,0.4)] tracking-[0.2em]">
          // AUTRES PROJETS
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setListView(false)}
            className={`w-[34px] h-[34px] border flex items-center justify-center transition-all duration-300 cursor-pointer bg-transparent
              ${!listView ? 'border-cyan text-cyan bg-[rgba(0,245,255,0.04)]' : 'border-[rgba(0,245,255,0.15)] text-[rgba(200,232,240,0.4)] hover:border-cyan hover:text-cyan'}`}
            title="Vue grille"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setListView(true)}
            className={`w-[34px] h-[34px] border flex items-center justify-center transition-all duration-300 cursor-pointer bg-transparent
              ${listView ? 'border-cyan text-cyan bg-[rgba(0,245,255,0.04)]' : 'border-[rgba(0,245,255,0.15)] text-[rgba(200,232,240,0.4)] hover:border-cyan hover:text-cyan'}`}
            title="Vue liste"
          >
            <List size={16} />
          </button>
        </div>
      </div>

      <div className={`grid gap-6 ${listView ? 'grid-cols-1' : 'grid-cols-3 max-[700px]:grid-cols-1'}`}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpenModal={onOpenModal} listView={listView} />
        ))}
      </div>
    </div>
  )
}
