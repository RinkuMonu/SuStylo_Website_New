// "use client";
// import React from "react";
// import Image from "next/image";
// import { Search, MapPin, SlidersHorizontal, Home } from "lucide-react";

// export default function SalonList() {
//     const salons = [
//         {
//             id: 1,
//             name: "STYLE & SCISSORS",
//             service: "Nail Art",
//             timing: "10AM - 10PM",
//             price: "2,000 - 5,000 Rs",
//             rating: 4.5,
//             club: "All star club",
//             image: "/salonlist/service1.jpg",
//         },
//         {
//             id: 2,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service4.jpg",
//         },
//         {
//             id: 3,
//             name: "STYLE & SCISSORS",
//             service: "Nail Art",
//             timing: "10AM - 10PM",
//             price: "2,000 - 5,000 Rs",
//             rating: 4.5,
//             club: "All star club",
//             image: "/salonlist/service3.jpg",
//         },
//         {
//             id: 4,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service8.jpg",
//         },
//         {
//             id: 5,
//             name: "STYLE & SCISSORS",
//             service: "Nail Art",
//             timing: "10AM - 10PM",
//             price: "2,000 - 5,000 Rs",
//             rating: 4.5,
//             club: "All star club",
//             image: "/salonlist/service5.jpg",
//         },
//         {
//             id: 6,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service6.jpg",
//         },
//         {
//             id: 7,
//             name: "STYLE & SCISSORS",
//             service: "Nail Art",
//             timing: "10AM - 10PM",
//             price: "2,000 - 5,000 Rs",
//             rating: 4.5,
//             club: "All star club",
//             image: "/salonlist/service7.jpg",
//         },
//         {
//             id: 8,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service8.jpg",
//         },
//          {
//             id: 9,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service9.jpg",
//         },
//             {
//             id: 10,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service10.jpg",
//         },
//             {
//             id: 11,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service11.jpg",
//         },
//            {
//             id: 12,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service4.jpg",
//         },
//     ];

//     return (
//         <div className="bg-[#f2e7d7] px-[130px] py-8">
//             {/* Header */}
//             <span className="text-2xl font-semibold mb-6 text-[#1f1f1f] tracking-wide border-b-2 border-black">
//                 SALON LIST
//             </span>

//             {/* Search Bar */}
//             <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl p-3 mt-5 items-center justify-between">
//                 <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px]">
//                     <Search className="w-5 h-5 text-black mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Search......"
//                         className="outline-none text-sm flex-1 bg-transparent text-black"
//                     />
//                 </div>
//                 <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
//                     <Home className="w-4 h-4" /> At Home
//                 </button>
//                 <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
//                     <MapPin className="w-4 h-4" /> Location
//                 </button>
//                 <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
//                     <SlidersHorizontal className="w-4 h-4" /> More Filters
//                 </button>
//             </div>

//           {/* Salon Cards */}
// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//   {salons.map((salon) => (
//     <div
//       key={salon.id}
//       className="bg-[#425550] rounded-xl overflow-hidden shadow-md relative border border-gray-200"
//     >
//       {/* Image Section */}
//       <div className="relative h-56 w-full">
//         <Image
//           src={salon.image}
//           alt={salon.service}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute top-0 right-0 px-8 py-1 bg-gradient-to-r from-black/70 via-[#b00020] to-[#e63946] text-white text-sm font-medium">
//           Popular
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-5 text-white font-['Inria_Serif']">
//         {/* Name + Rating in One Row */}
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-lg font-semibold tracking-wide">{salon.name}</h2>
//           <p className="text-yellow-400 text-sm font-medium flex items-center gap-1">
//             ⭐ {salon.rating} Ratings
//           </p>
//         </div>

//         {/* Details */}
//         <p className="text-sm mb-1">
//           Services Available : <span className="font-medium">{salon.service}</span>
//         </p>
//         <p className="text-sm mb-1">Timing: {salon.timing}</p>
//         <p className="text-sm mb-4">Prices Range : {salon.price}</p>

//         {/* Bottom Row — Club + Button */}
//         <div className="flex items-center justify-between mt-2">
//           <p className="text-sm flex items-center gap-1"> <MapPin className="w-4 h-4" /> {salon.club}</p>

//           <button className="border border-white text-white rounded-full px-5 py-1 text-sm hover:bg-white hover:text-[#425550] transition-all duration-300">
//             Book us
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//     );
// }



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, MapPin, SlidersHorizontal, Home, X, Funnel } from "lucide-react";

export default function SalonList() {
    const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
    const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
    const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");

    const salons = [
        {
            id: 1,
            name: "STYLE & SCISSORS",
            service: "Nail Art",
            timing: "10AM - 10PM",
            price: "2,000 - 5,000 Rs",
            rating: 4.5,
            club: "All star club",
            image: "/salonlist/service1.jpg",
        },
        {
            id: 2,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service4.jpg",
        },
        {
            id: 3,
            name: "STYLE & SCISSORS",
            service: "Nail Art",
            timing: "10AM - 10PM",
            price: "2,000 - 5,000 Rs",
            rating: 4.5,
            club: "All star club",
            image: "/salonlist/service3.jpg",
        },
        {
            id: 4,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service8.jpg",
        },
        {
            id: 5,
            name: "STYLE & SCISSORS",
            service: "Nail Art",
            timing: "10AM - 10PM",
            price: "2,000 - 5,000 Rs",
            rating: 4.5,
            club: "All star club",
            image: "/salonlist/service5.jpg",
        },
        {
            id: 6,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service6.jpg",
        },
        {
            id: 7,
            name: "STYLE & SCISSORS",
            service: "Nail Art",
            timing: "10AM - 10PM",
            price: "2,000 - 5,000 Rs",
            rating: 4.5,
            club: "All star club",
            image: "/salonlist/service7.jpg",
        },
        {
            id: 8,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service8.jpg",
        },
        {
            id: 9,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service9.jpg",
        },
        {
            id: 10,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service10.jpg",
        },
        {
            id: 11,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service11.jpg",
        },
        {
            id: 12,
            name: "STYLE & SCISSORS",
            service: "Party Makeup",
            timing: "10AM - 10PM",
            price: "5,000 - 25,000 Rs",
            rating: 4.1,
            club: "All star club",
            image: "/salonlist/service4.jpg",
        },
    ];

    return (
        <div className="bg-[#f2e7d7] px-[130px] py-8">
            {/* Header */}
            <span className="text-2xl font-semibold mb-6 text-[#1f1f1f] tracking-wide border-b-2 border-black">
                SALON LIST
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

                    {/* At Home Dropdown */}
                    {isAtHomeModalOpen && (
                        <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-48">
                            <div className="p-2">
                                <button
                                    onClick={() => {
                                        setSelectedAtHomeOption("Salon");
                                        setIsAtHomeModalOpen(false);
                                    }}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    Salon
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedAtHomeOption("Freelancer");
                                        setIsAtHomeModalOpen(false);
                                    }}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    Freelancer
                                </button>
                            </div>
                        </div>
                    )}
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
                            {/* <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold"></h3>
                                <button
                                    onClick={() => setIsMoreFiltersModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div> */}

                            {/* Filters Row */}
                            <div className="grid grid-cols-4 gap-6">
                                {/* Gender Section */}
                                <div className="border-r pr-4">
                                    <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
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
                                    <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Price</h4>
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
                                    <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Customer Rating</h4>
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
                                    <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Discount</h4>
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

            {/* Salon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {salons.map((salon) => (
                    <div
                        key={salon.id}
                        className="bg-[#617772] rounded-xl overflow-hidden shadow-md relative border border-gray-200"
                    >
                        {/* Image Section */}
                        <div className="relative h-56 w-full">
                            <Image
                                src={salon.image}
                                alt={salon.service}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-0 right-0 px-8 py-1 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)] text-white text-sm font-medium">
                                Popular
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="px-10 py-6 text-white font-['Inria_Serif']">
                            {/* Name + Rating in One Row */}
                            <div className="flex items-center justify-between mb-2">
                                {/* <h2 className="text-lg tracking-wide">{salon.name}</h2> */}
                                <h2
                                    className="font-bold text-[24px] text-[#F6EFE4] leading-[100%] tracking-[0] uppercase"
                                >
                                    {salon.name}
                                </h2>

                                <p className="text-yellow-400 text-sm font-medium flex items-center gap-1">
                                    ⭐ {salon.rating} Ratings
                                </p>
                            </div>

                            {/* Details */}
                            <p
                                className="font-bold text-[20px] leading-[100%] tracking-[0] capitalize text-[#F6EFE4] py-1 mb-2"
                            >
                                Services Available : <span className="font-medium">{salon.service}</span>
                            </p>

                            <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-2">
                                Timing: {salon.timing}
                            </p>
                            <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-4">
                                Prices Range: {salon.price}
                            </p>


                            {/* Bottom Row — Club + Button */}
                            <div className="flex items-center justify-between mt-2">
                                {/* <p className="text-sm flex items-center gap-1"> <MapPin className="w-4 h-4" /> {salon.club}</p> */}
                                <p className="flex items-center gap-1 font-bold text-[16px] leading-[100%] tracking-[0]">
                                    <MapPin className="w-4 h-4" /> {salon.club}
                                </p>

                                <button className="border border-white text-white rounded-full px-5 py-1 text-sm hover:bg-white hover:text-[#425550] transition-all duration-300">
                                    Book us
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}