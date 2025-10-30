"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FreelancerServicesSection() {
  // Separate states for each section
  const [openFemaleCategory, setOpenFemaleCategory] = useState(null);
  const [openMaleCategory, setOpenMaleCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const femaleServices = [
    {
      title: "Hair Services",
      items: [],
    },
    {
      title: "Waxing",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Pedicure",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Body Care",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Spa Services",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Threading",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
    {
      title: "Manicure",
      items: [
        { name: "Full Body For Female (Rica)", price: 1200 },
        { name: "Full Legs (Rica)", price: 1200 },
        { name: "Full Hands (Rica)", price: 1200 },
        { name: "Full Legs (Normal)", price: 1200 },
        { name: "Full Hands (Normal)", price: 1200 },
      ],
    },
  ];

  const maleServices = [
    {
      title: "Hair Services",
      items: [
        { name: "Hair Cut", price: 500 },
        { name: "Hair Wash", price: 300 },
      ],
    },
    {
      title: "Beard & Grooming",
      items: [
        { name: "Beard Trim", price: 250 },
        { name: "Beard Styling", price: 400 },
      ],
    },
    {
      title: "Facial",
      items: [
        { name: "Basic Facial", price: 800 },
        { name: "Luxury Facial", price: 1200 },
      ],
    },
  ];


  const toggleFemaleCategory = (title) => {
    setOpenFemaleCategory(openFemaleCategory === title ? null : title);
  };

  const toggleMaleCategory = (title) => {
    setOpenMaleCategory(openMaleCategory === title ? null : title);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === item.name);
      if (existing) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (name, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, qty: Math.max(item.qty + delta, 0) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <section className="bg-[#f6efe4] py-10">
      <h2 className="text-3xl font-bold mb-8">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Female Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">For Female</h3>
          <div className="space-y-3">
            {femaleServices.map((cat, idx) => (
              <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
                <button
                  onClick={() => toggleFemaleCategory(cat.title)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
                >
                  {cat.title}
                  {openFemaleCategory === cat.title ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {openFemaleCategory === cat.title && cat.items?.length > 0 && (
                  <div className="bg-[#FAEFDE] divide-y text-gray-700">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-[#00796b] font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Male Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">For Male</h3>
          <div className="space-y-3">
            {maleServices.map((cat, idx) => (
              <div key={idx} className="bg-[#CBAA87] rounded-md shadow-sm">
                <button
                  onClick={() => toggleMaleCategory(cat.title)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
                >
                  {cat.title}
                  {openMaleCategory === cat.title ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {openMaleCategory === cat.title && cat.items?.length > 0 && (
                  <div className="bg-[#FAEFDE] divide-y text-gray-700">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border border-[#CBAA87] items-center px-4 py-2 hover:bg-orange-100"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-[#00796b] font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">Cart</h3>
          <div className="bg-[#F6EFE4] rounded-lg shadow-[0_4px_4px_0_#00000040] p-4 border border-[#CBAA87]">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">No items added</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="w-1/2">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.name, -1)}
                        className="border px-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.name, 1)}
                        className="border px-2 rounded"
                      >
                        +
                      </button>
                      <span className="font-semibold">₹{item.price}</span>
                    </div>
                  </div>
                ))}

                <Link
                  href="/"
                  className="flex justify-between items-center w-full bg-[#5d7d75] text-white py-2 px-4 rounded-md hover:bg-[#49635d] transition-all"
                >
                  <span>₹{total}</span>
                  <span>View Cart</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
