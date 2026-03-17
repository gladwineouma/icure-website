import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const PRIMARY_COLOR = "#E91F31";

const Tiktok = ({ size = 18, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const ContactDetails = () => {
  return (
    <ScrollReveal direction="right">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 md:p-10 shadow-xl w-full lg:w-auto flex flex-col min-h-[500px] md:flex-[1.1]"
      >
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Contact Details
          </h3>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:gap-7 mb-7 flex-1">
            {/* LOCATION */}
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center border border-red-500/30 bg-red-500/10 flex-shrink-0">
                <MapPin size={20} className="text-[#E91F31]" />
              </div>
              <div>
                <p className="font-medium text-[15px] mb-1">Our Location</p>
                <p className="text-sm text-gray-600">
                  <a
                    href="https://maps.google.com/?q=Kenya+Cinema+Building,+Aga+Khan+Walk,+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E91F31] hover:underline transition-all duration-200"
                  >
                    Kenya Cinema Building, 4th Floor<br />
                    Nairobi CBD Nairobi, Kenya
                  </a>
                </p>

              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center border border-red-500/30 bg-red-500/10 flex-shrink-0">
                <Phone size={20} className="text-[#E91F31]" />
              </div>
              <div>
                <p className="font-medium text-[15px] mb-1">Phone</p>
                <p className="text-sm text-gray-600">+254723319814</p>
                <p className="text-sm text-gray-600">+254725128058</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center border border-red-500/30 bg-red-500/10 flex-shrink-0">
                <Mail size={20} className="text-[#E91F31]" />
              </div>
              <div>
                <p className="font-medium text-[15px] mb-1">Email</p>
                <a
                  href="mailto:info@icure.africa"
                  className="text-sm text-gray-600 hover:text-[#E91F31] transition-colors"
                >
                  info@icure.africa
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-5"></div>

          {/* Social - CLICKABLE LINKS */}
          <div>
            <p className="text-base font-medium mb-4">
              Connect With Us
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/icure-service-center-46b45137b/?originalSubdomain=ke" },
                { Icon: Instagram, href: "https://www.instagram.com/icureservicescenter/" },
                { Icon: Tiktok, href: "https://www.tiktok.com/@icureservicecentre" },
                { Icon: Facebook, href: "https://www.facebook.com/people/I-Cure-Service-Center/61578901858726/#" }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#E91F31] flex items-center justify-center border border-[#E91F31]/40 hover:shadow-lg transition-all duration-200"
                >
                  <Icon size={18} color="#fff" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default ContactDetails;
