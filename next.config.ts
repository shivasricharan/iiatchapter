import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // Ensure member data JSON is bundled properly
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
