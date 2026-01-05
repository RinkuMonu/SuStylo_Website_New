
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ChevronDown } from "lucide-react";

// export default function SalonList() {
//     const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
//     const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
//     const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");
//     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//     // ✅ Added state to manage selected filters
//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         price: [],
//         rating: [],
//         discount: [],
//     });

//     const handleCheckboxChange = (category, value) => {
//         setSelectedFilters((prev) => {
//             const isSelected = prev[category].includes(value);
//             return {
//                 ...prev,
//                 [category]: isSelected
//                     ? prev[category].filter((v) => v !== value)
//                     : [...prev[category], value],
//             };
//         });
//     };

//     const handleReset = () => {
//         setSelectedFilters({
//             gender: [],
//             price: [],
//             rating: [],
//             discount: [],
//         });
//     };

//     const [isDateModalOpen, setIsDateModalOpen] = useState(false);
//     const [selectedDate, setSelectedDate] = useState("08/10/2025");
//     const [selectedTime, setSelectedTime] = useState("03:00 PM");

//     const [currentMonth, setCurrentMonth] = useState(9); // 0=Jan, 9=October
//     const [currentYear, setCurrentYear] = useState(2025);

//     const timeSlots = [
//         "10:00 AM", "11:00 AM", "12:00 PM",
//         "01:00 PM", "02:00 PM", "03:00 PM",
//         "04:00 PM", "05:00 PM", "06:00 PM",
//         "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
//     ];

//     // 🔹 Month Names
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     // 🔹 Generate Days for Current Month
//     const getDaysInMonth = (month, year) => {
//         const date = new Date(year, month + 1, 0);
//         return date.getDate();
//     };

//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);

//     // 🔹 Get first day of month (0=Sun, 1=Mon,...)
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const blankDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

//     // 🔹 Handle Month Change
//     const handlePrevMonth = () => {
//         if (currentMonth === 0) {
//             setCurrentMonth(11);
//             setCurrentYear(currentYear - 1);
//         } else {
//             setCurrentMonth(currentMonth - 1);
//         }
//     };

//     const handleNextMonth = () => {
//         if (currentMonth === 11) {
//             setCurrentMonth(0);
//             setCurrentYear(currentYear + 1);
//         } else {
//             setCurrentMonth(currentMonth + 1);
//         }
//     };

//     // 🔹 Handle Date Select
//     const handleDateSelect = (day) => {
//         const month = (currentMonth + 1).toString().padStart(2, "0");
//         const date = `${month}/${day.toString().padStart(2, "0")}/${currentYear}`;
//         setSelectedDate(date);
//     };


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
//         {
//             id: 9,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service9.jpg",
//         },
//         {
//             id: 10,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service10.jpg",
//         },
//         {
//             id: 11,
//             name: "STYLE & SCISSORS",
//             service: "Party Makeup",
//             timing: "10AM - 10PM",
//             price: "5,000 - 25,000 Rs",
//             rating: 4.1,
//             club: "All star club",
//             image: "/salonlist/service11.jpg",
//         },
//         {
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
//         <div className="bg-[#f2e7d7] px-[20px] md:px-[130px] lg:px-[130px] py-6">
//             {/* Header */}
//             <span className="text-2xl font-semibold mb-6 text-[#1f1f1f] tracking-wide border-b-2 border-black">
//                 SALON LIST
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
//                         <span>{selectedAtHomeOption || "At Home"}</span>
//                         <ChevronDown className="w-4 h-4 ml-1" />
//                     </button>

//                     {/* At Home Dropdown */}
//                     {isAtHomeModalOpen && (
//                         <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-48">
//                             <div className="p-2">
//                                 <button
//                                     onClick={() => {
//                                         setSelectedAtHomeOption("Salon");
//                                         setIsAtHomeModalOpen(false);
//                                     }}
//                                     className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
//                                 >
//                                     Salon
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         setSelectedAtHomeOption("Freelancer");
//                                         setIsAtHomeModalOpen(false);
//                                     }}
//                                     className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
//                                 >
//                                     Freelancer
//                                 </button>
//                             </div>
//                         </div>
//                     )}
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
//                         <div
//                             className="
//                             absolute md:top-12 md:right-0 
//                             bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50 
//                             w-[90vw] md:w-[630px] 
//                             p-5 

//                             -translate-x-54 md:translate-x-0
//                             top-[110%] md:top-12 
//                             max-h-[80vh] md:max-h-none 
//                             overflow-y-auto
//                             "
//                         >
//                             {/* Filters Row */}
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                                 {/* Gender Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Gender
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["Male", "Female"].map((gender) => (
//                                             <label key={gender} className="flex items-center">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="mr-2 w-3 h-3"
//                                                     checked={selectedFilters.gender.includes(gender)}
//                                                     onChange={() => handleCheckboxChange("gender", gender)}
//                                                 />
//                                                 <span className="text-sm">{gender}</span>
//                                             </label>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Price Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Price
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["1,000 - 2,000", "2,000 - 3,000", "3,000 - 4,000", "4,000 - 5,000", "5,000 - 6,000"].map(
//                                             (price) => (
//                                                 <label key={price} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.price.includes(price)}
//                                                         onChange={() => handleCheckboxChange("price", price)}
//                                                     />
//                                                     <span className="text-sm">{price}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Customer Rating Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Customer Rating
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["4.5 - 5 Ratings", "4 - 4.5 Ratings", "3.5 - 4 Ratings", "3 - 3.5 Ratings", "2 - 3 Ratings"].map(
//                                             (rating) => (
//                                                 <label key={rating} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.rating.includes(rating)}
//                                                         onChange={() => handleCheckboxChange("rating", rating)}
//                                                     />
//                                                     <span className="text-sm">{rating}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Discount Section */}
//                                 <div>
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Discount
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["10% Discount", "20% Discount", "30% Discount", "40% Discount", "50% Discount"].map(
//                                             (discount) => (
//                                                 <label key={discount} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.discount.includes(discount)}
//                                                         onChange={() => handleCheckboxChange("discount", discount)}
//                                                     />
//                                                     <span className="text-sm">{discount}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Bottom Buttons */}
//                             <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600 sticky bottom-0 bg-white pt-3">
//                                 <button
//                                     className="flex items-center gap-1 hover:text-gray-800"
//                                     onClick={handleReset}
//                                 >
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

//             {/* Salon Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//                 {salons.map((salon) => (
//                     <div
//                         key={salon.id}
//                         className="bg-[#617772] rounded-xl overflow-hidden shadow-md relative border border-gray-200"
//                     >
//                         {/* Image Section */}
//                         <div className="relative h-56 w-full">
//                             <Link href={`/salon/${salon.id}`} className="block w-full h-full">
//                                 <Image
//                                     src={salon.image}
//                                     alt={salon.service}
//                                     fill
//                                     className="object-cover rounded-t-lg cursor-pointer"
//                                 />
//                             </Link>

//                             {/* Popular Badge */}
//                             <div className="w-[180px] h-[34px] absolute top-0 right-0 text-white text-sm font-semibold text-center py-2 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
//                                 Popular
//                             </div>
//                         </div>

//                         {/* Content Section */}
//                         <div className="px-10 py-6 text-white font-['Inria_Serif']">
//                             {/* Name + Rating in One Row */}
//                             <div className="flex items-center justify-between mb-2">
//                                 <h2
//                                     className="font-bold text-[24px] text-[#F6EFE4] leading-[100%] tracking-[0] uppercase"
//                                 >
//                                     {salon.name}
//                                 </h2>

//                                 <p className="text-yellow-400 text-sm font-medium flex items-center gap-1">
//                                     ⭐ {salon.rating} Ratings
//                                 </p>
//                             </div>

//                             {/* Details */}
//                             <p
//                                 className="font-bold text-[20px] leading-[100%] tracking-[0] capitalize text-[#F6EFE4] py-1 mb-2"
//                             >
//                                 Services Available : <span className="font-medium">{salon.service}</span>
//                             </p>

//                             <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-2">
//                                 Timing: {salon.timing}
//                             </p>
//                             <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-4">
//                                 Prices Range: {salon.price}
//                             </p>

//                             {/* Bottom Row — Club + Button */}
//                             <div className="flex items-center justify-between mt-2">
//                                 <p className="flex items-center gap-1 font-bold text-[16px] leading-[100%] tracking-[0]">
//                                     <MapPin className="w-4 h-4" /> {salon.club}
//                                 </p>

//                                 <button
//                                     onClick={() => setIsBookingModalOpen(true)}
//                                     className="border border-white text-white rounded-full px-5 py-1 text-sm hover:bg-white hover:text-[#425550] transition-all duration-300"
//                                 >
//                                     Book us
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Booking Modal - Same as FreelancerList */}
//             {isBookingModalOpen && (
//                 <div className="fixed inset-0  flex items-center justify-center z-50 px-4">
//                     <div className="relative bg-[#637571] w-[890px] rounded-xl shadow-2xl overflow-hidden">

//                         {/* Close Button */}
//                         <button
//                             onClick={() => setIsBookingModalOpen(false)}
//                             className="absolute top-4 right-4 text-[#F6EFE4] hover:text-white transition"
//                         >
//                             <X size={22} />
//                         </button>

//                         {/* Modal Inner */}
//                         <div className="px-8 pt-8">

//                             {/* Header */}
//                             <h2 className="text-[#F6EFE4] text-3xl font-semibold font-['Inria_Serif'] mb-2">
//                                 Book Appointment
//                             </h2>
//                             <hr className="border-[#F6EFE4]/40 mb-4" />

//                             {/* Confirm Section */}
//                             <h3 className="text-[#dcd8d3] text-lg mb-4 font-['Inria_Serif']">
//                                 Confirm Your Services
//                             </h3>

//                             {/* Service Info */}
//                             <div className="bg-transparent mb-2 text-[#F6EFE4] leading-relaxed">
//                                 <span className="font-medium">
//                                     Waxing / Back Or Stomach For Female (Rica) / At Home
//                                 </span>
//                                 <span className="ml-2 text-[13px] bg-[#F6EFE4] text-[#5C6B63] px-2 py-[1px] rounded-md font-semibold">
//                                     Female
//                                 </span>
//                             </div>

//                             {/* Price + Duration */}
//                             <div className="flex items-center gap-5 text-[#F6EFE4] mb-2">
//                                 <span className="text-[17px] font-semibold">₹500</span>
//                                 <div className="flex items-center text-sm opacity-80">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-4 h-4 mr-1"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={1.8}
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
//                                         <circle cx="12" cy="12" r="9" />
//                                     </svg>
//                                     Approx. 45min
//                                 </div>
//                             </div>

//                             {/* Date Section */}
//                             {/* Date Section */}
//                             <div
//                                 onClick={() => setIsDateModalOpen(true)}
//                                 className="flex items-center text-[#F6EFE4] text-[15px] mb-5 cursor-pointer hover:opacity-80 transition"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth={1.6}
//                                     stroke="currentColor"
//                                     className="w-5 h-5 mr-2"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M8 7V3m8 4V3m-9 8h10m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
//                                     />
//                                 </svg>
//                                 {selectedDate} & {selectedTime}
//                             </div>

//                             {/* Date Selection Modal */}
//                             {isDateModalOpen && (
//                                 <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//                                     <div className="bg-[#E9E3D9] rounded-2xl shadow-2xl w-full max-w-3xl px-[10px] py-[21px] relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsDateModalOpen(false)}
//                                             className="absolute top-3 right-4 text-[#5C6B63] hover:text-black transition"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth={2}
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                             </svg>
//                                         </button>

//                                         {/* Calendar + Slots */}
//                                         <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#d1c7b9]">
//                                             {/* Left - Calendar */}
//                                             <div className="flex-1 p-5">
//                                                 {/* Month Header */}
//                                                 <div className="flex justify-between items-center bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold px-4">
//                                                     <button onClick={handlePrevMonth} className="hover:text-gray-200">
//                                                         ‹
//                                                     </button>
//                                                     <span>
//                                                         {months[currentMonth]} {currentYear}
//                                                     </span>
//                                                     <button onClick={handleNextMonth} className="hover:text-gray-200">
//                                                         ›
//                                                     </button>
//                                                 </div>

//                                                 {/* Calendar Grid */}
//                                                 <div className="grid grid-cols-7 text-center text-sm text-[#5C5C5C]">
//                                                     {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
//                                                         <div key={day} className="font-medium py-1">
//                                                             {day}
//                                                         </div>
//                                                     ))}

//                                                     {/* Blank spaces for start of month */}
//                                                     {Array.from({ length: blankDays }).map((_, i) => (
//                                                         <div key={`blank-${i}`} className="py-2" />
//                                                     ))}

//                                                     {/* Actual Days */}
//                                                     {Array.from({ length: daysInMonth }).map((_, i) => {
//                                                         const day = i + 1;
//                                                         const isSelected = selectedDate === `${(currentMonth + 1)
//                                                             .toString()
//                                                             .padStart(2, "0")}/${day.toString().padStart(2, "0")}/${currentYear}`;

//                                                         return (
//                                                             <div
//                                                                 key={day}
//                                                                 onClick={() => handleDateSelect(day)}
//                                                                 className={`py-2 rounded-md cursor-pointer mx-auto w-8 h-8 flex items-center justify-center transition
//                           ${isSelected
//                                                                         ? "bg-[#5F3F31] text-white"
//                                                                         : "hover:bg-[#E7DCCC] text-[#5C5C5C]"
//                                                                     }`}
//                                                             >
//                                                                 {day}
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>

//                                             {/* Right - Slots */}
//                                             <div className="flex-1 p-5">
//                                                 <div className="bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold">
//                                                     Slots Available
//                                                 </div>

//                                                 <div className="grid grid-cols-3 gap-3">
//                                                     {timeSlots.map((slot) => (
//                                                         <button
//                                                             key={slot}
//                                                             onClick={() => setSelectedTime(slot)}
//                                                             className={`py-2 rounded-md text-sm font-medium border transition-all duration-200 ${selectedTime === slot
//                                                                 ? "bg-[#5F3F31] text-white border-[#70513D]"
//                                                                 : "bg-white text-[#70513D] border-[#C9BFAF] hover:bg-[#E7DCCC]"
//                                                                 }`}
//                                                         >
//                                                             {slot}
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Add More Services */}
//                             <div className="flex justify-center">
//                                 <a
//                                     href="/add-services" // 👉 yahan apna actual page path daal dena
//                                     className="text-[#F6EFE4] underline underline-offset-2 hover:opacity-90 text-sm mb-6"
//                                 >
//                                     + Add More Services
//                                 </a>
//                             </div>


//                             {/* White Box - Price Summary */}
//                             <div className="bg-[#F6EFE4] rounded-t-xl px-6 py-5 text-[#1f1f1f]">
//                                 <div className="flex justify-between mb-2 text-[15px]">
//                                     <span>Waxing</span>
//                                     <span>₹400</span>
//                                 </div>
//                                 <div className="flex justify-between mb-4 text-[15px]">
//                                     <span>Tax</span>
//                                     <span>₹50</span>
//                                 </div>
//                                 <hr className="border-[#a7a7a7] mb-4" />

//                                 {/* Total Section */}
//                                 <div className="flex justify-between items-center">
//                                     <h4 className="text-lg font-semibold">Total Amount</h4>
//                                     <span className="text-lg font-semibold">₹450</span>
//                                 </div>

//                                 {/* Pay Button */}
//                                 <div className="flex justify-end mt-5">
//                                     <button className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
//                                         Pay
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}


//         </div>
//     );
// }



// above only frontend UI code 



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { useSearchParams } from "next/navigation";
// import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ChevronDown } from "lucide-react";
// import axiosInstance from "../src/app/axios/axiosinstance";

// export default function SalonList() {
//     const searchParams = useSearchParams();
//     const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
//     const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
//     const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");
//     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");

//     // API data states
//     const [salons, setSalons] = useState([]);
//     const [filteredSalons, setFilteredSalons] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedService, setSelectedService] = useState("");

//     const serviceFromURL = searchParams.get('service') || "";

//     // Fetch salons from API
//     useEffect(() => {
//         const fetchSalons = async () => {
//             try {
//                 setLoading(true);
//                 let apiUrl = '/salons';

//                 // If service is selected, filter by service
//                 if (serviceFromURL) {
//                     apiUrl = `/salons?service=${encodeURIComponent(serviceFromURL)}`;
//                 }

//                 const response = await axiosInstance.get(apiUrl);

//                 if (response.data.success) {
//                     // Transform API data to match your UI structure
//                     const transformedSalons = response.data.salons.map(salon => {
//                         // Get first available service if specific service not found
//                         const salonService = salon.services?.[0] || {};

//                         return {
//                             id: salon._id,
//                             salonId: salon._id,
//                             name: salon.salonName || "Salon",
//                             service: serviceFromURL || salonService.name || "Service",
//                             timing: "10AM - 10PM", // Default timing
//                             price: salonService.price ? `₹${salonService.price}` : "₹500 - ₹2000",
//                             rating: salon.rating?.average || 4.0,
//                             club: salon.address?.area || "Area",
//                             image: salon.photos?.[0] || getDefaultSalonImage(),
//                             description: salon.description,
//                             address: `${salon.address?.street || ''}, ${salon.address?.city || ''}`,
//                             contact: salon.contact?.phone || "",
//                             facilities: salon.facilities || [],
//                             services: salon.services || []
//                         };
//                     });

//                     setSalons(transformedSalons);
//                     setFilteredSalons(transformedSalons);
//                 }
//             } catch (err) {
//                 console.error("Error fetching salons:", err);
//                 setError("Failed to load salons. Please try again.");

//                 // Fallback to static data if API fails
//                 const fallbackSalons = [
//                     {
//                         id: 1,
//                         name: "STYLE & SCISSORS",
//                         service: serviceFromURL || "Nail Art",
//                         timing: "10AM - 10PM",
//                         price: "2,000 - 5,000 Rs",
//                         rating: 4.5,
//                         club: "All star club",
//                         image: "/salonlist/service1.jpg",
//                     },
//                     // ... other fallback salons
//                 ];
//                 setSalons(fallbackSalons);
//                 setFilteredSalons(fallbackSalons);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSalons();
//     }, [searchParams]);

//     // Helper function for default salon image
//     const getDefaultSalonImage = () => {
//         const images = [
//             "/salonlist/service1.jpg",
//             "/salonlist/service3.jpg",
//             "/salonlist/service4.jpg",
//             "/salonlist/service5.jpg",
//             "/salonlist/service6.jpg",
//         ];
//         return images[Math.floor(Math.random() * images.length)];
//     };

//     // Filter salons based on search
//     useEffect(() => {
//         let filtered = [...salons];

//         // Apply search filter
//         if (searchQuery) {
//             filtered = filtered.filter(salon =>
//                 salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 salon.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 salon.club.toLowerCase().includes(searchQuery.toLowerCase())
//             );
//         }

//         setFilteredSalons(filtered);
//     }, [searchQuery, salons]);

//     // ✅ Added state to manage selected filters
//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         price: [],
//         rating: [],
//         discount: [],
//     });

//     const handleCheckboxChange = (category, value) => {
//         setSelectedFilters((prev) => {
//             const isSelected = prev[category].includes(value);
//             return {
//                 ...prev,
//                 [category]: isSelected
//                     ? prev[category].filter((v) => v !== value)
//                     : [...prev[category], value],
//             };
//         });
//     };

//     const handleReset = () => {
//         setSelectedFilters({
//             gender: [],
//             price: [],
//             rating: [],
//             discount: [],
//         });
//     };

//     const [isDateModalOpen, setIsDateModalOpen] = useState(false);
//     const [selectedDate, setSelectedDate] = useState("08/10/2025");
//     const [selectedTime, setSelectedTime] = useState("03:00 PM");

//     const [currentMonth, setCurrentMonth] = useState(9); // 0=Jan, 9=October
//     const [currentYear, setCurrentYear] = useState(2025);

//     const timeSlots = [
//         "10:00 AM", "11:00 AM", "12:00 PM",
//         "01:00 PM", "02:00 PM", "03:00 PM",
//         "04:00 PM", "05:00 PM", "06:00 PM",
//         "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
//     ];

//     // 🔹 Month Names
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     // 🔹 Generate Days for Current Month
//     const getDaysInMonth = (month, year) => {
//         const date = new Date(year, month + 1, 0);
//         return date.getDate();
//     };

//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);

//     // 🔹 Get first day of month (0=Sun, 1=Mon,...)
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const blankDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

//     // 🔹 Handle Month Change
//     const handlePrevMonth = () => {
//         if (currentMonth === 0) {
//             setCurrentMonth(11);
//             setCurrentYear(currentYear - 1);
//         } else {
//             setCurrentMonth(currentMonth - 1);
//         }
//     };

//     const handleNextMonth = () => {
//         if (currentMonth === 11) {
//             setCurrentMonth(0);
//             setCurrentYear(currentYear + 1);
//         } else {
//             setCurrentMonth(currentMonth + 1);
//         }
//     };

//     // 🔹 Handle Date Select
//     const handleDateSelect = (day) => {
//         const month = (currentMonth + 1).toString().padStart(2, "0");
//         const date = `${month}/${day.toString().padStart(2, "0")}/${currentYear}`;
//         setSelectedDate(date);
//     };

//     // Loading state
//     if (loading) {
//         return (
//             <div className="bg-[#f2e7d7] min-h-screen px-[20px] md:px-[130px] lg:px-[130px] py-6 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#617772]"></div>
//                     <p className="mt-4 text-gray-600">Loading salons...</p>
//                 </div>
//             </div>
//         );
//     }

//     // Error state
//     if (error && salons.length === 0) {
//         return (
//             <div className="bg-[#f2e7d7] min-h-screen px-[20px] md:px-[130px] lg:px-[130px] py-6 flex items-center justify-center">
//                 <div className="text-center text-red-600">
//                     <p>{error}</p>
//                     <button
//                         onClick={() => window.location.reload()}
//                         className="mt-4 bg-[#617772] text-white py-2 px-4 rounded-lg"
//                     >
//                         Retry
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-[#f2e7d7] px-[20px] md:px-[130px] lg:px-[130px] py-6">
//             {/* Header with selected service */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//                 <span className="text-2xl font-semibold text-[#1f1f1f] tracking-wide border-b-2 border-black">
//                     SALON LIST
//                 </span>


//             </div>

//             {/* Search Bar */}
//             <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl p-3 mt-5 items-center justify-between relative">
//                 <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px]">
//                     <Search className="w-5 h-5 text-black mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Search......"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
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
//                         <span>{selectedAtHomeOption || "At Home"}</span>
//                         <ChevronDown className="w-4 h-4 ml-1" />
//                     </button>

//                     {/* At Home Dropdown */}
//                     {isAtHomeModalOpen && (
//                         <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-48">
//                             <div className="p-2">
//                                 <button
//                                     onClick={() => {
//                                         setSelectedAtHomeOption("Salon");
//                                         setIsAtHomeModalOpen(false);
//                                     }}
//                                     className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
//                                 >
//                                     Salon
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         setSelectedAtHomeOption("Freelancer");
//                                         setIsAtHomeModalOpen(false);
//                                     }}
//                                     className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
//                                 >
//                                     Freelancer
//                                 </button>
//                             </div>
//                         </div>
//                     )}
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
//                         <div
//                             className="
//                             absolute md:top-12 md:right-0 
//                             bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50 
//                             w-[90vw] md:w-[630px] 
//                             p-5 

//                             -translate-x-54 md:translate-x-0
//                             top-[110%] md:top-12 
//                             max-h-[80vh] md:max-h-none 
//                             overflow-y-auto
//                             "
//                         >
//                             {/* Filters Row */}
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                                 {/* Gender Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Gender
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["Male", "Female"].map((gender) => (
//                                             <label key={gender} className="flex items-center">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="mr-2 w-3 h-3"
//                                                     checked={selectedFilters.gender.includes(gender)}
//                                                     onChange={() => handleCheckboxChange("gender", gender)}
//                                                 />
//                                                 <span className="text-sm">{gender}</span>
//                                             </label>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Price Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Price
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["1,000 - 2,000", "2,000 - 3,000", "3,000 - 4,000", "4,000 - 5,000", "5,000 - 6,000"].map(
//                                             (price) => (
//                                                 <label key={price} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.price.includes(price)}
//                                                         onChange={() => handleCheckboxChange("price", price)}
//                                                     />
//                                                     <span className="text-sm">{price}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Customer Rating Section */}
//                                 <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Customer Rating
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["4.5 - 5 Ratings", "4 - 4.5 Ratings", "3.5 - 4 Ratings", "3 - 3.5 Ratings", "2 - 3 Ratings"].map(
//                                             (rating) => (
//                                                 <label key={rating} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.rating.includes(rating)}
//                                                         onChange={() => handleCheckboxChange("rating", rating)}
//                                                     />
//                                                     <span className="text-sm">{rating}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Discount Section */}
//                                 <div>
//                                     <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
//                                         Discount
//                                     </h4>
//                                     <div className="space-y-1">
//                                         {["10% Discount", "20% Discount", "30% Discount", "40% Discount", "50% Discount"].map(
//                                             (discount) => (
//                                                 <label key={discount} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="mr-2 w-3 h-3"
//                                                         checked={selectedFilters.discount.includes(discount)}
//                                                         onChange={() => handleCheckboxChange("discount", discount)}
//                                                     />
//                                                     <span className="text-sm">{discount}</span>
//                                                 </label>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Bottom Buttons */}
//                             <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600 sticky bottom-0 bg-white pt-3">
//                                 <button
//                                     className="flex items-center gap-1 hover:text-gray-800"
//                                     onClick={handleReset}
//                                 >
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


//             {/* Salon Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//                 {filteredSalons.length === 0 ? (
//                     <div className="col-span-2 text-center py-12">
//                         <p className="text-gray-500">No salons found matching your criteria.</p>
//                     </div>
//                 ) : (
//                     filteredSalons.map((salon) => (
//                         <div
//                             key={salon.id}
//                             className="bg-[#617772] rounded-xl overflow-hidden shadow-md relative border border-gray-200"
//                         >
//                             {/* Image Section */}
//                             <div className="relative h-56 w-full">
//                                 <Link href={`/salon/${salon.salonId || salon.id}`} className="block w-full h-full">
//                                     <Image
//                                         src={salon.image}
//                                         alt={salon.service}
//                                         fill
//                                         className="object-cover rounded-t-lg cursor-pointer"
//                                     />
//                                 </Link>

//                                 {/* Popular Badge */}
//                                 <div className="w-[180px] h-[34px] absolute top-0 right-0 text-white text-sm font-semibold text-center py-2 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
//                                     Popular
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="px-10 py-6 text-white font-['Inria_Serif']">
//                                 {/* Name + Rating in One Row */}
//                                 <div className="flex items-center justify-between mb-2">
//                                     <h2
//                                         className="font-bold text-[24px] text-[#F6EFE4] leading-[100%] tracking-[0] uppercase"
//                                     >
//                                         {salon.name}
//                                     </h2>

//                                     <p className="text-yellow-400 text-sm font-medium flex items-center gap-1">
//                                         ⭐ {salon.rating} Ratings
//                                     </p>
//                                 </div>

//                                 {/* Details */}
//                                 <p
//                                     className="font-bold text-[20px] leading-[100%] tracking-[0] capitalize text-[#F6EFE4] py-1 mb-2"
//                                 >
//                                     Services Available : <span className="font-medium">{salon.service}</span>
//                                 </p>

//                                 <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-2">
//                                     Timing: {salon.timing}
//                                 </p>
//                                 <p className="font-normal text-[16px] text-[#F6EFE4] leading-[100%] tracking-[0] capitalize mb-4">
//                                     Prices Range: {salon.price}
//                                 </p>

//                                 {/* Bottom Row — Club + Button */}
//                                 <div className="flex items-center justify-between mt-2">
//                                     <p className="flex items-center gap-1 font-bold text-[16px] leading-[100%] tracking-[0]">
//                                         <MapPin className="w-4 h-4" /> {salon.club}
//                                     </p>

//                                     <button
//                                         onClick={() => setIsBookingModalOpen(true)}
//                                         className="border border-white text-white rounded-full px-5 py-1 text-sm hover:bg-white hover:text-[#425550] transition-all duration-300"
//                                     >
//                                         Book us
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {/* Booking Modal - Same as FreelancerList */}
//             {isBookingModalOpen && (
//                 <div className="fixed inset-0  flex items-center justify-center z-50 px-4">
//                     <div className="relative bg-[#637571] w-[890px] rounded-xl shadow-2xl overflow-hidden">

//                         {/* Close Button */}
//                         <button
//                             onClick={() => setIsBookingModalOpen(false)}
//                             className="absolute top-4 right-4 text-[#F6EFE4] hover:text-white transition"
//                         >
//                             <X size={22} />
//                         </button>

//                         {/* Modal Inner */}
//                         <div className="px-8 pt-8">

//                             {/* Header */}
//                             <h2 className="text-[#F6EFE4] text-3xl font-semibold font-['Inria_Serif'] mb-2">
//                                 Book Appointment
//                             </h2>
//                             <hr className="border-[#F6EFE4]/40 mb-4" />

//                             {/* Confirm Section */}
//                             <h3 className="text-[#dcd8d3] text-lg mb-4 font-['Inria_Serif']">
//                                 Confirm Your Services
//                             </h3>

//                             {/* Service Info */}
//                             <div className="bg-transparent mb-2 text-[#F6EFE4] leading-relaxed">
//                                 <span className="font-medium">
//                                     Waxing / Back Or Stomach For Female (Rica) / At Home
//                                 </span>
//                                 <span className="ml-2 text-[13px] bg-[#F6EFE4] text-[#5C6B63] px-2 py-[1px] rounded-md font-semibold">
//                                     Female
//                                 </span>
//                             </div>

//                             {/* Price + Duration */}
//                             <div className="flex items-center gap-5 text-[#F6EFE4] mb-2">
//                                 <span className="text-[17px] font-semibold">₹500</span>
//                                 <div className="flex items-center text-sm opacity-80">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-4 h-4 mr-1"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={1.8}
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
//                                         <circle cx="12" cy="12" r="9" />
//                                     </svg>
//                                     Approx. 45min
//                                 </div>
//                             </div>

//                             {/* Date Section */}
//                             {/* Date Section */}
//                             <div
//                                 onClick={() => setIsDateModalOpen(true)}
//                                 className="flex items-center text-[#F6EFE4] text-[15px] mb-5 cursor-pointer hover:opacity-80 transition"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth={1.6}
//                                     stroke="currentColor"
//                                     className="w-5 h-5 mr-2"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M8 7V3m8 4V3m-9 8h10m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
//                                     />
//                                 </svg>
//                                 {selectedDate} & {selectedTime}
//                             </div>

//                             {/* Date Selection Modal */}
//                             {isDateModalOpen && (
//                                 <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//                                     <div className="bg-[#E9E3D9] rounded-2xl shadow-2xl w-full max-w-3xl px-[10px] py-[21px] relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsDateModalOpen(false)}
//                                             className="absolute top-3 right-4 text-[#5C6B63] hover:text-black transition"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth={2}
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                             </svg>
//                                         </button>

//                                         {/* Calendar + Slots */}
//                                         <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#d1c7b9]">
//                                             {/* Left - Calendar */}
//                                             <div className="flex-1 p-5">
//                                                 {/* Month Header */}
//                                                 <div className="flex justify-between items-center bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold px-4">
//                                                     <button onClick={handlePrevMonth} className="hover:text-gray-200">
//                                                         ‹
//                                                     </button>
//                                                     <span>
//                                                         {months[currentMonth]} {currentYear}
//                                                     </span>
//                                                     <button onClick={handleNextMonth} className="hover:text-gray-200">
//                                                         ›
//                                                     </button>
//                                                 </div>

//                                                 {/* Calendar Grid */}
//                                                 <div className="grid grid-cols-7 text-center text-sm text-[#5C5C5C]">
//                                                     {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
//                                                         <div key={day} className="font-medium py-1">
//                                                             {day}
//                                                         </div>
//                                                     ))}

//                                                     {/* Blank spaces for start of month */}
//                                                     {Array.from({ length: blankDays }).map((_, i) => (
//                                                         <div key={`blank-${i}`} className="py-2" />
//                                                     ))}

//                                                     {/* Actual Days */}
//                                                     {Array.from({ length: daysInMonth }).map((_, i) => {
//                                                         const day = i + 1;
//                                                         const isSelected = selectedDate === `${(currentMonth + 1)
//                                                             .toString()
//                                                             .padStart(2, "0")}/${day.toString().padStart(2, "0")}/${currentYear}`;

//                                                         return (
//                                                             <div
//                                                                 key={day}
//                                                                 onClick={() => handleDateSelect(day)}
//                                                                 className={`py-2 rounded-md cursor-pointer mx-auto w-8 h-8 flex items-center justify-center transition
//                           ${isSelected
//                                                                         ? "bg-[#5F3F31] text-white"
//                                                                         : "hover:bg-[#E7DCCC] text-[#5C5C5C]"
//                                                                     }`}
//                                                             >
//                                                                 {day}
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>

//                                             {/* Right - Slots */}
//                                             <div className="flex-1 p-5">
//                                                 <div className="bg-[#5F3F31] text-white text-center py-2 rounded-md mb-4 font-semibold">
//                                                     Slots Available
//                                                 </div>

//                                                 <div className="grid grid-cols-3 gap-3">
//                                                     {timeSlots.map((slot) => (
//                                                         <button
//                                                             key={slot}
//                                                             onClick={() => setSelectedTime(slot)}
//                                                             className={`py-2 rounded-md text-sm font-medium border transition-all duration-200 ${selectedTime === slot
//                                                                 ? "bg-[#5F3F31] text-white border-[#70513D]"
//                                                                 : "bg-white text-[#70513D] border-[#C9BFAF] hover:bg-[#E7DCCC]"
//                                                                 }`}
//                                                         >
//                                                             {slot}
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Add More Services */}
//                             <div className="flex justify-center">
//                                 <a
//                                     href="/add-services" // 👉 yahan apna actual page path daal dena
//                                     className="text-[#F6EFE4] underline underline-offset-2 hover:opacity-90 text-sm mb-6"
//                                 >
//                                     + Add More Services
//                                 </a>
//                             </div>


//                             {/* White Box - Price Summary */}
//                             <div className="bg-[#F6EFE4] rounded-t-xl px-6 py-5 text-[#1f1f1f]">
//                                 <div className="flex justify-between mb-2 text-[15px]">
//                                     <span>Waxing</span>
//                                     <span>₹400</span>
//                                 </div>
//                                 <div className="flex justify-between mb-4 text-[15px]">
//                                     <span>Tax</span>
//                                     <span>₹50</span>
//                                 </div>
//                                 <hr className="border-[#a7a7a7] mb-4" />

//                                 {/* Total Section */}
//                                 <div className="flex justify-between items-center">
//                                     <h4 className="text-lg font-semibold">Total Amount</h4>
//                                     <span className="text-lg font-semibold">₹450</span>
//                                 </div>

//                                 {/* Pay Button */}
//                                 <div className="flex justify-end mt-5">
//                                     <button className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
//                                         Pay
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// }






"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, SlidersHorizontal, Home, X, Funnel, ChevronDown } from "lucide-react";
import axiosInstance from "../axios/axiosinstance";

export default function SalonList() {
    const searchParams = useSearchParams();
    const [isAtHomeModalOpen, setIsAtHomeModalOpen] = useState(false);
    const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
    const [selectedAtHomeOption, setSelectedAtHomeOption] = useState("");
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // API data states
    const [salons, setSalons] = useState([]);
    const [filteredSalons, setFilteredSalons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedService, setSelectedService] = useState("");
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [userLocation, setUserLocation] = useState(null);

    // Filter states
    const [activeFilters, setActiveFilters] = useState({
        facility: null,
        name: null,
        service: null,
        minPrice: null,
        maxPrice: null,
        location: null,
        radius: 3000 // Default radius in meters
    });

    const serviceFromURL = searchParams.get('service') || "";
    const nameFromURL = searchParams.get('name') || "";



    // Fetch user location from localStorage on component mount
    useEffect(() => {
        const storedLat = localStorage.getItem('userLat');
        const storedLng = localStorage.getItem('userLng');

        if (storedLat && storedLng) {
            setUserLocation({
                lat: parseFloat(storedLat),
                lng: parseFloat(storedLng)
            });
        } else {
            // Fallback to default coordinates
            setUserLocation({
                lat: 26.799775,
                lng: 75.869812
            });
        }
    }, []);


    useEffect(() => {
        if (nameFromURL) {
            setActiveFilters(prev => ({
                ...prev,
                name: nameFromURL,
                facility: null,
                service: null,
                minPrice: null,
                maxPrice: null,
                location: null
            }));
        } else if (serviceFromURL) {
            setActiveFilters(prev => ({
                ...prev,
                service: serviceFromURL,
                facility: null,
                name: null,
                minPrice: null,
                maxPrice: null,
                location: null
            }));
        }
    }, [nameFromURL, serviceFromURL]);

    // Fetch salons from API with filters
    useEffect(() => {
        const fetchSalons = async () => {
            try {
                setLoading(true);
                let apiUrl = '/salons';
                const queryParams = [];

                // Build query parameters based on active filters
                if (activeFilters.facility) {
                    queryParams.push(`facility=${encodeURIComponent(activeFilters.facility)}`);
                }

                // if (activeFilters.name) {
                //     queryParams.push(`name=${encodeURIComponent(activeFilters.name)}`);
                // }

                if (activeFilters.name) {
                    queryParams.push(`name=${encodeURIComponent(activeFilters.name)}`);
                } else if (nameFromURL) {
                    // If name comes from URL, add it to filters
                    queryParams.push(`name=${encodeURIComponent(nameFromURL)}`);
                }

                if (activeFilters.service) {
                    queryParams.push(`service=${encodeURIComponent(activeFilters.service)}`);
                } else if (serviceFromURL) {
                    queryParams.push(`service=${encodeURIComponent(serviceFromURL)}`);
                }

                if (activeFilters.minPrice !== null && activeFilters.maxPrice !== null) {
                    queryParams.push(`minPrice=${activeFilters.minPrice}`);
                    queryParams.push(`maxPrice=${activeFilters.maxPrice}`);
                }

                if (activeFilters.location && userLocation) {
                    queryParams.push(`lat=${userLocation.lat}`);
                    queryParams.push(`lng=${userLocation.lng}`);
                    queryParams.push(`radius=${activeFilters.radius}`);
                }

                // Add query params to URL if any exist
                if (queryParams.length > 0) {
                    apiUrl += `?${queryParams.join('&')}`;
                }

                const response = await axiosInstance.get(apiUrl);

                if (response.data.success) {
                    // Transform API data to match your UI structure
                    const transformedSalons = response.data.salons.map(salon => {
                        // Find the specific service if searching by service
                        let salonService = salon.services?.[0] || {};

                        if (activeFilters.service) {
                            const foundService = salon.services?.find(s =>
                                s.name.toLowerCase().includes(activeFilters.service.toLowerCase()) ||
                                activeFilters.service.toLowerCase().includes(s.name.toLowerCase())
                            );
                            if (foundService) salonService = foundService;
                        } else if (serviceFromURL) {
                            const foundService = salon.services?.find(s =>
                                s.name.toLowerCase().includes(serviceFromURL.toLowerCase()) ||
                                serviceFromURL.toLowerCase().includes(s.name.toLowerCase())
                            );
                            if (foundService) salonService = foundService;
                        }

                        return {
                            id: salon._id,
                            salonId: salon._id,
                            name: salon.salonName || "Salon",
                            service: salonService.name || "Service",
                            timing: "10AM - 10PM", // Default timing
                            price: salonService.price ? `₹${salonService.price}` :
                                salonService.discountPrice ? `₹${salonService.discountPrice} - ₹${salonService.price}` :
                                    "₹500 - ₹2000",
                            rating: salon.rating?.average || 4.0,
                            club: salon.address?.area || "Area",
                            image: salon.photos?.[0] || getDefaultSalonImage(),
                            description: salon.description,
                            address: `${salon.address?.street || ''}, ${salon.address?.city || ''}`,
                            contact: salon.contact?.phone || "",
                            facilities: salon.facilities || [],
                            services: salon.services || []
                        };
                    });

                    setSalons(transformedSalons);
                    setFilteredSalons(transformedSalons);
                }
            } catch (err) {
                console.error("Error fetching salons:", err);
                setError("Failed to load salons. Please try again.");

                // Fallback to static data if API fails
                const fallbackSalons = [
                    {
                        id: 1,
                        name: "STYLE & SCISSORS",
                        service: serviceFromURL || "Nail Art",
                        timing: "10AM - 10PM",
                        price: "2,000 - 5,000 Rs",
                        rating: 4.5,
                        club: "All star club",
                        image: "/salonlist/service1.jpg",
                    },
                    {
                        id: 2,
                        name: "SALON ROYALE",
                        service: "Hair Spa",
                        timing: "9AM - 9PM",
                        price: "1,500 - 4,000 Rs",
                        rating: 4.3,
                        club: "Luxury club",
                        image: "/salonlist/service3.jpg",
                    },
                    {
                        id: 3,
                        name: "GLAMOUR LOUNGE",
                        service: "Facial",
                        timing: "10AM - 8PM",
                        price: "1,000 - 3,500 Rs",
                        rating: 4.7,
                        club: "Elite club",
                        image: "/salonlist/service4.jpg",
                    },
                    {
                        id: 4,
                        name: "CHIC CUTS",
                        service: "Haircut",
                        timing: "8AM - 10PM",
                        price: "500 - 2,500 Rs",
                        rating: 4.2,
                        club: "Trendy club",
                        image: "/salonlist/service5.jpg",
                    },
                ];
                setSalons(fallbackSalons);
                setFilteredSalons(fallbackSalons);
            } finally {
                setLoading(false);
            }
        };

        fetchSalons();
    }, [searchParams, activeFilters, serviceFromURL, nameFromURL, userLocation]);

    // Helper function for default salon image
    const getDefaultSalonImage = () => {
        const images = [
            "/salonlist/service1.jpg",
            "/salonlist/service3.jpg",
            "/salonlist/service4.jpg",
            "/salonlist/service5.jpg",
            "/salonlist/service6.jpg",
        ];
        return images[Math.floor(Math.random() * images.length)];
    };

    // Filter salons based on search
    useEffect(() => {
        let filtered = [...salons];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(salon =>
                salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                salon.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                salon.club.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredSalons(filtered);
    }, [searchQuery, salons]);

    // ✅ Handle filter application
    const applyFilter = (filterType, value) => {
        setActiveFilters(prev => {
            const newFilters = { ...prev };

            switch (filterType) {
                case 'facility':
                    newFilters.facility = value;
                    newFilters.name = null;
                    newFilters.service = null;
                    newFilters.minPrice = null;
                    newFilters.maxPrice = null;
                    newFilters.location = null;
                    break;

                case 'name':
                    newFilters.name = value;
                    newFilters.facility = null;
                    newFilters.service = null;
                    newFilters.minPrice = null;
                    newFilters.maxPrice = null;
                    newFilters.location = null;
                    break;

                case 'service':
                    newFilters.service = value;
                    newFilters.facility = null;
                    newFilters.name = null;
                    newFilters.minPrice = null;
                    newFilters.maxPrice = null;
                    newFilters.location = null;
                    break;


                    
                case 'price':
                    const [min, max] = value.split('-').map(v => parseInt(v.trim()));
                    newFilters.minPrice = min;
                    newFilters.maxPrice = max;
                    newFilters.facility = null;
                    newFilters.name = null;
                    newFilters.service = null;
                    newFilters.location = null;
                    break;

                case 'location':
                    newFilters.location = true;
                    newFilters.facility = null;
                    newFilters.name = null;
                    newFilters.service = null;
                    newFilters.minPrice = null;
                    newFilters.maxPrice = null;
                    break;

                case 'clear':
                    return {
                        facility: null,
                        name: null,
                        service: null,
                        minPrice: null,
                        maxPrice: null,
                        location: null,
                        radius: 3000
                    };
            }

            return newFilters;
        });

        // Close filter modals
        setIsAtHomeModalOpen(false);
        setIsMoreFiltersModalOpen(false);
        setIsLocationModalOpen(false);
    };

    // ✅ Added state to manage selected filters for UI
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
        applyFilter('clear', null);
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

    // Loading state
    if (loading) {
        return (
            <div className="bg-[#f2e7d7] min-h-screen px-[20px] md:px-[130px] lg:px-[130px] py-6 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#617772]"></div>
                    <p className="mt-4 text-gray-600">Loading salons...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error && salons.length === 0) {
        return (
            <div className="bg-[#f2e7d7] min-h-screen px-[20px] md:px-[130px] lg:px-[130px] py-6 flex items-center justify-center">
                <div className="text-center text-red-600">
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-[#617772] text-white py-2 px-4 rounded-lg"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f2e7d7] px-[20px] md:px-[130px] lg:px-[130px] py-6">
            {/* Header with selected service */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <span className="text-2xl font-semibold text-[#1f1f1f] tracking-wide border-b-2 border-black">
                    SALON LIST
                </span>

                {/* Active Filters Display */}
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {activeFilters.facility && (
                        <span className="bg-[#617772] text-white px-3 py-1 rounded-full text-sm">
                            Facility: {activeFilters.facility}
                        </span>
                    )}
                    {activeFilters.name && (
                        <span className="bg-[#617772] text-white px-3 py-1 rounded-full text-sm">
                            Name: {activeFilters.name}
                        </span>
                    )}
                    {activeFilters.service && (
                        <span className="bg-[#617772] text-white px-3 py-1 rounded-full text-sm">
                            Service: {activeFilters.service}
                        </span>
                    )}
                    {activeFilters.minPrice && activeFilters.maxPrice && (
                        <span className="bg-[#617772] text-white px-3 py-1 rounded-full text-sm">
                            Price: ₹{activeFilters.minPrice} - ₹{activeFilters.maxPrice}
                        </span>
                    )}
                    {activeFilters.location && (
                        <span className="bg-[#617772] text-white px-3 py-1 rounded-full text-sm">
                            Nearby ({activeFilters.radius}m)
                        </span>
                    )}
                    {(activeFilters.facility || activeFilters.name || activeFilters.service || activeFilters.minPrice || activeFilters.location) && (
                        <button
                            onClick={() => applyFilter('clear', null)}
                            className="text-red-500 text-sm underline"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-wrap gap-3 bg-[#d9b896] rounded-xl p-3 mt-5 items-center justify-between relative">
                <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1 min-w-[200px]">
                    <Search className="w-5 h-5 text-black mr-2" />
                    <input
                        type="text"
                        placeholder="Search by salon name, service, or area..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="outline-none text-sm flex-1 bg-transparent text-black"
                    />
                </div>

                {/* At Home Button with Dropdown - Now for Facilities */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsAtHomeModalOpen(!isAtHomeModalOpen);
                            setIsMoreFiltersModalOpen(false);
                            setIsLocationModalOpen(false);
                        }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                    >
                        <Home className="w-4 h-4" />
                        <span>Facilities</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {/* Facilities Dropdown */}
                    {isAtHomeModalOpen && (
                        <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-48">
                            <div className="p-2">
                                <button
                                    onClick={() => applyFilter('facility', 'AC')}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    AC
                                </button>
                                <button
                                    onClick={() => applyFilter('facility', 'Parking')}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    Parking
                                </button>
                                <button
                                    onClick={() => applyFilter('facility', 'WiFi')}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    WiFi
                                </button>
                                <button
                                    onClick={() => applyFilter('facility', 'TV')}
                                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md text-sm"
                                >
                                    TV
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Location Button */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsLocationModalOpen(!isLocationModalOpen);
                            setIsAtHomeModalOpen(false);
                            setIsMoreFiltersModalOpen(false);
                        }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
                    >
                        <MapPin className="w-4 h-4" /> Location
                    </button>

                    {/* Location Modal */}
                    {isLocationModalOpen && (
                        <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 w-64 p-4">
                            <h4 className="font-semibold mb-3">Find Nearby Salons</h4>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm mb-1">Radius (meters)</label>
                                    <select
                                        value={activeFilters.radius}
                                        onChange={(e) => {
                                            setActiveFilters(prev => ({
                                                ...prev,
                                                radius: parseInt(e.target.value)
                                            }));
                                        }}
                                        className="w-full border rounded-lg px-3 py-2 text-sm"
                                    >
                                        <option value="1000">1 km</option>
                                        <option value="3000">3 km</option>
                                        <option value="5000">5 km</option>
                                        <option value="10000">10 km</option>
                                    </select>
                                </div>
                                <button
                                    onClick={() => applyFilter('location', true)}
                                    className="w-full bg-[#617772] text-white py-2 rounded-lg text-sm hover:bg-[#4a5f5a]"
                                >
                                    Find Nearby Salons
                                </button>
                                <p className="text-xs text-gray-500">
                                    Using location: {userLocation ? `${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)}` : 'Not available'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* More Filters Button with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsMoreFiltersModalOpen(!isMoreFiltersModalOpen);
                            setIsAtHomeModalOpen(false);
                            setIsLocationModalOpen(false);
                        }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                    >
                        <Funnel className="w-4 h-4" /> More Filters
                    </button>

                    {/* More Filters Dropdown */}
                    {isMoreFiltersModalOpen && (
                        <div
                            className="
                            absolute md:top-12 md:right-0 
                            bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50 
                            w-[90vw] md:w-[630px] 
                            p-5 
                            
                            -translate-x-54 md:translate-x-0
                            top-[110%] md:top-12 
                            max-h-[80vh] md:max-h-none 
                            overflow-y-auto
                            "
                        >
                            {/* Filters Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Gender Section */}
                                <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
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
                                <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
                                        Price Range (₹)
                                    </h4>
                                    <div className="space-y-1">
                                        {["300-600", "600-1000", "1000-2000", "2000-3000", "3000-5000"].map(
                                            (price) => (
                                                <button
                                                    key={price}
                                                    onClick={() => applyFilter('price', price)}
                                                    className="w-full text-left px-1 py-1 hover:bg-gray-100 rounded text-sm"
                                                >
                                                    ₹{price}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Customer Rating Section */}
                                <div className="border-b md:border-b-0 md:border-r md:pr-4 pb-3 md:pb-0">
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
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

                                {/* Services Section */}
                                <div>
                                    <h4 className="font-['Inria_Serif'] font-normal text-[16px] text-[#617772] mb-3">
                                        Services
                                    </h4>
                                    <div className="space-y-1">
                                        {["Haircut", "Facial", "SPA", "Waxing"].map(
                                            (service) => (
                                                <button
                                                    key={service}
                                                    onClick={() => applyFilter('service', service)}
                                                    className="w-full text-left px-1 py-1 hover:bg-gray-100 rounded text-sm"
                                                >
                                                    {service}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            <div className="flex justify-end items-center gap-4 mt-4 text-sm text-gray-600 sticky bottom-0 bg-white pt-3">
                                <button
                                    className="flex items-center gap-1 hover:text-gray-800"
                                    onClick={handleReset}
                                >
                                    <span>⟳</span> Reset All
                                </button>
                                <button
                                    onClick={() => setIsMoreFiltersModalOpen(false)}
                                    className="flex items-center gap-1 text-green-600 hover:text-green-700"
                                >
                                    <span>✔</span> Done
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Salon Cards - Same as before */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {filteredSalons.length === 0 ? (
                    <div className="col-span-2 text-center py-12">
                        <p className="text-gray-500">No salons found matching your criteria.</p>
                    </div>
                ) : (
                    filteredSalons.map((salon) => (
                        <div
                            key={salon.id}
                            className="bg-[#617772] rounded-xl overflow-hidden shadow-md relative border border-gray-200"
                        >
                            {/* Image Section */}
                            <div className="relative h-56 w-full">
                                <Link href={`/salon/${salon.salonId || salon.id}`} className="block w-full h-full">
                                    <Image
                                        src={salon.image}
                                        alt={salon.service}
                                        fill
                                        className="object-cover rounded-t-lg cursor-pointer"
                                    />
                                </Link>

                                {/* Popular Badge */}
                                <div className="w-[180px] h-[34px] absolute top-0 right-0 text-white text-sm font-semibold text-center py-2 rounded-bl-lg bg-[linear-gradient(90deg,rgba(202,60,60,0)_6.5%,#FF3636_70.41%)]">
                                    Popular
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="px-10 py-6 text-white font-['Inria_Serif']">
                                {/* Name + Rating in One Row */}
                                <div className="flex items-center justify-between mb-2">
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
                                    <p className="flex items-center gap-1 font-bold text-[16px] leading-[100%] tracking-[0]">
                                        <MapPin className="w-4 h-4" /> {salon.club}
                                    </p>

                                    <Link
                                        href={`/salon/${salon.salonId || salon.id}`}
                                        className="border border-white text-white rounded-full px-5 py-1 text-sm hover:bg-white hover:text-[#425550] transition-all duration-300"
                                    >
                                        Book us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Booking Modal - Same as before */}
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
                            <h2 className="text-[#F6EFE4] text-3xl font-semibold font-['Inria_Serif'] mb-2">
                                Book Appointment
                            </h2>
                            <hr className="border-[#F6EFE4]/40 mb-4" />

                            {/* Confirm Section */}
                            <h3 className="text-[#dcd8d3] text-lg mb-4 font-['Inria_Serif']">
                                Confirm Your Services
                            </h3>

                            {/* Service Info */}
                            <div className="bg-transparent mb-2 text-[#F6EFE4] leading-relaxed">
                                <span className="font-medium">
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
                                                            className={`py-2 rounded-md text-sm font-medium border transition-all duration-200 ${selectedTime === slot
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