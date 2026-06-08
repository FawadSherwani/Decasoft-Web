const techCards = [
  {
    label: 'F',
    title: 'Front-End',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-brands fa-react', 'fa-brands fa-bootstrap', 'fa-brands fa-vuejs', 'fa-brands fa-html5', 'fa-brands fa-css3-alt'],
    active: false,
  },
  {
    label: 'B',
    title: 'Back-End',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-brands fa-react', 'fa-brands fa-bootstrap', 'fa-brands fa-vuejs', 'fa-brands fa-node', 'fa-brands fa-php'],
    active: true,
  },
  {
    label: 'M',
    title: 'Mobile Technology',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-brands fa-apple', 'fa-brands fa-android', 'fa-brands fa-react', 'fa-brands fa-bootstrap'],
    active: false,
  },
  {
    label: null,
    labelIcon: 'fa-brands fa-js',
    title: 'JavaScript',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-brands fa-react', 'fa-brands fa-bootstrap', 'fa-brands fa-vuejs'],
    active: false,
  },
  {
    label: 'S',
    title: 'Server',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-brands fa-linux', 'fa-brands fa-aws', 'fa-brands fa-docker'],
    active: false,
  },
  {
    label: 'D',
    title: 'Database',
    desc: 'In web technologies, your website is the first entity that interacts with the visitor.',
    icons: ['fa-solid fa-database', 'fa-brands fa-bootstrap'],
    active: false,
  },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCards.map((card, i) => (
          <div key={i} className={`tech-card rounded-xl p-6 card-hover cursor-pointer ${card.active ? 'active bg-primary/5' : ''}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${card.active ? 'bg-primary' : 'bg-primary/10'}`}>
                {card.labelIcon ? (
                  <i className={`${card.labelIcon} ${card.active ? 'text-white' : 'text-primary'} text-2xl font-black`}></i>
                ) : (
                  <span className={`font-black text-2xl ${card.active ? 'text-white' : 'text-primary'}`}>{card.label}</span>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mt-1">{card.desc}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {card.icons.map((icon, j) => (
                <span key={j} className={`text-lg ${card.active ? 'text-primary' : 'text-gray-400'}`}>
                  <i className={icon}></i>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
