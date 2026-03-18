import { useCursor } from '../../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, trailRef } = useCursor()

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
