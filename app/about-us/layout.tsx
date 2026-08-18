import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About D'ECASOFT | Strategy, Design & Technology",
  description: 'Meet the team helping businesses grow through connected strategy, design, technology, and digital marketing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
