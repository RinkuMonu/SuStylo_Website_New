"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Image from "next/image";

import AuthModalManager from "../components/modals/AuthModalManager";

export default function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token");
    }
    return false;
  });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsLoggedIn(!!token);
  // }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `
    fixed top-0 left-0 z-50 w-full transition-all duration-300
    ${scrolled ? "bg-[#181818]/90 backdrop-blur" : isHome ? "bg-transparent" : "bg-[#181818]"}
  `;

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-2">
          
          {/* Logo */}
          <Link href="/" className="flex items-center bg-[#f6efe4] px-3 py-2 rounded-md shadow">
            <Image
              src="/logo.png"
              alt="Sustylo Logo"
              width={70}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/allservices">SERVICES</NavLink>
            <NavLink href="/contact">CONTACT US</NavLink>
            <NavLink href="/blog">BLOG</NavLink>

            {isLoggedIn ? (
              <NavLink href="/profile">PROFILE</NavLink>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="text-stone-300 text-xs hover:text-white"
              >
                LOGIN
              </button>
            )}

            <div className="flex items-center gap-3">
              <Link
                href="/salonlist"
                className="px-6 py-2 text-xs rounded-full bg-[#9D9C9A] text-white font-medium"
              >
                BOOK APPOINTMENT
              </Link>
              <Link
                href="/"
                className="px-5 py-2 text-xs rounded-full bg-[#E9E3D9] text-gray-900 font-medium"
              >
                GET APP
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden fixed inset-0 bg-[#181818] bg-opacity-95 flex flex-col items-center justify-center gap-6 z-50">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            <MobileLink href="/" setOpen={setOpen}>HOME</MobileLink>
            <MobileLink href="/services" setOpen={setOpen}>SERVICES</MobileLink>
            <MobileLink href="/contact" setOpen={setOpen}>CONTACT US</MobileLink>
            <MobileLink href="/blog" setOpen={setOpen}>BLOG</MobileLink>

            <div className="flex gap-5 mt-4">
              <FaShoppingCart className="text-[#CBAA87]" size={22} />
              <FaUser className="text-[#CBAA87]" size={22} />
            </div>

            <Link
              href="/salonList"
              onClick={() => setOpen(false)}
              className="px-7 py-3 rounded-full bg-[#9D9C9A] text-white mt-4"
            >
              BOOK APPOINTMENT
            </Link>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-full bg-[#E9E3D9] text-gray-900"
            >
              GET APP
            </Link>
          </div>
        )}
      </header>

      <AuthModalManager isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

/* Reusable Components */

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-stone-300 text-xs hover:text-white transition"
  >
    {children}
  </Link>
);

const MobileLink = ({ href, children, setOpen }) => (
  <Link
    href={href}
    onClick={() => setOpen(false)}
    className="text-white text-lg"
  >
    {children}
  </Link>
);
