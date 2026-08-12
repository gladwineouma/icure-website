import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const galleryCategories = [
    {
        title: "Community Outreach",
        images: [
            { src: "/outreach1.jpeg", alt: "Community engagement" },
            { src: "/outreach2.jpeg", alt: "Technical camps" },
            { src: "/outreach3.jpeg", alt: "Support distributions" },
            { src: "/outreach4.jpeg", alt: "Awareness drive" },
            { src: "/outreach5.jpeg", alt: "Local leaders partnership" },
            { src: "/4.jpg", alt: "Volunteer Teaching" },
            { src: "/6.jpg", alt: "" },
            { src: "/7.jpg", alt: "" },
            { src: "/8.jpg", alt: "" },
            { src: "/9.jpg", alt: "" },
            { src: "/10.jpg", alt: "" },
            { src: "/11.jpg", alt: "" },
            { src: "/chuka1 (1).JPG", alt: "" },
            { src: "/chuka1 (3).JPG", alt: "" },


        ]
    },
    {
        title: "Classroom Activities",
        images: [
            { src: "/handsontraining.jpg", alt: "Hands-on training" },
            { src: "/assignment.jpg", alt: "Group training session" },
            { src: "/practicallab.jpg", alt: "Practical laboratory" },
            { src: "/instructor.jpg", alt: "Instructor guiding learner" },
            { src: "/peercollaboration.jpeg", alt: "Peer collaboration" },
            { src: "/handsontraining.jpeg", alt: "Workshop assignment" },
        ]
    },
    {
        title: "People Who Make iCure Happen",
        images: [
            { src: "/happen1.jpeg", alt: "Our Students" },
            { src: "/mike.jpg", alt: "Training Director" },
            { src: "/happen2.jpg", alt: "Icure Family" },
            { src: "/ground.jpg", alt: "Field operators" },
            { src: "/trainer.jpg", alt: "Trainer" },
            { src: "/1.jpeg", alt: "" },
            { src: "/2.jpeg", alt: "" },
           
            




            // { src: "/trainer2.jpg", alt: "Additional partner" },
        ]
    },
    {
        title: "Graduates",
        images: [
            { src: "/cert4.jpeg", alt: "Proud graduates" },
            { src: "/cert2.jpeg", alt: "Certification ceremony" },
            { src: "/cert1.jpeg", alt: "Awarding top student" },
            { src: "/group1.jpeg", alt: "Celebration moments" },
            { src: "/group2.jpeg", alt: "Group photo alumni" },
            // { src: "/group3.jpeg", alt: "Alumni networking session" },
        ]
    }
];

const allImages = galleryCategories.flatMap(category => category.images);

interface HoverState {
    globalIndex: number;
}

interface ImageSize {
    [key: number]: {
        span: string;
        height: string;
    };
}

const imageSizes: ImageSize = {
    0: { span: "col-span-2 row-span-2", height: "h-[400px]" },
    1: { span: "col-span-1 row-span-1", height: "h-[190px]" },
    2: { span: "col-span-1 row-span-2", height: "h-[400px]" },
    3: { span: "col-span-1 row-span-1", height: "h-[190px]" },
    4: { span: "col-span-1 row-span-2", height: "h-[400px]" },
    5: { span: "col-span-1 row-span-1", height: "h-[190px]" },
    6: { span: "col-span-1 row-span-2", height: "h-[400px]" },
    7: { span: "col-span-2 row-span-1", height: "h-[190px]" },
    8: { span: "col-span-1 row-span-1", height: "h-[190px]" },
    9: { span: "col-span-1 row-span-1", height: "h-[190px]" },
};

export default function GallerySection() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [hoverState, setHoverState] = useState<HoverState | null>(null);

    const getGlobalIndex = (catIndex: number, imgIndex: number) => {
        let count = 0;
        for (let i = 0; i < catIndex; i++) {
            count += galleryCategories[i].images.length;
        }
        return count + imgIndex;
    };

    const getCategoryFromGlobalIndex = (globalIdx: number) => {
        let count = 0;
        for (let i = 0; i < galleryCategories.length; i++) {
            if (globalIdx < count + galleryCategories[i].images.length) {
                return galleryCategories[i].title;
            }
            count += galleryCategories[i].images.length;
        }
        return "";
    };

    const handlePrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
        }
    };

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % allImages.length);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                        Impact <span className="text-[#E91F31]">Gallery</span>
                    </h1>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Discover the stories behind our impact from hands-on skills training and sustainable innovation to the people, partnerships, and graduates transforming communities.
                    </p>
                </motion.div>

                {galleryCategories.map((category, catIdx) => (
                    <div key={catIdx} className="mb-20">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                            {category.title}
                        </h2>

                        <div className="hidden md:grid grid-cols-4 auto-rows-[190px] gap-4">
                            {category.images.map((img, imgIdx) => {
                                const globalIdx = getGlobalIndex(catIdx, imgIdx);
                                const isHovered = hoverState?.globalIndex === globalIdx;
                                const sizeConfig = imageSizes[imgIdx % 10] || { span: "col-span-1 row-span-1", height: "h-[190px]" };

                                return (
                                    <motion.div
                                        key={imgIdx}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: (imgIdx % 10) * 0.05, duration: 0.4 }}
                                        viewport={{ once: true }}
                                        className={`relative group overflow-hidden border border-gray-200 rounded-lg ${sizeConfig.span}`}
                                    >
                                        <button
                                            onClick={() => setSelectedIndex(globalIdx)}
                                            onMouseEnter={() =>
                                                setHoverState({ globalIndex: globalIdx })
                                            }
                                            onMouseLeave={() => setHoverState(null)}
                                            className="relative overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-300 w-full h-full"
                                        >
                                            <motion.img
                                                src={img.src}
                                                alt={img.alt}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            />

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3"
                                            >
                                                <h3 className="text-white text-center font-semibold text-sm sm:text-base px-3 line-clamp-2">
                                                    {img.alt}
                                                </h3>

                                                <motion.div
                                                    animate={{ scale: isHovered ? 1 : 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Plus
                                                        size={40}
                                                        className="text-white stroke-[1.5]"
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="flex md:hidden flex-col gap-4">
                            {category.images.map((img, imgIdx) => {
                                const globalIdx = getGlobalIndex(catIdx, imgIdx);
                                const isHovered = hoverState?.globalIndex === globalIdx;

                                return (
                                    <motion.div
                                        key={imgIdx}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: imgIdx * 0.05, duration: 0.4 }}
                                        viewport={{ once: true }}
                                        className="relative group overflow-hidden border border-gray-200 rounded-lg h-64"
                                    >
                                        <button
                                            onClick={() => setSelectedIndex(globalIdx)}
                                            onMouseEnter={() =>
                                                setHoverState({ globalIndex: globalIdx })
                                            }
                                            onMouseLeave={() => setHoverState(null)}
                                            className="relative overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-300 w-full h-full"
                                        >
                                            <motion.img
                                                src={img.src}
                                                alt={img.alt}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            />

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3"
                                            >
                                                <h3 className="text-white text-center font-semibold text-sm sm:text-base px-3 line-clamp-2">
                                                    {img.alt}
                                                </h3>

                                                <motion.div
                                                    animate={{ scale: isHovered ? 1 : 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Plus
                                                        size={40}
                                                        className="text-white stroke-[1.5]"
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
                    >
                        <div
                            className="relative max-w-5xl w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute -top-12 right-0 md:top-4 md:right-4 z-50 text-white bg-black/60 p-2 rounded-full hover:bg-black transition cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <button
                                onClick={handlePrevious}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/60 p-2 sm:p-3 rounded-full hover:bg-black transition cursor-pointer"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <motion.img
                                key={selectedIndex}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ ease: "easeOut", duration: 0.3 }}
                                src={allImages[selectedIndex].src}
                                alt={allImages[selectedIndex].alt}
                                className="max-w-full h-auto max-h-[85vh] object-contain shadow-2xl rounded-lg"
                            />

                            <button
                                onClick={handleNext}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/60 p-2 sm:p-3 rounded-full hover:bg-black transition cursor-pointer"
                                aria-label="Next image"
                            >
                                <ChevronRight size={28} />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                                {selectedIndex + 1} / {allImages.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
