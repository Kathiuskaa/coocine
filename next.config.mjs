/** @type {import('next').NextConfig} */
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
