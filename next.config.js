/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* async redirects() {
    return [
      {
        source: '/meli-api/:path*',
        destination: 'http://127.0.0.1:4000/:path*',
        permanent: true,
      },
    ]
  }, */
}

module.exports = nextConfig
