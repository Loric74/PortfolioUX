import HeroSection from '../components/home/HeroSection'
import ScrollCue from '../components/home/ScrollCue'
import ServicesGrid from '../components/home/ServicesGrid'
import ProcessSteps from '../components/home/ProcessSteps'
import CtaBanner from '../components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollCue />
      <div className="mx-16 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.1)] to-transparent max-[900px]:mx-6" />
      <ServicesGrid />
      <div className="mx-16 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.1)] to-transparent max-[900px]:mx-6" />
      <ProcessSteps />
      <CtaBanner />
    </>
  )
}
