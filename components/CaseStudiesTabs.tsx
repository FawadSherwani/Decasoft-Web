 "use client";

import { useState } from "react";
import Link from "next/link";

const BG_RED = "#bf2227";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const tabs = [
  { id: "social-media",   label: "Social Media / Meta Ads", href: "/case-studies/social-media-marketing-meta-ads" },
  { id: "videography",    label: "Videography",              href: "/case-studies/videography" },
  { id: "graphic-design", label: "Graphic Design",           href: "/case-studies/graphic-design" },
  { id: "logo-design",    label: "Logo Design",              href: "/case-studies/logo-design" },
];

const tabData: Record<string, {
  title: string; category: string; desc: string;
  tags: string[]; img: string; poster?: string;
  fullDesc: string;
  stats: { label: string; value: string }[];
}[]> = {
  "social-media": [
    {
      title: "Glow Beauty Co.", category: "Meta Ads",
      desc: "Full-funnel Facebook & Instagram ad campaign that generated a 4.2x ROAS and grew followers by 60% in 90 days.",
      fullDesc: "Glow Beauty Co. came to us looking to scale their online presence. We built a full-funnel Meta advertising strategy spanning awareness, retargeting, and conversion campaigns, leading to a 4.2x ROAS and 60% follower growth in 90 days.",
      tags: ["Meta Ads", "Instagram", "Creative"],
      img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
      stats: [{ label: "ROAS", value: "4.2x" }, { label: "Follower Growth", value: "60%" }, { label: "Duration", value: "90 days" }],
    },
    {
      title: "UrbanFit Apparel", category: "Social Media",
      desc: "Content calendar across Instagram & TikTok driving a 3x increase in organic reach within 2 months.",
      fullDesc: "UrbanFit Apparel needed a consistent brand voice. We developed a content calendar for Instagram and TikTok, mixing product showcases and trend-driven reels resulting in a 3x increase in organic reach.",
      tags: ["Content Strategy", "TikTok", "Instagram"],
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      stats: [{ label: "Organic Reach", value: "+3x" }, { label: "Platforms", value: "2" }, { label: "Content Pieces", value: "120+" }],
    },
    {
      title: "Bloom Cafe", category: "Meta Ads",
      desc: "Localized Meta ad campaign targeting nearby customers, resulting in a 38% increase in foot traffic.",
      fullDesc: "Bloom Cafe wanted to drive more local foot traffic. We ran a hyper-local Meta ad campaign using geo-targeting resulting in a 38% increase in foot traffic within the first six weeks.",
      tags: ["Meta Ads", "Local Targeting", "Facebook"],
      img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
      stats: [{ label: "Foot Traffic", value: "+38%" }, { label: "Radius", value: "5km" }, { label: "Campaign Length", value: "6 weeks" }],
    },
    {
      title: "FitZone Gym", category: "Meta Ads",
      desc: "Lead-generation ad funnel for gym membership sign-ups, achieving a 45% cost-per-lead reduction.",
      fullDesc: "FitZone Gym needed a reliable system for filling membership sign-ups. We designed a lead-generation ad funnel on Meta, cutting their cost-per-lead by 45% while increasing total lead volume.",
      tags: ["Meta Ads", "Lead Gen", "Conversion"],
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      stats: [{ label: "Cost Per Lead", value: "-45%" }, { label: "Leads/Month", value: "300+" }, { label: "Conversion Rate", value: "12%" }],
    },
  ],
  "videography": [
    {
      title: "Cherish Sports",
      category: "Brand Storytelling",
      desc: "Cinematic brand story capturing vision, passion, craftsmanship, and business.",
      fullDesc: "Bloom Beauty wanted a brand film that told their origin story authentically. We shot a cinematic narrative covering the founder's journey, behind-the-scenes production, and finished product shots — resulting in a piece used across their website, ads, and investor pitch decks.",
      tags: ["Brand Film", "Cinematic", "Storytelling"],
      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126834/2_zndyfk.mp4",
      poster: "https://res.cloudinary.com/do2147b3j/video/upload/so_0,q_auto,f_jpg/v1782126834/2_zndyfk.jpg",
      stats: [
        { label: "Final Runtime", value: "3:20" },
        { label: "Shoot Days", value: "2" },
        { label: "Locations", value: "4" },
      ],
    },
    {
      title: "Eastech",
      category: "Product Videography",
      desc: "High-energy product video featuring innovation, performance, precision, and technology.",
      fullDesc: "Velocity Motors needed a launch video that captured the thrill of their new model. We combined slow-motion macro shots of design details with dynamic on-road drive sequences, set to a custom sound mix that elevated the entire viewing experience.",
      tags: ["Product Video", "Automotive", "Slow-mo"],
      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126822/3_jh0bjz.mp4",
      poster: "https://res.cloudinary.com/do2147b3j/video/upload/so_0,q_auto,f_jpg/v1782126822/3_jh0bjz.jpg",
      stats: [
        { label: "Views (30 Days)", value: "1.5M" },
        { label: "Shoot Locations", value: "3" },
        { label: "Edit Turnaround", value: "5 days" },
      ],
    },
    {
      title: "Green Wood",
      category: "Event Videography",
      desc: "Elegant wedding film capturing emotions, memories, celebrations, and romance.",
      fullDesc: "Summit Wedding Co. trusted us to document one of their clients' most important days. Our team captured candid emotional moments alongside sweeping drone aerials of the venue, weaving it all into a cinematic story film the couple will treasure for years.",
      tags: ["Wedding", "Drone", "Cinematic"],
      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126832/4_u5d87x.mp4",
      poster: "https://res.cloudinary.com/do2147b3j/video/upload/so_0,q_auto,f_jpg/v1782126832/4_u5d87x.jpg",
      stats: [
        { label: "Final Runtime", value: "8:45" },
        { label: "Cameras Used", value: "4" },
        { label: "Coverage Hours", value: "10" },
      ],
    },
    {
      title: "KBRE 1",
      category: "Corporate Videography",
      desc: "Professional corporate videos featuring interviews, presentations, branding, and team highlights.",
      fullDesc: "NovaTech Solutions needed polished video assets for fundraising and recruitment. We produced a sleek animated explainer combined with authentic team interviews, giving them flexible content for investor decks, the careers page, and LinkedIn outreach.",
      tags: ["Corporate", "Explainer", "Interviews"],
      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126818/5_cjaqop.mp4",
      poster: "https://res.cloudinary.com/do2147b3j/video/upload/so_0,q_auto,f_jpg/v1782126818/5_cjaqop.jpg",
      stats: [
        { label: "Interviews Filmed", value: "8" },
        { label: "Final Cuts", value: "3" },
        { label: "Timeline", value: "3 weeks" },
      ],
    },
  ],
  "graphic-design": [
    {
      title: "Velocity Motors", category: "Print Design",
      desc: "Showroom brochures, billboard creatives, and print catalog for an automotive product launch.",
      fullDesc: "Velocity Motors needed high-impact print materials. We designed brochures, billboard creatives, and a full product catalog with bold typography.",
      tags: ["Print Design", "Catalog", "Billboard"],
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      stats: [{ label: "Print Pieces", value: "12" }, { label: "Billboards", value: "5 cities" }, { label: "Timeline", value: "2 weeks" }],
    },
    {
      title: "GreenLeaf Organics", category: "Brand Identity",
      desc: "Sustainable packaging design and brand guidelines for an organic food brand entering retail markets.",
      fullDesc: "GreenLeaf Organics needed packaging communicating sustainability. We designed eco-conscious packaging with earthy visual language backed by a full brand guideline.",
      tags: ["Packaging", "Brand Guidelines", "Sustainability"],
      img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
      stats: [{ label: "SKUs Designed", value: "15" }, { label: "Retail Partners", value: "8" }, { label: "Timeline", value: "4 weeks" }],
    },
    {
      title: "Apex Fitness", category: "UI/UX Design",
      desc: "Mobile app UI with onboarding flow, workout screens, and progress dashboards.",
      fullDesc: "Apex Fitness needed an intuitive mobile app. We designed the full UI from onboarding through workout tracking and progress dashboards.",
      tags: ["Mobile UI", "App Design", "Figma"],
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      stats: [{ label: "Screens Designed", value: "35" }, { label: "User Flows", value: "6" }, { label: "Timeline", value: "4 weeks" }],
    },
    {
      title: "Luxe Interiors", category: "Print Design",
      desc: "Elegant lookbook and product catalog showcasing furniture collections with premium photography layouts.",
      fullDesc: "Luxe Interiors wanted a lookbook matching their premium furniture. We designed an elegant catalog layout with refined typography.",
      tags: ["Lookbook", "Catalog", "Layout Design"],
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      stats: [{ label: "Pages Designed", value: "48" }, { label: "Print Runs", value: "2K copies" }, { label: "Timeline", value: "3 weeks" }],
    },
  ],
  "logo-design": [
    {
      title: "NovaTech Solutions", category: "Abstract Mark",
      desc: "Modern abstract logomark representing connectivity and innovation for a SaaS company.",
      fullDesc: "NovaTech needed a logo signaling innovation. We designed an abstract geometric mark symbolizing connectivity, built on a scalable grid system.",
      tags: ["Abstract Mark", "Tech", "Geometric"],
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
      stats: [{ label: "Concepts", value: "12" }, { label: "Grid System", value: "Yes" }, { label: "Timeline", value: "2 weeks" }],
    },
    {
      title: "Spice Route Restaurant", category: "Combination Mark",
      desc: "Logo combining an illustrative spice motif with custom lettering, blending tradition with modern design.",
      fullDesc: "Spice Route wanted a logo that told a story. We combined a hand-illustrated spice motif with custom lettering balancing cultural authenticity with a clean modern aesthetic.",
      tags: ["Combination Mark", "Illustration", "Lettering"],
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      stats: [{ label: "Concepts", value: "9" }, { label: "Variations", value: "5" }, { label: "Timeline", value: "2 weeks" }],
    },
    {
      title: "GreenLeaf Organics", category: "Combination Mark",
      desc: "Organic leaf-inspired logomark combined with earthy typography for a sustainable food brand.",
      fullDesc: "GreenLeaf needed a logo communicating sustainability at a glance. We designed an organic leaf-inspired mark with warm earthy typography for a friendly, trustworthy identity.",
      tags: ["Combination Mark", "Organic", "Sustainability"],
      img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
      stats: [{ label: "Concepts", value: "9" }, { label: "Variations", value: "4" }, { label: "Timeline", value: "2 weeks" }],
    },
    {
      title: "Summit Wedding Co.", category: "Monogram Logo",
      desc: "Elegant interlocking monogram logo for a high-end wedding planning and events brand.",
      fullDesc: "Summit Wedding Co. wanted a timeless, elegant identity. We designed an interlocking monogram with delicate linework, paired with an italic script wordmark.",
      tags: ["Monogram", "Script", "Elegant"],
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
      stats: [{ label: "Concepts", value: "10" }, { label: "Variations", value: "4" }, { label: "Timeline", value: "2 weeks" }],
    },
  ],
};

export default function CaseStudiesTabs() {
  const [activeTab, setActiveTab] = useState("social-media");
  const [selected, setSelected] = useState<typeof tabData["social-media"][0] | null>(null);

  const projects = tabData[activeTab] || [];
  const activeTabInfo = tabs.find((t) => t.id === activeTab)!;

  const isVideo = (src: string) => src.endsWith(".mp4") || src.includes("/video/");

  return (
    <>
      <style>{`
        .cst * { box-sizing: border-box; }

        /* Tabs */
        .cst-tabs-wrap {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 0;
          border-bottom: 2px solid ${BORDER};
          margin-bottom: 2.5rem;
        }
        .cst-tabs-wrap::-webkit-scrollbar { display: none; }

        .cst-tab {
          background: none; border: none; cursor: pointer;
          font-family: inherit; font-size: 0.82rem; font-weight: 700;
          color: ${GRAY_TEXT}; padding: 0.85rem 1.5rem;
          border-bottom: 3px solid transparent; margin-bottom: -2px;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap; text-transform: uppercase; letter-spacing: 0.5px;
          flex-shrink: 0;
        }
        .cst-tab:hover { color: ${BG_RED}; }
        .cst-tab.active { color: ${BG_RED}; border-bottom: 3px solid ${BG_RED}; }

        /* Grid — 4 columns */
        .cst-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem; }

        /* Card */
        .cst-card {
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
          animation: cstFadeIn 0.3s ease;
        }
        @keyframes cstFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .cst-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .cst-card-img-wrap { position: relative; overflow: hidden; }
        .cst-card img,
        .cst-card video { width: 100%; height: 160px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .cst-card:hover img,
        .cst-card:hover video { transform: scale(1.06); }
        .cst-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .cst-card:hover .cst-card-overlay { opacity: 1; }
        .cst-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cst-card-body { padding: 1rem 1.1rem; }
        .cst-card-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          font-size: 0.6rem; font-weight: 700;
          padding: 3px 9px; border-radius: 4px;
          margin-bottom: 0.55rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cst-card-body h3 { font-size: 0.88rem; font-weight: 800; margin-bottom: 0.45rem; }
        .cst-card-body p { font-size: 0.74rem; line-height: 1.5; opacity: 0.92; margin-bottom: 0.7rem; }
        .cst-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .cst-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.6rem; padding: 3px 7px;
          border-radius: 4px; font-weight: 600;
        }

        /* View All */
        .cst-view-all {
          display: inline-block; margin-top: 2.5rem;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 2rem; border-radius: 6px;
          font-weight: 700; font-size: 0.85rem;
          text-decoration: none; text-transform: uppercase;
          letter-spacing: 0.5px; transition: background 0.2s, transform 0.15s;
        }
        .cst-view-all:hover { background: #9a1b1f; transform: translateY(-1px); }

        /* Modal */
        .cst-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: cstMFadeIn 0.2s ease;
        }
        @keyframes cstMFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cstMSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .cst-modal {
          background: ${WHITE}; border-radius: 16px;
          max-width: 720px; width: 100%;
          max-height: 88vh; overflow-y: auto;
          position: relative;
          animation: cstMSlideUp 0.25s ease;
        }
        .cst-modal-close {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.5); color: ${WHITE};
          border: none; font-size: 1.1rem; cursor: pointer; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .cst-modal-close:hover { background: ${BG_RED}; }
        .cst-modal-media { width: 100%; height: auto; max-height: 420px; object-fit: contain; background: #000; display: block; border-radius: 16px 16px 0 0; }
        .cst-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .cst-modal-tag {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          font-size: 0.68rem; font-weight: 700; padding: 4px 12px;
          border-radius: 4px; margin-bottom: 0.8rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cst-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .cst-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }
        .cst-modal-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;
          margin-bottom: 1.5rem; padding: 1rem;
          background: ${LIGHT_BG}; border-radius: 10px;
        }
        .cst-modal-stats .stat { text-align: center; }
        .cst-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .cst-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }
        .cst-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .cst-modal-tags span { background: #fdeceb; color: ${BG_RED}; font-size: 0.74rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; }
        .cst-modal-cta {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px; font-weight: 700;
          text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1200px) { .cst-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px)  { .cst-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .cst-grid { grid-template-columns: 1fr; }
          .cst-tab { padding: 0.6rem 0.9rem; font-size: 0.72rem; }
          .cst-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="cst bg-gray-50" style={{ background: WHITE, padding: "5rem 0", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Our Portfolio
            </p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: DARK, margin: 0 }}>
              Work That Speaks For Itself
            </h2>
          </div>

          {/* Tabs */}
          <div className="cst-tabs-wrap">
            {tabs.map((tab) => (
              <button key={tab.id} className={`cst-tab${activeTab === tab.id ? " active" : ""}`} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="cst-grid">
            {projects.map((p) => (
              <button key={p.title} className="cst-card" onClick={() => setSelected(p)}>
                <div className="cst-card-img-wrap">
                  {isVideo(p.img) ? (
                    <video
                      src={p.img}
                      poster={p.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: "100%", height: "160px", objectFit: "cover", objectPosition: "center", display: "block" }}
                    />
                  ) : (
                    <img src={p.img} alt={p.title} />
                  )}
                  <div className="cst-card-overlay"><span>View Case Study</span></div>
                </div>
                <div className="cst-card-body">
                  <span className="cst-card-tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="cst-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* View All */}
          <div style={{ textAlign: "center" }}>
            <Link href={activeTabInfo.href} className="cst-view-all">
              View All {activeTabInfo.label} Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="cst-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="cst-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cst-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>

            {isVideo(selected.img) ? (
              <video
                src={selected.img}
                poster={selected.poster}
                autoPlay
                muted
                loop
                playsInline
                className="cst-modal-media"
              />
            ) : (
              <img src={selected.img} alt={selected.title} className="cst-modal-media" />
            )}

            <div className="cst-modal-body">
              <span className="cst-modal-tag">{selected.category}</span>
              <h2>{selected.title}</h2>
              <p className="desc">{selected.fullDesc}</p>
              <div className="cst-modal-stats">
                {selected.stats.map((s) => (
                  <div key={s.label} className="stat">
                    <span className="val">{s.value}</span>
                    <span className="lbl">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="cst-modal-tags">
                {selected.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <Link href="/contact" className="cst-modal-cta">Start a Similar Project</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}