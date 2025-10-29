"use client";
import Image from 'next/image';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PopularSalon() {
    return (
        <>
            <section className="h-[87vh] relative bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
                style={{ backgroundImage: "url(./Home/centerbg.png)" }}
            >
                <div className='py-12  flex flex-col md:flex-row justify-between items-center relative'>
                    <div className="md:w-[40%] flex flex-col items-center md:items-start mb-8 md:mb-0">
                        <h2 className="text-[38px]  font-bold text-[#222] text-center  leading-tight">
                            MOST POPULAR <br /> SALON
                        </h2>
                    </div>

                    {/* Right: Card */}
                    <div className="md:w-2/3 max-w-3xl w-full">
                        <div className="rounded-[30px] overflow-hidden bg-white shadow-xl">
                            <div className="relative w-full h-64 md:h-80">
                                <Image
                                    src="/Home/popular.png" 
                                    alt="Winsome Beauty Studio Unisex Salon"
                                    fill
                                    className="object-cover w-full h-full rounded-b-2xl"
                                />
                            </div>
                            <div className="p-7">
                                <div className="text-[24px]  font-semibold mb-2 text-[#1c1b1b]">
                                    WINSOME BEAUTY STUDIO UNISEX SALON
                                </div>
                                <div className="flex items-center gap-2 text-[#697070] text-base mt-1 ">
                                    <FaMapMarkerAlt className="text-[#697070] w-[18px]" />
                                    All Star Club
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
