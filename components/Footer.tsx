// ============================================================
// Footer.tsx — OPTIMIZED
// ============================================================
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const services = [
  { name: 'Web Development',            href: '/services/web-development' },
  { name: 'Digital Marketing',          href: '/services/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/services/seo' },
  { name: 'Videography',                href: '/services/videography' },
  { name: 'E-Commerce',                 href: '/services/e-commerce' },
]
const courses = [
  { name: 'Web Development',            href: '/courses/web-development' },
  { name: 'Digital Marketing',          href: '/courses/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/courses/seo' },
  { name: 'Videography',                href: '/courses/videography' },
  { name: 'E-Commerce',                 href: '/courses/e-commerce' },
]
const company = [
  { name: 'Home',         href: '/' },
  { name: 'About Us',     href: '/about-us' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
]
const support = [
  { name: 'Contact Us',     href: '/contact-us' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms Of Use',   href: '/terms' },
  { name: 'Payments',       href: '/payments' },
]
const social = [
  { icon: 'fa-brands fa-facebook',  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61577630024292' },
  { icon: 'fa-brands fa-tiktok',    label: 'TikTok',    href: 'https://www.tiktok.com/@decasoft.digital' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/dec.asofts/' },
  { icon: 'fa-brands fa-linkedin',  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/deca-softs' },
]

function FooterLink({ name, href, pathname }: { name: string; href: string; pathname: string }) {
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center transition-colors ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
    >
      <span className={`inline-block h-px bg-primary mr-0 transition-all duration-300 ease-out ${isActive ? 'w-3 mr-2' : 'w-0 group-hover:w-3 group-hover:mr-2'}`} />
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">{name}</span>
    </Link>
  )
}

export default function Footer() {
  const pathname = usePathname()
  return (
    // ✅ content-visibility: auto — footer is always below fold
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Deca-Logo-white.png"
                alt="D'ECASOFT Logo"
                width={200}
                height={100}
                loading="lazy"   // ✅ Footer is always below fold
                quality={80}     // ✅ was default (75), 80 is fine for footer logo
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Decasoft specializes in custom design and front-end development. We love taking on design challenges that require full-on content strategy, thoughtful design, and ongoing marketing.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-xs">
              {services.map((s) => <li key={s.name}><FooterLink name={s.name} href={s.href} pathname={pathname} /></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-xs">
              {courses.map((c) => <li key={c.name}><FooterLink name={c.name} href={c.href} pathname={pathname} /></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs">
              {company.map((c) => <li key={c.name}><FooterLink name={c.name} href={c.href} pathname={pathname} /></li>)}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-xs">
                {support.map((s) => <li key={s.name}><FooterLink name={s.name} href={s.href} pathname={pathname} /></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {social.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-primary transition-colors text-base">
                    <i className={s.icon} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            Copyright &copy; 2026{' '}
            <a href="https://www.decasofts.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-primary">
              Decasofts
            </a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
