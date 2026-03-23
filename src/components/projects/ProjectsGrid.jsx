import ProjectCard from './ProjectCard'

export default function ProjectsGrid({ projects, onOpenModal }) {
  return (
    <div className="relative z-10 px-16 pb-20 max-[700px]:px-5">
      <div className="py-10 pb-7">
        <span className="font-orbitron text-[1rem] font-semibold text-[rgba(230,230,230,0.4)] tracking-[0.2em]">
          // AUTRES PROJETS
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpenModal={onOpenModal} />
        ))}
      </div>
    </div>
  )
}
