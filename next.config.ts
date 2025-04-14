import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Required properties (empty if no configuration needed)
      bodySizeLimit: '2mb', // Example: Increase payload limit
      allowedOrigins: []    // Add domains if needed
    }
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

export default nextConfig;
