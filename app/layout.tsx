import type { Metadata } from 'next'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import WhatsappFloat from '@/components/WhatsappFloat'
import BotpressChat from '@/components/BotpressChat'
import LanguageProvider from '@/components/LanguageProvider'
import { headers } from 'next/headers'
import { isLocale } from '@/lib/i18n'
import "hover.css/css/hover-min.css";

export const metadata: Metadata = {
  title: "D'ECASOFT – Customer Focused. Quality Driven.",
  description: 'Award-winning custom software and web development company.',
  icons: {
    icon: '/fav-icon.png',
    shortcut: '/fav-icon.png',
    apple: '/fav-icon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localeHeader = (await headers()).get('x-locale') ?? 'en'
  const locale = isLocale(localeHeader) ? localeHeader : 'en'

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-poppins bg-white text-gray-800 overflow-x-hidden"
      >
        <LanguageProvider locale={locale}>
          {children}
          <Analytics />
          <BotpressChat />
          <WhatsappFloat />
        </LanguageProvider>
      </body>
    </html>
  )
  
}
