import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'unatrattoria.rs'
          }
        ],
        destination: 'https://www.unatrattoria.rs/:1',
        permanent: true, 
      },
    ]
  }
};


export default nextConfig;
