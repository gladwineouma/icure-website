import React from "react";
import { Calendar, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryModal({ activeStory, onClose }) {
    if (!activeStory) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="relative bg-white text-gray-900 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto z-10"
                >
                    <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                            src={activeStory.image}
                            alt={activeStory.title}
                            className="h-full w-full object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="p-6 md:p-8">
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-gray-900">
                            {activeStory.title}
                        </h2>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 border-b border-gray-100 pb-4">
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5" /> {activeStory.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" /> {activeStory.date}
                            </span>
                        </div>
                        <div className="mt-5 space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                            {activeStory.body.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
