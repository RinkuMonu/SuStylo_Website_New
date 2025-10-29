"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const discounts = [
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
    {
        percent: '30%',
        desc: 'On Hair Cut & conditioning',
        detail: 'On your nearest salon',
        img: '/Home/discount.png',
        coupon: "MANICURE300",
        bg: 'bg-[#617772]',
        text: "text-[#193831]"
    },
];


export default function DiscountSlider() {
    const [copiedIdx, setCopiedIdx] = useState(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 5000);
    };

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
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-8 max-w-5xl"
        >
          {discounts.map((offer, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <div className='flex flex-row gap-0 bg-white overflow-hidden rounded-xl'>
                  <div className={`p-3 flex items-center flex-col justify-center pt-10 ${offer.bg}`}>
                    <h3 className={`text-2xl font-bold ${offer.text}`}>Get-{offer.percent}</h3>
                    <p className={`text-[14px] w-30 text-center ${offer.text}`}>{offer.desc}</p>
                    <small className='text-[#CBAA87] text-[10px] mt-auto'>{offer.detail}</small>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image src={offer.img} alt='Discount' width={225} height={154} className="object-cover" />
                  </div>
                </div>
                <p className={`flex justify-center mt-2 items-center gap-2 ${offer.text}`}>
                  {offer.coupon}
                  <span
                    onClick={() => handleCopy(offer.coupon, idx)}
                    className="cursor-pointer text-lg"
                    title="Copy coupon"
                  >
                    {copiedIdx === idx ? (
                      <IoCheckmark className=" transition-colors duration-300" />
                    ) : (
                      <IoCopyOutline />
                    )}
                  </span>
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
