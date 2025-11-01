"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import axiosInstance from "../src/app/axios/axiosinstance";

export default function PopularSalon() {
  const [salons, setSalons] = useState([]);

  // load data from API
  useEffect(() => {
    const fetchTopSalons = async () => {
      try {
        const res = await axiosInstance.get("/salons/salons/top-rated");
        // res?.data?.salons is array
        const list = Array.isArray(res?.data?.salons) ? res.data.salons : [];

        setSalons(list);
      } catch (err) {
        console.error("Failed to load top-rated salons:", err);
        setSalons([]); // fallback empty
      }
    };

    fetchTopSalons();
  }, []);

  // pick first salon for the big highlighted card at top
  const mainSalon = salons[0];

  // rest salons (for grid below)
  const otherSalons = salons.slice(1);

  // helpers to safely read nested fields
  const getAddressLine = (salon) => {
    const area = salon?.address?.area || "";
    const city = salon?.address?.city || "";
    // show "area, city" (skip extra commas if missing)
    if (area && city) return `${area}, ${city}`;
    return area || city || "";
  };

  return (
    <>
      {/* TOP FEATURED SALON SECTION */}
      <section
        className="min-h-[60vh] bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(./Home/centerbg.png)" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto px-4 sm:px-10 md:px-14 py-12">
          {/* Left heading */}
          <div className="md:w-[30%] w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#222] text-center md:text-center leading-tight">
              MOST POPULAR <br /> SALON
            </h2>
          </div>

          {/* Right featured card */}
          <div className="md:w-[70%] w-full">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-xl border border-[#B1B1B1]">
              <div className="relative w-full h-40 sm:h-56 md:h-80">
                <Image
                  // if no coverImage from API, fallback to your static
                  src={
                    mainSalon?.coverImage
                      ? mainSalon.coverImage
                      : "/Home/popular.png"
                  }
                  alt={mainSalon?.salonName || "Salon Image"}
                  fill
                  className="object-cover w-full h-full rounded-b-2xl"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <div className="px-4 sm:px-7 py-4">
                <div className="text-[18px] sm:text-[20px] font-semibold text-[#1c1b1b]">
                  {mainSalon?.salonName || "—"}
                </div>

                <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
                  <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
                  {getAddressLine(mainSalon) || "—"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID OF OTHER SALONS */}
      <section className="max-w-7xl mx-auto pb-5 px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {otherSalons.map((salon, idx) => (
            <div
              key={salon?._id || idx}
              className="rounded-[30px] overflow-hidden bg-white border border-[#B1B1B1] w-full h-full flex flex-col shadow-xl"
            >
              <div className="relative w-full h-40 sm:h-44 md:h-52">
                <Image
                  src={
                    salon?.coverImage
                      ? salon.coverImage
                      : "/Home/popular2.png" // fallback
                  }
                  alt={salon?.salonName || "Salon"}
                  fill
                  className="object-cover rounded-b-2xl"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              <div className="px-4 sm:px-7 py-4 flex flex-col flex-1">
                <div className="text-[16px] sm:text-[20px] font-semibold text-[#1c1b1b]">
                  {salon?.salonName || "—"}
                </div>

                <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
                  <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
                  {getAddressLine(salon) || "—"}
                </div>
              </div>
            </div>
          ))}

          {/* If we only got 1 salon from API, no others -> we show nothing extra */}
        </div>
      </section>
    </>
  );
}


// "use client";
// import Image from 'next/image';
// import { FaMapMarkerAlt } from "react-icons/fa";

// const salons = [
//   {
//     imgUrl: "/Home/popular2.png",
//     name: "Style & Scissors",
//     subtitle: "All Star Club"
//   },
//   {
//     imgUrl: "/Home/popular3.png",
//     name: "Style & Scissors",
//     subtitle: "Luxury Lane"
//   },
//   {
//     imgUrl: "/Home/popular4.png",
//     name: "Style & Scissors",
//     subtitle: "City Center"
//   }
// ];

// export default function PopularSalon() {
//   return (
//     <>
//       <section className="min-h-[60vh] bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(./Home/centerbg.png)" }}
//       >
//         <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto px-4 sm:px-10 md:px-14 py-12'>
//           <div className="md:w-[30%] w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
//             <h2 className="text-[28px] sm:text-[32px] font-bold text-[#222] text-center md:text-center leading-tight">
//               MOST POPULAR <br /> SALON
//             </h2>
//           </div>
//           {/* Right: Card */}
//           <div className="md:w-[70%] w-full">
//             <div className="rounded-[30px] overflow-hidden bg-white shadow-xl border border-[#B1B1B1]">
//               <div className="relative w-full h-40 sm:h-56 md:h-80">
//                 <Image
//                   src="/Home/popular.png"
//                   alt="Winsome Beauty Studio Unisex Salon"
//                   fill
//                   className="object-cover w-full h-full rounded-b-2xl"
//                   sizes="(max-width: 768px) 100vw, 700px"
//                 />
//               </div>
//               <div className="px-4 sm:px-7 py-4">
//                 <div className="text-[18px] sm:text-[20px] font-semibold text-[#1c1b1b]">
//                   WINSOME BEAUTY STUDIO UNISEX SALON
//                 </div>
//                 <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
//                   <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
//                   All Star Club
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Responsive Card Grid */}
//       <section className='max-w-7xl mx-auto pb-5 px-14'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
//           {salons.map((salon, idx) => (
//             <div key={idx} className="rounded-[30px] overflow-hidden bg-white border border-[#B1B1B1] w-full h-full flex flex-col shadow-xl">
//               <div className="relative w-full h-40 sm:h-44 md:h-52">
//                 <Image
//                   src={salon.imgUrl}
//                   alt={salon.name}
//                   fill
//                   className="object-cover rounded-b-2xl"
//                   sizes="(max-width: 768px) 100vw, 350px"
//                 />
//               </div>
//               <div className="px-4 sm:px-7 py-4 flex flex-col flex-1">
//                 <div className="text-[16px] sm:text-[20px] font-semibold text-[#1c1b1b]">
//                   {salon.name}
//                 </div>
//                 <div className="flex items-center gap-2 text-[#697070] text-base mt-1">
//                   <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
//                   {salon.subtitle}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
