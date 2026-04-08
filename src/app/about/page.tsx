import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero / Vision Section */}
      <section className="section-spacing bg-accent-surface relative">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ THE_ORIGIN ]</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 mb-8 leading-[1.1]">
              We started FunSmartism because we kept seeing <br />
              <span className="text-accent-teal italic font-light">something schools weren't designed to notice.</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Capable children who came alive in scientist-inspired environments that gave them freedom, and confused in environments that didn't. And parents who had no language for what they were seeing. FunSmartism Intelligence Center was built to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* The Belief Section */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ OUR_BELIEFS ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              Three things we believe:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: '1. Problem Solving Habits',
                desc: 'Children often don’t struggle because of marks or ability alone. Most struggle because they haven’t yet built strong thinking habits for unfamiliar situations.'
              },
              {
                title: '2. Marks vs. Habits',
                desc: 'Marks show outcomes. They don\'t show scientist-style problem-solving habits. A child can score well and still freeze.'
              },
              {
                title: '3. Parents Deserve More',
                desc: 'Parents deserve more than a report card. A number doesn’t show how a child thinks.'
              }
            ].map((belief, i) => (
              <div key={i} className="bg-primary-50 p-10 rounded-sm border border-primary-100/50">
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-6">{belief.title}</h3>
                <p className="text-neutral-500 leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="section-spacing bg-primary-500 text-white relative overflow-hidden text-center">
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Why we built this.</h2>
            <p className="text-xl text-primary-100/70 leading-relaxed mb-16">
              We noticed it again and again: a child who struggled in a classroom would come alive the moment you put something real in their hands. So we built a different kind of environment. One where thinking was the subject, not the by-product.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing text-center">
        <div className="container-fluid">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-10 leading-tight">
             Marks show outcomes. <br />
             <span className="text-accent-teal">Scientist-style Thinking habits shape futures.</span>
           </h2>
           <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-[#1E2A44] shadow-lg hover:bg-accent-teal transition-colors border-none text-white mt-12">
             Schedule a visit →
           </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

