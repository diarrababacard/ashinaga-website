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

};

export default nextConfig;
