import Image from 'next/image'
import { Award, BadgeCheck, PlayCircle, Users } from 'lucide-react'

export default function TrustSection() {
  return (
    <section className="trust-section bg-[#f8f5f3] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Why Decasofts</p><h2 className="mt-3 text-3xl font-black text-ink">A Team You Can Trust With Growth</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="trust-card rounded-2xl bg-white p-7"><Users className="text-brand" /><h3 className="mt-4 font-black text-ink">Meet the team</h3><div className="mt-4 overflow-hidden rounded-xl"><Image src="/about-img.png" alt="Decasofts digital agency team" width={600} height={360} className="h-40 w-full object-cover" /></div></div>
          <div className="trust-card rounded-2xl bg-white p-7"><PlayCircle className="text-brand" /><h3 className="mt-4 font-black text-ink">Video testimonials</h3><div className="trust-placeholder mt-4 grid h-40 place-items-center rounded-xl border-2 border-dashed border-black/10 px-4 text-center text-sm text-ink/50">Client video stories coming soon</div></div>
          <div className="trust-card rounded-2xl bg-white p-7"><Award className="text-brand" /><h3 className="mt-4 font-black text-ink">Certifications & standards</h3><div className="trust-copy mt-4 space-y-3 text-sm text-ink/60"><p className="flex gap-2"><BadgeCheck className="h-5 w-5 shrink-0 text-brand" /> Google Ads best-practice delivery</p><p className="flex gap-2"><BadgeCheck className="h-5 w-5 shrink-0 text-brand" /> Meta campaign management</p><p className="flex gap-2"><BadgeCheck className="h-5 w-5 shrink-0 text-brand" /> Modern web performance standards</p><p className="text-xs">Official certification badges require manual verification.</p></div></div>
        </div>
      </div>
    </section>
  )
}
