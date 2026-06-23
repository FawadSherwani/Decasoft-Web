import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrandsMarquee from '@/components/BrandsMarquee'
import AboutUs from '@/components/AboutUs'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import CaseStudiesTabs from "@/components/CaseStudiesTabs";
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import { useMemo } from 'react'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <AboutUs />
      <Stats />
      <Services />
      <TechStack />
      <CaseStudiesTabs />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
