/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ["cdn.imagin.studio"],
    formats: ['image/png', 'image/jpeg'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      },
}

module.exports = nextConfig;
