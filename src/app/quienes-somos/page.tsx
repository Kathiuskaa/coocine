import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
    title: "Quiénes Somos | Coocine",
    description: "Conoce más sobre la Cooperativa Coocine.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-52 pb-52 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto space-y-6 text-white font-light leading-relaxed text-lg text-center text-balance">
                <p className="hover:text-[#EAAA00] transition-colors duration-300">
                    La Cooperativa Coocine es un proyecto social y solidario en el que nosotrxs nos reunimos para encontrar caminos colaborativos y asociativos para producir y difundir CINE y para incidir en la política pública y cultural de Colombia.
                </p>
                <p className="mt-6 hover:text-[#EAAA00] transition-colors duration-300">
                    Nuestro oficio es el CINE; trabajamos con la creación, gestión, formación, producción, distribución y preservación cinematográfica. Buscamos consolidar una gran cocina donde mezclar, guisar, cocer y servir imágenes acordes a estos tiempos de transformación de nuestro mundo.
                </p>
            </div>

            <div className="mt-12 w-full mx-auto relative group rounded-lg overflow-hidden">
                <ImageCarousel
                    interval={3500}
                    images={[
                        "/coocine-casa.jpeg", // Foto del espacio
                        "/quienes-7.jpg",
                        "/quienes-8.jpg",
                        "/quienes-1.jpg",
                        "/quienes-2.jpg",
                        "/quienes-3.jpg",
                        "/quienes-4.jpg",
                        "/quienes-5.jpg",
                        "/quienes-6.jpg"
                    ]} />
            </div>
        </main >
    );
}
