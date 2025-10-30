"use client";
import React from "react";
import Services from "../../../components/Services";
export default function AllServices() {


  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover bg-center min-h-[90vh] flex items-center px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/Image/allservices/allservices-bg-banner.png')",
        }}
      >
        <div className="w-full md:w-1/2 lg:w-1/3 z-10 text-[#C5C5C5] max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:pt-20 font-bold mb-4 leading-tight">
            Pampering<br />
            Starts with<br />
            One Tap
          </h1>
          <p className="text-sm mb-6 text-[#C5C5C5]">
            Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur adipisci, sed quia duis aute irure dolor in reprehenderit dolore magna aliqua
          </p>

          <div className="flex flex-col items-start md:items-center lg:items-end absolute right-2/5 bottom-[9%]">
            <div className="rotating-circle w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 mt-6">
              <svg
                viewBox="0 0 200 200"
                width="100%"
                height="100%"
                style={{ borderRadius: '50%', background: '#f9f4ed', display: 'block' }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  />
                </defs>
                <text fontSize="18" fill="#161616" fontFamily="serif">
                  <textPath href="#circlePath" startOffset="7%">
                    Because You Deserve the Best Touch
                  </textPath>
                </text>
                <circle cx="100" cy="100" r="55" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </>
  );
}
