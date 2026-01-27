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
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="text-xl font-normal leading-relaxed text-gray-200 hover:text-[#EAAA00] transition-colors duration-300 text-center">
                    <p>
                        Coocine es un proyecto social y solidario donde nos encontramos para trazar caminos colaborativos en la creación y difusión del cine, incidiendo activamente en la política pública y cultural de Colombia.
                    </p>
                    <p className="mt-6">
                        Nuestro oficio habita todas las etapas de la imagen: desde la gestión y la formación, hasta la producción, distribución y preservación cinematográfica. Nos consolidamos como una gran cocina colectiva donde mezclamos, guisamos y servimos historias que responden a las transformaciones de nuestro tiempo.
                    </p>
                </div>
            </section>



            {/* Services Grid */}
            <section className="px-6 md:px-12 pb-24">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/10">
                    {/* Card 1 */}
                    <div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden cursor-pointer">
                        <Image
                            src="/production-bg.jpg"
                            alt="Producción"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Producción</h3>
                            <p className="text-sm text-gray-400 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">Servicios de producción técnica y artística.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-neutral-800 transition-colors group-hover:bg-neutral-700" />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold text-6xl opacity-20">EDU</div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Formación</h3>
                            <p className="text-sm text-gray-400 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">Escuela y talleres de cine.</p>
                        </div>
                    </div>

                    {/* Card 3 - Links to Residences Page */}
                    <Link href="/residences" className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden cursor-pointer block">
                        <Image
                            src="/residencias.jpg"
                            alt="Residencias"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Residencias</h3>
                            <p className="text-sm text-gray-400 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">Espacio de creación en Santa Elena.</p>
                        </div>
                    </Link>

                    {/* Card 4 - Exhibición */}
                    <div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden cursor-pointer">
                        <Image
                            src="/exhibition-bg.jpg"
                            alt="Exhibición"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Exhibición</h3>
                            <p className="text-sm text-gray-400 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">Espacios de proyección y difusión.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full pb-24 px-6 md:px-12">
                <div className="w-full aspect-[32/9] border border-white/20">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://maps.google.com/maps?q=COOCINE+-+Cooperativa+de+cine+Santa+Elena&t=h&z=14&ie=UTF8&iwloc=&output=embed"
                    />
                </div>
            </section>
        </main>
    );
}
