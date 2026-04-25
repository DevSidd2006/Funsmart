import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { Beaker, Cpu, Rocket, Map } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Activities | FunSmartism',
  description: 'Unscripted RoboSTEM activities designed to reveal how your child thinks. Coding, Robotics, Space Science, and more.',
  keywords: ['STEM activities', 'robotics', 'coding for kids', 'space science', 'thinking modules'],
}

const activityCategories = [
  {
    title: 'Thinking Modules',
    icon: Cpu,
    desc: 'Unscripted sessions covering Coding, Robotics, STEM, Space Science, and Electronics. Designed to reveal and refine how your child approaches complexity.',
    image: '/images/hero-child-discovery.png'
  },
  {
    title: 'Tools for Thought',
    icon: Beaker,
    desc: 'Specialized range of brain-boosting Edu Toys, including Rubik\'s Cubes from 2x2 to 5x5, designed to spark curiosity and enhance intelligence.',
    image: '/images/discovery-moment.png'
  },
  {
    title: 'Expert Immersions',
    icon: Rocket,
    desc: 'Exclusive events and industrial visits where students witness real-world processes and meet industry experts to inspire fresh scientific ideas.',
    image: '/images/lab-observation.png'
  },
  {
    title: 'Exploration Tours',
    icon: Map,
    desc: 'Visits to research centers and labs (like Aakashvani) to see science in action and understand the professional world of technology.',
    image: '/images/hero-child-discovery.png'
  }
]

export default function ActivitiesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-24 bg-primary-500 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[12px] font-bold uppercase tracking-widest mb-10">
              The Programs
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-balanced leading-[1.05] tracking-tight">
              The Activities of <br />
              <span className="text-accent-teal italic font-light">Discovery.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mt-8 leading-relaxed max-w-2xl font-light">
              We don't teach subjects. We provide environments for discovery. Explore our range of unscripted programs designed for curious minds.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activityCategories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <Card key={i} className="group overflow-hidden border-none shadow-base bg-accent-surface p-12 transition-all duration-500 hover:bg-white hover:scale-[1.01]">
                  <div className="flex justify-between items-start mb-12">
                     <div>
                       <div className="bg-primary-500 w-14 h-14 rounded-sm flex items-center justify-center text-white mb-8 border border-white/10 shadow-lg group-hover:bg-accent-teal group-hover:shadow-accent-teal/20 transition-all duration-500">
                         <Icon size={28} />
                       </div>
                       <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{cat.title}</h2>
                     </div>
                     <span className="text-mono text-primary-500 opacity-10 group-hover:opacity-100 transition-opacity font-bold">0{i+1}</span>
                  </div>

                  <div>
                    <p className="text-neutral-500 mb-10 leading-relaxed max-w-md text-lg">
                      {cat.desc}
                    </p>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-white border border-neutral-100 shadow-sm group-hover:shadow-md transition-shadow">
                       <Image 
                         src={cat.image} 
                         alt={cat.title} 
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" 
                       />
                       <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specific Workshops Teaser */}
      <section className="section-spacing bg-accent-surface border-y border-neutral-100">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-500 leading-tight">Mastering Logical <br />Complexity</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {['Robotics & Engineering', 'Space Science & Astronomy', 'Algorithmic Coding', 'Rubik\'s Logic', 'Cognitive Sudoku', 'Memory Mastery', 'Aeromodeling', 'STEM Research'].map((tag) => (
              <span key={tag} className="px-8 py-4 rounded-sm bg-white border border-neutral-100 text-primary-500 font-bold hover:border-accent-teal hover:text-accent-teal transition-all cursor-default shadow-sm hover:shadow-md text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing text-center bg-primary-500 text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
              Find the right <span className="text-accent-teal italic font-light">activity</span> for your child's thinking pattern.
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-16 font-light italic">
              Experience scientist-inspired RoboSTEM discovery first-hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 text-xl shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold">
                  Book an Orientation
                </Button>
              </Link>
              <div className="w-full sm:w-auto">
                <JoinCommunity variant="solid" className="px-16 py-6 text-xl w-full rounded-full" />
              </div>
            </div>
            <div className="mt-12">
              <p className="text-xs text-white/30 font-mono tracking-[0.3em] uppercase font-bold">
                Free Parent Orientation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
