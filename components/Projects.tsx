import Image from 'next/image'

const projects = [
  {
    title: 'DOCTORFINDY',
    desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80',
    bg: 'bg-[#1a3a6b]',
    tagBg: 'bg-blue-700',
    textColor: 'text-blue-300',
    descColor: 'text-blue-200',
    imgBg: 'bg-blue-800',
  },
  {
    title: 'MOHKM',
    desc: 'DoctorFindy is a cutting-edge online service that aims to revolutionize the way individuals find and connect with healthcare professionals. Designed with convenience in mind.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
    bg: 'bg-[#1a6b2a]',
    tagBg: 'bg-green-700',
    textColor: 'text-green-300',
    descColor: 'text-green-200',
    imgBg: 'bg-green-800',
  },
  {
    title: 'THE SNORKEL STORE',
    desc: 'Snorkel Store is the ultimate Snorkeling Equipment And Adventure Resource. DoctorFindy is a cutting-edge online service.',
    tags: ['Web Development', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    bg: 'bg-[#1a3a6b]',
    tagBg: 'bg-blue-700',
    textColor: 'text-blue-300',
    descColor: 'text-blue-200',
    imgBg: 'bg-blue-800',
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-primary text-sm font-semibold mb-1">Learn How We Can Make A Real Impact</p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Get Started With World-Class<br />Tech Team
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`project-card ${project.bg} rounded-2xl p-6 text-white`}>
              <p className={`text-xs font-bold tracking-widest ${project.textColor} mb-3`}>{project.title}</p>
              <p className={`text-xs ${project.descColor} leading-relaxed mb-4`}>{project.desc}</p>
              <div className="flex gap-1 mb-4 flex-wrap">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`text-xs ${project.tagBg} px-2 py-0.5 rounded`}>{tag}</span>
                ))}
              </div>
              <div className={`${project.imgBg} rounded-xl overflow-hidden h-[160px] relative`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
