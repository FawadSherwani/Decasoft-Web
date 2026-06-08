const services = [
  {
    icon: 'fa-solid fa-pen-nib',
    title: 'Web Design',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
    featured: false,
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
    featured: true,
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Seo Optimization',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
    featured: false,
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'Ecommerce Website',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
    featured: false,
  },
]

export default function Services() {
  return (
    <section className="services-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-white">Our Services</h2>
          <p className="text-gray-400 text-sm mt-2">Diverse Team Of Expert Developers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card rounded-xl p-6 card-hover transition-all ${
                service.featured
                  ? 'bg-primary border border-primary'
                  : 'bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20'
              }`}
            >
              <div className="service-icon text-white text-3xl mb-4 transition-colors">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className={`text-xs leading-relaxed ${service.featured ? 'text-red-100' : 'text-gray-300'}`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
