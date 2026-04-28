import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Check, Target, Rocket, Calendar, Users, Briefcase, Lightbulb, Clock, Home, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism Intelligence Center',
  description: 'Hands-on RoboSTEM programs for ages 8–16. Choose between our 10-Day Workshop and the Year-Long Program.',
}

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-44 md:pt-52 pb-24 md:pb-32 bg-[#1E2A44] text-white relative flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Hands-On RoboSTEM Programs
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-12">
          Explore our structured programs designed to help children build, experiment, and solve real-world challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#workshop">
            <Button size="lg" className="bg-accent-teal text-white hover:bg-accent-teal/90 rounded-full flex items-center gap-2">
              <Target size={18} />
              10-Day Thinking Reset Workshop
            </Button>
          </Link>
          <Link href="#year-long">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full flex items-center gap-2 bg-transparent">
              <Rocket size={18} />
              Explore Year-Long RoboSTEM Lab
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION 02 — 10-DAY WORKSHOP */}
      <section id="workshop" className="py-24 bg-neutral-50 border-b border-neutral-100 px-4">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-neutral-200">
            <div className="inline-block px-4 py-1.5 bg-accent-teal/10 text-accent-teal text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Entry Gateway
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8">
              10-Day Thinking Reset Workshop
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-neutral-600">
                <div className="flex items-start gap-3">
                  <Users className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Age Group</h3>
                    <p>Ages 8–16</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Duration & Format</h3>
                    <p>10 consecutive days (Offline)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Session Structure</h3>
                    <p>1 session per day exploring a different STEM theme each day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">What Children Do & Sample Activities</h3>
                    <p>Children build robots, test aeromodelling gliders, and solve hands-on STEM challenges without fixed step-by-step instructions.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-neutral-600 bg-neutral-50 p-8 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Home className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Take-Home Outputs</h3>
                    <p>All offline projects built during the 10 days are take-home creations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Parent Involvement</h3>
                    <p>Workshop-end parent note discussing observation of how the child approached unfamiliar challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary-500">Outcomes Parents Notice</h3>
                    <p>First realization of how their child responds to difficulty and independent problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — YEAR-LONG PROGRAM */}
      <section id="year-long" className="py-24 bg-white px-4">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="bg-primary-500 text-white rounded-[2rem] p-8 md:p-16 shadow-xl">
            <div className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Core Program
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Year-Long Program
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-neutral-100">
                <div className="flex items-start gap-3">
                  <Users className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">Age Group</h3>
                    <p>Ages 8–16</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">Format & Duration</h3>
                    <ul className="list-disc ml-5 space-y-1 mt-1 text-white/90">
                      <li>10-month academic year program</li>
                      <li>3 offline + 1 online session every month</li>
                      <li>Weekend batches</li>
                      <li>3-hour sessions</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">What Children Experience</h3>
                    <ul className="list-disc ml-5 space-y-1 mt-1 text-white/90">
                      <li>Hands-on RoboSTEM themes</li>
                      <li>Take-home projects</li>
                      <li>Real-world challenges</li>
                      <li>Teamwork + independent exploration</li>
                      <li>Scientist and expert interactions</li>
                      <li>Project showcases</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-neutral-100 bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start gap-3">
                  <Home className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">Take-Home Outputs</h3>
                    <p>All offline projects are take-home creations. Selected projects are publicly exhibited.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">Parent Involvement</h3>
                    <p>Monthly observations shared with parents to help support learning without over-helping.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white">Outcomes Parents Often Notice</h3>
                    <ul className="list-disc ml-5 space-y-1 mt-1 text-white/90">
                      <li>More independent while solving problems</li>
                      <li>Less afraid of making mistakes</li>
                      <li>More curious about how things work</li>
                      <li>More willing to retry difficult tasks</li>
                      <li>More confident in unfamiliar situations</li>
                      <li>More interested in building and experimenting at home</li>
                      <li>More comfortable asking deeper questions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
