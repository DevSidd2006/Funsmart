import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

const categories = [
  {
    title: "Robotics & Electronics",
    desc: "Children building robots, testing sensors, experimenting with circuits, and exploring electronics hands-on."
  },
  {
    title: "STEM Challenges & Problem Solving",
    desc: "Moments from hands-on challenges where students test ideas, retry solutions, redesign structures, and solve unfamiliar problems."
  },
  {
    title: "Reverse Engineering & How Stuff Works",
    desc: "Children opening appliances, understanding mechanisms, exploring systems, and learning how real-world objects function."
  },
  {
    title: "Rockets, Aeroplanes & Space Science",
    desc: "Hands-on activities connected to flight, space science, astronomy, rockets, and model-building explorations."
  },
  {
    title: "Design Thinking & Innovation Activities",
    desc: "Creative building, redesign tasks, brainstorming activities, and innovation-focused workshops."
  },
  {
    title: "Edu-Events & Scientist Interactions",
    desc: "Sessions, exhibitions, showcases, and interactions with scientists, innovators, engineers, and experts from real-world fields."
  },
  {
    title: "Student Projects & Take-Home Creations",
    desc: "Projects designed, built, tested, and taken home by students across different STEM themes."
  }
]

const invisibleMoments = [
  "the child who retries independently",
  "the student who starts asking deeper questions",
  "the team discussing multiple approaches",
  "the quiet child confidently presenting a project",
  "the excitement after solving something unfamiliar"
]

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero & Intro */}
      <section className="pt-40 pb-20 bg-[#1E2A44] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="container-fluid max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
            Real Projects. Real Challenges. <span className="text-accent-teal">Real Learning Moments.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B7E3DD] leading-relaxed max-w-4xl mx-auto font-medium mb-12">
            A glimpse into the hands-on RoboSTEM environment inside FunSmartism — where children build, experiment, solve, discuss, redesign, and explore through real-world learning experiences.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto text-left shadow-lg">
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Every project, challenge, workshop, exhibition, and discussion inside FunSmartism is designed to encourage active participation instead of passive learning.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              This gallery captures moments from workshops, STEM challenges, take-home creations, edu-events, scientist interactions, exhibitions, and year-long learning sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
                <div className="aspect-video bg-neutral-200 relative flex items-center justify-center">
                  <span className="text-neutral-400 font-mono text-sm tracking-widest uppercase">Photos</span>
                  {/* Overlay for image in real life */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-serif text-[#16213B] mb-3">{cat.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Observation Strip */}
      <section className="py-16 bg-[#2FB5A3] text-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-serif font-bold leading-tight">
                What These Photos Usually Don’t Fully Capture
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-xl font-medium mb-6">The most important moments are often invisible in pictures:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                {invisibleMoments.map((moment, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="text-white mt-1 flex-shrink-0" size={18} />
                    <span className="text-white/90 font-medium leading-snug">{moment}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl italic font-serif font-bold text-[#1E2A44] bg-white/20 inline-block px-6 py-2 rounded-full">
                That experience becomes visible only inside the environment itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center border-t border-neutral-100">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            Want To Experience It Beyond Photos?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            The gallery shows the activities. A visit helps parents experience the learning environment, session culture, and student participation much more clearly.
          </p>
          <Link href="/schedule-visit">
            <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white border-none px-12 py-6 rounded-full font-bold shadow-xl shadow-accent-teal/20">
              Schedule A Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
