export default function GuidingTeams() {
  const teams = [
    'Corporate Governance',
    'Risk Management',
    'Environmental Impact',
    'Agriculture',
    'Innovation',
    'Technology',
    'Research',
    'Socio‑Economic Development',
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Guiding Teams</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">We collaborate across disciplines to unlock resilience and growth.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((t) => (
            <div key={t} className="rounded-2xl p-5 bg-slate-800/60 ring-1 ring-white/10 hover:bg-slate-800/80 transition-colors">
              <p className="text-emerald-300 font-semibold">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
