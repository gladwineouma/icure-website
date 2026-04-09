import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { label: "Email", href: "mailto:info@icure.africa", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/254725128058", icon: Phone },
  { label: "Instagram", href: "https://www.instagram.com/icureservicescenter/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/people/I-Cure-Service-Center/61578901858726/#", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/icure-service-center-46b45137b/?originalSubdomain=ke", icon: Linkedin },
];



export function CtaSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-6">
              Support iCure <span className="text-[#E91F31]"> Today!</span>
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Join us in transforming lives! Support iCure with your donations and help empower youth to reach their full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex items-center gap-2 px-4 py-2 rounded-md
                      bg-[#E91F31] text-white text-xs md:text-sm font-semibold
                      transition-colors duration-300 hover:bg-red-700
                    "
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
