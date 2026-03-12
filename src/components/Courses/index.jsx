import { useState } from "react";
import { Clock, ChevronDown, Smartphone, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const coursesData = [
  {
    name: "Mobile Phone Repair",
    icon: <Smartphone className="h-6 w-6" />,
    levels: [
      {
        level: "Level 1",
        title: "Foundation & Basics",
        duration: "6 Weeks",
        shortDescription:
          "Learn the fundamentals of mobile phone hardware, basic diagnostics, and common repairs like screen and battery replacement.",
        fullDescription:
          "This entry-level module covers the complete anatomy of modern smartphones, including teardown procedures, component identification, and safe handling of delicate parts. You'll master screen and LCD replacement for popular brands, battery swaps, charging port repairs, and software troubleshooting such as factory resets and firmware flashing.",
        img: "/mobileBasic.png",
      },
      {
        level: "Level 2",
        title: "Advanced Micro-Soldering",
        duration: "10 Weeks",
        shortDescription:
          "Master micro-soldering, logic board diagnostics, and complex repairs including water damage recovery and BGA rework.",
        fullDescription:
          "Building on Level 1, this advanced module dives deep into micro-soldering techniques using hot-air rework stations and microscopes. You'll learn to read schematics, trace circuits on multi-layer PCBs, and diagnose faults at the component level.",
        img: "/mobileAdvance.png",
      },
    ],
  },
  {
    name: "Laptop & PC Repair",
    icon: <Laptop className="h-6 w-6" />,
    levels: [
      {
        level: "Level 1",
        title: "Hardware & Software Essentials",
        duration: "8 Weeks",
        shortDescription:
          "Understand laptop architecture, perform hardware upgrades, OS installations, and diagnose common hardware failures.",
        fullDescription:
          "This foundational course walks you through the internal architecture of laptops and desktop PCs — from CPUs and RAM to storage drives and display panels. You'll gain hands-on experience with hardware upgrades and OS installations.",
        img: "/laptopBasic.png",
      },
      {
        level: "Level 2",
        title: "Motherboard-Level Repair",
        duration: "12 Weeks",
        shortDescription:
          "Perform component-level motherboard repairs, GPU/CPU reballing, data recovery, and advanced power circuit diagnostics.",
        fullDescription:
          "The most intensive module focuses entirely on board-level laptop repair. You'll learn to use oscilloscopes and advanced diagnostic tools to pinpoint failing motherboard components.",
        img: "/laptopAdvance.png",
      },
    ],
  },
];

function LevelCard({ level }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group rounded-lg border border-gray-200 bg-white overflow-hidden transition-all hover:border-red-400"
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <motion.img
          src={level.img}
          alt={level.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="rounded-full bg-[#E91F31] px-3 py-1 text-xs font-medium text-white">
            {level.level}
          </span>

          <span className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium flex items-center gap-1">
            <Clock className="h-3 w-3" /> {level.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="text-lg font-[500]">{level.title}</h4>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {level.shortDescription}
        </p>

        <div
          className={`transition-all duration-300 ease-in-out ${
            expanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <p className="text-sm leading-relaxed text-gray-600">
            {level.fullDescription}
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#E91F31] hover:text-red-400 transition"
        >
          {expanded ? "Read Less" : "Read More"}

          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}

export default function CourseLevelsSection() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-medium md:text-5xl">
            Our <span className="text-[#E91F31]">Core Programs</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            Two specialised tracks — each with a structured progression from
            beginner to expert.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="grid gap-8 md:grid-cols-2">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8"
            >
              {/* Course Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E91F31]/10 text-white">
                  {course.icon}
                </div>

                <h3 className="text-xl font-medium">{course.name}</h3>
              </div>

              {/* Levels */}
              <div className="space-y-4">
                {course.levels.map((level) => (
                  <LevelCard key={level.level} level={level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}