import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import type { GrowthPage } from '@/lib/growth-pages'
import Navbar from './Navbar'
import Footer from './Footer'
import FreeAudit from './FreeAudit'

export default function GrowthLandingPage({ page }: { page: GrowthPage }) {
  return <main className="service-detail-page bg-white text-ink"><Navbar />
    <section className="bg-[#f8f5f3] px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
      <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{page.eyebrow}</p><h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{page.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-ink/60">{page.description}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/contact-us#audit" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-black text-white">GET FREE AUDIT <ArrowRight className="h-4 w-4" /></Link><a href="https://calendly.com/decasofts-appointment/meeting" className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-black">BOOK A STRATEGY CALL</a><a href="https://wa.me/971559411204" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-black text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div></div>
      <div className="rounded-3xl bg-[#171820] p-8 text-white"><p className="text-sm text-white/60">Built for {page.audience}</p><h2 className="mt-3 text-2xl font-black">What we can deliver</h2><div className="mt-6 space-y-4">{page.services.map(service => <p key={service} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="h-5 w-5 text-brand" />{service}</p>)}</div></div>
    </div></section>
    <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Our approach</p><h2 className="mt-3 text-3xl font-black">Strategy, execution, and measurement in one team</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[['01','Discover','We review your market, offer, customers, data, and current funnel.'],['02','Build','We create the pages, campaigns, tracking, and content needed to compete.'],['03','Improve','We report clearly and optimise around qualified leads, sales, and revenue.']].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-black/5 p-7"><span className="font-black text-brand">{n}</span><h3 className="mt-3 text-xl font-black">{t}</h3><p className="mt-2 text-sm leading-7 text-ink/55">{d}</p></div>)}</div></div></section>
    <FreeAudit /><Footer />
  </main>
}
