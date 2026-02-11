"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Nuevo mensaje de ${name}`;
        const body = `Nombre: ${name}\n\nMensaje:\n${message}`;
        window.location.href = `mailto:cooperativacoocine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <main className="min-h-screen bg-black text-white pt-52 pb-24 px-6 md:px-12 max-w-2xl mx-auto text-center">

            <p className="text-white mb-12 font-light">
                ¿Tienes un proyecto en mente o alguna pregunta? Escríbenos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent border border-white focus:border-white rounded-none px-4 py-3 text-white focus:outline-none transition-colors font-light text-center"
                        placeholder="Tu nombre"
                    />
                </div>


                <div>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-transparent border border-white focus:border-white rounded-none px-4 py-3 text-white focus:outline-none transition-colors resize-none font-light text-center"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-transparent border border-white text-white font-medium py-4 px-8 hover:bg-[#EAAA00] hover:text-black hover:border-[#EAAA00] transition-colors uppercase tracking-widest text-sm"
                >
                    Enviar Mensaje
                </button>
            </form>

        </main>
    );
}
