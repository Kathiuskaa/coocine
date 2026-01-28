"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "QUIÉNES SOMOS", href: "/about" },
        { name: "RESIDENCIAS", href: "/residences" },
        { name: "SERVICIOS", href: "/services" },
        { name: "DIRECTORIO", href: "/directorio" },
        { name: "CONTACTO", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-black"
                }`}
        >
            <Link href="/" className="block">
                <Image
                    src="/logo-white.png"
                    alt="Coocine Logo"
                    width={180}
                    height={60}
                    className="object-contain"
                />
            </Link>

            <ul className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-base font-normal tracking-widest uppercase text-white ml-auto">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="hover:text-[#EAAA00] transition-colors">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
