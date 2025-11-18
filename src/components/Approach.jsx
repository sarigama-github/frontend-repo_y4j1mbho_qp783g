export default function Approach() {
  const pillars = [
    {
      title: 'Project‑based Transformation',
      desc: 'We implement strategy through focused initiatives that deliver tangible outcomes and lasting capability.',
    },
    {
      title: 'Clean, Green, Smart, Sustainable',
      desc: 'Every project embraces environmental stewardship, digital enablement and circular value creation.',
    },
    {
      title: 'From Idea to Enterprise',
      desc: 'We shape concepts into scalable systems — turning vision into self‑sustaining, enduring businesses.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Approach</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">Meaningful change powered by disciplined execution and inventive thinking.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-gradient-to-b from-slate-800/60 to-slate-900/60 ring-1 ring-white/10">
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-300/90 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
