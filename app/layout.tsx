import type { Metadata } from 'next'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
import '@fontsource/montserrat/800.css'
import 'hover.css/css/hover-min.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { headers } from 'next/headers'
import BotpressChat from '@/components/BotpressChat'
import LanguageProvider from '@/components/LanguageProvider'
import PageTransition from '@/components/PageTransition'
import WhatsappFloat from '@/components/WhatsappFloat'
import { isLocale } from '@/lib/i18n'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Design, Development & Digital Growth`, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: './' },
  openGraph: {
    type: 'website', locale: 'en_US', url: './', siteName: SITE_NAME,
    title: `${SITE_NAME} | Design, Development & Digital Growth`, description: DEFAULT_DESCRIPTION,
    images: [{ url: '/about-img.png', width: 1200, height: 630, alt: `${SITE_NAME} digital agency team` }],
  },
  twitter: {
    card: 'summary_large_image', title: `${SITE_NAME} | Design, Development & Digital Growth`,
    description: DEFAULT_DESCRIPTION, images: ['/about-img.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/fav-icon.png', shortcut: '/fav-icon.png', apple: '/fav-icon.png' },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const localeHeader = (await headers()).get('x-locale') ?? 'en'
  const locale = isLocale(localeHeader) ? localeHeader : 'en'

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()` }} />
      </head>
      <body suppressHydrationWarning className="font-poppins overflow-x-hidden">
        <LanguageProvider locale={locale}>
          <PageTransition>{children}</PageTransition>
          <Analytics /><BotpressChat /><WhatsappFloat />
        </LanguageProvider>
      </body>
    </html>
  )
}
