"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "../src/app/axios/axiosinstance";

// Helper functions
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

const extractShortDescription = (htmlContent, maxLength = 120) => {
  if (!htmlContent) return "No description available";
  const plainText = htmlContent.replace(/<[^>]*>/g, "");
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
};

// Blog Card Component
const BlogCard = ({ blog }) => {
  const blogUrl = `/blog/${blog?.slug || blog?._id}`;


  
  return (
    <Link href={blogUrl}>
      <div className="bg-[#E5D3BF] rounded-xl shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="w-full h-48 relative">
          <Image
            src={blog?.coverImage || "/Image/blog/blog-img1.png"}
            alt={blog?.title || "Blog Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2">
            {blog?.title || "Untitled Blog"}
          </h3>
          <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
            {formatDate(blog?.createdAt)}
          </p>
          <p className="text-gray-600 text-sm line-clamp-3">
            {extractShortDescription(blog?.contentHtml)}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Loading Skeleton
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="bg-[#E5D3BF] rounded-xl overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-300" />
        <div className="p-5 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/4" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

// Main Blog Cards Component
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const lastBlogRef = useRef(null);

  const fetchBlogs = useCallback(async (pageNum = 1, shouldAppend = false) => {
    if (shouldAppend) setLoadingMore(true);
    else setLoading(true);
    
    try {
      const response = await axiosInstance.get(`/blogs/list?page=${pageNum}&limit=6`);
      
      if (response?.data?.success && Array.isArray(response.data.data)) {
        const blogData = response.data.data;
        
        if (shouldAppend) {
          setBlogs((prev) => [...prev, ...blogData]);
        } else {
          setBlogs(blogData);
        }
        
        // Check if more blogs exist
        setHasMore(blogData.length === 6);
      } else {
        throw new Error("Failed to load blogs");
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      if (!shouldAppend) {
        setError(err?.message || "Failed to load blogs. Please try again.");
      }
    } finally {
      if (shouldAppend) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchBlogs(1, false);
  }, [fetchBlogs]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (loadingMore || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          setPage(nextPage);
          fetchBlogs(nextPage, true);
        }
      },
      { threshold: 0.5 }
    );

    if (lastBlogRef.current) {
      observerRef.current.observe(lastBlogRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadingMore, hasMore, page, fetchBlogs]);

  const handleRetry = () => {
    setError(null);
    fetchBlogs(1, false);
  };

  if (loading) {
    return (
      <section className="py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <LoadingSkeleton />
        </div>
      </section>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <section className="py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center py-10">
          <div className="text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-medium">{error}</p>
          </div>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog._id}
              ref={index === blogs.length - 1 ? lastBlogRef : null}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {/* Loading More Indicator */}
        {loadingMore && (
          <div className="flex justify-center mt-10">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#5F3F31]"></div>
              <p className="text-gray-600 text-sm">Loading more blogs...</p>
            </div>
          </div>
        )}

        {/* No More Blogs Message */}
        {!hasMore && blogs.length > 0 && (
          <div className="text-center mt-10 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              You&apos;ve reached the end of our blog collection
            </p>
          </div>
        )}

        {/* No Blogs Found */}
        {!loading && blogs.length === 0 && !error && (
          <div className="text-center py-10">
            <div className="text-gray-600 mb-4 p-4">
              <svg className="w-16 h-16 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-lg font-medium">No blogs found</p>
              <p className="text-gray-500">Check back later for new content</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

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
