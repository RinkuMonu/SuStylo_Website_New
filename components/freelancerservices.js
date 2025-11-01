// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// export default function FreelancerServicesSection() {
//   // Separate states for each section
//   const [openFemaleCategory, setOpenFemaleCategory] = useState(null);
//   const [openMaleCategory, setOpenMaleCategory] = useState(null);
//   const [cart, setCart] = useState([]);

//   const femaleServices = [
//     {
//       title: "Hair Services",
//       items: [
//          { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//     ],
//     },
//     {
//       title: "Waxing",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//     {
//       title: "Pedicure",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//     {
//       title: "Body Care",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//     {
//       title: "Spa Services",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//     {
//       title: "Threading",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//     {
//       title: "Manicure",
//       items: [
//         { name: "Full Body For Female (Rica)", price: 1200 },
//         { name: "Full Legs (Rica)", price: 1200 },
//         { name: "Full Hands (Rica)", price: 1200 },
//         { name: "Full Legs (Normal)", price: 1200 },
//         { name: "Full Hands (Normal)", price: 1200 },
//       ],
//     },
//   ];

//   const maleServices = [
//     {
//       title: "Hair Services",
//       items: [
//         { name: "Hair Cut", price: 500 },
//         { name: "Hair Wash", price: 300 },
//       ],
//     },
//     {
//       title: "Beard & Grooming",
//       items: [
//         { name: "Beard Trim", price: 250 },
//         { name: "Beard Styling", price: 400 },
//       ],
//     },
//     {
//       title: "Facial",
//       items: [
//         { name: "Basic Facial", price: 800 },
//         { name: "Luxury Facial", price: 1200 },
//       ],
//     },
//   ];


//   const toggleFemaleCategory = (title) => {
//     setOpenFemaleCategory(openFemaleCategory === title ? null : title);
//   };

//   const toggleMaleCategory = (title) => {
//     setOpenMaleCategory(openMaleCategory === title ? null : title);
//   };

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const existing = prev.find((p) => p.name === item.name);
//       if (existing) {
//         return prev.map((p) =>
//           p.name === item.name ? { ...p, qty: p.qty + 1 } : p
//         );
//       }
//       return [...prev, { ...item, qty: 1 }];
//     });
//   };

//   const updateQty = (name, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.name === name
//             ? { ...item, qty: Math.max(item.qty + delta, 0) }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

//   return (
//     <section className="bg-[#f6efe4] py-10">
//       <h2 className="text-3xl font-bold mb-8">Services</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Female Section */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4 underline">For Female</h3>
//           <div className="space-y-3">
//             {femaleServices.map((cat, idx) => (
//               <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
//                 <button
//                   onClick={() => toggleFemaleCategory(cat.title)}
//                   className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
//                 >
//                   {cat.title}
//                   {openFemaleCategory === cat.title ? (
//                     <Minus size={18} />
//                   ) : (
//                     <Plus size={18} />
//                   )}
//                 </button>

//                 {openFemaleCategory === cat.title && cat.items?.length > 0 && (
//                   <div className="bg-[#FAEFDE] divide-y text-gray-700">
//                     {cat.items.map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
//                       >
//                         <span>{item.name}</span>
//                         <div className="flex items-center gap-3">
//                           <span className="text-sm font-medium">
//                             ₹{item.price}
//                           </span>
//                           <button
//                             onClick={() => addToCart(item)}
//                             className="text-[#00796b] font-bold"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Male Section */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4 underline">For Male</h3>
//           <div className="space-y-3">
//             {maleServices.map((cat, idx) => (
//               <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
//                 <button
//                   onClick={() => toggleMaleCategory(cat.title)}
//                   className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
//                 >
//                   {cat.title}
//                   {openMaleCategory === cat.title ? (
//                     <Minus size={18} />
//                   ) : (
//                     <Plus size={18} />
//                   )}
//                 </button>

//                 {openMaleCategory === cat.title && cat.items?.length > 0 && (
//                   <div className="bg-[#FAEFDE] divide-y text-gray-700">
//                     {cat.items.map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
//                       >
//                         <span>{item.name}</span>
//                         <div className="flex items-center gap-3">
//                           <span className="text-sm font-medium">
//                             ₹{item.price}
//                           </span>
//                           <button
//                             onClick={() => addToCart(item)}
//                             className="text-[#00796b] font-bold"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Cart Section */}
//         <div className="">
//           <h3 className="font-semibold text-lg mb-4 underline sticky top-20">Cart</h3>
//           <div className="bg-[#F6EFE4] rounded-lg shadow-[0_4px_4px_0_#00000040] p-4 border border-[#CBAA87] sticky top-20">
//             {cart.length === 0 ? (
//               <p className="text-gray-500 text-sm">No items added</p>
//             ) : (
//               <div className="space-y-3">
//                 {cart.map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center text-sm"
//                   >
//                     <span className="w-1/2">{item.name}</span>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => updateQty(item.name, -1)}
//                         className="border px-2 rounded"
//                       >
//                         -
//                       </button>
//                       <span>{item.qty}</span>
//                       <button
//                         onClick={() => updateQty(item.name, 1)}
//                         className="border px-2 rounded"
//                       >
//                         +
//                       </button>
//                       <span className="font-semibold">₹{item.price}</span>
//                     </div>
//                   </div>
//                 ))}

//                 <Link
//                   href="/"
//                   className="flex justify-between items-center w-full bg-[#5d7d75] text-white py-2 px-4 rounded-md hover:bg-[#49635d] transition-all"
//                 >
//                   <span>₹{total}</span>
//                   <span>View Cart</span>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Plus, Minus, X } from "lucide-react";

export default function FreelancerServicesSection() {
  // Separate states for each section
  const [openFemaleCategory, setOpenFemaleCategory] = useState(null);
  const [openMaleCategory, setOpenMaleCategory] = useState(null);
  const [cart, setCart] = useState([]);
  
  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("01/01/2024");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  // Calendar states
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const femaleServices = [
    {
      title: "Hair Services",
      items: [
         { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
    ],
    },
    {
      title: "Waxing",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Pedicure",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Body Care",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Spa Services",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Threading",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Manicure",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
  ];

  const maleServices = [
    {
      title: "Hair Services",
      items: [
        { name: "Hair Cut", price: 500 },
        { name: "Hair Wash", price: 300 },
      ],
    },
    {
      title: "Beard & Grooming",
      items: [
        { name: "Beard Trim", price: 250 },
        { name: "Beard Styling", price: 400 },
      ],
    },
    {
      title: "Facial",
      items: [
        { name: "Basic Facial", price: 800 },
        { name: "Luxury Facial", price: 1200 },
      ],
    },
  ];

  // Calendar data
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
    "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  // Calendar functions
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  const blankDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

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

  const handleDateSelect = (day) => {
    const formattedDate = `${(currentMonth + 1).toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${currentYear}`;
    setSelectedDate(formattedDate);
  };

  const toggleFemaleCategory = (title) => {
    setOpenFemaleCategory(openFemaleCategory === title ? null : title);
  };

  const toggleMaleCategory = (title) => {
    setOpenMaleCategory(openMaleCategory === title ? null : title);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === item.name);
      if (existing) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (name, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, qty: Math.max(item.qty + delta, 0) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <section className="bg-[#f6efe4] py-10">
      <h2 className="text-3xl font-bold mb-8">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Female Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">For Female</h3>
          <div className="space-y-3">
            {femaleServices.map((cat, idx) => (
              <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
                <button
                  onClick={() => toggleFemaleCategory(cat.title)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
                >
                  {cat.title}
                  {openFemaleCategory === cat.title ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {openFemaleCategory === cat.title && cat.items?.length > 0 && (
                  <div className="bg-[#FAEFDE] divide-y text-gray-700">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-[#00796b] font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Male Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">For Male</h3>
          <div className="space-y-3">
            {maleServices.map((cat, idx) => (
              <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
                <button
                  onClick={() => toggleMaleCategory(cat.title)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
                >
                  {cat.title}
                  {openMaleCategory === cat.title ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {openMaleCategory === cat.title && cat.items?.length > 0 && (
                  <div className="bg-[#FAEFDE] divide-y text-gray-700">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-[#00796b] font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="">
          <h3 className="font-semibold text-lg mb-4 underline sticky top-20">Cart</h3>
          <div className="bg-[#F6EFE4] rounded-lg shadow-[0_4px_4px_0_#00000040] p-4 border border-[#CBAA87] sticky top-20">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">No items added</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="w-1/2">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.name, -1)}
                        className="border px-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.name, 1)}
                        className="border px-2 rounded"
                      >
                        +
                      </button>
                      <span className="font-semibold">₹{item.price}</span>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex justify-between items-center w-full bg-[#5d7d75] text-white py-2 px-4 rounded-md hover:bg-[#49635d] transition-all"
                >
                  <span>₹{total}</span>
                  <span>View Cart</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
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
                  href="/add-services"
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
    </section>
  );
}