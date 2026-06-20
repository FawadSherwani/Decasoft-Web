// const services = [
//   {
//     icon: 'fa-solid fa-pen-nib',
//     title: 'Web Design',
//     desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
//     featured: false,
//   },
//   {
//     icon: 'fa-solid fa-code',
//     title: 'Web Development',
//     desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
//     featured: true,
//   },
//   {
//     icon: 'fa-solid fa-magnifying-glass-chart',
//     title: 'Seo Optimization',
//     desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
//     featured: false,
//   },
//   {
//     icon: 'fa-solid fa-cart-shopping',
//     title: 'Ecommerce Website',
//     desc: 'In web technologies, your website is the first entity that interacts with the visitor. So your website should speak.',
//     featured: false,
//   },
// ]

// export default function Services() {
//   return (
//     <section className="services-bg py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-10">
//           <h2 className="text-3xl font-black text-white">Our Services</h2>
//           <p className="text-gray-400 text-sm mt-2">Diverse Team Of Expert Developers.</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className={`service-card rounded-xl p-6 card-hover transition-all ${
//                 service.featured
//                   ? 'bg-primary border border-primary'
//                   : 'bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20'
//               }`}
//             >
//               <div className="service-icon text-white text-3xl mb-4 transition-colors">
//                 <i className={service.icon}></i>
//               </div>
//               <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
//               <p className={`text-xs leading-relaxed ${service.featured ? 'text-red-100' : 'text-gray-300'}`}>
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'

const services = [
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Digital Marketing',
    desc: 'Strategic campaigns across all digital channels that grow your brand, generate leads and deliver real business results.',
    featured: false,
    number: '01',
    tag: 'Marketing',
    color: '#6366f1',
    href: '/services/digital-marketing',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    desc: 'From scalable backends to pixel-perfect frontends — robust web solutions engineered for performance and growth.',
    featured: true,
    number: '02',
    tag: 'Core Service',
    color: '#dc2626',
    href: '/services/web-development',
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO Optimization',
    desc: 'Data-driven strategies that dominate search rankings, drive organic traffic and deliver measurable ROI.',
    featured: false,
    number: '03',
    tag: 'Growth',
    color: '#10b981',
    href: '/services/seo',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'e-Commerce Website',
    desc: 'High-converting online stores with seamless checkout experiences and powerful product management.',
    featured: false,
    number: '04',
    tag: 'Commerce',
    color: '#f59e0b',
    href: '/services/e-commerce',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        .sv-section {
          font-family: 'Inter', sans-serif;
          position: relative;
          padding: 110px 0 120px;
          overflow: hidden;
          isolation: isolate;
        }

        /* background image */
        .sv-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=85');
          background-size: cover;
          background-position: center;
          z-index: -3;
        }

        /* dark tint so image is visible but text is readable */
        .sv-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(5,5,12,0.82) 0%,
            rgba(120,10,10,0.45) 30%,
            rgba(5,5,12,0.88) 100%
          );
          z-index: -2;
        }

        /* subtle red vignette corners */
        .sv-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at top left,  rgba(220,38,38,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at bottom right, rgba(220,38,38,0.14) 0%, transparent 55%);
          z-index: -1;
        }

        .sv-wrap {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ── HEADER ── */
        .sv-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 72px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .sv-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .sv-eyebrow-line {
          display: block;
          width: 36px;
          height: 2px;
          background: #dc2626;
          border-radius: 2px;
        }
        .sv-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #dc2626;
        }

        .sv-title {
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 900;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 10px;
        }
        .sv-title em {
          font-style: normal;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sv-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.38);
          line-height: 1.6;
          max-width: 320px;
        }

        .sv-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border: 1px solid #fff;
          border-radius: 100px;
          color: #111;
          font-size: 13px;
          font-weight: 600;
          background: #fff;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .sv-cta-btn:hover {
          background: rgba(255,255,255,0.85);
          border-color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .sv-cta-btn i { font-size: 11px; transition: transform 0.25s; }
        .sv-cta-btn:hover i { transform: translateX(3px); }

        .sv-card-link {
          display: contents;
          text-decoration: none;
          color: inherit;
        }
        .sv-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        /* ── SINGLE CARD ── */
        .sv-card {
          position: relative;
          border-radius: 20px;
          padding: 36px 28px 32px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .sv-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.0) 60%);
          pointer-events: none;
        }

        /* glow on hover */
        .sv-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .sv-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.3); }
        .sv-card:hover::after { opacity: 1; }

        /* per-card glow colors */
        .sv-card[data-idx="0"]::after { box-shadow: inset 0 0 0 1px rgba(99,102,241,0.5), 0 20px 60px -10px rgba(99,102,241,0.25); }
        .sv-card[data-idx="1"]::after { box-shadow: inset 0 0 0 1px rgba(220,38,38,0.6),  0 20px 60px -10px rgba(220,38,38,0.35); }
        .sv-card[data-idx="2"]::after { box-shadow: inset 0 0 0 1px rgba(16,185,129,0.5), 0 20px 60px -10px rgba(16,185,129,0.25); }
        .sv-card[data-idx="3"]::after { box-shadow: inset 0 0 0 1px rgba(245,158,11,0.5), 0 20px 60px -10px rgba(245,158,11,0.25); }

        /* featured card special treatment */
        .sv-card.featured {
          background: rgba(220,38,38,0.12);
          border-color: rgba(220,38,38,0.35);
        }
        .sv-card.featured::before {
          background: linear-gradient(145deg, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.0) 60%);
        }

        /* big decorative number behind content */
        .sv-card-bg-num {
          position: absolute;
          bottom: -10px;
          right: 10px;
          font-size: 120px;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: rgba(255,255,255,0.025);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: color 0.3s;
        }
        .sv-card:hover .sv-card-bg-num { color: rgba(255,255,255,0.05); }
        .sv-card.featured .sv-card-bg-num { color: rgba(220,38,38,0.1); }

        /* small number label */
        .sv-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.2);
          margin-bottom: 28px;
          transition: color 0.3s;
        }
        .sv-card.featured .sv-num { color: rgba(255,255,255,0.4); }

        /* icon */
        .sv-icon-ring {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
        }
        .sv-card.featured .sv-icon-ring {
          background: rgba(220,38,38,0.25);
          border-color: rgba(220,38,38,0.4);
        }
        .sv-card:hover .sv-icon-ring { transform: scale(1.08) rotate(-4deg); }

        .sv-icon-ring i {
          font-size: 22px;
          color: rgba(255,255,255,0.55);
          transition: color 0.3s;
        }
        .sv-card.featured .sv-icon-ring i { color: #fff; font-size: 24px; }
        .sv-card[data-idx="0"]:hover .sv-icon-ring i { color: #818cf8; }
        .sv-card[data-idx="1"]:hover .sv-icon-ring i { color: #fff; }
        .sv-card[data-idx="2"]:hover .sv-icon-ring i { color: #34d399; }
        .sv-card[data-idx="3"]:hover .sv-icon-ring i { color: #fbbf24; }

        /* tag */
        .sv-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          margin-bottom: 7px;
          position: relative;
          z-index: 1;
        }
        .sv-card.featured .sv-tag { color: rgba(255,255,255,0.5); }

        .sv-card-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 14px;
          position: relative;
          z-index: 1;
        }
        .sv-card.featured .sv-card-title { font-size: 20px; }

        .sv-card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.38);
          margin: 0;
          flex: 1;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .sv-card.featured .sv-card-desc { color: rgba(255,255,255,0.65); }
        .sv-card:hover .sv-card-desc { color: rgba(255,255,255,0.55); }

        /* divider */
        .sv-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 24px 0;
          position: relative;
          z-index: 1;
          transition: background 0.3s;
        }
        .sv-card.featured .sv-card-divider { background: rgba(255,255,255,0.15); }
        .sv-card[data-idx="0"]:hover .sv-card-divider { background: rgba(99,102,241,0.3); }
        .sv-card[data-idx="1"]:hover .sv-card-divider { background: rgba(220,38,38,0.4); }
        .sv-card[data-idx="2"]:hover .sv-card-divider { background: rgba(16,185,129,0.3); }
        .sv-card[data-idx="3"]:hover .sv-card-divider { background: rgba(245,158,11,0.3); }

        /* arrow row */
        .sv-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .sv-learn {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          transition: color 0.3s;
        }
        .sv-card.featured .sv-learn { color: rgba(255,255,255,0.55); }
        .sv-card:hover .sv-learn { color: rgba(255,255,255,0.6); }

        .sv-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.04);
        }
        .sv-card.featured .sv-arrow {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.08);
        }
        .sv-card[data-idx="0"]:hover .sv-arrow { border-color: #6366f1; color: #818cf8; background: rgba(99,102,241,0.12); }
        .sv-card[data-idx="1"]:hover .sv-arrow { border-color: #ef4444; color: #fff;    background: rgba(220,38,38,0.25); }
        .sv-card[data-idx="2"]:hover .sv-arrow { border-color: #10b981; color: #34d399; background: rgba(16,185,129,0.12); }
        .sv-card[data-idx="3"]:hover .sv-arrow { border-color: #f59e0b; color: #fbbf24; background: rgba(245,158,11,0.12); }

        /* ── STATS STRIP ── */
        .sv-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          padding: 26px 36px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          flex-wrap: wrap;
          gap: 20px;
        }
        .sv-stats { display: flex; gap: 0; flex-wrap: wrap; }
        .sv-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 0 40px 0 0;
          margin: 0 40px 0 0;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .sv-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .sv-stat-val {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .sv-stat-val span { color: #ef4444; }
        .sv-stat-lbl {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        .sv-strip-text {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          max-width: 260px;
          line-height: 1.6;
          text-align: right;
        }
        .sv-strip-text strong { color: rgba(255,255,255,0.7); font-weight: 600; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .sv-cards { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .sv-cards { grid-template-columns: 1fr; }
          .sv-head { flex-direction: column; align-items: flex-start; }
          .sv-stats { gap: 20px; flex-wrap: wrap; }
          .sv-stat { border-right: none; padding-right: 0; margin-right: 0; }
          .sv-strip-text { text-align: left; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-bg" />
        <div className="sv-tint" />
        <div className="sv-vignette" />

        <div className="sv-wrap">

          {/* Header */}
          <div className="sv-head">
            <div>
              <div className="sv-eyebrow">
                <span className="sv-eyebrow-line" />
                <span className="sv-eyebrow-text">What We Do</span>
              </div>
              <h2 className="sv-title">Our <em>Services</em></h2>
              <p className="sv-sub">Diverse team of expert developers building tomorrow's digital experiences.</p>
            </div>
            <a href="/services" className="sv-cta-btn">
              View All Services <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          {/* Cards */}
          <div className="sv-cards">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                data-idx={i}
                className={`sv-card${s.featured ? ' featured' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ textDecoration: 'none' }}
              >
                <div className="sv-card-bg-num">{s.number}</div>
                <div className="sv-num">{s.number}</div>
                <div className="sv-icon-ring">
                  <i className={s.icon} />
                </div>
                <div className="sv-tag">{s.tag}</div>
                <h3 className="sv-card-title">{s.title}</h3>
                <p className="sv-card-desc">{s.desc}</p>
                <div className="sv-card-divider" />
                <div className="sv-card-footer">
                  <span className="sv-learn">Learn More</span>
                  <div className="sv-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Stats Strip */}
          <div className="sv-strip">
            <div className="sv-stats">
              <div className="sv-stat">
                <div className="sv-stat-val">600 <span>+</span></div>
                <div className="sv-stat-lbl">Projects Delivered</div>
              </div>
              <div className="sv-stat">
                <div className="sv-stat-val">7 <span>+</span></div>
                <div className="sv-stat-lbl">Years Experience</div>
              </div>
              <div className="sv-stat">
                <div className="sv-stat-val">600 <span>+</span></div>
                <div className="sv-stat-lbl">Happy Clients</div>
              </div>
            </div>
            <p className="sv-strip-text">
              <strong>Based in Dubai.</strong> Working with startups, SMEs, and large enterprises worldwide.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}