import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Videography & Video Editing Portfolio', description: 'Watch selected brand films, commercials, event coverage, and edited video projects produced by D\'ECASOFT.', path: '/case-studies/videography' })
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
