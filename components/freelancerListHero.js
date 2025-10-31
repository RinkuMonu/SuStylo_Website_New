// "use client";
// import React from "react";
// import Image from "next/image";

// export default function HeroSection() {
//     return (
//         <section className="relative bg-[#587066] pb-[49px]">
//             {/* ✅ Inner Black Box */}
//             <div className="relative bg-black text-white shadow-2xl w-[90%] max-w-[1300px] h-[600px] py-12 px-8">
//                 {/* Left floating images */}
//                 <div className="absolute left-[290px] top-[180px] w-48 h-32 rounded-xl overflow-hidden shadow-lg z-[20]">
//                     <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 <div className="absolute left-[10px] bottom-[200px] w-40 h-28 rounded-xl overflow-hidden shadow-lg">
//                     <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 <div className="absolute left-[280px] bottom-[0px] w-40 h-28 rounded-xl overflow-hidden shadow-lg">
//                     <Image src="/salonlist/img3.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 {/* Right floating images */}
//                 <div className="absolute right-[230px] top-[180px] w-48 h-32 rounded-xl overflow-hidden shadow-lg">
//                     <Image src="/salonlist/img4.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 <div className="absolute right-[-100px] bottom-[200px] w-44 h-28 rounded-xl overflow-hidden shadow-lg">
//                     <Image src="/salonlist/img5.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 <div className="absolute right-[230px] bottom-[50px] w-64 h-42 rounded-xl overflow-hidden shadow-lg z-[20]">
//                     <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
//                 </div>

//                 {/* ✅ Main Hero Content */}
//                 <div className="flex flex-col items-center justify-center text-center relative z-10">
//                     <h1 className="text-[42px] md:text-[50px] font-light leading-[1.2] pt-12">
//                         Unleash <span className="font-semibold">Your Inner</span> Glow
//                     </h1>

//                     {/* Center Circular Image */}
//                     <div className="relative w-[360px] h-[480px] rounded-[300px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.6)] border border-gray-700">
//                         <Image
//                             src="/salonlist/img1.jpg"
//                             alt="Main Model"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#587066] pb-[49px]">
      {/* ✅ Inner Black Box */}
      <div className="relative bg-black text-white shadow-2xl w-[90%] max-w-[1300px] h-[600px] py-12 px-8">

        {/* ✅ Floating images (show only on md and up) */}
        <div className="hidden md:block">
          {/* Left floating images */}
          <div className="absolute left-[290px] top-[180px] w-48 h-32 rounded-xl overflow-hidden shadow-lg z-[20]">
            <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
          </div>

          <div className="absolute left-[10px] bottom-[200px] w-40 h-28 rounded-xl overflow-hidden shadow-lg">
            <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
          </div>

          <div className="absolute left-[280px] bottom-[0px] w-40 h-28 rounded-xl overflow-hidden shadow-lg">
            <Image src="/salonlist/img3.jpg" alt="Service" fill className="object-cover" />
          </div>

          {/* Right floating images */}
          <div className="absolute right-[230px] top-[180px] w-48 h-32 rounded-xl overflow-hidden shadow-lg">
            <Image src="/salonlist/img4.jpg" alt="Service" fill className="object-cover" />
          </div>

          <div className="absolute right-[-100px] bottom-[200px] w-44 h-28 rounded-xl overflow-hidden shadow-lg">
            <Image src="/salonlist/img5.jpg" alt="Service" fill className="object-cover" />
          </div>

          <div className="absolute right-[230px] bottom-[50px] w-64 h-42 rounded-xl overflow-hidden shadow-lg z-[20]">
            <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
          </div>
        </div>

        {/* ✅ Main Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full md:h-auto">
          <h1 className="text-[26px] sm:text-[34px] md:text-[50px] font-light leading-[1.2] pt-8 md:pt-12 px-2">
            Unleash <span className="font-semibold">Your Inner</span> Glow
          </h1>

          {/* Center Circular Image */}
          <div className="relative w-[360px] h-[480px] rounded-[300px] rounded-[300px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.6)] border border-gray-700">
            <Image
              src="/salonlist/img1.jpg"
              alt="Main Model"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
