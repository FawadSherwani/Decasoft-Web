// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'

// const allCaseStudies = [
//   {
//     title: '360 Finest',
//     category: 'Web Development',
//     desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
//     tags: ['Web Development', 'Vue', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: 'KBRE',
//     category: 'Web Development',
//     desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
//     tags: ['Web Development', ' ', 'Node.js'],
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
//     bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
//   },
//   {
//     title: 'THE SNORKEL STORE',
//     category: 'e-Commerce',
//     desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
//     tags: ['e-Commerce', 'Shopify', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: 'PROJECT ALPHA',
//     category: 'UI/UX Design',
//     desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
//     tags: ['UI/UX', 'Figma', 'React'],
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
//     bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
//   },
//   {
//     title: 'PROJECT BETA',
//     category: 'SEO Optimization',
//     desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
//     tags: ['SEO', 'Analytics', 'Content'],
//     image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
//     bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
//   },
//   {
//     title: 'PROJECT GAMMA',
//     category: 'Digital Marketing',
//     desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
//     tags: ['Marketing', 'Social Media', 'Ads'],
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
//     bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
//   },
//   {
//     title: 'DOCTORFINDY',
//     category: 'Web Development',
//     desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
//     tags: ['Web Development', 'Vue', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: 'MOHKM',
//     category: 'Digital Marketing',
//     desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
//     tags: ['Web Development', 'React', 'Node.js'],
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
//     bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
//   },
//   {
//     title: 'THE SNORKEL STORE',
//     category: 'e-Commerce',
//     desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
//     tags: ['e-Commerce', 'Shopify', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: 'PROJECT ALPHA',
//     category: 'UI/UX Design',
//     desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
//     tags: ['UI/UX', 'Figma', 'React'],
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
//     bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
//   },
//   {
//     title: 'PROJECT BETA',
//     category: 'SEO Optimization',
//     desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
//     tags: ['SEO', 'Analytics', 'Content'],
//     image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
//     bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
//   },
//   {
//     title: 'PROJECT GAMMA',
//     category: 'Digital Marketing',
//     desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
//     tags: ['Marketing', 'Social Media', 'Ads'],
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
//     bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
//   },
//   {
//     title: 'DOCTORFINDY',
//     category: 'Web Development',
//     desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
//     tags: ['Web Development', 'Vue', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: '360 Finest',
//     category: 'Web Design & Development',
//     desc: 'A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.',
//     tags: ['Web Development', 'React', 'Node.js'],
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
//     bg: 'bg-[#1a6b2a]', tagBg: 'bg-green-700', textColor: 'text-green-300', descColor: 'text-green-200', imgBg: 'bg-green-800',
//   },
//   {
//     title: 'THE SNORKEL STORE',
//     category: 'e-Commerce',
//     desc: 'Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.',
//     tags: ['e-Commerce', 'Shopify', 'JavaScript'],
//     image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
//     bg: 'bg-[#1a3a6b]', tagBg: 'bg-blue-700', textColor: 'text-blue-300', descColor: 'text-blue-200', imgBg: 'bg-blue-800',
//   },
//   {
//     title: 'PROJECT ALPHA',
//     category: 'UI/UX Design',
//     desc: 'A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.',
//     tags: ['UI/UX', 'Figma', 'React'],
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
//     bg: 'bg-[#6b1a3a]', tagBg: 'bg-pink-700', textColor: 'text-pink-300', descColor: 'text-pink-200', imgBg: 'bg-pink-800',
//   },
//   {
//     title: 'PROJECT BETA',
//     category: 'SEO Optimization',
//     desc: 'A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.',
//     tags: ['SEO', 'Analytics', 'Content'],
//     image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80',
//     bg: 'bg-[#6b4a1a]', tagBg: 'bg-amber-700', textColor: 'text-amber-300', descColor: 'text-amber-200', imgBg: 'bg-amber-800',
//   },
//   {
//     title: 'PROJECT GAMMA',
//     category: 'Digital Marketing',
//     desc: 'End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.',
//     tags: ['Marketing', 'Social Media', 'Ads'],
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
//     bg: 'bg-[#1a6b6b]', tagBg: 'bg-teal-700', textColor: 'text-teal-300', descColor: 'text-teal-200', imgBg: 'bg-teal-800',
//   },
// ]

// const ITEMS_PER_PAGE = 12

// export default function CaseStudies() {
//   const [currentPage, setCurrentPage] = useState(1)

//   const totalPages = Math.ceil(allCaseStudies.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const currentItems = allCaseStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE)

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-10">
//           <p className="text-primary text-sm font-semibold mb-1">
//             Learn How We Can Make A Real Impact
//           </p>
//           <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
//             Our <span className="text-primary">Case Studies</span>
//           </h2>
//           <p className="text-gray-500 text-sm mt-2 max-w-md">
//             Check out some of the impactful work we&apos;ve done for our clients across various industries.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {currentItems.map((study, i) => (
//             <div key={i} className={`${study.bg} rounded-2xl p-6 text-white`}>

//               <p className={`text-xs font-bold tracking-widest ${study.textColor} mb-3`}>
//                 {study.title}
//               </p>

//               <span className={`text-xs ${study.tagBg} px-2 py-0.5 rounded mb-3 inline-block`}>
//                 {study.category}
//               </span>

//               <p className={`text-xs ${study.descColor} leading-relaxed mb-4`}>
//                 {study.desc}
//               </p>

//               <div className="flex gap-1 mb-4 flex-wrap">
//                 {study.tags.map((tag, j) => (
//                   <span key={j} className={`text-xs ${study.tagBg} px-2 py-0.5 rounded`}>
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className={`${study.imgBg} rounded-xl overflow-hidden h-[160px] relative`}>
//                 <Image
//                   src={study.image}
//                   alt={study.title}
//                   fill
//                   className="object-cover opacity-80"
//                 />
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-2">

//           {/* Prev button */}
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
//           >
//             <i className="fa-solid fa-chevron-left text-sm"></i>
//           </button>

//           {/* Page numbers */}
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
//                 currentPage === page
//                   ? 'bg-primary text-white'
//                   : 'border-2 border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           {/* Next button */}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
//           >
//             <i className="fa-solid fa-chevron-right text-sm"></i>
//           </button>

//         </div>

//         {/* Page info */}
//         <p className="text-center text-gray-400 text-xs mt-4">
//           Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, allCaseStudies.length)} of {allCaseStudies.length} projects
//         </p>

//       </div>
//     </section>
//   )
// }

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
    title: "360 Finest",
    category: "Web Development",
    desc: "DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.",
    fullDesc: "360 Finest needed a modern, conversion-focused web platform to scale their online presence. We built a fast, responsive site using Vue and JavaScript, focused on intuitive navigation and clear calls-to-action that turned visitors into customers.",
    tags: ["Web Development", "Vue", "JavaScript"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "Conversion", value: "+34%" },
      { label: "Timeline", value: "6 weeks" },
    ],
  },
  {
    title: "KBRE",
    category: "Web Development",
    desc: "A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.",
    fullDesc: "KBRE required a robust, scalable platform to handle government service requests. Built with Node.js and a streamlined UI, the platform reduced processing time and improved citizen satisfaction through clearer department routing.",
    tags: ["Web Development", "Node.js"],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Processing Time", value: "-40%" },
      { label: "Departments", value: "12" },
      { label: "Users Served", value: "10K+" },
    ],
  },
  {
    title: "The Snorkel Store",
    category: "e-Commerce",
    desc: "Snorkel Store is the ultimate Snorkeling Equipment and Adventure Resource — a fully featured e-Commerce platform built for divers and ocean lovers worldwide.",
    fullDesc: "The Snorkel Store needed a Shopify-powered e-commerce experience that could handle global shipping logistics and product variants. We built a fast, mobile-optimized storefront with JavaScript enhancements for cart and checkout flow.",
    tags: ["e-Commerce", "Shopify", "JavaScript"],
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Countries Shipped", value: "30+" },
      { label: "Page Speed", value: "92/100" },
    ],
  },
  {
    title: "Project Alpha",
    category: "UI/UX Design",
    desc: "A complete UI/UX overhaul for a SaaS platform that increased user engagement by 40% and reduced churn through intuitive design and streamlined user flows.",
    fullDesc: "Project Alpha's SaaS dashboard suffered from a confusing user flow and high churn. We redesigned the entire UX from research to high-fidelity Figma prototypes, then implemented it in React — increasing engagement by 40% and cutting churn significantly.",
    tags: ["UI/UX", "Figma", "React"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Engagement", value: "+40%" },
      { label: "Churn Reduced", value: "-25%" },
      { label: "User Flows", value: "8" },
    ],
  },
  {
    title: "Project Beta",
    category: "SEO Optimization",
    desc: "A full-scale SEO strategy and implementation for a retail brand that tripled organic traffic within 6 months through technical SEO, content, and link building.",
    fullDesc: "Project Beta's retail site had stagnant organic traffic. We executed a full SEO overhaul covering technical fixes, content strategy, and a structured link-building campaign — tripling organic traffic within 6 months.",
    tags: ["SEO", "Analytics", "Content"],
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Organic Traffic", value: "+200%" },
      { label: "Keywords Ranked", value: "180+" },
      { label: "Timeline", value: "6 months" },
    ],
  },
  {
    title: "Project Gamma",
    category: "Digital Marketing",
    desc: "End-to-end digital marketing campaign for a fashion brand — covering social media, paid ads, email marketing, and performance tracking across all channels.",
    fullDesc: "Project Gamma needed a unified digital marketing engine. We managed social media, paid ad campaigns, email flows, and performance tracking under one cohesive strategy, driving measurable growth across every channel.",
    tags: ["Marketing", "Social Media", "Ads"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Revenue Growth", value: "+65%" },
      { label: "Channels", value: "5" },
      { label: "Email Open Rate", value: "38%" },
    ],
  },
  {
    title: "DoctorFindy",
    category: "Web Development",
    desc: "DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.",
    fullDesc: "DoctorFindy set out to simplify healthcare access. We built a Vue-powered web platform with real-time doctor search, appointment booking, and a clean, trustworthy interface that patients could navigate with confidence.",
    tags: ["Web Development", "Vue", "JavaScript"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Doctors Listed", value: "500+" },
      { label: "Bookings/Month", value: "2K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "MOHKM",
    category: "Digital Marketing",
    desc: "A comprehensive digital platform designed to streamline government services and connect citizens with the right departments quickly and efficiently.",
    fullDesc: "MOHKM needed a digital marketing push to raise awareness of their new citizen services platform. We ran a multi-channel campaign combining React-built landing pages with Node.js backend tracking to measure real engagement.",
    tags: ["Web Development", "React", "Node.js"],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    projectUrl: "https://example.com",
    stats: [
      { label: "Awareness Reach", value: "1.2M" },
      { label: "Sign-ups", value: "45K+" },
      { label: "Campaign Length", value: "3 months" },
    ],
  },
];

const PER_PAGE = 9;

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
        .cs * { box-sizing: border-box; }
        .cs-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
        .cs-card {
          background: ${BG_RED};
          border-radius: 12px;
          overflow: hidden;
          color: ${WHITE};
          box-shadow: 0 8px 24px rgba(191,34,39,0.22);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: none;
          text-align: left;
          font-family: inherit;
          display: block;
          width: 100%;
          padding: 1.4rem 1.4rem 1.2rem;
        }
        .cs-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(191,34,39,0.32); }
        .cs-card h3 { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.7rem; }
        .cs-card-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 0.8rem;
        }
        .cs-card p { font-size: 0.82rem; line-height: 1.65; opacity: 0.92; margin-bottom: 1rem; }
        .cs-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1rem; }
        .cs-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
        }
        .cs-card-img-wrap { position: relative; overflow: hidden; border-radius: 10px; }
        .cs-card img { width: 100%; height: 160px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .cs-card:hover img { transform: scale(1.06); }
        .cs-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .cs-card:hover .cs-card-overlay { opacity: 1; }
        .cs-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .cs-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .cs-page-btn {
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
        .cs-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .cs-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .cs-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .cs-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* ══ MODAL ══ */
        .cs-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: csFadeIn 0.2s ease;
        }
        @keyframes csFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes csSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .cs-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: csSlideUp 0.25s ease;
        }
        .cs-modal-close {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.5); color: ${WHITE};
          border: none; font-size: 1.1rem; cursor: pointer; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .cs-modal-close:hover { background: ${BG_RED}; }
        .cs-modal img { width: 100%; height: 280px; object-fit: cover; object-position: center; display: block; border-radius: 16px 16px 0 0; }
        .cs-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .cs-modal-tag {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          font-size: 0.68rem; font-weight: 700; padding: 4px 12px;
          border-radius: 4px; margin-bottom: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cs-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .cs-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }
        .cs-modal-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;
          margin-bottom: 1.5rem; padding: 1rem; background: ${LIGHT_BG}; border-radius: 10px;
        }
        .cs-modal-stats .stat { text-align: center; }
        .cs-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .cs-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }
        .cs-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .cs-modal-tags span { background: #fdeceb; color: ${BG_RED}; font-size: 0.74rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; }
        .cs-modal-cta {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px; font-weight: 700;
          text-decoration: none; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .cs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 650px) {
          .cs-grid { grid-template-columns: 1fr; }
          .cs-modal img { height: 200px; }
          .cs-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="cs" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="cs-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Our <span style={{ color: BG_RED }}>Case Studies</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Check out some of the impactful work we&apos;ve done for our clients across various
              industries. Click any project to read the full case study.
            </p>
          </div>
        </section>

        {/* ══ PROJECTS GRID ══ */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="cs-inner">
            <div className="cs-grid">
              {projects.map((p) => (
                <button key={p.title} className="cs-card" onClick={() => setSelected(p)}>
                  <h3>{p.title}</h3>
                  <span className="cs-card-tag">{p.category}</span>
                  <p>{p.desc}</p>
                  <div className="cs-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="cs-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="cs-card-overlay"><span>View Case Study</span></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="cs-pagination">
              <button className="cs-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`cs-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="cs-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="cs-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        {selected && (
          <div className="cs-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
              <button className="cs-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img src={selected.img} alt={selected.title} />
              <div className="cs-modal-body">
                <span className="cs-modal-tag">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p className="desc">{selected.fullDesc}</p>

                <div className="cs-modal-stats">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="val">{s.value}</span>
                      <span className="lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="cs-modal-tags">
                  {selected.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <a
                    href={selected.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-modal-cta"
                    style={{ background: "transparent", color: BG_RED, border: `2px solid ${BG_RED}` }}
                  >
                    Visit {selected.title} ↗
                  </a>
                  <Link href="/contact" className="cs-modal-cta">Start a Similar Project</Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}