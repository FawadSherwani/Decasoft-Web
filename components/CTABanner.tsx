'use client'

import { Send, ArrowRight } from "lucide-react";
import { useLanguage } from './LanguageProvider'

export default function CtaBanner() {
  const { t, href, isRtl } = useLanguage()
  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="px-5 pb-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-brand px-8 py-10 sm:flex-row">
        <div className={`flex items-center gap-4 text-center ${isRtl ? 'sm:text-right' : 'sm:text-left'}`}>
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-full bg-white/15 sm:grid">
            <Send className="h-6 w-6 text-white" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              {t('Ready to Grow Your Business?')}
            </h3>
            <p className="mt-1 text-[13px] text-white/80">
              {t("Book your FREE strategy call today and let's build a growth engine for your brand.")}
            </p>
          </div>
        </div>
        <a
          href={href('/contact-us')}
          className="flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[13px] font-bold text-brand transition hover:bg-cream"
        >
          {t('GET A FREE PROPOSAL')}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

