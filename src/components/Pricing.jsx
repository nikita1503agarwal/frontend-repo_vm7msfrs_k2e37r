import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'Try the essentials',
    features: ['AI chat guidance', 'W-2 import', 'Basic deductions', 'Email support']
  },
  {
    name: 'Pro',
    price: '$19/mo',
    highlight: true,
    tagline: 'For freelancers & SMBs',
    features: ['All Starter features', '1099/K-1 support', 'Receipt scanning', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    tagline: 'For finance teams',
    features: ['SSO & roles', 'Bulk filing workflows', 'Custom policies', 'Dedicated success']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you’re ready to file.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-violet-400/30 bg-violet-400/10' : 'border-white/10 bg-white/5'} p-6`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <p className="text-white/60 text-sm">{p.tagline}</p>
                </div>
                <div className="text-2xl text-white font-semibold">{p.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-emerald-300"><Check size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${p.highlight ? 'bg-white text-slate-900 hover:bg-white/90' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
