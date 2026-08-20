'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Lightbulb, Users } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const strengths = [
  {
    icon: Lightbulb,
    title: 'Purpose-built ideas',
    description: 'Digital solutions shaped around your goals, audience, and market.',
  },
  {
    icon: Users,
    title: 'A team that listens',
    description: 'Clear communication and close collaboration from brief to launch.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality that lasts',
    description: 'Reliable work delivered with care, consistency, and attention to detail.',
  },
]

export default function HomeAbout() {
  const { t, href, isRtl } = useLanguage()
  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="pointer-events-none absolute -start-24 top-12 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -end-24 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_70px_-35px_rgba(22,24,29,0.45)]">
            <Image
              src="/about-img.png"
              alt="The Decasoft team collaborating on digital solutions"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 end-4 rounded-2xl border border-white/70 bg-white/95 px-6 py-4 shadow-xl backdrop-blur sm:end-8">
            <p className="text-2xl font-black text-brand">{t('7+ Years')}</p>
            <p className="text-xs font-semibold text-ink/55">{t('Creating digital impact')}</p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            {t('Who We Are')}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {t('About')} <span className="text-brand">Decasoft</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink/60">
            {t('We are a customer-focused digital agency helping ambitious businesses turn ideas into effective online experiences. From strategy and design to development and marketing, our team combines creativity with practical technology to produce measurable results.')}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{t(title)}</h3>
                <p className="mt-1 text-xs leading-5 text-ink/50">{t(description)}</p>
              </div>
            ))}
          </div>

          <Link
            href={href('/about-us')}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-14px_rgba(227,30,43,0.8)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            {t('Discover our story')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
