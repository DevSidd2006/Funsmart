'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Quote } from 'lucide-react'

interface Vignette {
  title: string
  content: string
  age: string
}

export function VignetteAccordion({ items }: { items: Vignette[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="border border-neutral-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-6 md:p-8 flex items-center justify-between group hover:bg-neutral-50/50 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="text-accent-teal font-mono text-[10px] uppercase tracking-widest font-bold">
                {item.age}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-500 group-hover:text-accent-teal transition-colors">
                {item.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all">
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>
          
          <div 
            className={`transition-all duration-500 ease-in-out ${
              openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Quote className="text-accent-teal/20" size={40} />
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed italic font-light">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
