import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Graphic Design Portfolio', description: 'Browse branding, campaign creative, packaging, social media design, and marketing collateral produced by D\'ECASOFT.', path: '/case-studies/graphic-design' })
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
