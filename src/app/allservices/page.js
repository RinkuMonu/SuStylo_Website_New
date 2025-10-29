"use client";
import React from "react";
// import Image from "next/image";
import Services from "../../../components/Services";

export default function AllServices() {


  return (
    <>
   <section
      className="relative bg-no-repeat bg-cover bg-center min-h-[90vh] flex items-center px-6 md:px-20"
      style={{
        backgroundImage: "url('/Image/allservices/allservices-bg-banner.png')",
      }}
    >



      <div className="relative w-1/3 z-10 text-[#C5C5C5] max-w-xl">
        <h1 className="text-3xl md:text-5xl lg:pt-20 font-bold mb-4 leading-tight">
         Pampering
Starts with
One Tap
        </h1>
        <p className="text-sm  mb-6 text-[#C5C5C5]">
   Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur adipisci, sed quia duis aute irure dolor in reprehenderit dolore magna aliqua
        </p>

<div className="absolute -bottom-10 left-136 bg-black w-50 h-50 border-[40px] border-[#F6EFE4] rounded-full ">
 Because you Deserve the Best Touch
</div>

      </div>
    </section>

<Services />
    </>
  );
}
