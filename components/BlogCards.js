"use client";

import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    img: "/Image/blog/blog-img1.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img2.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img3.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img4.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img5.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img6.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img1.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img2.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img3.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
];

export default function Blog() {
  return (
    <section className="py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">


        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#E5D3BF] rounded-xl shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full h-46 relative">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                  {post.title}
                </h3>
                 <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
                  {post.date}
                </p>
                <p className="text-gray-600 text-sm">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
