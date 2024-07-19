/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '',  // Dodaj ten wiersz
    assetPrefix: '', // Ustaw na '', jeśli nie masz podkatalogu na serwerze

};

export default nextConfig;
