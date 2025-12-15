/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  },
};

export default nextConfig;