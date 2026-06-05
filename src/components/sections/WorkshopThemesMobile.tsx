'use client'

import { useState } from 'react'
import { Milestone, ChevronLeft, ChevronRight } from 'lucide-react'

export function WorkshopThemesMobile({ themes }: { themes: { theme: string, desc: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTheme = () => setCurrentIndex((prev) => (prev + 1) % themes.length)
  const prevTheme = () => setCurrentIndex((prev) => (prev - 1 + themes.length) % themes.length)

  return (
    <div className="md:hidden flex flex-col items-center px-6 pb-10">
      <div className="w-full max-w-[320px] bg-white border border-neutral-100 p-8 rounded-[2.5rem] shadow-xl flex flex-col min-h-[300px]">
        <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
          <Milestone size={24} />
        </div>
        <h4 className="text-lg font-serif font-bold text-primary-500 mb-4">{themes[currentIndex].theme}</h4>
        <p className="text-sm text-neutral-500 leading-relaxed font-light italic">{themes[currentIndex].desc}</p>
        
        <div className="mt-auto pt-6 flex gap-4 justify-center">
          <button 
            onClick={prevTheme}
            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-neutral-50 transition-colors shadow-sm"
            aria-label="Previous theme"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextTheme}
            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-neutral-50 transition-colors shadow-sm"
            aria-label="Next theme"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
