const testimonials = [
  {
    text: 'Vestibulum Finibus Tortor Nec Massa Lobortis, In Imperdiet Turpis Efficitur. Vestibulum Suscipit Tincidunt Risus A Vestibulum. Suspendisse Potenti. Vivamus Placerat Erat Velit. Et Ornare Neque Porta Nec. Sed Cursus Lacus Ut Feugiat Varius.',
    name: 'Mr. John Doe',
    role: 'Business Owner',
  },
  {
    text: 'Vestibulum Finibus Tortor Nec Massa Lobortis, In Imperdiet Turpis Efficitur. Vestibulum Suscipit Tincidunt Risus A Vestibulum. Suspendisse Potenti. Vivamus Placerat Erat Velit. Et Ornare Neque Porta Nec. Sed Cursus Lacus Ut Feugiat Varius.',
    name: 'Mr. John Doe',
    role: 'Business Owner',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-2">Client Feedback</p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            We Provide Our Clients With The Most Innovative<br />And Effective
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card bg-white shadow-lg rounded-xl p-8 relative">
              <div className="quote-icon absolute top-4 right-6">&ldquo;</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {t.name[4]}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
