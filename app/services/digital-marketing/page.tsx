"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const HERO_IMG    = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
const SECTION_IMG = "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80";
const REVIEW_IMG  = "/Group-9392.png";

// ── Icons ──────────────────────────────────────────────────────────
const IconSEO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconPPC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
  </svg>
);
const IconSMM = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconBulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
  </svg>
);
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

// ── Counter ────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function CounterItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCounter(value, 2000, started);
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ display: "block", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, color: RED, lineHeight: 1 }}>{count}{suffix}</span>
      <span style={{ display: "block", fontSize: 14, color: GRAY_TEXT, marginTop: 8 }}>{label}</span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function DigitalMarketingPage() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCounterStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (counterRef.current) obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  const inner: React.CSSProperties = { maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" };
  const col50: React.CSSProperties = { flex: "0 0 calc(50% - 1.5rem)", minWidth: 280 };

  return (
    <>
      <style>{`
        .dm * { box-sizing: border-box; }

        /* Feature cards */
        .dm-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .dm-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 12px; border: 1px solid ${BORDER}; border-radius: 12px; padding: 1.6rem; background: ${WHITE}; }
        .dm-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; }
        .dm-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; }
        .dm-feat-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
        .dm-feat-card ul li { font-size: 0.82rem; color: #444; display: flex; align-items: flex-start; gap: 8px; line-height: 1.5; }
        .dm-feat-card ul li::before { content: "•"; color: ${RED}; font-weight: 700; font-size: 16px; flex-shrink: 0; margin-top: -1px; }

        /* Process */
        .dm-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .dm-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .dm-proc-card { flex: 1 1 140px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .dm-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .dm-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; }

        /* Checklist */
        .dm-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .dm-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .dm-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .dm-testi-grid { display: grid; grid-template-columns: 200px 1fr 1fr 1fr; gap: 1.2rem; align-items: start; }
        .dm-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; }
        .dm-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .dm-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA */
        .dm-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
        .dm-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .dm-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; }
        .dm-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab */
        .dm-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .dm-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }

        /* Icon box */
        .icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        @media (max-width: 900px) {
          .dm-testi-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .dm-testi-grid { grid-template-columns: 1fr; }
          .dm-cta-inner { flex-direction: column; text-align: center; }
          .dm-collab-inner { flex-direction: column; }
        }
      `}</style>

      <div className="dm" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section style={{ background: LIGHT_BG, padding: "5rem 0 4rem" }}>
          <div style={inner}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
              <div style={col50}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                  Digital Marketing Services
                </p>
                <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
                  Decasofts – Data-Driven Digital Marketing for Maximum Growth
                </h1>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                  At Decasofts, we specialize in digital marketing strategies that boost brand visibility, increase traffic, and drive conversions. From SEO and PPC to social media and content marketing, our expert solutions help businesses grow and succeed in the digital world. Partner with Decasofts and take your business to the next level!
                </p>
                <Link
                  href="/contact"
                  style={{ display: "inline-block", background: RED, color: WHITE, padding: "0.8rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div style={col50}>
                <img
                  src={HERO_IMG}
                  alt="Digital Marketing"
                  style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS (3 services) ══ */}
        <section style={{ background: WHITE, padding: "5rem 0" }}>
          <div style={inner}>
            <div className="dm-features">
              {[
                {
                  icon: <IconSEO />,
                  title: "Search Engine Optimization (SEO)",
                  desc: "Use SEO to make your website more visible. To help the right people find your business, we optimize keywords, raise rankings, and increase organic traffic.",
                  subTitle: "Our Services Include:",
                  bullets: [
                    "Improves website ranking on search engines like Google",
                    "Focuses on organic traffic through keyword optimization, backlinks, and technical improvements",
                    "Includes on-page SEO (content optimization), off-page SEO (link building), and technical SEO (site performance)",
                  ],
                },
                {
                  icon: <IconPPC />,
                  title: "Pay-Per-Click Advertising (PPC)",
                  desc: "Use PPC ads to instantly reach targeted customers. Utilize social media and Google ads to generate qualified leads while optimizing return on investment with data-driven campaigns customized for your company.",
                  subTitle: "Our Features Include:",
                  bullets: [
                    "Paid on platforms like Google Ads, Facebook Ads, or LinkedIn",
                    "Advertisers pay each time a user clicks their ad",
                    "Delivers quick results and highly targeted campaigns",
                  ],
                },
                {
                  icon: <IconSMM />,
                  title: "Social Media Marketing (SMM)",
                  desc: "Develop your brand and interact with audiences on LinkedIn, Instagram, and Facebook. To increase awareness and sales, we write powerful posts, run advertisements, and expand your following.",
                  subTitle: "Our Key Features:",
                  bullets: [
                    "Promotes business through platforms like Facebook, Instagram, LinkedIn, Twitter, TikTok",
                    "Involves content creation, engagement, community building, and paid ads",
                    "Boosts brand awareness and builds customer relationships",
                  ],
                },
              ].map((f) => (
                <div key={f.title} className="dm-feat-card">
                  <div className="icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: DARK, margin: 0 }}>{f.subTitle}</p>
                  <ul>
                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0" }}>
          <div style={inner}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
              <div style={col50}>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "1rem", lineHeight: 1.2 }}>
                  Digital Marketing Tailored for Business Growth
                </h2>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "0.5rem" }}>
                  Decasofts offers results-oriented digital marketing tactics that make your company stand out on the Internet. Across all platforms, our services raise visibility, draw in qualified leads, and boost conversions.
                </p>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: DARK, marginBottom: "0.5rem" }}>Our Approach Includes:</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6, marginBottom: "1.5rem" }}>
                  {[
                    "Data-driven SEO for higher rankings and organic growth",
                    "Targeted PPC campaigns for instant traffic and leads",
                    "Engaging social media strategies to grow your audience",
                    "Compelling content marketing to build trust and authority",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.85rem", color: "#444", display: "flex", gap: 8 }}>
                      <span style={{ color: RED, fontWeight: 700 }}>•</span> {item}
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.5rem" }}>
                  Digital Marketing for Maximum Growth
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "0.5rem" }}>
                  Decasofts creates strategic digital marketing campaigns that draw in the right audiences, raise brand awareness, and produce quantifiable outcomes. Our solutions are centered on efficiently increasing sales, leads, and engagement.
                </p>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: DARK, marginBottom: "0.5rem" }}>Our Performance Optimization Includes:</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "SEO strategies for higher search engine rankings",
                    "Targeted PPC ads to drive instant traffic and leads",
                    "Engaging social media campaigns to grow your audience",
                    "Data-driven analysis for better conversions and ROI",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.85rem", color: "#444", display: "flex", gap: 8 }}>
                      <span style={{ color: RED, fontWeight: 700 }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={col50}>
                <img
                  src={SECTION_IMG}
                  alt="Digital Marketing Growth"
                  style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 420, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section style={{ background: WHITE, padding: "4rem 0" }} ref={counterRef}>
          <div style={inner}>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={150} suffix="+" label="Delivered Successful Projects" started={counterStarted} />
              <CounterItem value={4}   suffix="+" label="Years of Experience"           started={counterStarted} />
              <CounterItem value={11}  suffix="+" label="Team Members"                  started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section style={{ background: LIGHT_BG, padding: "5rem 0" }}>
          <div style={inner}>
            <div className="dm-process">
              <div style={{ flex: "1 1 260px" }}>
                <h2 style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
                  Digital Marketing – The Key to Your Brand's Online Success
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  Decasofts creates effective digital marketing programs that draw in the right customers, increase brand awareness, and produce quantifiable outcomes. Credibility, engagement, and business success are all improved by our solutions.
                </p>
              </div>
              <div className="dm-proc-cards">
                {[
                  { icon: <IconSearch />, title: "Understanding Market Challenges", desc: "To find opportunities and challenges, we examine audience behavior and industry trends. Our objective is to develop strategies that help your company overcome challenges and experience quantifiable growth." },
                  { icon: <IconBulb />,   title: "Building a Strong Brand Presence", desc: "To build your brand, our team creates distinctive campaigns using paid advertisements, social media, and SEO. Having a strong online presence helps you stand out from the competition and establish enduring credibility." },
                  { icon: <IconTarget />, title: "Results-Driven Marketing Strategies", desc: "We implement targeted campaigns across multiple channels. From SEO to PPC and content marketing, our strategies drive traffic, generate quality leads, and improve your ROI consistently." },
                ].map((p) => (
                  <div key={p.title} className="dm-proc-card">
                    <div className="icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="dm-cta-banner">
          <div className="dm-cta-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
              Request A Free Complete Analysis Of Your Website
            </h2>
            <Link href="/contact" className="dm-cta-btn">Book a Free Consultation</Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section style={{ background: WHITE, padding: "5rem 0" }}>
          <div style={inner}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
              <div style={col50}>
                <img
                  src={REVIEW_IMG}
                  alt="Review illustration"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div style={col50}>
                <h2 style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
                  Here is what we will review:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At Decasofts, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada.
                </p>
                <ul className="dm-checklist">
                  {["Website Framework", "Website Technology", "Google Optimize Test", "Navigation", "Speed Test", "Security Analysis", "UI/UX Analysis", "Conversion Rate", "Responsiveness"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section style={{ background: LIGHT_BG, padding: "5rem 0" }}>
          <div style={inner}>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
              Work Speak For Itself
            </h2>
            <div className="dm-testi-grid">
              <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
                <div className="dm-stars">★★★★★</div>
                <div style={{ fontSize: 12, color: GRAY_TEXT }}>29 Google reviews</div>
                <a href="#" style={{ display: "block", marginTop: 14, padding: "8px 14px", border: `1px solid ${BORDER}`, borderRadius: 4, fontSize: 12, textAlign: "center", color: DARK, textDecoration: "none" }}>
                  Write a review
                </a>
              </div>
              {[
                { name: "Ahmed Hussain",    time: "5 months ago", initial: "A", text: "Excellent experience overall. The team was professional, responsive, and made everything simple and hassle-free. Highly recommended." },
                { name: "Alex Hales",       time: "8 months ago", initial: "A", text: "Best Company in Pakistan for Social Media Service… I increased my store sales with Shahzaib's team." },
                { name: "OFF PRICE",        time: "6 months ago", initial: "O", text: "Decasoft is a highly professional and reliable digital agency in the Dubai market, delivering exceptional results across multiple platforms." },
              ].map((t) => (
                <div key={t.name} className="dm-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="dm-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="dm-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="dm-collab">
          <div className="dm-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>Collaboration</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we're here to elevate your business and enhance user experiences.
              </p>
            </div>
            <Link
              href="/contact"
              style={{ display: "inline-block", background: WHITE, color: RED, padding: "0.85rem 2.4rem", borderRadius: 4, fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            >
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}