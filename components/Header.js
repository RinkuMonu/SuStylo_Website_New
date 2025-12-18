"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import LoginModal from '../components/modals/LoginModal';
import AuthModalManager from "../components/modals/AuthModalManager";
//h

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setTimeout(() => setIsLoggedIn(!!token), 0);
  }, []);




  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const [openLogin, setOpenLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const pathname = usePathname();
  const isHome = pathname === '/';

  const headerClass = `
    fixed top-0 left-0 z-50 w-full py-3 px-4 sm:px-10 md:px-16 lg:px-16 border-b-2 border-[#717171] transition-colors duration-300
    ${scrolled ? 'bg-[#181818]/90 backdrop-blur border-0' : isHome ? 'bg-transparent' : 'bg-[#181818]'}
  `;



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={headerClass}>
        <div className="max-w-6xl flex items-center justify-between mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-lg px-3 py-2 sm:px-6 sm:py-2 shadow font-semibold text-base sm:text-xl text-gray-800">
                <Image src="/logo.png" alt="Sustylo Logo" width={120} height={120} />              
            </div>
          </div>


          {/* Hamburger Button (Mobile Only) */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 ml-10">
            <Link href="/" className="text-white font-light text-[12px] hover:underline">HOME</Link>
            <Link href="/allservices" className="text-stone-300 font-light text-[12px] hover:text-white">SERVICES</Link>
            <Link href="/contact" className="text-stone-300 font-light text-[12px] hover:text-white">CONTACT US</Link>
            <Link href="/blog" className="text-stone-300 font-light text-[12px] hover:text-white">BLOG</Link>
            {/* <Link href="/login" className="text-stone-300 font-light text-[12px] hover:text-white">LOGIN</Link> */}
            {/* <Link
              href="#"
              // onClick={() => setOpenLogin(true)}
              onClick={() => setShowModal(true)}
              className="text-stone-300 font-light text-[12px] hover:text-white"
            >
              LOGIN
            </Link> */}

            {isLoggedIn ? (
              <Link href="/profile" className="text-stone-300 font-light text-[12px] hover:text-white" >
                PROFILE
              </Link>
            ) : (
              <Link href="#" onClick={() => setShowModal(true)} className="text-stone-300 font-light text-[12px] hover:text-white" >
                LOGIN
              </Link>
            )}

            {/* <FaShoppingCart className="text-[#CBAA87] mx-2" size={16} /> */}
            {/* <FaUser className="text-[#CBAA87] mx-2" size={16} /> */}
            <div className="lg:pr-10">
              <Link href="/salonList" className="px-7 py-2 text-[12px] rounded-full bg-[#9D9C9A] text-white font-medium shadow transition">
                BOOK AN APPOINTMENT
              </Link>
              <Link href="/" className="ml-3 px-5 py-2 rounded-full text-[12px] bg-[#E9E3D9] text-gray-900 font-medium shadow hover:bg-stone-300 transition">
                GET APP
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {open && (
          <div className="lg:hidden bg-[#181818] bg-opacity-95 fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center gap-6">
            {/* Close button always visible top right */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-60"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* Menu Content - add spacing below close btn */}
            <Link href="/" className="text-white font-light text-lg mt-20">HOME</Link>
            <Link href="/services" className="text-stone-300 font-light text-lg">SERVICES</Link>
            <Link href="/contact" className="text-stone-300 font-light text-lg">CONTACT US</Link>
            <Link href="/blog" className="text-stone-300 font-light text-lg">BLOG</Link>
            <div className="flex gap-4 mt-4">
              <FaShoppingCart className="text-[#CBAA87]" size={22} />
              <FaUser className="text-[#CBAA87]" size={22} />
            </div>
            <Link href="/" className="px-7 py-3 text-lg rounded-full bg-[#9D9C9A] text-white font-medium shadow transition mt-4">
              BOOK AN APPOINTMENT
            </Link>
            <Link href="/" className="px-5 py-3 rounded-full text-lg bg-[#E9E3D9] text-gray-900 font-medium shadow hover:bg-stone-300 transition mt-2">
              GET APP
            </Link>
          </div>
        )}

      </header>

      {/* <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} /> */}
      <AuthModalManager isOpen={showModal} onClose={() => setShowModal(false)} />

    </>
  );
}
