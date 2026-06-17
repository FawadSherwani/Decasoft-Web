import Link from 'next/link'
import Image from 'next/image'

const services = ['Web Design', 'Web Development', 'Ecommerce Website', 'Digital Marketing']
const company = ['Home', 'About Us', 'Our Work', 'Service', 'Case Studies', 'Payment']
const support = ['Contact Us', 'Privacy Policy', 'Terms Of Use']
const social = [
  { icon: 'fa-brands fa-facebook', label: 'Facebook' },
  { icon: 'fa-brands fa-twitter', label: 'Twitter' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout change: grid columns ko adjust kiya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/Deca-Logo-white.png" 
                  alt="D'ECASOFT Logo" 
                  width={200} 
                  height={100} 
                  className="w-auto h-12 object-contain" 
                />
              </Link>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Decasoft At Custom Design And Front End Development. We Love Taking On Design Challenges That
              Require Full-On Content Strategy, Thoughtful Design, Demanding Development, And Ongoing Marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {services.map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {company.map((c) => (
                <li key={c}><a href="#" className="hover:text-primary transition-colors">{c}</a></li>
              ))}
            </ul>
          </div>

          {/* Support & Follow Us */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {support.map((s) => (
                  <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                {social.map((s) => (
                  <a key={s.label} href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <i className={`${s.icon}`}></i> 
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">Copyright &copy; 2026 Decasoft. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}