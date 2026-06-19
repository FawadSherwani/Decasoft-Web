import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Web Development',            href: '/services/web-development' },
  { name: 'Digital Marketing',          href: '/services/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/services/seo' },
  { name: 'Videography',                href: '/services/videography' },
  { name: 'E-Commerce',                 href: '/services/e-commerce' },
]

const courses = [
  { name: 'Web Development',            href: '/courses/web-development' },
  { name: 'Digital Marketing',          href: '/courses/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/courses/seo' },
  { name: 'Videography',                href: '/courses/videography' },
  { name: 'E-Commerce',                 href: '/courses/e-commerce' },
]

const company = [
  { name: 'Home',         href: '/' },
  { name: 'About Us',     href: '/about' },
  { name: 'Our Work',     href: '/work' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact Us',   href: '/contact' },
]

const support = [
  { name: 'Contact Us',     href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms Of Use',   href: '/terms' },
  { name: 'Payments',  href: '/payments' },
  { name: 'FAQ',  href: '/faq' }
]

const social = [
  { icon: 'fa-brands fa-facebook',  label: 'Facebook',  href: '#' },
  { icon: 'fa-brands fa-twitter',   label: 'Twitter',   href: '#' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: '#' },
  { icon: 'fa-brands fa-linkedin',  label: 'LinkedIn',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Deca-Logo-white.png"
                alt="D'ECASOFT Logo"
                width={200}
                height={100}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Decasoft specializes in custom design and front-end development. We love taking on
              design challenges that require full-on content strategy, thoughtful design, demanding
              development, and ongoing marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {courses.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Follow Us */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {support.map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} className="hover:text-primary transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="hover:text-primary transition-colors text-base"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            Copyright &copy; 2026 Decasoft. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}