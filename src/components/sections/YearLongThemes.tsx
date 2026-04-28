import { Check } from 'lucide-react'

const themes = [
  "Robotics",
  "Digital Skills",
  "Astronomy & Space Science",
  "Tech Toys & Electronics",
  "Aeroplanes & Rockets",
  "STEM Projects & Reverse Engineering",
  "Design Thinking & Innovation",
  "Sci-Fi Story Writing",
  "Rubik’s Cube",
  "Sudoku, Logic & Math Challenges"
]

export function YearLongThemes() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            Children Explore Different Real-World STEM Domains Across The Academic Year
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {themes.map((theme, i) => (
            <div key={i} className="bg-neutral-50 border border-neutral-100 p-6 rounded-2xl flex items-center justify-center text-center hover:bg-white hover:shadow-lg transition-all shadow-sm">
              <span className="text-lg font-bold text-neutral-800">{theme}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-medium italic text-primary-500 border-b-4 border-accent-teal pb-4 inline-block">
            Every theme combines hands-on creation, problem-solving, experimentation, and challenge-based learning.
          </p>
        </div>
      </div>
    </section>
  )
}
