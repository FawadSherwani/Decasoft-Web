import { BarChart3, Code2, Search, ShoppingCart, Target } from 'lucide-react'

const highlights = [
  { label: 'Meta Ads', icon: Target },
  { label: 'Google Ads', icon: BarChart3 },
  { label: 'SEO', icon: Search },
  { label: 'Websites', icon: Code2 },
  { label: 'eCommerce', icon: ShoppingCart },
]

export default function ServiceHighlights() {
  return (
    <section aria-label="Digital marketing services" className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-5 lg:px-8">
        {highlights.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-2 px-3 py-5 text-sm font-extrabold text-ink">
            <Icon className="h-5 w-5 text-brand" /> {label}
          </div>
        ))}
      </div>
    </section>
  )
}
