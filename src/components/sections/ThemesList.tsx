import Image from 'next/image'
import Link from 'next/link'
import { Bot, Wrench, Rocket, Blocks, Plane, Puzzle, BrainCircuit, Telescope, Lightbulb, BookOpen } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

export function ThemesList() {
  const activities = [
    { icon: Bot, text: "Robotics" },
    { icon: Telescope, text: "Astronomy" },
    { icon: Rocket, text: "Space Science" },
    { icon: Plane, text: "Aeromodeling" },
    { icon: Puzzle, text: "Rubik’s & Cognitive Sudoku" },
    { icon: Blocks, text: "Hands on STEM Projects" },
    { icon: BrainCircuit, text: "Electronics & tech toys" },
    { icon: Lightbulb, text: "Design Thinking & Innovation" },
    { icon: BookOpen, text: "Sci-Fi Story Writing" },
    { icon: Wrench, text: "How Stuff Works" },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <SectionReveal className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
            10 themes. 10 worlds to explore.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF9F6] rounded-[3rem] p-8 md:p-16 shadow-sm border border-neutral-100">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-primary-500 mb-10 uppercase tracking-widest text-[12px] opacity-70">
              Depending on the month’s theme, domains explored include:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, i) => {
                const Icon = activity.icon
                return (
                  <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <p className="text-neutral-700 font-medium leading-tight text-sm">
                      {activity.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-video md:aspect-square rounded-[2rem] overflow-hidden group">
              <Image 
                src="/images/discovery-real.jpg" 
                alt="Hands-on learning at FunSmartism" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              <Link href="/gallery" className="hidden md:flex absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-primary-500 uppercase tracking-widest shadow-lg hover:bg-white transition-colors">
                View Gallery →
              </Link>
            </div>
            <div className="flex md:hidden justify-center mt-6">
              <Link href="/gallery" className="bg-white border border-neutral-200 px-6 py-3 rounded-full text-[11px] font-bold text-primary-500 uppercase tracking-widest shadow-sm hover:bg-neutral-50 transition-colors">
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
