import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left – image grid */}
        <div className="relative grid grid-cols-2 gap-3">
          
          {/* Red badge – top left */}
          <div className="bg-primary rounded-xl p-5 flex flex-col justify-center items-start min-h-[140px]">
            <i className="fa-solid fa-trophy text-white text-3xl mb-2"></i>
            <p className="text-white font-bold text-base leading-tight">10 Years<br />Experience</p>
            <p className="text-red-200 text-xs mt-1">Lorem ipsum dolor</p>
          </div>

          {/* Chart image – top right */}
          <div className="rounded-xl overflow-hidden min-h-[140px] relative">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
              alt="chart"
              fill
              className="object-cover"
            />
          </div>

          {/* Team image – bottom full width with Marketing overlay card */}
          <div className="col-span-2 rounded-xl overflow-hidden min-h-[200px] relative">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="team"
              fill
              className="object-cover"
            />
            {/* Marketing overlay card */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg max-w-[180px]">
              <p className="text-primary font-black text-xs tracking-widest uppercase mb-1">Marketing</p>
              <div className="flex gap-1 flex-wrap">
                {['BRANDING', 'ANALYTICS', 'SEO'].map((tag) => (
                  <span key={tag} className="text-[9px] bg-primary/10 text-primary font-semibold px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Chat with us button – bottom center */}
          <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-full px-5 py-2.5 flex items-center gap-2 border border-gray-100 z-10 whitespace-nowrap">
            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
            <span className="text-sm font-semibold text-gray-700">
              Need Help?{' '}
              <span className="text-xs font-normal text-gray-500">Chat with us</span>
            </span>
          </div>
        </div>

        {/* Right – text */}
        <div className="pt-6">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide">About Us</p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
            Decasofts Is An{' '}
            <span className="text-primary underline decoration-wavy decoration-primary/40">
              Award-Winning
            </span>{' '}
            Custom Software And Web Development Company Based In Dubai.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            With over 10 years of experience in the industry, we have established ourselves as a trusted partner
            for startups, small and medium-sized businesses, and large enterprises in Canada and beyond.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            With over 10 years of experience in the industry, we have established ourselves as a trusted partner
            for startups.
          </p>
        </div>

      </div>
    </section>
  )
}