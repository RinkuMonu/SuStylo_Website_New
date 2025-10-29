
import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (
        <>
            <div className="bg-black text-white relative overflow-hidden pt-14">

                {/* Main Hero Content */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[90vh] px-8 lg:px-16 py-12">

                    {/* Left side images */}
                    <div className="lg:w-1/4 relative flex flex-col items-end mt-8 lg:mt-0">

                        {/* Image 1 - thoda left side aur upar */}
                        {/* <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-6 -translate-y-4"> */}
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform translate-x-41">
                            <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
                        </div>

                        {/* Image 2 - thoda right side middle me */}
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-20 -translate-y-1">
                            <Image src="/salonlist/img3.jpg" alt="Service" fill className="object-cover" />
                        </div>

                        {/* Image 3 - thoda left side aur niche */}
                        <div className="relative w-40 h-28 rounded-lg overflow-hidden shadow-lg transform -translate-x-2 translate-y-16">
                            <Image src="/salonlist/img6.jpg" alt="Service" fill className="object-cover" />
                        </div>

                    </div>


                    {/* Center text + main image */}
                    <div className="lg:w-2/4 flex flex-col items-center justify-center text-center px-6">
                        <h1
                            className="text-[45px] leading-[100%] tracking-[0] text-center text-white"
                        >
                            Unleash <span className="text-[55px] text-white">Your Inner</span>{" "} Glow
                        </h1>

                        <div className="relative w-[360px] h-[480px] rounded-[300px] overflow-hidden shadow-2xl border border-gray-700">
                            <Image
                                src="/salonlist/img1.jpg"
                                alt="Main Model"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side images */}
                    <div className="lg:w-1/4 relative flex flex-col items-start mt-8 lg:mt-0">

                        {/* Image 1 - thoda right side aur upar */}
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-35 -translate-y-4">
                            <Image src="/salonlist/img4.jpg" alt="Service" fill className="object-cover" />
                        </div>

                        {/* Image 2 - center thoda left side me */}
                        <div className="relative w-40 h-28 rounded-lg overflow-hidden shadow-lg transform translate-x-36 -translate-y-1">
                            <Image src="/salonlist/img5.jpg" alt="Service" fill className="object-cover" />
                        </div>

                        {/* Image 3 - thoda right side aur niche */}
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-lg transform -translate-x-42 translate-y-10">
                            <Image src="/salonlist/img2.jpg" alt="Service" fill className="object-cover" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default HeroSection
