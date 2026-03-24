import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const Tiktok = ({ size = 18, color = "#E91F31" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
};

const ContactDetails = () => {
  return (
    <ScrollReveal direction="right">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -6 }}
        className="group relative rounded-2xl bg-white p-6 md:p-10 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl min-h-[500px] flex flex-col"
      >
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-medium text-black mb-6">
            Contact Details
          </h3>

          <div className="flex flex-col gap-6 mb-7 flex-1">

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#E91F31]/10 text-[#E91F31]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1 text-black">Our Location</p>
                <a
                  href="https://maps.google.com/?q=Kenya+Cinema+Building,+Aga+Khan+Walk,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#E91F31] transition"
                >
                  Kenya Cinema Building, 4th Floor<br />
                  Nairobi CBD, Kenya
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#E91F31]/10 text-[#E91F31]">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1 text-black">Phone</p>
                <p className="text-sm text-gray-600">+254 723 319 814</p>
                <p className="text-sm text-gray-600">+254 725 128 058</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#E91F31]/10 text-[#E91F31]">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1 text-black">Email</p>
                <a
                  href="mailto:info@icure.africa"
                  className="text-sm text-gray-600 hover:text-[#E91F31]"
                >
                  info@icure.africa
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-5"></div>

          <div>
            <p className="text-black font-medium mb-4">Connect With Us</p>

            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/icure-service-center-46b45137b/?originalSubdomain=ke" },
                { Icon: Instagram, href: "https://www.instagram.com/icureservicescenter/" },
                { Icon: Facebook, href: "https://www.facebook.com/people/I-Cure-Service-Center/61578901858726/#" },
                { Icon: Tiktok, href: "https://www.tiktok.com/@icureservicecentre" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 text-[#E91F31] hover:bg-[#E91F31] hover:text-white transition"
                >
                  <Icon size={18} />
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