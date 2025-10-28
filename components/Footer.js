"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Right half background image */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/Image/footer-bg-img.png')", // replace with your image path
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div>
          <div className="bg-white text-black font-bold text-2xl flex items-center justify-center h-40 w-40 rounded-xl mb-4">
            Logo Here
          </div>
          <h3 className="font-semibold text-lg mb-2">Head Office</h3>
          <p className="text-gray-300 text-sm mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <Mail size={16} /> 7unique@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            <Phone size={16} /> +91-987654321
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>Our Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Book an Appointment</li>
            <li>Become a Freelancer</li>
            <li>Become a Salon Partner</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Hair Cut</li>
            <li>Waxing</li>
            <li>Facial</li>
            <li>Party Makeup</li>
            <li>Bridal Makeup</li>
            <li>Hair Spa</li>
            <li>Manicure</li>
          </ul>
        </div>

        {/* App Download */}
        <div className="bg-[#f9f6f2] text-black p-6 rounded-xl max-w-sm">
          <h3 className="font-semibold text-lg mb-4">Get App Link</h3>
          <p className="text-sm mb-2">Email Address</p>
          <div className="flex items-center border rounded overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Your Mail..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="px-3">
              <Mail size={18} />
            </button>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Download App Now
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center">
            <a href="#" className="text-blue-600 bg-white p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 bg-white p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 bg-white p-2 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-green-500 bg-white p-2 rounded-full">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-red-600 bg-white p-2 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 pb-4 text-center text-gray-400 text-sm">
        © 2025 Sustylo. A brand of Sevenunique Tech Solutions Pvt. Ltd. All rights reserved.
        <div className="mt-2">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
