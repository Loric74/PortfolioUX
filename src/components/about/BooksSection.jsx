import { CheckCircle, Circle } from 'lucide-react'
import SectionEyebrow from '../shared/SectionEyebrow'
import { books } from '../../data/books'

export default function BooksSection() {
  return (
    <section className="relative z-10 px-16 py-20 pb-[100px] max-[760px]:px-5">
      <SectionEyebrow text="05 // Bibliothèque" />
      <h2
        className="font-orbitron font-bold text-white mb-[52px]"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
      >
        Lectures <span className="text-cyan text-glow-cyan">inspirantes</span>
      </h2>

      <div className="flex gap-10 flex-wrap items-stretch justify-center">
        {books.map((book) => {
          const isLandscape = book.orientation.includes('landscape')
          const isMethodes = book.orientation.includes('methodes')
          const isRead = book.status === 'lu'

          return (
            <div
              key={book.id}
              className={`book-card flex flex-col bg-gradient-to-[160deg] from-[rgba(0,245,255,0.04)] to-[rgba(255,0,170,0.02)] border border-[rgba(0,245,255,0.1)] clip-card-sm transition-all duration-300 cursor-pointer overflow-hidden relative hover:border-[rgba(0,245,255,0.4)] hover:shadow-cyan hover:-translate-y-2
                ${isLandscape ? 'w-[420px]' : isMethodes ? 'w-[215px]' : 'w-[180px]'}`}
            >
              {/* Cover */}
              <div
                className={`book-cover w-full relative overflow-hidden block flex-1 ${isLandscape ? 'h-[260px] bg-[#0a0a0a]' : isMethodes ? 'bg-[#3d9fa0]' : 'h-[260px]'}`}
              >
                <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-b from-cyan to-magenta opacity-50 z-[2]" />
                <img
                  src={book.imgSrc}
                  alt={book.title}
                  className={`w-full h-full block ${isLandscape || isMethodes ? 'object-contain object-center' : 'object-cover object-top'}`}
                />
                {/* Status badge */}
                <span
                  className={`absolute top-2.5 left-2.5 z-[3] font-mono text-[0.6rem] tracking-[0.08em] px-2.5 py-1 backdrop-blur-[4px] flex items-center gap-1
                    ${isRead
                      ? 'bg-[rgba(2,8,18,0.75)] border border-[rgba(0,245,255,0.5)] text-cyan'
                      : 'bg-[rgba(2,8,18,0.75)] border border-[rgba(255,0,170,0.5)] text-magenta'
                    }`}
                >
                  {isRead
                    ? <><CheckCircle size={10} /> Lu</>
                    : <><Circle size={10} /> En cours</>
                  }
                </span>
              </div>

              {/* Meta */}
              <div className="px-4 pt-3.5 pb-4 border-t border-[rgba(0,245,255,0.07)]">
                <p className="font-orbitron text-[0.65rem] font-semibold text-white mb-1 leading-snug">{book.title}</p>
                <p className="font-mono text-[0.6rem] text-cyan opacity-60 mb-2">{book.author}</p>
                <span className="font-mono text-[0.6rem] tracking-[0.08em] px-2.5 py-[3px] bg-[rgba(0,245,255,0.05)] border border-[rgba(0,245,255,0.12)] text-[rgba(200,232,240,0.45)] inline-block">
                  {book.tag}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
