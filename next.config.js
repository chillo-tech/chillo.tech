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
    domains: ['backoffice.chillo.fr', 'strapi-applications-management'],
  },
  eslint: { ignoreDuringBuilds: true },
  env: {
    BACKOFFICE_URL: process.env.BACKOFFICE_URL,
    DNS: process.env.DNS,
    FACEBOOK_SHARE_LINK: process.env.FACEBOOK_SHARE_LINK,
    LINKEDIN_SHARE_LINK: process.env.LINKEDIN_SHARE_LINK,
    TWITTER_SHARE_LINK: process.env.TWITTER_SHARE_LINK,
  },
  async redirects() {
    return [
      {
        source: '/formations',
        destination: '/formations/initiation-web',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKOFFICE_URL}/api/:path*`,
      },
    ]
  },
}
