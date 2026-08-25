import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    'Brand identity, social media creatives, marketing collateral, packaging, and digital design services that make businesses memorable.',
  alternates: { canonical: '/services/graphic-desiging' },
}

export default function GraphicDesigningLayout({ children }: { children: React.ReactNode }) {
  return children
}
