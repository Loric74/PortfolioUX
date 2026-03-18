import PageHeader from '../components/about/PageHeader'
import RecommendationCard from '../components/about/RecommendationCard'
import PresentationSection from '../components/about/PresentationSection'
import SkillsSection from '../components/about/SkillsSection'
import RoadmapGrid from '../components/about/RoadmapGrid'
import BooksSection from '../components/about/BooksSection'

const divider = (
  <div className="mx-16 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.1)] to-transparent max-[760px]:mx-5" />
)

export default function About() {
  return (
    <>
      <PageHeader
        label="Fichier // BL-001"
        title="À"
        titleHighlight="Propos"
        subtitle="Découvrez mon parcours, mes compétences et ce qui m'anime dans le design d'expérience."
      />
      <RecommendationCard />
      {divider}
      <PresentationSection />
      {divider}
      <SkillsSection />
      {divider}
      <RoadmapGrid />
      {divider}
      <BooksSection />
    </>
  )
}
