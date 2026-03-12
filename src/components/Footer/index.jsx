import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
];

const courses = [
  { name: "Basic Phone Repair", href: "#" },
  { name: "Advanced Phone Repair", href: "#" },
  { name: "Basic Laptop Repair", href: "#" },
  { name: "Advanced Laptop Repair", href: "#" },
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

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO + DESCRIPTION */}
          <motion.div {...fadeInUp}>
            <img
              src="/icure-logo.png"
              alt="iCure Logo"
              className="w-44 mb-5"
            />

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional mobile phone & laptop repair training centre.
              Hands-on courses, certified instructors, and career support.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-base font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#E91F31] transition"
                  >
                    <ChevronRight size={14} />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COURSES */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-base font-semibold mb-5">Courses</h3>

            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <motion.a
                    href={course.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#E91F31] transition"
                  >
                    <ChevronRight size={14} />
                    {course.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-base font-semibold mb-5">Contact Us</h3>

            <div className="space-y-4">

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E91F31] mt-1" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Kenya Cinema Building <br/>
                  4th Floor, Aga Khan Walk <br/>
                  Nairobi CBD, Kenya
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#E91F31] mt-1" />
                <div className="text-sm text-gray-400 space-y-1">
                  <p>+254 725 128058</p>
                  <p>+254 723 319814</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#E91F31] mt-1" />
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

      {/* FULL WIDTH DIVIDER */}
      <div className="w-full h-px bg-[#E91F31] opacity-50"></div>

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center py-6"
      >
        <p className="text-sm text-gray-500">
          © {currentYear} iCURE Mentorship and Empowerment Training Centre.
        </p>
      </motion.div>

    </footer>
  );
}