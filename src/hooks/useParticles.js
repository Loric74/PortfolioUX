import { useEffect } from 'react'

export function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let W, H, pts = []
    let rafId

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    class P {
      constructor() { this.r() }
      r() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.l = Math.random()
        this.s = Math.random() * 1.5 + 0.5
      }
      u() {
        this.x += this.vx
        this.y += this.vy
        this.l += 0.003
        if (this.l > 1) this.r()
      }
      d() {
        const a = Math.sin(this.l * Math.PI) * 0.35
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${a})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 50; i++) pts.push(new P())

    function loop() {
      ctx.clearRect(0, 0, W, H)
      pts.forEach((p) => { p.u(); p.d() })
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}
