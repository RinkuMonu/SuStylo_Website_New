"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const servicesData = {
    women: [
        { label: 'Hair Colour', image: '/Home/hair-colour.png' },
        { label: 'Threading', image: '/Home/threading.png' },
        { label: 'Facial', image: '/Home/facial.png' },
        { label: 'Hair cut', image: '/Home/hair-cut.png' },
        { label: 'Manicure', image: '/Home/manicure.png' },
        { label: 'Pedicure', image: '/Home/pedicure.png' },
        { label: 'Massage', image: '/Home/massage.png' },
        { label: 'Nail art', image: '/Home/nail-art.png' },
        { label: 'Makeup', image: '/Home/makeup.png' },
        { label: 'Bleach', image: '/Home/bleach.png' }
    ],
    man: [
        // Add "man" services if needed
    ]
};

export default function Homeservices() {
    const [tab, setTab] = useState('women');

    return (
        <section className="mt-8">
            <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">SERVICES</h3>

                    <button
                        className={`px-6 py-1 ml-7 rounded-xl text-[20px] font-semibold ${tab === 'women' ? 'bg-[#6E7C78] text-white' : 'bg-transparent text-[#6E7C78]'
                            } transition`}
                        onClick={() => setTab('women')}
                    >
                        For women
                    </button>
                    <button
                        className={`px-4 py-1 text-[16px] rounded-xl font-semibold ${tab === 'man' ? 'bg-[#6E7C78] text-white' : 'text-[#717171]'
                            } transition`}
                        onClick={() => setTab('man')}
                    >
                        For man
                    </button>
                  
                </div>
                  <Link
                        href="/services"
                        className="text-[20px] mr-12 text-[#6E7C78] font-semibold underline-offset-4 hover:underline"
                    >
                        View all...
                    </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {servicesData[tab].map((srv) => (
                    <Link href={`/services/${srv.label}`} key={srv.label} className="flex flex-col items-center w-max">
                        <div className="w-44 h-44 rounded-full relative overflow-hidden flex items-center justify-center">
                            <Image
                                width={200}
                                height={200}
                                src={srv.image}
                                alt={srv.label}
                                className="object-cover w-full h-full"
                            />
                            <span className="mt-2 text-white text-lg absolute font-semibold shadow-sm text-center bottom-4">
                                {srv.label}
                            </span>
                        </div>

                    </Link>
                ))}
            </div>
        </section>
    );
}
