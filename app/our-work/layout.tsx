import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Our Digital Work',
  description: 'Browse selected digital products, websites, campaigns, creative projects, and client work delivered by D\'ECASOFT.',
  path: '/our-work',
})

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
