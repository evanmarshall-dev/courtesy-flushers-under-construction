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
    GOOGLE_ANALYTICS_ID: "G-QG1W8BD8CZ",
  },
};

module.exports = nextConfig;
