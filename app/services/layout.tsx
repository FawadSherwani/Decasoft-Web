import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Digital Services',
  description: 'Explore connected web, mobile, e-commerce, design, video, SEO, and digital marketing services from D\'ECASOFT.',
  path: '/services',
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
