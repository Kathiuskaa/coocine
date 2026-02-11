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
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h1>
            <p className="text-gray-400 mb-12 font-light">
                Cuéntanos sobre tu proyecto o escríbenos para cualquier duda.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent border border-white focus:border-white rounded-none px-4 py-3 text-white focus:outline-none transition-colors font-light"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-transparent border border-white focus:border-white rounded-none px-4 py-3 text-white focus:outline-none transition-colors resize-none font-light"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-transparent border border-white text-white font-medium py-4 px-8 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm"
                >
                    Enviar Mensaje
                </button>
            </form>

            <div className="mt-16 pt-16 border-t border-white/10 text-center md:text-left text-gray-400 font-light">
                <p>También puedes escribirnos directamente:</p>
                <a href="mailto:cooperativacoocine@gmail.com" className="text-white hover:text-[#EAAA00] transition-colors block mt-2 text-lg">
                    cooperativacoocine@gmail.com
                </a>
            </div>
        </main>
    );
}
