'use client'

import React, { useState } from 'react'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? testimonials : testimonials.slice(0, 2)

  return (
    <div className="container-fluid max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] mb-16 text-center">
        In their own words.
      </h2>
      
      <div className="grid gap-6 mb-10">
        {visible.map((t, idx) => (
          <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-neutral-100 flex gap-6 md:gap-8 flex-col sm:flex-row items-start">
            <div className="text-accent-teal opacity-50 shrink-0">
              <Quote size={40} />
            </div>
            <div>
              <p className="text-lg md:text-xl text-[#1E2A44] font-serif leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-[#1E2A44] mb-1">{t.author}</p>
                <p className="text-xs font-mono text-accent-teal uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center">
          <button 
            onClick={() => setShowAll(true)}
            className="text-accent-teal font-semibold text-lg hover:text-[#1E2A44] transition-colors"
          >
            See more parent stories →
          </button>
        </div>
      )}
    </div>
  )
}
