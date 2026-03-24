import { Eye, Target, Building2, Zap, CircuitBoard, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: Eye,
    label: "OUR VISION",
    title: "Pioneering Repair Entrepreneurs",
    body: "To pioneer a new era of pro phone and laptop repair entrepreneurs dominating the electronics industry, creating a thriving ecosystem of iCure-trained repair masters, fueling the electronics repair revolution, and launching unstoppable electronics businesses.",
  },
  {
    icon: Target,
    label: "OUR MISSION",
    title: "World-Class Training & Mentorship",
    body: "To offer exceptional phone and laptop repair training at iCure Mentorship and Empowerment Training Centre through a hands-on curriculum that elevates beginners to pro technicians and hones experts' skills. We integrate business mentorship to empower graduates to launch and excel as entrepreneurs in the booming electronics repair industry.",
  },
  {
    icon: Building2,
    label: "ABOUT US",
    title: "What We Do",
    body: "iCure Mentorship and Empowerment Training Centre delivers world-class phone and laptop repair training. Our hands-on curriculum transforms beginners into pro technicians while sharpening skills for experienced pros. We blend technical mastery with business mentorship to launch empowered entrepreneurs who thrive in the booming electronics repair industry.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/training-img.jpg" alt="" className="h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
        <CircuitBoard className="h-32 w-32 md:h-48 md:w-48" />
      </div>
      <div className="absolute bottom-12 right-8 text-[#E91F31]/10 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <Zap className="h-24 w-24 md:h-36 md:w-36" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            About <span className="text-[#E91F31]">iCure</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
            More than a training centre — we're building the next generation of electronics repair leaders.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-[#E91F31]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/50 hover:bg-white/10 shadow-lg shadow-red-500/20"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#E91F31]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#E91F31]" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E91F31]/20 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                    {card.label}
                  </span>

                  <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-gray-300/70 mb-4 text-sm md:text-base max-w-2xl mx-auto">
              We are a registered Community Based Organisation empowering less fortunate youth through skills training.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border-2 border-[#E91F31]/40 bg-white px-8 py-4 text-sm font-semibold text-[#E91F31] backdrop-blur-sm transition-all duration-300 hover:border-[#E91F31]/60 hover:bg-[#E91F31]/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
            >
              Learn About Our Mission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
