import path from 'path';
import { fileURLToPath } from 'url';
import WorkboxPlugin from 'workbox-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (!isServer) {
      config.plugins = config.plugins || [];
      config.plugins.push(
        new WorkboxPlugin.InjectManifest({
          swSrc: path.join(__dirname, 'src', 'worker', 'index.ts'),
          swDest: path.join(__dirname, 'public', 'sw.js'),
          exclude: [/\.map$/, /^manifest.*\.js$/],
        })
      );
    }

    return config;
  },
};

export default nextConfig;