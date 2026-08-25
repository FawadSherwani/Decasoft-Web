// import type { Metadata } from 'next'

import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: 'Courses | Decasofts',
//   description: 'Portfolio of projects by Decasofts — coming soon.',
// }

// export default function CoursesLayout({ children }: { children: React.ReactNode }) {
//   return <>{children}</>
// }

import Navbar from "@/components/Navbar"
import { createPageMetadata } from '@/lib/seo'
// import Footer from "@/components/Footer"

export const metadata = createPageMetadata({
  title: 'Practical Digital Skills Courses',
  description: 'Build career-ready skills through practical courses in web development, marketing, design, UI/UX, video editing, and e-commerce.',
  path: '/courses',
})

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
