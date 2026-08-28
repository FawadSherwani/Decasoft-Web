import { CheckCircle2, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const checks = ['Website Audit', 'SEO Check', 'Meta Ads Check', 'Google Ads Check', 'Competitor Analysis', '3 Growth Recommendations']

export default function FreeAudit({ compact = false }: { compact?: boolean }) {
  return (
    <section id="audit" className={`free-audit-section ${compact ? 'py-12' : 'bg-[#f8f5f3] px-5 py-20 sm:px-8'}`}>
      <div className={`free-audit-card ${compact ? '' : 'mx-auto max-w-7xl'} relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-[0_24px_60px_-38px_rgba(191,34,39,0.35)] sm:px-10 lg:flex lg:items-center lg:justify-between`}>
        <div className="pointer-events-none absolute -end-20 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">No obligation. Actionable insights.</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Free Digital Marketing Audit</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {checks.map((item) => <span key={item} className="free-audit-check flex items-center gap-2 text-sm font-semibold text-ink/65"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />{item}</span>)}
          </div>
        </div>
        <div className="relative mt-8 flex flex-wrap gap-3 lg:ms-8 lg:mt-0">
          <Link href="/contact-us#audit" className="rounded-full bg-brand px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark">GET MY FREE AUDIT</Link>
          <a href="https://wa.me/971559411204?text=I%27d%20like%20a%20free%20digital%20marketing%20audit" target="_blank" rel="noopener noreferrer" className="free-audit-whatsapp inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-bold text-[#159447] transition hover:bg-[#25D366] hover:text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
