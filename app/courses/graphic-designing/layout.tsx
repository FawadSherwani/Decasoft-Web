import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Graphic Design Course', description: 'Learn visual design, branding, typography, social media creative, and portfolio development with practical design projects.', path: '/courses/graphic-designing' })
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
