'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Quote } from 'lucide-react'
import { cn } from '@/lib/cn'

interface Vignette {
  title: string
  content: string
  age: string
}

export function VignetteAccordion({ items }: { items: Vignette[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {/* Desktop Layout: 3 Elegant Cards */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="p-10 rounded-[32px] bg-white border border-neutral-100 shadow-sm hover:shadow-huge transition-all duration-500 group flex flex-col h-full"
          >
            <div className="flex-grow">
               <span className="text-accent-teal font-mono text-[11px] uppercase tracking-widest font-bold mb-4 block">
                 {item.age}
               </span>
               <h3 className="text-2xl font-serif font-bold text-primary-500 mb-8 group-hover:text-accent-teal transition-colors leading-tight">
                 {item.title}
               </h3>
              <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-accent-teal/10 w-12 h-12" />
                <p className="text-neutral-500 leading-relaxed italic text-sm relative z-10 line-clamp-6">
                    "{item.content}"
                  </p>
               </div>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-50">
               <span className="text-[11px] font-bold text-primary-300 uppercase tracking-widest">Observed thinking moment</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout: Accordion */}
      <div className="lg:hidden space-y-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="border border-neutral-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-6 flex items-center justify-between group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-accent-teal font-mono text-[9px] uppercase tracking-widest font-bold">
                  {item.age}
                </span>
                <h3 className={cn(
                  "text-lg font-serif font-bold transition-colors",
                  openIndex === i ? "text-accent-teal" : "text-primary-500"
                )}>
                  {item.title}
                </h3>
              </div>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                openIndex === i ? "bg-accent-teal text-white" : "bg-accent-teal/5 text-accent-teal"
              )}>
                {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>
            
            <div 
              className={cn(
                "transition-all duration-500 ease-in-out overflow-hidden",
                openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-8 border-t border-neutral-50 pt-6">
                <p className="text-neutral-600 leading-relaxed italic font-light text-base">
                  "{item.content}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
