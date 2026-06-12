'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false) // Mobile ke liye alag state

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Deca_logo.png" alt="D'ECASOFT Logo" width={200} height={100} priority quality={100} className="w-auto h-12 object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href} className="nav-link hover:text-primary transition-colors">
                {link.name}
              </Link>
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

        {/* Hamburger Button */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <span className="block h-0.5 w-6 bg-gray-700 mb-1.5" />
          <span className="block h-0.5 w-6 bg-gray-700 mb-1.5" />
          <span className="block h-0.5 w-6 bg-gray-700" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subMenu ? (
                <button 
                  onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                  className="w-full text-left font-semibold text-gray-700 flex justify-between items-center"
                >
                  {link.name} <span>{isMobileServiceOpen ? '▲' : '▼'}</span>
                </button>
              ) : (
                <Link href={link.href} className="block font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              )}
              
              {/* Mobile Submenu */}
              {link.subMenu && isMobileServiceOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-gray-200">
                  {link.subMenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}