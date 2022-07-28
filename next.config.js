/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',

  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
  images: {
    domains: ['backoffice.chillo.fr'],
  }
}
