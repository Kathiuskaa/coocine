import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="border-t-[0.5px] border-white py-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-12 px-6 md:px-12">
                <div className="text-sm font-normal tracking-widest mb-4 text-white leading-relaxed uppercase">
                    <p>Santa Elena</p>
                    <p>Vereda El Plan - Vía La Morena</p>
                    <p>Diag 5 Este # 8-261 - Casa 15</p>
                    <p>Colombia</p>
                </div>

                <a
                    href="http://instagram.com/coocine_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-[#EAAA00] transition-colors"
                >
                    <Instagram size={20} />
                    <span className="font-normal text-sm tracking-widest">@coocine_</span>
                </a>
            </div>
        </footer>
    );
}
