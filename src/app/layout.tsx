import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coocine - Cooperativa de Cine",
    description: "Cooperativa de creación, gestión, formación, producción, distribución y preservación cinematográfica.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-black text-white antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
