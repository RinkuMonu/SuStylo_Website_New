"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const servicesData = {
    women: [
        { label: 'Hair Colour', image: '/Home/hair-colour.png' },
        { label: 'Threading', image: '/Home/threading.png' },
        { label: 'Facial', image: '/Home/facial.png' },
        { label: 'Hair cut', image: '/Home/hair-cut.png' },
        { label: 'Manicure', image: '/Home/manicure.png' },
        { label: 'Pedicure', image: '/Home/pedicure.png' },
        { label: 'Massage', image: '/Home/massage.png' },
        { label: 'Nail art', image: '/Home/nail-art.png' },
        { label: 'Makeup', image: '/Home/makeup.png' },
        { label: 'Bleach', image: '/Home/bleach.png' }
    ],
    man: [
       
    ]
};

export default function Homeservices() {
    const [tab, setTab] = useState('women');

    return (
        <section className="mt-8 px-2 sm:px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <h3 className="text-[20px] md:text-[24px] font-bold uppercase underline decoration-[#717171] text-center sm:text-left">SERVICES</h3>
            <div className="flex gap-2 mt-2 sm:mt-0 ml-5">
              <button
                className={`px-4 sm:px-6 py-1  rounded-xl text-[16px] sm:text-[20px] font-semibold ${tab === 'women' ? 'bg-[#6E7C78] text-white' : 'bg-transparent text-[#6E7C78]'} transition`}
                onClick={() => setTab('women')}
              >
                For women
              </button>
              <button
                className={`px-3 sm:px-4 py-1 text-[14px] sm:text-[16px] rounded-xl font-semibold ${tab === 'man' ? 'bg-[#6E7C78] text-white' : 'text-[#717171]'} transition`}
                onClick={() => setTab('man')}
              >
                For man
              </button>
            </div>
          </div>
          <Link
            href="/services"
            className="text-[16px] sm:text-[20px] w-36 text-[#6E7C78] font-semibold underline-offset-4 hover:underline"
          >
            View all...
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {servicesData[tab].map((srv) => (
            <Link href={`/services/${srv.label}`} key={srv.label} className="flex flex-col items-center w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full relative overflow-hidden flex items-center justify-center shadow-sm bg-[#f5f5f5]">
                <Image
                  src={srv.image}
                  alt={srv.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width:1024px) 8vw, 176px"
                  className="object-cover w-full h-full"
                />
                <span className="absolute bottom-2 w-full text-center text-white text-sm sm:text-lg font-semibold shadow-sm px-1">
                  {srv.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
}
