'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 600, suffix: '+', label: 'Delivered Successful Projects' },
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Team Members' },
  { value: 450, suffix: '+', label: 'Happy Clients' },
]

function Counter({ to }: { to: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5 })
      return () => controls.stop()
    }
  }, [isInView, to, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="group flex flex-col items-center cursor-default">
            {/* Outline Text Style — fills with color on hover */}
            <p
              className="text-5xl lg:text-7xl font-black text-transparent transition-colors duration-300 group-hover:text-[#b91c1c]"
              style={{ WebkitTextStroke: '1px #b91c1c' }}
            >
              <Counter to={stat.value} />
              {stat.suffix}
            </p>
            <p className="text-gray-900 font-semibold text-sm mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}