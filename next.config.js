/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    baseUrl: 'http://localhost:5000',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
