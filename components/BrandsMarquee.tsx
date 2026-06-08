import Image from 'next/image'

const brands = [
  { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png', alt: 'Amazon' },
  { type: 'text', label: '[CONTEXT]', className: 'text-2xl font-black tracking-tighter text-gray-400' },
  { type: 'text', label: 'Bizcover', className: 'font-bold text-xl text-gray-400 italic' },
  { type: 'text', label: 'techrover', className: 'text-xl font-bold text-gray-400' },
  { type: 'text', label: 'SHOWGIZMO', className: 'font-bold text-xl text-gray-400', highlight: 'O' },
  { type: 'text', label: 'intelligeni+', className: 'font-light text-xl text-gray-400 italic' },
]

function BrandItem({ brand }: { brand: typeof brands[0] }) {
  if (brand.type === 'image') {
    return (
      <Image
        src={brand.src!}
        alt={brand.alt!}
        width={128}
        height={28}
        className="h-7 w-auto object-contain grayscale opacity-60"
      />
    )
  }
  if (brand.highlight) {
    const label = brand.label!
    const idx = label.lastIndexOf(brand.highlight)
    return (
      <span className={brand.className}>
        {label.slice(0, idx)}
        <span className="text-primary">{brand.highlight}</span>
        {label.slice(idx + 1)}
      </span>
    )
  }
  return <span className={brand.className}>{brand.label}</span>
}

export default function BrandsMarquee() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 overflow-hidden">
      <div className="marquee-inner">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-16 px-8">
            {brands.map((brand, i) => (
              <BrandItem key={`${copy}-${i}`} brand={brand} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
