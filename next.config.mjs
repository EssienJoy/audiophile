/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["next-dolphin-793.convex.cloud"],
  }, experimental: {
    cacheComponents: true,
  },
};

export default nextConfig;
