import React, { useState } from 'react'

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.25),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Enquire About This Property</h2>
        <p className="mt-2 text-blue-100/80">Share your contact details and we’ll send the brochure and arrange a private viewing.</p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/60" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/60" />
            <input placeholder="Phone (optional)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/60 sm:col-span-2" />
            <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/60 sm:col-span-2" />
            <button className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium shadow-lg shadow-blue-500/20 sm:col-span-2">Send enquiry</button>
            <p className="text-xs text-blue-200/70 sm:col-span-2">By submitting, you agree to be contacted regarding this property.</p>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6">
            <p className="text-blue-100">Thank you. A property specialist will get in touch shortly.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
