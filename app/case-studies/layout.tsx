import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Digital Project Case Studies',
  description: 'See D\'ECASOFT client work across websites, performance marketing, graphic design, branding, and video production.',
  path: '/case-studies',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
