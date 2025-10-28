"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

// Put tabContent first, then get tabs from its keys
const tabContent = {
  "Threading": [
    {
      title: "Threading",
      imgUrl: "/Home/threading1.png",
      duration: "0.20hr"
    }
  ],
  "Manicure & Pedicure": [
    {
      title: "Manicure",
      imgUrl: "/Home/manicure1.png",
      duration: "0.45hr"
    },
    {
      title: "Pedicure",
      imgUrl: "/Home/pedicure1.png",
      duration: "0.45hr"
    }
  ],
  "Facial": [
    {
      title: "Hydra Facial",
      imgUrl: "/Home/hydra-facial.png",
      duration: "1.30hr"
    },
    {
      title: "Korean Facial",
      imgUrl: "/Home/threading1.png",
      duration: "1.30hr"
    },
    {
      title: "Ayurvedic Facial",
      imgUrl: "/Home/manicure1.png",
      duration: "1.30hr"
    },
    {
      title: "Signature Facial",
      imgUrl: "/Home/pedicure1.png",
      duration: "1.30hr"
    }
  ],
  "Waxing": [
    {
      title: "Full Arms Waxing",
      imgUrl: "/Home/hydra-facial.png",
      duration: "0.30hr"
    }
  ],
  "Massage": [
    {
      title: "Head Massage",
      imgUrl: "/Home/pedicure1.png",
      duration: "0.45hr"
    }
  ],
  "Hair spa": [
    {
      title: "Hair Spa",
      imgUrl: "/Home/manicure1.png",
      duration: "1.00hr"
    }
  ]
};

const tabs = Object.keys(tabContent); 

export default function ServiceSection() {
  const [activeTab, setActiveTab] = useState("Facial");

  return (
    <>
      <section className='mt-12'>
        <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">Services at home</h3>
        <div className='flex justify-between items-center'>
          <nav className="flex flex-wrap gap-5 items-center text-lg my-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab
                    ? "bg-[#536764] text-white py-1 px-3 rounded-[10px] transition cursor-pointer text-[20px]"
                    : "bg-transparent text-black p-0 py-1 pr-3 rounded-full transition text-[20px]"
                }
              >
                {tab}
              </button>
            ))}
          </nav>
          <Link href={"/services"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {tabContent[activeTab].map((service, idx) => (
            <div key={idx} className="rounded-2xl bg-gray-200 shadow relative overflow-hidden h-50">
              <Image fill src={service.imgUrl} alt={service.title} className="w-full h-40 object-cover rounded-2xl" />
              <span className="absolute bottom-3 left-3  bg-opacity-60 text-white py-1 px-3 rounded">
                {service.duration}
              </span>
              <div className="pt-3 pb-2 px-3 text-[#607076] text-lg">{service.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
