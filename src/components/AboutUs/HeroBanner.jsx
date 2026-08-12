import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export function HeroBanner() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-black to-black/60 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-b from-[#E91F31]/30 via-[#E91F31]/10 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
          <Users className="h-32 w-32 md:h-48 md:w-48" />
        </div>
        <div className="absolute bottom-12 right-8 text-[#E91F31]/10 animate-pulse" style={{ animationDelay: "1.5s" }}>
          <Heart className="h-24 w-24 md:h-36 md:w-36" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="inline-block rounded-full mt-4 border border-[#E91F31]/40 bg-[#E91F31]/10 px-4 py-1.5 text-xs font-semibold text-[#E91F31] mb-4 backdrop-blur-sm">
              CBO • NITA-Certified Vocational Training Centre
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Empowering <span className="text-[#E91F31]">Less Fortunate Youth</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
              iCure Mentorship and Empowerment Training Centre is a registered Community Based Organisation and NITA-certified vocational training centre empowering underprivileged youth through practical skills, mentorship, and technology.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
