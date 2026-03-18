import { useState } from 'react'
import PageHeader from '../components/about/PageHeader'
import FiltersBar from '../components/projects/FiltersBar'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import ContactSection from '../components/projects/ContactSection'
import ProjectModal from '../components/projects/ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openModalId, setOpenModalId] = useState(null)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.filterTags.includes(activeFilter))

  return (
    <>
      <PageHeader
        label="Portfolio // BL-001"
        title="Mes"
        titleHighlight="Projets"
        meta={[
          '3 études de cas',
          'UX Research · UI Design · No-code',
          '2023 – 2025',
        ]}
      />

      <FiltersBar
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
        count={filtered.length + 1}
      />

      <FeaturedProject onOpenModal={setOpenModalId} />

      <ProjectsGrid projects={filtered} onOpenModal={setOpenModalId} />

      <ContactSection />

      {openModalId && (
        <ProjectModal projectId={openModalId} onClose={() => setOpenModalId(null)} />
      )}
    </>
  )
}
