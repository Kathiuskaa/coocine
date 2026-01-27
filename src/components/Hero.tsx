"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-70"
                >
                    {/* Placeholder loop. Ideally replace with /hero-reel.mp4 */}
                    <source src="/hero-reel.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>


        </section>
    );
};

export default Hero;
