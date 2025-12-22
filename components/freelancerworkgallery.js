"use client";

import Link from "next/link";
import React from "react";

export default function WorkGallery() {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      
      {/* Heading */}
      <h3 className="
        absolute 
        top-1 left-4 
        md:top-18 md:left-2 
        text-2xl sm:text-3xl md:text-5xl 
        z-10
      ">
        <i>Work</i>
        <span className="font-bold"> Gallery</span>
      </h3>

      {/* Background Image */}
      <div
        className="
          w-full 
          h-[260px] sm:h-[360px] md:h-[500px] lg:h-[600px]
          bg-center bg-cover bg-no-repeat
        "
        style={{
          backgroundImage: "url('/Image/freelancer/work-gallery-img.png')",
        }}
      ></div>

      {/* See More Button */}
      <div
        className="
          absolute 
          bottom-2 right-4 
          sm:bottom-4 sm:right-8 
          md:bottom-22 md:right-40 
          bg-[#F6EFE4] 
          shadow-[0px_4px_4px_0px_#00000040]
          border border-[#617772]
          px-8 sm:px-12 md:px-20
          py-2 sm:py-3
          text-base sm:text-lg
        "
        style={{
          borderBottomLeftRadius: "60px",
        }}
      >
        <Link href="/" className="block text-center font-serif">
          See More
        </Link>
      </div>
    </section>
  );
}
