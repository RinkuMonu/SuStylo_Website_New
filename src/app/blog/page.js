import React from "react";
import Image from "next/image";
import BlogCards from "../../../components/BlogCards";

// Server-side data fetching
async function getBlogs(page = 1, limit = 9) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const response = await fetch(`${baseUrl}/blogs/list?page=${page}&limit=${limit}`);
    
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
  const resolvedParams = searchParams;
  
  // 2. Page number extract karein ek safe tarike se
  const pageParam = resolvedParams?.page;
  const page = (pageParam && !isNaN(Number(pageParam))) 
    ? Math.max(1, Number(pageParam)) 
    : 1;

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

  // Helper function mein resolvedParams use karein
  const getPageUrl = (pageNum) => {
    const params = new URLSearchParams();
    // Saare existing params ko copy karein
    Object.entries(resolvedParams || {}).forEach(([key, value]) => {
      params.set(key, value);
    });
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