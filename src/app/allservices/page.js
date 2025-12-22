"use client";
import React from "react";
import Services from "../../../components/Services";

export default function AllServices() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative bg-no-repeat bg-cover bg-center min-h-[70vh] md:min-h-[90vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/Image/allservices/allservices-bg-banner.png')",
        }}
      >
        {/* CONTENT */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 z-10 text-[#C5C5C5] max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Pampering
            <br />
            Starts with
            <br />
            One Tap
          </h1>

          <p className="text-sm sm:text-base mb-6 text-[#C5C5C5]/90">
            Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur
            adipisci, sed quia duis aute irure dolor in reprehenderit dolore
            magna aliqua
          </p>
        </div>

        {/* ROTATING CIRCLE (Desktop only) */}
        <div className="hidden md:flex absolute bottom-[8%] right-[40%] lg:right-[35%] xl:right-[30%]">
          <div className="rotating-circle w-36 h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52">
            <svg
              viewBox="0 0 200 200"
              width="100%"
              height="100%"
              className="rounded-full bg-[#f9f4ed]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>

              <text fontSize="16" fill="#161616" fontFamily="serif">
                <textPath href="#circlePath" startOffset="7%">
                  Because You Deserve the Best
                </textPath>
              </text>

              <circle cx="100" cy="100" r="55" fill="black" />
            </svg>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Services />
    </>
  );
}
