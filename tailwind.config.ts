module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // add paths to antd if needed
  ],
  // Try these in Next.js 14/15+
  experimental: {
    optimizePackageImports: ["antd"],
  },
};
