'use client'

import { Bot, Cpu, Telescope, Zap, Rocket, Wrench, Lightbulb, PenTool, Puzzle, BrainCircuit } from 'lucide-react'

const domains = [
  { icon: Bot, title: 'Robotics' },
  { icon: Cpu, title: 'Digital Skills' },
  { icon: Telescope, title: 'Astronomy & Space Science' },
  { icon: Zap, title: 'Tech Toys & Electronics' },
  { icon: Rocket, title: 'Aeroplanes & Rockets' },
  { icon: Wrench, title: 'STEM Projects & Reverse Engineering' },
  { icon: Lightbulb, title: 'Design Thinking & Innovation' },
  { icon: PenTool, title: 'Sci-Fi Story Writing' },
  { icon: Puzzle, title: "Rubik's Cube" },
  { icon: BrainCircuit, title: 'Sudoku, Logic & Math Challenges' },
]

export function ProgramsSlider() {
  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-4">
            Children Explore Different Real-World <br className="hidden md:block" />
            <span className="text-accent-teal italic font-light">STEM Domains Across the Academic Year</span>
          </h2>
        </div>

        {/* 2-Row Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {domains.map((domain, i) => {
            const Icon = domain.icon
            return (
              <div
                key={i}
                className="bg-accent-surface border border-neutral-100 rounded-2xl p-6 flex flex-col items-center text-center hover:border-accent-teal/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center mb-4 group-hover:bg-accent-teal transition-colors duration-300">
                  <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-base font-serif font-bold text-primary-500 leading-snug">{domain.title}</h3>
              </div>
            )
          })}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
           <p className="text-lg text-primary-500 font-serif font-bold italic opacity-80">
             Every theme combines hands-on creation, problem-solving, experimentation, and challenge-based learning.
           </p>
        </div>
      </div>
    </section>
  )
}
