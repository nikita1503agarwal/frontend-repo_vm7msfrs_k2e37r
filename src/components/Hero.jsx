import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(147,51,234,0.25),rgba(14,165,233,0.15)_35%,rgba(249,115,22,0.08)_70%,transparent)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now with AI Agent Filing
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Taxes done right in minutes with Thermal
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Meet your AI tax co-pilot. Import your documents, chat through deductions, and e-file confidently. Enterprise-grade accuracy, startup speed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">Start free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">See how it works</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/60 text-sm">
              <span>Trusted by solo founders and small businesses</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
