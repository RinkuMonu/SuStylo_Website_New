// "use client";
// import React, { useRef, useState } from 'react';
// import Image from 'next/image';
// import { IoCopyOutline, IoCheckmark } from "react-icons/io5";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';


// const discounts = [
//     {
//         percent: '30%',
//         desc: 'On Hair Cut & conditioning',
//         detail: 'On your nearest salon',
//         img: '/Home/discount.png',
//         coupon: "MANICURE300",
//         bg: 'bg-[#617772]',
//         text: "text-[#193831]"
//     },
//     {
//         percent: '25%',
//         desc: 'On Hair Spa & styling',
//         detail: 'All locations',
//         img: '/Home/discount2.png',
//         coupon: "HAIRCUT100",
//         bg: 'bg-[#CBAA87]',
//         text: "text-[#5F3F31]"
//     },
//     {
//         percent: '10%',
//         desc: 'On Hair Colour',
//         detail: 'Weekend only',
//         img: '/Home/discount3.png',
//         coupon: "WAXING400",
//         bg: 'bg-[#5F3F31]',
//         text: "text-[#CBAA87]",
//     },
//     {
//         percent: '30%',
//         desc: 'On Hair Cut & conditioning',
//         detail: 'On your nearest salon',
//         img: '/Home/discount.png',
//         coupon: "MANICURE300",
//         bg: 'bg-[#617772]',
//         text: "text-[#193831]"
//     },
// ];


// export default function DiscountSlider() {
//     const [copiedIdx, setCopiedIdx] = useState(null);

//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     const handleCopy = (text, idx) => {
//         navigator.clipboard.writeText(text);
//         setCopiedIdx(idx);
//         setTimeout(() => setCopiedIdx(null), 5000);
//     };

//     return (
//         <section className="py-5 relative max-w-6xl mx-auto">
//         {/* Slider Nav Buttons */}
//         <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10
//           w-12 h-12 border-2 border-[#363333] rounded-full flex items-center justify-center
//           bg-transparent text-[#363333] transition hover:bg-[#f5f2ea] focus:outline-none"
//           aria-label="Previous" type="button"
//         >
//           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
//             <circle cx="16" cy="16" r="15" stroke="none" />
//             <line x1="22" y1="16" x2="10" y2="16" />
//             <polyline points="15 11 10 16 15 21" fill="none" />
//           </svg>
//         </button>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={3}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           autoplay={{
//             delay: 2700,
//             disableOnInteraction: false
//           }}
//           onInit={swiper => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="px-8 max-w-5xl"
//         >
//           {discounts.map((offer, idx) => (
//             <SwiperSlide key={idx}>
//               <div>
//                 <div className='flex flex-row gap-0 bg-white overflow-hidden rounded-xl'>
//                   <div className={`p-3 flex items-center flex-col justify-center pt-10 ${offer.bg}`}>
//                     <h3 className={`text-2xl font-bold ${offer.text}`}>Get-{offer.percent}</h3>
//                     <p className={`text-[14px] w-30 text-center ${offer.text}`}>{offer.desc}</p>
//                     <small className='text-[#CBAA87] text-[10px] mt-auto'>{offer.detail}</small>
//                   </div>
//                   <div className='flex items-center justify-center'>
//                     <Image src={offer.img} alt='Discount' width={225} height={154} className="object-cover" />
//                   </div>
//                 </div>
//                 <p className={`flex justify-center mt-2 items-center gap-2 ${offer.text}`}>
//                   {offer.coupon}
//                   <span
//                     onClick={() => handleCopy(offer.coupon, idx)}
//                     className="cursor-pointer text-lg"
//                     title="Copy coupon"
//                   >
//                     {copiedIdx === idx ? (
//                       <IoCheckmark className=" transition-colors duration-300" />
//                     ) : (
//                       <IoCopyOutline />
//                     )}
//                   </span>
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10
//           w-12 h-12 border-2 border-[#363333] rounded-full flex items-center justify-center
//           bg-transparent text-[#363333] transition hover:bg-[#f5f2ea] focus:outline-none"
//           aria-label="Next" type="button"
//         >
//           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
//             <circle cx="16" cy="16" r="15" stroke="none" />
//             <line x1="22" y1="16" x2="10" y2="16" />
//             <polyline points="15 11 10 16 15 21" fill="none" />
//           </svg>
//         </button>
//       </section>
//     );
// }





// uper static UI hai only



"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axiosInstance from '../src/app/axios/axiosinstance';

export default function DiscountSlider() {
    const [copiedIdx, setCopiedIdx] = useState(null);
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Fetch coupons from API
    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('/coupon');
                
                if (response.data.success) {
                    // Transform API data to match your UI structure
                    const transformedCoupons = response.data.coupons
                        .filter(coupon => {
                            // Check if coupon is still valid
                            const now = new Date();
                            const endDate = new Date(coupon.endDate);
                            return coupon.status === "active" || endDate >= now;
                        })
                        .slice(0, 4) // Take only first 4 for slider
                        .map((coupon, index) => ({
                            id: coupon._id,
                            percent: `${coupon.discountValue}%`,
                            desc: coupon.description,
                            detail: getCouponDetail(coupon),
                            img: coupon.image || getDefaultCouponImage(index),
                            coupon: coupon.code,
                            bg: getBackgroundColor(index),
                            text: getTextColor(index),
                            discountType: coupon.discountType,
                            discountValue: coupon.discountValue,
                            minOrderAmount: coupon.minOrderAmount,
                            startDate: coupon.startDate,
                            endDate: coupon.endDate,
                            usageLimit: coupon.usageLimit,
                            usedCount: coupon.usedCount
                        }));
                    
                    setCoupons(transformedCoupons);
                }
            } catch (err) {
                console.error("Error fetching coupons:", err);
                setError("Failed to load discount offers. Please try again.");
                
                // Fallback to static data if API fails
                const fallbackCoupons = [
                    {
                        percent: '30%',
                        desc: 'On Hair Cut & conditioning',
                        detail: 'On your nearest salon',
                        img: '/Home/discount.png',
                        coupon: "MANICURE300",
                        bg: 'bg-[#617772]',
                        text: "text-[#193831]"
                    },
                    {
                        percent: '25%',
                        desc: 'On Hair Spa & styling',
                        detail: 'All locations',
                        img: '/Home/discount2.png',
                        coupon: "HAIRCUT100",
                        bg: 'bg-[#CBAA87]',
                        text: "text-[#5F3F31]"
                    },
                    {
                        percent: '10%',
                        desc: 'On Hair Colour',
                        detail: 'Weekend only',
                        img: '/Home/discount3.png',
                        coupon: "WAXING400",
                        bg: 'bg-[#5F3F31]',
                        text: "text-[#CBAA87]",
                    },
                ];
                setCoupons(fallbackCoupons);
            } finally {
                setLoading(false);
            }
        };

        fetchCoupons();
    }, []);

    // Helper function to get coupon detail
    const getCouponDetail = (coupon) => {
        const now = new Date();
        const endDate = new Date(coupon.endDate);
        const timeDiff = endDate - now;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (daysLeft > 0) {
            return `Valid for ${daysLeft} more days`;
        } else if (daysLeft === 0) {
            return "Expires today";
        } else {
            return "Expired";
        }
    };

    // Helper function for default images
    const getDefaultCouponImage = (index) => {
        const images = [
            '/Home/discount.png',
            '/Home/discount2.png',
            '/Home/discount3.png',
            '/Home/discount.png'
        ];
        return images[index % images.length];
    };

    // Helper function for background colors
    const getBackgroundColor = (index) => {
        const colors = [
            'bg-[#617772]',
            'bg-[#CBAA87]',
            'bg-[#5F3F31]',
            'bg-[#617772]'
        ];
        return colors[index % colors.length];
    };

    // Helper function for text colors
    const getTextColor = (index) => {
        const colors = [
            'text-[#193831]',
            'text-[#5F3F31]',
            'text-[#CBAA87]',
            'text-[#193831]'
        ];
        return colors[index % colors.length];
    };

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 5000);
        
        // Optional: Show a toast notification
        if (typeof window !== 'undefined') {
            // You can add a toast notification here if you have one
            console.log(`Coupon code ${text} copied to clipboard!`);
        }
    };

    // Loading state
    if (loading) {
        return (
            <section className="py-5 relative max-w-6xl mx-auto">
                {/* Slider Nav Buttons - Disabled during loading */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                    w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center
                    bg-transparent text-gray-300 cursor-not-allowed"
                    aria-label="Previous" type="button" disabled
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="16" cy="16" r="15" stroke="none" />
                        <line x1="22" y1="16" x2="10" y2="16" />
                        <polyline points="15 11 10 16 15 21" fill="none" />
                    </svg>
                </button>
                
                <div className="px-8 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="animate-pulse">
                                <div className='flex flex-row gap-0 bg-white overflow-hidden rounded-xl'>
                                    <div className={`p-3 flex items-center flex-col justify-center pt-10 ${getBackgroundColor(idx)} w-1/2`}>
                                        <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded w-1/2 mt-auto"></div>
                                    </div>
                                    <div className='flex items-center justify-center w-1/2'>
                                        <div className="w-full h-[154px] bg-gray-300"></div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-2 items-center gap-2">
                                    <div className="h-6 bg-gray-300 rounded w-24"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                    w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center
                    bg-transparent text-gray-300 cursor-not-allowed"
                    aria-label="Next" type="button" disabled
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
                        <circle cx="16" cy="16" r="15" stroke="none" />
                        <line x1="22" y1="16" x2="10" y2="16" />
                        <polyline points="15 11 10 16 15 21" fill="none" />
                    </svg>
                </button>
            </section>
        );
    }

    // Error state (but still show fallback/static data if available)
    if (error && coupons.length === 0) {
        return (
            <section className="py-5 relative max-w-6xl mx-auto">
                <div className="text-center text-red-600 px-8">
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    // If no coupons available
    if (coupons.length === 0) {
        return (
            <section className="py-5 relative max-w-6xl mx-auto">
                <div className="text-center text-gray-500 px-8">
                    <p>No active discount offers available at the moment.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5 relative max-w-6xl mx-auto">
            {/* Slider Nav Buttons */}
            <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                w-12 h-12 border-2 border-[#363333] rounded-full flex items-center justify-center
                bg-transparent text-[#363333] transition hover:bg-[#f5f2ea] focus:outline-none"
                aria-label="Previous" type="button"
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="15" stroke="none" />
                    <line x1="22" y1="16" x2="10" y2="16" />
                    <polyline points="15 11 10 16 15 21" fill="none" />
                </svg>
            </button>
            
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false
                }}
                onInit={swiper => {
                    if (prevRef.current && nextRef.current) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="px-8 max-w-5xl"
            >
                {coupons.map((offer, idx) => (
                    <SwiperSlide key={offer.id || idx}>
                        <div>
                            <div className='flex flex-row gap-0 bg-white overflow-hidden rounded-xl'>
                                <div className={`p-3 flex items-center flex-col justify-center pt-10 ${offer.bg} w-[40%]`}>
                                    <h3 className={`text-2xl font-bold ${offer.text}`}>Get-{offer.percent}</h3>
                                    <p className={`text-[14px] w-30 text-center ${offer.text}`}>{offer.desc}</p>
                                    <small className='text-[#CBAA87] text-[10px] mt-auto'>{offer.detail}</small>
                                    {offer.minOrderAmount && (
                                        <small className='text-[#FFD700] text-[10px] mt-1'>
                                            Min. order: ₹{offer.minOrderAmount}
                                        </small>
                                    )}
                                </div>
                                <div className='flex items-center justify-center w-[60%]'>
                                    <Image 
                                        src={offer.img} 
                                        alt={`${offer.percent} discount`} 
                                        width={225} 
                                        height={154} 
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <p className={`flex justify-center mt-2 items-center gap-2 ${offer.text}`}>
                                {offer.coupon}
                                <span
                                    onClick={() => handleCopy(offer.coupon, idx)}
                                    className="cursor-pointer text-lg hover:opacity-80 transition-opacity"
                                    title="Copy coupon code"
                                >
                                    {copiedIdx === idx ? (
                                        <IoCheckmark className="transition-colors duration-300 text-green-600" />
                                    ) : (
                                        <IoCopyOutline />
                                    )}
                                </span>
                                {/* {offer.usageLimit && offer.usedCount !== undefined && (
                                    <span className="text-xs text-gray-500 ml-2">
                                        ({offer.usedCount}/{offer.usageLimit} used)
                                    </span>
                                )} */}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                w-12 h-12 border-2 border-[#363333] rounded-full flex items-center justify-center
                bg-transparent text-[#363333] transition hover:bg-[#f5f2ea] focus:outline-none"
                aria-label="Next" type="button"
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
                    <circle cx="16" cy="16" r="15" stroke="none" />
                    <line x1="22" y1="16" x2="10" y2="16" />
                    <polyline points="15 11 10 16 15 21" fill="none" />
                </svg>
            </button>
        </section>
    );
}