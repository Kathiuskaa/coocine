import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residencias | Coocine",
    description: "Espacio de residencia artística en Santa Elena.",
};

export default function ResidencesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">

            <div className="mt-24 mb-32 max-w-7xl mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter max-w-6xl cursor-pointer hover:text-[#EAAA00] transition-colors duration-300">
                    Nuestras residencias ofrecen a cineastas de todo el mundo un refugio para la creación en la montaña.
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white font-light leading-relaxed max-w-5xl">
                    En un espacio diseñado para la escritura, el desarrollo y el montaje, con 1.400 m² de bosque, sala de cine propia y estaciones de trabajo a solo 40 minutos de la ciudad. Una atmósfera de contemplación dedicada a la experimentación libre.
                </p>

                <div className="mt-12 text-lg text-white font-light leading-relaxed max-w-5xl">
                    <p className="hover:text-[#EAAA00] transition-colors duration-300">
                        Si deseas hacer parte de esta experiencia y trabajar en tu película con nosotrxs, escríbenos.
                    </p>
                    <a href="mailto:cooperativacoocine@gmail.com" className="text-white font-medium hover:text-[#EAAA00] transition-colors block mt-4">
                        cooperativacoocine@gmail.com
                    </a>
                </div>
            </div>

            <div className="mt-12 w-full max-w-4xl mx-auto relative group rounded-lg overflow-hidden">
                <ImageCarousel
                    interval={3500}
                    images={[
                        "/residencias-1.jpg",
                        "/residencias-2.jpg",
                        "/residencias-3.jpg",
                        "/residencias-4.jpg",
                        "/residencias-5.jpg",
                        "/residencias-6.jpg",
                        "/residencias-7.jpg",
                        "/residencias-8.jpg"
                    ]} />
            </div>
        </main>
    );
}
