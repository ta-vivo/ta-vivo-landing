/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tavivo.s3.amazonaws.com'],
  },
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
