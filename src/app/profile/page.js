"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);


  return (
    <div className="bg-[#F6EFE4] font-serif py-[85px] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
<div className="border-b border-b-[#D0BFAF]">
          <h1 className="text-[36px] font-bold text-[#1E1E1E] mb-[9px]">Account</h1>
          <h2 className="text-[20px] font-semibold text-[#1E1E1E] mb-2">Alisa Menon</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="border-r border-[#D0BFAF]">
            <div>
              <h3 className="font-bold text-[15px] text-[#1E1E1E] mb-3 mt-[35px]">Account</h3>
              <ul className="space-y-2">
                {[
                  { key: "profile", label: "Profile", icon: <FaUser /> },
                  { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
                  { key: "history", label: "History", icon: <FaClock /> },
                ].map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setActiveSection(item.key)}
                    className={`cursor-pointer flex items-center gap-2 text-sm font-medium ${activeSection === item.key
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
              <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3">
                Legal
              </h3>
              <ul className="space-y-2 text-[#7A6F63] text-sm">
                <li
                  className={`cursor-pointer ${activeSection === "terms" && "font-semibold text-[#1E1E1E]"
                    }`}
                  onClick={() => setActiveSection("terms")}
                >
                  Terms Of Use
                </li>
                <li
                  className={`cursor-pointer ${activeSection === "privacy" && "font-semibold text-[#1E1E1E]"
                    }`}
                  onClick={() => setActiveSection("privacy")}
                >
                  Privacy Center
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 pl-6">
            {/* PROFILE SECTION */}
            {activeSection === "profile" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] px-[20px] md:px-[88px] lg:px-[88px] py-[19px] mt-8">
                <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3 border-b border-[#D0BFAF] pb-2">
                  Profile Details
                </h3>

                {!isEditing ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src="/profile.jpg"
                      alt="Profile"
                      width={60}
                      height={60}
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
                  <form className="flex flex-col items-center space-y-4">
                    {/* Profile Image */}
                    <div className="relative flex justify-center">
                      <Image
                        src="/profile.jpg"
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />

                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center w-full border border-[#D0BFAF] rounded-sm overflow-hidden">
                      <input
                        type="text"
                        value="1234567890"
                        readOnly
                        className="flex-1 bg-[#F6EFE4] text-[#1E1E1E] px-3 py-2 text-sm outline-none"
                      />
                      <button
                        type="button"
                        className="bg-[#758D83] text-[#F6EFE4] px-4 py-2 text-sm hover:opacity-90 transition"
                      >
                        Change
                      </button>
                    </div>

                    {/* Full Name - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="fullName"
                        defaultValue="Alisa Menon"
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                        placeholder="Full name"
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Full name
                      </label>
                    </div>

                    {/* Email - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="email"
                        id="email"
                        defaultValue="abcdefgh@gmail.com"
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Email
                      </label>
                    </div>

                    {/* Gender */}
                    <div className="w-full grid grid-cols-2 border border-[#D0BFAF] rounded-sm overflow-hidden">
                      <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] border-r border-[#D0BFAF] cursor-pointer bg-[#F6EFE4]">
                        <input type="radio" name="gender" className="accent-[#5B3923]" />
                        Male
                      </label>
                      <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] cursor-pointer bg-[#F6EFE4]">
                        <input
                          type="radio"
                          name="gender"
                          className="accent-[#5B3923]"
                          defaultChecked
                        />
                        Female
                      </label>
                    </div>

                    {/* Birthday - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="birthday"
                        defaultValue="01/01/1998"
                        placeholder="Birthday"
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                      />
                      <label
                        htmlFor="birthday"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Birthday (dd/mm/yyyy)
                      </label>
                    </div>

                    {/* Save Button */}
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-[#5B3923] text-[#F6EFE4] px-8 py-2 rounded-sm text-sm w-1/2 hover:opacity-90 transition"
                    >
                      Save Details
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Terms Of Use Section */}
            {activeSection === "terms" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
                  Terms Of Use
                </h3>
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
                    <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Privacy Center Section */}
            {activeSection === "privacy" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
                  Privacy Center
                </h3>
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
                    <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ADDRESS SECTION */}
            {activeSection === "addresses" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
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
                    <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm"
                      onClick={() => setIsAddressModalOpen(true)}

                    >
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

            {/* Address Edit Modal */}
            {isAddressModalOpen && (
              // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="bg-[#F6EFE4] w-[90%] md:w-[600px] p-8 mt-10 rounded-md relative border border-[#D0BFAF]">
                  {/* <button
                    onClick={() => setIsAddressModalOpen(false)}
                    className="absolute top-4 right-4 text-[#5B3923]"
                  >
                    <IoClose size={22} />
                  </button> */}
                  <h3 className="font-semibold text-[#1E1E1E] mb-4 border-b border-[#D0BFAF] pb-2">
                    Edit Address
                  </h3>

                  <form className="space-y-4 text-sm text-[#1E1E1E]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Name*</label>
                        <input
                          defaultValue="Alisa Menon"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>Mobile*</label>
                        <input
                          defaultValue="0000000000"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Pincode*</label>
                        <input
                          defaultValue="395007"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>State*</label>
                        <input
                          defaultValue="Rajasthan"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label>Address (House Number, Street, Area)*</label>
                      <textarea
                        rows="2"
                        defaultValue="Plot No 97, Jagatpura, Jaipur"
                        className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Locality/Town*</label>
                        <input
                          defaultValue="Mandal"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>City/District*</label>
                        <input
                          defaultValue="Bhilwara"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="addressType" defaultChecked /> Home
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="addressType" /> Office
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <label>Make this as my default address</label>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <button
                        type="button"
                        onClick={() => setIsAddressModalOpen(false)}
                        className="border border-[#5B3923] px-6 py-2 rounded-sm w-full"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5B3923] text-[#F6EFE4] px-6 py-2 rounded-sm w-full"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* HISTORY SECTION */}
            {activeSection === "history" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <div>
                  <span className="font-semibold text-[20px] border-b border-black ">
                    Upcoming Bookings
                  </span>
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 mb-4 text-sm text-[#1E1E1E]"
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
                  <span className="font-semibold text-[20px] border-b border-black mt-4">
                    History
                  </span>
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
