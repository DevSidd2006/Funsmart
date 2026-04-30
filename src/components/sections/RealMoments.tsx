import Image from 'next/image'

export function RealMoments({
  data,
  heading = 'Real session moments in box form.',
  subheading = 'These are the moments where children show how they think, not only what they finish.',
  label = '',
}: {
  data?: any[]
  heading?: string
  subheading?: string
  label?: string
}) {
  const defaultMoments = [
    {
      id: 1,
      image: '/images/hero-child-discovery.png',
      label: 'SCIENTIFIC METHOD',
      title: 'Precision in action',
      desc: 'A child learns to watch cause and effect through a mechanical build, not just follow instructions.',
    },
    {
      id: 2,
      image: '/images/lab-observation.png',
      label: 'FACILITATOR INSIGHT',
      title: 'Observation first',
      desc: 'The team pays attention to the small decisions that reveal a childs thinking style.',
    },
    {
      id: 3,
      image: '/images/discovery-moment.png',
      label: 'PROCESS OF DISCOVERY',
      title: 'Discovery through doing',
      desc: 'Every session becomes a real-world problem where the process is the most valuable outcome.',
    },
  ]

  const moments = data && data.length > 0 ? data : defaultMoments

  return (
    <section className="section-spacing bg-accent-surface">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            {heading}
          </h2>
          <p className="text-lg text-neutral-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {moments.map((mom, idx) => {
            const title = mom.title || mom.caption || `Session ${idx + 1}`
            const description = mom.desc || mom.caption || 'A moment captured while a child explores a hands-on thinking challenge.'
            const imageUrl = typeof mom.image === 'string' ? mom.image : (mom.imageUrl || 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800')

            return (
              <div
                key={mom._id || mom.id || idx}
                className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_35px_75px_-45px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-[12px] uppercase tracking-[0.28em] text-primary-600 font-bold shadow-sm">
                      {mom.label}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold text-primary-600 mb-4 leading-snug">
                    {title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
