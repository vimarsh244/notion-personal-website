// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  async redirects() {
    return [
      {
        source: '/blog/fastest-way-to-install-wordpress',
        destination: '/fastest-way-to-install-wordpress',
        permanent: true,
      },
      {
        source: '/notes/quickly-and-easily-install-nextcloud',
        destination: '/quickly-and-easily-install-nextcloud',
        permanent: true,
      },
      {
        source: '/notes/the-best-way-to-self-host',
        destination: '/the-best-way-to-self-host',
        permanent: true,
      },
      {
        source: '/blog/ethics-of-ai',
        destination: '/the-ethics-of-ai',
        permanent: true,
      },
      {
        source: '/blog/youth-and-essence-of-individuality',
        destination: '/youth-and-essence-of-individuality',
        permanent: true,
      },
    ]
  },

  
})
