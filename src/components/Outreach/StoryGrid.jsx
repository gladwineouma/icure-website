import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";

export default function StoryGrid({ stories, onSelectStory }) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {stories.map((s) => (
                        <motion.div
                            key={s.title}
                            variants={staggerItem}
                            whileHover={{ y: -6 }}
                            onClick={() => onSelectStory(s)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    onSelectStory(s);
                                }
                            }}
                            className="group text-left rounded-2xl overflow-hidden border border-[#E91F31] bg-card hover:bg-neutral-50/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E91F31]"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                    <h3 className="font-display text-lg font-medium">{s.title}</h3>
                                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80">
                                        <span className="inline-flex items-center gap-1">
                                            <MapPin className="h-3.5 w-3.5" /> {s.location}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" /> {s.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {s.excerpt}
                                </p>
                                <span className="mt-3 inline-block text-xs font-semibold text-[#E91F31] group-hover:underline">Read story →</span>
                            </div>
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
