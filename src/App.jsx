import Hero from './components/Hero'
import Acronym from './components/Acronym'
import GuidingTeams from './components/GuidingTeams'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Team from './components/Team'
import About from './components/About'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-emerald-400 text-xl">iVentice</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#acronym" className="hover:text-white">Acronym</a>
            <a href="#approach" className="hover:text-white">Approach</a>
            <a href="#team" className="hover:text-white">Our Team</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-colors">Get in touch</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Acronym />
        <section id="approach">
          <Approach />
        </section>
        <GuidingTeams />
        <Team />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} iVentice • Ideate to Scalability</p>
      </footer>

      {/* Persistent Chatbot */}
      <Chatbot />
    </div>
  )
}

export default App
