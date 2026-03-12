import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const PRIMARY_COLOR = "#E91F31";

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <ScrollReveal direction="left">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
       className="bg-white rounded-2xl p-6 md:p-10 shadow-xl w-full lg:w-1/2"
      >
        <h3 className="text-xl md:text-2xl font-medium text-black mb-7">
          Send us a message
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Sean Myles"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none transition focus:border-[#E91F31] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="sean@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none transition focus:border-[#E91F31] focus:bg-white"
              />
            </div>

          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none transition focus:border-[#E91F31] focus:bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none transition resize-y focus:border-[#E91F31] focus:bg-white"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 mt-2
            ${isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
            bg-[#E91F31]`}
          >
            {isSubmitting ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⟳
                </motion.span>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </motion.button>

        </form>
      </motion.div>
    </ScrollReveal>
  );
};

export default ContactForm;