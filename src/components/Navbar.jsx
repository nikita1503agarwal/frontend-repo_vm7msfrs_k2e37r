import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 via-violet-500 to-sky-500 shadow-lg shadow-violet-500/30" />
              <span className="text-white text-lg font-semibold tracking-tight">Thermal</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
              <a href="#cta" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition">Get started</a>
            </div>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
