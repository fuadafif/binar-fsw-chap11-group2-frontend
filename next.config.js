/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.elements.buildwithangga.com", "res.cloudinary.com"]
  }
}
module.exports = nextConfig
