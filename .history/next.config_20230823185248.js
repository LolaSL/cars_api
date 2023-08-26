/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ["cdn.imagin.studio","cdnp1.stackassets.com", "s.yimg.com", "www.autocar.co.uk"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
      },
}

module.exports = nextConfig;
