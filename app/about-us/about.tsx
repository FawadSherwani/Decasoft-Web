import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  ChartNoAxesCombined,
  Check,
  Factory,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  House,
  Lightbulb,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Truck,
  Users,
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Outcome focused',
    description: 'We connect every creative and technical decision to a clear business objective.',
  },
  {
    icon: HeartHandshake,
    title: 'True collaboration',
    description: 'We work openly with clients, share context early, and solve challenges as one team.',
  },
  {
    icon: Lightbulb,
    title: 'Thoughtful innovation',
    description: 'We use new ideas and technology where they create real value—not simply because they are new.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality with accountability',
    description: 'Clear ownership, careful reviews, and dependable delivery are built into how we work.',
  },
]

const industries = [
  { name: 'Healthcare', icon: HeartPulse, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85' },
  { name: 'Manufacturing', icon: Factory, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85' },
  { name: 'Retail', icon: Store, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85' },
  { name: 'Education', icon: GraduationCap, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=85' },
  { name: 'Logistics', icon: Truck, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85' },
  { name: 'Startups', icon: Rocket, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=85' },
  { name: 'Marketing', icon: ChartNoAxesCombined, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85' },
  { name: 'Blockchain', icon: Blocks, image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=85' },
  { name: 'Property', icon: House, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85' },
  { name: 'School', icon: School, image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=85' },
]

const solutions = [
  'Enterprise Applications',
  'ERP Systems',
  'CRM Solutions',
  'Salon Management',
  'Inventory Management',
  'Asset Management',
  'Marketplace Software',
  'MVP Development',
  'Web Portals',
  'Payment Software',
  'Finance Software',
  'Event Management',
  'Healthcare Solutions',
  'HR Management Systems',
  'E-commerce Development',
  'Construction Software',
]

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white text-[#191922]">
      <section className="relative isolate bg-[#f8f5f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-[#bf2227]/10 blur-3xl" />
        <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#bf2227]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bf2227]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#bf2227]">
              <Sparkles size={15} /> About Decasoft
            </div>
            <h1 className="mt-7 max-w-3xl font-montserrat text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              We bring strategy, creativity, and technology <span className="text-[#bf2227]">into one team.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Decasoft is a digital agency helping organizations build stronger brands, better customer experiences, and scalable digital products across Pakistan, the UAE, and Canada.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#bf2227] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#a91d22]">
                Work with us <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold transition hover:border-[#bf2227] hover:text-[#bf2227]">
                Explore our services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-gray-600">
              {['Customer focused', 'Quality driven', 'Built for long-term growth'].map((item) => (
                <span key={item} className="flex items-center gap-2"><BadgeCheck size={18} className="text-[#bf2227]" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border-2 border-[#bf2227]/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#202027] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85"
                alt="A collaborative digital agency team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 divide-x divide-white/20 p-6 text-white sm:p-8">
                <div><p className="text-2xl font-black sm:text-3xl">600+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Projects</p></div>
                <div className="pl-5"><p className="text-2xl font-black sm:text-3xl">450+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Clients</p></div>
                <div className="pl-5"><p className="text-2xl font-black sm:text-3xl">7+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Years</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] bg-[#f4f1ef] p-8 sm:p-12">
            <Image src="/about-img.png" alt="Decasoft digital solutions illustration" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8 sm:p-12" />
          </div>
          <div className="lg:pl-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#bf2227]">Our story</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">Built to make digital work feel more connected.</h2>
            <p className="mt-6 leading-8 text-gray-600">
              Decasoft began with a straightforward belief: businesses should not have to coordinate disconnected vendors to create one consistent customer experience. We built a multidisciplinary team where designers, developers, marketers, and content specialists solve problems together.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Today, we partner with growing companies and established organizations to move from an early idea to a polished launch—and continue improving long after delivery.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['One connected delivery team', 'Clear scopes and milestones', 'Senior specialist oversight', 'Support beyond launch'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#bf2227]"><Check size={15} /></span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1c24] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-red-300">What guides us</p>
              <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">Principles that shape every partnership.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-white/60 lg:justify-self-end">Our values are practical standards for how we make decisions, communicate, and deliver.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="bg-[#25242d] p-7 sm:p-8">
                <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#bf2227] text-white"><Icon size={22} /></span><span className="text-xs font-black tracking-widest text-white/20">0{index + 1}</span></div>
                <h3 className="mt-7 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:py-24">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[#171722]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171722]/35 via-transparent to-[#171722]/35" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-red-300">What we build</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Solutions Decasoft Offers</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">Flexible digital products and business systems shaped around your operations, customers, and growth plans.</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <div key={solution} className="group flex min-h-16 items-center justify-center rounded-xl border border-white/30 bg-white/[.04] px-4 py-4 text-center backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-[#e95459] hover:bg-[#bf2227]">
                <span className="text-sm font-extrabold text-white/90 group-hover:text-white">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#bf2227]">Across industries</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Industries We Cover</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">We combine proven digital practices with a practical understanding of the customers, constraints, and opportunities in each sector.</p>
            <div className="mx-auto mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#f8f5f3] px-5 py-4 text-sm font-bold"><Globe2 className="text-[#bf2227]" size={22} /> Serving clients across Pakistan, UAE, and Canada</div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 8).map(({ name, icon: Icon, image }) => (
              <article key={name} className="group relative aspect-[1.6/1] overflow-hidden rounded-2xl bg-[#1d1c24] shadow-sm">
                <Image src={image} alt={`${name} industry`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/55 transition duration-300 group-hover:bg-[#bf2227]/75" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                  <Icon size={31} strokeWidth={1.7} />
                  <h3 className="text-base font-extrabold">{name}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-4 grid max-w-none gap-4 sm:max-w-[calc(50%+0.5rem)] sm:grid-cols-2">
            {industries.slice(8).map(({ name, icon: Icon, image }) => (
              <article key={name} className="group relative aspect-[1.6/1] overflow-hidden rounded-2xl bg-[#1d1c24] shadow-sm">
                <Image src={image} alt={`${name} industry`} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/55 transition duration-300 group-hover:bg-[#bf2227]/75" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                  <Icon size={31} strokeWidth={1.7} />
                  <h3 className="text-base font-extrabold">{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f3] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#bf2227]"><Users size={23} /></div>
            <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-[#bf2227]">How we partner</p>
            <h2 className="mt-3 max-w-2xl font-montserrat text-3xl font-black leading-tight sm:text-4xl">Close enough to understand. Experienced enough to challenge.</h2>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-xl shadow-gray-200/50 sm:p-9">
            <p className="text-lg font-bold leading-8">“Our role is not simply to complete a list of tasks. It is to understand what success looks like, bring the right specialists together, and help our clients make stronger digital decisions.”</p>
            <div className="mt-7 border-t border-gray-200 pt-5"><p className="text-sm font-extrabold text-[#bf2227]">The Decasoft approach</p><p className="mt-1 text-sm text-gray-500">Customer focused. Quality driven.</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#bf2227] px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-white/70">Let&apos;s work together</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">Looking for a digital partner who sees the bigger picture?</h2>
          </div>
          <Link href="/contact-us" className="relative mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#bf2227] transition hover:-translate-y-0.5 lg:ml-10 lg:mt-0">
            Start a conversation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
