"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ArrowRight } from "lucide-react";

export default function FreelancerList() {
    const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
    const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
    const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");

    const freelancers = [
        {
            id: 1,
            name: "ALISA MENON",
            specialization: "Hair & Makeup expert",
            timing: "10AM - 10PM",
            experience: "2+",
            bookings: 45,
            image: "/salonlist/freelancer1.jpg",
            popular: true
        },
        {
            id: 2,
            name: "PRIYA SHARMA",
            specialization: "Nail Art Specialist",
            timing: "9AM - 8PM",
            experience: "3+",
            bookings: 32,
            image: "/salonlist/freelancer2.jpg",
            popular: true
        },
        {
            id: 3,
            name: "NEHA KAPOOR",
            specialization: "Bridal Makeup Artist",
            timing: "10AM - 10PM",
            experience: "5+",
            bookings: 67,
            image: "/salonlist/freelancer3.jpg",
            popular: true
        },
        {
            id: 4,
            name: "SNEHAL PATIL",
            specialization: "Skin Care Expert",
            timing: "11AM - 9PM",
            experience: "4+",
            bookings: 28,
            image: "/salonlist/freelancer4.jpg",
            popular: true
        },
        {
            id: 5,
            name: "RITU SINGH",
            specialization: "Hair Stylist",
            timing: "10AM - 7PM",
            experience: "3+",
            bookings: 41,
            image: "/salonlist/freelancer5.jpg",
            popular: true
        },
        {
            id: 6,
            name: "MEERA JOSHI",
            specialization: "Makeup Artist",
            timing: "10AM - 10PM",
            experience: "2+",
            bookings: 23,
            image: "/salonlist/freelancer6.png",
            popular: true
        },
        {
            id: 7,
            name: "ANJALI REDDY",
            specialization: "Beauty Therapist",
            timing: "9AM - 8PM",
            experience: "4+",
            bookings: 38,
            image: "/salonlist/freelancer7.jpg",
            popular: true
        },
        {
            id: 8,
            name: "KAVITA MALHOTRA",
            specialization: "Nail Technician",
            timing: "10AM - 9PM",
            experience: "3+",
            bookings: 29,
            image: "/salonlist/freelancer8.jpg",
            popular: true
        }
    ];

    return (
        <div className="bg-[#f2e7d7] px-[130px] py-8">
            {/* Header */}
            <span className="font-['Inria_Serif'] text-2xl font-semibold mb-6 text-[#1f1f1f] tracking-wide border-b-2 border-black">
                FREELANCERS
            </span>

            {/* Search Bar */}
            <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl p-3 mt-5 items-center justify-between relative">
                <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px]">
                    <Search className="w-5 h-5 text-black mr-2" />
                    <input
                        type="text"
                        placeholder="Search......"
                        className="outline-none text-sm flex-1 bg-transparent text-black"
                    />
                </div>

                {/* At Home Button with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsAtHomeModalOpen(!isAtHomeModalOpen);
                            setIsMoreFiltersModalOpen(false);
                        }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                    >
                        <Home className="w-4 h-4" />
                        {selectedAtHomeOption || "At Home"}
                    </button>
                </div>

                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <MapPin className="w-4 h-4" /> Location
                </button>

                {/* More Filters Button with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsMoreFiltersModalOpen(!isMoreFiltersModalOpen);
                            setIsAtHomeModalOpen(false);
                        }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                    >
                        <Funnel className="w-4 h-4" /> More Filters
                    </button>

                    {/* More Filters Dropdown */}
                    {isMoreFiltersModalOpen && (
                        <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50 w-[630px] p-5">
                            {/* Filters Row */}
                            <div className="grid grid-cols-4 gap-6">
                                {/* Gender Section */}
                                <div className="border-r pr-4">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
                                        Gender
                                    </h4>
                                    <div className="space-y-1">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 w-3 h-3" />
                                            <span className="text-sm">Male</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 w-3 h-3" />
                                            <span className="text-sm">Female</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div className="border-r pr-4">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Price</h4>
                                    <div className="space-y-1">
                                        {["1,000 - 2,000", "2,000 - 3,000", "3,000 - 4,000", "4,000 - 5,000", "5,000 - 6,000"].map(
                                            (price) => (
                                                <label key={price} className="flex items-center">
                                                    <input type="checkbox" className="mr-2 w-3 h-3" />
                                                    <span className="text-sm">{price}</span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Customer Rating Section */}
                                <div className="border-r pr-4">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Customer Rating</h4>
                                    <div className="space-y-1">
                                        {["4.5 - 5 Ratings", "4 - 4.5 Ratings", "3.5 - 4 Ratings", "3 - 3.5 Ratings", "2 - 3 Ratings"].map(
                                            (rating) => (
                                                <label key={rating} className="flex items-center">
                                                    <input type="checkbox" className="mr-2 w-3 h-3" />
                                                    <span className="text-sm">{rating}</span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Discount Section */}
                                <div>
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Discount</h4>
                                    <div className="space-y-1">
                                        {["10% Discount", "20% Discount", "30% Discount", "40% Discount", "50% Discount"].map(
                                            (discount) => (
                                                <label key={discount} className="flex items-center">
                                                    <input type="checkbox" className="mr-2 w-3 h-3" />
                                                    <span className="text-sm">{discount}</span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600">
                                <button className="flex items-center gap-1 hover:text-gray-800">
                                    <span>⟳</span> Reset
                                </button>
                                <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                                    <span>✔</span> Done
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Freelancer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {freelancers.map((freelancer) => (
                    <div
                        key={freelancer.id}
                        className="bg-[#F6EFE4] rounded-2xl border border-[#617772] overflow-hidden flex flex-col shadow-sm"
                    >
                        {/* Top Section */}
                        <div className="flex flex-col sm:flex-row">
                            {/* Left: Image */}
                            <div className="relative w-full h-64 sm:h-auto">
                                <Image
                                    src={freelancer.image}
                                    alt={freelancer.name}
                                    fill
                                    className="object-cover"
                                />

                                {/* Popular Badge */}
                                {freelancer.popular && (
                                    <div className="absolute top-0 right-0 text-white text-sm font-semibold px-8 py-1 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
                                        Popular
                                    </div>
                                )}

                                {/* Rating Badge */}
                                <div className="absolute bottom-3 right-3 bg-white rounded-full shadow px-2 py-[2px] flex items-center text-xs">
                                    <span className="mr-1">⭐</span>
                                    4.5
                                </div>
                            </div>

                            {/* Right: Experience + Book Now full section */}
                            <div className="sm:w-1/2 w-full flex flex-col justify-between text-black">
                                <div className="flex flex-col items-center justify-center py-6 text-center w-full flex-1">
                                    <h3 className="text-[#617772] text-5xl font-light mb-1">
                                        {freelancer.experience}
                                    </h3>
                                    <p className="text-[#617772] text-md tracking-wide font-medium">
                                        YEARS EXPERIENCE
                                    </p>
                                </div>

                                {/* Book Now full-width button area */}
                                {/* <button className="bg-[#4e635b] w-full text-white font-medium py-10 border-t border-white/30 flex justify-center items-center text-lg hover:bg-[#3e5149] transition-all duration-300">
            Book Now <span className="ml-2 text-xl">→</span>
          </button> */}
                                {/* Book Now full-width button area */}
                                <button className="bg-[#617772] w-full text-[#F6EFE4] font-medium py-8 border-t border-white/30 flex flex-col justify-center items-center text-lg hover:bg-[#3e5149] transition-all duration-300">
                                    <span>Book Now</span>

                                    {/* Long Thin Arrow SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 60 10"
                                        className="mt-3 w-14 h-[10px] fill-none stroke-[#F6EFE4] stroke-[2]"
                                    >
                                        <line x1="0" y1="5" x2="60" y2="5" />  {/* Horizontal line */}
                                        <polyline points="50,0 60,5 50,10" /> {/* Arrow head */}
                                    </svg>
                                </button>

                            </div>
                        </div>

                        {/* Bottom Details */}
                        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f8f3ec] px-6 py-4 border-t border-[#d9d5cf]">
                            <div className="text-center sm:text-left ml-14">
                                <h2 className="text-lg italic font-semibold text-gray-800">
                                    {freelancer.name}
                                </h2>
                                <p className="text-gray-700 text-sm">{freelancer.specialization}</p>
                            </div>
                            <p className="text-gray-600 text-sm mt-2 sm:mt-0">
                                Timing : {freelancer.timing}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}