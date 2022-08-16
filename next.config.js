/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  env: {
    GOOGLE_ANALYTICS_ID: "G-VFQXW7DZQT",
  },
};

module.exports = nextConfig;
