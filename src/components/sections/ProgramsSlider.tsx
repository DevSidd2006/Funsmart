import { Atom, Cpu, Dna, FlaskConical, Microscope, Brain, Rocket, BookOpen, Puzzle, Zap } from 'lucide-react'

const domains = [
  { icon: Rocket,       title: 'Robotics & Engineering' },
  { icon: Atom,         title: 'Space Science & Astronomy' },
  { icon: Cpu,          title: 'Algorithmic Coding' },
  { icon: Puzzle,       title: "Rubik's Logic" },
  { icon: Brain,        title: 'Cognitive Sudoku' },
  { icon: BookOpen,     title: 'Memory Mastery' },
  { icon: Rocket,       title: 'Aeromodeling' },
  { icon: Microscope,   title: 'STEM Research' },
  { icon: Zap,          title: 'Electronics & Circuits' },
  { icon: FlaskConical, title: 'Critical Thinking' },
]

export function ProgramsSlider() {
  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            10 themes. 10 worlds to explore.
          </h2>
        </div>

        {/* Grid — 5 columns × 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {domains.map((domain, i) => {
            const Icon = domain.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 bg-accent-surface border border-neutral-100 rounded-2xl px-5 py-7 hover:border-accent-teal/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-colors duration-300">
                  <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-serif font-bold text-primary-500 leading-snug">
                  {domain.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
