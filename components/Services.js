"use client";
import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Colouring", img: "/Image/allservices/colouring.png" },
    { title: "Threading", img: "/Image/allservices/threading.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Pedicure", img: "/Image/allservices/pedicure.png" },
    { title: "Massage", img: "/Image/allservices/massage.png" },
    { title: "Waxing", img: "/Image/allservices/facial.png" },
    { title: "Hair cut", img: "/Image/allservices/haircut.png" },
    { title: "Manicure", img: "/Image/allservices/manicure.png" },
    { title: "Nail art", img: "/Image/allservices/nailart.png" },
    { title: "Makeup", img: "/Image/allservices/makeup.png" },
    { title: "Bleach", img: "/Image/allservices/bleach.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Hair cut", img: "/Image/allservices/haircut.png" },
    { title: "Manicure", img: "/Image/allservices/manicure.png" },
    { title: "Nail art", img: "/Image/allservices/nailart.png" },
    { title: "Makeup", img: "/Image/allservices/makeup.png" },
    { title: "Bleach", img: "/Image/allservices/bleach.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Hair cut", img: "/Image/allservices/haircut.png" },
    { title: "Manicure", img: "/Image/allservices/manicure.png" },
    { title: "Nail art", img: "/Image/allservices/nailart.png" },
    { title: "Makeup", img: "/Image/allservices/makeup.png" },
    { title: "Bleach", img: "/Image/allservices/bleach.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
  ];

  const filters = [
    {
      category: "Waxing",
      options: [
        "Full Body For Female (Rica)",
        "Back Or Stomach For Female (Rica)",
        "Legs For Female (Rica)",
        "Arms For Female (Rica)",
        "Face (Rica)",
        "Under Arm For Female (Rica)",
        "Back Or Stomach Women (Normal)",
        "Legs (Normal) Woman",
        "Arms Women (Normal)",
        "Under Arm For Female (Normal)",
        "Legs For Female (Normal)",
      ],
    },
    {
      category: "Facial",
      options: [
        "Full Body For Female (Rica)",
        "Back Or Stomach For Female (Rica)",
        "Legs For Female (Rica)",
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#F6EFE4] min-h-screen py-12 px-6 lg:px-12">
            <h2 className="text-2xl font-semibold mb-8 underline">ALL SERVICES</h2>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex items-end justify-center pb-10">
                      <h3 className="text-white text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>


              <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 h-fit">
                {filters.map((group, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="text-[#3C7263] font-semibold text-lg mb-4">
                      {group.category}
                    </h4>
                    <ul className="space-y-2">
                      {group.options.map((option, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 accent-[#3C7263]"
                          />
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                    {idx !== filters.length - 1 && (
                      <hr className="my-5 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }