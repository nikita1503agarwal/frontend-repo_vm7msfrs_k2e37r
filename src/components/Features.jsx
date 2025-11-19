import React from 'react'
import { ShieldCheck, FileSpreadsheet, Bot, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: <Bot className="h-5 w-5" />, 
    title: 'Guided AI prep',
    desc: 'Ask questions in plain English. Our agent explains deductions, credits, and forms as you go.'
  },
  {
    icon: <FileSpreadsheet className="h-5 w-5" />, 
    title: 'Smart import',
    desc: 'Drag-and-drop W-2s, 1099s, receipts. We scan and auto-fill with human-level accuracy.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />, 
    title: 'Audit-ready',
    desc: 'Line-by-line justification and a complete paper trail you can share with your CPA.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />, 
    title: 'One-click e-file',
    desc: 'Review, sign, and submit. Real-time status and refund tracking.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_10%,rgba(147,51,234,0.15),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(14,165,233,0.12),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need to file with confidence</h2>
          <p className="mt-3 text-white/70">Designed for independents, creators, and small businesses who want clarity without the jargon.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7.5 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
