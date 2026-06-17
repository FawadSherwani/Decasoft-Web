'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'HOME', href: '/' },  
  { name: 'OUR WORK', href: '/our-work' },
  { 
    name: 'SERVICES', 
    href: '/services', 
    subMenu: [
      { name: 'WEB DEVELOPMENT',  href: '/services/web-development' },
      { name: 'DIGITAL MARKETING', href: '/services/digital-marketing' },
      { name: 'SEARCH ENGINE OPTIMIZATION', href: '/services/seo' },
      { name: 'UI/UX DESIGN',    href: '/services/uiux' },
      { name: 'VIDEOGRAPHY',     href: '/services/videography' },
      { name: 'E-COMMERCE',      href: '/services/e-commerce' },
    ]
  },
  { name: 'CASE STUDIES', href: '/case-studies' },
  { name: 'COURSES', href: '/courses' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'CONTACT US',   href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Deca_logo.png"
            alt="D'ECASOFT Logo"
            width={200}
            height={100}
            priority
            quality={100}
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
                      pathname.startsWith('/services') ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-200 text-gray-500"
                  />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`hover:text-primary transition-colors ${
                    pathname === link.href ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* ── Dropdown ── */}
              {link.subMenu && (
                <>
                  {/*
                    Invisible bridge: fills the gap between the nav item and the
                    dropdown panel so the mouse never leaves the group area.
                    pt-2 on the panel itself is replaced by this bridge + no mt.
                  */}
                  <div className="absolute top-full left-0 hidden group-hover:block w-full h-3" />

                  <div
                    className="
                      absolute top-[calc(100%+0.75rem)] left-0 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-[250px] z-50
                    "
                  >
                    {link.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`
                          block px-4 py-2.5 text-xs font-semibold
                          hover:bg-red-50 hover:text-primary
                          transition-colors border-l-2
                          ${
                            pathname === sub.href
                              ? 'text-primary bg-red-50 border-primary'
                              : 'border-transparent text-gray-600'
                          }
                        `}
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
            href="/contact"
            className="hidden lg:block bg-primary hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors"
          >
            GET A QUOTE
          </Link>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          fixed inset-0 bg-white z-[100]
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/Deca_logo.png"
              alt="D'ECASOFT Logo"
              width={140}
              height={60}
              className="w-auto h-9 object-contain"
            />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        <div className="px-6 py-4 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <Link
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href ? 'text-primary' : 'text-gray-600'
                  }`}
                  onClick={() => !link.subMenu && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button
                    onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                    aria-label="Toggle services"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform text-gray-500 ${
                        isMobileServiceOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {link.subMenu && isMobileServiceOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1 bg-gray-50 rounded-lg my-1">
                  {link.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`py-2.5 px-3 text-sm font-medium rounded transition-colors ${
                        pathname === sub.href
                          ? 'text-primary bg-red-50 font-semibold'
                          : 'text-gray-600 hover:text-primary hover:bg-red-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6">
            <Link
              href="/contact"
              className="w-full bg-primary text-white font-semibold py-3 rounded text-center block"
              onClick={() => setIsOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}