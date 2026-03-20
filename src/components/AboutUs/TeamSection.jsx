import React from 'react';
import { Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import StaggerChildren from '../StaggerChildren'
import { staggerItem } from '../StaggerChildren';
import { motion } from "framer-motion";


const teamMembers = [
    { name: "Philip Omulama", role: "Director/C.E.O", image: "/phil.png" },
    { name: "Mike Polycap", role: "Secretary", image: "/mike.png" },
    { name: "Victor Wayiera", role: "Treasurer", image: "/vic.png" },
    { name: "Clara Awuor ", role: "Program Coordinator", image: "/clara.png" },
    { name: "Godwin Olingo", role: "Member", image: "/james.jpg" },    
    { name: "Irene Muthoni", role: "Director", image: "/irine.jpg" },  
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
              Meet the People Behind iCure
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Passionate individuals dedicated to mentoring and empowering youth in our community.
            </p>
          </motion.div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <div key={member.name} className="group relative h-full w-full">
                <div className="aspect-[4/5] w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-3xl hover:-translate-y-3 bg-gradient-to-br from-black/10 to-black/20 backdrop-blur-sm transition-all duration-500 max-h-[450px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/10 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl group-hover:bg-black/30 transition-all duration-400">
                    <h3 className="text-sm md:text-base font-semibold text-white mb-1 truncate drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#E91F31] font-semibold text-xs md:text-sm px-2 py-px bg-white/40 rounded-full inline-block shadow-sm">
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
