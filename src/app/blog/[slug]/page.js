// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import axiosInstance from "../../axios/axiosinstance";
// // Remove BlogCards import if not used
// // import BlogCards from "../../../../components/BlogCards";

// // Helper function to format date
// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   try {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }).toUpperCase();
//   } catch {
//     return dateString;
//   }
// };

// export default function BlogDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   // CORRECTION: Use 'slug' instead of 'id'
//   const slug = params?.slug;
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [suggestedBlogs, setSuggestedBlogs] = useState([]);

//   // Fetch blog details by slug
//   useEffect(() => {
//     const fetchBlogDetails = async () => {
//       // CORRECTION: Check for slug, not blogId
//       if (!slug) {
//         setError("Blog slug not found");
//         setLoading(false);
//         return;
//       }

//       try {
//         // CORRECTION: Use slug endpoint instead of ID endpoint
//         const response = await axiosInstance.get(`/blogs/slug/${slug}`);

//         if (response?.data?.success && response.data.data) {
//           setBlog(response.data.data);
//         } else {
//           throw new Error("Blog not found");
//         }
//       } catch (err) {
//         console.error("Failed to fetch blog details:", err);
//         setError(err?.message || "Failed to load blog. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Fetch suggested blogs
//     const fetchSuggestedBlogs = async () => {
//       try {
//         // Exclude current blog from suggestions
//         const response = await axiosInstance.get("/blogs/list?limit=4");
//         if (response?.data?.success && Array.isArray(response.data.data)) {
//           // Filter out the current blog from suggestions
//           const filteredBlogs = response.data.data
//             .filter(b => b.slug !== slug)
//             .slice(0, 3);
//           setSuggestedBlogs(filteredBlogs);
//         }
//       } catch (err) {
//         console.error("Failed to fetch suggested blogs:", err);
//       }
//     };

//     fetchBlogDetails();
//     fetchSuggestedBlogs();
//   }, [slug]); // CORRECTION: Depend on slug, not blogId

//   if (loading) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20">
//         <div className="max-w-5xl mx-auto animate-pulse">
//           <div className="w-[90%] h-96 bg-gray-300 rounded-sm mb-8" />
//           <div className="h-4 bg-gray-300 rounded w-1/4 mb-4" />
//           <div className="h-8 bg-gray-300 rounded w-3/4 mb-6" />
//           <div className="space-y-3">
//             <div className="h-4 bg-gray-300 rounded w-full" />
//             <div className="h-4 bg-gray-300 rounded w-full" />
//             <div className="h-4 bg-gray-300 rounded w-2/3" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">{error}</p>
//           <Link 
//             href="/blog"
//             className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
//           >
//             Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600 mb-4">Blog not found</p>
//           <Link 
//             href="/blog"
//             className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
//           >
//             Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Blog Details Section */}
//       <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
//         <div className="max-w-5xl mx-auto bg-[#F6EFE4]">

//           <div className="relative">
//             <Image
//               src={blog?.coverImage || "/Image/blog/blog-img5.png"}
//               alt={blog?.title || "Blog Image"}
//               width={1200}
//               height={600}
//               className="rounded-sm w-[90%] h-auto object-cover"
//               priority
//             />

//             {/* Social Icons */}
//             <div className="absolute -bottom-6 right-4 flex flex-col gap-4">
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/facebook-icon.png"
//                   alt="Facebook"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/instagram-icon.png"
//                   alt="Instagram"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/linkedin-icon.png"
//                   alt="LinkedIn"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/youtube-icon.png"
//                   alt="YouTube"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/whatsapp-icon.png"
//                   alt="WhatsApp"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Blog Content */}
//           <div className="mt-6">
//             <p className="text-sm text-gray-700 mb-2">
//               <span className="underline cursor-pointer hover:text-[#0077b6]">
//                 {formatDate(blog?.createdAt)}
//               </span>{" "}
//               | By{" "}
//               <span className="underline cursor-pointer hover:text-[#0077b6]">
//                 {blog?.author?.name || "Unknown Author"}
//               </span>
//               {blog?.category && (
//                 <>
//                   {" "} | Category:{" "}
//                   <span className="font-medium text-[#5F3F31]">
//                     {blog.category}
//                   </span>
//                 </>
//               )}
//             </p>

//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               {blog?.title || "Untitled Blog"}
//             </h1>

//             {/* Tags */}
//             {blog?.tags && blog.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {blog.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-[#E5D3BF] text-[#5F3F31] text-sm rounded-full"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Blog Content */}
//             {blog?.contentHtml ? (
//               <div 
//                 className="prose max-w-none text-gray-700 leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
//               />
//             ) : blog?.content ? (
//               <p className="text-gray-700 leading-relaxed">
//                 {blog.content}
//               </p>
//             ) : (
//               <p className="text-gray-500 italic">No content available.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Suggested Blogs Section */}
//       <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-12'>
//         <h3 className='text-2xl font-bold mb-6'>Suggested Blogs</h3>
//         {suggestedBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {suggestedBlogs.map((suggestedBlog) => (
//               <Link 
//                 key={suggestedBlog._id} 
//                 href={`/blog/${suggestedBlog.slug || suggestedBlog._id}`}
//                 className="group"
//               >
//                 <div className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
//                   {suggestedBlog.coverImage && (
//                     <div className="relative h-48 w-full overflow-hidden">
//                       <Image
//                         src={suggestedBlog.coverImage}
//                         alt={suggestedBlog.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   )}
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-[#5F3F31] transition-colors">
//                       {suggestedBlog.title}
//                     </h3>
//                     <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
//                       {formatDate(suggestedBlog.createdAt)}
//                     </p>
//                     <p className="text-gray-600 text-sm line-clamp-3">
//                       {suggestedBlog.contentHtml 
//                         ? suggestedBlog.contentHtml.replace(/<[^>]*>/g, "").substring(0, 120) + "..."
//                         : "No description available"}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center py-8">
//             No suggested blogs available.
//           </p>
//         )}
//       </section>
//     </>
//   );
// }



//============================================================



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import axiosInstance from "../../../app/axios/axiosinstance";

// // Helper function to format date
// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   try {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }).toUpperCase();
//   } catch {
//     return dateString;
//   }
// };

// // Helper function to extract text from HTML
// const extractTextFromHTML = (html) => {
//   if (!html) return "";
//   return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
// };

// export default function BlogDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const slug = params?.slug;
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [suggestedBlogs, setSuggestedBlogs] = useState([]);

//   // Fetch blog details by slug
//   useEffect(() => {
//     const fetchBlogDetails = async () => {
//       if (!slug) {
//         setError("Blog slug not found");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axiosInstance.get(`/blogs/slug/${slug}`);

//         if (response?.data?.success && response.data.data) {
//           setBlog(response.data.data);
//         } else {
//           throw new Error("Blog not found");
//         }
//       } catch (err) {
//         console.error("Failed to fetch blog details:", err);
//         setError(err?.message || "Failed to load blog. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Fetch suggested blogs
//     const fetchSuggestedBlogs = async () => {
//       try {
//         const response = await axiosInstance.get("/blogs/list?limit=6");
//         if (response?.data?.success && Array.isArray(response.data.data)) {
//           // Filter out the current blog from suggestions
//           const filteredBlogs = response.data.data
//             .filter(b => b.slug !== slug)
//             .slice(0, 3);
//           setSuggestedBlogs(filteredBlogs);
//         }
//       } catch (err) {
//         console.error("Failed to fetch suggested blogs:", err);
//       }
//     };

//     fetchBlogDetails();
//     fetchSuggestedBlogs();
//   }, [slug]);

//   // Get cover image
//   const getCoverImage = () => {
//     if (blog?.coverImage) return blog.coverImage;

//     // Try to extract image from contentHtml
//     if (blog?.contentHtml) {
//       const imgMatch = blog.contentHtml.match(/<img[^>]+src="([^">]+)"/);
//       if (imgMatch && imgMatch[1]) {
//         return imgMatch[1];
//       }
//     }

//     return "/Image/blog/blog-img5.png";
//   };

//   if (loading) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20">
//         <div className="max-w-5xl mx-auto animate-pulse">
//           <div className="w-[90%] h-96 bg-gray-300 rounded-sm mb-8" />
//           <div className="h-4 bg-gray-300 rounded w-1/4 mb-4" />
//           <div className="h-8 bg-gray-300 rounded w-3/4 mb-6" />
//           <div className="space-y-3">
//             <div className="h-4 bg-gray-300 rounded w-full" />
//             <div className="h-4 bg-gray-300 rounded w-full" />
//             <div className="h-4 bg-gray-300 rounded w-2/3" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">{error}</p>
//           <Link
//             href="/blog"
//             className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
//           >
//             Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="bg-[#F6EFE4] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600 mb-4">Blog not found</p>
//           <Link
//             href="/blog"
//             className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
//           >
//             Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Blog Details Section */}
//       <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
//         <div className="max-w-5xl mx-auto mt-12 bg-[#F6EFE4]">
//           <div className="relative">
//             <Image
//               src={getCoverImage()}
//               alt={blog?.title || "Blog Image"}
//               width={1200}
//               height={600}
//               className="rounded-sm w-[90%] h-auto object-cover"
//               priority
//             />

//             {/* Social Icons */}
//             <div className="absolute -bottom-6 right-4 flex flex-col gap-4">
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/facebook-icon.png"
//                   alt="Facebook"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/instagram-icon.png"
//                   alt="Instagram"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//               <Link href="#" className="hover:scale-110 transition-transform">
//                 <Image
//                   src="/Image/linkedin-icon.png"
//                   alt="LinkedIn"
//                   width={32}
//                   height={32}
//                   className="bg-white rounded-full p-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Blog Content */}
//           <div className="mt-10">
//             <p className="text-sm text-gray-700 mb-2">
//               <span className="underline cursor-pointer hover:text-[#5F3F31]">
//                 {formatDate(blog?.createdAt)}
//               </span>{" "}
//               | By{" "}
//               <span className="underline cursor-pointer hover:text-[#5F3F31]">
//                 {blog?.author?.name || "Unknown Author"}
//               </span>
//               {blog?.category && (
//                 <>
//                   {" "} | Category:{" "}
//                   <span className="font-medium text-[#5F3F31]">
//                     {blog.category}
//                   </span>
//                 </>
//               )}
//             </p>

//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               {blog?.title || "Untitled Blog"}
//             </h1>

//             {/* Meta Description */}
//             {blog?.metaDescription && (
//               <p className="text-gray-600 italic mb-6 border-l-4 border-[#5F3F31] pl-4 py-2">
//                 {blog.metaDescription}
//               </p>
//             )}

//             {/* Tags */}
//             {blog?.tags && blog.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {blog.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-[#E5D3BF] text-[#5F3F31] text-sm rounded-full hover:bg-[#D0BFAF] cursor-pointer transition-colors"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Blog Content */}
//             <div className="prose max-w-none text-gray-700 leading-relaxed">
//               {blog?.contentHtml ? (
//                 <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
//               ) : (
//                 <p className="text-gray-500 italic">No content available.</p>
//               )}
//             </div>

//             {/* Comments Section */}
//             {blog?.comments && blog.comments.length > 0 && (
//               <div className="mt-12 pt-8 border-t border-gray-300">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">
//                   Comments ({blog.comments.length})
//                 </h3>
//                 <div className="space-y-6">
//                   {blog.comments.map((comment) => (
//                     <div key={comment._id} className="bg-[#F6EFE4] p-4 rounded-lg border border-[#D0BFAF]">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="w-10 h-10 bg-[#E5D3BF] rounded-full flex items-center justify-center">
//                           <span className="text-[#5F3F31] font-bold">
//                             {comment.user?.name?.charAt(0) || "U"}
//                           </span>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-gray-900">
//                             {comment.user?.name || "Anonymous"}
//                           </h4>
//                           <p className="text-xs text-gray-500">
//                             {formatDate(comment.createdAt)}
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">{comment.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Suggested Blogs Section */}
//       {/* <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-12'>
//         <h3 className='text-2xl font-bold mb-6 text-[#5F3F31]'>Suggested Blogs</h3>
//         {suggestedBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {suggestedBlogs.map((suggestedBlog) => (
//               <Link 
//                 key={suggestedBlog._id} 
//                 href={`/blog/${suggestedBlog.slug || suggestedBlog._id}`}
//                 className="group"
//               >
//                 <div className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <Image
//                       src={suggestedBlog.coverImage || "/Image/blog/blog-img1.png"}
//                       alt={suggestedBlog.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-[#5F3F31] transition-colors">
//                       {suggestedBlog.title}
//                     </h3>
//                     <p className="text-xs text-gray-800 font-semibold mb-2 uppercase">
//                       {formatDate(suggestedBlog.createdAt)}
//                     </p>
//                     <p className="text-gray-600 text-sm line-clamp-3">
//                       {suggestedBlog.metaDescription || extractTextFromHTML(suggestedBlog.contentHtml) || "No description available"}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center py-8">
//             No suggested blogs available.
//           </p>
//         )}
//       </section> */}
//     </>
//   );
// }





import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Server-side function to fetch blog by slug
async function getBlogBySlug(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const response = await fetch(`${baseUrl}/blogs/slug/${slug}`, {
      cache: "no-store"
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Server-side function to fetch suggested blogs
async function getSuggestedBlogs(currentSlug, limit = 3) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const response = await fetch(`${baseUrl}/blogs/list?limit=6`, {
      cache: "no-store"
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    if (data.success && Array.isArray(data.data)) {
      return data.data
        .filter(b => b.slug !== currentSlug)
        .slice(0, limit);
    }
    return [];
  } catch (error) {
    console.error("Error fetching suggested blogs:", error);
    return [];
  }
}

// Required for static export with dynamic routes
export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const response = await fetch(`${baseUrl}/blogs/list?limit=100`, {
      cache: "no-store"
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    if (data.success && Array.isArray(data.data)) {
      return data.data.map((blog) => ({
        slug: blog.slug,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

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
  return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  
  // Fetch blog data
  const blog = await getBlogBySlug(slug);
  const suggestedBlogs = await getSuggestedBlogs(slug, 3);

  // If blog not found, show 404
  if (!blog) {
    notFound();
  }

  // Get cover image
  const getCoverImage = () => {
    if (blog?.coverImage) return blog.coverImage;

    // Try to extract image from contentHtml
    if (blog?.contentHtml) {
      const imgMatch = blog.contentHtml.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && imgMatch[1]) {
        return imgMatch[1];
      }
    }

    return "/Image/blog/blog-img5.png";
  };

  return (
    <>
      {/* Blog Details Section */}
      <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-5xl mx-auto mt-12 bg-[#F6EFE4]">
          <div className="relative">
            <Image
              src={getCoverImage()}
              alt={blog?.title || "Blog Image"}
              width={1200}
              height={600}
              className="rounded-sm w-[90%] h-auto object-cover"
              priority
            />

            {/* Social Icons */}
            <div className="absolute -bottom-6 right-4 flex flex-col gap-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/facebook-icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/instagram-icon.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/linkedin-icon.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="bg-white rounded-full p-1"
                />
              </Link>
            </div>
          </div>

          {/* Blog Content */}
          <div className="mt-10">
            <p className="text-sm text-gray-700 mb-2">
              <span className="underline cursor-pointer hover:text-[#5F3F31]">
                {formatDate(blog?.createdAt)}
              </span>{" "}
              | By{" "}
              <span className="underline cursor-pointer hover:text-[#5F3F31]">
                {blog?.author?.name || "Unknown Author"}
              </span>
              {blog?.category && (
                <>
                  {" "} | Category:{" "}
                  <span className="font-medium text-[#5F3F31]">
                    {blog.category}
                  </span>
                </>
              )}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {blog?.title || "Untitled Blog"}
            </h1>

            {/* Meta Description */}
            {blog?.metaDescription && (
              <p className="text-gray-600 italic mb-6 border-l-4 border-[#5F3F31] pl-4 py-2">
                {blog.metaDescription}
              </p>
            )}

            {/* Tags */}
            {blog?.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E5D3BF] text-[#5F3F31] text-sm rounded-full hover:bg-[#D0BFAF] cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Blog Content */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {blog?.contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )}
            </div>

            {/* Comments Section */}
            {blog?.comments && blog.comments.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Comments ({blog.comments.length})
                </h3>
                <div className="space-y-6">
                  {blog.comments.map((comment) => (
                    <div key={comment._id} className="bg-[#F6EFE4] p-4 rounded-lg border border-[#D0BFAF]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#E5D3BF] rounded-full flex items-center justify-center">
                          <span className="text-[#5F3F31] font-bold">
                            {comment.user?.name?.charAt(0) || "U"}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {comment.user?.name || "Anonymous"}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {formatDate(comment.createdAt)}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Suggested Blogs Section */}
      {suggestedBlogs.length > 0 && (
        <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-12'>
          <h3 className='text-2xl font-bold mb-6 text-[#5F3F31]'>Suggested Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedBlogs.map((suggestedBlog) => (
              <Link 
                key={suggestedBlog._id} 
                href={`/blog/${suggestedBlog.slug || suggestedBlog._id}`}
                className="group"
              >
                <div className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={suggestedBlog.coverImage || "/Image/blog/blog-img1.png"}
                      alt={suggestedBlog.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-[#5F3F31] transition-colors">
                      {suggestedBlog.title}
                    </h3>
                    <p className="text-xs text-gray-800 font-semibold mb-2 uppercase">
                      {formatDate(suggestedBlog.createdAt)}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {suggestedBlog.metaDescription || extractTextFromHTML(suggestedBlog.contentHtml) || "No description available"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export const dynamicParams = false; // Only generate pages for returned slugs