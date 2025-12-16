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
  output: 'export',
  trailingSlash: true,

  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // 👇 Yeh naya configuration aapke liye add kiya gaya hai 👇
      {
        protocol: "http", // Local development ke liye 'http' protocol use hoga
        hostname: "localhost", // Hostname 'localhost'
        port: "5000", // Port number '5000'
        // Agar aapke uploads kisi specific path ke andar hain, toh yeh use kar sakte hain:
        // pathname: "/uploads/**", 
      },
      // 👆 Naya configuration yahan tak hai 👆
    ],
=======
    unoptimized: true, // <-- Yahan hona chahiye
>>>>>>> 2b22e862c2fc6446c896c610711d4f3f39f63865
  },

  // experimental: {
  //   staticGeneration: {
  //     force: true,
  //   },
  // },
};

export default nextConfig;