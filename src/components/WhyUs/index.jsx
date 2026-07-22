import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 px-5 scroll-mt-24 bg-[#f9fafb]"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900">
          Why <span className="text-[#E91F31]">Choose</span> Us
        </h1>
        <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          We're not just a school we're a launchpad for your tech career.
          Here's what sets iCure apart from the rest.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200
                       shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.05)]
                       hover:shadow-[0_25px_60px_rgba(233,31,49,0.25)]
                       hover:-translate-y-4 transition-all duration-300"
          >
            <h3 className="text-[#E91F31] text-xl font-semibold mb-4">
              Expert Instructors
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our trainers are not just teachers; they are seasoned industry
              professionals with decade plus of hands-on experience in phone and
              laptop repair.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200
                       shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.05)]
                       hover:shadow-[0_25px_60px_rgba(233,31,49,0.25)]
                       hover:-translate-y-4 transition-all duration-300"
          >
            <h3 className="text-[#E91F31] text-xl font-semibold mb-4">
              100% Practical, <br /> Hands-On Training
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in learning by doing. Our courses are designed to
              provide maximum hands-on experience, ensuring our graduates
              are job-ready from day one.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200
                       shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.05)]
                       hover:shadow-[0_25px_60px_rgba(233,31,49,0.25)]
                       hover:-translate-y-4 transition-all duration-300"
          >
            <h3 className="text-[#E91F31] text-xl font-semibold mb-4">
              Affordable & Flexible Learning
            </h3>
            <p className="text-gray-600 leading-relaxed">
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