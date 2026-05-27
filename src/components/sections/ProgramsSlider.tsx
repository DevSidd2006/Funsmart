import { Atom, Cpu, FlaskConical, Microscope, Brain, Rocket, BookOpen, Puzzle, Zap } from 'lucide-react'

const defaultSlides = [
  { icon: Rocket,    theme: '01', title: 'Robotics & Engineering',      desc: 'Build, break, rebuild — understanding mechanical systems.' },
  { icon: Atom,      theme: '02', title: 'Space Science',    desc: 'Scale, orbit, gravity — thinking like a scientist.' },
  { icon: Cpu,       theme: '03', title: 'Algorithmic Coding',           desc: 'Logic flows, pattern recognition without a screen.' },
  { icon: Puzzle,    theme: '04', title: "Rubik's Logic",                desc: 'Pattern recognition and spatial reasoning compressed.' },
  { icon: Brain,     theme: '05', title: 'Cognitive Sudoku',             desc: 'Number logic, constraint thinking, and decision trees.' },
  { icon: BookOpen,  theme: '06', title: 'Memory Mastery',               desc: 'Memory as a thinking tool — not a recitation technique.' },
  { icon: Rocket,    theme: '07', title: 'Aeromodeling',                 desc: 'Physics of flight, aerodynamics, and real builds.' },
  { icon: Microscope,theme: '08', title: 'STEM Research',                desc: 'Mini research cycles: question → observe → test.' },
  { icon: Zap,       theme: '09', title: 'Electronics',       desc: 'Current, voltage, and real breadboard builds.' },
  { icon: FlaskConical, theme: '10', title: 'Critical Thinking',         desc: 'Logical fallacies and debate-style problem solving.' },
]

export function ProgramsSlider() {
  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-5xl mx-auto">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 leading-tight whitespace-nowrap md:whitespace-normal">
            10 themes. 10 worlds to explore.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {defaultSlides.map((slide, i) => {
            const Icon = slide.icon
            return (
              <div
                key={i}
                className="bg-[#F4F9FA] border border-[#E1F0F5] rounded-2xl p-5 flex flex-col items-center text-center hover:bg-[#EAF5F8] hover:border-accent-teal/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent-teal mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-primary-500 leading-tight">
                  {slide.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
