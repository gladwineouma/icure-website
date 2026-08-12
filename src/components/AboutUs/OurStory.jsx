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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
              Building Futures <span className="text-[#E91F31]">One Youth at a Time</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  We believe every young person deserves an opportunity to learn, grow, and build a sustainable
                  future. Many young people in our communities face economic challenges that limit their access
                  to quality education, technical training, and employment opportunities.
                </p>

                <p>
                  iCure was founded to bridge this gap by providing free and subsidised hands-on training in
                  mobile phone and laptop repair, equipping young people with practical, marketable skills that
                  can create pathways to employment, self-employment, and financial independence.
                </p>

                <p>
                  Today, iCure is a registered Community Based Organisation and a
                  <span className="font-semibold text-gray-800">
                    {" "}NITA-certified vocational training centre
                  </span>
                  , strengthening our commitment to providing structured, practical, and industry-relevant
                  technical training.
                </p>

                <p>
                  Our programmes go beyond technical skills, combining hands-on training with mentorship,
                  life skills, entrepreneurship, and environmental awareness to help young people become
                  confident, capable, and self-reliant.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/cboCert.png"
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
