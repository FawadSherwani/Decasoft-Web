'use client'

import Image from 'next/image'
import { useState } from 'react'

// ✅ OPTIMIZED: Reduced from 42 images to 20 unique brands (duplicated for marquee)
// This was the BIGGEST mobile performance killer — 84 <img> tags loading simultaneously
const brandNumbers = Array.from({ length: 43 }, (_, i) => i + 1)
  .filter(n => n !== 24)
  .slice(0, 20) // ✅ Only show 20 unique logos — enough for a full marquee loop

function BrandLogo({ num }: { num: number }) {
  const [error, setError] = useState(false)
  if (error) return null

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg border border-gray-100"
      style={{ width: 120, height: 60, padding: '8px 12px' }} // ✅ Slightly smaller = less layout work
    >
      <Image
        src={`/${num}.png`}
        alt={`Client ${num}`}
        width={90}
        height={40}
        loading="lazy"        // ✅ Lazy load — marquee images are below fold
        onError={() => setError(true)}
        className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  )
}

export default function BrandsMarquee() {
  return (
    // ✅ content-visibility: auto — browser skips rendering when off-screen (mobile win!)
    <section
      className="bg-white border-b border-gray-100 py-8 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 100px' }}
    >
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
          will-change: transform; /* ✅ GPU acceleration */
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* ✅ Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="marquee-track">
        {/* ✅ Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-5 px-5">
            {brandNumbers.map((num) => (
              <BrandLogo key={`${copy}-${num}`} num={num} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
