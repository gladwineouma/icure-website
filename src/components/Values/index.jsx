import { Shield, Star, Lightbulb, Rocket, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our training and business practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously embrace and integrate the latest repair technologies, methodologies, and learning tools.",
  },
  {
    icon: Rocket,
    title: "Empowerment",
    desc: "We create opportunities for employment and entrepreneurship.",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "We instill efficient industry best practices and strong work ethics.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We deliver superior training, mentorship, and support with proven track record and unlimited positive responses.",
  },
];

function ValueCard({ value, index, isHovered, onHoverStart, onHoverEnd }) {
  const Icon = value.icon;
  const isDark = index % 2 !== 0;

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ y: -8, scale: 1.03 }}
      className={`relative rounded-xl border p-6 text-center cursor-pointer overflow-hidden
      transition-all duration-500
      ${isDark
          ? isHovered
            ? "bg-[#1a1a1a] border-pink-500 shadow-2xl"
            : "bg-[#1a1a1a] border-gray-800 shadow-md"
          : isHovered
            ? "bg-white border-pink-500 shadow-xl"
            : "bg-white border-gray-200 shadow-md"
        }`}
    >
      {isDark && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#ff2d55]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-400/30 rounded-full blur-3xl" />
        </motion.div>
      )}

      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      )}
      <div
        className={`relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-500
        ${isHovered
            ? "bg-gradient-to-br from-[#E91F31] to-pink-500 text-white scale-110 shadow-lg shadow-pink-500/50"
            : isDark
              ? "bg-pink-500/10 text-pink-400"
              : "bg-pink-100 text-[#E91F31]"
          }`}
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3
        className={`relative z-10 font-semibold text-lg mb-2 transition-colors duration-300
        ${isHovered
            ? "text-pink-400"
            : isDark
              ? "text-white"
              : "text-gray-900"
          }`}
      >
        {value.title}
      </h3>
      <div
        className={`relative z-10 h-[3px] mx-auto mb-3 transition-all duration-500
        ${isHovered
            ? "w-12 bg-gradient-to-r from-[#E91F31] via-pink-400 to-pink-300"
            : "w-8 bg-gradient-to-r from-[#E91F31] to-pink-300 opacity-70"
          }`}
      />
      <p
        className={`relative z-10 text-sm leading-relaxed line-clamp-4
        ${isDark ? "text-gray-300" : "text-gray-600"}`}
      >
        {value.desc}
      </p>
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#E91F31] via-pink-400 to-transparent transition-all duration-500
        ${isHovered ? "w-full" : "w-0"}`}
      />
      <div
        className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-500
        ${isHovered
            ? "shadow-[0_0_60px_rgba(255,45,85,0.35)]"
            : "shadow-none"
          }`}
      />
    </motion.div>
  );
}

export default function CoreValuesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsToShow = 3;

  useEffect(() => {
    if (hoveredCard !== null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(values[(currentIndex + i) % values.length]);
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ff2d55]/20 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex justify-center">
            <h2 className="text-center text-3xl md:text-5xl font-medium mb-12 text-gray-900 max-w-3xl">
              Our Core <span className="text-[#E91F31]">Values</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {visibleCards.map((value, index) => (
            <ValueCard
              key={index}
              value={value}
              index={index}
              isHovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {values.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all
              ${currentIndex === index
                  ? "bg-pink-500 scale-110"
                  : "bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}