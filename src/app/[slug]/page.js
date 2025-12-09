"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "../axios/axiosinstance";
import BlogCards from "../../../components/BlogCards";

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

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const blogId = params?.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);

  // Fetch blog details
  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!blogId) {
        setError("Blog ID not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.get(`/blogs/${blogId}`);
        
        if (response?.data?.success && response.data.data) {
          setBlog(response.data.data);
        } else {
          throw new Error("Blog not found");
        }
      } catch (err) {
        console.error("Failed to fetch blog details:", err);
        setError(err?.message || "Failed to load blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch suggested blogs
    const fetchSuggestedBlogs = async () => {
      try {
        const response = await axiosInstance.get("/blogs/list?limit=3");
        if (response?.data?.success && Array.isArray(response.data.data)) {
          setSuggestedBlogs(response.data.data.slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to fetch suggested blogs:", err);
      }
    };

    fetchBlogDetails();
    fetchSuggestedBlogs();
  }, [blogId]);

  if (loading) {
    return (
      <div className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto animate-pulse">
          <div className="w-[90%] h-96 bg-gray-300 rounded-sm mb-8" />
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4" />
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-6" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link 
            href="/blog"
            className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Blog not found</p>
          <Link 
            href="/blog"
            className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Details Section */}
      <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-5xl mx-auto bg-[#F6EFE4]">

          <div className="relative">
            <Image
              src={blog?.coverImage || "/Image/blog/blog-img5.png"}
              alt={blog?.title || "Blog Image"}
              width={800}
              height={400}
              className="rounded-sm w-[90%] h-auto object-cover"
            />

            {/* Social Icons */}
            <div className="absolute -bottom-6 right-4 flex flex-col gap-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/facebook-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/linkedin-icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/youtube-icon.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </Link>
            </div>
          </div>

          {/* Blog Content */}
          <div className="mt-6">
            <p className="text-sm text-gray-700 mb-2">
              <span className="underline cursor-pointer hover:text-[#0077b6]">
                {formatDate(blog?.createdAt)}
              </span>{" "}
              | By{" "}
              <span className="underline cursor-pointer hover:text-[#0077b6]">
                {blog?.author?.name || "Unknown Author"}
              </span>
            </p>

            <h1 className="text-[20px] font-bold text-gray-900 mb-4">
              {blog?.title || "Untitled Blog"}
            </h1>

            {blog?.contentHtml ? (
              <div 
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
              />
            ) : (
              <>
                <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                  {blog?.content || "No content available."}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {blog?.description || ""}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Suggested Blogs Section */}
      <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-12'>
        <h3 className='text-2xl font-bold mb-6'>Suggested</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestedBlogs.map((suggestedBlog) => (
            <Link 
              key={suggestedBlog._id} 
              href={`/blog/${suggestedBlog.slug || suggestedBlog._id}`}
            >
              <div className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2">
                    {suggestedBlog.title}
                  </h3>
                  <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
                    {formatDate(suggestedBlog.createdAt)}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {suggestedBlog.contentHtml 
                      ? suggestedBlog.contentHtml.replace(/<[^>]*>/g, "").substring(0, 100) + "..."
                      : "No description available"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

// import React from 'react'
// import Image from "next/image";
// import Link from "next/link";



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

// function page() {
//     return (
//         <>
//           <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
//       <div className="max-w-5xl mx-auto bg-[#F6EFE4]">

//         <div className="relative">
//           <Image
//             src="/Image/blog/blog-img5.png"
//             alt="Facial Treatment"
//             width={500}
//             height={100}
//             className="rounded-sm w-[90%] bg-cover"
//           />

//           {/* Social Icons */}
//           <div className="absolute -bottom-25 right-4 -translate-y-1/2 flex flex-col gap-4">
//             <Link href="#" className="">
//               <Image
//                           src="/Image/facebook-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}
//                           className="bg-white rounded-full"
//                         />
//             </Link>
//             <Link href="#" className="hover:text-[#E1306C] transition-colors">
//               <Image
//                           src="/Image/instagram-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}

//                         />
//             </Link>
//             <Link href="#" className="hover:text-[#0A66C2] transition-colors">
//                <Image
//                           src="/Image/linkedin-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}

//                         />
//             </Link>
//             <Link href="#" className="hover:text-[#FF0000] transition-colors">
//               <Image
//                           src="/Image/youtube-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}

//                         />
//             </Link>
//             <Link href="#" className="hover:text-[#25D366] transition-colors">
//              <Image
//                           src="/Image/whatsapp-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}
//                         />
//             </Link>
//             <Link href="#" className="hover:text-black transition-colors">
//             <Image
//                           src="/Image/whatsapp-icon.png"
//                           alt="Facebook"
//                           width={24}
//                           height={24}
//                         />
//             </Link>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className="mt-6">
//           <p className="text-sm text-gray-700 mb-2">
//             <span className="underline cursor-pointer hover:text-[#0077b6]">
//               AUG 12, 2025
//             </span>{" "}
//             | By{" "}
//             <span className="underline cursor-pointer hover:text-[#0077b6]">
//               Alisa Menon
//             </span>
//           </p>

//           <h1 className="text-[20px] font-bold text-gray-900 mb-4">
//             Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
//             Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
//           </h1>

//           <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//             quae ab illo inventore veritatis et quasi architecto beatae vitae
//             dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//             aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
//             eos qui ratione voluptatem sequi nesciunt.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//             consectetur, adipisci velit, sed quia non numquam eius modi tempora
//             incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//             consectetur, adipisci velit, sed quia non numquam eius modi tempora
//             incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//             consectetur, adipisci velit, sed quia non numquam eius modi tempora
//             incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//             consectetur, adipisci velit, sed quia non numquam eius modi tempora
//             incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
//           </p>
//         </div>
//       </div>
//     </section>



//     <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14'>
//         <h3 className='text-2xl font-bold'>Suggested</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-8">
//                   {blogPosts.map((post, index) => (
//                     <div
//                       key={index}
//                       className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                     >
//                       {/* Content */}
//                       <div className="p-5">
//                         <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
//                           {post.title}
//                         </h3>
//                          <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
//                           {post.date}
//                         </p>
//                         <p className="text-gray-600 text-sm">
//                           {post.desc}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//     </section>
//         </>
//     )
// }

// export default page
