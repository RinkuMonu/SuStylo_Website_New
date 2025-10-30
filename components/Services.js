"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export default function Services() {
  const [isAtHomeOpen, setIsAtHomeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Place");
  const [selectedGender, setSelectedGender] = useState("Select Gender");

  const handleSelectLocation = (option) => {
    setSelectedLocation(option);
    setIsAtHomeOpen(false);
  };

  const handleSelectGender = (option) => {
    setSelectedGender(option);
    setIsGenderOpen(false);
  };

  const services = [
    { title: "Colouring", img: "/Image/allservices/colouring.png" },
    { title: "Threading", img: "/Image/allservices/threading.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Pedicure", img: "/Image/allservices/pedicure.png" },
    { title: "Massage", img: "/Image/allservices/massage.png" },
    { title: "Waxing", img: "/Image/allservices/facial.png" },
    { title: "Colouring", img: "/Image/allservices/colouring.png" },
    { title: "Threading", img: "/Image/allservices/threading.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Pedicure", img: "/Image/allservices/pedicure.png" },
    { title: "Massage", img: "/Image/allservices/massage.png" },
    { title: "Waxing", img: "/Image/allservices/facial.png" },
    { title: "Colouring", img: "/Image/allservices/colouring.png" },
    { title: "Threading", img: "/Image/allservices/threading.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Pedicure", img: "/Image/allservices/pedicure.png" },
    { title: "Massage", img: "/Image/allservices/massage.png" },
    { title: "Waxing", img: "/Image/allservices/facial.png" },
    { title: "Colouring", img: "/Image/allservices/colouring.png" },
    { title: "Threading", img: "/Image/allservices/threading.png" },
    { title: "Facial", img: "/Image/allservices/facial.png" },
    { title: "Pedicure", img: "/Image/allservices/pedicure.png" },
    { title: "Massage", img: "/Image/allservices/massage.png" },
    { title: "Waxing", img: "/Image/allservices/facial.png" },

  ];

  const filters = [
    {
      category: "Waxing",
      options: [
        "Full Body For Female (Rica)",
        "Legs For Female (Rica)",
        "Arms For Female (Rica)",
      ],
    },
  ];



  const [activeCards, setActiveCards] = useState([]); // Track which cards are active

  const handleCardClick = (index) => {
    // Toggle clicked card
    setActiveCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // remove
        : [...prev, index] // add
    );
  };


  return (
    <section className="bg-[#F6EFE4] min-h-screen py-12 px-6 lg:px-12">
      <h2 className="text-2xl font-semibold underline">ALL SERVICES</h2>

      {/* Search + Dropdowns */}
      <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl my-5 p-3 items-center justify-between relative">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px] border border-transparent focus-within:border-[#3C7263] transition-all">
          <Search className="w-5 h-5 text-black mr-2" />
          <input
            type="text"
            placeholder="Search ....."
            className="outline-none text-sm flex-1 bg-transparent text-black placeholder:text-gray-500"
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsAtHomeOpen(!isAtHomeOpen);
              setIsGenderOpen(false);
            }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium border border-transparent hover:border-[#3C7263] transition-all"
          >
            {selectedLocation === "At Salon" && (
              <Image
                src="/Image/allservices/salon-icon.png"
                width={12}
                height={12}
                alt="Salon"
                className="w-10 h-10"
              />
            )}
            {selectedLocation === "At Home" && (
              <Image
                src="/Image/allservices/home-icon.png"
                width={18}
                height={18}
                alt="Home"
              />
            )}
            {selectedLocation === "Freelancer" && (
              <Image
                src="/Image/allservices/freelancer-icon.png"
                width={18}
                height={18}
                alt="Freelancer"
              />
            )}
            {selectedLocation}
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {isAtHomeOpen && (
            <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-40">
              {["At Salon", "At Home", "Freelancer"].map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectLocation(option)}
                  className="flex items-center gap-2 w-full text-left p-2 hover:bg-gray-100 text-sm rounded-md"
                >
                  <Image
                    src={`/Image/allservices/${option === "At Salon"
                        ? "salon-icon.png"
                        : option === "At Home"
                          ? "home-icon.png"
                          : "freelancer-icon.png"
                      }`}
                    width={18}
                    height={18}
                    alt={option}
                  />
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gender Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsGenderOpen(!isGenderOpen);
              setIsAtHomeOpen(false);
            }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium border border-transparent hover:border-[#3C7263] transition-all"
          >
            {selectedGender === "Female" && (
              <Image
                src="/Image/allservices/female-icon.png"
                width={18}
                height={18}
                alt="Female"
              />
            )}
            {selectedGender === "Male" && (
              <Image
                src="/Image/allservices/male-icon.png"
                width={18}
                height={18}
                alt="Male"
              />
            )}
            {selectedGender}
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {isGenderOpen && (
            <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-40">
              {["Female", "Male"].map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectGender(option)}
                  className="flex items-center gap-2 w-full text-left p-2 hover:bg-gray-100 text-sm rounded-md"
                >
                  <Image
                    src={`/Image/allservices/${option.toLowerCase()}-icon.png`}
                    width={18}
                    height={18}
                    alt={option}
                  />
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Services + Filters Section */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Service Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative w-[90%] rounded-3xl overflow-hidden shadow-md cursor-pointer transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={240}
                height={240}
                className={`w-full h-42 object-cover transition-transform duration-500 ${activeCards.includes(index) ? "scale-105" : ""
                  }`}
              />

              {/* Black overlay rises & stays on click */}
              <div
                className={`absolute inset-0 bg-black/60 transition-transform duration-700 ease-out ${activeCards.includes(index)
                    ? "translate-y-0"
                    : "translate-y-full"
                  }`}
              ></div>

              {/* Title fixed at bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-semibold z-10">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 h-fit sticky top-20">
          {filters.map((group, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-[#617772] font-semibold text-lg mb-4">
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
                      className="w-4 h-4 accent-[#617772]"
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

          <div className="flex float-end">
            <Link
              href="/salonList"
              className="bg-[#637571] text-white py-1 px-5 rounded-3xl flex items-center gap-2"
            >
              Find Your Salon
              <Image
                src="/Image/allservices/arrow-right.png"
                width={12}
                height={12}
                alt="arrow right"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
