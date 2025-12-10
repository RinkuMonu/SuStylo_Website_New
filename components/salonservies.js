"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Plus, Minus, X } from "lucide-react";

const transformServices = (serviceData,genderKey) => {
    const genderServices = serviceData[genderKey];
    if (!genderServices) return [];
    return Object.keys(genderServices).map(categoryTitle => {
        const categoryData = genderServices[categoryTitle];
        return {
            title: categoryTitle, 
            items: categoryData.services.map(service => ({
                name: service.name,
                price: service.price,
                atHome: service.atHome,
                discountPrice: service.discountPrice,
                duration: service.duration,
                description: service.description || '',
            })),
        };
    });
};
function AddressModal({ isOpen, onClose, onSubmit, currentAddress }) {
    const [address, setAddress] = useState(currentAddress || {
        line1: '',
        landmark: '',
        city: '',
        pincode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // यहाँ आप एड्रेस वैलिडेशन (validation) जोड़ सकते हैं
        onSubmit(address);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/70">
            <div className="relative bg-[#F6EFE4] w-full max-w-md rounded-xl shadow-2xl p-6">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#5F3F31] hover:text-black transition"
                >
                    <X size={22} />
                </button>

                <h2 className="text-[#5F3F31] text-2xl font-semibold mb-4 flex items-center">
                     Add Home Address
                </h2>
                <hr className="border-[#CBAA87] mb-6" />

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="line1" className="block text-sm font-medium text-gray-700">Flat/House No., Building, Street</label>
                        <input
                            type="text"
                            name="line1"
                            id="line1"
                            required
                            value={address.line1}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#CBAA87] rounded-md shadow-sm p-2 focus:ring-[#CBAA87] focus:border-[#CBAA87] bg-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark / Area</label>
                        <input
                            type="text"
                            name="landmark"
                            id="landmark"
                            required
                            value={address.landmark}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#CBAA87] rounded-md shadow-sm p-2 focus:ring-[#CBAA87] focus:border-[#CBAA87] bg-white"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                required
                                value={address.city}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-[#CBAA87] rounded-md shadow-sm p-2 focus:ring-[#CBAA87] focus:border-[#CBAA87] bg-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                required
                                pattern="\d{6}" // 6-digit Pincode
                                maxLength="6"
                                value={address.pincode}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-[#CBAA87] rounded-md shadow-sm p-2 focus:ring-[#CBAA87] focus:border-[#CBAA87] bg-white"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#5F3F31] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#49372d] transition-all disabled:opacity-50"
                        >
                            Save Address
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
    
export default function SalonServicesSection({ serviceData }) {
   
    const [userAddress, setUserAddress] = useState(null); 
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const transformedFemaleServices = transformServices(serviceData,'female');
    const transformedMaleServices = transformServices(serviceData,'male');

    // Separate states for each section
    const [openFemaleCategory, setOpenFemaleCategory] = useState(null);

    const [openMaleCategory, setOpenMaleCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const hasAtHomeService = cart.some(item => item.atHome === true);
    console.log("hasAtHomeService :", hasAtHomeService);
    // Modal states
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    // ध्यान दें: मैंने यहां डिफ़ॉल्ट तिथि को वर्तमान तिथि पर सेट करने के लिए लॉजिक नहीं जोड़ा है
    const [selectedDate, setSelectedDate] = useState("01/01/2024"); 
    const [selectedTime, setSelectedTime] = useState("10:00 AM");

    // Calendar states
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // --- Hardcoded data की जगह Transformed data का उपयोग करें ---
    const femaleServices = transformedFemaleServices;
    const maleServices = transformedMaleServices;
    // -------------------------------------------------------------

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
        // 0=Sunday, 1=Monday, ..., 6=Saturday. हम सोमवार को 0 से शुरू करने के लिए समायोजित (adjust) करेंगे
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1; // सोमवार (1) को 0, रविवार (0) को 6
    };

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    const blankDays = firstDayOfMonth; // समायोजित (adjusted) logic के अनुसार

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
    const addAddressForHome = () => {
            if (hasAtHomeService) {
                setIsAddressModalOpen(true);
            } else {
                console.log("Cannot add address: No 'At Home' service in cart.");
            }
        }
        
        // --- Function to save the address ---
        const handleAddressSubmit = (address) => {
            setUserAddress(address);
            console.log("Address Saved:", address);
        }
        const bookingDetails = {
            cart,
            selectedDate,
            selectedTime,
            totalAmount: (total * 1.05).toFixed(2),
            address: userAddress, // यहाँ एड्रेस स्टोर है
            hasAtHomeService,
        };
        const handlePayAndConfirm = () => {
            console.log("Final Booking Details:", bookingDetails);
            alert("Booking Confirmed! (See console for details)");
        }
    return (
        <section className="bg-[#f6efe4] py-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5F3F31]">Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Female Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-4 underline text-[#5F3F31]">For Female</h3>
                    <div className="space-y-3">
                        {femaleServices.length === 0 ? (
                            <div className="text-center p-8 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 font-medium">
                                <p>
                                    <span className="font-bold text-lg text-[#CBAA87]">
                                        Services are currently not available for Female category.
                                    </span>
                                    <br />
                                    Please check the Male Services section or try again later.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {femaleServices.map((cat, idx) => (
                                    <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm overflow-hidden">
                                        <button
                                            onClick={() => toggleFemaleCategory(cat.title)}
                                            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white transition hover:bg-[#b59877]"
                                        >
                                            {cat.title}
                                            {openFemaleCategory === cat.title ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </button>

                                        {openFemaleCategory === cat.title && cat.items?.length > 0 && (
                                            <div className="bg-[#FAEFDE] divide-y divide-[#d8c2aa] text-gray-700">
                                                {cat.items.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between items-center px-4 py-2 hover:bg-[#E7DCCC]"
                                                    >
                                                        <span>{item.name}({item.atHome == true ? 'At home' : "At salon"})</span>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-sm font-medium">
                                                                ₹{item.price}
                                                            </span>
                                                            <button
                                                                onClick={() => addToCart(item)}
                                                                className="text-[#5F3F31] font-bold p-1 border border-[#5F3F31] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#CBAA87] hover:text-white transition"
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
                        )}
                    </div>
                </div>

                {/* Male Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-4 underline text-[#5F3F31]">For Male</h3>
                    <div className="space-y-3">
                        {maleServices.length === 0 ? (
                            <div className="text-center p-8 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 font-medium">
                                <p>
                                    <span className="font-bold text-lg text-[#CBAA87]">
                                        Services are currently not available for Male category.
                                    </span>
                                    <br />
                                    Please check the Female Services section or try again later.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {maleServices.map((cat, idx) => (
                                    <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm overflow-hidden">
                                        <button
                                            onClick={() => toggleMaleCategory(cat.title)}
                                            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white transition hover:bg-[#b59877]"
                                        >
                                            {cat.title}
                                            {openMaleCategory === cat.title ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </button>
                                        {openMaleCategory === cat.title && cat.items?.length > 0 && (
                                            <div className="bg-[#FAEFDE] divide-y divide-[#d8c2aa] text-gray-700">
                                                {cat.items.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between items-center px-4 py-2 hover:bg-[#E7DCCC]"
                                                    >
                                                        <span>{item.name}({item.atHome == true ? 'At home' : "At salon"})</span>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-sm font-medium">
                                                                ₹{item.price}
                                                            </span>
                                                            <button
                                                                onClick={() => addToCart(item)}
                                                                className="text-[#5F3F31] font-bold p-1 border border-[#5F3F31] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#CBAA87] hover:text-white transition"
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
                        )}
                    </div>
                </div>

                {/* Cart Section */}
                <div className="">
                    <h3 className="font-semibold text-lg mb-4 underline text-[#5F3F31] sticky top-20">Cart</h3>
                    <div className="bg-[#F6EFE4] rounded-lg shadow-[0_4px_4px_0_#00000040] p-4 border border-[#CBAA87] sticky top-20">
                        {cart.length === 0 ? (
                            <p className="text-gray-500 text-sm">No items added</p>
                        ) : (
                            <div className="space-y-3">
                                {cart.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center text-sm border-b border-[#E7DCCC] pb-2"
                                    >
                                        <span className="w-1/2 font-medium text-[#5F3F31]">{item.name}({item.atHome == true ? 'At home' : "At salon"})</span>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1 border border-[#CBAA87] rounded">
                                                <button
                                                    onClick={() => updateQty(item.name, -1)}
                                                    className="px-2 py-[1px] text-[#5F3F31] hover:bg-[#CBAA87]/30 transition"
                                                    aria-label="Decrease quantity"
                                                >
                                                    -
                                                </button>
                                                <span className="text-[#5F3F31] font-semibold">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.name, 1)}
                                                    className="px-2 py-[1px] text-[#5F3F31] hover:bg-[#CBAA87]/30 transition"
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="font-semibold text-[#5F3F31]">₹{item.price * item.qty}</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-2">
                                    <div className="flex justify-between items-center mb-3 font-bold text-base text-[#5F3F31]">
                                        <span>Subtotal</span>
                                        <span>₹{total}</span>
                                    </div>
                                    <button
                                        onClick={() => setIsBookingModalOpen(true)}
                                        className="flex justify-center items-center w-full bg-[#5d7d75] text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-[#49635d] transition-all"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {isBookingModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50">
                    <div className="relative bg-[#637571] w-full max-w-[890px] rounded-xl shadow-2xl overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsBookingModalOpen(false)}
                            className="absolute top-4 right-4 text-[#F6EFE4] hover:text-white transition z-10"
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

                            {/* Service Info (Replace with actual selected item or cart summary) */}
                            {cart.length > 0 && (
                              <div className="mb-4 space-y-2 max-h-40 overflow-y-auto pr-2"> {/* Scrollable area for services */}
                                  {cart.map((item, index) => (
                                      <div key={index} className="flex justify-between items-start bg-transparent text-[#F6EFE4] leading-relaxed border-b border-[#F6EFE4]/20 pb-1">
                                          <span className="font-medium text-sm">
                                              {item.name} ({item.atHome == true ? 'At home' : "At salon"}) x {item.qty}
                                          </span>
                                          <div className="flex items-center gap-2">
                                              <span className="text-sm font-semibold">
                                                  ₹{item.price * item.qty}
                                              </span>
                                              <span className="ml-2 text-[11px] bg-[#F6EFE4] text-[#5C6B63] px-2 py-[1px] rounded-md font-semibold whitespace-nowrap">
                                                  {/* Gender identification logic - simplified */}
                                                  {item.name.includes('Girls') || item.name.includes('Female') || femaleServices.some(c => c.items.some(i => i.name === item.name)) ? 'Female' : 'Male'}
                                              </span>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          )}

                            {/* Price + Duration (Placeholder) */}
                            <div className="flex items-center gap-5 text-[#F6EFE4] mb-2">
                                <span className="text-[17px] font-semibold">₹{total}</span>
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
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" />
                                    </svg>
                                    Approx. 45min (Placeholder)
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
                            
                            {/* --- ADD ADDRESS BUTTON & DISPLAY --- */}
                            <div className="flex items-center gap-5 text-[#F6EFE4] mb-2">
                                <div className="flex items-center text-sm opacity-80">
                                    {/* Conditional display of Address */}
                                    {userAddress ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] font-medium max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
                                                {userAddress.line1}, {userAddress.city} - {userAddress.pincode}
                                            </span>
                                            <button 
                                                onClick={addAddressForHome} // Use this to edit existing address
                                                className="text-[#F6EFE4] underline underline-offset-2 hover:opacity-90 text-sm mb-0 ml-2"
                                            >
                                                (Edit)
                                            </button>
                                        </div>
                                    ) : (
                                        <button 
                                            onClick={addAddressForHome}
                                            disabled={!hasAtHomeService} // Button disable logic
                                            className={`
                                                text-[#F6EFE4] 
                                                underline 
                                                underline-offset-2 
                                                text-sm 
                                                mb-6 
                                                ${hasAtHomeService 
                                                    ? 'hover:opacity-90' 
                                                    : 'opacity-50 cursor-not-allowed' 
                                                }
                                            `}
                                        >
                                            + Add Address
                                        </button>
                                    )}
                                </div>
                            </div>
                            {/* --- END ADDRESS BUTTON & DISPLAY --- */}
                            {/* Date Selection Modal */}
                            {isDateModalOpen && (
                                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                                    <div className="bg-[#E9E3D9] rounded-2xl shadow-2xl w-full max-w-3xl px-[10px] py-[21px] relative">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setIsDateModalOpen(false)}
                                            className="absolute top-3 right-4 text-[#5C6B63] hover:text-black transition"
                                        >
                                            <X size={22} />
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
                                <button
                                    onClick={() => setIsBookingModalOpen(false)} // Close modal to add more from main list
                                    className="text-[#F6EFE4] underline underline-offset-2 hover:opacity-90 text-sm mb-6"
                                >
                                    + Add More Services
                                </button>
                                
                            </div>
                            

                            {/* White Box - Price Summary */}
                            <div className="bg-[#F6EFE4] rounded-t-xl px-6 py-5 text-[#1f1f1f]">
                                <div className="flex justify-between mb-2 text-[15px]">
                                    <span>Services Total</span>
                                    <span>₹{total}</span>
                                </div>
                                <div className="flex justify-between mb-4 text-[15px]">
                                    <span>Tax (5%)</span>
                                    <span>₹{(total * 0.05).toFixed(2)}</span>
                                </div>
                                <hr className="border-[#a7a7a7] mb-4" />

                                {/* Total Section */}
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-semibold">Total Amount</h4>
                                    <span className="text-lg font-semibold">₹{(total * 1.05).toFixed(2)}</span>
                                </div>

                                {/* Pay Button */}
                                <div className="flex justify-end mt-5">
                                    <button onClick={handlePayAndConfirm} className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
                                        Pay & Confirm Booking
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <AddressModal 
                isOpen={isAddressModalOpen}
                onClose={() => setIsAddressModalOpen(false)}
                onSubmit={handleAddressSubmit}
                currentAddress={userAddress}
            />
        </section>
    );
}