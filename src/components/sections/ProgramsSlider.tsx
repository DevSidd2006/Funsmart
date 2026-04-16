'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Atom, Cpu, Dna, FlaskConical, Microscope, Brain, Rocket, BookOpen, Puzzle, Zap } from 'lucide-react'

const defaultSlides = [
  { icon: Rocket,    theme: '01', title: 'Robotics & Engineering',      desc: 'Build, break, rebuild — understanding mechanical systems hands-on.' },
  { icon: Atom,      theme: '02', title: 'Space Science & Astronomy',    desc: 'Scale, orbit, gravity — thinking like a planetary scientist.' },
  { icon: Cpu,       theme: '03', title: 'Algorithmic Coding',           desc: 'Logic flows, pattern recognition, computational thinking without a screen.' },
  { icon: Puzzle,    theme: '04', title: "Rubik's Logic",                desc: 'Pattern recognition and spatial reasoning compressed into a cube.' },
  { icon: Brain,     theme: '05', title: 'Cognitive Sudoku',             desc: 'Number logic, constraint thinking, and decision trees.' },
  { icon: BookOpen,  theme: '06', title: 'Memory Mastery',               desc: 'Memory as a thinking tool — not a recitation technique.' },
  { icon: Rocket,    theme: '07', title: 'Aeromodeling',                 desc: 'Physics of flight, aerodynamics, and real paper-to-air builds.' },
  { icon: Microscope,theme: '08', title: 'STEM Research',                desc: 'Mini research cycles: question → observe → test → conclude.' },
  { icon: Zap,       theme: '09', title: 'Electronics & Circuits',       desc: 'Current, voltage, and real breadboard builds from scratch.' },
  { icon: FlaskConical, theme: '10', title: 'Critical Thinking',         desc: 'Logical fallacies, reasoning traps, and debate-style problem solving.' },
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
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              10 themes. 10 worlds to explore.
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
                className="flex-shrink-0 w-72 md:w-80 bg-accent-surface border border-neutral-100 rounded-xl p-8 hover:border-accent-teal/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-colors duration-300">
                    <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-serif font-bold text-primary-100 select-none">{slide.theme}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-3 leading-snug">{slide.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{slide.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-8 justify-center">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-accent-teal' : 'w-3 bg-neutral-200'
              }`}
              aria-label={`Go to slide group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
