import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, tx = 0, ty = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const rafTrail = () => {
      tx += (mx - tx) * 0.14
      ty += (my - ty) * 0.14
      trail.style.left = tx + 'px'
      trail.style.top = ty + 'px'
      rafId = requestAnimationFrame(rafTrail)
    }

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.2)'
      cursor.style.borderColor = 'var(--magenta)'
    }
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)'
      cursor.style.borderColor = 'var(--cyan)'
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(rafTrail)

    const hoverTargets = 'a,button,.service-card,.process-step,.proj-card,.reco-card,.book-card,.soft-tag,.rm-card,.featured-card'
    const addHover = () => {
      document.querySelectorAll(hoverTargets).forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return { cursorRef, trailRef }
}
