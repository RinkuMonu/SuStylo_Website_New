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

    
    </section>
  );
}
