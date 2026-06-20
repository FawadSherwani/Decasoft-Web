export default function Hero() {
  return (
    <section className="hero-bg min-h-[580px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Customer Focused.<br />
            Quality Driven&nbsp;&nbsp; ECommerce<br />
            Websites<span className="text-primary">.</span>
          </h1> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
  Customer Focused.<br />
  Quality Driven&nbsp;&nbsp; ECommerce<br />
  Websites<span className="text-primary">.</span>
</h1>
          <p className="text-gray-300 text-base mb-8 max-w-lg leading-relaxed">
            We Bind Together Creative Minds And Innovation To Assist Organizations With Filling In The Period Of Computerized Change.
          </p>
          <a href="https://calendly.com/decasofts-appointment/meeting" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-primary transition-all text-sm tracking-wide uppercase inline-block">
  Book a consultation
</a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex items-center gap-6">
          <div>
            <p className="text-gray-300 text-xs mb-1">Trusted By 200+ Enterprises And Startups</p>
            <p className="text-gray-400 text-xs">Top Software Development Company</p>
          </div>
          <div className="flex items-center gap-3">
            {[
              'fa-brands fa-google',
              'fa-solid fa-award',
              'fa-solid fa-star',
            ].map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <i className={`${icon} text-white text-lg`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
