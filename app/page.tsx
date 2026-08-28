import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoBar from '@/components/LogoBar'
import Stats from '@/components/Stats'
import HomeAbout from '@/components/HomeAbout'
import Services from '@/components/Services'
import Process from '@/components/Process'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import CtaBanner from '@/components/CTABanner'
import ServiceHighlights from '@/components/ServiceHighlights'
import FreeAudit from '@/components/FreeAudit'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Digital Agency for Design, Development & Growth',
  description: 'Grow your business with D\'ECASOFT web development, mobile apps, design, SEO, digital marketing, and e-commerce services.',
  path: '/',
})


export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <ServiceHighlights />
      <LogoBar />
      <Stats />
      <HomeAbout />
      <Services />
      <FreeAudit />
      <Process />
      <CaseStudies />
      <Testimonials />
      <TrustSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}

