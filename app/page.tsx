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
import Footer from '@/components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <LogoBar />
      <Stats />
      <HomeAbout />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
      <Footer />
      <SpeedInsights />
    </main>
  )
}

