import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residencias | Coocine",
    description: "Espacio de residencia artística en Santa Elena.",
};

export default function ResidencesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-52 pb-52 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="w-full md:w-[90%] lg:w-[85%] mx-auto space-y-6 text-white font-light leading-relaxed text-lg text-justify text-balance">
                <p className="hover:text-[#EAAA00] transition-colors duration-300">
                    A través de las Residencias Coocine, ofrecemos nuestra casa a cineastas de todo el mundo que buscan un refugio para crear. Un entorno de serenidad ideal para la escritura, el desarrollo y el montaje de obras cinematográficas.
                </p>
                <p className="hover:text-[#EAAA00] transition-colors duration-300">
                    Ubicada en Santa Elena, Medellín, en un predio de 1.400 metros cuadrados donde el cine y la naturaleza convergen. Contamos con espacios de trabajo, sala de cine propia y bosques de alta montaña que inspiran la contemplación. A solo 40 minutos de la ciudad, ofrecemos una atmósfera que estimula los sentidos e invita a la experimentación libre.
                </p>
                <p className="hover:text-[#EAAA00] transition-colors duration-300">
                    Si deseas hacer parte de esta experiencia y trabajar en tu película con nosotrxs, escríbenos para conversar.
                </p>
                <a href="mailto:cooperativacoocine@gmail.com" className="text-white font-medium hover:text-[#EAAA00] transition-colors block mt-4 text-xl">
                    cooperativacoocine@gmail.com
                </a>
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
