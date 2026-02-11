"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
    interval?: number;
}

const ImageCarousel = ({ images, interval = 5000 }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, interval]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full aspect-[3/2] group overflow-hidden rounded-lg">
            {/* Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="relative w-full h-full">
                        {/* Yellow Tint Overlay on Hover */}
                        <div className="absolute inset-0 bg-[#EAAA00] opacity-0 group-hover:opacity-30 mix-blend-multiply z-10 transition-opacity duration-500 pointer-events-none" />

                        <Image
                            src={images[currentIndex]}
                            alt={`Imagen ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            priority
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls (visible on hover) */}
            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-[#EAAA00] hover:text-black transition-colors pointer-events-auto"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-[#EAAA00] hover:text-black transition-colors pointer-events-auto"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-500 ${index === currentIndex
                            ? "bg-[#EAAA00] w-1.5 h-1.5 opacity-100 scale-125"
                            : "bg-white w-1.5 h-1.5 opacity-40 hover:opacity-80 hover:scale-110"
                            }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
