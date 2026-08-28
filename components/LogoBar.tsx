import Image from 'next/image';

const partners = [
  { name: 'Logo 1', img: '/2.png' },
  { name: 'Logo 2', img: '/2.png' },
  { name: 'Logo 3', img: '/3.png' },
  { name: 'Logo 4', img: '/4.png' },
  { name: 'Logo 5', img: '/5.png' },
  { name: 'Logo 6', img: '/6.png' },
  { name: 'Logo 7', img: '/7.png' },
  { name: 'Logo 8', img: '/8.png' },
  { name: 'Logo 9', img: '/9.png' },
  { name: 'Logo 10', img: '/10.png' },
  { name: 'Logo 11', img: '/11.png' },
  { name: 'Logo 12', img: '/12.png' },
];

export default function LogoBar() {
  const list = [...partners, ...partners];

  return (
    <section className="home-logo-bar border-y border-black/5 bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex w-max animate-marquee items-center gap-16">
          {list.map((p, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={p.img}
                alt={`Decasofts client ${p.name}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
