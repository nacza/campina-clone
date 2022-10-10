const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['icecreamstore.co.id', 'lh5.googleusercontent.com', 'media.graphassets.com']
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
