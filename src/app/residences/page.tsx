import Image from "next/image";

export default function ResidencesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-24">
            <div className="relative aspect-video w-full max-h-[60vh]">
                <Image
                    src="/residencias.jpg"
                    alt="Casa Coocine"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="px-6 md:px-12 py-12 max-w-4xl mx-auto space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Residencias Coocine</h1>
                <p>
                    A través de Residencias Coocine, la cooperativa ofrece el espacio de nuestra casa para cineastas de todo el mundo que quieran estar en un lugar tranquilo para trabajar en la escritura, desarrollo o montaje de sus películas.
                </p>
                <p>
                    La Casa Coocine está ubicada en el corregimiento de Santa Elena de la ciudad de Medellín, Colombia. La casa-lote tiene un área de 1.400 metros cuadrados, donde hay una casa principal y una secundaria, un café, una sala de cine autogestionada, zonas verdes con espacios para la siembra y una zona de bosque forestal de alta montaña. Es un espacio rural ubicado a 40 minutos del centro de Medellín, donde la atmósfera estimula y dispone a nuevas experiencias desde la creación e invita a la experimentación libre.
                </p>
                <p>
                    Escríbenos para revisar la agenda, las tarifas de servicios y continuar nuestra conversación.
                </p>
                <a href="mailto:cooperativacoocine@gmail.com" className="text-white font-medium hover:text-[#EAAA00] transition-colors block mt-4 text-xl">
                    cooperativacoocine@gmail.com
                </a>
            </div>
        </main>
    );
}
