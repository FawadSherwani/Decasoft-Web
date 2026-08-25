import { createPageMetadata } from '@/lib/seo'
export const metadata = createPageMetadata({ title: 'E-commerce & Shopify Course', description: 'Learn store setup, product sourcing, branding, paid ads, fulfillment, analytics, and e-commerce growth through practical training.', path: '/courses/e-commerce' })
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
