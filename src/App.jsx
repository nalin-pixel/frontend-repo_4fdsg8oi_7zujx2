import React from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Gallery from './components/Gallery'
import Details from './components/Details'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="fixed z-50 top-0 inset-x-0 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Porto Cheli Villa</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#highlights" className="hover:text-slate-600">Highlights</a>
            <a href="#gallery" className="hover:text-slate-600">Gallery</a>
            <a href="#contact" className="hover:text-slate-600">Enquire</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Highlights />
        <Gallery />
        <Details />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 bg-white">
        <p>Information provided is for guidance only and does not constitute an offer or contract.</p>
      </footer>
    </div>
  )
}

export default App
