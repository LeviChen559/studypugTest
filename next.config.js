/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "standalone",
  // basePath:"/next_sp",
  // distDir: 'build',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmn92m25mtw4z.cloudfront.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.studypug.com",
      },
    ],
  },
  // exportPathMap: async function (
  //     defaultPathMap,
  //     { dev, dir, outDir, distDir, buildId }
  //   ) {
  //     const paths = {  }
  //     for (const locale of ["ca", "us"]) {
  //       paths[`/parents/${locale}`] = { page: "/parents/[locale]", query: { __nextLocale: locale } };
  //     }
  //     // paths["/parents/ca"] = { page: "/parents/ca" };
  //     // paths["/parents/us"] = { page: "/parents/us" };
  //     return paths;
  //       // ...defaultPathMap,

  //   },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

    // Exclude the react_devtools_backend package from the server bundle
    if (isServer) {
      config.externals.push("_http_common", "debug", "react_devtools_backend");
    }
    // Add Rive file 'support'
    config.module.rules.push({
      test: /\.riv$/i,
      type: "asset/resource",
    });
    fs.writeFileSync(path.join(__dirname, 'build-id.js'), `module.exports = '${buildId}';`);
    return config;
  },
  env: {
    BUILD_ID: process.env.BUILD_ID,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/next_sp/_next/data/:path*`,
          destination: '/_next/data/:path*'
         },
      ]
    }
  },
  assetPrefix:  "/next_sp" 
 
};

module.exports = nextConfig;
