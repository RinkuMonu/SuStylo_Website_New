"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer
      className="relative bg-black text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/Image/footer-bg-img.png')",
      }}
    >

    {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --------- 1️⃣ Logo and Head Office --------- */}
        <div className="w-full">
        <div>
            <div className="bg-white text-black font-bold text-2xl flex items-center justify-center h-40 w-40 rounded-xl mb-4">
            Logo Here
          </div>
        </div>
          <h3 className="font-semibold text-lg mb-2">Head Office</h3>
         <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
  <Image
    src="/Image/location-icon.png"
    alt="loc"
    width={18}
    height={18}
    className="opacity-70 mt-1 flex-shrink-0"
  />
  Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
</p>

          <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
  <Image
    src="/Image/mail-icon.png"
    alt="loc"
    width={18}
    height={18}
    className="opacity-70 mt-1 flex-shrink-0"
  />
            7unique@gmail.com
          </p>
          <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
  <Image
    src="/Image/phone-icon.png"
    alt="loc"
    width={18}
    height={18}
    className="opacity-70 mt-1 flex-shrink-0"
  />
             +91-987654321
          </p>
        </div>

        {/* --------- 2️⃣ Quick Links (Two Columns) --------- */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>

          <div className="grid grid-cols-2 gap-16">
            {/* Column 1 */}
            <ul className="space-y-2 text-gray-300 text-base">
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Book an Appointment</li>
              <li>Become a Freelancer</li>
              <li>Become a Salon Partner</li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2 text-gray-300 text-base">
              <li>Hair Cut</li>
              <li>Waxing</li>
              <li>Facial</li>
              <li>Party Makeup</li>
              <li>Bridal Makeup</li>
              <li>Hair Spa</li>
              <li>Manicure</li>
            </ul>
          </div>
        </div>

<div>
     {/* --------- 3️⃣ Get App Link --------- */}
       <div className="bg-[#F6EFE4] text-black p-6 rounded-xl border border-[#CBAA87] h-auto self-start">
      <h3 className="font-semibold text-lg mb-4">Get App Link</h3>
      <p className="text-sm mb-2">Email Address</p>

      {/* Email Input */}
      <div className="flex items-center border border-[#CCCCCC] rounded-lg overflow-hidden mb-4 bg-white">
        <input
          type="email"
          placeholder="Your Mail..."
          className="flex-1 px-3 py-2 text-sm text-[#9d9a9a] outline-none"
        />
        <button className="px-3 text-gray-500 hover:text-black">
          <Image
            src="/Image/plane-icon.png"
            alt="Send"
            width={18}
            height={18}
            className="opacity-70"
          />
        </button>
      </div>

      {/* Download Button */}
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 mb-6">
        Download App Now
      </button>

    </div>

      {/* Social Icons */}
      <div className="flex gap-7 py-6">
        <Link href="#" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
          <Image
            src="/Image/facebook-icon.png"
            alt="Facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
          <Image
            src="/Image/instagram-icon.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
          <Image
            src="/Image/linkedin-icon.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
          <Image
            src="/Image/whatsapp-icon.png"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
          <Image
            src="/Image/youtube-icon.png"
            alt="YouTube"
            width={24}
            height={24}
          />
        </Link>
      </div>
</div>
      </div>


      {/* Footer Bottom */}
     <div className="relative z-10 border-t border-[#CBAA87] pt-6 pb-8 text-white text-sm w-[85%] mx-auto">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
    {/* Left side */}
    <p className="text-center md:text-left">
      © 2025 Sustylo. A brand of Sevenunique Tech Solutions Pvt. Ltd. All rights reserved.
    </p>

    {/* Right side */}
    <div className="flex items-center gap-3 text-center md:text-right">
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>

      <a href="#" className="hover:underline">
        Terms of Use
      </a>
    </div>
  </div>
</div>

    </footer>
  );
}
