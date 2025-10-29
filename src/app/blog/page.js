"use client";

import React from "react";
import Image from "next/image";
import BlogCards from "../../../components/BlogCards";

export default function page() {
  return (
    <>
    <section
      className="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-center text-white h-[60vh] md:h-[70vh]"
      style={{
        backgroundImage: "url('/Image/blog/blog-bg-banner.png')",
      }}
    >

      <div className="relative z-10 max-w-3xl px-6 lg:pt-20">
        <h1 className="text-[64px] md:text-5xl font-bold mb-4 text-[#5F3F31]">
          Blog
          <Image
          src="/Image/blog/blogunderline.png"
          width={100}
          height={2}
          alt="blog-img"
          className="w-30 h-3" />
        </h1>

      </div>
    </section>
<div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
        <BlogCards />
</div>

</>
  );
}

