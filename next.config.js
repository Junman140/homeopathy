/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Force restart to pick up new Prisma models including courses
}

module.exports = nextConfig
