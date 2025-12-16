
// "use client";

// import React from "react";
// import Image from "next/image";
// import BlogCards from "../../../components/BlogCards";

// export default function page() {
//   return (
//     <>
//       <section
//         className="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-center text-white h-[60vh] md:h-[70vh]"
//         style={{
//           backgroundImage: "url('/Image/blog/blog-bg-banner.png')",
//         }}
//       >

//         <div className="relative z-10 max-w-3xl px-6 lg:pt-20">
//           <h1 className="text-[64px] md:text-5xl font-bold mb-4 text-[#5F3F31]">
//             Blog
//             <Image
//               src="/Image/blog/blogunderline.png"
//               width={100}
//               height={2}
//               alt="blog-img"
//               className="w-30 h-3" />
//           </h1>

//         </div>
//       </section>
//       <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
//         <BlogCards />
//       </div>

//     </>
//   );
// }


//=====================================


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import BlogCards from "../../../components/BlogCards";
// import axiosInstance from "../../app/axios/axiosinstance";

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     totalItems: 0,
//     hasNextPage: false,
//     limit: 9
//   });

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await axiosInstance.get("/blogs/list", {
//           params: {
//             page: pagination.currentPage,
//             limit: 9 // Show 9 blogs per page to match your grid
//           }
//         });

//         if (response.data.success) {
//           setBlogs(response.data.data);
//           setPagination(response.data.pagination || {
//             currentPage: 1,
//             totalPages: 1,
//             totalItems: response.data.data?.length || 0,
//             hasNextPage: false,
//             limit: 9
//           });
//         } else {
//           throw new Error("Failed to fetch blogs");
//         }
//       } catch (err) {
//         console.error("Error fetching blogs:", err);
//         setError(err.message || "Failed to load blogs. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [pagination.currentPage]);

//   // Handle pagination
//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= pagination.totalPages) {
//       setPagination(prev => ({ ...prev, currentPage: newPage }));
//     }
//   };

//   return (
//     <>
//       <section
//         className="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-center text-white h-[60vh] md:h-[70vh]"
//         style={{
//           backgroundImage: "url('/Image/blog/blog-bg-banner.png')",
//         }}
//       >
//         <div className="relative z-10 max-w-3xl px-6 lg:pt-20">
//           <h1 className="text-[64px] md:text-5xl font-bold mb-4 text-[#5F3F31]">
//             Blog
//             <Image
//               src="/Image/blog/blogunderline.png"
//               width={100}
//               height={2}
//               alt="blog-img"
//               className="w-30 h-3" />
//           </h1>
//         </div>
//       </section>
      
//       <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-8">
//         {/* Show loading state */}
//         {loading && (
//           <div className="flex justify-center items-center py-12">
//             <div className="text-[#5F3F31] text-lg">Loading blogs...</div>
//           </div>
//         )}

//         {/* Show error state */}
//         {error && !loading && (
//           <div className="text-center py-12">
//             <div className="text-red-600 mb-4">{error}</div>
//             <button
//               onClick={() => window.location.reload()}
//               className="px-6 py-2 bg-[#5F3F31] text-white rounded-lg hover:bg-[#4A3024] transition-colors"
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* Show blogs or empty state */}
//         {!loading && !error && (
//           <>
//             {blogs.length > 0 ? (
//               <>
//                 <BlogCards blogs={blogs} />
                
//                 {/* Pagination Controls */}
//                 {pagination.totalPages > 1 && (
//                   <div className="flex justify-center items-center gap-4 mt-12">
//                     <button
//                       onClick={() => handlePageChange(pagination.currentPage - 1)}
//                       disabled={pagination.currentPage === 1}
//                       className={`px-4 py-2 rounded-lg ${
//                         pagination.currentPage === 1
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
//                       }`}
//                     >
//                       Previous
//                     </button>
                    
//                     <div className="flex items-center gap-2">
//                       {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
//                         <button
//                           key={page}
//                           onClick={() => handlePageChange(page)}
//                           className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                             pagination.currentPage === page
//                               ? "bg-[#5F3F31] text-white"
//                               : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
//                           }`}
//                         >
//                           {page}
//                         </button>
//                       ))}
//                     </div>
                    
//                     <button
//                       onClick={() => handlePageChange(pagination.currentPage + 1)}
//                       disabled={!pagination.hasNextPage}
//                       className={`px-4 py-2 rounded-lg ${
//                         !pagination.hasNextPage
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
//                       }`}
//                     >
//                       Next
//                     </button>
                    
//                     <div className="text-sm text-gray-600 ml-4">
//                       Page {pagination.currentPage} of {pagination.totalPages}
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-12">
//                 <div className="text-gray-600 text-lg mb-4">No blogs found</div>
//                 <p className="text-gray-500">Check back later for new blog posts!</p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }





import React from "react";
import Image from "next/image";
import BlogCards from "../../../components/BlogCards";

// Server-side data fetching
async function getBlogs(page = 1, limit = 9) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const response = await fetch(`${baseUrl}/blogs/list?page=${page}&limit=${limit}`, {
      cache: "no-store"
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      success: false,
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        hasNextPage: false,
        limit: 9
      }
    };
  }
}

export default async function BlogPage({ searchParams }) {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const limit = 9;
  
  const blogData = await getBlogs(page, limit);
  const blogs = blogData.data || [];
  const pagination = blogData.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    limit: 9
  };

  // Helper function for pagination URLs
  const getPageUrl = (pageNum) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNum);
    return `/blog?${params.toString()}`;
  };

  return (
    <>
      <section
        className="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-center text-white h-[60vh] md:h-[70vh]"
        style={{
          backgroundImage: "url('/Image/blog/blog-bg-banner.png')",
        }}
      >
        <div className="relative z-10 max-w-3xl px-6 lg:pt-20">
          <h1 className="text-[64px] md:text-5xl font-bold mb-4 text-[#5F3F31]">
            Blog
            <Image
              src="/Image/blog/blogunderline.png"
              width={100}
              height={2}
              alt="blog-img"
              className="w-30 h-3" />
          </h1>
        </div>
      </section>
      
      <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-8">
        {/* Show blogs or empty state */}
        {blogs.length > 0 ? (
          <>
            <BlogCards blogs={blogs} />
            
            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <a
                  href={page > 1 ? getPageUrl(page - 1) : '#'}
                  className={`px-4 py-2 rounded-lg ${
                    page === 1
                      ? "bg-gray-300 cursor-not-allowed pointer-events-none"
                      : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
                  }`}
                >
                  Previous
                </a>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(pageNum => (
                    <a
                      key={pageNum}
                      href={getPageUrl(pageNum)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        page === pageNum
                          ? "bg-[#5F3F31] text-white"
                          : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
                      }`}
                    >
                      {pageNum}
                    </a>
                  ))}
                </div>
                
                <a
                  href={pagination.hasNextPage ? getPageUrl(page + 1) : '#'}
                  className={`px-4 py-2 rounded-lg ${
                    !pagination.hasNextPage
                      ? "bg-gray-300 cursor-not-allowed pointer-events-none"
                      : "bg-[#E5D3BF] text-[#5F3F31] hover:bg-[#D0BFAF]"
                  }`}
                >
                  Next
                </a>
                
                <div className="text-sm text-gray-600 ml-4">
                  Page {page} of {pagination.totalPages}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-600 text-lg mb-4">No blogs found</div>
            <p className="text-gray-500">Check back later for new blog posts!</p>
          </div>
        )}
      </div>
    </>
  );
}