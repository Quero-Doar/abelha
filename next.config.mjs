/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    testProxy: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
