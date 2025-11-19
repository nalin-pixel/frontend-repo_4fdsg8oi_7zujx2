import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Gallery</h2>
            <p className="mt-2 text-slate-600">A glimpse into everyday life at the villa.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Arrange a Viewing</a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl group">
              <img src={src} alt="Villa" className="h-48 md:h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
