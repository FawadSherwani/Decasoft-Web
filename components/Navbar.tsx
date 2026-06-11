'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // 1. Image component import karein

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'OUR WORK', href: '/work' },
  { name: 'SERVICE', href: '/services' },
  { name: 'CASE STUDIES', href: '/case-studies' },
  { name: 'CONTACT US', href: '/contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Updated Logo Section */}
<Link href="/" className="flex items-center gap-2">
  <Image 
    src="/Deca_logo.png" 
    alt="D'ECASOFT Logo" 
    width={200}         // Width barha dein (browser ise automatically resize kar lega)
    height={100}        // Height barha dein
    priority            // Yeh image ko load hone mein priority deta hai
    quality={100}       // Highest quality ensure karne ke liye
    className="w-auto h-12 object-contain" // Height adjust karein (h-10 se h-12)
  />
</Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="nav-link hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: GET A QUOTE + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 rounded transition-colors">
            GET A QUOTE
          </button>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 pt-2 flex flex-col gap-1 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 px-3 py-2.5 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}