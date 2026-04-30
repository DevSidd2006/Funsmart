import { Bot, Wrench, Rocket, Blocks, MonitorOff, BrainCircuit, Telescope, PenTool } from 'lucide-react'

export function WhatStudentsDo() {
  const activities = [
    { icon: Bot, text: "build robots using sensors and electronics" },
    { icon: Wrench, text: "open real appliances to understand how things work" },
    { icon: BrainCircuit, text: "create mechanical and electronic tech toys" },
    { icon: Rocket, text: "design rockets and aeroplane models" },
    { icon: Blocks, text: "solve hands-on STEM challenges" },
    { icon: PenTool, text: "build roller coasters and structures using simple materials" },
    { icon: Telescope, text: "explore astronomy and space science" },
    { icon: MonitorOff, text: "redesign products through design thinking activities" },
    { icon: BrainCircuit, text: "create sci-fi stories and innovation concepts" },
    { icon: Blocks, text: "improve logic through Rubik’s Cube, Sudoku, and math challenges" },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            What Happens Inside FunSmartism?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light mb-6">
            Children do not sit through long lectures or copy fixed steps from notebooks or screens.
          </p>
          <p className="text-xl md:text-2xl text-accent-teal italic font-light leading-relaxed">
            They build, open, test, redesign, discuss, and experiment through hands-on RoboSTEM themes across the academic year.
          </p>
        </div>

        <div className="bg-[#FAF9F6] rounded-[3rem] p-10 md:p-16 shadow-sm border border-neutral-100">
          <h3 className="text-xl font-bold text-primary-500 mb-10 text-center uppercase tracking-widest text-[12px] opacity-70">
            Depending on the month’s theme, students may:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {activities.map((activity, i) => {
              const Icon = activity.icon
              return (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <p className="text-neutral-700 font-medium leading-relaxed">
                    {activity.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold shadow-lg">
                All projects made are take-home creations.
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
