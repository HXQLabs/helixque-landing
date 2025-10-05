import type { NextConfig } from "next";
<<<<<<< HEAD

const nextConfig: NextConfig = {
=======
import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

<<<<<<< HEAD
export default nextConfig;
=======
export default withMDX(nextConfig);
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
