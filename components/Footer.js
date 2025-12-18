"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import LeadModal from "./LeadModal";

export default function Footer() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: "" });
  const openModal = (type) => setModalConfig({ isOpen: true, type });
  const closeModal = () => setModalConfig({ isOpen: false, type: "" });

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

            <div className=" text-black font-bold text-2xl flex items-center justify-center h-40 w-40 rounded-xl mb-4">
            <Image src="/logo.png" alt="Sustylo Logo" width={150} height={150} />
          </div>
        </div>
          <h3 className="font-semibold text-lg mb-2">Head Office</h3>
        <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
          <Image
            src="/Image/location-icon.png"
            alt="loc"
            width={18}
            height={18}
            className="mt-1 flex-shrink-0"
          />
          Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
        </p>

          <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
            <Image
              src="/Image/mail-icon.png"
              alt="loc"
              width={18}
              height={18}
              className=""
            />
                      7unique@gmail.com
          </p>
          <p className="flex items-start gap-2 text-gray-300 text-sm mb-4 lg:w-3/4">
            <Image
              src="/Image/phone-icon.png"
              alt="loc"
              width={18}
              height={18}
              className=""
            />
              +91-9876543210
          </p>
        </div>

        {/* --------- 2️⃣ Quick Links (Two Columns) --------- */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-16">
            <ul className="space-y-2 text-gray-300 text-base cursor-pointer">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/allservices">Our Services</Link></li>
              <li><Link href="#about-section">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              {/* <li><Link href="/">Book an Appointment</Link></li> */}
              <li onClick={() => openModal("Freelancer")}>Become a Freelancer</li>
              <li onClick={() => openModal("Salon")}>Become a Salon Partner</li>
              {/* <li><Link href="#services-section">Services</Link></li> */}

            </ul>
            {/* <ul className="space-y-2 text-gray-300 text-base">
              <li><Link href="/">Hair Cut</Link></li>
              <li><Link href="/">Waxing</Link></li>
              <li><Link href="/">Facial</Link></li>
              <li><Link href="/">Party Makeup</Link></li>
              <li><Link href="/">Bridal Makeup</Link></li>
              <li><Link href="/">Hair Spa</Link></li>
              <li><Link href="/">Manicure</Link></li>
            </ul> */}
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
              <div className="flex gap-7 py-6 justify-center items-center">
                <Link href="https://www.facebook.com/Sustylosalon/" target="_blank" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
                  <Image
                    src="/Image/facebook-icon.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                    className="bg-white rounded-full"
                  />
                </Link>
                <Link href="https://www.instagram.com/sustylo_jaipur/" target="_blank" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
                  <Image
                    src="/Image/instagram-icon.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </Link>
                {/* <Link href="/" target="_blank" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
                  <Image
                    src="/Image/linkedin-icon.png"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </Link> */}
                {/* <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
                  <Image
                    src="/Image/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                  />
                </Link> */}
                {/* <Link href="/" className="p-3 border border-gray-600 rounded-lg hover:scale-110 transition-transform">
                  <Image
                    src="/Image/youtube-icon.png"
                    alt="YouTube"
                    width={28}
                    height={28}
                  />
                </Link> */}
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
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      <LeadModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        type={modalConfig.type} 
      />
    </footer>
  );
}
