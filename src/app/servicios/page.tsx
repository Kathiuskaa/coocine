"use client";

import Link from "next/link";
import Image from "next/image";

// Data Structure
const services = [
    {
        id: "01",
        title: "Producción",
        tags: ["Scouting", "Campo"],
        description: "Soporte operativo para la realización audiovisual. Gestión de locaciones y servicios integrales de producción en campo.",
        image: "/coocine-casa.jpeg",
        link: "/servicios"
    },
    {
        id: "02",
        title: "Postproducción",
        tags: ["Imagen", "Sonido", "Color"],
        description: "Infraestructura técnica para la finalización de proyectos: edición, colorización, diseño sonoro y mezcla.",
        image: "/postproduccion-new.jpg",
        link: "/servicios"
    },
    {
        id: "03",
        title: "Infraestructura",
        tags: ["Rodajes", "Actividades"],
        description: "Espacios de la cooperativa disponibles para rodajes y actividades del gremio.",
        image: "/Sala-0.jpg",
        link: "/servicios"
    },
    {
        id: "04",
        title: "Exhibición",
        tags: ["Sala de Cine", "SIREC"],
        description: "Sala de cine registrada garantizando la exhibición formal, cuotas de pantalla y gestión transparente. La experiencia integra proyección y gastronomía.",
        image: "/exhibicion-final.jpg",
        link: "/servicios"
    },
    {
        id: "05",
        title: "Asesorías",
        tags: ["Consultoría", "Proyectos"],
        description: "Consultoría especializada en etapas clave: Guión, Dirección, Fotografía, Sonido, Animación y Producción General.",
        image: "/hoga-2025-06-20-155748.855.jpg",
        link: "/servicios"
    },
    {
        id: "06",
        title: "Archivo",
        tags: ["Digitalización", "Patrimonio"],
        description: "Preservación del patrimonio audiovisual mediante digitalización profesional. Transferencia de cine y video magnético (VHS, Betacam, etc).",
        image: "/quienes-somos.jpg",
        link: "/servicios"
    },
    {
        id: "07",
        title: "Formación",
        tags: ["Talleres", "Laboratorios"],
        description: "Espacios para la cualificación del oficio cinematográfico. Talleres de formación, laboratorios y seminarios. Recepción permanente de propuestas académicas de asociados y aliados externos.",
        image: "/formacion-bg.jpg",
        link: "/servicios"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">

            {/* Intro Text */}
            {/* Intro Text */}
            <div className="mt-24 mb-32 max-w-7xl mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter max-w-6xl cursor-pointer hover:text-[#EAAA00] transition-colors duration-300">
                    Articulamos recursos técnicos y humanos para el fortalecimiento <br className="hidden lg:block" /> del sector audiovisual.
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white font-light leading-relaxed max-w-5xl">
                    Integramos procesos de creación, finalización y exhibición, bajo un modelo de economía solidaria y formalización gremial.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16">
                    {services.map((service) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 border-b-[1px] border-white pb-16"
                        >
                            {/* Text Content */}
                            <div className="flex-1 flex flex-col gap-4">
                                <h2 className="text-4xl md:text-5xl font-bold group-hover:translate-x-2 group-hover:text-[#EAAA00] transition-all duration-300">
                                    {service.title}
                                </h2>

                                <p className="text-white font-light text-lg leading-relaxed max-w-xl">
                                    {service.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="w-full lg:w-1/2 aspect-video relative overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
