import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const weeklyRoutes = ['/', '/about-us', '/contact-us', '/services', '/courses', '/case-studies', '/our-work']
const monthlyRoutes = [
  '/payments',
  '/services/web-development', '/services/mobile-app-development', '/services/digital-marketing',
  '/services/uiux', '/services/e-commerce', '/services/graphic-desiging', '/services/video-editing',
  '/services/videography', '/courses/web-development', '/courses/digital-marketing',
  '/courses/graphic-designing', '/courses/uiux', '/courses/e-commerce', '/courses/videography',
  '/case-studies/website-development', '/case-studies/social-media-marketing-meta-ads',
  '/case-studies/graphic-design', '/case-studies/logo-design', '/case-studies/videography',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    ...weeklyRoutes.map((path) => ({
      url: new URL(path, SITE_URL).toString(), lastModified,
      changeFrequency: 'weekly' as const, priority: path === '/' ? 1 : 0.8,
    })),
    ...monthlyRoutes.map((path) => ({
      url: new URL(path, SITE_URL).toString(), lastModified,
      changeFrequency: 'monthly' as const, priority: path === '/payments' ? 0.4 : 0.6,
    })),
  ]
}
