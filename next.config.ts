import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.guvernare.online" }],
        destination: "https://guvernare.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
