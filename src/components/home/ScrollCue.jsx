export default function ScrollCue() {
  return (
    <div
      className="fixed bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 max-[900px]:hidden"
      style={{ animation: 'fadeUp 1s ease 1.2s both' }}
    >
      <div
        className="w-px h-[50px] bg-gradient-to-b from-cyan to-transparent"
        style={{ animation: 'arrowDrop 1.8s ease infinite' }}
      />
      <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[rgba(230,230,230,0.3)]">Scroll</span>
    </div>
  )
}
