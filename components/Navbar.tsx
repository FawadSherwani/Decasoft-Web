'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react' // Icon import kiya

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'OUR WORK', href: '/work' },
  { 
    name: 'SERVICE', 
    href: '/services', 
    subMenu: [{ name: 'VIDEOGRAPHY', href: '/services/videography' }] 
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
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-100 rounded py-2 min-w-[150px]">
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
          <button className="hidden lg:block bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 rounded transition-colors">
            GET A QUOTE
          </button>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-4 pt-2 flex flex-col gap-1 border-t border-gray-100">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center px-3 py-2.5 rounded hover:bg-gray-50">
                <Link href={link.href} className="text-sm font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}>
                    <ChevronDown size={18} className={`transition-transform ${isMobileServiceOpen ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {link.subMenu && isMobileServiceOpen && (
                <div className="pl-6 pb-2">
                  {link.subMenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="block py-2 text-sm text-primary font-medium" onClick={() => setIsOpen(false)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 px-3">
            <button className="w-full bg-primary text-white text-sm font-bold px-6 py-3 rounded">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </nav>
  )
}