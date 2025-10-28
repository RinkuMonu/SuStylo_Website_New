import Link from 'next/link';
import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
export default function Header() {
    return (
        <>
            <header className="w-full flex items-center justify-between bg-transparent py-3 px-8 shadow">
                <div className="flex items-center">
                    <div className="bg-white rounded-lg px-6 py-2 shadow font-semibold text-xl text-gray-800">
                        Logo Here
                    </div>
                </div>

                <nav className="flex items-center gap-9 ml-10">
                    <a href="#" className="text-white font-light  text-[12px] *:hover:underline">HOME</a>
                    <a href="#" className="text-stone-300 font-light  text-[12px] *:hover:text-white">SERVICES</a>
                    <a href="#" className="text-stone-300 font-light  text-[12px] *:hover:text-white">CONTACT US</a>
                    <a href="#" className="text-stone-300 font-light  text-[12px] *:hover:text-white">BLOG</a>

                    <FaShoppingCart className="text-[#CBAA87] mx-2" size={16} />
                    <FaUser className="text-[#CBAA87] mx-2" size={16} />

                    <Link href={"/"} className="ml-6 px-7 py-2 text-[12px] rounded-full bg-[#9D9C9A] text-white font-medium shadow  transition">
                        BOOK AN APPOINTMENT
                    </Link>
                    <Link href={"/"} className="ml-3 px-5 py-2 rounded-full bg-stone-100 text-gray-900 font-medium shadow hover:bg-stone-300 transition">
                        GET APP
                    </Link>
                </nav>
            </header>
        </>
    )
}
