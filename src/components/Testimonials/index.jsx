import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "James Okonkwo",
        role: "Certified Phone Repair Technician Graduate",
        course: "Phone Repair – Beginner",
        text: "iCure made me job-ready in just 4 weeks! The hands-on training gave me real confidence to repair phones professionally.",
        rating: 5,
        initials: "JO",
    },
    {
        name: "Sarah Wanjiku",
        role: "Advanced Smartphone Repair Specialist",
        course: "Advanced Smartphone Repair",
        text: "World-class micro-soldering training. I demonstrated a motherboard repair at my interview and got hired on the spot!",
        rating: 5,
        initials: "SW",
    },
    {
        name: "Ahmed Hassan",
        role: "Laptop Technician at TechCare",
        course: "Laptop & PC Repair",
        text: "iCure's laptop program covers it all. Practical sessions with real devices gave me the edge I needed in the job market.",
        rating: 5,
        initials: "AH",
    },
    {
        name: "Linda Achieng",
        role: "Repair Business Owner",
        course: "Master Technician Program",
        text: "The Master Program gave me everything from advanced repairs to business skills to launch my own repair centre.",
        rating: 5,
        initials: "LA",
    },
];

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="relative py-24 bg-gray-50 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-[#E91F31]/5 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#E91F31]/5 blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >

                    <h2 className="text-4xl font-medium md:text-5xl">
                        What Our <span className="text-[#E91F31]">Graduates</span> Say
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-gray-600">
                        Real stories from real technicians who transformed their careers.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">

                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-red-400 hover:shadow-lg"
                        >

                            {/* Quote Icon */}
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-[#E91F31]/10 group-hover:text-[#E91F31]/20 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 fill-[#E91F31] text-[#E91F31]"
                                    />
                                ))}
                            </div>

                            {/* Course */}
                            <span className="inline-block rounded-full bg-[#E91F31]/10 px-3 py-1 text-xs font-medium text-[#E91F31] mb-3">
                                {t.course}
                            </span>

                            {/* Text */}
                            <p className="text-sm text-gray-600 leading-relaxed italic">
                                "{t.text}"
                            </p>

                            {/* User */}
                            <div className="mt-5 border-t border-gray-200 pt-4 flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91F31] text-white text-sm font-medium">
                                    {t.initials}
                                </div>

                                <div>
                                    <p className="text-sm font-medium">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}