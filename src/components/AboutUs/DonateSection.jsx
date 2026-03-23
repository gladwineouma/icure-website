import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Wrench, GraduationCap, Recycle, Smartphone, Award } from 'lucide-react';

export default function DonateSection() {
    return (
    <section id="donate" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
            <img src="/training-img.jpg" alt="" className="h-full w-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
            <Phone className="h-32 w-32 md:h-48 md:w-48" />
        </div>
        <div className="absolute bottom-12 right-8 text-[#0F9D58]/40 animate-pulse" style={{ animationDelay: "1.5s" }}>
            <Wrench className="h-24 w-24 md:h-36 md:w-36" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="inline-block rounded-full border border-[#E91F31]/40 bg-[#E91F31]/10 px-4 py-1.5 text-xs font-semibold text-[#E91F31] mb-4 backdrop-blur-sm">
                    Support Our Cause
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                    Make a <span className="text-[#E91F31]">Donation</span>
                </h2>
                <p className="mt-4 mx-auto max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
                    Choose how you want to make an impact — sponsor a student, support sustainability, or equip our training workshop.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">

                {/* Sponsor a Student */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-2xl border border-[#E91F31]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/50 hover:bg-white/10 shadow-lg shadow-red-500/20"
                >
                    {/* Badge */}
                    <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-[#E91F31] text-white px-3 py-1 rounded-full shadow-md">
                        Most Impactful
                    </div>

                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#E91F31]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#E91F31]" />
                    <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E91F31]/20 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                            <GraduationCap className="h-7 w-7" strokeWidth={1.5} />
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                            Sponsor a Student
                        </span>

                        <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                            Change a Life Through Training
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-300">
                            Support a young person’s journey by covering training, mentorship, and certification.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                <span className="text-gray-300 block mb-1">How to sponsor:</span>
                                <span className="font-medium text-white text-base">
                                    Get in touch and we’ll guide you through the process
                                </span>
                            </div>
                            <div className="mt-6">
                                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <span className="text-gray-300 block mb-1">What happens next:</span>
                                    <span className="font-semibold text-white text-base">
                                        We connect you with a student and support you as you transform their future
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hover CTA */}
                        <div className="mt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            <span className="text-[#E91F31] font-semibold text-sm tracking-wide">
                                Start Sponsoring →
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Go Green */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-2xl border border-[#0F9D58]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#0F9D58]/50 hover:bg-white/10 shadow-lg shadow-[#0F9D58]/20"
                >
                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#0F9D58]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#0F9D58]" />
                    <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F9D58] text-white transition-all duration-300 group-hover:bg-[#32CD32]/20 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0F9D58]">
                            <Recycle className="h-7 w-7" strokeWidth={1.5} />
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-widest text-[#0F9D58] block mb-3">
                            Go Green
                        </span>

                        <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                            Recycle for Learning
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-300">
                            Donate shelved unused electronics to promote sustainability while helping students gain hands-on experience using real devices in their training.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                <span className="text-gray-300 block mb-1">Donate:</span>
                                <span className="font-semibold text-gray-300 text-base">
                                    Old phones, laptops, accessories & other portable electronic devices
                                </span>
                            </div>
                            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                <span className="text-gray-300 block mb-1">Impact:</span>
                                <span className="font-semibold text-white text-base">
                                    Reduce e-waste while supporting practical, real-world learning
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-2xl border border-[#FFD700]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#FFD700]/50 hover:bg-white/10 shadow-lg shadow-[#FFD700]/20"
                >
                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#FFD700]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#FFD700]" />
                    <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/30 text-[#FFD700] transition-all duration-300 group-hover:bg-[#FFD700] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#FFD700]">
                            <Wrench className="h-7 w-7" strokeWidth={1.5} />
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-widest text-[#FFD700] block mb-3">
                            Tools & Equipment
                        </span>

                        <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                            Equip Future Technicians
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-300">
                            Support hands-on training by providing the essential tools and equipment students need to practice, learn, and build real technical skills.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-xl bg-white/10 font-semibold p-4 backdrop-blur-sm text-left">
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Smartphone className="h-4 w-4 text-[#E91F31]" />
                                        Devices for diagnostics and repair practice
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Wrench className="h-4 w-4 text-[#32CD32]" />
                                        Professional repair tools and toolkits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Award className="h-4 w-4 text-[#FFD700]" />
                                        Training materials and learning resources
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                <span className="text-gray-300 block mb-1">Impact:</span>
                                <span className="font-semibold text-white text-base">
                                    Enable practical training and prepare students for real-world repair work
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>


    );
}
