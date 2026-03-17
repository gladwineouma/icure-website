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

function ValueCard({ value, isHovered, onHoverStart, onHoverEnd }) {
  const Icon = value.icon;

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`relative rounded-xl border p-6 text-center transition-all duration-500 cursor-pointer
      ${
        isHovered
          ? "border-[#E91F31] shadow-xl -translate-y-1"
          : "border-[#E91F31]/60 shadow-sm"
      }`}
    >
      {/* Icon */}
      <div
        className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg transition-all
        ${
          isHovered
            ? "bg-[#E91F31] text-white"
            : "bg-red-100 text-[#E91F31]"
        }`}
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-lg mb-2 transition-colors
        ${isHovered ? "text-[#E91F31]" : "text-black"}`}
      >
        {value.title}
      </h3>

      {/* Divider */}
      <div
        className={`h-[3px] bg-[#E91F31] mx-auto mb-3 transition-all
        ${isHovered ? "w-12" : "w-8"}`}
      />

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        {value.desc}
      </p>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-[#E91F31] transition-all
        ${isHovered ? "w-full" : "w-0"}`}
      />
    </motion.div>
  );
}

export default function CoreValuesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsToShow = 3;

  useEffect(() => {
  // Pause when user is hovering a card
  if (hoveredCard !== null) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  }, 12000); // slower speed

  return () => clearInterval(interval);
}, [hoveredCard]);

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(values[(currentIndex + i) % values.length]);
  }

  return (
    <section className="py-20 bg-gray-100/40">

      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-5xl font-medium mb-12">
            Our Core <span className="text-[#E91F31]">Values</span>
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {visibleCards.map((value, index) => (
            <ValueCard
              key={index}
              value={value}
              isHovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {values.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all
              ${
                currentIndex === index
                  ? "bg-[#E91F31] scale-110"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}