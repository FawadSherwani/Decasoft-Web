import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'Logo Design Portfolio', description: 'Browse distinctive logo and visual identity work created by D\'ECASOFT for businesses and growing brands.', path: '/case-studies/logo-design' })
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
