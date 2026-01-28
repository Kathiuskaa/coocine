"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <video
                    src="/intro_coocine.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>


        </section>
    );
};

export default Hero;
