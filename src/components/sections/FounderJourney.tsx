'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function FounderJourney() {
  return (
    <section className="py-24 bg-accent-surface relative overflow-hidden" id="founder-journey">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none -z-0 select-none">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-12 translate-x-1/4">
          <path d="M250 50C139.5 50 50 139.5 50 250s89.5 200 200 200 200-89.5 200-200S360.5 50 250 50zm0 360c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z" fill="currentColor" />
          <path d="M250 150c-55.2 0-100 44.8-100 100s44.8 100 100 100 100-44.8 100-100-44.8-100-100-100zm0 160c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" fill="currentColor" />
        </svg>
      </div>

      <div className="container-fluid relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20">

            {/* Left Column: Personal Origin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex flex-col"
            >
              {/* Founder Image Frame */}
              <div className="relative mb-10">
                <div className="absolute -inset-4 bg-white/50 border border-white/80 rounded-[3rem] -z-10 rotate-2 shadow-sm" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
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
                <div className="absolute -bottom-6 -right-6 bg-[#1E2A44] text-white px-8 py-6 rounded-2xl shadow-xl hidden md:block">
                  <span className="text-xl font-serif font-bold italic opacity-90">"Thinking over Rote"</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="pl-4 border-l-2 border-accent-teal/20 mt-auto">
                <h3 className="text-3xl font-serif font-bold text-primary-500 mb-1">Dipali Akolkar</h3>
                <p className="text-neutral-500 font-medium mb-6 uppercase tracking-wider text-xs">Founder — FunSmartism Intelligence Center</p>

                <div className="space-y-5 text-neutral-600 leading-relaxed text-lg italic">
                  <p>
                    After years in software development and hands-on parenting, Dipali went deeper into child development through formal learning experiences in both <strong>Pune and the USA</strong>.
                  </p>
                  <p>
                    <span className="text-primary-500 not-italic">What stood out was simple:</span> the right environment can completely change how a child observes, persists, and solves.
                  </p>
                  <p>
                    That insight led her to build FunSmartism in Pune — a scientist-inspired RoboSTEM environment where real problem-solving becomes visible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission & "The Why" */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
                  Why we built this.
                </h2>
                <div className="w-16 h-1 bg-accent-gold mt-6 rounded-full" />
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <Quote className="absolute -left-12 -top-4 w-10 h-10 text-accent-teal/10 rotate-180" />
                  <p className="text-xl text-neutral-700 leading-relaxed font-medium">
                    We noticed it again and again: a child who struggled in a classroom would become active the moment you put something real in their hands. A mechanical puzzle. A circuit board. A question without a single correct answer.
                  </p>
                </div>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  We saw parents frustrated, wondering why their child's initial spark for logic and science had faded into rote memorization. We realized the problem wasn't the children or the subjects—it was the environment.
                </p>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  So we built a different kind of environment. One where thinking was the subject, not the by-product. Where the goal was not to produce a result, but to understand how a child arrived at one — or didn't.
                </p>

                <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  <div className="relative z-10">
                    <p className="text-neutral-700 font-serif font-bold text-xl mb-6">
                      The Thinking Lab is where children build, test, and solve real challenges while we observe how they think...
                    </p>
                    <p className="text-neutral-500 text-base mb-8">
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


