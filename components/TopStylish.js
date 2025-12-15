import Image from 'next/image'
import React from 'react'


const stylists = [
    { src: "/Salon/1.png", name: "ALISA MENON", role: "Nail Artist" },
    { src: "/Salon/2.png", name: "RAVI SINGH", role: "Hair Stylist" },
    { src: "/Salon/3.png", name: "JAYA SHAH", role: "Makeup Expert" },
    { src: "/Salon/4.png", name: "SONAL DESAI", role: "Facial Specialist" },
    { src: "/Salon/5.png", name: "VIJAY PATEL", role: "Color Expert" },
    { src: "/Salon/6.png", name: "SAMIRA KHAN", role: "Hairdresser" },
];

export default function TopStylish({staffData}) {
    return (
        <>
            <section className='mt-8'>
                <h3 className='text-2xl sm:text-[28px] font-semibold decoration-[#363333]'><i className='font-normal'>Meet our </i>Top Stylist</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 my-5 mx-auto ">
                    {staffData.map((stylist, idx) => (
                        <div key={idx} className='bg-transparent rounded-[14px] flex flex-col border-[#CBAA87] border items-center overflow-hidden '>
                            <div
                                className="
                              relative 
                              w-full            
                              h-36                  
                              sm:h-44               
                              md:h-48                 
                              lg:h-52               
                              rounded-t-[14px]
                              rounded-b-[30px] 
                              overflow-hidden
                            "
                            >
                                <Image
                                    src={stylist.avatarUrl}
                                    alt={stylist.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width:1024px) 350px, 224px"
                                />
                            </div>
                            <div className="my-1 text-center">
                                <p className="text-[14px] italic font-semibold text-[#5F3F31]">
                                    {stylist.name}
                                </p>
                                <small className='text-[12px] text-[#5F3F31]'>
                                    {stylist.role || "Stylist"}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            {/* Deals Section */}
           
        </>
    )
}
