"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SocialGrid() {
    const images = [
        "/daiga.webp",
        "/ivana.webp",
        "/tanya.webp",
        "/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev! + 1) % images.length);
        }
    };

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <section className="w-full bg-lilac-cream pt-24 md:pt-32 pb-32 px-6 md:px-12 border-b border-lilac-green/80">
                <div className="max-w-[1920px] mx-auto">
                    {/* Header */}
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-lilac-green mb-16">
                            Find me on social.
                        </h2>
                    </ScrollReveal>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {images.map((src, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} width="100%" className="aspect-square relative overflow-hidden bg-gray-200 cursor-pointer group" onClick={() => openLightbox(index)}>
                                <Image
                                    src={src}
                                    alt={`Social Media ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Carousel */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-lilac-cream/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-lilac-green hover:opacity-70 transition-opacity z-20"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-lilac-green hover:opacity-70 transition-opacity z-20 p-2"
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>

                        <button
                            onClick={showNext}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-lilac-green hover:opacity-70 transition-opacity z-20 p-2"
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedIndex]}
                                alt="Social Media Large"
                                width={800} // providing width/height for next/image optimization when not 'fill'
                                height={1000}
                                className="object-contain max-h-[85vh] w-auto h-auto"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
