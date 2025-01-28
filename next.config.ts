import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Github images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        port: "",
      },
    ],
  },
};

export default nextConfig;
