import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Course',
  description: 'Learn Figma, user research, wireframing, prototyping, usability testing, and portfolio building through practical UI/UX projects.',
  alternates: { canonical: '/courses/uiux' },
}

export default function UiUxCourseLayout({ children }: { children: React.ReactNode }) {
  return children
}
