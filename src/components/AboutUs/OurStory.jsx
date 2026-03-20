import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
              Building Futures, <span className="text-[#E91F31]">One Youth at a Time</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  We believe every young person deserves a chance to succeed. Many youth in our community face
                  economic hardships that deny them access to quality education and employment opportunities.
                </p>
                <p>
                  iCure was founded to bridge this gap — providing free and subsidised hands-on training in
                  phone and laptop repair, equipping young people with marketable skills that lead to
                  self-employment and financial independence.
                </p>
                <p>
                  Our programmes focus on practical, industry‑relevant skills combined with mentorship,
                  life skills, and entrepreneurship training to create well‑rounded, empowered individuals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/gallery-4.png"
                  alt="iCure CBO Registration"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#E91F31] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                <Award className="inline h-4 w-4 mr-1" /> Registered CBO
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
