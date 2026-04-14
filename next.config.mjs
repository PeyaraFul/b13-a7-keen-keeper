/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //  "picture": "https://randomuser.me/api/portraits/men/19.jpg",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
