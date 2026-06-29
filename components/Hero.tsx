export default function Hero() {
  return (
    <section className="hero-bg min-h-[480px] sm:min-h-[580px] flex items-center">
      {/* ✅ Preload hint for hero background image - add this in your layout.tsx <head> too:
          <link rel="preload" as="image" href="/hero-bg.jpg" fetchpriority="high" />
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="max-w-2xl">
          {/* ✅ H1 font-size mobile pe 2xl se start */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
            Customer Focused.<br />
            Quality Driven&nbsp;&nbsp; ECommerce<br />
            Websites<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg leading-relaxed">
            We Bind Together Creative Minds And Innovation To Assist Organizations With Filling In The Period Of Computerized Change.
          </p>
          {/* ✅ Full width on mobile, inline on larger screens */}
          <a
            href="https://calendly.com/decasofts-appointment/meeting"
            target="_blank"
            rel="noopener noreferrer"
            className=" hvr-shutter-out-horizontal block sm:inline-block text-center border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-primary transition-all text-sm tracking-wide uppercase trans-btn"
          >
            Book a consultation
          </a>
        </div>

        {/* ✅ Stack vertically on mobile, row on larger screens */}
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div>
            <p className="text-gray-300 text-xs mb-1">Trusted By 200+ Enterprises And Startups</p>
            <p className="text-gray-400 text-xs">Top Software Development Company</p>
          </div>
          <div className="flex items-center gap-3">
            {['fa-brands fa-google', 'fa-solid fa-award', 'fa-solid fa-star'].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <i className={`${icon} text-white text-base sm:text-lg`} aria-hidden="true"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}