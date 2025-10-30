"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-[#F6EFE4] font-serif py-[100px] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div>
          <h1 className="text-[36px] font-bold text-[#1E1E1E] mb-[9px]">Account</h1>
          <h2 className="text-[20px] font-semibold text-[#1E1E1E]">Alisa Menon</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 mt-6">
          {/* Sidebar */}
          <div className="border-r border-[#D0BFAF] pr-6">
            <div>
              <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3">Account</h3>
              <ul className="space-y-2">
                {[
                  { key: "profile", label: "Profile", icon: <FaUser /> },
                  { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
                  { key: "history", label: "History", icon: <FaClock /> },
                ].map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setActiveSection(item.key)}
                    className={`cursor-pointer flex items-center gap-2 text-sm font-medium ${
                      activeSection === item.key
                        ? "text-[#1E1E1E]"
                        : "text-[#7A6F63] hover:text-[#1E1E1E]"
                    }`}
                  >
                    {/* {item.icon} */}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3">Legal</h3>
              <ul className="space-y-2 text-[#7A6F63] text-sm">
                <li>Terms Of Use</li>
                <li>Privacy Center</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 pl-6">
            {/* PROFILE SECTION */}
            {activeSection === "profile" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8">
                <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3 border-b border-[#D0BFAF] pb-2">
                  Profile Details
                </h3>

                {!isEditing ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src="/profile.jpg"
                      alt="Profile"
                      width={80}
                      height={80}
                      className="rounded-md mb-4"
                    />
                    <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-sm text-[#1E1E1E]">
                      <p>Full Name</p>
                      <p className="font-medium">Alisa Menon</p>

                      <p>Mobile Number</p>
                      <p className="font-medium">1234567890</p>

                      <p>Email ID</p>
                      <p className="font-medium">abcdefg@gmail.com</p>

                      <p>Gender</p>
                      <p className="font-medium">Female</p>

                      <p>Age</p>
                      <p className="font-medium">27</p>

                      <p>Location</p>
                      <p className="font-medium">Jaipur</p>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-6 bg-[#5B3923] text-[#F6EFE4] px-10 py-2 w-1/2 rounded-sm text-sm"
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col items-center space-y-5">
                    <Image
                      src="/profile.jpg"
                      alt="Profile"
                      width={80}
                      height={80}
                      className="rounded-md mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4 w-[70%] text-sm">
                      {[
                        "Full Name",
                        "Mobile Number",
                        "Email ID",
                        "Gender",
                        "Age",
                        "Location",
                      ].map((label, index) => (
                        <div key={index} className="flex flex-col">
                          <label className="text-[#1E1E1E] mb-1">{label}</label>
                          <input
                            type="text"
                            className="border border-[#D0BFAF] px-3 py-2 rounded-sm focus:outline-none focus:border-[#5B3923] bg-[#F6EFE4]"
                            defaultValue={
                              label === "Full Name"
                                ? "Alisa Menon"
                                : label === "Mobile Number"
                                ? "1234567890"
                                : label === "Email ID"
                                ? "abcdefg@gmail.com"
                                : label === "Gender"
                                ? "Female"
                                : label === "Age"
                                ? "27"
                                : "Jaipur"
                            }
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-[#5B3923] text-[#F6EFE4] px-8 py-2 rounded-sm text-sm"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-[#D0BFAF] text-[#1E1E1E] px-8 py-2 rounded-sm text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* ADDRESS SECTION */}
            {activeSection === "addresses" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-[16px] border-b border-[#D0BFAF] pb-2">
                    Default Address
                  </h3>
                  <div className="mt-4 text-sm text-[#1E1E1E] flex justify-between">
                    <div>
                      <p className="font-semibold">Alisa Menon</p>
                      <p>Plot No 97</p>
                      <p>Jagatpura</p>
                      <p>Jaipur - 303901</p>
                      <p>Rajasthan</p>
                      <p>Mobile: 0000000000</p>
                    </div>
                   
                  </div>
                   <div className="flex justify-around gap-3 mt-4">
                      <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm">
                        Edit
                      </button>
                      <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm">
                        Remove
                      </button>
                    </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm border-t border-[#D0BFAF] pt-4">
                    Other Addresses
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="border border-[#D0BFAF] p-4 rounded-sm text-sm text-[#1E1E1E]"
                      >
                        <div className="flex justify-between mb-2">
                          <p className="font-semibold">Alisa Menon</p>
                          <span className="text-[10px] px-2 py-0.5 bg-[#E9E0D2] rounded-full">
                            Home
                          </span>
                        </div>
                        <p>Plot No 97</p>
                        <p>Jagatpura</p>
                        <p>Jaipur - 303901</p>
                        <p>Rajasthan</p>
                        <p>Mobile: 0000000000</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* HISTORY SECTION */}
            {activeSection === "history" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-sm border-b border-[#D0BFAF] pb-2">
                    Upcoming Bookings
                  </h3>
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 text-sm text-[#1E1E1E]"
                    >
                      <div>
                        <p className="font-semibold">Facial, Legs Waxing</p>
                        <p className="text-[#7A6F63]">Upcoming • Nov 16, 2025</p>
                      </div>
                      <p>₹1200</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold text-sm border-b border-[#D0BFAF] pb-2">
                    History
                  </h3>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 text-sm text-[#1E1E1E]"
                    >
                      <div>
                        <p className="font-semibold">Facial, Legs Waxing</p>
                        <p className="text-[#7A6F63]">Completed • Nov 16, 2025</p>
                      </div>
                      <p>₹1200</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
