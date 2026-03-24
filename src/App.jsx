import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/shared/Cursor'
import BackgroundEffects from './components/shared/BackgroundEffects'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import SideNav from './components/shared/SideNav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <BackgroundEffects showParticles />
      <SideNav />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
