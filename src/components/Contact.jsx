import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) setStatus('Thanks! We will get back to you shortly.')
      else setStatus('Something went wrong. Please try again later.')
    } catch (err) {
      setStatus('Unable to reach server. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s shape what’s next</h2>
          <p className="mt-3 text-slate-300">Share your challenge — we’ll respond with practical ways to move forward.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 bg-slate-900/60 p-6 rounded-2xl ring-1 ring-white/10">
          <input name="name" required placeholder="Name" className="px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
          <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
          <textarea name="message" required placeholder="Tell us about your project" rows="4" className="px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors">Send</button>
            <span className="text-sm text-slate-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
