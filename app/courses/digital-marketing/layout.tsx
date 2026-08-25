import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Digital Marketing Course', description: 'Learn paid advertising, social media, content strategy, analytics, SEO, and conversion optimization through practical campaigns.', path: '/courses/digital-marketing' })
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
