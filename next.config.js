/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      TYPE_APP: process.env.TYPE_APP,
    },
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
    images: {
      unoptimized: true
  }
  };
  
  module.exports = nextConfig;
  