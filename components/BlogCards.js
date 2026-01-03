
// "use client";

// import React from "react";
// import Image from "next/image";

// const blogPosts = [
//   {
//     img: "/Image/blog/blog-img1.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img2.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img3.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img4.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img5.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img6.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img1.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img2.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
//   {
//     img: "/Image/blog/blog-img3.png",
//     title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     date: "AUG 12, 2025",
//     desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
//   },
// ];

// export default function Blog() {
//   return (
//     <section className="py-6 px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto">


//         {/* Grid layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="bg-[#E5D3BF] rounded-xl shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Image */}
//               <div className="w-full h-46 relative">
//                 <Image
//                   src={post.img}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">

//                 <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
//                   {post.title}
//                 </h3>
//                  <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
//                   {post.date}
//                 </p>
//                 <p className="text-gray-600 text-sm">
//                   {post.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();
  } catch {
    return dateString;
  }
};

// Helper function to extract text from HTML
const extractTextFromHTML = (html) => {
  if (!html) return "";
  // Remove HTML tags and limit length
  const plainText = html.replace(/<[^>]*>/g, "");
  return plainText.length > 120 ? plainText.substring(0, 120) + "..." : plainText;
};

// Default blog image if no cover image
const getBlogImage = (blog) => {
  if (blog.coverImage) return blog.coverImage;
  
  // Try to extract image from contentHtml
  if (blog.contentHtml) {
    const imgMatch = blog.contentHtml.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // Return default image
  return "/Image/blog/blog-img1.png";
};

export default function BlogCards({ blogs = [] }) {
  // If no blogs are passed, show empty state
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No blog posts available.</p>
      </div>
    );
  }

  return (
    <section className="py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Blog stats */}
        <div className="mb-8 text-sm text-gray-600">
          Showing {blogs.length} blog{blogs.length !== 1 ? 's' : ''}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog._id} 
              href={`/blog/${blog.slug || blog._id}`}
              className="group"
            >
              <div className="bg-[#E5D3BF] rounded-xl shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-all duration-300 h-full transform group-hover:-translate-y-1">
                {/* Image */}
                <div className="w-full h-48 relative">
                  <Image
                    src={getBlogImage(blog)}
                    alt={blog.title || "Blog Image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Category badge */}
                  {blog.category && (
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-[#5F3F31] text-white text-xs rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  )}
                  
                  {/* Views badge */}
                  {/* <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                      👁️ {blog.views || 0}
                    </span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Author and Date */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-800 font-semibold uppercase">
                      {formatDate(blog.createdAt)}
                    </span>
                    <span className="text-xs text-gray-600">
                      By {blog.author?.name || "Admin"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-[#5F3F31] transition-colors">
                    {blog.title || "Untitled Blog"}
                  </h3>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-[#F6EFE4] text-[#5F3F31] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog.metaDescription || extractTextFromHTML(blog.contentHtml) || "No description available"}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#5F3F31] text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                    {/* <span className="text-xs text-gray-500">
                      {blog.comments?.length || 0} comments
                    </span> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}