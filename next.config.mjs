/** @type {import('next').NextConfig} */
// Force rebuild: 2026-02-11T09:02:00
const nextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/quienes-somos',
                permanent: true,
            },
            {
                source: '/residences',
                destination: '/residencias',
                permanent: true,
            },
            {
                source: '/services',
                destination: '/servicios',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/contacto',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
