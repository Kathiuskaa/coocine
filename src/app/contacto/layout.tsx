import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Coocine",
    description: "Contáctanos para más información.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
