import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Video Editing Services', description: 'Professional editing, motion graphics, color, sound, and social video production designed to hold audience attention.', path: '/services/video-editing' })
export default function VideographyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
