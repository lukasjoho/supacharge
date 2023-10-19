/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uplift-images.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
