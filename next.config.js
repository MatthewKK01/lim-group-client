/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ka'],
    defaultLocale: 'ka',
    localeDetection: false,
  },
}

export default nextConfig;
