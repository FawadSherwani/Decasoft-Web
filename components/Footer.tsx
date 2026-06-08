const services = ['Web Design', 'Web Development', 'Ecommerce Website', 'Digital Marketing']
const company = ['Home', 'About Us', 'Our Work', 'Service', 'Case Studies']
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <span className="font-black text-xl text-white">
                DECA<span className="text-primary">SOFT</span>.
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Msnsoft Excels At Custom Design And Front End Development. We Love Taking On Design Challenges That
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

          {/* Support + Social */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              {support.map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-3">Follow Us</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              {social.map((s) => (
                <a key={s.label} href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <i className={`${s.icon} w-4`}></i> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">Copyright &copy; 2024 Decasoft. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
