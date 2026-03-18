import { useRef } from 'react'
import { useParticles } from '../../hooks/useParticles'

export default function BackgroundEffects({ showParticles = true }) {
  const canvasRef = useRef(null)
  useParticles(showParticles ? canvasRef : { current: null })

  return (
    <>
      <div className="grid-bg" />
      <div className="scanlines" />
      {showParticles && <canvas id="particles" ref={canvasRef} />}
    </>
  )
}
