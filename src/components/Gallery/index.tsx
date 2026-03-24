import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Download, X } from "lucide-react";

const images = [
    { src: "/gallery-1 (2).png", alt: "Precision soldering work", caption: "Hands-On Soldering" },
    { src: "/one.JPG", alt: "Students learning laptop repair", caption: "Classroom Training" },
    { src: "/gallery-3.png", alt: "Professional repair tools", caption: "Pro-Grade Tools" },
    { src: "/gallery-4.png", alt: "Graduation ceremony", caption: "Certification Day" },
    { src: "/gallery-5 (2).png", alt: "Microscope repair work", caption: "Precision Diagnostics" },
    { src: "/groupwork.JPG", alt: "Collaborative learning", caption: "Team Projects" },
];

export default function GallerySection() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                        Impact <span className="text-[#E91F31]">Gallery</span>
                    </h1>

                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Take a look at our facilities, hands-on training sessions,
                        and proud graduates.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {images.map((img, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setSelected(i)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative aspect-square overflow-hidden rounded-xl border border-gray-200"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <span className="text-lg font-medium text-white">
                                    {img.caption}
                                </span>
                            </div>
                        </motion.button>
                    ))}

                </div>
            </div>
            {selected !== null && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">

                    <div className="relative max-w-3xl w-full">

                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-6 right-3 z-50 text-white bg-black/60 p-2 rounded-full hover:bg-black transition"
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={images[selected].src}
                            alt={images[selected].alt}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}