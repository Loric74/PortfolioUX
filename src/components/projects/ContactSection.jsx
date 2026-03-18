import { Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="relative z-10 px-16 py-[60px] pb-[100px] max-[700px]:px-5">
      <div className="relative px-16 py-14 bg-gradient-to-br from-[rgba(0,245,255,0.03)] to-[rgba(255,0,170,0.02)] border border-[rgba(0,245,255,0.12)] clip-card-lg flex items-center justify-between gap-10 flex-wrap overflow-hidden max-[700px]:px-5 max-[700px]:py-8">
        <span className="absolute top-[-60px] right-[60px] w-[250px] h-[250px] rounded-full bg-radial from-[rgba(0,245,255,0.06)] to-transparent pointer-events-none" />

        <div className="relative z-[1]">
          <h3 className="font-orbitron text-[1.6rem] font-bold text-white mb-2.5">
            Vous avez un <span className="text-cyan text-glow-cyan">projet</span> ?
          </h3>
          <p className="text-[1rem] text-[rgba(200,232,240,0.5)] max-w-[420px] leading-[1.7]">
            Je suis disponible pour des missions freelance, des postes CDI et toutes les collaborations qui ont de l'ambition. Parlons-en !
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-shrink-0 relative z-[1] min-w-[220px]">
          <a
            href="mailto:contact@belmainloric.fr"
            className="font-mono text-[0.72rem] tracking-[0.12em] px-5 py-3.5 border border-[rgba(0,245,255,0.2)] text-[rgba(200,232,240,0.6)] bg-[rgba(0,245,255,0.02)] no-underline uppercase flex items-center gap-2.5 transition-all duration-300 hover:border-cyan hover:text-cyan hover:bg-[rgba(0,245,255,0.05)] hover:shadow-cyan"
          >
            <Mail size={16} />
            contact@belmainloric.fr
          </a>
        </div>
      </div>
    </div>
  )
}
