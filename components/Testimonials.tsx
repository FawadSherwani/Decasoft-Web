// "use client";

// import { useState, useEffect } from "react";

// const testimonials = [
//   {
//     text: 'We hired Decasofts for digital marketing services, and the results were excellent. Their campaigns helped us reach a wider audience and grow our online presence effectively.',
//     name: 'Liam Smith',
//     role: 'UK',
//   },
//   {
//     text: "Decasofts built our company's website, and it turned out fantastic. The design is modern, user-friendly, and responsive. Their team was professional and delivered on time.",
//     name: 'Emily Johnson',
//     role: 'USA',
//   },
//   {
//     text: 'Decasofts did an amazing job on our website. Their team was very professional and understood exactly what we needed. Our new site looks great and works perfectly on all devices!',
//     name: 'Jason L.',
//     role: 'Client',
//   },
//   {
//     text: 'Decasofts handled our digital marketing with complete professionalism. Their SEO and social media campaigns brought visible growth. We noticed higher traffic and better engagement within weeks. A reliable and result-driven agency.',
//     name: 'James Wilson',
//     role: 'Canada',
//   },
//   {
//     text: 'We needed fresh branding and graphic design work. Decasofts delivered stunning logos, banners, and visuals. They perfectly captured our brand identity in every design. Very satisfied with their creativity and service.',
//     name: 'Anna Rossi',
//     role: 'Italy',
//   },
//   {
//     text: "Our experience with Decasofts was smooth and professional. They handled our website development and SEO perfectly. We're seeing improved traffic and customer engagement.",
//     name: 'Mateo García',
//     role: 'Spain',
//   },
//   {
//     text: 'Working with Decasofts was a great experience. They developed a beautiful, responsive website for our business. Their team was cooperative, creative, and quick to respond. I highly recommend their web development services.',
//     name: 'Olivia Brown',
//     role: 'Australia',
//   },
// ]

// // group into pairs — 2 cards per slide, same as your grid-cols-2
// const slides = []
// for (let i = 0; i < testimonials.length; i += 2) {
//   slides.push(testimonials.slice(i, i + 2))
// }

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0)

//   // auto scroll every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <p className="text-primary text-sm font-semibold mb-2">Client Feedback</p>
//           <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
//             We Provide Our Clients With The Most Innovative<br />And Effective
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Slide track */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((pair, slideIdx) => (
//                 <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {pair.map((t, i) => (
//                     <div key={i} className="testimonial-card bg-white shadow-lg rounded-xl p-8 relative">
//                       <div className="quote-icon absolute top-4 right-6">&ldquo;</div>
//                       <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.text}</p>
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
//                           {t.name[0]}
//                         </div>
//                         <div>
//                           <p className="font-bold text-sm text-gray-900">{t.name}</p>
//                           <p className="text-xs text-gray-400">{t.role}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-8">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`w-2.5 h-2.5 rounded-full border border-primary transition-colors ${
//                 current === i ? 'bg-primary' : 'bg-white'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    text: 'We hired Decasofts for digital marketing services, and the results were excellent. Their campaigns helped us reach a wider audience and grow our online presence effectively.',
    name: 'Liam Smith',
    role: 'UK',
  },
  {
    text: "Decasofts built our company's website, and it turned out fantastic. The design is modern, user-friendly, and responsive. Their team was professional and delivered on time.",
    name: 'Emily Johnson',
    role: 'USA',
  },
  {
    text: 'Decasofts did an amazing job on our website. Their team was very professional and understood exactly what we needed. Our new site looks great and works perfectly on all devices!',
    name: 'Jason L.',
    role: 'Client',
  },
  {
    text: 'Decasofts handled our digital marketing with complete professionalism. Their SEO and social media campaigns brought visible growth. We noticed higher traffic and better engagement within weeks. A reliable and result-driven agency.',
    name: 'James Wilson',
    role: 'Canada',
  },
  {
    text: 'We needed fresh branding and graphic design work. Decasofts delivered stunning logos, banners, and visuals. They perfectly captured our brand identity in every design. Very satisfied with their creativity and service.',
    name: 'Anna Rossi',
    role: 'Italy',
  },
  {
    text: "Our experience with Decasofts was smooth and professional. They handled our website development and SEO perfectly. We're seeing improved traffic and customer engagement.",
    name: 'Mateo García',
    role: 'Spain',
  },
  {
    text: 'Working with Decasofts was a great experience. They developed a beautiful, responsive website for our business. Their team was cooperative, creative, and quick to respond. I highly recommend their web development services.',
    name: 'Olivia Brown',
    role: 'Australia',
  },
]

// group into pairs — 2 cards per slide, same as your grid-cols-2
const slides: typeof testimonials[] = []
for (let i = 0; i < testimonials.length; i += 2) {
  slides.push(testimonials.slice(i, i + 2))
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // auto scroll every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-2">Client Feedback</p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            We Provide Our Clients With The Most Innovative<br />And Effective
          </h2>
        </div>

        <div className="relative">
          {/* Slide track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((pair, slideIdx) => (
                <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pair.map((t, i) => (
                    <div
                      key={i}
                      className="testimonial-card bg-white rounded-xl p-8 relative"
                      style={{
                        // boxShadow: "-4px 0 0 0 rgba(0,0,0,0.3)",
                        borderLeft: "4px solid #c0392b",
                      }}
                    >
                      <div className="quote-icon absolute top-4 right-6">&ldquo;</div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.text}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-400">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full border border-primary transition-colors ${
                current === i ? 'bg-primary' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}