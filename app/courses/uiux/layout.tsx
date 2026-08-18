import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Course | Decasofts',
  description: 'Learn Figma, user research, wireframing, prototyping, usability testing, and portfolio building through practical UI/UX projects.',
}

export default function UiUxCourseLayout({ children }: { children: React.ReactNode }) {
  return children
}
