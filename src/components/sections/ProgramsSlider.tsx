import { Atom, Cpu, FlaskConical, Microscope, Brain, Rocket, BookOpen, Puzzle, Zap, Plane, Lightbulb, Wrench } from 'lucide-react'

const defaultSlides = [
  { icon: Rocket,    theme: '01', title: 'Robotics', desc: 'Build something that moves using real testing.' },
  { icon: Atom,      theme: '02', title: 'Astronomy', desc: 'Observation journals, scale of space.' },
  { icon: Rocket,    theme: '03', title: 'Space Science', desc: 'Scale, orbit, gravity.' },
  { icon: Plane,     theme: '04', title: 'Aeromodeling', desc: 'Build and test model aeroplanes and rockets.' },
  { icon: Puzzle,    theme: '05', title: 'Rubik’s & Cognitive Sudoku', desc: 'Number logic and systems thinking.' },
  { icon: Brain,     theme: '06', title: 'Hands on STEM Projects', desc: 'Experimenting with physics and structural integrity.' },
  { icon: Zap,       theme: '07', title: 'Electronics & tech toys', desc: 'Circuit basics, mechanical movement.' },
  { icon: Lightbulb, theme: '08', title: 'Design Thinking & Innovation', desc: 'A real problem. Open brief.' },
  { icon: BookOpen,  theme: '09', title: 'Sci-Fi Story Writing', desc: 'Stories grounded in real science.' },
  { icon: Wrench,    theme: '10', title: 'How Stuff Works', desc: 'Real objects taken apart and examined.' },
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
