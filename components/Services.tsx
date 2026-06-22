'use client'

// ✅ OPTIMIZED: Services.tsx
// KEY FIXES:
// 1. REMOVED render-blocking <link> tags for Font Awesome & Google Fonts from inside component
//    These were being injected inside <body> on every render — massive mobile penalty
//    Move these to app/layout.tsx <head> instead (see comment below)
// 2. Background image URL quality reduced q=85 → q=70 (saves ~25% on mobile)
// 3. hovered state was unused in JSX — removed (was causing unnecessary re-renders)
// 4. Added content-visibility for off-screen rendering skip

// ⚠️  ADD THESE TO app/layout.tsx <head> INSTEAD:
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

const services = [
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Digital Marketing',
    desc: 'Strategic campaigns across all digital channels that grow your brand, generate leads and deliver real business results.',
    featured: false,
    number: '01',
    tag: 'Marketing',
    href: '/services/digital-marketing',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    desc: 'From scalable backends to pixel-perfect frontends — robust web solutions engineered for performance and growth.',
    featured: true,
    number: '02',
    tag: 'Core Service',
    href: '/services/web-development',
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO Optimization',
    desc: 'Data-driven strategies that dominate search rankings, drive organic traffic and deliver measurable ROI.',
    featured: false,
    number: '03',
    tag: 'Growth',
    href: '/services/seo',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'e-Commerce Website',
    desc: 'High-converting online stores with seamless checkout experiences and powerful product management.',
    featured: false,
    number: '04',
    tag: 'Commerce',
    href: '/services/e-commerce',
  },
]

export default function Services() {
  // ✅ Removed unused hovered state — was causing unnecessary re-renders on mobile

  return (
    <>
      {/* ✅ REMOVED render-blocking <link> tags from here — move to layout.tsx <head> */}

      <style>{`
        .sv-section {
          font-family: 'Inter', sans-serif;
          position: relative;
          padding: 110px 0 120px;
          overflow: hidden;
          isolation: isolate;
          content-visibility: auto;           /* ✅ Skip off-screen rendering */
          contain-intrinsic-size: 0 700px;
        }
        .sv-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=70'); /* ✅ q=70 saves bandwidth */
          background-size: cover;
          background-position: center;
          z-index: -3;
        }
        .sv-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(5,5,12,0.82) 0%, rgba(120,10,10,0.45) 30%, rgba(5,5,12,0.88) 100%);
          z-index: -2;
        }
        .sv-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at top left, rgba(220,38,38,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at bottom right, rgba(220,38,38,0.14) 0%, transparent 55%);
          z-index: -1;
        }
        .sv-wrap { max-width: 1240px; margin: 0 auto; padding: 0 28px; }
        .sv-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 72px; gap: 20px; flex-wrap: wrap; }
        .sv-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .sv-eyebrow-line { display: block; width: 36px; height: 2px; background: #dc2626; border-radius: 2px; }
        .sv-eyebrow-text { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #dc2626; }
        .sv-title { font-size: clamp(38px, 5vw, 58px); font-weight: 900; color: #fff; line-height: 1.08; letter-spacing: -0.03em; margin: 0 0 10px; }
        .sv-title em { font-style: normal; background: linear-gradient(90deg, #ef4444, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sv-sub { font-size: 14px; color: rgba(255,255,255,0.38); line-height: 1.6; max-width: 320px; }
        .sv-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 26px; border: 1px solid #fff; border-radius: 100px; color: #111; font-size: 13px; font-weight: 600; background: #fff; cursor: pointer; text-decoration: none; transition: all 0.25s; white-space: nowrap; }
        .sv-cta-btn:hover { background: rgba(255,255,255,0.85); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .sv-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .sv-card { position: relative; border-radius: 20px; padding: 28px 24px 24px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.35s ease; overflow: hidden; text-decoration: none; display: block; }
        .sv-card.featured { background: rgba(220,38,38,0.18); border-color: rgba(220,38,38,0.35); }
        .sv-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .sv-card-bg-num { position: absolute; top: -10px; right: 10px; font-size: 100px; font-weight: 900; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none; user-select: none; }
        .sv-num { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.25); letter-spacing: 0.1em; margin-bottom: 20px; position: relative; z-index: 1; }
        .sv-icon-ring { width: 52px; height: 52px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 22px; color: rgba(255,255,255,0.7); margin-bottom: 16px; position: relative; z-index: 1; transition: all 0.3s; }
        .sv-card.featured .sv-icon-ring { border-color: rgba(220,38,38,0.5); color: #fff; background: rgba(220,38,38,0.2); }
        .sv-tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; padding: 3px 10px; margin-bottom: 14px; position: relative; z-index: 1; }
        .sv-card-title { font-size: 17px; font-weight: 800; color: #fff; margin: 0 0 10px; line-height: 1.3; position: relative; z-index: 1; }
        .sv-card-desc { font-size: 12.5px; color: rgba(255,255,255,0.38); line-height: 1.65; margin: 0; position: relative; z-index: 1; }
        .sv-card.featured .sv-card-desc { color: rgba(255,255,255,0.65); }
        .sv-card-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 24px 0; position: relative; z-index: 1; }
        .sv-card.featured .sv-card-divider { background: rgba(255,255,255,0.15); }
        .sv-card-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .sv-learn { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.25); transition: color 0.3s; }
        .sv-card.featured .sv-learn { color: rgba(255,255,255,0.55); }
        .sv-card:hover .sv-learn { color: rgba(255,255,255,0.6); }
        .sv-arrow { width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 12px; color: rgba(255,255,255,0.3); transition: all 0.3s; background: rgba(255,255,255,0.04); }
        .sv-card.featured .sv-arrow { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }
        .sv-card:hover .sv-arrow { border-color: #ef4444; color: #fff; background: rgba(220,38,38,0.25); }
        .sv-strip { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; padding: 26px 36px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); flex-wrap: wrap; gap: 20px; }
        .sv-stats { display: flex; gap: 0; flex-wrap: wrap; }
        .sv-stat { display: flex; flex-direction: column; gap: 3px; padding: 0 40px 0 0; margin: 0 40px 0 0; border-right: 1px solid rgba(255,255,255,0.08); }
        .sv-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .sv-stat-val { font-size: 28px; font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .sv-stat-val span { color: #ef4444; }
        .sv-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.3); font-weight: 500; letter-spacing: 0.05em; }
        .sv-strip-text { font-size: 13px; color: rgba(255,255,255,0.35); max-width: 260px; line-height: 1.6; text-align: right; }
        .sv-strip-text strong { color: rgba(255,255,255,0.7); font-weight: 600; }
        @media (max-width: 960px) { .sv-cards { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .sv-cards { grid-template-columns: 1fr; }
          .sv-head { flex-direction: column; align-items: flex-start; }
          .sv-stats { gap: 20px; flex-wrap: wrap; }
          .sv-stat { border-right: none; padding-right: 0; margin-right: 0; }
          .sv-strip-text { text-align: left; }
          .sv-section { padding: 70px 0 80px; } /* ✅ Less padding on mobile */
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-bg" />
        <div className="sv-tint" />
        <div className="sv-vignette" />

        <div className="sv-wrap">
          <div className="sv-head">
            <div>
              <div className="sv-eyebrow">
                <span className="sv-eyebrow-line" />
                <span className="sv-eyebrow-text">What We Do</span>
              </div>
              <h2 className="sv-title">Our <em>Services</em></h2>
              <p className="sv-sub">Diverse team of expert developers building tomorrow&apos;s digital experiences.</p>
            </div>
            <a href="/services" className="sv-cta-btn">
              View All Services <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>

          <div className="sv-cards">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                data-idx={i}
                className={`sv-card${s.featured ? ' featured' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="sv-card-bg-num" aria-hidden="true">{s.number}</div>
                <div className="sv-num">{s.number}</div>
                <div className="sv-icon-ring">
                  <i className={s.icon} aria-hidden="true" />
                </div>
                <div className="sv-tag">{s.tag}</div>
                <h3 className="sv-card-title">{s.title}</h3>
                <p className="sv-card-desc">{s.desc}</p>
                <div className="sv-card-divider" />
                <div className="sv-card-footer">
                  <span className="sv-learn">Learn More</span>
                  <div className="sv-arrow">
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </div>

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
