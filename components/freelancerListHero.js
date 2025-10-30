
// import React from 'react'
// import Image from 'next/image'

// function HeroSection() {
//     return (
//         <>
//             <div className="bg-black text-white relative pt-14">

//                 {/* Main Hero Content */}
//                 <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[90vh] px-8 lg:px-16 py-12">

                    // {/* Left side images */}
                    // <div className="lg:w-1/4 relative flex flex-col items-end mt-8 lg:mt-0">

                    //     {/* Image 1 - thoda left side aur upar */}
                    //     {/* <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-6 -translate-y-4"> */}
                    //     <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform translate-x-41">
                    //         <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    //     {/* Image 2 - thoda right side middle me */}
                    //     <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-20 -translate-y-1">
                    //         <Image src="/salonlist/img3.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    //     {/* Image 3 - thoda left side aur niche */}
                    //     <div className="relative w-40 h-28 rounded-lg overflow-hidden shadow-lg transform -translate-x-2 translate-y-16">
                    //         <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    // </div>


                    // {/* Center text + main image */}
                    // <div className="lg:w-2/4 flex flex-col items-center justify-center text-center px-6">
                    //     <h1
                    //         className="text-[45px] leading-[100%] tracking-[0] text-center text-white"
                    //     >
                    //         Unleash <span className="text-[55px] text-white">Your Inner</span>{" "} Glow
                    //     </h1>

                    //     <div className="relative w-[360px] h-[480px] rounded-[300px] overflow-hidden shadow-2xl border border-gray-700">
                    //         <Image
                    //             src="/salonlist/img1.jpg"
                    //             alt="Main Model"
                    //             fill
                    //             className="object-cover"
                    //         />
                    //     </div>
                    // </div>

                    // {/* Right side images */}
                    // <div className="lg:w-1/4 relative flex flex-col items-start mt-8 lg:mt-0">

                    //     {/* Image 1 - thoda right side aur upar */}
                    //     <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-35 -translate-y-4">
                    //         <Image src="/salonlist/img4.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    //     {/* Image 2 - center thoda left side me */}
                    //     <div className="relative w-40 h-28 rounded-lg overflow-hidden shadow-lg transform translate-x-36 -translate-y-1">
                    //         <Image src="/salonlist/img5.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    //     {/* Image 3 - thoda right side aur niche */}
                    //     <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-42 translate-y-10">
                    //         <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
                    //     </div>

                    // </div>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default HeroSection



    "use client";
    import React from "react";
    import Image from "next/image";

    export default function HeroSection() {
    return (
        <section className="relative bg-[#587066] pb-[49px]">
        {/* ✅ Inner Black Box */}
        <div className="relative bg-black text-white shadow-2xl w-[90%] max-w-[1300px] h-[600px] py-12 px-8">
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

            {/* ✅ Main Hero Content */}
            <div className="flex flex-col items-center justify-center text-center relative z-10">
            <h1 className="text-[42px] md:text-[50px] font-light leading-[1.2] pt-12">
                Unleash <span className="font-semibold">Your Inner</span> Glow
            </h1>

            {/* Center Circular Image */}
            <div className="relative w-[360px] h-[480px] rounded-[300px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.6)] border border-gray-700">
                <Image
                src="/salonlist/img1.jpg"
                alt="Main Model"
                fill
                className="object-cover"
                />
            </div>

            {/* Bottom floating images inside the black box */}
            {/* <div className="flex justify-center gap-6 mt-12">
                <div className="relative w-44 h-32 rounded-xl overflow-hidden shadow-lg">
                <Image src="/salonlist/img3.jpg" alt="Service" fill className="object-cover" />
                </div>
                <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                <Image src="/salonlist/img7.jpg" alt="Service" fill className="object-cover" />
                </div>
            </div> */}
            </div>
        </div>
        </section>
    );
    }
