'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Atom, Cpu, Dna, FlaskConical, Microscope, Brain, Rocket, BookOpen, Puzzle, Zap } from 'lucide-react'

const defaultSlides = [
  { icon: Rocket,    theme: '01', title: 'Robotics & Engineering',      desc: 'Build, break, rebuild — understanding mechanical systems hands-on.', image: '/images/robotics-real.jpg' },
  { icon: Atom,      theme: '02', title: 'Space Science & Astronomy',    desc: 'Scale, orbit, gravity — thinking like a planetary scientist.', image: '/images/hero-real.jpg' },
  { icon: Cpu,       theme: '03', title: 'Algorithmic Coding',           desc: 'Logic flows, pattern recognition, computational thinking without a screen.', image: '/images/lab-real-1.jpg' },
  { icon: Puzzle,    theme: '04', title: "Rubik's Logic",                desc: 'Pattern recognition and spatial reasoning compressed into a cube.', image: '/images/challenge-real.jpg' },
  { icon: Brain,     theme: '05', title: 'Cognitive Sudoku',             desc: 'Number logic, constraint thinking, and decision trees.', image: '/images/lab-real-2.jpg' },
  { icon: BookOpen,  theme: '06', title: 'Memory Mastery',               desc: 'Memory as a thinking tool — not a recitation technique.', image: '/images/lab-real-3.jpg' },
  { icon: Rocket,    theme: '07', title: 'Aeromodeling',                 desc: 'Physics of flight, aerodynamics, and real paper-to-air builds.', image: '/images/aeromodelling-real.jpg' },
  { icon: Microscope,theme: '08', title: 'STEM Research',                desc: 'Mini research cycles: question → observe → test → conclude.', image: '/images/discovery-real.jpg' },
  { icon: Zap,       theme: '09', title: 'Electronics & Circuits',       desc: 'Current, voltage, and real breadboard builds from scratch.', image: '/images/workshop-real.jpg' },
  { icon: FlaskConical, theme: '10', title: 'Critical Thinking',         desc: 'Logical fallacies, reasoning traps, and debate-style problem solving.', image: '/images/visit-group.jpg' },
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
                className="flex-shrink-0 w-72 md:w-80 bg-accent-surface border border-neutral-100 rounded-xl overflow-hidden hover:border-accent-teal/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group cursor-default"
              >
                <div className="relative h-44 md:h-48 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/75 via-[#1E2A44]/10 to-transparent" />
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="absolute top-5 right-5 text-4xl font-serif font-bold text-white/85 select-none">{slide.theme}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-serif font-bold text-primary-500 mb-3 leading-snug">{slide.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{slide.desc}</p>
                </div>
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
