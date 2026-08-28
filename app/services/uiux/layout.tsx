import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description:
    "Professional UI/UX design services by Decasofts — wireframing, prototyping, user research, and visual design across Pakistan and the UAE.",
  alternates: { canonical: '/services/uiux' },
};

export default function UIUXLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
