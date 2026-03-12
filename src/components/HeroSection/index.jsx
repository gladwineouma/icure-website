import { GraduationCap, Hourglass, Wrench, Hand } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">

      {/* HERO */}
      <div
        className="relative h-[100vh] flex items-center bg-fixed"
        style={{
          backgroundImage: "url('/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Softer Black → Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-red-500/20"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-6xl pl-6 md:pl-16 lg:pl-24 pr-6 text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[500] leading-tight max-w-2xl">
            ICure Mentorship and Empowerment Training Centre
          </h1>

          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-200">
            Training Minds, Repairing Future
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
             <a
              href="#courses"
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md font-medium transition"
            >
              View Courses
            </a>

            <a
              href="#contact"
              className="bg-white text-red-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
            >
              Book a Free tour
            </a>
          </div>
        </motion.div>
      </div>

      {/* STATS CARD */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STAT 1 */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap size={36} className="text-red-500" />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <CountUp end={3400} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-600">Graduates Empowered</p>
            </div>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GraduationCap size={36} className="text-red-500" />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <CountUp end={94} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </h3>
              <p className="text-gray-600">Job Placement Rate</p>
            </div>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Hourglass size={36} className="text-red-500" />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <CountUp end={120} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-600">Practical Hours</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CARD 1 */}
        <motion.div
          className="bg-white shadow-md border border-red-200 rounded-lg p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Wrench size={32} className="text-black" />
          <div>
            <h3 className="font-semibold text-lg">
              Technical Training Skills
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Gain hands-on skills to trouble shoot and repair any device,
              from smartphones to laptops.
            </p>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="bg-white shadow-md border border-red-200 rounded-lg p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hand size={32} className="text-black" />
          <div>
            <h3 className="font-semibold text-lg">
              Youth Empowerment Program
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Mentorship and life skills to empower next generation.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}