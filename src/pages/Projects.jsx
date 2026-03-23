import { useState } from 'react'
import PageHeader from '../components/about/PageHeader'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import ContactSection from '../components/projects/ContactSection'
import ProjectModal from '../components/projects/ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [openModalId, setOpenModalId] = useState(null)

  return (
    <>
      <PageHeader
        label="Réalisations // Portfolio"
        title="Mes"
        titleHighlight="Projets"
      />

      <FeaturedProject onOpenModal={setOpenModalId} />

      <ProjectsGrid projects={projects} onOpenModal={setOpenModalId} />

      <ContactSection />

      {openModalId && (
        <ProjectModal projectId={openModalId} onClose={() => setOpenModalId(null)} />
      )}
    </>
  )
}
