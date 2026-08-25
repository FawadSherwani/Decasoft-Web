import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact Our Digital Agency',
  description: 'Contact D\'ECASOFT to discuss web development, mobile apps, design, marketing, SEO, e-commerce, or digital training.',
  path: '/contact-us',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<Footer /></>
}
