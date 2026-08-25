import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Website Development Case Studies', description: 'Explore website design and development projects delivered by D\'ECASOFT for businesses across industries.', path: '/case-studies/website-development' })
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
