import type { Metadata } from 'next'

export const SITE_URL = 'https://www.decasoft.com'
export const SITE_NAME = "D'ECASOFT"
export const DEFAULT_DESCRIPTION =
  'D\'ECASOFT delivers web development, mobile apps, digital marketing, design, e-commerce, and practical digital training.'

type PageMetadata = {
  title: string
  description: string
  path: string
}

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const canonical = path === '/' ? '/' : path.replace(/\/$/, '')

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: '/about-img.png', width: 1200, height: 630, alt: `${SITE_NAME} digital agency team` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/about-img.png'] },
  }
}
