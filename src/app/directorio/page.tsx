"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import { X, Instagram } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    instagram?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Germán Arango Rendón",
        role: "Rol Pendiente",
        image: "/german-arango.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 2,
        name: "Juan Cañola",
        role: "Rol Pendiente",
        image: "/juan-canola.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 3,
        name: "Alexander Arbelaez Osorio",
        role: "Rol Pendiente",
        image: "/alexander-arbealez.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 4,
        name: "Jose Manuel Duque López",
        role: "Rol Pendiente",
        image: "/jose-duque.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 5,
        name: "Daniel Mesa de los Ríos",
        role: "Rol Pendiente",
        image: "/daniel-mesa.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 6,
        name: "Juan Pablo Patiño",
        role: "Rol Pendiente",
        image: "/juan-pablo-patino.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 7,
        name: "Maria Paula",
        role: "Rol Pendiente",
        image: "/maria-paula.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 8,
        name: "Camila Caballero",
        role: "Rol Pendiente",
        image: "/camila-caballero.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 9,
        name: "Simon Velez",
        role: "Rol Pendiente",
        image: "/simon-velez.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 10,
        name: "Tomas Campuzano",
        role: "Rol Pendiente",
        image: "/tomas-campuzano.jpg",
        bio: "Bio pendiente...",
    },
    {
        id: 11,
        name: "Yira Plaza O'Byrne",
        role: "Dirección, producción, distribución, docencia, actuación",
        image: "/yira-plaza.jpg",
        bio: "Cartagena, Colombia 1987. Directora de Briosa Films, empresa productora y distribuidora de cine. Cursó el máster en documental de creación de la Universidad Pompeu Fabra. Es directora del largometraje documental El rojo más puro, estrenado en el Festival Internacional de Cine de Cartagena, 2023 y galardonada en 2024 como Mejor Documental en los premios Macondo de la Academia Colombiana de Cine. Productora de los largometrajes documentales Andariega (Selección oficial IDFA 2025, FICCI 2025) y de El segundo entierro de Alejandrino (Premio especial del Jurado Festival Internacional de Cine de Guadalajara 2020), de los cortometrajes El juicio (Festival de Nuevo Cine Latinoamericano de la Habana, 2020, Selección oficial Bogoshorts 2021) y No menguará el fuego de esta luna (Selección oficial Bogoshorts 2025). Productora del largometraje de ficción en desarrollo Mc Silencio y varios proyectos documentales en desarrollo. Actualmente trabaja en la dirección de Se buscan mamás, largometraje documental en desarrollo. Hace parte de Coocine, cooperativa de cine y de la Asociación de documentalistas, Alados.",
    },
    {
        id: 12,
        name: "Alejandra Morales García",
        role: "Dirección/Producción Creativa/Ilustración",
        image: "/alejandra-morales.jpg",
        bio: "Soy directora y productora creativa. Hacedora de garabatos. Trabajo actualmente en LaFinka Studio, donde coordino flujos de trabajo y acompaño a artistas en la creación de narrativas animadas para clientes como Google, ABC Australia, PBS USA y otros. He participado en la producción y dirección artística de diversos festivales: fui coordinadora logística en el Festival de Cine de Jardín, responsable de comunicaciones en la Muestra de Video Experimental VARTEX, y curadora y directora creativa en el Festival de Cortometrajes Rodando en Bicicleta. Soy creadora de Entrelazadas, proyecto ganador del Fondo para el Desarrollo Cinematográfico (FDC) 2019, del programa Jóvenes en Movimiento 2021, y de otras becas y reconocimientos en el ámbito audiovisual. Entrelazadas ha sido seleccionado en más de 20 festivales nacionales e internacionales. Tengo experiencia en la formulación, dirección y producción de proyectos audiovisuales. Me interesa mezclar las artes plásticas y el cine como lenguajes que dialogan y se potencian mutuamente.",
        instagram: "@limaleja",
    },
];

export default function DirectoryPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-12 uppercase tracking-widest text-[#EAAA00]">Directorio</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                    >
                        <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                        <p className="text-sm text-gray-400 font-light uppercase tracking-wide">{member.role}</p>
                    </div>
                ))}
            </div>

            <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
                {selectedMember && (
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-neutral-800">
                            <Image
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-2 uppercase text-[#EAAA00]">{selectedMember.name}</h2>
                            <h3 className="text-lg text-white mb-6 uppercase tracking-widest">{selectedMember.role}</h3>

                            {selectedMember.instagram && (
                                <a
                                    href={`https://instagram.com/${selectedMember.instagram.replace('@', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#EAAA00] hover:text-white transition-colors mb-4"
                                >
                                    <Instagram size={20} />
                                    <span>{selectedMember.instagram}</span>
                                </a>
                            )}

                            <p className="text-gray-300 leading-relaxed text-lg font-light">
                                {selectedMember.bio}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </main>
    );
}
