'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const defaultTestimonials = [
  {
    quote: "I came expecting a progress report like school. What I got was a conversation about how my daughter spends 10 minutes examining something before she ever tries to use it. That's not something any school has ever told me.",
    author: "Priya M.",
    role: "Parent · Thinking Reset Workshop",
    initial: "PM",
  },
  {
    quote: "My son has been 'easily distracted' according to every teacher he's had. The team showed me he isn't distracted — he loses interest when the challenge isn't deep enough. That reframe changed everything.",
    author: "Arvind M.",
    role: "Parent · Thinking Lab Year-Long",
    initial: "AM",
  },
  {
    quote: "She built a working model on Day 4 and then quietly started dismantling it to see if she could build it differently. Nobody asked her to. That moment told me more than three years of school report cards.",
    author: "Sunita R.",
    role: "Parent · Thinking Reset Workshop",
    initial: "SR",
  },
]

function getInitials(name?: string) {
  if (!name) return 'P'
  const parts = name
    .split(' ')
    .map((part) => part.replace(/[^A-Za-z]/g, ''))
    .filter(Boolean)

  if (parts.length === 0) return 'P'
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase()
  return `${parts[0].slice(0, 1)}${parts[1].slice(0, 1)}`.toUpperCase()
}

function getMetaLine(testimonial: any) {
  if (testimonial.role) return testimonial.role

  const bits = ['Parent']
  if (testimonial.childAge) bits.push(`${testimonial.childAge}-year-old`)
  if (testimonial.program) bits.push(testimonial.program)
  if (testimonial.location) bits.push(testimonial.location)

  return bits.join(' · ')
}

export function TestimonialsSlider({ data }: { data?: any[] }) {
  const testimonials = data && data.length > 0 ? data : defaultTestimonials
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  useEffect(() => {
    const t = setInterval(next, 8000)
    return () => clearInterval(t)
  }, [testimonials.length])

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              Unexpected Discoveries through handling unfamiliar challenges..
            </h2>
            <p className="text-neutral-500 mt-4 text-lg">
              Parents observing <span className="underline decoration-accent-teal decoration-2 underline-offset-4">real</span> change in their children.
            </p>
          </div>

          {/* Testimonial Cards Slider */}
          <div className="relative min-h-[400px]">
            {testimonials.map((t: any, i: number) => (
              <div
                key={i}
                className={`transition-all duration-700 absolute inset-0 ${
                  i === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
              >
                <div className="bg-[#EAE6D8]/40 border border-[#EAE6D8] rounded-[40px] p-10 md:p-16 shadow-xl relative h-full flex flex-col justify-center">
                  <Quote className="absolute top-10 right-10 text-accent-teal/10" size={80} />
                  
                  <div className="relative z-10 border-l-4 border-accent-teal pl-8">
                    <p className="text-xl md:text-2xl lg:text-3xl text-primary-500 font-light leading-relaxed italic mb-10">
                      "{t.quote}"
                    </p>
                    
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-accent-teal flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {t.initial || getInitials(t.author)}
                      </div>
                      <div>
                        <p className="text-xl font-serif font-bold text-primary-500">{t.author}</p>
                        <p className="text-xs font-bold text-neutral-400 tracking-wide mt-1">
                          {getMetaLine(t)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-12 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? 'w-12 bg-accent-teal' : 'w-2 bg-neutral-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
