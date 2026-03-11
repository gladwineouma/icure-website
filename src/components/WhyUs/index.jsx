import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section id="why-us"
    className="bg-gray-100 py-16 px-5 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
          Why <span className="text-[#E91F31]">Choose</span> Us
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          We're not just a school — we're a launchpad for your tech career.
          Here's what sets iCure apart from the rest.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded border-2 border-transparent shadow-xl hover:border hover:border-[#E91F31] hover:shadow-lg hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 bg-white"
          >
            <h3 className="text-[#E91F31] text-xl font-medium mb-4">
              Expert Instructors
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our trainers are not just teachers; they are seasoned industry
              professionals with decade plus of hands-on experience in phone and
              laptop repair.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 120, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="p-8 rounded border-2 border-transparent shadow-xl hover:border hover:border-[#E91F31] hover:shadow-lg hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 bg-white"
          >
            <h3 className="text-[#E91F31] text-xl font-medium mb-4">
              100% Practical, <br /> Hands-On Training
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in learning by doing. Our courses are designed to
              provide maximum hands-on experience, ensuring our graduates
              are job-ready from day one.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="p-8 rounded border-2 border-transparent shadow-xl hover:border hover:border-[#E91F31] hover:shadow-lg hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 bg-white"
          >
            <h3 className="text-[#E91F31] text-xl font-medium mb-4">
              Affordable & Flexible Learning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Quality training must not always break the bank. We offer competitive
              pricing with flexible payment plans and scheduling options,
              making professional technical education accessible to everyone globally.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}