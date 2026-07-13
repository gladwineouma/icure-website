import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Courses", to: "/courses" },
  { name: "Gallery", to: "/gallery" },
  { name: "FAQs", to: "/faqs" },
  { name: "Contact Us", to: "/contactus" },
];

const courses = [
  { name: "Basic Phone Repair", href: "/courses#basic-phone" },
  { name: "Advanced Phone Repair", href: "/courses#advanced-phone" },
  { name: "Basic Laptop Repair", href: "/courses#basic-laptop" },
  { name: "Advanced Laptop Repair", href: "/courses#advanced-laptop" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-black text-white">
      {/* 
<footer className="bg-black text-white">
<footer className="bg-[#111111] text-white">
<footer className="bg-[#282828] text-white"> ok
<footer className="bg-[#0C0202] text-white">
<footer className="bg-[#242424] text-white">

*/}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <motion.div {...fadeInUp}>
            <div className="flex items-start gap-2 mb-5">
              <img
                src="/icure-logo.png"
                alt="iCure Logo"
                className="h-12 w-12"
              />
              <div className="leading-tight mt-1">
                <span className="text-[#E91F31] font-semibold text-[17px] md:text-[18px] tracking-tight">
                  iCure
                </span>
                <br />
                <span className="text-gray-400 text-[12px] md:text-[13px] max-w-xs">
                  Mentorship & Empowerment Training Centre
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional mobile phone & laptop repair training centre.
              Hands-on courses, certified instructors, and career support.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-base font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-[#E91F31] flex-shrink-0" />
                    <Link
                      to={link.to}
                      className="text-gray-400 text-sm hover:text-[#E91F31] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-base font-semibold mb-5 text-white">Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-[#E91F31] flex-shrink-0" />
                    <Link
                      to={course.href}
                      className="text-gray-400 text-sm hover:text-[#E91F31] transition-colors duration-300"
                    >
                      {course.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-base font-semibold mb-5 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E91F31] mt-1 flex-shrink-0" />
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 leading-relaxed hover:text-[#E91F31] transition-colors duration-300 cursor-pointer group"
                >
                  Kenya Cinema Building <br />
                  4th Floor, Aga Khan Walk <br />
                  <span className="text-xs group-hover:underline">Nairobi CBD, Kenya →</span>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#E91F31] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400 space-y-1">
                  <p>+254 725 128058</p>
                  <p>+254 723 319814</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#E91F31] mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@icure.africa"
                  className="text-sm text-gray-400 hover:text-[#E91F31] transition"
                >
                  info@icure.africa
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-px bg-[#E91F31] opacity-50"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center py-6"
      >
        <p className="text-sm text-gray-500">
          © {currentYear} iCURE Mentorship & Empowerment Training Centre.
        </p>
      </motion.div>
    </footer>
  );
}
