'use client'

import { useEffect, useRef, useState } from 'react'

// ✅ OPTIMIZED: Removed framer-motion dependency (heavy JS bundle!)
// Replaced with lightweight IntersectionObserver + CSS counter animation
// Saves ~30KB JS on mobile = faster TTI

const stats = [
  { value: 600, suffix: '+', label: 'Delivered Successful Projects' },
  { value: 7,   suffix: '+', label: 'Years of Experience' },
  { value: 20,  suffix: '+', label: 'Team Members' },
  { value: 450, suffix: '+', label: 'Happy Clients' },
]

function Counter({ to, started }: { to: number; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const step = 16 // ~60fps
    const increment = to / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [started, to])

  return <span>{count}</span>
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // ✅ IntersectionObserver — only animate when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-white py-16"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 160px' }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="group flex flex-col items-center cursor-default">
            <p
              className="text-5xl lg:text-7xl font-black text-transparent transition-colors duration-300 group-hover:text-[#b91c1c]"
              style={{ WebkitTextStroke: '1px #b91c1c' }}
            >
              <Counter to={stat.value} started={started} />
              {stat.suffix}
            </p>
            <p className="text-gray-900 font-semibold text-sm mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
