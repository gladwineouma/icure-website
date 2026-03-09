import { Eye, Target, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    label: "About Us",
    title: "Who We Are",
    body: "iCure Mentorship and Empowerment Training Centre delivers world-class phone and laptop repair training. Our hands-on curriculum transforms beginners into pro technicians while sharpening skills for experienced pros. We blend technical mastery with business mentorship to launch empowered entrepreneurs who thrive in the booming electronics repair industry.",
  },
];

const PRIMARY_COLOR = "#E91F31";

const AboutSection = () => {
  const [screenSize, setScreenSize] = useState("lg");
  const [hoveredCard, setHoveredCard] = useState(null);

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

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: screenSize === "sm" ? "60px 20px" : screenSize === "md" ? "80px 40px" : "100px 60px",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background overlay with image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: screenSize === "sm" ? "32px" : screenSize === "md" ? "40px" : "48px",
              fontWeight: "500",
              color: "#fff",
              margin: 0,
            }}
          >
            About <span style={{ color: PRIMARY_COLOR }}>iCure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              marginTop: "16px",
              fontSize: screenSize === "sm" ? "14px" : "16px",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "700px",
              margin: "16px auto 0",
              lineHeight: "1.6",
            }}
          >
            More than a training centre — we're building the next generation of electronics repair leaders.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: screenSize === "sm" ? "20px" : screenSize === "md" ? "24px" : "30px",
            flexWrap: "wrap",
            maxWidth: screenSize === "sm" ? "100%" : screenSize === "md" ? "800px" : "1000px",
            margin: "0 auto",
          }}
        >
          {cards.map((card, index) => {
            const isHovered = hoveredCard === index;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{
                  flex: screenSize === "sm" ? "1 1 100%" : "1 1 300px",
                  maxWidth: screenSize === "sm" ? "100%" : "350px",
                  backgroundColor: "#000",
                  borderRadius: "4px",
                  borderTop: `5px solid ${PRIMARY_COLOR}`,
                //   border: isHovered ? `1px solid ${PRIMARY_COLOR}` : "none",
                  padding: screenSize === "sm" ? "28px 24px" : "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "none"
                    : `0 8px 25px ${PRIMARY_COLOR}25`,
                }}
              >
             
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: `${PRIMARY_COLOR}70`,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <card.icon 
                    size={26} 
                    color="#ffffff" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    color: PRIMARY_COLOR,
                    marginBottom: "12px",
                    display: "block",
                  }}
                >
                  {card.label}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: screenSize === "sm" ? "18px" : "20px",
                    fontWeight: "600",
                    color: "#fff",
                    marginBottom: "16px",
                    lineHeight: "1.3",
                  }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;