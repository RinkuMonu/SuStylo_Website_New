"use client";
import Link from "next/link";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from "react";
import { Plus, Minus, X } from "lucide-react";
import axiosInstance from "../src/app/axios/axiosinstance";
import AuthModalManager from "./modals/AuthModalManager";
import { jwtDecode } from 'jwt-decode';

const transformServices = (serviceData, genderKey) => {
    const genderServices = serviceData[genderKey];
    if (!genderServices) return [];
    return Object.keys(genderServices).map(categoryTitle => {
        const categoryData = genderServices[categoryTitle];
        return {
            title: categoryTitle,
            items: categoryData.services.map(service => ({
                serviceId: service._id,
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
                <hr className="border-[#CBAA87] mb-6 " />

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

export default function SalonServicesSection({ serviceData, salon_id }) {
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPaymentType, setSelectedPaymentType] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    // BookingSection.jsx के अंदर, अन्य state variables के पास
    const [availableSlots, setAvailableSlots] = useState([]);
    const [salonSchedule, setSalonSchedule] = useState(null);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
    const [slotsError, setSlotsError] = useState(null);
    const [homeBooking, setHomeBooking] = useState({ date: "", time: "", bookingType: "", isModalOpen: false });
    const [salonBooking, setSalonBooking] = useState({ date: "", time: "", bookingType: "", isModalOpen: false });
    const [currentGroup, setCurrentGroup] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const transformedFemaleServices = transformServices(serviceData, 'female');
    const transformedMaleServices = transformServices(serviceData, 'male');

    // Separate states for each section
    const [openFemaleCategory, setOpenFemaleCategory] = useState(null);

    const [openMaleCategory, setOpenMaleCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const hasAtHomeService = cart?.[0]?.atHome === true;
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
    // const groupedCart = cart.reduce((acc, item) => {
    //     const location = item.atHome === true ? 'home' : 'salon';
    //     const bookingType = location === 'home' ? homeBooking.bookingType : salonBooking.bookingType;

    //     if (!acc[location]) {
    //         acc[location] = {
    //             items: [],
    //             bookingType: bookingType,
    //         };
    //     }

    //     acc[location].items.push(item);
    //     return acc;
    // }, {});
    // Calendar data
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const timeSlots = [
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
        "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
    ];


useEffect(() => {
    if (!salonBooking.date) return;

    const controller = new AbortController();

    const fetchSalonSchedule = async () => {
        setIsLoadingSlots(true);
        setSlotsError(null);
        setAvailableSlots([]);

        try {
            const response = await axiosInstance.get(`/schedules/getSalonSchedule/${salon_id}`, {
                params: { date: salonBooking.date },
                signal: controller.signal
            });

            const data = response.data;
            if (data.success && data.schedules.length > 0) {
                const scheduleForDay = data.schedules[0];
                setSalonSchedule(scheduleForDay);
                const slots = scheduleForDay.slots
                    .filter(slot => slot.status === 'available')
                    .map(slot => slot.time);
                setAvailableSlots(slots);
            } else {
                setSalonSchedule(null);
                setAvailableSlots([]);
                setSlotsError("No available slots for this date.");
            }
        } catch (error) {
            if (error.name !== "CanceledError") {
                console.error("Error fetching salon schedule:", error);
                setSlotsError("Error fetching slots. Please try again.");
            }
        } finally {
            setIsLoadingSlots(false);
        }
    };

    fetchSalonSchedule();

    return () => {
        controller.abort(); // cancel request if date changes or component unmounts
    };
}, [salonBooking.date, salon_id]);


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

        if (currentGroup === 'home') {
            setHomeBooking(prev => ({ ...prev, date: formattedDate, time: null }));
        } else if (currentGroup === 'salon') {
            setSalonBooking(prev => ({ ...prev, date: formattedDate, time: null }));
            // API call अब useEffect द्वारा ट्रिगर होगा जब salonBooking.date अपडेट होगा
        }
        // टाइम स्लॉट क्लियर करें ताकि यूजर को नए स्लॉट चुनने पड़ें
        // setAvailableSlots([]); // यह useEffect में किया जा रहा है
    };

    const toggleFemaleCategory = (title) => {
        setOpenFemaleCategory(openFemaleCategory === title ? null : title);
    };

    const toggleMaleCategory = (title) => {
        setOpenMaleCategory(openMaleCategory === title ? null : title);
    };
    const isCartEmpty = cart.length === 0;
    const isCurrentItemInCart = (item) =>
        !isCartEmpty && cart[0].name === item.name && cart[0].atHome === item.atHome;
    const getCartItemQuantity = (item) => {
        const foundItem = cart.find(
            (p) => p.name === item.name && p.atHome === item.atHome
        );
        return foundItem ? foundItem.qty : 0;
    };
    const decreaseQuantity = (item) => {
        setCart((prev) => {
            const existing = prev.find(
                (p) => p.name === item.name && p.atHome === item.atHome
            );
            if (existing) {
                if (existing.qty > 1) {
                    // Decrease quantity
                    return prev.map((p) =>
                        (p.name === item.name && p.atHome === item.atHome) ? { ...p, qty: p.qty - 1 } : p
                    );
                } else {
                    // Remove item from cart if quantity is 1
                    return prev.filter(
                        (p) => !(p.name === item.name && p.atHome === item.atHome)
                    );
                }
            }
            return prev;
        });
    };
    const addToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find(
                (p) => p.name === item.name && p.atHome === item.atHome
            );

            // 🚨 IMPORTANT CHECK: If cart is NOT empty AND the current item is NOT the one in the cart, do nothing.
            if (prev.length > 0 && !existing) {
                return prev;
            }

            if (existing) {
                // Increase quantity of the existing item
                return prev.map((p) =>
                    (p.name === item.name && p.atHome === item.atHome) ? { ...p, qty: p.qty + 1 } : p
                );
            }

            // Add new item with qty: 1 only if cart is empty
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
    }
    const bookingDetails = {
        salon_id: salon_id,
        cart,
        schedule_id: '68c7ff969528eb71d6ad0ddf',
        totalAmount: (total * 1.05).toFixed(2),
        address: userAddress,
        bookingType:''
    };
    const handlePayAndConfirm = () => {
        setShowPaymentModal(true);
    }

    const handleGroupBookingTypeChange = (locationKey, groupTotal, newType) => {

    }

    const handlePaymentSelection = (type, salonId) => {
        const token = localStorage.getItem('token'); 
        const isUserAuthenticated = !!token;

        if (isUserAuthenticated) {
            let userId = null;
            try {
                const decodedToken = jwtDecode(token);
                userId = decodedToken.id || decodedToken._id;                
                if (!userId) {
                    throw new Error("User ID missing in token payload.");
                }                
            } catch (error) {
                console.error("Token decoding or ID extraction failed:", error);
                alert("Session expired or token is invalid. Please log in again.");
                setShow(true); 
                setShowModal(true);
                return;
            }

            setSelectedPaymentType(type);
            createBookingAPI(type, salonId, userId); 
            
        } else {
            setShow(true); 
            setShowModal(true);
            setSelectedPaymentType(type);
        }
    };
    const confirmBooking = async ()=>{
        const token = localStorage.getItem('token'); 
        const isUserAuthenticated = !!token;

        if (isUserAuthenticated) {
            let userId = null;
            try {
                const decodedToken = jwtDecode(token);
                userId = decodedToken.id || decodedToken._id;                
                if (!userId) {
                    throw new Error("User ID missing in token payload.");
                }                
            } catch (error) {
                console.error("Token decoding or ID extraction failed:", error);
                alert("Session expired or token is invalid. Please log in again.");
                setShow(true); 
                setShowModal(true);

                return;
            }
            createBookingAPI(null, salon_id, userId);         
        } else {
            setShow(true); 
            setShowModal(true);

        }
    }
    const createBookingAPI = async (paymentType = null, salonId, userId) => {
        setIsProcessing(true);
        
        const servicesPayload = bookingDetails.cart.map(item => ({
            serviceId: item.serviceId,
            quantity: item.qty,
            price: item.price
        }));
        
        const payload = {
            address:bookingDetails.address,
            bookingType: bookingDetails.cart.bookingType || "preBooking",
            salonId: salonId, 
            services: servicesPayload,
            scheduleId: bookingDetails.schedule_id,
            totalAmount: parseFloat(bookingDetails.totalAmount),
            baseAmount: total,
            paymentType: paymentType || 'cash',
            isAtHome: bookingDetails.cart?.[0]?.atHome || false,
            userId: userId,
        };
        try {
            const response = await axiosInstance.post('/booking', payload);
            if (response.data.success) {
                alert(`Booking successful!`);
                window.location.href='/';
            } else {
                alert(`Booking failed: ${response.data.message || "Unknown error."}`);
            }            
        } catch (error) {
            console.error("Booking API Call Error:", error);            
            let errorMessage = "An unknown error occurred.";            
            if (error.response) {
                errorMessage = error.response.data?.message || `Server responded with status ${error.response.status}`;
            } else if (error.request) {
                errorMessage = "No response from the server. Please check the network connection or backend status.";
            } else {
                errorMessage = error.message;
            }
            alert(`Error: Could not complete booking. Reason: ${errorMessage}`);            
        } finally {
            setIsProcessing(false);
            setShowPaymentModal(false);
        }
    };
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
                                                        <span>{item.name}({item.atHome == true ? 'Home' : "Salon"})</span>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-sm font-medium">
                                                                ₹{item.price}
                                                            </span>
                                                            {isCurrentItemInCart(item) && (
                                                                <>
                                                                    <button
                                                                        onClick={() => decreaseQuantity(item)} // Assumed function to decrease quantity
                                                                        className="text-[#5F3F31] font-bold p-1 border border-[#5F3F31] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#CBAA87] hover:text-white transition"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span className="font-semibold text-base">
                                                                        {getCartItemQuantity(item)}
                                                                    </span>
                                                                </>
                                                            )}

                                                            <button
                                                                onClick={() => addToCart(item)}
                                                                disabled={!isCartEmpty && !isCurrentItemInCart(item)} // Logic for disabling
                                                                className={`font-bold p-1 border rounded-full w-6 h-6 flex items-center justify-center transition 
                                                                    ${(!isCartEmpty && !isCurrentItemInCart(item))
                                                                        ? 'text-gray-400 border-gray-400 bg-gray-100 cursor-not-allowed'
                                                                        : 'text-[#5F3F31] border-[#5F3F31] hover:bg-[#CBAA87] hover:text-white'
                                                                    }`}
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
                                                        <span>{item.name}({item.atHome == true ? 'Home' : "Salon"})</span>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-sm font-medium">
                                                                ₹{item.price}
                                                            </span>
                                                            {isCurrentItemInCart(item) && (
                                                                <>
                                                                    <button
                                                                        onClick={() => decreaseQuantity(item)} // Assumed function to decrease quantity
                                                                        className="text-[#5F3F31] font-bold p-1 border border-[#5F3F31] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#CBAA87] hover:text-white transition"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span className="font-semibold text-base">
                                                                        {getCartItemQuantity(item)}
                                                                    </span>
                                                                </>
                                                            )}
                                                            <button
                                                                onClick={() => addToCart(item)}
                                                                disabled={!isCartEmpty && !isCurrentItemInCart(item)} // Logic for disabling
                                                                className={`font-bold p-1 border rounded-full w-6 h-6 flex items-center justify-center transition 
                                                                    ${(!isCartEmpty && !isCurrentItemInCart(item))
                                                                        ? 'text-gray-400 border-gray-400 bg-gray-100 cursor-not-allowed'
                                                                        : 'text-[#5F3F31] border-[#5F3F31] hover:bg-[#CBAA87] hover:text-white'
                                                                    }`}
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
                                        <span className="w-1/2 font-medium text-[#5F3F31]">{item.name}({item.atHome == true ? 'Home' : "Salon"})</span>
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
                          {cart.length > 0 && (() => {
                            const handleBookingTypeChange = (event) => {
                                const newBookingType = event.target.value;
                                setHomeBooking(prev => ({
                                    ...prev,
                                    bookingType: newBookingType,
                                }));
                                bookingDetails.bookingType = newBookingType === 'pre' ? 'preBooking' : 'urgentBooking';
                            };
                            // 1. Logic Definitions
                            const isHome = cart[0]?.atHome;
                            const location = isHome ? 'home' : 'salon'; 
                            const bookingState = isHome ? homeBooking : salonBooking;

                            const subtotal = cart.reduce((total, item) => {
                                const price = parseFloat(item.price || 0);
                                const qty = parseInt(item.qty || 1, 10);
                                return total + (price * qty);
                            }, 0);

                            // 2. JSX Rendering (वापस करें)
                            return (
                                <div className="mb-4 space-y-2 max-h-40 overflow-y-auto pr-2">
                                    <div className="my-4 p-4 border rounded-lg bg-white shadow-sm">
                                        <h3 className="capitalize text-lg font-semibold mb-3 text-[#5F3F31]">
                                            {/* Display location of the items */}
                                            {location} Services
                                        </h3>

                                        {/* 5. बुकिंग टाइप सेलेक्शन ड्रॉपडाउन (केवल Home के लिए) */}
                                        {isHome ? (
                                            <div className="mb-4">
                                                <label
                                                    htmlFor={`bookingType-${location}`}
                                                    className="block text-sm font-medium text-[#5F3F31] mb-1"
                                                >
                                                    Select Booking Type for {location}:
                                                </label>
                                                <select
                                                    id={`bookingType-${location}`}
                                                    // State से वैल्यू लें 
                                                    value={bookingState.bookingType || ''} 
                                                    onChange={handleBookingTypeChange} 
                                                    className="w-full p-2 border border-[#C9BFAF] rounded-md bg-white text-[#5C5C5C] focus:ring-[#5F3F31] focus:border-[#5F3F31] transition"
                                                >
                                                    <option value="" disabled>Choose an option</option>
                                                    <option value="pre">Pre-booking</option>
                                                    <option value="urgent">Urgent Booking</option>
                                                </select>
                                            </div>
                                        ) : null}

                                        {/* 6. Items List for this group (सीधे cart पर मैप करें) */}
                                        <ul className="divide-y divide-[#E9E3D9]">
                                            {cart.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center py-2 text-[#5C5C5C] text-sm"
                                                >
                                                    <span>
                                                        {item.name} - ₹{parseFloat(item.price || 0).toFixed(2)}
                                                        <span className="text-xs text-gray-500 ml-2">x {item.qty}</span>
                                                    </span>

                                                    <span className="font-medium">
                                                        ₹{(parseFloat(item.price || 0) * parseInt(item.qty || 1, 10)).toFixed(2)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Subtotal Display */}
                                        <div className="mt-4 pt-3 border-t border-[#d1c7b9] flex justify-between items-center">
                                            <h4 className="text-base font-bold text-[#5F3F31]">
                                                Total Subtotal:
                                            </h4>
                                            <span className="text-lg font-extrabold text-[#5F3F31]">
                                                {/* Subtotal में ₹ का उपयोग करें */}
                                                ₹{subtotal.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}

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
                            {currentGroup && (
                                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                                    <div className="bg-[#E9E3D9] rounded-2xl shadow-2xl w-full max-w-3xl px-[10px] py-[21px] relative">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setCurrentGroup(null)}
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
                                                        const formattedDate = `${(currentMonth + 1).toString()
                                                            .padStart(2, "0")}/${day.toString().padStart(2, "0")}/${currentYear}`;
                                                        const isSelected = currentGroup === 'home'
                                                            ? homeBooking.date === formattedDate
                                                            : salonBooking.date === formattedDate;

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

                                                {/* Dynamic Content: Loading, Error, or Slots */}
                                                {isLoadingSlots ? (
                                                    <div className="text-center text-[#5C5C5C]">
                                                        Loading slots...
                                                    </div>
                                                ) : slotsError ? (
                                                    <div className="text-center text-red-600">
                                                        {slotsError}
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {/* 💡 उपलब्ध स्लॉट्स को मैप करें (availableSlots) */}
                                                        {availableSlots.length > 0 ? (
                                                            availableSlots.map((slot) => {
                                                                const bookingState = currentGroup === 'home' ? homeBooking : salonBooking;

                                                                return (
                                                                    <button
                                                                        key={slot}
                                                                        onClick={() => {
                                                                            // Time को सेट करें
                                                                            if (currentGroup === 'home') {
                                                                                setHomeBooking(prev => ({ ...prev, time: slot }));
                                                                            } else if (currentGroup === 'salon') {
                                                                                setSalonBooking(prev => ({ ...prev, time: slot }));
                                                                            }
                                                                        }}
                                                                        className={`py-2 rounded-md text-sm font-medium border transition-all duration-200 
                                                                            ${bookingState.time === slot
                                                                                ? "bg-[#5F3F31] text-white border-[#70513D]"
                                                                                : "bg-white text-[#70513D] border-[#C9BFAF] hover:bg-[#E7DCCC]"
                                                                            }`}
                                                                    >
                                                                        {slot}
                                                                    </button>
                                                                );
                                                            })
                                                        ) : (
                                                            // यदि कोई स्लॉट उपलब्ध नहीं है
                                                            <div className="col-span-3 text-center text-[#5C5C5C]">
                                                                No time slots available for the selected date.
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Add More Services add serv */}
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
                                    {cart?.[0]?.atHome == true ?
                                        <button onClick={confirmBooking} className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
                                            Confirm Booking
                                            </button>
                                        :
                                            <button onClick={handlePayAndConfirm} className="bg-[#614b3d] hover:bg-[#49372d] text-white text-base font-semibold rounded-full px-8 py-2 transition-all duration-300">
                                            Pay & Confirm Booking
                                        </button>
                                    }
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

            {showPaymentModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"> {/* Modal size increased */}
                        <h3 className="text-2xl font-bold mb-4 text-[#614b3d]">Final Booking Confirmation</h3>

                        {/* --- 1. Booking Details Summary --- */}
                        <div className="border p-4 rounded-lg mb-4 bg-gray-50">
                            <h4 className="text-lg font-semibold mb-2">Booking Summary:</h4>

                            {/* Salon/Service Section */}
                            {bookingDetails.cart.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm py-1 border-b last:border-b-0">
                                    <span className="text-gray-600">{item.name} (x{item.qty})</span>
                                    <span className="font-medium">₹{(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            ))}

                            <div className="flex justify-between text-sm pt-2">
                                <span className="font-semibold text-gray-700">Total Amount:</span>
                                <span className="font-bold text-lg text-green-600">
                                    ₹{bookingDetails.totalAmount} {/* This includes tax/charges */}
                                </span>
                            </div>

                            {/* Schedule ID & Address */}
                            <div className="mt-3 text-xs text-gray-600 space-y-1 border-t pt-2">
                                <p><strong>Scheduled ID:</strong> {bookingDetails.schedule_id}</p>
                                <p><strong>Address:</strong> {bookingDetails.address || 'N/A'}</p>
                            </div>
                        </div>

                        {/* --- 2. Payment Options --- */}
                        <h4 className="text-lg font-semibold mb-3">Select Payment Method:</h4>

                        <div className="space-y-3">
                            <button
                                onClick={() => handlePaymentSelection('wallet', salon_id)}
                                disabled={isProcessing}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300 disabled:opacity-50 flex justify-center items-center"
                            >
                                {isProcessing && selectedPaymentType === 'wallet' ? (
                                    <>Processing...</> // Spinner can be added here
                                ) : (
                                    `Pay with Wallet (₹${bookingDetails.totalAmount})`
                                )}
                            </button>

                            <button
                                onClick={() => handlePaymentSelection('cash', salon_id)}
                                disabled={isProcessing}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300 disabled:opacity-50 flex justify-center items-center"
                            >
                                {isProcessing && selectedPaymentType === 'cash' ? (
                                    <>Processing...</> // Spinner can be added here
                                ) : (
                                    `Pay Cash at Salon (₹${bookingDetails.totalAmount})`
                                )}
                            </button>
                        </div>

                        {/* --- 3. Cancel Button --- */}
                        <button
                            onClick={() => setShowPaymentModal(false)}
                            disabled={isProcessing}
                            className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
                        >
                            Cancel Booking
                        </button>
                    </div>
                </div>
            )}

            {
                show && (
                    <AuthModalManager isOpen={showModal} onClose={() => setShowModal(false)} />
                )
            }
        </section>
    );
}