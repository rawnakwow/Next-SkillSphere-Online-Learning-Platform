/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com", // Authorizes your fallback image domain
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Authorizes production Unsplash CDN paths
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc", // Authorizes your assignment JSON mock data images
      },
    ],
  },
};

module.exports = netxConfig;
