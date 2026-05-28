import { Calendar, Globe, Users } from 'lucide-react'

const events = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600',
    title: 'Annual Science Expo',
    desc: 'Children present their own research findings to a panel of scientists and industry professionals.',
    date: 'March 2025',
    tag: 'Flagship Event',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600',
    title: 'Parent Insight Day',
    desc: 'A live observation session where parents watch their child work through a real challenge.',
    date: 'Monthly',
    tag: 'For Parents',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600',
    title: 'Scientist Speaks Series',
    desc: 'Working professionals from ISRO, engineering firms, and biotech visit for Q&A sessions.',
    date: 'Quarterly',
    tag: 'Special Access',
  },
]

export function LatestInsights() {
  return (
    <section id="edu-events" className="section-spacing bg-accent-surface">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-4 leading-tight">
            Edu events with a scientist-friendly edge.
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Year-long students and families enjoy real sessions, live discovery events and guided parent conversations that connect curiosity to concrete thinking habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <article key={event.title} className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700">
                  {event.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-accent-teal mb-3">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1E2A44] mb-3 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
