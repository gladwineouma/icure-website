import React from 'react';
import { Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import StaggerChildren from '../StaggerChildren';
import { staggerItem } from '../StaggerChildren';
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Philip Omulama", role: "Chairperson", image: "/phil.png" },
  { name: "Irene Muthoni", role: "Vice Chairperson", image: "/irine.jpg" },
  { name: "Mike Polycap", role: "Admin Officer", image: "/mike.png" },
  { name: "Victor Wayiera", role: "Finance Manager", image: "/vic.png" },
  { name: "Clara Awuor", role: "Committee Member", image: "/clara.png" },
  { name: "Godwin Olingo", role: "Committee Member", image: "/godwin.png" },
];

export function TeamSection() {
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
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
              Meet the People  <span className="text-[#E91F31]">Behind iCure</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Passionate individuals dedicated to mentoring and empowering youth in our community.
            </p>
          </motion.div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <div className="group relative h-full w-full">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-3xl hover:-translate-y-3 bg-gradient-to-br from-black/10 to-black/20 backdrop-blur-sm transition-all duration-500 max-h-[450px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-3 right-3 p-2 md:p-3 bg-black/50 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl group-hover:bg-black/60 transition-all duration-400 text-center">
                    <h3 className="text-xs md:text-sm font-semibold text-white truncate mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-[#E91F31] font-semibold text-xs px-2 py-0.5 md:py-1 bg-white/40 rounded-full inline-block shadow-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
