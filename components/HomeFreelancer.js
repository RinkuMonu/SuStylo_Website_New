"use client";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'



const experts = [
    {
        name: "Alisa Menon",
        role: "Makeup expert",
        imgUrl: "/Home/expert1.png",
        rating: 4.5
    },
    {
        name: "Alisa Menon",
        role: "Makeup expert",
        imgUrl: "/Home/expert2.png",
        rating: 4.5
    },
    {
        name: "Alisa Menon",
        role: "Makeup expert",
        imgUrl: "/Home/expert3.png",
        rating: 4.5
    },
    {
        name: "Alisa Menon",
        role: "Makeup expert",
        imgUrl: "/Home/expert4.png",
        rating: 4.5
    }
];
export default function HomeFreelancer() {
    return (
        <>
            <section className='my-12'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">CHOOSE YOUR FREELANCER</h3>
                    <Link href={"/freelancer"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
                </div>
                <div className="py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {experts.map((expert, idx) => (
                            <Link href={"/freelancer"} key={idx} className="rounded-2xl relative overflow-hidden flex flex-col items-center">
                                <div className="w-64  relative h-44 rounded-2xl overflow-hidden">
                                    <Image
                                        src={expert.imgUrl}
                                        alt={expert.name}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                    <span className="absolute bottom-3 right-3 flex items-center bg-[#f4ecd3] px-2 py-1 rounded-full text-sm font-medium text-gray-800 shadow">
                                        <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.845 12 .967 7.91l7.156-.616L10 0l1.877 7.294 7.156.616-4.878 4.09 1.723 5.18z"></path></svg>
                                        {expert.rating}
                                    </span>
                                </div>
                                <div className="py-3 w-full text-center">
                                    <div className="text-[20px]  font-semibold text-black">{expert.name}</div>
                                    <div className="text-[#617772] text-[15px] mt-1">{expert.role}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}