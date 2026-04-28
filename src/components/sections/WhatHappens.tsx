import { Check } from 'lucide-react'

const activities = [
  "build robots using sensors and electronics",
  "open real appliances to understand how things work",
  "create mechanical and electronic tech toys",
  "design rockets and aeroplane models",
  "solve hands-on STEM challenges",
  "build roller coasters and structures using simple materials",
  "explore astronomy and space science",
  "redesign products through design thinking activities",
  "create sci-fi stories and innovation concepts",
  "improve logic through Rubik’s Cube, Sudoku, and math challenges"
]

export function WhatHappens() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6">
            What Happens Inside FunSmartism?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-4">
            Children do not sit through long lectures or copy fixed steps from notebooks.
          </p>
          <p className="text-lg text-neutral-800 font-medium max-w-3xl mx-auto">
            They build, open, test, redesign, discuss, and experiment through hands-on RoboSTEM themes across the academic year.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 mb-8">
          <h3 className="text-xl font-bold text-primary-500 mb-8 text-center">
            Depending on the month’s theme, students may:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="text-accent-teal" size={20} />
                </div>
                <span className="text-neutral-700 leading-snug">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-serif italic font-bold text-accent-teal">
            All offline projects are take-home creations.
          </p>
        </div>
      </div>
    </section>
  )
}
