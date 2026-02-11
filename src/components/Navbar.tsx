"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);


    const navItems = [
        { name: "QUIÉNES SOMOS", href: "/quienes-somos" },
        { name: "RESIDENCIAS", href: "/residencias" },
        { name: "SERVICIOS", href: "/servicios" },
        { name: "DIRECTORIO", href: "/directorio" },
        { name: "CONTACTO", href: "/contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-black" : "bg-transparent"
                } ${!isHome ? "border-b-[0.5px] border-white/40" : ""}`}
        >
            <Link href="/" className="block z-[110] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" onClick={() => setIsMenuOpen(false)}>
                <Image
                    src="/logo-white.png"
                    alt="Coocine Logo"
                    width={200}
                    height={48}
                    className="w-[180px] h-auto object-contain"
                    priority
                    unoptimized
                />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-wrap justify-end gap-x-6 gap-y-2 text-base font-normal tracking-widest uppercase text-white ml-auto">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="hover:text-[#EAAA00] transition-colors">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
                className="md:hidden z-[110] text-white focus:outline-none ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 right-0 bottom-0 bg-black z-[90] flex flex-col items-center justify-start pt-40 space-y-8"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-normal tracking-widest uppercase text-white hover:text-[#EAAA00] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
