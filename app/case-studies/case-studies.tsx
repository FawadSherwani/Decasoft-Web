'use client'

import Image from 'next/image'
import Link from 'next/link'

const caseStudies = [
  { title: "Project Alpha", category: "Web Design", image: "/project1.jpg" },
  { title: "Project Beta", category: "Development", image: "/project2.jpg" },
  { title: "Project Gamma", category: "Marketing", image: "/project3.jpg" },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            Check out some of the impactful work we've done for our clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link href={`/case-studies/${study.title.toLowerCase()}`} key={index} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-gray-500">{study.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}