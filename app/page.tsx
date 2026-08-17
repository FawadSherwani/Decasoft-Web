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


export default function Home() {
  return (
    <main>
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

