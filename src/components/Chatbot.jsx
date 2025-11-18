import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Leaf, X, Send } from 'lucide-react'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { id: 'sys-1', role: 'assistant', content: 'Hi! I\'m the iVentice Assistant. Ask me about our mission, services, team, or how we drive sustainability.' }
  ])
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const ask = async () => {
    if (!input.trim() || loading) return
    const q = input.trim()
    setMessages((m) => [...m, { id: Date.now() + '-u', role: 'user', content: q }])
    setInput('')
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      })
      const data = await res.json()
      const answer = data?.answer || 'Sorry, I could not find an answer right now.'
      setMessages((m) => [...m, { id: Date.now() + '-a', role: 'assistant', content: answer }])
    } catch (e) {
      setMessages((m) => [...m, { id: Date.now() + '-e', role: 'assistant', content: 'I\'m having trouble reaching the server. Please try again later.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      ask()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-xl focus:outline-none"
      >
        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
        <MessageCircle className="h-7 w-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="absolute bottom-20 right-0 w-[92vw] max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                  <Leaf className="h-4 w-4 text-emerald-300" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">iVentice Assistant</p>
                  <p className="text-[11px] text-slate-400">Ask about mission, services, team, impact</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto px-3 py-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div className={`inline-block rounded-2xl px-4 py-2 text-sm ${m.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-white/5 text-slate-100 ring-1 ring-white/10'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-white/5 text-slate-100 ring-1 ring-white/10">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.2s]"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.2s]"></span>
                    </div>
                    Typing…
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your question…"
                  rows={1}
                  className="flex-1 resize-none rounded-xl bg-slate-800/80 px-3 py-2 text-sm text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40"
                />
                <button
                  onClick={ask}
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-400 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
