/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ge'],
    defaultLocale: 'ge',
    localeDetection: false,
  },
}

export default nextConfig;
