/** @type {import('next').NextConfig} */
import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
    fallbacks: {
        // Failed page requests fallback to this.
        document: "/offline",
      },
});

const nextConfig = {};

export default withPWA(nextConfig);
