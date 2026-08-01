import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function OutreachHero() {
    return (
        <section className="relative pt-36 pb-20 bg-neutral-950 text-white overflow-hidden">

            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-red-600/30 blur-[120px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-red-700/20 blur-[140px]" />
            </div>

            <div className="container relative mx-auto px-6 text-center">
                <ScrollReveal>
                    <span className="inline-block rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1 text-xs font-semibold text-[#E91F31] mb-6 tracking-wide">
                        Our Impact
                    </span>

                    <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-white mb-5">
                        Outreach & <span className="text-[#E91F31]">Stories</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-400 leading-relaxed font-normal">
                        Places we've visited, youths we've taught, and e-waste we've collected. Click any photo to read the story behind it.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
