'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const defaultTestimonials = [
  {
    quote: "I came expecting a progress report like school. What I got was a conversation about how my daughter spends 10 minutes examining something before she ever tries to use it. That's not something any school has ever told me.",
    author: "Priya M.",
    role: "Parent · 11-year-old · Thinking Reset Workshop",
    initial: "PM",
  },
  {
    quote: "My son has been 'easily distracted' according to every teacher he's had. The team showed me he isn't distracted — he loses interest when the challenge isn't deep enough. That reframe changed everything.",
    author: "Arvind M.",
    role: "Parent · 13-year-old · Year-Long RoboSTEM Lab",
    initial: "AM",
  },
  {
    quote: "She built a working model on Day 4 and then quietly started dismantling it to see if she could build it differently. Nobody asked her to. That moment told me more than three years of school report cards.",
    author: "Sunita R.",
    role: "Parent · 10-year-old · Thinking Reset Workshop",
    initial: "SR",
  },
  {
    quote: "At first he kept asking for help every few minutes. Slowly he started retrying on his own. That shift was gradual — and it's stayed.",
    author: "Parent",
    role: "Parent · 9-year-old · Year-Long Program",
    initial: "P",
  },
  {
    quote: "She came home and started opening old toys just to understand how they worked. I didn't expect that from a 10-day workshop.",
    author: "Parent",
    role: "Parent · 11-year-old · 10-Day Workshop",
    initial: "P",
  },
]

export function TestimonialsSlider({ data }: { data?: any[] }) {
  const testimonials = data && data.length > 0 ? data : defaultTestimonials
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section-spacing bg-[#1E2A44] text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Trusted by thinking parents.
            </h2>
          </div>

          {/* Card */}
          <div className="relative bg-white/8 border border-white/10 rounded-2xl p-10 md:p-14 shadow-2xl min-h-[280px] flex flex-col justify-between">
            <Quote className="absolute top-8 right-8 text-[#2FB5A3]/20" size={50} />

            {/* Testimonial content */}
            <div className="relative z-10">
              {testimonials.map((t: any, i: number) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current ? 'opacity-100 translate-y-0' : 'opacity-0 absolute inset-0 pointer-events-none translate-y-2'
                  }`}
                >
                  <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed italic mb-10">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#2FB5A3] flex items-center justify-center text-white font-bold text-sm font-mono flex-shrink-0">
                      {t.initial || (t.author?.slice(0, 2).toUpperCase())}
                    </div>
                    <div>
                      <p className="font-serif font-bold text-white">{t.author}</p>
                      <p className="text-mono text-[10px] text-white/40 mt-0.5 uppercase tracking-widest">
                        {t.location || t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#2FB5A3]' : 'w-3 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/10 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/10 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
