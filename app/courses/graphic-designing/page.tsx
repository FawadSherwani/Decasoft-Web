'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const relatedCourses = [
  {
    title: 'SEO (Search Engine Optimization)',
    desc: 'SEO Optimized Version – This course is perfect for anyone who wants to rank websites on Google.',
    href: '/courses/seo',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80',
  },
  {
    title: 'Freelancing',
    desc: 'This freelancing course is designed for individuals who want to start their online career.',
    href: '/courses/freelancing',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
  },
  {
    title: 'Business Development',
    desc: 'This Business Development Course is perfect for anyone who wants to grow their business.',
    href: '/courses/business',
    img: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=400&q=80',
  },
  {
    title: 'Shopify Store Development',
    desc: 'A complete, hands-on program designed to teach you how to build and launch Shopify stores.',
    href: '/courses/shopify',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
  },
  {
    title: 'Digital Marketing',
    desc: 'Master digital marketing strategies including social media, email, and paid ads.',
    href: '/courses/digital-marketing',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
  },
  {
    title: 'UI/UX Design',
    desc: 'Learn user interface and experience design using Figma and modern design principles.',
    href: '/courses/uiux',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
  },
]

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  batch: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function GraphicDesigningCoursePage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    batch: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const { firstName, lastName, email, phone, course, batch, message } = formData

    if (!firstName || !lastName || !email || !phone || !course || !batch || !message) {
      alert('Please fill in all fields.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '', batch: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
    }
  }

  const inputClass = "w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"

  return (
    <main className="bg-white text-gray-800">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-5 leading-tight">
            Graphic Designing
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
            Learn the art of visual storytelling with our Graphic Designing Course. Master tools
            like Photoshop and Illustrator, create stunning designs, and build a portfolio that
            stands out — perfect for beginners and creatives alike!
          </p>
          <Link
            href="#enroll"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded transition-colors text-sm"
          >
            ENROLL NOW
          </Link>
        </div>

        <div className="flex-1 relative">
          <Image
            src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=700&q=80"
            alt="Graphic Designing Course"
            width={600}
            height={420}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
          <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
            {['PS', 'AI', 'ID', 'XD'].map((t) => (
              <span key={t} className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-14">
        <div className="flex-1 text-sm leading-relaxed text-gray-700 space-y-5">
          <p>
            Unlock your creative potential with our{' '}
            <strong className="text-primary">Graphic Designing Course</strong>, a complete guide
            to mastering visual communication. Whether you&apos;re starting from scratch or
            enhancing your existing skills, this course teaches the tools, techniques, and design
            principles needed to create stunning visuals for <strong>digital</strong> and print.
          </p>

          <div>
            <p className="font-bold text-gray-800 mb-2">What You&apos;ll Learn:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Core design principles: color theory, typography, layout, and composition</li>
              <li>Mastery of tools like Adobe Photoshop, Illustrator, and InDesign</li>
              <li>Designing logos, posters, brochures, social media content, and brand identities</li>
              <li>Introduction to UI/UX for modern web and mobile design</li>
              <li>Building a professional portfolio and freelancing tips</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Why Choose This Course:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Hands-on projects and real-world assignments</li>
              <li>Taught by experienced, professional designers</li>
              <li>Beginner-friendly step-by-step lessons</li>
              <li>Access to downloadable templates and resources</li>
              <li>Certificate of completion and portfolio-worthy projects</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Who Should Enroll Graphic Designing:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Aspiring graphic designers</li>
              <li>Content creators, marketers, and entrepreneurs</li>
              <li>Students and professionals learning visual design</li>
              <li>Anyone looking to improve their creative appearance</li>
            </ul>
          </div>

          <p className="font-bold text-gray-900">
            By the end of this course, you&apos;ll be equipped to create{' '}
            <strong>professional, eye-catching designs</strong> that communicate effectively and
            elevate your brand.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80"
            alt="Graphic designer working"
            width={580}
            height={420}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            Related Course
          </h2>

          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              ‹
            </button>

            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {relatedCourses.map((course) => (
                <div
                  key={course.title}
                  className="min-w-[240px] max-w-[240px] bg-white border border-gray-100 rounded-xl shadow-sm flex-shrink-0 overflow-hidden"
                >
                  <div className="relative h-36">
                    <Image
                      src={course.img}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-1 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-3">
                      {course.desc}
                    </p>
                    <Link
                      href={course.href}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Why Decasofts + Form */}
      <section id="enroll" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-2xl overflow-hidden">

          {/* Left - Why */}
          <div className="p-10 text-white">
            <h3 className="text-xl font-extrabold mb-6">Why Decasofts?</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                '10+ years of industry experience',
                'ISO 27001-certified for quality service',
                'Over 50+ certified developers',
                '500+ Successful Projects',
                'Multiple award-winning agency',
                'Result-oriented approach',
                'Certified by Clutch.co & G2.com',
                'AWS Certified Engineers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-primary text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 border border-white text-white text-xs font-bold px-6 py-2.5 rounded hover:bg-white hover:text-gray-900 transition-colors">
              BOOK A FREE CONSULTATION
            </button>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500">We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* Row 1: First Name + Last Name */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputClass} />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                  </div>
                </div>

                {/* Row 3: Course + Batch */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
                    <select name="course" value={formData.course} onChange={handleChange} className={inputClass}>
                      <option value="">Select Course</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Graphic Designing">Graphic Designing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Videography">Videography</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Freelancing">Freelancing</option>
                      <option value="Shopify Store Development">Shopify Store Development</option>
                      <option value="Business Development">Business Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Batch</label>
                    <select name="batch" value={formData.batch} onChange={handleChange} className={inputClass}>
                      <option value="">Select Batch</option>
                      <option value="Morning Batch">Morning Batch</option>
                      <option value="Evening Batch">Evening Batch</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={3} className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500 mb-3">Something went wrong. Please try again.</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-[#bf2227] hover:bg-[#a51d21] disabled:opacity-60 text-white font-semibold py-3 rounded text-sm transition-colors"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Collaboration Banner */}
      <section className="bg-primary mx-6 lg:mx-auto max-w-7xl rounded-2xl mb-16 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 gap-8">
          <div className="text-white flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-80">
              Collaboration
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
              Did you get stuck in something?
              <br />
              Lets Collaborate &amp; Conquer :
            </h2>
            <p className="text-sm text-red-100 leading-relaxed max-w-md">
              Our creative team specializes in solving all your digital challenges. With the expertise
              of our UI/UX consultants, we&apos;re here to elevate your business and enhance user
              experiences.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
              alt="Collaboration"
              width={220}
              height={220}
              className="rounded-full object-cover w-40 h-40 border-4 border-white/30"
            />
            <Link
              href="/contact"
              className="bg-white text-primary font-bold px-8 py-3 rounded-full text-sm hover:bg-red-50 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}