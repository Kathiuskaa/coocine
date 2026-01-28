"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import { X, Instagram, Mail } from "lucide-react";
import React from "react"; // Added React import for React.ReactNode

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    highResImage?: string;
    bio: string | React.ReactNode;
    instagram?: string;
    imdb?: string;
    imagePosition?: string;
    email?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Germán Arango Rendón",
        role: "Dirección, guion, investigación, escritura creativa",
        image: "/german-arango.jpg",
        bio: (
            <>
                Antropólogo, guionista y director de cine, master en antropología visual. Socio fundador de la empresa de cine Briosa Films. Co-fundador del colectivo de investigación y cine colaborativo Pasolini en Medellín. Su largo documental <i>Cantos que inundan el río</i>, se estrenó en Hot Docs (2021) y fue galardonado como mejor documental del CineLatino de Toulouse (2022), y mejor largometraje etnográfico (2022) por The Society for Visual Anthropology. Su corto de ficción <i>El Juicio</i> fue parte del Festival del Nuevo Cine Latinoamericano de la Habana (2020) y de Bogoshorts (2021).
            </>
        ),
        instagram: "@luckasperro",
        email: "german.arango@coocine.com"
    },
    {
        id: 2,
        name: "Juan Cañola",
        role: "Montaje",
        image: "/juan-canola.jpg",
        bio: (
            <>
                Juan Cañola ha trabajado en películas como <i>La piel en primavera</i>, seleccionada en la sección Forum de la Berlinale 2024; <i>Avalancha</i>, ganador a Mejor Cortometraje en el Festival Punto de Vista 2024 y parte de la selección oficial del IDFA en 2023; y <i>Diógenes</i>, película peruana galardonada como Mejor Película Iberoamericana en la sección Zonazine del Festival de Cine de Málaga 2023. También ha sido montajista de <i>Amando a Martha</i>, seleccionada en Luminous IDFA 2022; <i>La Roya</i>, incluida en el Festival de San Sebastián 2021; y <i>Las Fauces</i>, premiada como Mejor Cortometraje Latinoamericano en el Festival de Curtas Metragens de São Paulo y en el Festival de Valdivia 2020, entre otras obras destacadas. En 2018 recibió el Premio India Catalina a Mejor Editor.
            </>
        ),
        imdb: "https://www.imdb.com/es/name/nm8110301/?ref_=ext_shr_lnk",
        email: "juan.canola@coocine.com"
    },
    {
        id: 3,
        name: "Alexander Arbeláez Osorio",
        role: "Producción, programación, docencia",
        image: "/alexander-arbealez.jpg",
        bio: "Comunicador Audiovisual de la Universidad de Antioquia, especializado en producción ejecutiva. Desde Monociclo Cine produjo largometrajes y cortometrajes estrenados en salas de cine comerciales y premiados en festivales internacionales. También es docente universitario, jurado de convocatorias, tutor de proyectos y programador en la Cooperativa Coocine.",
        instagram: "@jalexao",
        imdb: "https://www.imdb.com/es-es/name/nm5605054/",
        email: "alexander.arbelaez@coocine.com"
    },
    {
        id: 4,
        name: "José Manuel Duque López",
        role: "Producción, Archivo, Docencia, Gestión cultural",
        image: "/jose-duque.jpg",
        bio: (
            <>
                Productor cinematográfico, docente universitario y ceramista. Co-fundador de Monociclo Cine, empresa con amplia experiencia y reconocimiento en la industria cinematográfica local e internacional. Ha participado en diferentes grupos de estudio, talleres y seminarios con el fin de investigar e implementar metodologías alternativas en la producción de cine y en la formación entorno al audiovisual. Ha experimentado a través de sus películas con diferentes lenguajes y estilos cinematográficos a la vanguardia del cine contemporáneo mundial. Actualmente comienza la distribución de su última producción <i>Espejos Rotos</i> y desarrolla la serie de divulgación científica <i>Bionautas</i>. Paralelamente hace parte activa de la cooperativa multiactiva de cineastas - COOCINE.
            </>
        ),
        imdb: "https://www.imdb.com/name/nm8331035/",
        email: "jose.duque@coocine.com"
    },
    {
        id: 5,
        name: "Daniel Mesa de los Ríos",
        role: "Cineclubismo, Crítica de cine, Formación",
        image: "/daniel-mesa.jpg",
        bio: "Coordinador de la Competencia de cortometrajes Nuevas Voces de Cinemancia Festival metropolitano de cine. Cineclubista en el Rambiñen, cineasta, espectador fervoroso de cine. Apasionado por la gestión de públicos y el descubrimiento de nuevas miradas y sensibilidades.",
        email: "daniel.mesa@coocine.com"
    },
    {
        id: 6,
        name: "Juan Pablo Patiño Jaramillo",
        role: "Sonidista, diseñador sonoro, artista Foley, Docente",
        image: "/juan-pablo-patino.jpg",
        bio: (
            <>
                Soy artista, diseñador sonoro, microfonista y sonidista que vive y trabaja en Medellín, Colombia. Egresé del programa de Ingeniería de Sonido de la Universidad de San Buenaventura de Colombia. Así mismo, obtuve el diplomado en Arte Sonoro de la Universidad Autónoma de Barcelona y Universidad de Chile. Co fundador y director creativo durante 6 años de la productora Rueda Sonido, empresa dedicada a la grabación y postproducción de sonido cinematográfico. Fue co fundador de la cooperativa de cine COOCINE, en el año 2024. Desde hace 10 años he trabajado en incontables proyectos audiovisuales. Dentro de los largometrajes de ficción resalta mi participación en: <i>Los reyes del mundo</i> (2023) de Laura Mora; <i>Los conductos</i> (2020), de Camilo Restrepo; y <i>El acompañante</i> (2015), de Pavel Giroud. Igualmente, he hecho parte de destacados documentales como: <i>Suspensión</i> (2019) de Simón Uribe; <i>Las razones del lobo</i> (2022) de Marta Hincapié; y <i>Como el cielo después de llover</i> (2020) de Mercedes Gaviria, <i>Pepe, la imaginación en el tercer cine</i> (2021), <i>Barrio triste</i> (2024). Estos y otros proyectos han participado en eventos como el Festival de Cine de San Sebastián, el Festival Internacional de Cine Documental de Amsterdam IDFA, Berlinale Film Festival, el Festival de Cine de La Habana, el Festival Internacional de Cine de Cartagena de Indias, el Festival de Cine de Roma, entre otros.
            </>
        ),
        instagram: "@gule.jp",
        imdb: "https://www.imdb.com/es/name/nm11407271/",
        email: "juan.patino@coocine.com"
    },
    {
        id: 7,
        name: "María Paula",
        role: "Rol Pendiente",
        image: "/maria-paula.jpg",
        bio: "Bio pendiente...",
        email: "maria.paula@coocine.com"
    },
    {
        id: 8,
        name: "Camila Caballero",
        role: "Rol Pendiente",
        image: "/camila-caballero.jpg",
        bio: "Bio pendiente...",
        email: "camila.caballero@coocine.com"
    },
    {
        id: 9,
        name: "Simón Vélez",
        role: "Rol Pendiente",
        image: "/simon-velez.jpg",
        bio: "Bio pendiente...",
        email: "simon.velez@coocine.com"
    },
    {
        id: 10,
        name: "Tomás Campuzano",
        role: "Rol Pendiente",
        image: "/tomas-campuzano.jpg",
        imagePosition: "20% center",
        bio: "Bio pendiente...",
        email: "tomas.campuzano@coocine.com"
    },
    {
        id: 11,
        name: "Yira Plaza O'Byrne",
        role: "Dirección, producción, distribución, docencia, actuación",
        image: "/yira-plaza.jpg",
        bio: (
            <>
                Cartagena, Colombia 1987. Directora de Briosa Films, empresa productora y distribuidora de cine. Cursó el máster en documental de creación de la Universidad Pompeu Fabra. Es directora del largometraje documental <i>El rojo más puro</i>, estrenado en el Festival Internacional de Cine de Cartagena, 2023 y galardonada en 2024 como Mejor Documental en los premios Macondo de la Academia Colombiana de Cine. Productora de los largometrajes documentales <i>Andariega</i> (Selección oficial IDFA 2025, FICCI 2025) y de <i>El segundo entierro de Alejandrino</i> (Premio especial del Jurado Festival Internacional de Cine de Guadalajara 2020), de los cortometrajes <i>El juicio</i> (Festival de Nuevo Cine Latinoamericano de la Habana, 2020, Selección oficial Bogoshorts 2021) y <i>No menguará el fuego de esta luna</i> (Selección oficial Bogoshorts 2025). Productora del largometraje de ficción en desarrollo <i>Mc Silencio</i> y varios proyectos documentales en desarrollo. Actualmente trabaja en la dirección de <i>Se buscan mamás</i>, largometraje documental en desarrollo. Hace parte de Coocine, cooperativa de cine y de la Asociación de documentalistas, Alados.
            </>
        ),
        instagram: "@yiraplaza",
        imdb: "https://www.imdb.com/es/name/nm7295030/",
        email: "yira.plaza@coocine.com"
    },
    {
        id: 12,
        name: "Alejandra Morales García",
        role: "Dirección/Producción Creativa/Ilustración",
        image: "/alejandra-morales.jpg",
        bio: (
            <>
                Soy directora y productora creativa. Hacedora de garabatos. Trabajo actualmente en LaFinka Studio, donde coordino flujos de trabajo y acompaño a artistas en la creación de narrativas animadas para clientes como Google, ABC Australia, PBS USA y otros. He participado en la producción y dirección artística de diversos festivales: fui coordinadora logística en el Festival de Cine de Jardín, responsable de comunicaciones en la Muestra de Video Experimental VARTEX, y curadora y directora creativa en el Festival de Cortometrajes Rodando en Bicicleta. Soy creadora de <i>Entrelazadas</i>, proyecto ganador del Fondo para el Desarrollo Cinematográfico (FDC) 2019, del programa Jóvenes en Movimiento 2021, y de otras becas y reconocimientos en el ámbito audiovisual. <i>Entrelazadas</i> ha sido seleccionado en más de 20 festivales nacionales e internacionales. Tengo experiencia en la formulación, dirección y producción de proyectos audiovisuales. Me interesa mezclar las artes plásticas y el cine como lenguajes que dialogan y se potencian mutuamente.
            </>
        ),
        instagram: "@limaleja",
        imdb: "https://www.cinespecimen.com/cineastas/alejandra-morales",
        email: "alejandra.morales@coocine.com"
    },
    {
        id: 13,
        name: "Manuela Saldarriaga H.",
        role: "Rol Pendiente",
        image: "/manuela-saldarriaga.jpg",
        bio: (
            <>
                Biografía pendiente...
            </>
        ),
        email: "manuela.saldarriaga@coocine.com"
    },
    {
        id: 14,
        name: "Marta Isabel Hincapié Uribe",
        role: "Rol Pendiente",
        image: "/marta-hincapie.jpg",
        bio: (
            <>
                Biografía pendiente...
            </>
        ),
        email: "marta.hincapie@coocine.com"
    }
];

export default function DirectoryPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [formName, setFormName] = useState("");
    const [formMessage, setFormMessage] = useState("");

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedMember || !selectedMember.email) return;

        const subject = `Mensaje para ${selectedMember.name} desde Coocine`;
        const body = `Hola ${selectedMember.name},\n\nSoy ${formName}.\n\n${formMessage}`;
        window.location.href = `mailto:${selectedMember.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
        setShowContactForm(false);
        setFormName("");
        setFormMessage("");
    };

    const formatName = (name: string) => {
        const compoundNames = ["Juan Pablo", "José Manuel", "María Paula", "Marta Isabel"];
        for (const compound of compoundNames) {
            if (name.startsWith(compound)) {
                return {
                    first: compound,
                    last: name.substring(compound.length).trim()
                };
            }
        }
        const parts = name.split(" ");
        return {
            first: parts[0],
            last: parts.slice(1).join(" ")
        };
    };

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
                {teamMembers.map((member) => {
                    const { first, last } = formatName(member.name);
                    return (
                        <div
                            key={member.id}
                            className="group cursor-pointer text-left"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative aspect-square bg-neutral-900 overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="w-full text-xl font-bold uppercase leading-none mb-2 tracking-tighter">
                                <span className="block">{first}</span>
                                <span className="block mt-1">{last}</span>
                            </h3>
                            <div className="w-full h-[1px] bg-white my-2"></div>
                            <p className="w-full text-sm text-white font-light uppercase tracking-wide">{member.role}</p>
                        </div>
                    );
                })}
            </div>

            <Modal isOpen={!!selectedMember} onClose={handleCloseModal} className="max-w-6xl">
                {selectedMember && (
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="relative w-full md:w-1/2 aspect-square bg-neutral-800">
                            <Image
                                src={selectedMember.highResImage || selectedMember.image}
                                alt={selectedMember.name}
                                fill
                                className="object-cover"
                                style={{ objectPosition: selectedMember.imagePosition || 'center' }}
                            />
                        </div>
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-start overflow-y-auto max-h-[90vh]">
                            <h2 className="text-3xl font-bold mb-2 uppercase text-white">{selectedMember.name}</h2>
                            <h3 className="text-sm font-light text-gray-300 mb-8 uppercase tracking-widest">{selectedMember.role}</h3>

                            <div className="flex flex-wrap gap-4 mb-6">
                                {selectedMember.instagram && (
                                    <a
                                        href={`https://instagram.com/${selectedMember.instagram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#EAAA00] hover:text-white transition-colors"
                                    >
                                        <Instagram size={20} />
                                        <span>{selectedMember.instagram}</span>
                                    </a>
                                )}
                                {selectedMember.imdb && (
                                    <a
                                        href={selectedMember.imdb}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#EAAA00] hover:text-white transition-colors"
                                    >
                                        <span className="font-bold border-2 border-current px-1 rounded text-xs">IMDb</span>
                                        <span>Perfil Profesional</span>
                                    </a>
                                )}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-lg font-light text-justify mb-8">
                                {selectedMember.bio}
                            </p>

                            {/* Contact Section */}
                            {!showContactForm ? (
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium uppercase tracking-widest hover:bg-[#EAAA00] hover:text-black transition-colors self-start"
                                >
                                    <Mail size={18} />
                                    <span>CONTACTO</span>
                                </button>
                            ) : (
                                <form onSubmit={handleContactSubmit} className="w-full bg-neutral-900 p-6 border border-white/10 mt-auto">
                                    <h4 className="text-[#EAAA00] uppercase tracking-widest font-bold mb-4 flex justify-between items-center">
                                        <span>Enviar mensaje</span>
                                        <button onClick={() => setShowContactForm(false)} type="button" className="text-gray-500 hover:text-white">
                                            <X size={18} />
                                        </button>
                                    </h4>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Tu Nombre</label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                value={formName}
                                                onChange={(e) => setFormName(e.target.value)}
                                                required
                                                className="w-full bg-black border border-white/20 p-2 text-white focus:border-[#EAAA00] outline-none transition-colors"
                                                placeholder="Nombre"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Mensaje</label>
                                            <textarea
                                                id="contact-message"
                                                value={formMessage}
                                                onChange={(e) => setFormMessage(e.target.value)}
                                                required
                                                rows={4}
                                                className="w-full bg-black border border-white/20 p-2 text-white focus:border-[#EAAA00] outline-none transition-colors resize-none"
                                                placeholder="Escribe tu mensaje..."
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-white text-black py-3 font-medium uppercase tracking-widest hover:bg-[#EAAA00] hover:text-black transition-colors"
                                        >
                                            Enviar Correo
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </Modal>

        </main>
    );
}
