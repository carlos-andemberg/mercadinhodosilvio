/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value: '</.well-known/api-catalog>; rel="api-catalog"',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
