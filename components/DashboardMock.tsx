import { ArrowUpRight, LayoutGrid, Megaphone, Settings2, Target } from 'lucide-react'

function Sparkline({ points }: { points: string }) {
  return <svg viewBox="0 0 100 34" className="h-full w-full" role="img" aria-label="Upward performance trend" preserveAspectRatio="none"><polyline points={points} fill="none" stroke="#e31e2b" strokeWidth="2.2" vectorEffect="non-scaling-stroke" /></svg>
}

const traffic = [['Paid Search', '45%', '#e31e2b'], ['Paid Social', '32%', '#f4a3a8'], ['Organic Search', '18%', '#f7c9cc'], ['Direct', '5%', '#2b2d33']]

export default function DashboardMock() {
  return <div className="home-dashboard relative mx-auto flex max-w-2xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_30px_80px_-25px_rgba(227,30,43,0.35)]">
    <div className="hidden w-14 flex-col items-center gap-6 bg-brand py-6 sm:flex" aria-hidden="true"><LayoutGrid size={18} className="text-white/90" /><span className="grid h-8 w-8 place-items-center rounded-md bg-white/15"><LayoutGrid className="h-4 w-4 text-white" /></span><Megaphone className="h-4 w-4 text-white/70" /><Target className="h-4 w-4 text-white/70" /><Settings2 className="mt-auto h-4 w-4 text-white/70" /></div>
    <div className="flex-1 p-4 sm:p-5">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-3 rounded-xl border border-black/5 p-3 sm:col-span-1"><p className="text-[11px] font-medium text-ink/60">Total Revenue</p><p className="mt-1 text-xl font-extrabold text-ink">$146,580</p><p className="text-[11px] font-semibold text-emerald-600">+25.6% vs last 30 days</p><div className="mt-2 h-14"><Sparkline points="0,28 25,23 50,18 75,5 100,10" /></div><div className="flex justify-between text-[9px] text-ink/55"><span>May 1</span><span>May 15</span><span>May 30</span></div></div>
        <div className="rounded-xl border border-black/5 p-3"><p className="text-[11px] font-medium text-ink/60">Total Leads</p><p className="mt-1 text-lg font-extrabold text-ink">2,450</p><p className="text-[10px] font-semibold text-emerald-600">+28.6%</p><div className="mt-2 h-9"><Sparkline points="0,27 25,15 50,21 75,6 100,10" /></div></div>
        <div className="rounded-xl border border-black/5 p-3"><p className="text-[11px] font-medium text-ink/60">ROAS</p><p className="mt-1 text-lg font-extrabold text-ink">8.7x</p><p className="text-[10px] font-semibold text-emerald-600">+41.3%</p><div className="mt-2 h-9"><Sparkline points="0,27 25,22 50,10 75,15 100,4" /></div></div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        <div className="col-span-5 rounded-xl border border-black/5 p-3 sm:col-span-3"><p className="mb-2 text-[11px] font-semibold text-ink/70">Campaign Performance</p>{[['Google Ads','$45,231','70%'],['Meta Ads','$88,542','90%']].map(([name,value,width]) => <div key={name} className="mb-2.5"><div className="flex items-center justify-between text-[11px]"><span className="font-semibold text-ink">{name}</span><span className="font-bold text-ink">{value}</span><span className="flex items-center text-emerald-600"><ArrowUpRight className="h-3 w-3" />+30%</span></div><div className="mt-1 h-1.5 rounded-full bg-black/5"><div className="h-1.5 rounded-full bg-brand" style={{ width }} /></div></div>)}</div>
        <div className="col-span-5 rounded-xl border border-black/5 p-3 sm:col-span-2"><p className="mb-2 text-[11px] font-semibold text-ink/70">Traffic Sources</p><div className="flex items-center gap-3"><div role="img" aria-label="Traffic sources: 45 percent paid search, 32 percent paid social, 18 percent organic, 5 percent direct" className="h-16 w-16 shrink-0 rounded-full" style={{ background: 'conic-gradient(#e31e2b 0 45%, #f4a3a8 45% 77%, #f7c9cc 77% 95%, #2b2d33 95%)', mask: 'radial-gradient(circle, transparent 42%, black 44%)' }} /><ul className="flex-1 space-y-0.5 text-[9.5px] text-ink/65">{traffic.map(([name,value,color]) => <li key={name} className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />{name}<span className="ms-auto font-semibold text-ink">{value}</span></li>)}</ul></div></div>
      </div>
    </div>
  </div>
}
