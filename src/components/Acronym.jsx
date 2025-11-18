export default function Acronym() {
  const parts = [
    { k: 'I', t: 'Innovation', d: 'Turning bold ideas into practical solutions that unlock new value.' },
    { k: 'V', t: 'Value Addition', d: 'Embedding efficiency and excellence into every process and outcome.' },
    { k: 'E', t: 'Entrepreneurship', d: 'Driving ownership, resilience and growth in every engagement.' },
    { k: 'N', t: 'Networks', d: 'Building strong partnerships across sectors and ecosystems.' },
    { k: 'T', t: 'Transdisciplinary Approach', d: 'Uniting governance, risk, tech, research and social impact.' },
    { k: 'I', t: 'Impactability', d: 'Designing for outcomes that are measurable and meaningful.' },
    { k: 'C', t: 'Creativity', d: 'Infusing projects with fresh thinking and unique perspectives.' },
    { k: 'E', t: 'Extensibility', d: 'Scaling ideas into enduring, self-sustaining enterprises.' },
  ]

  return (
    <section id="acronym" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What iVENTICE stands for</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">An integrated philosophy that powers strategy, execution and long-term value.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parts.map((p, idx) => (
            <div key={idx} className="group rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6 hover:translate-y-[-2px] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-300 font-extrabold flex items-center justify-center ring-1 ring-emerald-400/20">
                  {p.k}
                </div>
                <h3 className="text-white font-semibold">{p.t}</h3>
              </div>
              <p className="text-slate-300/90 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
