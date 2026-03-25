import { Mail, Download } from 'lucide-react'
import SectionEyebrow from '../shared/SectionEyebrow'

export default function PresentationSection() {
  return (
    <section className="relative z-10 px-16 py-20 max-[760px]:px-5">
      <SectionEyebrow text="02 // Présentation" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Qui <span className="text-cyan text-glow-cyan">suis-je</span> ?
      </h2>

      <div className="grid grid-cols-[300px_1fr] gap-16 items-start max-[1000px]:grid-cols-1">
        {/* Visual column */}
        <div className="sticky top-[100px] max-[1000px]:static max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center">
          {/* Orb rings */}
          <div className="relative w-[280px] h-[280px] flex items-center justify-center mb-8">
            {/* Ring 1 — cyan, 100% */}
            <span
              className="absolute rounded-full border"
              style={{
                width: '100%', height: '100%',
                top: '0', left: '0',
                borderColor: 'rgba(0,245,255,0.15)',
                animation: 'ringRot 28s linear infinite',
              }}
            >
              <span className="absolute w-2 h-2 rounded-full top-[-4px] left-1/2 -translate-x-1/2"
                style={{ background: 'var(--cyan)', boxShadow: 'var(--glow)' }} />
            </span>
            {/* Ring 2 — magenta, 72% */}
            <span
              className="absolute rounded-full border"
              style={{
                width: '72%', height: '72%',
                top: '14%', left: '14%',
                borderColor: 'rgba(255,0,170,0.15)',
                animation: 'ringRot 20s linear infinite reverse',
              }}
            >
              <span className="absolute w-2 h-2 rounded-full bottom-[-4px] left-1/2 -translate-x-1/2"
                style={{ background: 'var(--magenta)', boxShadow: 'var(--glow-mag)' }} />
            </span>
            {/* Ring 3 — yellow, 46% */}
            <span
              className="absolute rounded-full border"
              style={{
                width: '46%', height: '46%',
                top: '27%', left: '27%',
                borderColor: 'rgba(240,255,0,0.12)',
                animation: 'ringRot 14s linear infinite',
              }}
            >
              <span className="absolute w-2 h-2 rounded-full top-[-4px] right-[-4px]"
                style={{ background: 'var(--yellow)' }} />
            </span>
            <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[rgba(0,245,255,0.1)] to-[rgba(255,0,170,0.08)] border-2 border-[rgba(0,245,255,0.25)] flex items-center justify-center text-[3.5rem] z-[2] shadow-cyan">
              ✦
            </div>
          </div>

          {/* Info rows */}
          <div className="flex flex-col gap-2 w-[280px] max-[1000px]:w-full max-w-[280px]">
            {[
              { k: 'Formation', v: 'Openclassrooms UX' },
              { k: 'Localisation', v: 'France 🇫🇷' },
              { k: 'Statut', v: 'Open to work' },
              { k: 'Langues', v: 'FR · EN' },
            ].map(({ k, v }) => (
              <div key={k} className="flex justify-between py-2.5 border-b border-[rgba(0,245,255,0.06)]">
                <span className="font-mono text-[0.65rem] text-[rgba(230,230,230,0.35)] tracking-[0.1em] uppercase">{k}</span>
                <span className="font-mono text-[0.72rem] text-[rgba(230,230,230,0.75)]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div>
          <h3 className="font-orbitron text-[1.5rem] font-black text-white mb-1.5">Belmain Loric</h3>
          <p className="font-mono text-[0.78rem] text-cyan tracking-[0.25em] uppercase mb-7 opacity-70">
            // UX Designer Junior
          </p>

          {[
            {
              label: '// Parcours',
              text: "Passionné par l'expérience utilisateur, je me suis formé en UX Design après avoir développé une sensibilité forte pour les interfaces digitales et la psychologie des usages. Mon parcours m'a amené à travailler sur des projets variés — applications de santé, outils associatifs, plateformes d'apprentissage.",
            },
            {
              label: '// Méthode',
              text: (
                <>
                  Au fil de mes projets, j'ai mené des phases de recherche utilisateur, des entretiens et des tests pour comprendre besoins et attentes, puis conçu des interfaces fonctionnelles du wireframe au prototype interactif. Je maîtrise{' '}
                  <strong className="text-cyan">Figma, Glide et Keynote</strong>, ainsi que les méthodologies de Design Thinking et d'UX Design.
                </>
              ),
            },
            {
              label: '// Vision',
              text: (
                <>
                  Particulièrement attiré par la conception visuelle et l'architecture d'interfaces, j'aime façonner des environnements digitaux à la fois esthétiques et efficaces. Je souhaite rejoindre des équipes où je peux contribuer activement à créer des{' '}
                  <strong className="text-cyan">produits utiles, clairs et porteurs de sens</strong> pour tout le monde.
                </>
              ),
            },
            {
              label: '// Contact',
              text: 'Pour échanger ou collaborer, vous pouvez me contacter par mail.',
            },
          ].map(({ label, text }) => (
            <div key={label}>
              <span className="font-mono text-[0.68rem] tracking-[0.3em] text-cyan uppercase opacity-60 mt-7 mb-2.5 block">
                {label}
              </span>
              <p className="text-[1rem] leading-[1.85] text-[rgba(230,230,230,0.7)] mb-2.5">{text}</p>
            </div>
          ))}

          <div className="flex gap-4 flex-wrap mt-6">
            <a
              href="https://mail.google.com/mail/?view=cm&to=loricbelmain@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-cyan text-cyan bg-transparent shadow-cyan clip-btn transition-all duration-300 hover:bg-cyan hover:text-bg flex items-center gap-2"
            >
              <Mail size={14} />
              loricbelmain@gmail.com
            </a>
            <a
              href="/CV_Loric_Belmain.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.78rem] tracking-[0.18em] px-8 py-3.5 uppercase border border-magenta text-magenta bg-transparent shadow-mag clip-btn transition-all duration-300 hover:bg-magenta hover:text-bg flex items-center gap-2"
            >
              <Download size={14} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
