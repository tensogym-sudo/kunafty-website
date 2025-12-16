/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['maps.app.goo.gl'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.app.goo.gl',
      },
    ],
  },
}

module.exports = nextConfig