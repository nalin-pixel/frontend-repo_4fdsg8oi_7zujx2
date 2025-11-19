import React from 'react'

const Details = () => {
  const rows = [
    { k: 'Location', v: 'Porto Cheli, Argolida, Greece' },
    { k: 'Bedrooms', v: '6 en-suite + staff quarters' },
    { k: 'Bathrooms', v: '7' },
    { k: 'Internal Area', v: 'Approx. 650 m²' },
    { k: 'Plot Size', v: 'Approx. 4,500 m²' },
    { k: 'Year Built', v: '2019 (recently refurbished)' },
    { k: 'Energy Class', v: 'A' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Property Details</h2>
            <p className="mt-3 text-slate-600">Impeccably maintained with high-spec finishes, this villa brings together privacy, proximity, and design—minutes from Porto Cheli marina and Spetses island crossings.</p>

            <ul className="mt-8 space-y-3">
              {rows.map((r) => (
                <li key={r.k} className="flex items-center justify-between gap-6 border-b border-slate-200 py-3">
                  <span className="text-slate-500">{r.k}</span>
                  <span className="font-medium text-slate-900">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <iframe
              title="Map"
              className="w-full h-[360px] md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Porto+Cheli+Greece&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
