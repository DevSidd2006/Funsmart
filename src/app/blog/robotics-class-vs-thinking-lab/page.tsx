import { Metadata } from 'next'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { Button } from '@/components/ui/Button'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Robotics Class vs. Thinking Lab: What’s the Difference? | FunSmartism',
  description: 'Understand the critical difference between a traditional robotics class and a RoboSTEM Thinking Lab. Discover why following instructions isn’t true problem solving.',
  keywords: ['robotics class vs thinking lab', 'robotics classes in Pune', 'STEM education', 'problem solving for kids', 'FunSmartism'],
  alternates: { canonical: 'https://funsmartism.in/blog/robotics-class-vs-thinking-lab' },
}

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Robotics Class vs. Thinking Lab: What’s the Difference?',
    description: 'Understand the critical difference between a traditional robotics class and a RoboSTEM Thinking Lab.',
    author: [{
      '@type': 'Organization',
      name: 'FunSmartism',
      url: 'https://funsmartism.in'
    }],
    datePublished: '2026-06-10T08:00:00+08:00',
    dateModified: '2026-06-10T08:00:00+08:00',
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-fluid max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-neutral-400 hover:text-accent-teal uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
        
        <SectionReveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
                STEM Education
              </span>
              <span className="text-xs text-neutral-400 font-medium">Jun 10, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-8">
              Robotics Class vs. Thinking Lab: What’s the Difference?
            </h1>
            <p className="text-xl text-neutral-500 font-light italic leading-relaxed">
              Many parents sign up for robotics classes expecting problem-solving, but often children just follow instruction manuals. Learn why a Thinking Lab focuses on the process of creation.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary-500 prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:font-light">
            <p>
              When parents walk into a typical robotics center, they see what looks like success: children sitting quietly, connecting wires, and eventually producing a moving car or a spinning fan. The final product looks impressive. But if you watch closely, you’ll notice something missing—genuine problem solving.
            </p>
            
            <h2>The "Lego" Trap: Following Instructions isn't Engineering</h2>
            <p>
              In most traditional robotics classes, the learning process is heavily scaffolded. The instructor provides a kit and a manual. "Connect piece A to piece B. Plug the red wire into port 1." When the child finishes, the robot moves exactly as intended. 
            </p>
            <p>
              But what did the child actually learn? They learned how to follow instructions. They did not learn how to deal with failure. They didn't learn how to isolate a bug, or why piece A needed to connect to piece B in the first place. When given a problem without a manual, they freeze. This is what we call "instruction dependency."
            </p>

            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-100 my-10">
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-4 mt-0">The Thinking Lab Approach</h3>
              <p className="text-neutral-600 font-light mb-0">
                A RoboSTEM Thinking Lab, like FunSmartism, operates on a completely different philosophy. We don't hand out manuals. Instead, we present a real-world problem and provide the tools to solve it. 
              </p>
            </div>

            <h2>Observation over Instruction</h2>
            <p>
              The core difference is in the role of the adult. In a regular class, the teacher is the source of all answers. In a Thinking Lab, the facilitator is an observer. 
            </p>
            <ul>
              <li>We watch how a child reacts when their first prototype fails.</li>
              <li>We notice if they systematically test variables or just guess randomly.</li>
              <li>We see if they ask for help immediately or try to debug it themselves.</li>
            </ul>
            <p>
              This is the invisible gap in education. By stepping back and not rushing to rescue the child, we allow true cognitive resilience to build. The final robot might look less polished than the one from the traditional class, but the mind that built it is significantly sharper.
            </p>

            <h2>Why This Matters for Your Child's Future</h2>
            <p>
              The real world doesn't come with a step-by-step manual. The innovators of tomorrow won't be the ones who are best at following instructions; they will be the ones who can navigate ambiguity, test hypotheses, and create structure out of chaos.
            </p>
          </div>

          <div className="mt-16 bg-[#1E2A44] rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 lab-grid opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                Want to see the difference for yourself?
              </h3>
              <p className="text-[#B7E3DD] text-lg mb-8 max-w-2xl mx-auto font-light">
                Schedule a visit to our lab in Bibwewadi, Pune, and observe our environment. Sometimes, one visit changes everything.
              </p>
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white px-10 py-6 rounded-full font-bold shadow-huge shadow-accent-teal/20">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
