/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['static01.nyt.com', 'www.nytimes.com'],
    unoptimized: true,
  },
}

export default nextConfig
