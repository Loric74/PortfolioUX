import { useState, useEffect } from 'react'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setStatus('idle')
      setForm({ name: '', email: '', subject: '', message: '' })
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '6f8a3cfe-207d-405e-8891-a9155f4f4667',
          to: 'loricbelmain@gmail.com',
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(2,8,18,0.85)] backdrop-blur-[6px]" onClick={onClose} />

      {/* Panel */}
      <div
        className="relative w-full max-w-[520px] bg-[#030d1a] border border-[rgba(0,245,255,0.18)] clip-card-28 animate-fade-up"
        style={{ boxShadow: '0 0 60px rgba(0,245,255,0.08), 0 0 120px rgba(0,0,0,0.8)' }}
      >
        {/* Corner accent */}
        <span className="absolute top-0 right-0 w-[28px] h-[28px] border-t border-r border-cyan opacity-60 pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-[28px] h-[28px] border-b border-l border-cyan opacity-60 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-[rgba(0,245,255,0.08)]">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[rgba(0,245,255,0.45)] uppercase mb-1">
              INIT_CONTACT.EXE
            </p>
            <h2 className="font-orbitron text-lg font-black tracking-[0.15em] text-white">
              Me <span className="text-cyan text-glow-cyan">contacter</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-[rgba(0,245,255,0.2)] text-[rgba(0,245,255,0.45)] hover:border-cyan hover:text-cyan transition-all duration-200"
            style={{ clipPath: 'polygon(6px 0,100% 0,calc(100% - 6px) 100%,0 100%)' }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle size={48} className="text-cyan" style={{ filter: 'drop-shadow(0 0 12px rgba(0,245,255,0.6))' }} />
              <p className="font-orbitron text-base tracking-[0.1em] text-white">Message envoyé !</p>
              <p className="font-mono text-sm text-[rgba(0,245,255,0.55)]">Je te répondrai dès que possible.</p>
              <button onClick={onClose} className="mt-2 font-mono text-[0.7rem] tracking-[0.15em] px-6 py-2.5 border border-cyan text-cyan uppercase clip-btn-sm hover:bg-cyan hover:text-bg transition-all duration-300">
                Fermer
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <AlertCircle size={48} className="text-[#ff00aa]" style={{ filter: 'drop-shadow(0 0 12px rgba(255,0,170,0.6))' }} />
              <p className="font-orbitron text-base tracking-[0.1em] text-white">Erreur d'envoi</p>
              <p className="font-mono text-sm text-[rgba(255,0,170,0.7)]">Une erreur est survenue. Réessaie ou écris-moi directement.</p>
              <button onClick={() => setStatus('idle')} className="mt-2 font-mono text-[0.7rem] tracking-[0.15em] px-6 py-2.5 border border-[#ff00aa] text-[#ff00aa] uppercase clip-btn-sm hover:bg-[#ff00aa] hover:text-bg transition-all duration-300">
                Réessayer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Nom" name="name" type="text" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <Field label="Sujet" name="subject" type="text" value={form.subject} onChange={handleChange} required />
              <Field label="Message" name="message" type="textarea" value={form.message} onChange={handleChange} required rows={5} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 flex items-center justify-center gap-2 font-mono text-[0.72rem] tracking-[0.15em] px-6 py-3 border border-cyan text-cyan uppercase clip-btn-sm transition-all duration-300 hover:bg-cyan hover:text-bg hover:shadow-cyan disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="inline-block w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, name, type, value, onChange, required, rows }) {
  const base =
    'w-full bg-[rgba(0,245,255,0.03)] border border-[rgba(0,245,255,0.14)] text-[rgba(230,230,230,0.9)] font-mono text-sm px-3.5 py-2.5 outline-none transition-all duration-200 focus:border-[rgba(0,245,255,0.55)] focus:bg-[rgba(0,245,255,0.06)] placeholder:text-[rgba(0,245,255,0.2)]'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.58rem] tracking-[0.25em] text-[rgba(0,245,255,0.45)] uppercase">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={base}
        />
      )}
    </div>
  )
}
