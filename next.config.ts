import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'pwa-atomzlms';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
   webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            'fs': false,
            'net': false,
            'tls': false,
            'child_process': false,
        };
    }
    // TOP-LEVEL AWAIT
    // https://webpack.js.org/configuration/experiments/
    config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
    };
    config.externals.push(
        'pino-pretty',
        'lokijs',
        'encoding'
    );
    return config;
  },
};

export default nextConfig;
