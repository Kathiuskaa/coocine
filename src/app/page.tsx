import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Hero />
            {/* Spacer to separate video from content */}
            <div className="h-32" />

            {/* Quiénes Somos (Text only) */}
            <div className="mt-24 mb-32 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tighter max-w-4xl cursor-pointer hover:text-[#EAAA00] transition-colors duration-300 text-balance">
                    Coocine es un proyecto social y solidario donde nos encontramos para trazar caminos colaborativos en la creación y difusión del cine, incidiendo activamente en la política pública y cultural de Colombia.
                </h1>
                <p className="mt-12 text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl hover:text-[#EAAA00] transition-colors duration-300 text-pretty">
                    Nuestro oficio habita todas las etapas de la imagen: desde la gestión y la formación, hasta la producción, distribución y preservación cinematográfica. Nos consolidamos como una gran cocina colectiva donde mezclamos, guisamos y servimos historias que responden a las transformaciones de nuestro tiempo.
                </p>
            </div>



            {/* Services Grid Removed per user request */}

            {/* Map Section */}
            <section className="w-full pb-24 px-6 md:px-12">
                <div className="w-full aspect-[32/9] border border-white/20">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://maps.google.com/maps?q=COOCINE+-+Cooperativa+de+cine+Santa+Elena&t=h&z=16&ie=UTF8&iwloc=&output=embed"
                    />
                </div>
            </section>
        </main>
    );
}
