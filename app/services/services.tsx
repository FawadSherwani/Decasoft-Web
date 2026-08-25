import Image from 'next/image'
import Link from 'next/link'
import CourseAutoTranslate from '@/components/CourseAutoTranslate'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  Check,
  Code2,
  Film,
  Layers3,
  Palette,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    description: 'Fast, responsive websites and web applications engineered around your business goals.',
    tags: ['Custom websites', 'Web applications', 'Maintenance'],
    href: '/services/web-development',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile App Development',
    description: 'Intuitive iOS, Android, and cross-platform applications built for performance and scale.',
    tags: ['iOS apps', 'Android apps', 'Cross-platform'],
    href: '/services/mobile-app-development',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Digital Marketing',
    description: 'Focused campaigns that connect strategy, creative, media, and measurable growth.',
    tags: ['Paid advertising', 'Social media', 'Content strategy'],
    href: '/services/digital-marketing',
  },
  {
    icon: Search,
    number: '04',
    title: 'SEO Services',
    description: 'Technical and content-led search strategies that build sustainable online visibility.',
    tags: ['Technical SEO', 'Content SEO', 'Local SEO'],
    href: '/services/seo',
  },
  {
    icon: Layers3,
    number: '05',
    title: 'UI/UX Design',
    description: 'Clear, accessible product experiences shaped around real users and real outcomes.',
    tags: ['User research', 'Interface design', 'Design systems'],
    href: '/services/uiux',
  },
  {
    icon: ShoppingBag,
    number: '06',
    title: 'E-commerce & Shopify',
    description: 'Conversion-focused storefronts that make discovering and buying products effortless.',
    tags: ['Shopify stores', 'Custom commerce', 'Integrations'],
    href: '/services/e-commerce',
  },
  {
    icon: Palette,
    number: '07',
    title: 'Graphic Designing',
    description: 'Distinctive identities and campaign visuals that make brands credible and memorable.',
    tags: ['Brand identity', 'Social creative', 'Packaging'],
    href: '/services/graphic-desiging',
  },
  {
    icon: Film,
    number: '08',
    title: 'Video Editing',
    description: 'Raw footage transformed into polished stories built to hold audience attention.',
    tags: ['Post-production', 'Motion graphics', 'Social video'],
    href: '/services/video-editing',
  },
  {
    icon: Camera,
    number: '09',
    title: 'Videography',
    description: 'Professional video production that captures products, people, and stories with purpose.',
    tags: ['Brand films', 'Commercials', 'Event coverage'],
    href: '/services/videography',
  },
]

const process = [
  { number: '01', title: 'Understand', text: 'We learn your business, audience, challenges, and definition of success.' },
  { number: '02', title: 'Strategize', text: 'We turn the findings into a focused roadmap with clear priorities.' },
  { number: '03', title: 'Create', text: 'Our specialists execute, review, and refine every deliverable collaboratively.' },
  { number: '04', title: 'Grow', text: 'We launch, measure, improve, and support the next stage of your growth.' },
]

export default function ServicesPage() {
  return (
    <main className="services-page overflow-hidden bg-white text-[#191922]">
      <CourseAutoTranslate />
      <section className="services-hero relative isolate bg-[#f8f5f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -start-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#bf2227]/10 blur-3xl" />
        <div className="absolute -end-20 -top-20 -z-10 h-96 w-96 rounded-full bg-[#bf2227]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bf2227]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#bf2227]">
              <Sparkles size={15} /> Digital services for ambitious brands
            </div>
            <h1 className="mt-7 max-w-3xl font-montserrat text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              One expert team to turn your ideas into <span className="text-[#bf2227]">measurable growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Strategy, design, technology, and marketing—connected under one roof to build stronger brands and better digital experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#bf2227] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#a91d22]">
                Discuss your project <ArrowRight size={17} />
              </Link>
              <Link href="#services-grid" className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold transition hover:border-[#bf2227] hover:text-[#bf2227]">
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-gray-600">
              {['Strategy-first thinking', 'Specialist delivery teams', 'Transparent communication'].map((item) => (
                <span key={item} className="flex items-center gap-2"><BadgeCheck size={18} className="text-[#bf2227]" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -end-5 -top-5 h-full w-full rounded-[2rem] border-2 border-[#bf2227]/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#202027] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85"
                alt="Digital agency team planning a client project"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 divide-x divide-white/20 p-6 text-white sm:p-8">
                <div className="text-center"><p className="text-2xl font-black sm:text-3xl">600+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Projects</p></div>
                <div className="text-center"><p className="text-2xl font-black sm:text-3xl">450+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Clients</p></div>
                <div className="text-center"><p className="text-2xl font-black sm:text-3xl">7+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">Years</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="services-capabilities scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#bf2227]">Our capabilities</p>
              <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">Built to solve the whole digital challenge.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end">
              Choose a focused service or bring us a complex challenge. Our teams collaborate across disciplines so every touchpoint feels consistent and works toward the same outcome.
            </p>
          </div>

          <div className="services-grid mt-14 grid overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-200 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, number, title, description, tags, href }) => (
              <Link key={title} href={href} className="services-card group flex min-h-[330px] flex-col bg-white p-7 transition duration-300 hover:bg-[#1d1c24] sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#bf2227] transition group-hover:bg-[#bf2227] group-hover:text-white"><Icon size={23} /></span>
                  <span className="text-xs font-black tracking-[.18em] text-gray-300 group-hover:text-white/30">{number}</span>
                </div>
                <h3 className="mt-8 text-xl font-black transition group-hover:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 transition group-hover:text-white/60">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => <span key={tag} className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-500 transition group-hover:bg-white/10 group-hover:text-white/60">{tag}</span>)}
                </div>
                <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-extrabold text-[#bf2227] transition group-hover:text-red-300">Explore service <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process bg-[#1d1c24] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-red-300">How we work</p>
              <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">A clear process. No unnecessary complexity.</h2>
              <p className="mt-5 max-w-md leading-7 text-white/60">You always know what we are doing, why it matters, and what comes next.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {process.map((item) => (
                <article key={item.number} className="services-process-card bg-[#25242d] p-7 sm:p-8">
                  <span className="text-sm font-black text-[#e95459]">{item.number}</span>
                  <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-partner px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100">
            <Image src="/web/outloud.png" alt="A website project delivered by Decasoft" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="lg:ps-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#bf2227]">Why Decasoft</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">One accountable partner from strategy to delivery.</h2>
            <p className="mt-5 leading-8 text-gray-600">Instead of coordinating multiple vendors, work with a connected team that understands the complete customer journey and keeps every decision aligned.</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {['Senior specialist talent', 'Business-focused recommendations', 'Responsive project management', 'Scalable long-term support'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#bf2227]"><Check size={15} /></span>{item}</li>
              ))}
            </ul>
            <Link href="/about-us" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#bf2227]">Learn more about us <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="services-cta px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#bf2227] px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div className="absolute -end-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-white/70">Start a conversation</p>
            <h2 className="mt-3 font-montserrat text-3xl font-black leading-tight sm:text-4xl">Have a challenge in mind? Let&apos;s find the right way forward.</h2>
          </div>
          <Link href="/contact-us" className="relative mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#bf2227] transition hover:-translate-y-0.5 lg:ms-10 lg:mt-0">
            Book a free consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
