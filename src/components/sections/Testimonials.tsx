import { Card } from '../ui/Card'
import { Quote } from 'lucide-react'

export function Testimonials({ data }: { data?: any[] }) {
  const testimonials = data && data.length > 0 ? data : [
    {
      quote: "FunSmartism changed how I view my son's 'errors'. I now see them as starting points for new logic.",
      author: "Priya S.",
      role: "Parent of 10-year old"
    },
    {
      quote: "The insight report was a revelation. It decoded behaviors we've seen at home but didn't know how to channel.",
      author: "Rahul M.",
      role: "Parent of 12-year old"
    },
    {
      quote: "My daughter doesn't just build robots; she analyzes why they fail with a calm I've never seen before.",
      author: "Ananya K.",
      role: "Parent of 8-year old"
    }
  ]


  return (
    <section className="section-spacing bg-accent-surface">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            Trusted by thinking parents.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-10 bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-500 relative">
              <Quote className="absolute top-8 right-8 text-accent-teal/10" size={40} />
              <p className="text-primary-500 font-medium leading-relaxed mb-10 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif font-bold text-primary-500">{t.author}</p>
                <p className="text-mono text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">{t.location || t.role}</p>
              </div>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
