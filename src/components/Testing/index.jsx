
// "use client";
// import React, { useState } from "react"; import { motion, AnimatePresence } from "framer-motion"; import { Calendar, MapPin, X, Eye } from "lucide-react";
// import StoryModal from "../Outreach/StoryModal";
// floatVariants = {
// animate: (delay) => ({
//     y: [0, -12, 0],
//     transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: delay
//     }

// })
// };
// // ============================================================================// 2. STORY MODAL VIEWPORT OVERLAY COMPONENT (Original Dark Card Theme)// ============================================================================
// export function StoryModal({ activeStory, onClose }) {
// if (!activeStory) return null;

// return (
//     <AnimatePresence>
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             {/* Immersive Dark Backdrop Overlay */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={onClose}
//                 className="absolute inset-0 bg-black/80 backdrop-blur-md"

//             />

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
//                 transition={{ type: "spring", duration: 0.5 }}
//                 className="relative bg-neutral-900 border border-neutral-800 text-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto z-10"
//             >
//                 <div className="relative aspect-[16/9] bg-neutral-950 overflow-hidden">
//                     <img
//                         src={activeStory.image}
//                         onError={(e) => { e.target.src = activeStory.localImage; }}
//                         alt={activeStory.title}
//                         className="h-full w-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/40" />

//                     <button
//                         onClick={onClose}
//                         className="absolute top-4 right-4 rounded-full bg-neutral-950/80 border border-neutral-800 text-white p-2.5 hover:bg-[#E91F31] hover:border-red-500 transition-colors focus:outline-none"
//                         aria-label="Close modal"
//                     >
//                         <X className="h-4 w-4" />
//                     </button>
//                 </div>

//                 <div className="p-6 md:p-8 text-left">
//                     <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white">
//                         {activeStory.title}
//                     </h2>

//                     <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400 border-b border-neutral-800 pb-4">
//                         <span className="inline-flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
//                             <MapPin className="h-3.5 w-3.5 text-[#E91F31]" /> {activeStory.location}
//                         </span>
//                         <span className="inline-flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">

//                             <Calendar className="h-3.5 w-3.5 text-[#E91F31]" /> {activeStory.date}
//                         </span>
//                     </div>

//                     <div className="mt-6 space-y-4 text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
//                         {activeStory.body.map((paragraph, index) => (
//                             <p key={index} className="first-letter:text-lg first-letter:font-semibold first-letter:text-white">
//                                 {paragraph}
//                             </p>
//                         ))}
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     </AnimatePresence>
// )};

// // ============================================================================

// // 3. MAIN INTERACTIVE PARENT HERO CONTAINER (Original Dark Red Theme)// ============================================================================
// export default function OutreachHero() {
// const [selectedStory, setSelectedStory] = useState(null);

// const triggerTestingVerification = (e) => {
//     e.preventDefault();
//     const testingArticle = rawStories.find(item => item.id === "testing-hub");
//     if (testingArticle) {
//         setSelectedStory(testingArticle);
//     }
// };

// return (
//     <section className="relative w-full min-h-screen bg-neutral-950 text-white overflow-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">

//         <div className="absolute inset-0 z-0 pointer-events-none">
//             <img

//                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920"
//                 alt="Network Hub Background"
//                 className="w-full h-full object-cover opacity-20 filter grayscale blur-[1px]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />

//             <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-red-600/20 blur-[120px]" />
//             <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-red-700/10 blur-[140px]" />
//         </div>

//         <header className="relative z-20 w-full border-b border-white/5 bg-neutral-950/60 backdrop-blur-md">
//             <div className="container mx-auto px-6 h-20 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
//                     <span className="font-semibold tracking-wider text-xs uppercase font-mono">iCure Impact Room</span>
//                 </div>

//                 <nav className="flex items-center gap-6">
//                     <a href="#overview" className="text-xs text-neutral-400 hover:text-white transition-colors">Overview</a>
//                     <a href="#stories" className="text-xs text-neutral-400 hover:text-white transition-colors">Archive</a>
//                     <button
//                         onClick={triggerTestingVerification}
//                         className="inline-flex items-center gap-1.5 rounded-full bg-red-950/60 border border-red-500/40 px-4 py-1.5 text-xs font-mono font-semibold text-red-400 hover:bg-red-600 hover:text-white hover:border-red-500 shadow-md transition-all transform active:scale-95"
//                     >
//                         <Eye className="w-3.5 h-3.5" />
//                         testing
//                     </button>
//                 </nav>
//             </div>
//         </header>

//         <div className="relative z-10 container mx-auto px-6 pt-12 pb-4 text-center max-w-3xl">
//             <span className="inline-block rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1 text-xs font-semibold text-[#E91F31] mb-6 tracking-wide">
//                 Our Impact
//             </span>

//             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-5">
//                 Outreach & <span className="text-[#E91F31]">Stories</span>
//             </h2>

//             <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-400 leading-relaxed font-normal">
//                 Places we've visited, youths we've taught, and e-waste we've collected. Click any photo preview token to reveal the full narrative canvas, or engage the <span className="text-[#E91F31] font-mono font-semibold">testing</span> trigger link.
//             </p>
//         </div>

//         <div className="relative z-10 w-full flex-grow min-h-[500px] container mx-auto px-6 pb-20 mt-6">

//             <div className="hidden lg:block absolute inset-0">
//                 {sortedStories.map((story) => (
//                     <motion.div
//                         key={story.id}
//                         custom={story.floatDelay}
//                         variants={floatVariants}

//                         animate="animate"
//                         style={{ top: story.position.top, left: story.position.left }}
//                         className="absolute group flex flex-col items-center cursor-pointer"
//                     >
//                         <button
//                             onClick={() => setSelectedStory(story)}
//                             className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E91F31] transition-all duration-500 group-hover:border-[#E91F31] group-hover:shadow-[0_20px_40px_-5px_rgba(233,31,49,0.2)]"
//                         >
//                             <img
//                                 src={story.image}
//                                 onError={(e) => { e.target.src = story.localImage; }}
//                                 alt={story.title}
//                                 className="h-full w-full object-cover transition-transform duration-500 filter brightness-90 group-hover:brightness-100 group-hover:scale-105"
//                                 loading="lazy"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

//                             {/* Hover Action Prompt */}
//                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">

//                                 <span className="text-[10px] font-mono tracking-widest text-[#E91F31] bg-neutral-950/90 px-3 py-1.5 rounded border border-red-500/30 font-semibold uppercase">
//                                     Open View
//                                 </span>
//                             </div>
//                         </button>

//                         <div className="mt-3 text-center pointer-events-none max-w-[180px] transform transition-transform duration-300 group-hover:translate-y-1">
//                             <h4 className="font-display text-xs font-medium text-white group-hover:text-[#E91F31] transition-colors line-clamp-1">
//                                 {story.title}
//                             </h4>
//                             <p className="text-[10px] text-neutral-500 font-mono mt-0.5 truncate">
//                                 {story.location.split("—")[0].trim()}
//                             </p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Adaptive Smartphone/Tablet Fallback Framework Grid */}

//             <div className="lg:hidden grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
//                 {sortedStories.map((story) => (
//                     <div
//                         key={story.id}
//                         onClick={() => setSelectedStory(story)}
//                         role="button"
//                         tabIndex={0}
//                         onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedStory(StoryModal); }}
//                         className="group text-left rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm p-4 hover:border-[#E91F31]/50 transition-all cursor-pointer"
//                     >
//                         <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-950 mb-3">
//                             <img
//                                 src={story.image}
//                                 onError={(e) => { e.target.src = story.localImage; }}
//                                 alt={story.title}
//                                 className="h-full w-full object-cover"
//                             />
//                         </div>
//                         <span className="text-[10px] text-[#E91F31] font-mono uppercase tracking-wider block mb-1">

//                             {story.date}
//                         </span>
//                         <h3 className="font-display text-sm font-medium text-white mb-2 line-clamp-1">{story.title}</h3>
//                         <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
//                             {story.excerpt}
//                         </p>
//                         <span className="text-xs font-semibold text-[#E91F31] group-hover:underline inline-flex items-center gap-1">
//                             Read story &rarr;
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* Unified Overlay Reading Context Window Portal */}
//         <StoryModal
//             activeStory={selectedStory}
//             onClose={() => setSelectedStory(null)}
//         />

//     </section>
// ); };