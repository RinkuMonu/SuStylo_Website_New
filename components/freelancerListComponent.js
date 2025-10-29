// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ArrowRight } from "lucide-react";

// export default function FreelancerList() {
//     const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
//     const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
//     const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");

//     const freelancers = [
//         {
//             id: 1,
//             name: "ALISA MENON",
//             specialization: "Hair & Makeup expert",
//             timing: "10AM - 10PM",
//             experience: "2+",
//             bookings: 45,
//             image: "/salonlist/freelancer1.jpg",
//             popular: true
//         },
//         {
//             id: 2,
//             name: "PRIYA SHARMA",
//             specialization: "Nail Art Specialist",
//             timing: "9AM - 8PM",
//             experience: "3+",
//             bookings: 32,
//             image: "/salonlist/freelancer2.jpg",
//             popular: true
//         },
//         {
//             id: 3,
//             name: "NEHA KAPOOR",
//             specialization: "Bridal Makeup Artist",
//             timing: "10AM - 10PM",
//             experience: "5+",
//             bookings: 67,
//             image: "/salonlist/freelancer3.jpg",
//             popular: true
//         },
//         {
//             id: 4,
//             name: "SNEHAL PATIL",
//             specialization: "Skin Care Expert",
//             timing: "11AM - 9PM",
//             experience: "4+",
//             bookings: 28,
//             image: "/salonlist/freelancer4.jpg",
//             popular: true
//         },
//         {
//             id: 5,
//             name: "RITU SINGH",
//             specialization: "Hair Stylist",
//             timing: "10AM - 7PM",
//             experience: "3+",
//             bookings: 41,
//             image: "/salonlist/freelancer5.jpg",
//             popular: true
//         },
//         {
//             id: 6,
//             name: "MEERA JOSHI",
//             specialization: "Makeup Artist",
//             timing: "10AM - 10PM",
//             experience: "2+",
//             bookings: 23,
//             image: "/salonlist/freelancer6.png",
//             popular: true
//         },
//         {
//             id: 7,
//             name: "ANJALI REDDY",
//             specialization: "Beauty Therapist",
//             timing: "9AM - 8PM",
//             experience: "4+",
//             bookings: 38,
//             image: "/salonlist/freelancer7.jpg",
//             popular: true
//         },
//         {
//             id: 8,
//             name: "KAVITA MALHOTRA",
//             specialization: "Nail Technician",
//             timing: "10AM - 9PM",
//             experience: "3+",
//             bookings: 29,
//             image: "/salonlist/freelancer8.jpg",
//             popular: true
//         }
//     ];

//     return (
//         <div className="bg-[#f2e7d7] px-[130px] py-8">
//             {/* Header */}
//             <span className="text-[32px] font-semibold mb-6 text-[#1f1f1f] tracking-wide border-b-2 border-black">
//                 FREELANCERS
//             </span>

//             {/* Search Bar */}
//             <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl p-3 mt-5 items-center justify-between relative">
//                 <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px]">
//                     <Search className="w-5 h-5 text-black mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Search......"
//                         className="outline-none text-sm flex-1 bg-transparent text-black"
//                     />
//                 </div>

//                 {/* At Home Button with Dropdown */}
//                 <div className="relative">
//                     <button
//                         onClick={() => {
//                             setIsAtHomeModalOpen(!isAtHomeModalOpen);
//                             setIsMoreFiltersModalOpen(false);
//                         }}
//                         className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
//                     >
//                         <Home className="w-4 h-4" />
//                         {selectedAtHomeOption || "At Home"}
//                     </button>
//                 </div>

//                 <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
//                     <MapPin className="w-4 h-4" /> Location
//                 </button>

//                 {/* More Filters Button with Dropdown */}
//                 <div className="relative">
//                     <button
//                         onClick={() => {
//                             setIsMoreFiltersModalOpen(!isMoreFiltersModalOpen);
//                             setIsAtHomeModalOpen(false);
//                         }}
//                         className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
//                     >
//                         <Funnel className="w-4 h-4" /> More Filters
//                     </button>

//                     {/* More Filters Dropdown */}
//                     {isMoreFiltersModalOpen && (
//                         <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50 w-[630px] p-5">
//                             {/* Filters Row */}
//                             <div className="grid grid-cols-4 gap-6">
//                                 {/* Gender Section */}
//                                 <div className="border-r pr-4">
//                                     <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
//                                         Gender
//                                     </h4>
//                                     <div className="space-y-1">
//                                         <label className="flex items-center">
//                                             <input type="checkbox" className="mr-2 w-3 h-3" />
//                                             <span className="text-sm">Male</span>
//                                         </label>
//                                         <label className="flex items-center">
//                                             <input type="checkbox" className="mr-2 w-3 h-3" />
//                                             <span className="text-sm">Female</span>
//                                         </label>
//                                     </div>
//                                 </div>

//                                 {/* Price Section */}
//                                 <div className="border-r pr-4">
//                                     <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Price</h4>
//                                     <div className="space-y-1">
//                                         {["1,000 - 2,000", "2,000 - 3,000", "3,000 - 4,000", "4,000 - 5,000", "5,000 - 6,000"].map(
//                                             (price) => (
//                                                 <label key={price} className="flex items-center">
//                                                     <input type="checkbox" className="mr-2 w-3 h-3" />
//                                                     <span className="text-sm">{price}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Customer Rating Section */}
//                                 <div className="border-r pr-4">
//                                     <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Customer Rating</h4>
//                                     <div className="space-y-1">
//                                         {["4.5 - 5 Ratings", "4 - 4.5 Ratings", "3.5 - 4 Ratings", "3 - 3.5 Ratings", "2 - 3 Ratings"].map(
//                                             (rating) => (
//                                                 <label key={rating} className="flex items-center">
//                                                     <input type="checkbox" className="mr-2 w-3 h-3" />
//                                                     <span className="text-sm">{rating}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Discount Section */}
//                                 <div>
//                                     <h4 className="font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">Discount</h4>
//                                     <div className="space-y-1">
//                                         {["10% Discount", "20% Discount", "30% Discount", "40% Discount", "50% Discount"].map(
//                                             (discount) => (
//                                                 <label key={discount} className="flex items-center">
//                                                     <input type="checkbox" className="mr-2 w-3 h-3" />
//                                                     <span className="text-sm">{discount}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Bottom Buttons */}
//                             <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600">
//                                 <button className="flex items-center gap-1 hover:text-gray-800">
//                                     <span>⟳</span> Reset
//                                 </button>
//                                 <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
//                                     <span>✔</span> Done
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Freelancer Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//                 {freelancers.map((freelancer) => (
//                     <div
//                         key={freelancer.id}
//                         className="bg-[#F6EFE4] rounded-2xl border border-[#617772] overflow-hidden flex flex-col shadow-sm"
//                     >
//                         {/* Top Section */}
//                         <div className="flex flex-col sm:flex-row">
//                             {/* Left: Image */}
//                             <div className="relative w-full h-64 sm:h-auto">
//                                 <Image
//                                     src={freelancer.image}
//                                     alt={freelancer.name}
//                                     fill
//                                     className="object-cover"
//                                 />

//                                 {/* Popular Badge */}
//                                 {freelancer.popular && (
//                                     <div className="absolute top-0 right-0 text-white text-sm font-semibold px-8 py-1 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
//                                         Popular
//                                     </div>
//                                 )}

//                                 {/* Rating Badge */}
//                                 <div className="absolute bottom-3 right-3 bg-white rounded-full shadow px-2 py-[2px] flex items-center text-xs">
//                                     <span className="mr-1">⭐</span>
//                                     4.5
//                                 </div>
//                             </div>

//                             {/* Right: Experience + Book Now full section */}
//                             <div className="sm:w-1/2 w-full flex flex-col justify-between text-black">
//                                 <div className="flex flex-col items-center justify-center py-6 text-center w-full flex-1">
//                                     <h3 className="text-[#617772] text-5xl font-light mb-1">
//                                         {freelancer.experience}
//                                     </h3>
//                                     <p className="text-[#617772] text-md tracking-wide font-medium">
//                                         YEARS EXPERIENCE
//                                     </p>
//                                 </div>

//                                 {/* Book Now full-width button area */}
//                                 {/* <button className="bg-[#4e635b] w-full text-white font-medium py-10 border-t border-white/30 flex justify-center items-center text-lg hover:bg-[#3e5149] transition-all duration-300">
//             Book Now <span className="ml-2 text-xl">→</span>
//           </button> */}
//                                 {/* Book Now full-width button area */}
//                                 <button className="bg-[#617772] w-full text-[#F6EFE4] font-medium py-8 border-t border-white/30 flex flex-col justify-center items-center text-lg hover:bg-[#3e5149] transition-all duration-300">
//                                     <span>Book Now</span>

//                                     {/* Long Thin Arrow SVG */}
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 60 10"
//                                         className="mt-3 w-14 h-[10px] fill-none stroke-[#F6EFE4] stroke-[2]"
//                                     >
//                                         <line x1="0" y1="5" x2="60" y2="5" />  {/* Horizontal line */}
//                                         <polyline points="50,0 60,5 50,10" /> {/* Arrow head */}
//                                     </svg>
//                                 </button>

//                             </div>
//                         </div>

//                         {/* Bottom Details */}
//                         <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f8f3ec] px-6 py-4 border-t border-[#d9d5cf]">
//                             <div className="text-center sm:text-left ml-14">
//                                 <h2 className="text-lg italic font-semibold text-gray-800">
//                                     {freelancer.name}
//                                 </h2>
//                                 <p className="text-gray-700 text-sm">{freelancer.specialization}</p>
//                             </div>
//                             <p className="text-gray-600 text-sm mt-2 sm:mt-0">
//                                 Timing : {freelancer.timing}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ArrowRight, ChevronDown } from "lucide-react";

export default function FreelancerList() {
   const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
    const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
    const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    // ✅ Added state to manage selected filters
    const [selectedFilters, setSelectedFilters] = useState({
        gender: [],
        price: [],
        rating: [],
        discount: [],
    });

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prev) => {
            const isSelected = prev[category].includes(value);
            return {
                ...prev,
                [category]: isSelected
                    ? prev[category].filter((v) => v !== value)
                    : [...prev[category], value],
            };
        });
    };

    const handleReset = () => {
        setSelectedFilters({
            gender: [],
            price: [],
            rating: [],
            discount: [],
        });
    };


   const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("08/10/2025");
  const [selectedTime, setSelectedTime] = useState("03:00 PM");

  const [currentMonth, setCurrentMonth] = useState(9); // 0=Jan, 9=October
  const [currentYear, setCurrentYear] = useState(2025);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM",
    "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
  ];

  // 🔹 Month Names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // 🔹 Generate Days for Current Month
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  // 🔹 Get first day of month (0=Sun, 1=Mon,...)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const blankDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

  // 🔹 Handle Month Change
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 🔹 Handle Date Select
  const handleDateSelect = (day) => {
    const month = (currentMonth + 1).toString().padStart(2, "0");
    const date = `${month}/${day.toString().padStart(2, "0")}/${currentYear}`;
    setSelectedDate(date);
  };



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
        <div className="bg-[#f2e7d7] px-[130px] py-6">
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
                        <span>{selectedAtHomeOption || "At Home"}</span>
                        {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
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
                                {["Male", "Female"].map((gender) => (
                                    <label key={gender} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2 w-3 h-3"
                                            checked={selectedFilters.gender.includes(gender)}
                                            onChange={() => handleCheckboxChange("gender", gender)}
                                        />
                                        <span className="text-sm">{gender}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="border-r pr-4">
                            <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
                                Price
                            </h4>
                            <div className="space-y-1">
                                {["1,000 - 2,000", "2,000 - 3,000", "3,000 - 4,000", "4,000 - 5,000", "5,000 - 6,000"].map(
                                    (price) => (
                                        <label key={price} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2 w-3 h-3"
                                                checked={selectedFilters.price.includes(price)}
                                                onChange={() => handleCheckboxChange("price", price)}
                                            />
                                            <span className="text-sm">{price}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Customer Rating Section */}
                        <div className="border-r pr-4">
                            <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
                                Customer Rating
                            </h4>
                            <div className="space-y-1">
                                {["4.5 - 5 Ratings", "4 - 4.5 Ratings", "3.5 - 4 Ratings", "3 - 3.5 Ratings", "2 - 3 Ratings"].map(
                                    (rating) => (
                                        <label key={rating} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2 w-3 h-3"
                                                checked={selectedFilters.rating.includes(rating)}
                                                onChange={() => handleCheckboxChange("rating", rating)}
                                            />
                                            <span className="text-sm">{rating}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Discount Section */}
                        <div>
                            <h4 className="font-['Inria_Serif'] font-normal text-[16px] leading-[100%] tracking-[0] capitalize text-[#617772] mb-5">
                                Discount
                            </h4>
                            <div className="space-y-1">
                                {["10% Discount", "20% Discount", "30% Discount", "40% Discount", "50% Discount"].map(
                                    (discount) => (
                                        <label key={discount} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2 w-3 h-3"
                                                checked={selectedFilters.discount.includes(discount)}
                                                onChange={() => handleCheckboxChange("discount", discount)}
                                            />
                                            <span className="text-sm">{discount}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600">
                        <button
                            className="flex items-center gap-1 hover:text-gray-800"
                            onClick={handleReset}
                        >
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
                                <Link href={`/freelancer/${freelancer.id}`} className="block w-full h-full">
                                    {/* 👆 You can change link path as needed */}
                                    <Image
                                        src={freelancer.image}
                                        alt={freelancer.name}
                                        fill
                                        className="object-cover rounded-t-lg cursor-pointer"
                                    />
                                </Link>

                                {/* Popular Badge */}
                                {freelancer.popular && (
                                    <div className="w-[180px] h-[34px] absolute top-0 right-0 text-white text-sm font-semibold text-center py-2 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
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
                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="bg-[#617772] w-full text-[#F6EFE4] font-medium py-8 border-t border-white/30 flex flex-col justify-center items-center text-lg hover:bg-[#3e5149] transition-all duration-300"
                                >
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
                        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f8f3ec] px-6 py-1 border-t border-[#d9d5cf]">
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

            {/* Booking Modal - Styled Same as Uploaded Image */}
            {isBookingModalOpen && (
                <div className="fixed inset-0  flex items-center justify-center z-50 px-4">
                    <div className="relative bg-[#637571] w-[890px] rounded-xl shadow-2xl overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsBookingModalOpen(false)}
                            className="absolute top-4 right-4 text-[#F6EFE4] hover:text-white transition"
                        >
                            <X size={22} />
                        </button>

                        {/* Modal Inner */}
                        <div className="px-8 pt-8">

                            {/* Header */}
                            <h2 className="text-[#F6EFE4] text-[32px] font-semibold font-['Inria_Serif'] mb-2">
                                Book Appointment
                            </h2>
                            <hr className="border-[#F6EFE4]/40 mb-4" />

                            {/* Confirm Section */}
                            <h3 className="text-[#dcd8d3] text-[20px] mb-4 font-['Inria_Serif']">
                                Confirm Your Services
                            </h3>

                            {/* Service Info */}
                            <div className="bg-transparent mb-2 text-[#F6EFE4] leading-relaxed">
                                <span className="font-medium text-[16px]">
                                    Waxing / Back Or Stomach For Female (Rica) / At Home
                                </span>
                                <span className="ml-2 text-[13px] bg-[#F6EFE4] text-[#5C6B63] px-2 py-[1px] rounded-md font-semibold">
                                    Female
                                </span>
                            </div>

                            {/* Price + Duration */}
                            <div className="flex items-center gap-5 text-[#F6EFE4] mb-2">
                                <span className="text-[17px] font-semibold">₹500</span>
                                <div className="flex items-center text-sm opacity-80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                                        <circle cx="12" cy="12" r="9" />
                                    </svg>
                                    Approx. 45min
                                </div>
                            </div>



                            {/* Date Section */}
                           {/* Date Section */}
      <div
        onClick={() => setIsDateModalOpen(true)}
        className="flex items-center text-[#F6EFE4] text-[15px] mb-5 cursor-pointer hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          />
        </svg>
        {selectedDate} & {selectedTime}
      </div>

      {/* Date Selection Modal */}
      {isDateModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-[#E9E3D9] rounded-2xl shadow-2xl w-full max-w-3xl px-[10px] py-[21px] relative">
            {/* Close Button */}
            <button
              onClick={() => setIsDateModalOpen(false)}
              className="absolute top-3 right-4 text-[#5C6B63] hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Calendar + Slots */}
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#d1c7b9]">
              {/* Left - Calendar */}
              <div className="flex-1 p-5">
                {/* Month Header */}
                <div className="flex justify-between items-center bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold px-4">
                  <button onClick={handlePrevMonth} className="hover:text-gray-200">
                    ‹
                  </button>
                  <span>
                    {months[currentMonth]} {currentYear}
                  </span>
                  <button onClick={handleNextMonth} className="hover:text-gray-200">
                    ›
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 text-center text-sm text-[#5C5C5C]">
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                    <div key={day} className="font-medium py-1">
                      {day}
                    </div>
                  ))}

                  {/* Blank spaces for start of month */}
                  {Array.from({ length: blankDays }).map((_, i) => (
                    <div key={`blank-${i}`} className="py-2" />
                  ))}

                  {/* Actual Days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDate === `${(currentMonth + 1)
                      .toString()
                      .padStart(2, "0")}/${day.toString().padStart(2, "0")}/${currentYear}`;

                    return (
                      <div
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        className={`py-2 rounded-md cursor-pointer mx-auto w-8 h-8 flex items-center justify-center transition
                          ${isSelected
                            ? "bg-[#5F3F31] text-white"
                            : "hover:bg-[#E7DCCC] text-[#5C5C5C]"
                          }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Slots */}
              <div className="flex-1 p-5">
                <div className="bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold">
                  Slots Available
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 rounded-md text-sm font-medium border transition-all duration-200 ${
                        selectedTime === slot
                          ? "bg-[#5F3F31] text-white border-[#70513D]"
                          : "bg-white text-[#70513D] border-[#C9BFAF] hover:bg-[#E7DCCC]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


                         {/* Add More Services */}
<div className="flex justify-center">
    <a
        href="/add-services" // 👉 yahan apna actual page path daal dena
        className="text-[#F6EFE4] underline underline-offset-2 hover:opacity-90 text-sm mb-6"
    >
        + Add More Services
    </a>
</div>



                            {/* White Box - Price Summary */}
                            <div className="bg-[#F6EFE4] rounded-t-xl px-6 py-5 text-[#1f1f1f]">
                                <div className="flex justify-between mb-2 text-[15px]">
                                    <span>Waxing</span>
                                    <span>₹400</span>
                                </div>
                                <div className="flex justify-between mb-4 text-[15px]">
                                    <span>Tax</span>
                                    <span>₹50</span>
                                </div>
                                <hr className="border-[#a7a7a7] mb-4" />

                                {/* Total Section */}
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-semibold">Total Amount</h4>
                                    <span className="text-lg font-semibold">₹450</span>
                                </div>

                                {/* Pay Button */}
                                <div className="flex justify-end mt-5">
                                    <button className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
                                        Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}