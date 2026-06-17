import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses | Decasofts',
  description: 'Portfolio of projects by Decasofts — coming soon.',
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}