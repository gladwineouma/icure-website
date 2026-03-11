import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the entry requirements for the courses?",
    answer:
      "No prior technical experience is needed for our beginner-level courses. You just need a passion for technology and a willingness to learn. For advanced modules, we recommend completing the beginner level first or having equivalent hands-on experience.",
  },
  {
    question: "How long are the training programs?",
    answer:
      "Our Certified Phone Repair program runs for 4–8 weeks depending on the level, the Laptop & PC Repair program is 10 weeks, and the Master Technician Program is a comprehensive 16-week course covering all modules plus business development.",
  },
  {
    question: "Do I get certified after completion of the course?",
    answer:
      "Yes! All graduates receive an iCure-certified certificate upon successful completion.",
  },
  {
    question: "What tools and equipment will I work with?",
    answer:
      "You'll train with professional-grade equipment including hot-air rework stations, microscopes, oscilloscopes, micro-soldering stations, and advanced diagnostic tools.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Absolutely. We have a 98% job placement rate and connect graduates with leading repair shops.",
  },
  {
    question: "Can I start my own repair business after training?",
    answer:
      "Yes — our business development module covers registration, financial management, digital marketing and customer service.",
  },
  {
    question: "Who can enroll in your school?",
    answer:
      "Our doors are open to everyone including youth, aspiring technicians, entrepreneurs and career changers.",
  },
  {
    question: "Are there payment plans?",
    answer:
      "Yes. We offer flexible payment options including installment plans across the training period.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="w-full py-16 bg-white flex justify-center"
    >
      <div className="w-full max-w-3xl px-4">

        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-center mb-10 leading-snug"
        >
          Frequently Asked{" "}
          <span className="text-[#E91F31] font-medium">Questions</span>
        </motion.h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">

          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`rounded-md bg-white overflow-hidden transition-all duration-300
                ${
                  isOpen
                    ? "border-2 border-[#E91F31] shadow-lg"
                    : "border border-red-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-4 py-3 text-left text-sm md:text-base font-normal transition
                  ${isOpen ? "bg-red-50" : "hover:bg-gray-50"}`}
                >
                  {faq.question}

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#E91F31] text-xl font-medium"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>

        {/* Show More Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-red-400 font-medium px-6 py-2 rounded-full hover:bg-red-100 transition"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}