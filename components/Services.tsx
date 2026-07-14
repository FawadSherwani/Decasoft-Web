'use client'

// ✅ REDESIGNED (v3 — refined from original card-grid structure, not the asymmetric layout)
// WHAT CHANGED FROM THE ORIGINAL:
// 1. Background: real photo kept, but treatment upgraded — darker cinematic grade +
//    subtle red rim-light instead of flat tint, feels less "stock photo with overlay".
// 2. Cards: glassmorphism upgrade — frosted blur + inner top highlight line so they read
//    as physical panels floating over the photo, not flat tinted boxes.
// 3. Icon rings now have a soft rotating conic-gradient ring on hover (signature detail).
// 4. Number badges (01-04) moved to a cleaner corner-chip style instead of giant faint
//    background numerals (those read as generic template filler).
// 5. Title now has a thin animated underline accent instead of plain gradient text only.
// 6. Stat strip redesigned as 3 compact glass tiles instead of one long bar.

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
  return (
    <>
      <style>{`
        .sv-section {
          font-family: 'Inter', sans-serif;
          position: relative;
          padding: 110px 0 120px;
          overflow: hidden;
          isolation: isolate;
          content-visibility: auto;
          contain-intrinsic-size: 0 700px;
        }
        .sv-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=70');
          background-size: cover;
          background-position: center;
          z-index: -4;
          filter: saturate(0.85) contrast(1.05);
        }
        .sv-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(4,4,9,0.92) 0%, rgba(90,8,8,0.5) 32%, rgba(4,4,9,0.94) 100%);
          z-index: -3;
        }
        .sv-rim {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 900px 500px at 8% -5%, rgba(220,38,38,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 700px 500px at 95% 105%, rgba(220,38,38,0.18) 0%, transparent 60%);
          z-index: -2;
        }
        .sv-grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.35) 100%);
        }

        .sv-wrap { max-width: 1240px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }
        .sv-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 72px; gap: 20px; flex-wrap: wrap; }
        .sv-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .sv-eyebrow-line { display: block; width: 36px; height: 2px; background: #dc2626; border-radius: 2px; }
        .sv-eyebrow-text { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #dc2626; }

        .sv-title { font-size: clamp(38px, 5vw, 58px); font-weight: 900; color: #fff; line-height: 1.08; letter-spacing: -0.03em; margin: 0 0 14px; position: relative; display: inline-block; }
        .sv-title em { font-style: normal; background: linear-gradient(90deg, #ef4444, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; position: relative; }
        .sv-title em::after {
          content: '';
          position: absolute;
          left: 2px; right: 2px; bottom: 2px;
          height: 3px;
          background: linear-gradient(90deg, #ef4444, transparent);
          border-radius: 2px;
        }
        .sv-sub { font-size: 14px; color: rgba(255,255,255,0.42); line-height: 1.6; max-width: 320px; }
        .sv-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 26px; border: 1px solid #fff; border-radius: 100px; color: #111; font-size: 13px; font-weight: 600; background: #fff; cursor: pointer; text-decoration: none; transition: all 0.25s; white-space: nowrap; }
        .sv-cta-btn:hover { background: rgba(255,255,255,0.85); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

        .sv-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .sv-card {
          position: relative;
          border-radius: 20px;
          padding: 28px 24px 24px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          cursor: pointer;
          transition: all 0.35s ease;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }
        .sv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 16px; right: 16px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        }
        .sv-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.2); transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.4); }

        .sv-card.featured { background: rgba(220,38,38,0.16); border-color: rgba(220,38,38,0.4); }
        .sv-card.featured:hover { box-shadow: 0 24px 55px rgba(220,38,38,0.3); }

        .sv-chip { position: absolute; top: 20px; right: 20px; font-size: 10.5px; font-weight: 800; color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 3px 8px; letter-spacing: 0.05em; z-index: 1; }
        .sv-card.featured .sv-chip { color: rgba(255,255,255,0.8); background: rgba(220,38,38,0.25); border-color: rgba(220,38,38,0.5); }

        .sv-icon-ring {
          width: 52px; height: 52px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.14);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; color: rgba(255,255,255,0.75);
          margin-bottom: 18px; position: relative; z-index: 1;
          transition: all 0.3s;
          background: rgba(255,255,255,0.03);
        }
        .sv-icon-ring::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 15px;
          padding: 1px;
          background: conic-gradient(from 0deg, transparent, transparent);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .sv-card:hover .sv-icon-ring::before {
          opacity: 1;
          background: conic-gradient(from 0deg, #ef4444, transparent 40%, transparent 60%, #ef4444);
          animation: sv-spin 2.4s linear infinite;
        }
        @keyframes sv-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .sv-card:hover .sv-icon-ring::before { animation: none; } }

        .sv-card.featured .sv-icon-ring { border-color: rgba(220,38,38,0.55); color: #fff; background: rgba(220,38,38,0.22); }

        .sv-tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; padding: 3px 10px; margin-bottom: 14px; position: relative; z-index: 1; }
        .sv-card-title { font-size: 17px; font-weight: 800; color: #fff; margin: 0 0 10px; line-height: 1.3; position: relative; z-index: 1; }
        .sv-card-desc { font-size: 12.5px; color: rgba(255,255,255,0.42); line-height: 1.65; margin: 0; position: relative; z-index: 1; }
        .sv-card.featured .sv-card-desc { color: rgba(255,255,255,0.7); }
        .sv-card-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 24px 0; position: relative; z-index: 1; }
        .sv-card.featured .sv-card-divider { background: rgba(255,255,255,0.18); }
        .sv-card-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .sv-learn { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.3); transition: color 0.3s; }
        .sv-card.featured .sv-learn { color: rgba(255,255,255,0.6); }
        .sv-card:hover .sv-learn { color: rgba(255,255,255,0.65); }
        .sv-arrow { width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.14); display: flex; align-items: center; justify-content: center; font-size: 12px; color: rgba(255,255,255,0.35); transition: all 0.3s; background: rgba(255,255,255,0.04); }
        .sv-card.featured .sv-arrow { border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.1); }
        .sv-card:hover .sv-arrow { border-color: #ef4444; color: #fff; background: rgba(220,38,38,0.3); transform: translateX(3px); }

        .sv-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
        .sv-stat-tile {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 16px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .sv-stat-icon { width: 38px; height: 38px; border-radius: 11px; background: rgba(220,38,38,0.16); border: 1px solid rgba(220,38,38,0.3); display: flex; align-items: center; justify-content: center; font-size: 15px; color: #ef4444; flex-shrink: 0; }
        .sv-stat-val { font-size: 26px; font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .sv-stat-val span { color: #ef4444; }
        .sv-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 500; letter-spacing: 0.04em; margin-top: 3px; }

        .sv-note { margin-top: 22px; font-size: 13px; color: rgba(255,255,255,0.32); text-align: center; }
        .sv-note strong { color: rgba(255,255,255,0.6); font-weight: 600; }

        .sv-card:focus-visible, .sv-cta-btn:focus-visible { outline: 2px solid #ef4444; outline-offset: 3px; }

        @media (max-width: 960px) { .sv-cards { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .sv-cards { grid-template-columns: 1fr; }
          .sv-stats { grid-template-columns: 1fr; }
          .sv-head { flex-direction: column; align-items: flex-start; }
          .sv-section { padding: 70px 0 80px; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-bg" />
        <div className="sv-tint" />
        <div className="sv-rim" />
        <div className="sv-grain" />

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
                <div className="sv-chip">{s.number}</div>
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

          <div className="sv-stats">
            <div className="sv-stat-tile">
              <div className="sv-stat-icon"><i className="fa-solid fa-diagram-project" aria-hidden="true" /></div>
              <div>
                <div className="sv-stat-val">600<span>+</span></div>
                <div className="sv-stat-lbl">Projects Delivered</div>
              </div>
            </div>
            <div className="sv-stat-tile">
              <div className="sv-stat-icon"><i className="fa-solid fa-calendar" aria-hidden="true" /></div>
              <div>
                <div className="sv-stat-val">7<span>+</span></div>
                <div className="sv-stat-lbl">Years Experience</div>
              </div>
            </div>
            <div className="sv-stat-tile">
              <div className="sv-stat-icon"><i className="fa-solid fa-face-smile" aria-hidden="true" /></div>
              <div>
                <div className="sv-stat-val">600<span>+</span></div>
                <div className="sv-stat-lbl">Happy Clients</div>
              </div>
            </div>
          </div>

          <p className="sv-note"><strong>Based in Dubai.</strong> Working with startups, SMEs, and large enterprises worldwide.</p>
        </div>
      </section>
    </>
  )
}