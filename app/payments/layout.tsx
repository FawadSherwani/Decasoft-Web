import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Secure Payments',
  description: 'Make a secure online payment to D\'ECASOFT for approved services, projects, and training invoices.',
  path: '/payments',
})

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

