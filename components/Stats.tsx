const stats = [
  { value: '12', suffix: 'M', label: 'Lorem Ipswm' },
  { value: '273', suffix: '+', label: 'Lorem Ipswm' },
  { value: '100', suffix: '%', label: 'Lorem Ipswm' },
  { value: '73', suffix: '+', label: 'Lorem Ipswm' },
]

export default function Stats() {
  return (
    <section className="bg-gray-50 py-16 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className="stat-num text-6xl lg:text-7xl">
              {stat.value}
              <span className="text-4xl">{stat.suffix}</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
