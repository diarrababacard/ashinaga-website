/** @type {import('next').Config} */
const nextConfig = {
  // 1. Autoriser les images de Sanity
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  // 2. Autoriser votre IP locale pour éviter l'erreur de "Cross-origin"
  experimental: {
    allowedDevOrigins: ['10.2.0.2', 'localhost:3000'],
  },
};

export default nextConfig;