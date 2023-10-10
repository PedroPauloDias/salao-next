/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  }
}
module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'tsx', 'ts'],
}

module.exports = nextConfig


