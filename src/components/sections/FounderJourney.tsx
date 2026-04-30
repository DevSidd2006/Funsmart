'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function FounderJourney() {
  return (
    <section className="relative overflow-hidden bg-accent-surface py-12 md:py-16 lg:py-20" id="founder-journey">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] select-none opacity-[0.03]">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-12 translate-x-1/4">
          <path d="M250 50C139.5 50 50 139.5 50 250s89.5 200 200 200 200-89.5 200-200S360.5 50 250 50zm0 360c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z" fill="currentColor" />
          <path d="M250 150c-55.2 0-100 44.8-100 100s44.8 100 100 100 100-44.8 100-100-44.8-100-100-100zm0 160c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" fill="currentColor" />
        </svg>
      </div>

      <div className="container-fluid relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-20">

            {/* Left Column: Personal Origin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col"
            >
              {/* Founder Image Frame */}
              <div className="relative mb-8 md:mb-10">
                <div className="absolute -inset-3 -z-10 rotate-[1.5deg] rounded-[2.75rem] border border-white/90 bg-white/60 shadow-sm" />
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.35rem] border-2 border-white shadow-2xl">
                  <Image
                    src="/images/dipali-founder.png"
                    alt="Dipali Akolkar — Founder of FunSmartism"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Float Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-[#1E2A44] px-6 py-4 text-white shadow-xl md:left-auto md:right-5 md:translate-x-0 md:px-8 md:py-5">
                  <span className="font-serif text-lg font-bold italic opacity-90 md:text-xl">"Thinking over Rote"</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="mt-8 rounded-[1.75rem] border border-white/90 bg-white/75 p-6 shadow-sm backdrop-blur-sm md:p-7">
                <h3 className="mb-1 text-3xl font-serif font-bold text-primary-500">Dipali Akolkar</h3>
                <p className="mb-5 text-xs font-medium uppercase tracking-wider text-neutral-500">Founder — FunSmartism Intelligence Center</p>

                <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-[17px]">
                  <p>
                    After years in software development and hands-on parenting, Dipali went deeper into child development through formal learning experiences in both <strong>Pune and the USA</strong>.
                  </p>
                  <p>
                    <span className="font-semibold text-primary-500">What stood out was simple:</span> the right environment can completely change how a child observes, persists, and solves.
                  </p>
                    That insight led her to build FunSmartism in Pune — a hands-on RoboSTEM environment where real problem-solving skills become visible.
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission & "The Why" */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-4"
            >
              <div className="mb-8 md:mb-10">
                <h2 className="text-4xl font-serif font-bold leading-tight text-primary-500 md:text-5xl">
                  Why we built this.
                </h2>
                <div className="w-16 h-1 bg-accent-gold mt-6 rounded-full" />
              </div>

              <div className="space-y-7 md:space-y-8">
                <div className="relative rounded-[1.9rem] border border-white/90 bg-white/70 px-6 py-6 shadow-sm md:px-8 md:py-7">
                  <Quote className="absolute left-6 top-5 h-10 w-10 -rotate-180 text-accent-teal/15" />
                  <p className="pt-6 text-lg font-medium leading-relaxed text-neutral-700 md:text-xl">
                    We noticed it again and again: a child who struggled in a classroom would become active the moment you put something real in their hands. A mechanical puzzle. A circuit board. A question without a single correct answer.
                  </p>
                </div>

                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  We saw parents frustrated, wondering why their child's initial spark for logic and science had faded into rote memorization. We realized the problem wasn't the children or the subjects—it was the environment.
                </p>

                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  So we built a different kind of environment. One where thinking was the subject, not the by-product. Where the goal was not to produce a result, but to understand how a child arrived at one — or didn't.
                </p>

                <div className="group relative overflow-hidden rounded-[2.1rem] border border-neutral-100 bg-white p-7 shadow-lg md:p-8">
                  <div className="absolute -mr-16 -mt-16 right-0 top-0 h-32 w-32 rounded-full bg-accent-teal/5 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative z-10">
                    <p className="mb-5 text-xl font-serif font-bold text-neutral-700">
                      The Thinking Lab is where children build, test, and solve real challenges while we observe how they think...
                    </p>
                    <p className="mb-7 text-base text-neutral-500 md:mb-8">
                      Helping parents understand how to respond to them in real life during real challenges along the way.
                    </p>

                    <Link
                      href="/thinking-lab"
                      className="inline-flex items-center gap-3 text-accent-teal font-bold text-lg group/link"
                    >
                      <span>Inside the Thinking Lab</span>
                      <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center transition-all group-hover/link:bg-accent-teal group-hover/link:text-white">
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


