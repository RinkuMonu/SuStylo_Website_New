"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

export default function ServiceSection({
  title = "Services at home",
  tabContent,
  viewMoreUrl = "/services"
}) {
  const tabs = Object.keys(tabContent);
  const [activeTab, setActiveTab] = useState(tabs[0] || "");

  return (
    <section className='my-12'>
      <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">{title}</h3>
      <div className='flex justify-between items-center'>
        <nav className="flex flex-wrap gap-5 items-center text-lg my-4 ">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab
                  ? "bg-[#536764] text-white py-1 px-3 rounded-[10px] transition cursor-pointer text-[18px]"
                  : "bg-transparent text-black p-0 py-1 pr-3 rounded-full transition text-[18px]"
              }
            >
              {tab}
            </button>
          ))}
        </nav>
        <Link href={viewMoreUrl} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {tabContent[activeTab].map((service, idx) => (
          <Link  href={service.link || "/"} key={idx}>
            <div className="rounded-2xl bg-gray-200 shadow relative overflow-hidden h-50">
              <Image fill src={service.imgUrl} alt={service.title} className="w-full h-100 object-cover rounded-2xl" />
              <span className="absolute bottom-3 left-3 bg-opacity-60 text-white py-1 px-3 rounded">
                {service.duration}
              </span>
            </div>
            <div className="pt-3 pb-2 px-3 pl-0 text-[#607076] text-xl font-bold">{service.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
