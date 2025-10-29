"use client";
import Image from 'next/image';
import { FaMapMarkerAlt } from "react-icons/fa";

const salons = [
  {
    imgUrl: "/Home/popular2.png",
    name: "Style & Scissors",
    subtitle: "All Star Club"
  },
  {
    imgUrl: "/Home/popular3.png",
    name: "Style & Scissors",
    subtitle: "Luxury Lane"
  },
  {
    imgUrl: "/Home/popular4.png",
    name: "Style & Scissors",
    subtitle: "City Center"
  }
];

export default function PopularSalon() {
  return (
    <>
      <section className="min-h-[60vh] bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(./Home/centerbg.png)" }}
      >
        <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto px-4 sm:px-10 md:px-14 py-12'>
          <div className="md:w-[30%] w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#222] text-center md:text-center leading-tight">
              MOST POPULAR <br /> SALON
            </h2>
          </div>
          {/* Right: Card */}
          <div className="md:w-[70%] w-full">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-xl border border-[#B1B1B1]">
              <div className="relative w-full h-40 sm:h-56 md:h-80">
                <Image
                  src="/Home/popular.png"
                  alt="Winsome Beauty Studio Unisex Salon"
                  fill
                  className="object-cover w-full h-full rounded-b-2xl"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
              <div className="px-4 sm:px-7 py-4">
                <div className="text-[18px] sm:text-[20px] font-semibold text-[#1c1b1b]">
                  WINSOME BEAUTY STUDIO UNISEX SALON
                </div>
                <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
                  <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
                  All Star Club
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Card Grid */}
      <section className='max-w-7xl mx-auto pb-5 px-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
          {salons.map((salon, idx) => (
            <div key={idx} className="rounded-[30px] overflow-hidden bg-white border border-[#B1B1B1] w-full h-full flex flex-col shadow-xl">
              <div className="relative w-full h-40 sm:h-44 md:h-52">
                <Image
                  src={salon.imgUrl}
                  alt={salon.name}
                  fill
                  className="object-cover rounded-b-2xl"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="px-4 sm:px-7 py-4 flex flex-col flex-1">
                <div className="text-[16px] sm:text-[20px] font-semibold text-[#1c1b1b]">
                  {salon.name}
                </div>
                <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
                  <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
                  {salon.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
