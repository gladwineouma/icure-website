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
    desc: "We continuously embrace and integrate the latest repair technologies, methodologies, and learning tools to keep our curriculum at the cutting edge.",
  },
  {
    icon: Rocket,
    title: "Empowerment",
    desc: "We are passionate about creating tangible opportunities for employment and entrepreneurship, empowering our students to build sustainable livelihoods.",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "We are dedicated to instilling industry best practices, a strong work ethic, and a commitment to exceptional customer service in all our trainees.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We are committed to delivering superior training, mentorship, and support, ensuring our graduates are synonymous with quality and expertise.",
  },
];

const PRIMARY_COLOR = "#E91F31";
const PRIMARY_COLOR_30 = "rgba(233, 31, 49, 0.3)";
const PRIMARY_COLOR_10 = "rgba(233, 31, 49, 0.1)";
const PRIMARY_COLOR_05 = "rgba(233, 31, 49, 0.05)";

const ValueCard = ({ v, index, isHovered, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      className="value-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{
        borderRadius: "clamp(12px, 3vw, 16px)",
        border: `1px solid ${PRIMARY_COLOR}`,
        backgroundColor: "#fff",
        padding: "clamp(20px, 4vw, 28px) clamp(16px, 3vw, 24px)",
        textAlign: "center",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? `0 12px 30px ${PRIMARY_COLOR_30}`
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: "clamp(260px, 38vw, 320px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: PRIMARY_COLOR_05,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        pointerEvents="none"
      />

      {/* Icon Container - STATIC when not hovered */}
      <motion.div
        style={{
          margin: "0 auto clamp(12px, 2vw, 16px)",
          display: "flex",
          width: "clamp(48px, 9vw, 60px)",
          height: "clamp(48px, 9vw, 60px)",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "clamp(8px, 2vw, 12px)",
          backgroundColor: isHovered ? PRIMARY_COLOR : PRIMARY_COLOR_10,
          color: isHovered ? "white" : PRIMARY_COLOR,
          transition: "all 0.3s ease",
          position: "relative",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* No animation when static - icon only moves on hover */}
        <v.icon
          size={
            typeof window !== "undefined" && window.innerWidth < 640
              ? 24
              : typeof window !== "undefined" && window.innerWidth < 1024
              ? 28
              : 32
          }
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(15px, 3vw, 18px)",
          fontWeight: "700",
          marginBottom: "clamp(8px, 1vw, 10px)",
          color: isHovered ? PRIMARY_COLOR : "#000",
          transition: "color 0.3s ease",
        }}
      >
        {v.title}
      </h3>

      {/* Decorative line */}
      <div
        style={{
          width: isHovered ? "50px" : "40px",
          height: "3px",
          backgroundColor: PRIMARY_COLOR,
          margin: "clamp(8px, 1vw, 10px) auto clamp(10px, 2vw, 14px)",
          borderRadius: "2px",
          transition: "width 0.3s ease",
        }}
      />

      {/* Description */}
      <p
        style={{
          marginTop: "clamp(4px, 1vw, 6px)",
          fontSize: "clamp(12px, 2vw, 14px)",
          lineHeight: "1.7",
          color: isHovered ? "#333" : "#666",
          transition: "color 0.3s ease",
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {v.desc}
      </p>

      {/* Bottom accent bar */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "4px",
          backgroundColor: PRIMARY_COLOR,
          width: isHovered ? "100%" : "0%",
          transition: "width 0.4s ease",
        }}
      />
    </motion.div>
  );
};

const CoreValuesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("lg");
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
    }, 6000); // Slower rotation (6 seconds) for better readability
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreenSize("sm");
      else if (window.innerWidth < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause auto-rotation when user hovers over any card
  useEffect(() => {
    if (hoveredCardIndex !== null) {
      setIsAutoRotating(false);
    } else {
      setIsAutoRotating(true);
    }
  }, [hoveredCardIndex]);

  const cardsToShow = screenSize === "sm" ? 1 : screenSize === "md" ? 2 : 3;

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
      visibleCards.push(values[(currentIndex + i) % values.length]);
    }
    return visibleCards;
  };

  return (
    <section
      style={{
        paddingTop: "clamp(50px, 10vw, 90px)",
        paddingBottom: "clamp(50px, 10vw, 90px)",
        backgroundColor: "rgba(224, 224, 224, 0.2)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <style>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .value-card {
          animation: slide-in-up 0.5s ease-out forwards;
        }
        
        .value-card:nth-child(1) { animation-delay: 0s; }
        .value-card:nth-child(2) { animation-delay: 0.1s; }
        .value-card:nth-child(3) { animation-delay: 0.2s; }

        @media (max-width: 1024px) {
          .value-card:nth-child(3) { display: none; }
        }

        @media (max-width: 640px) {
          .value-card:nth-child(2),
          .value-card:nth-child(3) { display: none; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "100%",
          width: "100%",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 5vw, 24px)",
          paddingRight: "clamp(16px, 5vw, 24px)",
          boxSizing: "border-box",
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 8vw, 48px)" }}>
            {/* <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-block",
                borderRadius: "9999px",
                border: `1px solid ${PRIMARY_COLOR_30}`,
                backgroundColor: PRIMARY_COLOR_05,
                paddingLeft: "clamp(12px, 3vw, 16px)",
                paddingRight: "clamp(12px, 3vw, 16px)",
                paddingTop: "clamp(4px, 1vw, 6px)",
                paddingBottom: "clamp(4px, 1vw, 6px)",
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: "600",
                color: PRIMARY_COLOR,
                marginBottom: "clamp(12px, 3vw, 16px)",
              }}
            >
              What We Stand For
            </motion.span> */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(24px, 6vw, 48px)",
                fontWeight: "500",
                letterSpacing: "-0.02em",
                marginTop: "clamp(8px, 2vw, 12px)",
                color: "#000",
                margin: "0 auto",
                maxWidth: "100%",
              }}
            >
              Our Core <span style={{ color: PRIMARY_COLOR }}>Values</span>
            </motion.h2>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div
          style={{
            position: "relative",
            marginBottom: "clamp(24px, 5vw, 40px)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                screenSize === "sm"
                  ? "1fr"
                  : screenSize === "md"
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
              gap: "clamp(24px, 5vw, 40px)",
              width: "100%",
              maxWidth:
                screenSize === "sm"
                  ? "100%"
                  : screenSize === "md"
                  ? "80%"
                  : "75%",
            }}
          >
            {getVisibleCards().map((v, index) => (
              <ValueCard
                key={`${currentIndex}-${index}`}
                v={v}
                index={index}
                isHovered={hoveredCardIndex === index}
                onHoverStart={() => setHoveredCardIndex(index)}
                onHoverEnd={() => setHoveredCardIndex(null)}
              />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            gap: "clamp(8px, 1vw, 10px)",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "clamp(24px, 5vw, 40px)",
          }}
        >
          {values.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoRotating(false);
                setTimeout(() => setIsAutoRotating(true), 10000); // Resume after 10s
              }}
              style={{
                width: "clamp(8px, 2vw, 10px)",
                height: "clamp(8px, 2vw, 10px)",
                borderRadius: "50%",
                border: "none",
                backgroundColor:
                  index === currentIndex ? PRIMARY_COLOR : "#d0d0d0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;