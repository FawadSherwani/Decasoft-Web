'use client'

import Image from 'next/image'
import { useState } from 'react'

const allCaseStudies = [
  {
    title: '360 Finest',
    category: 'Web Development',
    desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: 'KBRE',
    category: 'Web Development',
    desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
    tags: ['Web Development', ' ', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
    bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
  },
  {
    title: 'THE SNORKEL STORE',
    category: 'e-Commerce',
    desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
    tags: ['e-Commerce', 'Shopify', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: 'PROJECT ALPHA',
    category: 'UI/UX Design',
    desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
    tags: ['UI/UX', 'Figma', 'React'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
    bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
  },
  {
    title: 'PROJECT BETA',
    category: 'SEO Optimization',
    desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
    tags: ['SEO', 'Analytics', 'Content'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
    bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
  },
  {
    title: 'PROJECT GAMMA',
    category: 'Digital Marketing',
    desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
    tags: ['Marketing', 'Social Media', 'Ads'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
    bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
  },
  {
    title: 'DOCTORFINDY',
    category: 'Web Development',
    desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: 'MOHKM',
    category: 'Digital Marketing',
    desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
    tags: ['Web Development', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
    bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
  },
  {
    title: 'THE SNORKEL STORE',
    category: 'e-Commerce',
    desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
    tags: ['e-Commerce', 'Shopify', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: 'PROJECT ALPHA',
    category: 'UI/UX Design',
    desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
    tags: ['UI/UX', 'Figma', 'React'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
    bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
  },
  {
    title: 'PROJECT BETA',
    category: 'SEO Optimization',
    desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
    tags: ['SEO', 'Analytics', 'Content'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
    bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
  },
  {
    title: 'PROJECT GAMMA',
    category: 'Digital Marketing',
    desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
    tags: ['Marketing', 'Social Media', 'Ads'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
    bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
  },
  {
    title: 'DOCTORFINDY',
    category: 'Web Development',
    desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: '360 Finest',
    category: 'Web Design & Development',
    desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
    tags: ['Web Development', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
    bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
  },
  {
    title: 'THE SNORKEL STORE',
    category: 'e-Commerce',
    desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
    tags: ['e-Commerce', 'Shopify', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
  },
  {
    title: 'PROJECT ALPHA',
    category: 'UI/UX Design',
    desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
    tags: ['UI/UX', 'Figma', 'React'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
    bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
  },
  {
    title: 'PROJECT BETA',
    category: 'SEO Optimization',
    desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
    tags: ['SEO', 'Analytics', 'Content'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
    bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
  },
  {
    title: 'PROJECT GAMMA',
    category: 'Digital Marketing',
    desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
    tags: ['Marketing', 'Social Media', 'Ads'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
    bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
  },
]

const ITEMS_PER_PAGE = 12

export default function CaseStudies() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allCaseStudies.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentItems = allCaseStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-primary text-sm font-semibold mb-1">
            Learn How We Can Make A Real Impact
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            Our <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md">
            Check out some of the impactful work we&apos;ve done for our clients across various industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentItems.map((study, i) => (
            <div key={i} className={`${study.bg} rounded-2xl p-6 text-white`}>

              <p className={`text-xs font-bold tracking-widest ${study.textColor} mb-3`}>
                {study.title}
              </p>

              <span className={`text-xs ${study.tagBg} px-2 py-0.5 rounded mb-3 inline-block`}>
                {study.category}
              </span>

              <p className={`text-xs ${study.descColor} leading-relaxed mb-4`}>
                {study.desc}
              </p>

              <div className="flex gap-1 mb-4 flex-wrap">
                {study.tags.map((tag, j) => (
                  <span key={j} className={`text-xs ${study.tagBg} px-2 py-0.5 rounded`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`${study.imgBg} rounded-xl overflow-hidden h-[160px] relative`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>

            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">

          {/* Prev button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'border-2 border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>

        </div>

        {/* Page info */}
        <p className="text-center text-gray-400 text-xs mt-4">
          Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, allCaseStudies.length)} of {allCaseStudies.length} projects
        </p>

      </div>
    </section>
  )
}