import React from 'react';
import { Users, Heart, Award, HandHeart } from 'lucide-react';
import StaggerChildren from '../StaggerChildren';
import { staggerItem } from '../StaggerChildren';
import { motion } from "framer-motion";



export function ImpactStats() {
    const stats = [
        { icon: Users, value: "200+", label: "Youth Trained" },
        { icon: Heart, value: "6", label: "Team Members" },
        { icon: Award, value: "100%", label: "Commitment" },
        { icon: HandHeart, value: "∞", label: "Impact" },
    ];

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <StaggerChildren
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerItem}
                            className="text-center ..."
                        />
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
