"use client";
import React from "react";
// import Image from "next/image";
import Services from "../../../components/Services";

export default function AllServices() {


  return (
    <>
      <section
        className="relative bg-contain bg-black bg-no-repeat h-[90vh] "
        style={{
          backgroundImage:
            "url('/Image/allservices/allservices-bg-banner.png')",
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className=" text-[#C5C5C5] py-20 lg:py-30  px-6 md:px-12 lg:px-20">
            <h1 className="text-4xl md:text-5xl  leading-tight mb-4">
              Pampering Starts <br /> with One Tap
            </h1>
            <p className="text-sm md:text-base my-10">
              Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur
              adipisci, sed quia duis aute irure dolor in reprehenderit dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </section>

<Services />
    </>
  );
}
