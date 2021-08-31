/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    KEY: 'value1',
    TEST: 'test'
  },
  async rewrites() {
    return [
      {
        source: '/about-old',
        destination: '/about',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/news-old',
        destination: '/news',
        permanent: true,
      },
    ]
  },
}
