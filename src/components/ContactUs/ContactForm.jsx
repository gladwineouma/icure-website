import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("SUCCESS:", result);
      onSubmit(formData);

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <ScrollReveal direction="left">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-xl w-full lg:w-auto flex flex-col min-h-[500px]"
      >
        <h3 className="text-xl md:text-2xl font-medium text-black mb-5">
          Send us a message
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#E91F31]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#E91F31]"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#E91F31]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#E91F31]"
            />
          </div>

          {error && (
            <p className="text-xs text-red-500 -mt-1">{error}</p>
          )}

          {/* Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full py-2.5 px-5 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 mt-1 bg-[#E91F31]"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={15} />
              </>
            )}
          </motion.button>

        </form>
      </motion.div>
    </ScrollReveal>
  );
};

export default ContactForm;