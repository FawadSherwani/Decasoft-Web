import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Video Editing Course', description: 'Learn professional editing, pacing, sound, color, motion graphics, and platform-ready video production through practical work.', path: '/courses/videography' })
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
