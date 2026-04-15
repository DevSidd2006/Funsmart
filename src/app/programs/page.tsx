import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { Check } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism',
  description: '10-Day Thinking Reset Workshop and Year-Long Thinking Lab for children aged 8-14. Robotics, Coding, STEM and more.',
  keywords: ['workshop', 'thinking lab', 'children programs', 'Pune', 'STEM', 'robotics', 'coding'],
  openGraph: {
    title: 'Programs | FunSmartism Intelligence Center',
    description: 'Two programs. One philosophy. 10-Day Workshop or Year-Long Lab for young minds.',
    url: `${siteUrl}/programs`,
    type: 'website',
  },
}

export default function ProgramsPage() {
  const themes = [
    'Robotics & Engineering',
    'Space Science & Astronomy',
    'Algorithmic Coding',
    'Rubik\'s Logic',
    'Cognitive Sudoku',
    'Memory Mastery',
    'Aeromodeling',
    'STEM Research',
    'Electronics & Circuits',
    'Logical Fallacies & Critical Thinking'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-white text-center">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 mb-8 leading-tight">
              Two programs. <br />
              <span className="text-accent-teal italic font-light">One philosophy.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 10-Day Workshop */}
      <section className="section-spacing bg-accent-surface" id="workshop">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ ENTRY_POINT ]</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8">10-Day Thinking Reset Workshop</h2>
              <p className="text-xl text-neutral-500 mb-10 leading-relaxed">
                Ten days. Ten different themes. Children build, explore, and think — while we observe. Where every FunSmartism journey begins.
              </p>
              <div className="space-y-6 mb-12">
                <div className="font-bold text-primary-500 uppercase tracking-widest text-sm">The 10 Themes:</div>
                <div className="grid grid-cols-2 gap-4">
                  {themes.map((theme, i) => (
                    <div key={i} className="flex items-center gap-3 text-neutral-600">
                      <Check size={16} className="text-accent-teal" />
                      <span className="text-sm">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg" className="bg-[#1E2A44] border-none text-white px-10">Book Workshop</Button>
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img src="/images/hero-child-discovery.png" alt="Workshop activity" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Year-Long Program */}
      <section className="section-spacing" id="year-long">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img src="/images/lab-observation.png" alt="Year-long lab" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ SUSTAINED_GROWTH ]</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8">Year-Long Thinking Lab</h2>
              <p className="text-xl text-neutral-500 mb-10 leading-relaxed">
                One theme per month. One session per week. Deep projects + thinking observations + parent guidance for home. Priority access to scientist interactions.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex gap-4 items-start">
                  <Check size={20} className="text-accent-teal mt-1" />
                  <span className="text-neutral-600">Monthly thinking observations & reports</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check size={20} className="text-accent-teal mt-1" />
                  <span className="text-neutral-600">Guidance for home thinking habits</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check size={20} className="text-accent-teal mt-1" />
                  <span className="text-neutral-600">Access to industry experts & scientist interactions</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#1E2A44] border-none text-white px-10">Inquire for Admission</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-spacing bg-accent-surface">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-16 text-center">Compare the paths</h2>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-neutral-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary-500 text-white text-sm uppercase tracking-widest font-mono">
                    <th className="p-6 border-b border-primary-600">Feature</th>
                    <th className="p-6 border-b border-primary-600">10-Day Workshop</th>
                    <th className="p-6 border-b border-primary-600">Year-Long Lab</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-b border-neutral-100">
                    <td className="p-6 font-bold">Goal</td>
                    <td className="p-6">Thinking Reset</td>
                    <td className="p-6">Habit Formation</td>
                  </tr>
                  <tr className="border-b border-neutral-100 bg-neutral-50/30">
                    <td className="p-6 font-bold">Frequency</td>
                    <td className="p-6">Daily (10 Days)</td>
                    <td className="p-6">Weekly (Year-Long)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="p-6 font-bold">Reporting</td>
                    <td className="p-6">One Final Report</td>
                    <td className="p-6">Monthly Insights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-white text-center">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-10 leading-tight">Which journey is right for your child?</h2>
          <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-accent-teal border-none text-white shadow-xl">
            Schedule a visit →
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
