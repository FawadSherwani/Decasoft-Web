'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'HOME', href: '/' },
  {
    name: 'SERVICES',
    href: '/services',
    subMenu: [
      { name: 'WEB DEVELOPMENT',            href: '/services/web-development' },
      { name: 'DIGITAL MARKETING',          href: '/services/digital-marketing' },
      { name: 'SEARCH ENGINE OPTIMIZATION', href: '/services/seo' },
      { name: 'UI/UX DESIGN',               href: '/services/uiux' },
      { name: 'VIDEOGRAPHY',                href: '/services/videography' },
      { name: 'E-COMMERCE',                 href: '/services/e-commerce' },
    ],
  },
  {
    name: 'CASE STUDIES',
    href: '/case-studies',
    subMenu: [
      { name: 'Social Media Marketing / Meta Ads', href: '/case-studies/social-media-marketing-meta-ads' },
      { name: 'Videography',    href: '/case-studies/videography' },
      { name: 'Graphic Design', href: '/case-studies/graphic-design' },
      { name: 'Logo Design',    href: '/case-studies/logo-design' },
    ],
  },
  {
    name: 'COURSES',
    href: '/courses',
    subMenu: [
      { name: 'WEB DEVELOPMENT',            href: '/courses/web-development' },
      { name: 'DIGITAL MARKETING',          href: '/courses/digital-marketing' },
      { name: 'SEARCH ENGINE OPTIMIZATION', href: '/courses/seo' },
      { name: 'GRAPHIC DESIGN',             href: '/courses/graphic-designing' },
      { name: 'VIDEOGRAPHY',                href: '/courses/videography' },
      { name: 'E-COMMERCE',                 href: '/courses/e-commerce' },
    ],
  },
  { name: 'ABOUT US',   href: '/about-us' },
  { name: 'CONTACT US', href: '/contact-us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null)

  // ✅ useCallback prevents function recreation on every render
  const toggleMobileMenu = useCallback((name: string) =>
    setMobileOpenMenu((prev) => (prev === name ? null : name)), [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const isCoursesPage = pathname.startsWith('/courses')

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo — ✅ priority correct (above fold) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Deca_logo.png"
            alt="D'ECASOFT Logo"
            width={200}
            height={100}
            priority
            quality={85}  // ✅ was 100 — 85 is visually identical, ~30% smaller
            className="w-auto h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subMenu ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    href={link.href}
                    className={`hover:text-primary transition-colors ${
                      pathname.startsWith(link.href) && link.href !== '/' ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200 text-gray-500" />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`hover:text-primary transition-colors ${pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              )}

              {link.subMenu && (
                <>
                  <div className="absolute top-full left-0 hidden group-hover:block w-full h-3" />
                  <div className="absolute top-[calc(100%+0.75rem)] left-0 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-[250px] z-50">
                    {link.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block px-4 py-2.5 text-xs font-semibold hover:bg-red-50 hover:text-primary transition-colors border-l-2 ${
                          pathname === sub.href ? 'text-primary bg-red-50 border-primary' : 'border-transparent text-gray-600'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href={isCoursesPage ? '/courses' : '/contact'}
            className="hidden lg:block bg-primary hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors"
          >
            {isCoursesPage ? 'ENROLL NOW' : 'GET A QUOTE'}
          </Link>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}  // ✅ accessibility
          >
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay — ✅ only renders in DOM when needed via conditional */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] max-w-[88vw] bg-white z-[100] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}  // ✅ hide from screen readers when closed
      >
        <div className="flex justify-between items-center px-5 py-5 bg-gradient-to-r from-primary to-red-700">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/Deca_logo.png"
              alt="D'ECASOFT Logo"
              width={140}
              height={60}
              loading="lazy"   // ✅ Mobile logo in sidebar can be lazy
              className="w-auto h-8 object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="px-4 py-4 flex flex-col gap-1 overflow-y-auto flex-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className={`flex justify-between items-center rounded-lg px-3 transition-colors ${mobileOpenMenu === link.name ? 'bg-red-50' : ''}`}>
                <Link
                  href={link.href}
                  className={`flex-1 py-3.5 text-[15px] font-semibold tracking-wide transition-colors ${
                    pathname === link.href ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => !link.subMenu && closeMenu()}
                >
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button
                    onClick={() => toggleMobileMenu(link.name)}
                    aria-label={`Toggle ${link.name}`}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 text-gray-500 ${mobileOpenMenu === link.name ? 'rotate-180 text-primary' : ''}`}
                    />
                  </button>
                )}
              </div>

              {link.subMenu && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenMenu === link.name ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 pr-1 py-1 flex flex-col gap-0.5 mb-1">
                    {link.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`relative py-2.5 pl-4 pr-3 text-[13px] font-medium rounded-md border-l-2 transition-colors ${
                          pathname === sub.href
                            ? 'text-primary bg-red-50 border-primary font-semibold'
                            : 'border-gray-200 text-gray-500 hover:text-primary hover:bg-red-50 hover:border-primary'
                        }`}
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="px-4 py-4 border-t border-gray-100">
          <Link
            href={isCoursesPage ? '/courses' : '/contact'}
            className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3.5 rounded-lg text-center block shadow-md shadow-red-200 transition-colors"
            onClick={closeMenu}
          >
            {isCoursesPage ? 'ENROLL NOW' : 'GET A QUOTE'}
          </Link>
        </div>
      </div>
    </nav>
  )
}
