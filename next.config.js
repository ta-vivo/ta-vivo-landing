/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tavivo.s3.amazonaws.com'],
  },
  target: 'serverless'
};

module.exports = nextConfig;
