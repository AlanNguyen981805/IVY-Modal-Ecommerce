const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
  images: {
    domains: ['pubcdn.ivymoda.com', 'images.dmca.com', 'pubcdn.ivymoda.com', 'flowbite.s3.amazonaws.com'],
  },
  experimental: { appDir: true },
});
