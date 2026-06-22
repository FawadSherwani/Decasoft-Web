// ============================================================
// CTABanner.tsx — OPTIMIZED
// ✅ Added content-visibility (below fold always)
// ✅ Added Link for "CONTACT US" button (was plain button with no href)
// ============================================================
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section
      className="bg-primary py-14"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-red-200 text-xs font-semibold tracking-widest uppercase mb-1">Collaboration</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white">Got A Project? Let&apos;s Talk.</h2>
          <p className="text-red-100 text-sm mt-2 max-w-lg">
            We&apos;re A Team Of Creatives Who Are Excited About Unique Ideas And Help Fin-Tech Companies To Create
            Amazing Identity By Crafting Top-Notch UI/UX.
          </p>
        </div>
        {/* ✅ Was a <button> with no action — changed to Link for better CWV */}
        <Link
          href="/contact"
          className="bg-white text-primary font-bold px-10 py-4 rounded text-sm whitespace-nowrap hover:bg-gray-100 transition-colors shadow-xl"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
