'use client'

import Image from 'next/image'
import { useState } from 'react'

// 1 to 43, skip 24 (broken image)
const brandNumbers = Array.from({ length: 43 }, (_, i) => i + 1).filter(n => n !== 24)

function BrandLogo({ num }: { num: number }) {
  const [error, setError] = useState(false)

  if (error) return null

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg border border-gray-100"
      style={{ width: 140, height: 70, padding: '10px 16px' }}
    >
      <Image
        src={`/${num}.png`}
        alt={`Client ${num}`}
        width={110}
        height={50}
        onError={() => setError(true)}
        className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

export default function BrandsMarquee() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 overflow-hidden">
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-6 px-6">
            {brandNumbers.map((num) => (
              <BrandLogo key={`${copy}-${num}`} num={num} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}