import {
  Wrench,
  Globe2,
  BriefcaseBusiness,
  Zap,
  CircuitBoard,
  ArrowRight,
  BadgeCheck,
  CircleCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: Wrench,
    label: "OUR VISION",
    title: "Pioneering Repair Entrepreneurs",
    body: "To pioneer a new era of pro phone and laptop repair entrepreneurs dominating the electronics industry, creating a thriving ecosystem of iCure-trained repair masters, fueling the electronics repair revolution, and launching unstoppable electronics businesses.",
  },
  {
    icon: Globe2,
    label: "OUR MISSION",
    title: "World-Class Training & Mentorship",
    body: "To offer exceptional phone and laptop repair training at iCure Mentorship and Empowerment Training Centre through a hands-on curriculum that elevates beginners to pro technicians and hones experts' skills. We integrate business mentorship to empower graduates to launch and excel as entrepreneurs in the booming electronics repair industry.",
  },
  {
    icon: BriefcaseBusiness,
    label: "ABOUT US",
    title: "What We Do",
    body: "iCure Mentorship and Empowerment Training Centre delivers world-class phone and laptop repair training. Our hands-on curriculum transforms beginners into pro technicians while sharpening skills for experienced pros. We blend technical mastery with business mentorship to launch empowered entrepreneurs who thrive in the booming electronics repair industry.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/training-img.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
        <CircuitBoard className="h-32 w-32 md:h-48 md:w-48" />
      </div>

      <div
        className="absolute bottom-12 right-8 text-[#E91F31]/10 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      >
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
            More than a training centre — we're building the next generation
            of electronics repair leaders.
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
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-[#E91F31]/40 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/60 hover:bg-white/10 shadow-lg shadow-red-500/20"
              >
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#E91F31]/30 bg-[#E91F31]/10 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                    {card.label}
                  </span>

                  <h3 className="text-xl font-medium text-white mb-4 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-300">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mt-6"
        >
          <div className="rounded-2xl border border-[#E91F31]/60 bg-white/5 backdrop-blur-md p-6 md:p-8">

            <div className="flex flex-col md:flex-row md:items-center gap-6">

              <div className="flex-shrink-0">
                <img
                  src="/nita-logo.jpg"
                  alt="NITA Logo"
                  className="w-28 h-28 object-contain rounded-full bg-white p-1"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <BadgeCheck className="h-6 w-6 text-[#E91F31]" />

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    NITA Certified Institution
                  </h3>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <span className="font-medium text-white">
                    iCure Mentorship and Empowerment Training Centre
                  </span>{" "}
                  is a NITA certified institution committed to delivering
                  quality, industry-relevant vocational training that meets
                  recognized standards and prepares learners for the future.
                </p>
              </div>

              <div className="hidden md:block w-px self-stretch bg-white/10" />

              <div className="flex items-start gap-3 min-w-[220px]">
                <CircleCheck className="h-7 w-7 text-[#E91F31] flex-shrink-0 mt-1" />

                <div>
                  <h4 className="font-semibold text-lg text-white">
                    Certified by NITA
                  </h4>

                  <p className="text-sm text-gray-300 mt-1">
                    National Industrial
                    <br />
                    Training Authority
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <ScrollReveal>
          <div className="mt-6 text-center">
            <p className="text-gray-300/80 mb-4 text-sm md:text-base max-w-2xl mx-auto">
              We are a registered Community Based Organisation empowering less
              fortunate youth through skills training.
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