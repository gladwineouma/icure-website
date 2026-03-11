import { Eye, Target, Building2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="about" className="relative py-20 px-6 bg-black overflow-hidden">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
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

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            More than a training centre — we're building the next generation
            of electronics repair leaders.
          </p>
        </motion.div>

        {/* Cards */}
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
                className="bg-black border-t-[5px] border-[#E91F31] p-8 rounded hover:border hover:border-[#E91F31] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-red-500/20"
              >

                {/* Icon */}
                <div className="w-13 h-13 flex items-center justify-center rounded-lg bg-red-500/40 mb-5">
                  <Icon size={26} className="text-[#E91F31]" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span className="text-xs tracking-widest text-[#E91F31] font-medium block mb-3">
                  {card.label}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl text-white font-medium mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {card.body}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}