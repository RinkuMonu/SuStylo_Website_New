"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "../../axios/axiosinstance";
// Remove BlogCards import if not used
// import BlogCards from "../../../../components/BlogCards";

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
  // CORRECTION: Use 'slug' instead of 'id'
  const slug = params?.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);

  // Fetch blog details by slug
  useEffect(() => {
    const fetchBlogDetails = async () => {
      // CORRECTION: Check for slug, not blogId
      if (!slug) {
        setError("Blog slug not found");
        setLoading(false);
        return;
      }

      try {
        // CORRECTION: Use slug endpoint instead of ID endpoint
        const response = await axiosInstance.get(`/blogs/slug/${slug}`);
        
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
        // Exclude current blog from suggestions
        const response = await axiosInstance.get("/blogs/list?limit=4");
        if (response?.data?.success && Array.isArray(response.data.data)) {
          // Filter out the current blog from suggestions
          const filteredBlogs = response.data.data
            .filter(b => b.slug !== slug)
            .slice(0, 3);
          setSuggestedBlogs(filteredBlogs);
        }
      } catch (err) {
        console.error("Failed to fetch suggested blogs:", err);
      }
    };

    fetchBlogDetails();
    fetchSuggestedBlogs();
  }, [slug]); // CORRECTION: Depend on slug, not blogId

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
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/youtube-icon.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="bg-white rounded-full p-1"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image
                  src="/Image/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
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

            {/* Tags */}
            {blog?.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E5D3BF] text-[#5F3F31] text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Blog Content */}
            {blog?.contentHtml ? (
              <div 
                className="prose max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
              />
            ) : blog?.content ? (
              <p className="text-gray-700 leading-relaxed">
                {blog.content}
              </p>
            ) : (
              <p className="text-gray-500 italic">No content available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Suggested Blogs Section */}
      <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 py-12'>
        <h3 className='text-2xl font-bold mb-6'>Suggested Blogs</h3>
        {suggestedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedBlogs.map((suggestedBlog) => (
              <Link 
                key={suggestedBlog._id} 
                href={`/blog/${suggestedBlog.slug || suggestedBlog._id}`}
                className="group"
              >
                <div className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
                  {suggestedBlog.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={suggestedBlog.coverImage}
                        alt={suggestedBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-[#5F3F31] transition-colors">
                      {suggestedBlog.title}
                    </h3>
                    <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
                      {formatDate(suggestedBlog.createdAt)}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {suggestedBlog.contentHtml 
                        ? suggestedBlog.contentHtml.replace(/<[^>]*>/g, "").substring(0, 120) + "..."
                        : "No description available"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            No suggested blogs available.
          </p>
        )}
      </section>
    </>
  );
}