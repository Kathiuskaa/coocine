import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
    title: "Quiénes Somos | Coocine",
    description: "Conoce más sobre la Cooperativa Coocine.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
            <div className="mt-24 mb-32 max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter max-w-6xl cursor-pointer hover:text-[#EAAA00] transition-colors duration-300 text-balance">
                    La Cooperativa Coocine es un proyecto social y solidario en el que nos reunimos para encontrar caminos colaborativos y asociativos para producir y difundir CINE y para incidir en la política pública y cultural de Colombia.
                </h1>
                <p className="mt-12 text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl hover:text-[#EAAA00] transition-colors duration-300 text-pretty">
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
