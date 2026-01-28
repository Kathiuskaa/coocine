import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quiénes Somos | Coocine",
    description: "Conoce más sobre la Cooperativa Coocine.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">Quiénes Somos</h1>
            <div className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                <p>
                    La Cooperativa Coocine es un proyecto social y solidario en el que nos reunimos para encontrar caminos colaborativos y asociativos para producir y difundir CINE y para incidir en la política pública y cultural de Colombia.
                </p>
                <p className="mt-6">
                    Nuestro oficio es el CINE; trabajamos con la creación, gestión, formación, producción, distribución y preservación cinematográfica. Buscamos consolidar una gran cocina donde mezclar, guisar, cocer y servir imágenes acordes a estos tiempos de transformación de nuestro mundo.
                </p>
            </div>
        </main>
    );
}
