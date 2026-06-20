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
    title: "Bloom Beauty",
    category: "Brand Identity",
    desc: "Complete visual identity package including logo design, color palette, and packaging design for a beauty brand launch.",
    fullDesc: "Bloom Beauty needed a brand identity that felt premium yet approachable. We designed a full visual identity system — logo, color palette, typography, and packaging mockups — that gave them a cohesive, recognizable presence across retail shelves and online stores.",
    tags: ["Branding", "Logo Design", "Packaging"],
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80",
    stats: [
      { label: "Brand Assets", value: "25+" },
      { label: "Revisions", value: "3 Rounds" },
      { label: "Timeline", value: "3 weeks" },
    ],
  },
  {
    title: "Velocity Motors",
    category: "Print Design",
    desc: "Showroom brochures, billboard creatives, and print catalog design for an automotive product launch campaign.",
    fullDesc: "Velocity Motors needed high-impact print materials for their showroom and launch campaign. We designed brochures, billboard creatives, and a full product catalog with bold typography and dynamic layouts that matched the brand's energetic identity.",
    tags: ["Print Design", "Catalog", "Billboard"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    stats: [
      { label: "Print Pieces", value: "12" },
      { label: "Billboards", value: "5 cities" },
      { label: "Timeline", value: "2 weeks" },
    ],
  },
  {
    title: "NovaTech Solutions",
    category: "UI/UX Design",
    desc: "Complete dashboard UI redesign for a SaaS platform, improving usability and visual hierarchy across 40+ screens.",
    fullDesc: "NovaTech Solutions' dashboard had grown cluttered over time. We redesigned the entire UI system from scratch, improving visual hierarchy, simplifying navigation, and creating a scalable design system across more than 40 screens in Figma.",
    tags: ["UI Design", "Figma", "Design System"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
    stats: [
      { label: "Screens Designed", value: "40+" },
      { label: "Components", value: "60+" },
      { label: "Timeline", value: "5 weeks" },
    ],
  },
  {
    title: "Spice Route Restaurant",
    category: "Brand Identity",
    desc: "Menu design, signage, and social media template kit blending traditional motifs with a modern aesthetic.",
    fullDesc: "Spice Route Restaurant wanted a brand refresh that honored tradition while feeling modern. We designed a new menu system, in-store signage, and a social media template kit, all rooted in a cohesive visual language inspired by traditional motifs.",
    tags: ["Menu Design", "Signage", "Social Templates"],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    stats: [
      { label: "Menu Versions", value: "4" },
      { label: "Templates", value: "20+" },
      { label: "Timeline", value: "2 weeks" },
    ],
  },
  {
    title: "Apex Fitness",
    category: "UI/UX Design",
    desc: "Mobile app UI design for a fitness tracking platform with onboarding flow, workout screens, and progress dashboards.",
    fullDesc: "Apex Fitness needed an intuitive mobile app experience. We designed the full UI from onboarding flow through workout tracking and progress dashboards, focusing on clarity, motivation-driven visuals, and accessibility best practices.",
    tags: ["Mobile UI", "App Design", "Figma"],
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    stats: [
      { label: "Screens Designed", value: "35" },
      { label: "User Flows", value: "6" },
      { label: "Timeline", value: "4 weeks" },
    ],
  },
  {
    title: "Luxe Interiors",
    category: "Print Design",
    desc: "Elegant lookbook and product catalog design showcasing furniture collections with premium photography layouts.",
    fullDesc: "Luxe Interiors wanted a lookbook that matched their premium furniture collections. We designed an elegant catalog layout that let the photography breathe, paired with refined typography that reflected the brand's sophisticated positioning.",
    tags: ["Lookbook", "Catalog", "Layout Design"],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    stats: [
      { label: "Pages Designed", value: "48" },
      { label: "Print Runs", value: "2K copies" },
      { label: "Timeline", value: "3 weeks" },
    ],
  },
  {
    title: "GreenLeaf Organics",
    category: "Brand Identity",
    desc: "Sustainable packaging design and brand guidelines for an organic food brand entering retail markets.",
    fullDesc: "GreenLeaf Organics needed packaging that communicated sustainability at first glance. We designed eco-conscious packaging using recyclable materials and earthy visual language, backed by a full brand guideline document for consistent rollout.",
    tags: ["Packaging", "Brand Guidelines", "Sustainability"],
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80",
    stats: [
      { label: "SKUs Designed", value: "15" },
      { label: "Retail Partners", value: "8" },
      { label: "Timeline", value: "4 weeks" },
    ],
  },
  {
    title: "Horizon Films",
    category: "UI/UX Design",
    desc: "Marketing website redesign with custom illustrations, motion-ready assets, and a fully responsive design system.",
    fullDesc: "Horizon Films needed a marketing site that reflected their cinematic quality. We designed custom illustrations, motion-ready graphic assets, and a responsive design system that scaled cleanly from desktop to mobile.",
    tags: ["Web Design", "Illustration", "Design System"],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    stats: [
      { label: "Pages Designed", value: "10" },
      { label: "Custom Illustrations", value: "18" },
      { label: "Timeline", value: "3 weeks" },
    ],
  },
  {
    title: "Summit Wedding Co.",
    category: "Print Design",
    desc: "Elegant wedding invitation suite and event branding package including signage, menus, and stationery.",
    fullDesc: "Summit Wedding Co. needed a cohesive stationery suite for a high-end client event. We designed invitations, signage, table menus, and matching stationery — all unified under one elegant visual theme from save-the-date to thank-you cards.",
    tags: ["Stationery", "Event Branding", "Invitations"],
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
    stats: [
      { label: "Stationery Pieces", value: "9" },
      { label: "Guests", value: "250+" },
      { label: "Timeline", value: "2 weeks" },
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
        .gd * { box-sizing: border-box; }
        .gd-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .gd-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .gd-card {
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
        .gd-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .gd-card-body { padding: 1rem 1.1rem; }
        .gd-card-tag {
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
        .gd-card-body h3 { font-size: 0.88rem; font-weight: 800; margin-bottom: 0.45rem; }
        .gd-card-body p { font-size: 0.74rem; line-height: 1.5; opacity: 0.92; margin-bottom: 0.7rem; }
        .gd-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .gd-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.6rem;
          padding: 3px 7px;
          border-radius: 4px;
          font-weight: 600;
        }
        .gd-card-img-wrap { position: relative; overflow: hidden; }
        .gd-card img { width: 100%; height: 130px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .gd-card:hover img { transform: scale(1.06); }
        .gd-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .gd-card:hover .gd-card-overlay { opacity: 1; }
        .gd-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .gd-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .gd-page-btn {
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
        .gd-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .gd-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .gd-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .gd-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* Collab */
        .gd-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .gd-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .gd-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        /* ══ MODAL ══ */
        .gd-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: gdFadeIn 0.2s ease;
        }
        @keyframes gdFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gdSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .gd-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: gdSlideUp 0.25s ease;
        }
        .gd-modal-close {
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
        .gd-modal-close:hover { background: ${BG_RED}; }
        .gd-modal img {
          width: 100%; height: 280px;
          object-fit: cover; object-position: center;
          display: block;
          border-radius: 16px 16px 0 0;
        }
        .gd-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .gd-modal-tag {
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
        .gd-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .gd-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }

        .gd-modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: ${LIGHT_BG};
          border-radius: 10px;
        }
        .gd-modal-stats .stat { text-align: center; }
        .gd-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .gd-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }

        .gd-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .gd-modal-tags span {
          background: #fdeceb; color: ${BG_RED};
          font-size: 0.74rem; font-weight: 700;
          padding: 5px 12px; border-radius: 20px;
        }
        .gd-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .gd-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .gd-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .gd-grid { grid-template-columns: 1fr; }
          .gd-collab-inner { flex-direction: column; text-align: center; }
          .gd-modal img { height: 200px; }
          .gd-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="gd" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="gd-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Graphic Design <span style={{ color: BG_RED }}>Portfolio</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our creative design work — from brand identities and packaging to UI/UX and
              print collateral that brings ideas to life. Click any project to see the full case study.
            </p>
          </div>
        </section>

        {/* ══ PROJECTS GRID ══ */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="gd-inner">
            <div className="gd-grid">
              {projects.map((p) => (
                <button key={p.title} className="gd-card" onClick={() => setSelected(p)}>
                  <div className="gd-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="gd-card-overlay"><span>View Case Study</span></div>
                  </div>
                  <div className="gd-card-body">
                    <span className="gd-card-tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="gd-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="gd-pagination">
              <button className="gd-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`gd-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="gd-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="gd-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="gd-collab">
          <div className="gd-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready to bring your brand to life?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in striking visual design that makes your brand
                unforgettable. Let&apos;s craft something great together.
              </p>
            </div>
            <Link href="/contact" className="gd-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        {selected && (
          <div className="gd-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="gd-modal" onClick={(e) => e.stopPropagation()}>
              <button className="gd-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img src={selected.img} alt={selected.title} />
              <div className="gd-modal-body">
                <span className="gd-modal-tag">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p className="desc">{selected.fullDesc}</p>

                <div className="gd-modal-stats">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="val">{s.value}</span>
                      <span className="lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="gd-modal-tags">
                  {selected.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <Link href="/contact" className="gd-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}