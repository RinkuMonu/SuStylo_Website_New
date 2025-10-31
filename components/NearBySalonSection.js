"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

const salons = [
  {
    name: "STYLE & SCISSORS",
    subtitle: "All star club",
    imgUrl: "/Home/salon1.png"
  },
  {
    name: "STYLE & SCISSORS",
    subtitle: "All star club",
    imgUrl: "/Home/salon2.png"
  },
  {
    name: "STYLE & SCISSORS",
    subtitle: "All star club",
    imgUrl: "/Home/salon3.png"
  },
  {
    name: "STYLE & SCISSORS",
    subtitle: "All star club",
    imgUrl: "/Home/salon4.png"
  }
];

export default function NearBySalonSection() {
  return (
    <section className="pb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-[28px] font-bold underline decoration-[#363333]">NEAR BY SALON</h2>
        <Link href="/salons" className="px-5 py-2 bg-[#536764] text-white text-sm rounded-lg font-medium shadow transition hover:bg-[#6e8782]">
          View more
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mx-auto">
        {salons.map((salon, idx) => (
          <div key={idx} className="bg-white rounded-[48px] flex flex-col border-[#CBAA87] border items-center overflow-hidden lg:w-max">
            <div
              className="
                relative 
                w-full            
                h-36                  
                sm:h-44              
                md:h-48             
                lg:w-56               
                lg:h-52               
                rounded-t-[28px] 
                overflow-hidden
              "
            >
              <Image
                src={salon.imgUrl}
                alt={salon.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width:1024px) 350px, 224px"
              />
            </div>

            <div className="my-3 text-center">
              <div className="text-[16px] font-serif font-semibold text-[#363333]">{salon.name}</div>
              <div className="flex items-center justify-center gap-2 text-[#697070] text-base mt-1 font-serif">
                <FaMapMarkerAlt className="text-[#697070] w-[14px]" />
                {salon.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
