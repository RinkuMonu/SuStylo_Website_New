"use client";
import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-[#F6EFE4]">
      {/* ===== Banner Section ===== */}
      <div className="relative h-[430px] w-full">
        {/* Replace src with your local image path */}
        <Image
          src="/contact.jpg"
          alt="Contact Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-semibold tracking-wide border-b-2 border-white pb-2">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ===== Contact Info & Form ===== */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="space-y-6">
          {/* Address */}
          <div className="p-5 bg-[#F6EFE4] shadow-md rounded-lg border border-gray-200">
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <span className="text-[#6C757D]">📍</span> Our Address
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo, laborum sed ab deserunt, 123456, Lorem Ipsumdolor
            </p>
          </div>

          {/* Call & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-[#F6EFE4] shadow-md rounded-lg border border-gray-200 text-center">
              <p className="text-[#6C757D] text-2xl mb-2">📞</p>
              <p className="font-semibold">Call Us</p>
              <p className="text-sm text-gray-600">+91 1234567890</p>
            </div>

            <div className="p-5 bg-[#F6EFE4] shadow-md rounded-lg border border-gray-200 text-center">
              <p className="text-[#6C757D] text-2xl mb-2">✉️</p>
              <p className="font-semibold">Email Us</p>
              <p className="text-sm text-gray-600">abc@gmail.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="p-5 bg-[#F6EFE4] shadow-md rounded-lg border border-gray-200">
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <span className="text-[#6C757D]">🕒</span> Opening Hours
            </h2>
            <p className="text-sm text-gray-600">
              Mon–Fri: 09:00 AM to 10:00 PM <br />
              Sat–Sun: 09:00 AM to 10:00 PM
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-6 bg-[#F6EFE4] shadow-md rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name*"
                className="border border-gray-300 rounded-md p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="Email address*"
                className="border border-gray-300 rounded-md p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 rounded-md p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <input
                type="text"
                placeholder="Service of interest"
                className="border border-gray-300 rounded-md p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-md p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>

            <button
              type="submit"
              className="bg-[#6C757D] text-white px-6 py-2 rounded-md w-full hover:bg-[#5a646b] transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* ===== Google Map Section ===== */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31519.95516412745!2d75.784!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40c6b52b82f%3A0x5649d7d85f2b9d3d!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1690976329463!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
}
