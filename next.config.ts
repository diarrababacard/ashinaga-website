/** @type {import('next').Config} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  allowedDevOrigins: ["10.2.0.2", "localhost:3000"],
};

export default nextConfig;
