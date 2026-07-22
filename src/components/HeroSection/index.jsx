import { GraduationCap, Briefcase, Hourglass, Wrench, Hand } from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      <div
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/heroImage.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-[#E91F31]/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-6xl mx-auto px-6 md:px-16 text-white"
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              iCure Mentorship and Empowerment Training Centre
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Training Minds, Repairing Future
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                to="/courses"
                className="bg-red-500 hover:bg-red-600 px-6 py-3 text-sm font-medium rounded-md transition text-center w-full sm:w-[180px]"
              >
                View Courses
              </Link>

              <Link
                to="/about#donate"
                className="bg-white text-red-500 border border-red-500 px-6 py-3 text-sm font-medium rounded-md hover:bg-red-50 transition text-center w-full sm:w-[180px]"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap size={36} className="text-[#E91F31]" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                <CountUp end={700} duration={3.5} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-600">Graduates Empowered</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Briefcase size={36} className="text-[#E91F31]" strokeWidth={2.5} />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                <CountUp end={94} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </h3>
              <p className="text-gray-600">Job Placement Rate</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Hourglass size={36} className="text-[#E91F31]" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                <CountUp end={120} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-600">Practical Hours</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white shadow-md border border-red-200 rounded-lg p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Wrench size={48} className="text-black flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">
              Technical Training Skills
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Gain hands-on skills to troubleshoot and repair any device,
              from smartphones to laptops.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white shadow-md border border-red-200 rounded-lg p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hand size={48} className="text-black flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">
              Youth Empowerment Program
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Mentorship and life skills to empower the next generation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
