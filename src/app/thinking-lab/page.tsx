import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Eye,
  Search,
  RotateCcw,
  ChevronRight,
} from 'lucide-react'
import { VignetteAccordion } from '@/components/ui/VignetteAccordion'

export default function ThinkingLabPage() {
  const labFormat = [
    {
      title: 'Weekend Lab Format',
      desc: 'Sessions are held on weekends to ensure children can focus on deep, exploratory problem-solving without school-day fatigue.',
      icon: Clock,
    },
    {
      title: 'Small Cohorts',
      desc: 'Each session is limited to a small group to ensure every child’s thinking process can be observed and guided individually.',
      icon: Users,
    },
    {
      title: 'Unfamiliar Challenges',
      desc: 'We use RoboSTEM challenges that children haven’t encountered in school, making their natural problem-solving habits visible.',
      icon: Target,
    }
  ]

  const observationPoints = [
    {
      notice: 'The Initial Approach',
      insight: 'Does the child observe the system first, or jump into building immediately? Both reveal different problem-solving styles.',
    },

    {
      notice: 'Response to Friction',
      insight: 'When a design fails, does the child retry, pause to rethink, or look for an external solution? This is where resilience is built.',
    },
    {
      notice: 'Complexity Management',
      insight: 'How does the child break down a complex mechanical build into smaller, solvable parts?',
    },
    {
      notice: 'Independent Correction',
      insight: 'Does the child notice their own errors during testing, or do they wait for a facilitator to point them out?',
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-[#FAF9F6] text-[#1E2A44] relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              The RoboSTEM Thinking Lab
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-light italic max-w-2xl mx-auto leading-relaxed">
              A hands-on laboratory where children build, test, and solve—and where parents receive guidance based on what we observe.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Format */}
      <section className="py-16 border-b border-neutral-100">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {labFormat.map((item, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-8 group-hover:bg-accent-teal group-hover:text-white transition-all">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Activity Layer */}
      <section className="py-16 bg-[#1E2A44] text-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">What Children Build & Solve</h2>
              <p className="text-lg text-[#B7E3DD] mb-10 font-light italic leading-relaxed">
                We use high-quality STEM materials, mechanical systems, and robotics components. But the goal isn’t the final model—it’s the thinking that happens during the build.
              </p>
              <ul className="space-y-6">
                {[
                  'Mechanical gear systems and power transmissions',
                  'Structural engineering and bridge-building challenges',
                  'Aerodynamics and flight-testing with model rockets',
                  'Robotic logic, sensors, and autonomous movement',
                  'Electrical circuits and electronic prototyping'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-accent-teal mt-2.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" 
                alt="Hands-on building in the lab" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Observation Layer */}
      <section className="py-16">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">Parent Guidance via Observation</h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-light italic">
              Unlike a report card, our observation notes focus on behavior. We share what we see when your child faces a real problem.
            </p>
          </div>

          <div className="space-y-8">
            {observationPoints.map((point, i) => (
              <div key={i} className="p-8 md:p-10 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h4 className="text-xs font-bold text-accent-teal uppercase tracking-widest mb-2">What we notice</h4>
                    <p className="text-xl font-serif font-bold text-primary-500">{point.notice}</p>
                  </div>
                  <div className="md:col-span-2 border-l border-neutral-100 md:pl-10">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">The Observational Insight</h4>
                    <p className="text-neutral-600 leading-relaxed italic">“{point.insight}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#FAF9F6] text-center border-t border-neutral-100">
        <div className="container-fluid max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary-500 mb-8">Experience the Lab Format</h2>
          <p className="text-xl text-neutral-600 mb-12 font-light">Join a Parent Orientation to see how we observe the problem-solving process in real-time.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/schedule-visit">
              <Button size="lg" className="bg-accent-teal border-none text-white px-12 py-6 rounded-full font-bold shadow-lg shadow-accent-teal/20">
                Schedule A Visit
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg" className="border-neutral-200 text-primary-500 px-12 py-6 rounded-full font-medium">
                View Program Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Clock, Users, Target } from 'lucide-react'
