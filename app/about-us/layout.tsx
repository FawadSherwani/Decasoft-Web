import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'About Our Digital Team',
  description: 'Meet the D\'ECASOFT team connecting strategy, design, technology, and marketing to help ambitious businesses grow.',
  path: '/about-us',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<Footer /></>
}
