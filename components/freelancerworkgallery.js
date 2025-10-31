"use client";

import Link from "next/link";
import React from "react";

export default function WorkGallery() {
  return (
    <section className="relative py-8">
      <h3 className="absolute text-xl md:text-5xl top-10 left-20">
        <i className="">Work</i>
        <span className="font-bold"> Gallery</span>
      </h3>
      <div
        className="w-full h-126  bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Image/freelancer/work-gallery-img.png')",
        }}
      ></div>



      <div
        className="absolute bottom-12 right-46 bg-[#F6EFE4] inline-block shadow-[0px_4px_4px_0px_#00000040] border border-[#617772] font-serif text-lg px-14 lg:px-24 py-3"
        style={{
          borderBottomLeftRadius: "80px",
        }}
      >
        <Link href="/" className="block text-center text-xl">
          See More
        </Link>
      </div>
    </section>
  );
}
