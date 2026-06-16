'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X } from 'lucide-react'

// const navLinks = [
//   { name: 'HOME', href: '/' },
//   { name: 'ABOUT US', href: '/about' },
//   { name: 'OUR WORK', href: '/work' },
//   { 
//     name: 'SERVICE', 
//     href: '/services', 
//     subMenu: [{ name: 'VIDEOGRAPHY', href: '/services/videography' }]
//     subMenu: [{ name: 'VIDEOGRAPHY1', href: '/services/videography1' }] 
//   },
//   { name: 'CASE STUDIES', href: '/case-studies' },
//   { name: 'CONTACT US', href: '/contact' }
// ]
const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'OUR WORK', href: '/work' },
  { 
    name: 'SERVICES', 
    href: '/services', 
    subMenu: [
      { name: 'WEB DEVELOPMENT', href: '/services/web-development' },
      { name: 'DIGITAL MARKETING', href: '/services/digital-marketing' },
      { name: 'SEO OPTIMIZATION', href: '/services/seo-optimization' },
      { name: 'UI/UX DESIGN', href: '/services/ui-ux-design' },
      { name: 'VIDEOGRAPHY', href: '/services/videography' },
    ]
  },
  { name: 'CASE STUDIES', href: '/case-studies' },
  { name: 'CONTACT US', href: '/contact' }
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Deca_logo.png" alt="D'ECASOFT Logo" width={200} height={100} priority quality={100} className="w-auto h-12 object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                <Link href={link.href}>{link.name}</Link>
                {link.subMenu && <ChevronDown size={16} />}
              </div>
              {link.subMenu && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-100 rounded py-2 min-w-[200px]">
                  {link.subMenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="block px-4 py-2 hover:bg-gray-50 hover:text-primary text-xs">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Button + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:block bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 rounded transition-colors">GET A QUOTE</button>
          
          {/* Original Hamburger Icon */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
           <button onClick={() => setIsOpen(false)}><X size={28} className="text-gray-700"/></button>
        </div>
        
        <div className="px-6 py-4 flex flex-col gap-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center">
                <Link href={link.href} className="text-lg font-medium text-gray-600" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}>
                    <ChevronDown size={20} className={`transition-transform text-gray-500 ${isMobileServiceOpen ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {link.subMenu && isMobileServiceOpen && (
                <div className="pl-4 mt-3 flex flex-col gap-3">
                  {link.subMenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="text-base text-gray-500 font-normal" onClick={() => setIsOpen(false)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8">
            <button className="w-full bg-primary text-white font-semibold py-3 rounded">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </nav>
  )
}