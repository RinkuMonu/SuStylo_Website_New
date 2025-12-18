"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    text: "I always had trouble finding good salons nearby, but booking through Sustylos is super easy. Got my service on time without any hassle.",
    img: "/Home/user1.png",
    name: "PRIYA SHARMA",
    bgImg: "/Home/testimonial-bg1.png",
  },
  {
    text: "This was my first time booking a freelancer stylist. Very professional and polite. The home service experience was really good.",
    img: "/Home/user2.png",
    name: "ROHAN VERMA",
    bgImg: "/Home/testimonial-bg2.png",
  },
  {
    text: "Comparing salon prices and directly booking a slot saves so much time. The app is very convenient for quick bookings.",
    img: "/Home/user3.png",
    name: "SNEHA KAPOOR",
    bgImg: "/Home/testimonial-bg3.png",
  },
  {
    text: "Booked after seeing the offers and discounts. The service I received was even better than expected. Totally worth it!",
    img: "/Home/user4.png",
    name: "ADITYA SINGH",
    bgImg: "/Home/testimonial-bg4.png",
  },
  {
    text: "The platform is simple to use, salon details are clear, and the payment process is smooth. Works perfectly for me.",
    img: "/Home/user4.png",
    name: "NISHA RATHORE",
    bgImg: "/Home/testimonial-bg3.png",
  },
];

export default function Testimonial({ heading = "OUR CLIENTS" }) {
  // Build error fix karne ke liye state ka use
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="relative pb-5 pt-10 lg:px-12">
      <h2 className="text-2xl sm:text-[28px] font-bold font-serif underline decoration-[#363333] mb-6 ">
        {heading}
      </h2>

      {/* Previous Button - ref as a callback function */}
      <button
        ref={(node) => setPrevEl(node)}
        className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 block
        w-12 h-12 border rounded-full flex items-center justify-center
        bg-transparent text-[#222] transition hover:bg-[#f6f2e9] focus:outline-none"
        aria-label="Previous"
        type="button"
      >
        <IoArrowBack size={25} />
      </button>

      {/* Swiper */}
      <Swiper
        className="max-w-5xl"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={32}
        slidesPerView={4}
        // State variables pass kiye gaye hain taaki render error na aaye
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
        }}
        onInit={(swiper) => {
          // Navigation ko manually refresh karna zaroori hai
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col justify-between items-center">
              <div
                className="relative w-full min-w-[210px] h-100 flex items-center px-6 pt-8 pb-10 rounded-t-[18px] bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url("${t.bgImg}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-base leading-8 font-serif text-[#363333] text-center z-10">
                  {t.text}
                </p>
              </div>
              <div className="flex gap-2 justify-center items-center -mt-14 z-10">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={61}
                  height={61}
                  className="object-cover rounded-full border-2 border-white shadow"
                />
                <small className="font-serif">{t.name}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button - ref as a callback function */}
      <button
        ref={(node) => setNextEl(node)}
        className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full flex items-center justify-center
        bg-transparent text-[#222] border border-black transition hover:bg-[#f6f2e9] focus:outline-none"
        aria-label="Next"
        type="button"
      >
        <IoArrowForward size={25} />
      </button>
    </section>
  );
}