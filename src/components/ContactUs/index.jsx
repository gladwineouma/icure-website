import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import ScrollReveal from "../ScrollReveal";

const PRIMARY_COLOR = "#E91F31";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessCard(true);

      setTimeout(() => {
        setShowSuccessCard(false);
      }, 5000);
    }, 1500);
  };

  const closeSuccessCard = () => setShowSuccessCard(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-5 overflow-hidden min-h-screen"
    >
      {/* 🔥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contactbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {showSuccessCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSuccessCard}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl"
            >
              <motion.button
                onClick={closeSuccessCard}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X size={16} className="text-gray-600" />
              </motion.button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={40} className="text-[#E91F31]" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-black mb-3"
              >
                Message Sent!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-sm leading-relaxed mb-6"
              >
                Thank you for reaching out! We've received your message and will
                get back to you within 24 hours.
              </motion.p>

              <div className="w-full h-1 bg-gray-200 rounded overflow-hidden mb-4">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-[#E91F31]"
                />
              </div>

              <p className="text-xs text-gray-400">
                Closing in 5 seconds...
              </p>

              <motion.button
                onClick={closeSuccessCard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-8 py-3 bg-[#E91F31] text-white rounded-lg text-sm font-medium"
              >
                Got it, thanks!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white"
            >
              Contact <span className="text-[#E91F31]">Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-gray-200 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
            >
              Ready to start your repair career? Send us a message or visit our
              centre for a free tour.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* 🔥 Glass Cards */}
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="transform transition duration-500 hover:-translate-y-2">
              <ContactForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="transform transition duration-500 hover:-translate-y-2">
              <ContactDetails />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;