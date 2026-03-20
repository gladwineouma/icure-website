// src/components/About/CtaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

export function CtaSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-6">
              Want to Partner With Us?
            </h3>
            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              We welcome partnerships with organisations, corporates, and individuals who share our vision of youth empowerment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:info@icure.africa"
                className="inline-flex items-center gap-2 rounded-md border-2 border-[#E91F31]/40 bg-[#E91F31] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E91F31]/60 hover:bg-[#E91F31]/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/254722415157"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-[#E91F31]/40 bg-white px-8 py-4 text-sm font-semibold text-[#E91F31] backdrop-blur-sm transition-all duration-300 hover:border-[#E91F31]/60 hover:bg-[#E91F31]/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
