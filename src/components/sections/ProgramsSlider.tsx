'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Bot, Cpu, Telescope, Zap, Rocket, Wrench, Lightbulb, PenTool, Puzzle, BrainCircuit } from 'lucide-react'

const defaultSlides = [
  { icon: Bot, theme: '01', title: 'Robotics', desc: 'Build robots using sensors and electronics to solve specific challenges.' },
  { icon: Cpu, theme: '02', title: 'Digital Skills', desc: 'Practical computing thinking and understanding how digital systems function.' },
  { icon: Telescope, theme: '03', title: 'Astronomy & Space Science', desc: 'Explore the universe through observation and space-themed projects.' },
  { icon: Zap, theme: '04', title: 'Tech Toys & Electronics', desc: 'Open up mechanical and electronic toys to understand mechanisms.' },
  { icon: Rocket, theme: '05', title: 'Aeroplanes & Rockets', desc: 'Design, build, and test models that fly — understanding aerodynamics.' },
  { icon: Wrench, theme: '06', title: 'STEM Projects & Reverse Engineering', desc: 'Real-world system analysis and hands-on mechanical building.' },
  { icon: Lightbulb, theme: '07', title: 'Design Thinking & Innovation', desc: 'Identify problems and redesign products through creative solutions.' },
  { icon: PenTool, theme: '08', title: 'Sci-Fi Story Writing', desc: 'Combine science concepts with imagination to create future worlds.' },
  { icon: Puzzle, theme: '09', title: "Rubik's Cube", desc: 'Spatial reasoning and logic through the world\'s most famous 3D puzzle.' },
  { icon: BrainCircuit, theme: '10', title: 'Sudoku, Logic & Math Challenges', desc: 'Puzzles and challenges that encourage multiple paths to one answer.' },
]

export function ProgramsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const VISIBLE = 3 // cards visible at once
  const maxIndex = defaultSlides.length - VISIBLE

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex))
    setActiveIndex(clamped)
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / defaultSlides.length
      scrollRef.current.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-4">
              Children Explore Different Real-World <br className="hidden md:block" />
              <span className="text-accent-teal italic font-light">STEM Domains Across the Academic Year</span>
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              aria-label="Previous theme"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              aria-label="Next theme"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {defaultSlides.map((slide, i) => {
            const Icon = slide.icon
            return (
              <div
                key={i}
                className="flex-shrink-0 w-72 md:w-80 bg-accent-surface border border-neutral-100 rounded-2xl p-8 hover:border-accent-teal/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-colors duration-300">
                    <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-serif font-bold text-primary-100 select-none">{slide.theme}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-3 leading-snug">{slide.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">{slide.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
           <p className="text-lg text-primary-500 font-serif font-bold italic">
             Every theme combines hands-on creation, problem-solving, experimentation, and challenge-based learning.
           </p>
        </div>
      </div>
    </section>
  )
}
