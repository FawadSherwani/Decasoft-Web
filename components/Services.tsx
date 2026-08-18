import {
  Target,
  MonitorSmartphone,
  Palette,
  Share2,
  ShoppingCart,
  Smartphone,
  Video,
  Megaphone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    desc: "Fast, responsive and SEO-friendly websites designed to convert visitors into customers.",
    href: "/services/web-development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Grow your online presence with coordinated campaigns that attract, engage and convert.",
    href: "/services/digital-marketing",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Development",
    desc: "Launch a fast, secure online store designed to simplify shopping and increase sales.",
    href: "/services/e-commerce",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Build reliable, user-friendly mobile apps tailored to your customers and business goals.",
    href: "/services/mobile-app-development",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    desc: "Stand out with memorable logos, brand identities and visuals created for every platform.",
    href: "/services/graphic-desiging",
  },
  {
    icon: Target,
    title: "Google Ads",
    desc: "Drive high-quality traffic and maximize returns with smart Google Ads campaigns.",
    href: "/services/digital-marketing",
  },
  {
    icon: Video,
    title: "Videography",
    desc: "Tell your story with professional video production that captures attention and builds trust.",
    href: "/services/videography",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Nurture leads and increase sales with high-converting email marketing campaigns.",
    href: "/services/digital-marketing",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
          OUR SERVICES
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Smart Solutions. <span className="text-brand">Real Results.</span>
        </h2>
        <p className="mt-3 text-[15px] text-ink/55">
          We offer a complete range of digital marketing services to help
          your business grow and dominate online.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc, href }) => (
          <div
            key={title}
            className="group rounded-xl border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(227,30,43,0.4)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[15px] font-bold text-ink">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
              {desc}
            </p>
            <Link
              href={href}
              className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand/30 text-brand transition group-hover:bg-brand group-hover:text-white"
              aria-label={`Learn more about ${title}`}
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
