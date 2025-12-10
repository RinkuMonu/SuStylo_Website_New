// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true, // <-- Yahan hona chahiye
  },

  // experimental: {
  //   staticGeneration: {
  //     force: true,
  //   },
  // },
};

export default nextConfig;
