"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG_RED = "#bf2227";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const allProjects = [
  {
    title: "Horizon Films",
    category: "Event Videography",
    desc: "Full-day corporate event coverage with multi-camera setup, drone footage, and same-day highlight reel delivery.",
    fullDesc: "Horizon Films needed comprehensive coverage for their annual corporate summit. We deployed a multi-camera crew alongside drone footage to capture every keynote, panel, and networking moment. A same-day highlight reel was delivered to keep momentum high on social media while the full edit followed within a week.",
    tags: ["Event Coverage", "Drone", "Multi-cam"],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    stats: [
      { label: "Cameras Used", value: "5" },
      { label: "Footage Hours", value: "12+" },
      { label: "Delivery Time", value: "Same Day" },
    ],
  },
  {
    title: "Bloom Beauty",
    category: "Brand Storytelling",
    desc: "Cinematic brand film showcasing the founder's journey, production process, and product craftsmanship.",
    fullDesc: "Bloom Beauty wanted a brand film that told their origin story authentically. We shot a cinematic narrative covering the founder's journey, behind-the-scenes production, and finished product shots — resulting in a piece used across their website, ads, and investor pitch decks.",
    tags: ["Brand Film", "Cinematic", "Storytelling"],
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
    stats: [
      { label: "Final Runtime", value: "3:20" },
      { label: "Shoot Days", value: "2" },
      { label: "Locations", value: "4" },
    ],
  },
  {
    title: "Velocity Motors",
    category: "Product Videography",
    desc: "High-energy automotive product video featuring slow-motion detail shots and dynamic drive sequences.",
    fullDesc: "Velocity Motors needed a launch video that captured the thrill of their new model. We combined slow-motion macro shots of design details with dynamic on-road drive sequences, set to a custom sound mix that elevated the entire viewing experience.",
    tags: ["Product Video", "Automotive", "Slow-mo"],
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
    stats: [
      { label: "Views (30 Days)", value: "1.5M" },
      { label: "Shoot Locations", value: "3" },
      { label: "Edit Turnaround", value: "5 days" },
    ],
  },
  {
    title: "Summit Wedding Co.",
    category: "Event Videography",
    desc: "Emotional wedding film blending candid moments, drone aerials, and a custom cinematic narrative.",
    fullDesc: "Summit Wedding Co. trusted us to document one of their clients' most important days. Our team captured candid emotional moments alongside sweeping drone aerials of the venue, weaving it all into a cinematic story film the couple will treasure for years.",
    tags: ["Wedding", "Drone", "Cinematic"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    stats: [
      { label: "Final Runtime", value: "8:45" },
      { label: "Cameras Used", value: "4" },
      { label: "Coverage Hours", value: "10" },
    ],
  },
  {
    title: "NovaTech Solutions",
    category: "Corporate Videography",
    desc: "Sleek explainer video and team interviews used for investor presentations and recruitment campaigns.",
    fullDesc: "NovaTech Solutions needed polished video assets for fundraising and recruitment. We produced a sleek animated explainer combined with authentic team interviews, giving them flexible content for investor decks, the careers page, and LinkedIn outreach.",
    tags: ["Corporate", "Explainer", "Interviews"],
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    stats: [
      { label: "Interviews Filmed", value: "8" },
      { label: "Final Cuts", value: "3" },
      { label: "Timeline", value: "3 weeks" },
    ],
  },
  {
    title: "Spice Route Restaurant",
    category: "Brand Storytelling",
    desc: "Mouth-watering food videography series with macro shots and behind-the-kitchen storytelling for social media.",
    fullDesc: "Spice Route Restaurant wanted scroll-stopping content for Instagram and TikTok. We produced a series of macro food videography shots paired with behind-the-kitchen storytelling, giving them a steady stream of high-performing reels.",
    tags: ["Food Video", "Social Reels", "Macro"],
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    stats: [
      { label: "Reels Produced", value: "20" },
      { label: "Avg. Views/Reel", value: "85K" },
      { label: "Shoot Days", value: "2" },
    ],
  },
  {
    title: "Apex Fitness",
    category: "Product Videography",
    desc: "High-impact gym and equipment promo video with dynamic transitions and motivational pacing.",
    fullDesc: "Apex Fitness needed a promo video to drive membership sign-ups. We filmed dynamic gym floor footage, equipment close-ups, and member testimonials, edited with fast-paced transitions and a motivational soundtrack that matched their brand energy.",
    tags: ["Promo Video", "Fitness", "Dynamic Edit"],
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    stats: [
      { label: "Sign-up Lift", value: "+27%" },
      { label: "Final Runtime", value: "1:30" },
      { label: "Shoot Day", value: "1" },
    ],
  },
  {
    title: "Luxe Interiors",
    category: "Corporate Videography",
    desc: "Elegant showroom walkthrough video highlighting furniture craftsmanship and interior design expertise.",
    fullDesc: "Luxe Interiors wanted to bring their showroom experience online. We produced an elegant walkthrough video with smooth gimbal movement, detail shots of craftsmanship, and ambient music — giving online shoppers a true sense of the in-store experience.",
    tags: ["Showroom", "Gimbal", "Interior"],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    stats: [
      { label: "Final Runtime", value: "4:10" },
      { label: "Online Engagement", value: "+45%" },
      { label: "Shoot Time", value: "1 day" },
    ],
  },
  {
    title: "GreenLeaf Organics",
    category: "Brand Storytelling",
    desc: "Farm-to-table documentary-style video capturing the sourcing, growing, and packaging process.",
    fullDesc: "GreenLeaf Organics wanted to highlight their sustainable farm-to-table process. We shot a documentary-style piece following the journey from farm sourcing to packaging, building trust and transparency with their growing customer base.",
    tags: ["Documentary", "Sustainability", "Brand Film"],
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80",
    stats: [
      { label: "Final Runtime", value: "5:30" },
      { label: "Locations", value: "3" },
      { label: "Shoot Days", value: "2" },
    ],
  },
];

const PER_PAGE = 8;

export default function Page() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<typeof allProjects[0] | null>(null);

  const totalPages = Math.ceil(allProjects.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const projects = allProjects.slice(start, start + PER_PAGE);

  function goToPage(p: number) {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <style>{`
        .vp * { box-sizing: border-box; }
        .vp-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .vp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .vp-card {
          background: ${BG_RED};
          border-radius: 10px;
          overflow: hidden;
          color: ${WHITE};
          box-shadow: 0 6px 18px rgba(191,34,39,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: none;
          text-align: left;
          font-family: inherit;
          display: block;
          width: 100%;
        }
        .vp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .vp-card-body { padding: 1rem 1.1rem; }
        .vp-card-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 4px;
          margin-bottom: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .vp-card-body h3 { font-size: 0.88rem; font-weight: 800; margin-bottom: 0.45rem; }
        .vp-card-body p { font-size: 0.74rem; line-height: 1.5; opacity: 0.92; margin-bottom: 0.7rem; }
        .vp-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .vp-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.6rem;
          padding: 3px 7px;
          border-radius: 4px;
          font-weight: 600;
        }
        .vp-card-img-wrap { position: relative; overflow: hidden; }
        .vp-card img { width: 100%; height: 130px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .vp-card:hover img { transform: scale(1.06); }
        .vp-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .vp-card:hover .vp-card-overlay { opacity: 1; }
        .vp-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
          display: flex; align-items: center; gap: 6px;
        }
        .vp-play-icon {
          width: 0; height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid ${BG_RED};
        }

        /* Pagination */
        .vp-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .vp-page-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid ${BORDER};
          background: ${WHITE};
          color: ${DARK};
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .vp-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .vp-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .vp-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .vp-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* Collab */
        .vp-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .vp-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .vp-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        /* ══ MODAL ══ */
        .vp-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: vpFadeIn 0.2s ease;
        }
        @keyframes vpFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vpSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .vp-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: vpSlideUp 0.25s ease;
        }
        .vp-modal-close {
          position: absolute;
          top: 14px; right: 14px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          color: ${WHITE};
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .vp-modal-close:hover { background: ${BG_RED}; }
        .vp-modal img {
          width: 100%; height: 280px;
          object-fit: cover; object-position: center;
          display: block;
          border-radius: 16px 16px 0 0;
        }
        .vp-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .vp-modal-tag {
          display: inline-block;
          background: ${BG_RED};
          color: ${WHITE};
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .vp-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .vp-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }

        .vp-modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: ${LIGHT_BG};
          border-radius: 10px;
        }
        .vp-modal-stats .stat { text-align: center; }
        .vp-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .vp-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }

        .vp-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .vp-modal-tags span {
          background: #fdeceb; color: ${BG_RED};
          font-size: 0.74rem; font-weight: 700;
          padding: 5px 12px; border-radius: 20px;
        }
        .vp-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .vp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .vp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .vp-grid { grid-template-columns: 1fr; }
          .vp-collab-inner { flex-direction: column; text-align: center; }
          .vp-modal img { height: 200px; }
          .vp-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="vp" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="vp-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Videography <span style={{ color: BG_RED }}>Portfolio</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our cinematic storytelling — from event coverage and brand films to product
              videography that brings ideas to life. Click any project to see the full case study.
            </p>
          </div>
        </section>

        {/* ══ PROJECTS GRID ══ */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="vp-inner">
            <div className="vp-grid">
              {projects.map((p) => (
                <button key={p.title} className="vp-card" onClick={() => setSelected(p)}>
                  <div className="vp-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="vp-card-overlay">
                      <span><span className="vp-play-icon" /> Watch Case Study</span>
                    </div>
                  </div>
                  <div className="vp-card-body">
                    <span className="vp-card-tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="vp-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="vp-pagination">
              <button className="vp-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`vp-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="vp-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="vp-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="vp-collab">
          <div className="vp-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready to tell your brand&apos;s story?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in cinematic videography that captures attention and
                drives results. Let&apos;s bring your vision to the screen.
              </p>
            </div>
            <Link href="/contact" className="vp-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        {selected && (
          <div className="vp-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="vp-modal" onClick={(e) => e.stopPropagation()}>
              <button className="vp-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img src={selected.img} alt={selected.title} />
              <div className="vp-modal-body">
                <span className="vp-modal-tag">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p className="desc">{selected.fullDesc}</p>

                <div className="vp-modal-stats">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="val">{s.value}</span>
                      <span className="lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="vp-modal-tags">
                  {selected.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <Link href="/contact" className="vp-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}