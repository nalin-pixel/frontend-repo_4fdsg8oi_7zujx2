import React from 'react'

const items = [
  { label: 'Direct Sea Access', desc: 'Private path to a secluded cove ideal for morning swims.' },
  { label: 'Infinity Pool', desc: 'Heated 20m pool merging with the horizon.' },
  { label: 'Guest House', desc: 'Independent suite for visitors or staff.' },
  { label: 'Cinema & Gym', desc: 'Fully equipped indoor amenities for all seasons.' },
  { label: 'Sunset Terrace', desc: 'West-facing lounge with firepit and pergola.' },
  { label: 'Helipad Nearby', desc: 'Easy access from Athens or islands.' },
]

const Highlights = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-50" id="highlights">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Highlights</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Crafted for effortless Mediterranean living with refined materials and thoughtful design.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-medium text-slate-900">{it.label}</h3>
              <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
