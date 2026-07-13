// export default function OurWorkPage() {
//   return (
//     <>
//       <style>{`
//         .cs-btn:hover { opacity: 0.85; }
//       `}</style>

//       <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
//         <div style={{ textAlign: 'center', padding: '2rem' }}>

//           {/* Icon */}
//           <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
//             <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="12" cy="12" r="11" stroke="#c0392b" strokeWidth="1.5" />
//               <path d="M12 6v6l4 2" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>

//           {/* Badge */}
//           <span style={{ display: 'inline-block', background: '#fff0ee', color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '1rem' }}>
//             Coming Soon
//           </span>

//           {/* Heading */}
//           <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '1rem' }}>
//             Our Courses Are On<br />Their Way
//           </h1>

//           {/* Subtext */}
//           <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 2rem' }}>
//             We&apos;re putting together our portfolio to showcase the amazing projects we&apos;ve built. Check back soon — great things are coming!
//           </p>

//           {/* Back home button */}
//           <a
//             href="/"
//             className="cs-btn"
//             style={{ display: 'inline-block', background: '#c0392b', color: '#fff', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'opacity 0.2s' }}
//           >
//             Back to Home
//           </a>

//         </div>
//       </main>
//     </>
//   )
// }

"use client";

import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const courses = [
  {
    title: "Web Development",
    desc: "Kickstart your journey in Web Development with this beginner-friendly course. Learn to build responsive, modern",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
    href: "/courses/web-development",
  },
  {
    title: "Social Media Marketing",
    desc: "This course is designed for individuals who want to grow their own or their clients'",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
    href: "/courses/social-media-marketing",
  },
  {
    title: "SEO (Search Engine Optimization)",
    desc: "✅ SEO Optimized Version This Course is ideal for anyone who wants to rank websites",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80",
    href: "/courses/seo",
  },
  {
    title: "Graphic Designing",
    desc: "Unlock your creative potential with our Graphic Designing Course, a complete guide to mastering visual",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80",
    href: "/courses/graphic-designing",
  },
  
  {
    title: "Digital Marketing",
    desc: "Unlock the skills to drive online success with our Digital Marketing Course. Learn how to",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    href: "/courses/digital-marketing",
  },
  {
    title: "Video Editing",
    desc: "Capture your story with professional videography services that create engaging, high-quality visuals for brands, events, and promotions.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    href: "/courses/business-development",
  },
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp * { box-sizing: border-box; }
        .cp-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Hero */
        .cp-hero {
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .cp-hero-bg {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80') center/cover no-repeat;
        }
        .cp-hero-overlay {
          position: absolute; inset: 0;
          background: rgba(160,30,20,0.72);
        }
        .cp-hero-content { position: relative; z-index: 1; color: ${WHITE}; padding: 3rem 1.5rem; max-width: 700px; }
        .cp-hero-content h1 { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; margin-bottom: 1rem; }
        .cp-hero-content p { font-size: 0.95rem; line-height: 1.8; opacity: 0.95; }

        /* Courses grid */
        .cp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem; }
        .cp-card { border: 1px solid ${BORDER}; border-radius: 10px; overflow: hidden; background: ${WHITE}; transition: box-shadow 0.2s; }
        .cp-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
        .cp-card img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .cp-card-body { padding: 1rem; }
        .cp-card-body h3 { font-size: 0.92rem; font-weight: 800; color: ${DARK}; margin-bottom: 8px; }
        .cp-card-body p { font-size: 0.8rem; color: ${GRAY_TEXT}; line-height: 1.6; margin-bottom: 12px; }
        .cp-read-more { font-size: 0.8rem; font-weight: 700; color: ${DARK}; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; border: 1px solid ${BORDER}; padding: 5px 14px; border-radius: 4px; transition: all 0.2s; }
        .cp-read-more:hover { background: ${RED}; color: ${WHITE}; border-color: ${RED}; }

        /* Tech CTA banner */
        .cp-tech-banner {
          background: url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80') center/cover no-repeat;
          position: relative;
          padding: 3.5rem 0;
        }
        .cp-tech-overlay { position: absolute; inset: 0; background: rgba(140,20,20,0.82); }
        .cp-tech-inner { position: relative; z-index: 1; max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .cp-tech-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.75rem 2rem; border-radius: 50px; font-weight: 700; font-size: 0.85rem; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; white-space: nowrap; }
        .cp-tech-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Boost section */
        .cp-boost { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .cp-boost-left { flex: 1 1 320px; }
        .cp-boost-right { flex: 0 0 280px; display: flex; align-items: center; justify-content: center; }

        /* Collab */
        .cp-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); padding: 4rem 0; position: relative; overflow: hidden; }
        .cp-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; position: relative; z-index: 1; }
        .cp-collab-btn { background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        @media (max-width: 1024px) { .cp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .cp-grid { grid-template-columns: 1fr; }
          .cp-tech-inner { flex-direction: column; text-align: center; }
          .cp-collab-inner { flex-direction: column; }
        }
      `}</style>

      <div className="cp" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section className="cp-hero">
          <div className="cp-hero-bg" />
          <div className="cp-hero-overlay" />
          <div className="cp-hero-content">
            <h1>Courses</h1>
            <p>
              At <strong>Decasofts,</strong> we provide industry-focused courses in technology, development, and digital
              innovation. Whether you&apos;re a beginner or a pro, our expert-led training offers hands-on learning
              with real-world applications. Take the next step toward a brighter future with us!
            </p>
          </div>
        </section>

        {/* ══ COURSES GRID ══ */}
        <section style={{ background: WHITE, padding: "5rem 0" }}>
          <div className="cp-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "0.8rem" }}>
                Let Us Transform Your Future With Expert-Led Courses.
              </h2>
              <p style={{ fontSize: "0.9rem", color: GRAY_TEXT, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
                <strong style={{ color: DARK }}>DecaSofts</strong> offers top-tier courses designed to equip you with in-demand digital skills.
                Explore our comprehensive learning paths and take a confident step toward mastering your career goals.
              </p>
            </div>
            <div className="cp-grid">
              {courses.map((c) => (
                <div key={c.title} className="cp-card">
                  <img src={c.img} alt={c.title} />
                  <div className="cp-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <Link href={c.href} className="cp-read-more">Read More →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TECH CTA BANNER ══ */}
        <section className="cp-tech-banner">
          <div className="cp-tech-overlay" />
          <div className="cp-tech-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", margin: 0 }}>
              Have a Blasting Tech start-up Idea?
            </h2>
            <Link href="/contact" className="cp-tech-btn">Get In Touch</Link>
          </div>
        </section>

        {/* ══ BOOST SECTION ══ */}
        <section style={{ background: WHITE, padding: "5rem 0" }}>
          <div className="cp-inner">
            <div className="cp-boost">
              <div className="cp-boost-left">
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  Discover How Our Courses Can Shape Your Future
                </p>
                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: DARK, lineHeight: 1.25, marginBottom: "2rem" }}>
                  Looking For High-Quality Courses To Boost Your Skills And Career?
                </h2>
                <Link
                  href="/contact-us"
                  style={{ display: "inline-block", border: `2px solid ${RED}`, color: RED, background: "transparent", padding: "0.75rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, transition: "all 0.2s" }}
                >
                  Enroll Now
                </Link>
              </div>
              <div className="cp-boost-right">
                {/* Dashboard illustration */}
                <div style={{ position: "relative", width: 260, height: 200 }}>
                  <div style={{ background: "#f0f4ff", borderRadius: 16, padding: "1.5rem", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", border: "4px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", background: WHITE, fontSize: "0.9rem", fontWeight: 800, color: DARK }}>25</div>
                    </div>
                    <div>
                      {[80, 55, 70, 40].map((w, i) => (
                        <div key={i} style={{ height: 8, background: i === 0 ? RED : "#e0e0e0", borderRadius: 4, marginBottom: 8, width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="cp-collab">
          <div className="cp-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we&apos;re here to elevate your business and enhance user experiences.
              </p>
            </div>
            <Link href="/contact-us" className="cp-collab-btn">Contact Us</Link>
          </div>
        </section>

      </div>
    </>
  );
}