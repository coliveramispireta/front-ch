/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
    sassOptions: {
         implementation: 'sass-embedded'
      },
    reactStrictMode: false,
    swcMinify: true,
    images: {
      domains: ['localhost'],
    },
  };

export default nextConfig;
