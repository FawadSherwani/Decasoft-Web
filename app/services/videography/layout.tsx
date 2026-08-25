import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Videography Services', description: 'Professional brand films, commercial video, corporate production, event coverage, and post-production services.', path: '/services/videography' })
export default function VideographyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
