import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/social-quest-board",
  images: { unoptimized: true },
};

export default nextConfig;
