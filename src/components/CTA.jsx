import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">File confidently with Thermal</h3>
          <p className="mt-2 text-white/70">Set up your account in under a minute. No credit card required.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">Create free account</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
