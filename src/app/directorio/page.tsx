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
    filmography?: {
        title: string;
        details?: string[];
        year?: string;
    }[];
}

const teamMembers: TeamMember[] = [
    {
        id: 12,
        name: "Alejandra Morales García",
        role: "Dirección, Producción creativa, Ilustración",
        image: "/alejandra-morales.jpg",

        imagePosition: "center 15%",
        bio: (
            <>
                Directora y productora creativa. Hacedora de garabatos. Trabaja actualmente en LaFinka Studio, donde coordina flujos de trabajo y acompaña a artistas en la creación de narrativas animadas para clientes como Google, ABC Australia, PBS USA y otros. Ha participado en la producción y dirección artística de diversos festivales: fue coordinadora logística en el Festival de Cine de Jardín, responsable de comunicaciones en la Muestra de Video Experimental VARTEX, y curadora y directora creativa en el Festival de Cortometrajes Rodando en Bicicleta. Ganadora del Fondo para el Desarrollo Cinematográfico (FDC) 2019 y del programa Jóvenes en Movimiento 2021. Tiene experiencia en la formulación, dirección y producción de proyectos audiovisuales. Le interesa mezclar las artes plásticas y el cine como lenguajes que dialogan y se potencian mutuamente.
            </>
        ),
        filmography: [
            { title: "ENTRELAZADAS", details: ["Cortometraje", "Dirección, Guión y Animación"], year: "2023" },
            { title: "MIENTRAS TANTO", details: ["Cortometraje", "Dirección y Guión"], year: "2018" },
            { title: "EN LAS PARTIDAS", details: ["Cortometraje", "Dirección y Guión"], year: "2013" }
        ],
        instagram: "@limaleja",
        imdb: "https://www.cinespecimen.com/cineastas/alejandra-morales",
        email: "alejandra.morales@coocine.com"
    },
    {
        id: 15,
        name: "Alexander Arbeláez Osorio",
        role: "Producción, Programación, Docencia",
        image: "/alexander-arbealez.jpg",

        bio: "Comunicador Audiovisual de la Universidad de Antioquia, especializado en producción ejecutiva. Desde Monociclo Cine produjo largometrajes y cortometrajes estrenados en salas de cine comerciales y premiados en festivales internacionales. También es docente universitario, jurado de convocatorias, tutor de proyectos y programador en la Cooperativa Coocine.",
        filmography: [
            { title: "LA PIEL EN PRIMAVERA", details: ["Largometraje", "Producción"], year: "2024" },
            { title: "RODAJE", details: ["Mediometraje", "Producción"], year: "2023" },
            { title: "LA ROYA", details: ["Largometraje", "Producción"], year: "2022" },
            { title: "SI DIOS FUERA MUJER", details: ["Largometraje", "Producción"], year: "2021" },
            { title: "TIERRA MOJADA", details: ["Cortometraje", "Producción"], year: "2017" },
            { title: "LOS NADIE", details: ["Largometraje", "Producción"], year: "2016" },
            { title: "KALASHNIKOV", details: ["Cortometraje", "Producción"], year: "2012" }
        ],
        instagram: "@jalexao",
        imdb: "https://www.imdb.com/es-es/name/nm5605054/",
        email: "alexander.arbelaez@coocine.com"
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
        id: 5,
        name: "Daniel Mesa de los Ríos",
        role: "Cineclubismo, Crítica de cine, Formación",
        image: "/daniel-mesa.jpg",
        imagePosition: "center 20%",

        bio: "Coordinador de la Competencia de cortometrajes Nuevas Voces de Cinemancia Festival metropolitano de cine. Cineclubista en el Rambiñen, cineasta, espectador fervoroso de cine. Apasionado por la gestión de públicos y el descubrimiento de nuevas miradas y sensibilidades.",
        email: "daniel.mesa@coocine.com"
    },
    {
        id: 2,
        name: "David Correa Franco",
        role: "Dirección de fotografía, Realización documental, Color",
        image: "/david-correa-v2.png",
        bio: (
            <>
                Director de fotografía, realizador y docente. Ha participado como director de fotografía en más de ocho largometrajes colombianos, entre documentales y ficciones que han recorrido festivales como Biarritz, Thessaloniki, Rotterdam, SXSW, San Sebastián, entre otros. Actualmente investiga y dirige proyectos documentales, también es docente de cátedra para la Universidad de Antioquia y Eafit.
            </>
        ),
        filmography: [
            { title: "LOS NADIE", details: ["Largometraje ficción", "Dirección de fotografía"], year: "2016" },
            { title: "LOS DÍAS DE LA BALLENA", details: ["Largometraje ficción", "Dirección de fotografía"], year: "2019" },
            { title: "EL SÍNDROME DE LOS QUIETOS", details: ["Cortometraje documental", "Dirección de fotografía"], year: "2021" },
            { title: "SI DIOS FUERA MUJER", details: ["Largometraje documental", "Dirección de fotografía"], year: "2022" },
            { title: "LA ROYA", details: ["Largometraje ficción", "Dirección de fotografía"], year: "2022" },
            { title: "PARTES DE UNA CASA", details: ["Largometraje documental", "Dirección"], year: "2023" },
            { title: "ENTRE LAS SOMBRAS ARDEN MUNDOS", details: ["Cortometraje ficción", "Dirección de fotografía y Color"], year: "2023" },
            { title: "EL ORIGEN DE LAS ESPECIES", details: ["Largometraje experimental", "Dirección de fotografía"], year: "2024" },
            { title: "DOS VECES BESTIA", details: ["Largometraje no ficción", "Color"], year: "2025" },
            { title: "MANUAL PARA INVOCAR FANTASMAS", details: ["Largometraje no ficción", "Dirección de fotografía"], year: "2026" },
            { title: "TODO LO QUE EL SOL", details: ["Largometraje documental", "Dirección"], year: "2026" },
            { title: "FUTUROS LUMINOSOS", details: ["Cortometraje ficción", "Dirección de fotografía y Color"], year: "2026" }
        ],
        instagram: "@_davidco_",
        email: "davidcofranco@gmail.com"
    },
    {
        id: 1,
        name: "Germán Arango Rendón",
        role: "Dirección, Guión, Investigación, Escritura creativa",
        image: "/german-arango.jpg",

        imagePosition: "center 20%",
        bio: (
            <>
                Antropólogo, guionista y director de cine, master en antropología visual. Socio fundador de la empresa de cine Briosa Films. Co-fundador del colectivo de investigación y cine colaborativo Pasolini en Medellín. Su obra documental ha recibido más de 12 premios internacionales y ha participado en más de 40 festivales de cine en todo el mundo.
            </>
        ),
        filmography: [
            { title: "RÍO PROFUNDO", details: ["Cortometraje experimental", "Guión y Dirección"], year: "2024" },
            { title: "INSTRUCCIONES PARA CUANDO NO ESTÉ", details: ["Largometraje documental", "Guión y Dirección"], year: "2024" },
            { title: "TEJER ENTRE FRONTERAS", details: ["Serie documental", "Dirección y Montaje"], year: "2024" },
            { title: "CANTOS QUE INUNDAN EL RÍO", details: ["Largometraje documental", "Guión y Dirección"], year: "2021" },
            { title: "A MITAD DEL CAMINO", details: ["Cortometraje musical", "Dirección artística"], year: "2018" },
            { title: "LAS MUSAS DE POGUE", details: ["Cortometraje documental", "Guión y Dirección"], year: "2018" },
            { title: "TESTIGOS A OJO Y VOZ", details: ["Videoclip", "Producción"], year: "2017" },
            { title: "LA MEMORIA DE LOS PECES", details: ["Cortometraje documental", "Guión y Dirección"], year: "2017" }
        ],
        instagram: "@luckasperro",
        email: "german.arango@coocine.com"
    },
    {
        id: 4,
        name: "José Manuel Duque López",
        role: "Producción, Archivo, Docencia, Gestión cultural",
        image: "/jose-duque.jpg",

        bio: (
            <>
                Productor cinematográfico, docente universitario y ceramista. Co-fundador de Monociclo Cine, empresa con amplia experiencia y reconocimiento en la industria cinematográfica local e internacional. Ha participado en diferentes grupos de estudio, talleres y seminarios con el fin de investigar e implementar metodologías alternativas en la producción de cine y en la formación entorno al audiovisual. Ha experimentado a través de sus películas con diferentes lenguajes y estilos cinematográficos a la vanguardia del cine contemporáneo mundial. Actualmente desarrolla la serie de divulgación científica <i>Bionautas</i>. Paralelamente hace parte activa de la cooperativa multiactiva de cineastas - COOCINE.
            </>
        ),
        filmography: [
            { title: "ESPEJOS ROTOS", details: ["Largometraje documental", "Producción"], year: "2025" },
            { title: "LA PIEL EN PRIMAVERA", details: ["Largometraje ficción", "Jefatura de producción"], year: "2024" },
            { title: "AVALANCHA", details: ["Cortometraje documental", "Producción"], year: "2024" },
            { title: "LA ROYA", details: ["Largometraje ficción", "Jefatura de producción"], year: "2021" }
        ],
        imdb: "https://www.imdb.com/name/nm8331035/",
        email: "jose.duque@coocine.com"
    },
    {
        id: 3,
        name: "Juan Cañola",
        role: "Montaje",
        image: "/juan-canola.jpg",

        bio: (
            <>
                Montajista con experiencia en películas seleccionadas en festivales de renombre como Berlinale, IDFA y Málaga. Ha trabajado en obras galardonadas como Mejor Cortometraje en Punto de Vista y Mejor Película Iberoamericana en Zonazine. En 2018 recibió el Premio India Catalina a Mejor Editor.
            </>
        ),
        filmography: [
            { title: "AVALANCHA", details: ["Cortometraje documental"], year: "2023" },
            { title: "LA PIEL EN PRIMAVERA", details: ["Largometraje ficción"], year: "2024" },
            { title: "DIÓGENES", details: ["Largometraje ficción"], year: "2023" },
            { title: "AMANDO A MARTHA", details: ["Largometraje documental"], year: "2022" },
            { title: "LA ROYA", details: ["Largometraje ficción"], year: "2021" },
            { title: "LAS FAUCES", details: ["Cortometraje ficción"], year: "2020" }
        ],
        imdb: "https://www.imdb.com/es/name/nm8110301/?ref_=ext_shr_lnk",
        email: "juan.canola@coocine.com"
    },
    {
        id: 6,
        name: "Juan Pablo Patiño Jaramillo",
        role: "Sonido, Diseño sonoro, Foley, Docencia",
        image: "/juan-pablo-patino-v2.jpg",

        bio: (
            <>
                Artista, diseñador sonoro, microfonista y sonidista que vive y trabaja en Medellín, Colombia. Egresado del programa de Ingeniería de Sonido de la Universidad de San Buenaventura de Colombia. Así mismo, obtuvo el diplomado en Arte Sonoro de la Universidad Autónoma de Barcelona y Universidad de Chile. Co fundador y director creativo durante 6 años de la productora Rueda Sonido, empresa dedicada a la grabación y postproducción de sonido cinematográfico. Fue co fundador de la cooperativa de cine COOCINE, en el año 2024. Desde hace 10 años ha trabajado en incontables proyectos audiovisuales.
            </>
        ),
        filmography: [
            { title: "LOS REYES DEL MUNDO", details: ["Largometraje", "Sonido"], year: "2023" },
            { title: "LOS CONDUCTOS", details: ["Largometraje", "Sonido y Diseño sonoro"], year: "2020" },
            { title: "EL ACOMPAÑANTE", details: ["Largometraje"], year: "2015" },
            { title: "SUSPENSIÓN", details: ["Largometraje documental", "Sonido y Diseño sonoro"], year: "2019" },
            { title: "LAS RAZONES DEL LOBO", details: ["Largometraje", "Sonido y Diseño sonoro"], year: "2019" },
            { title: "COMO EL CIELO DESPUÉS DE LLOVER", details: ["Documental"], year: "2020" },
            { title: "PEPE, LA IMAGINACIÓN EN EL TERCER CINE", details: ["Sonido"], year: "2021" },
            { title: "ZOOÑADORES", details: ["Serie animada", "Diseño sonoro"], year: "2020" },
            { title: "LA SINFONIA DE LOS BICHOS RAROS", details: ["Serie", "Sonido"], year: "2022" },
            { title: "LA SOCIEDAD DE LA CUMBIA", details: ["Serie", "Sonido y Diseño sonoro"], year: "2023" },
            { title: "HIGUITA, EL CAMINO DEL ESCORPIÓN", details: ["Largometraje", "Sonido"], year: "2023" },
            { title: "PIEDRAS PRECIOSAS", details: ["Largometraje", "Sonido"], year: "2024" },
            { title: "BARRIO TRISTE", details: ["Largometraje", "Sonido"], year: "2024" }
        ],
        instagram: "@gule.jp",
        imdb: "https://www.imdb.com/es/name/nm11407271/",
        email: "juan.patino@coocine.com"
    },
    {
        id: 17,
        name: "Karol Muñoz Arias",
        role: "Rol Pendiente",
        image: "/karol-munoz-arias.jpg",
        bio: "Bio pendiente...",
        email: "karol.munoz@coocine.com"
    },
    {
        id: 13,
        name: "Manuela Saldarriaga H.",
        role: "Guión, Crítica cinematográfica",
        image: "/manuela-saldarriaga-v2.jpg",
        bio: (
            <>
                Comunicadora social y magíster en periodismo de la Universidad de los Andes, donde fue docente, así como escritora y editora creativa para Cerosetenta. Ha publicado en medios nacionales e internacionales, revistas académicas y ediciones descentralizadas. Fue becaria del AMAZON RJF del Pulitzer Center y trabajó como editora y documentalista en Consonante, proyecto de la Fundación para la Libertad de Prensa (FLIP). Su trabajo ha sido principalmente con campesinos e indígenas colombianos.
            </>
        ),
        filmography: [
            { title: "EGIDIO CUADRADO", details: ["Documental", "Dirección y Guión"], year: "2025" },
            { title: "AGENDA CIUDADANA SAN VICENTE DEL CAGUÁN", details: ["Documental", "Dirección y Guión"], year: "2024" },
            { title: "AGENDA CIUDADANA EL CARMEN DE ATRATO (CHOCÓ)", details: ["Documental", "Dirección y Guión"], year: "2024" },
            { title: "AGENDA CIUDADANA TADÓ (CHOCÓ)", details: ["Documental", "Dirección y Guión"], year: "2024" },
            { title: "AGENDA CIUDADANA SAN JUAN DEL CÉSAR (LA GUAJIRA)", details: ["Documental", "Dirección y Guión"], year: "2024" },
            { title: "AGENDA CIUDADANA FONSECA (LA GUAJIRA)", details: ["Documental", "Dirección y Guión"], year: "2024" },
            { title: "SUICIDIO INDÍGENA, UNA HERIDA ABIERTA EN LA SELVA", details: ["Mediometraje documental", "Guión y Montaje"], year: "2021" },
            { title: "LA ENGUANDOCADA", details: ["Ensayo visual", "Investigación y Guión"], year: "2019" }
        ],
        instagram: "@lanochemochila",
        email: "manuela.saldarriaga@coocine.com"
    },
    {
        id: 16,
        name: "Manuela Tabares",
        role: "Docencia, gestión y realización comunitaria, investigación y escritura",
        image: "/manuela-tabares.jpg",
        bio: (
            <>
                Soy comunicadora social de la Universidad EAFIT con maestría en Educación Audiovisual de FLACSO. Mi experiencia se ha centrado en la formación audiovisual comunitaria, tanto desde el diseño de proyectos y metodologías, la facilitación de estos y la investigación, centrándome en las formas de hacer y pervivir de proyectos de formación audiovisual comunitarios y alternativos en Latinoamérica. Fui coordinadora académica de la Corporación Fecisla (2016-2022) de su festival de cine de Isla Fuerte y su proceso de Escuela, también coordinadora de formación de la Red de Creación Audiovisual 2020 y 2021. Pertenezco al colectivo latinoamericano HUECC -Hacer una escuela de cine comunitaria- Realizado en Argentina en 2018 y Perú en 2022 y 2024. He facilitado procesos de creación audiovisual en diversas regiones de Colombia así como Argentina, Uruguay y Perú. Como realizadora he escrito y dirigido cortometrajes entre ellos Estos Viejos -2022- y Carretera al Mar -en desarrollo-. También he trabajado en casting y producción de campo en Montevideo, Uruguay -2022-
            </>
        ),
        filmography: [
            { title: "ESTOS VIEJOS", details: ["Cortometraje", "Directora e investigadora"], year: "2022" }
        ],
        instagram: "@otravezmanu",
        email: "manuelatab27@gmail.com"
    },
    {
        id: 7,
        name: "María Paula",
        role: "Rol Pendiente",
        image: "/maria-paula.jpg",

        imagePosition: "center 20%",
        bio: "Bio pendiente...",
        email: "maria.paula@coocine.com"
    },
    {
        id: 14,
        name: "Marta Isabel Hincapié Uribe",
        role: "Dirección, Realización documental, Docencia",
        image: "/marta-hincapie.jpg",
        bio: (
            <>
                Documentalista independiente con experiencia en docencia de cine documental en diferentes escuelas y universidades de Colombia y Cataluña. Sus documentales han participado en numerosos festivales nacionales e internacionales. Actualmente es docente de documental en la Facultad de Comunicación Audiovisual de la Universidad de Antioquia.
            </>
        ),
        filmography: [
            { title: "LAS RAZONES DEL LOBO", details: ["Largometraje", "Dirección"], year: "2020" },
            { title: "BAJO UNA LLUVIA AJENA", details: ["Largometraje", "Dirección"], year: "2024" },
            { title: "DAYIPAPARA LA MADRE", details: ["Mediometraje", "Dirección"], year: "2013" },
            { title: "EN RELIEVE", details: ["Mediometraje", "Dirección"], year: "2015" },
            { title: "A SOLAS", details: ["Mediometraje", "Dirección"], year: "2014" },
            { title: "LOS DEMONIOS SUELTOS", details: ["Mediometraje", "Dirección"], year: "2011" },
            { title: "LA PENA SECRETA", details: ["Mediometraje", "Dirección"], year: "2013" },
            { title: "PIEL", details: ["Mediometraje", "Dirección"], year: "2006" }
        ],
        instagram: "@marta_isabel_hincapie_uribe",
        email: "marta.hincapie@coocine.com"
    },
    {
        id: 18,
        name: "Paola Cárdenas Arias",
        role: "Rol Pendiente",
        image: "/paola-cardenas-arias.jpg",
        bio: "Bio pendiente...",
        email: "paola.cardenas@coocine.com"
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
        imagePosition: "center 20%",

        bio: "Bio pendiente...",
        email: "tomas.campuzano@coocine.com"
    },
    {
        id: 11,
        name: "Yira Plaza O'Byrne",
        role: "Dirección, Producción, Distribución, Docencia, Actuación",
        image: "/yira-plaza.jpg",
        bio: (
            <>
                Cartagena, Colombia 1987. Directora de Briosa Films, empresa productora y distribuidora de cine. Cursó el máster en documental de creación de la Universidad Pompeu Fabra. Productora del largometraje de ficción en desarrollo <i>Mc Silencio</i> y varios proyectos documentales en desarrollo. Actualmente trabaja en la dirección de <i>Se buscan mamás</i>, largometraje documental en desarrollo. Hace parte de Coocine, cooperativa de cine y de la Asociación de documentalistas, Alados.
            </>
        ),
        filmography: [
            { title: "EL JUICIO", details: ["Cortometraje", "Producción"], year: "2020" },
            { title: "EL SEGUNDO ENTIERRO DE ALEJANDRINO", details: ["Producción"], year: "2021" },
            { title: "EL ROJO MÁS PURO", details: ["Largometraje", "Dirección"], year: "2023" },
            { title: "ANDARIEGA", details: ["Largometraje", "Producción"], year: "2025" },
            { title: "NO MENGUARÁ EL FUEGO DE ESTA LUNA", details: ["Cortometraje", "Producción"], year: "2025" }
        ],
        instagram: "@yiraplaza",
        imdb: "https://www.imdb.com/es/name/nm7295030/",
        email: "yira.plaza@coocine.com"
    },
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
                    const baseScale = 1.1; // Standardized scale for all photos
                    const hoverScale = baseScale * 1.05;

                    return (
                        <div
                            key={member.id}
                            className="group cursor-pointer text-left"
                            onClick={() => setSelectedMember(member)}
                            style={{
                                "--base-scale": baseScale,
                                "--hover-scale": hoverScale,
                            } as React.CSSProperties}
                        >
                            <div className="relative aspect-square bg-neutral-900 overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 scale-[var(--base-scale)] group-hover:scale-[var(--hover-scale)] transition-transform duration-500"
                                    style={{ objectPosition: member.imagePosition || 'center 20%' }}
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

            <Modal isOpen={!!selectedMember} onClose={handleCloseModal} className="max-w-[90vw]">
                {selectedMember && (
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="relative w-full md:w-1/2 aspect-square bg-neutral-800">
                            <Image
                                src={selectedMember.highResImage || selectedMember.image}
                                alt={selectedMember.name}
                                fill
                                quality={100}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                style={{ objectPosition: selectedMember.imagePosition || 'center 20%' }}
                            />
                        </div>
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-start overflow-y-auto max-h-[90vh]">
                            <h2 className="text-3xl font-bold uppercase text-white leading-tight">
                                <span className="block">{formatName(selectedMember.name).first}</span>
                                <span className="block">{formatName(selectedMember.name).last}</span>
                            </h2>
                            <hr className="border-t border-white my-2" />
                            <h3 className="text-sm font-normal text-white mb-4 uppercase tracking-widest">{selectedMember.role}</h3>

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

                            <p className="text-white leading-loose text-base font-light text-justify mb-2">
                                {selectedMember.bio}
                            </p>

                            {selectedMember.filmography && selectedMember.filmography.length > 0 && (
                                <div className="mt-8 mb-6">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#EAAA00] mb-4 border-b border-white/20 pb-2">
                                        Filmografía
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        {selectedMember.filmography.map((item, index) => (
                                            <div key={index} className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm font-light hover:bg-white/5 p-2 rounded transition-colors -mx-2">
                                                <div className="flex-1 min-w-0">
                                                    {/* Line 1: Title */}
                                                    <div className="block leading-tight mb-0.5">
                                                        <span className="font-bold text-white uppercase tracking-wider">
                                                            {item.title.replace(/\s([^\s<]+)\s*$/, '\u00A0$1')}
                                                        </span>
                                                    </div>

                                                    {/* Line 2: Type | Roles (All details) */}
                                                    {item.details && item.details.length > 0 && (
                                                        <div className="text-white/80 text-xs sm:text-sm font-light">
                                                            {item.details.join(" | ")}
                                                        </div>
                                                    )}
                                                </div>
                                                {item.year && (
                                                    <span className="text-[#EAAA00] font-mono text-xs sm:text-sm whitespace-nowrap self-start sm:self-auto mt-1 sm:mt-0">
                                                        {item.year}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact Section */}
                            {!showContactForm ? (
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium uppercase tracking-widest hover:bg-[#EAAA00] hover:text-black transition-colors self-center mt-4"
                                >
                                    <Mail size={18} />
                                    <span>CONTACTO</span>
                                </button>
                            ) : (
                                <form onSubmit={handleContactSubmit} className="w-full bg-black p-6">
                                    <div className="flex justify-end mb-4">
                                        <button onClick={() => setShowContactForm(false)} type="button" className="text-gray-500 hover:text-white">
                                            <X size={18} />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-white mb-1">Tu Nombre</label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                value={formName}
                                                onChange={(e) => setFormName(e.target.value)}
                                                required
                                                className="w-full bg-black border border-white p-2 text-white placeholder:text-white/50 focus:border-[#EAAA00] outline-none transition-colors"
                                                placeholder="Nombre"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-white mb-1">Mensaje</label>
                                            <textarea
                                                id="contact-message"
                                                value={formMessage}
                                                onChange={(e) => setFormMessage(e.target.value)}
                                                required
                                                rows={4}
                                                className="w-full bg-black border border-white p-2 text-white placeholder:text-white/50 focus:border-[#EAAA00] outline-none transition-colors resize-none"
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
