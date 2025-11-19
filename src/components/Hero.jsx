import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-20 text-white">
        <p className="uppercase tracking-[0.3em] text-blue-200/90 text-xs sm:text-sm mb-4">Porto Cheli • Greece</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight drop-shadow-lg">
          Seafront Luxury Villa
        </h1>
        <p className="mt-6 max-w-2xl text-blue-100/90 text-base sm:text-lg">
          A contemporary 6-bedroom retreat with panoramic Aegean views, private beach access, and resort‑style outdoor living. Offered fully furnished and ready to enjoy.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm sm:text-base">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">6 Bedrooms</span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">7 Bathrooms</span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">650 m² Interior</span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">4,500 m² Plot</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white font-medium shadow-lg shadow-blue-500/20"
          >
            Request Details
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white font-medium border border-white/20"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
