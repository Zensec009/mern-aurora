import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // Enables static site export
  distDir: "out",    // Ensures build files are placed in 'out' directory
  basePath: './client',

  images: {
    unoptimized: true,  // Required for GitHub Pages
  }

};

export default nextConfig;