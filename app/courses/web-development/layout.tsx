import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Web Development Course', description: 'Learn HTML, CSS, JavaScript, WordPress, responsive design, and practical website development through hands-on projects.', path: '/courses/web-development' })
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
