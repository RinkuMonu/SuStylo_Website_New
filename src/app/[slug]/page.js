// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import axiosInstance from "../axios/axiosinstance"; // Adjust import path
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import axiosInstance from "../axios/axiosinstance";
// import BlogCards from "../../../components/BlogCards";

// export default function BlogDetail() {
//   const params = useParams();
//   const slug = params?.slug;
  
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [comments, setComments] = useState([]);
  
//   // Comment form state
//   const [commentText, setCommentText] = useState("");
//   const [commentLoading, setCommentLoading] = useState(false);
//   const [commentError, setCommentError] = useState("");

//   // Format date for blog
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Format date for comments (relative time)
//   const formatCommentDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffMs = now - date;
//     const diffMins = Math.floor(diffMs / 60000);
//     const diffHours = Math.floor(diffMs / 3600000);
//     const diffDays = Math.floor(diffMs / 86400000);

//     if (diffMins < 60) {
//       return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
//     } else if (diffHours < 24) {
//       return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
//     } else if (diffDays < 7) {
//       return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
//     } else {
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     }
//   };

//   // Get current user ID from localStorage or context
//   const getCurrentUserId = () => {
//     try {
//       if (typeof window !== 'undefined') {
//         // Try to get user from localStorage (adjust based on your auth system)
//         const userData = localStorage.getItem('user') || localStorage.getItem('token');
//         if (userData) {
//           try {
//             const user = JSON.parse(userData);
//             return user._id || user.id || user.userId;
//           } catch (e) {
//             // If not JSON, maybe it's a token or simple string
//             return null;
//           }
//         }
//       }
//       return null;
//     } catch (err) {
//       console.error("Error getting user data:", err);
//       return null;
//     }
//   };

//   // Fetch blog by slug
//   const fetchBlog = async () => {
//     if (!slug) return;
    
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await axiosInstance.get(`/blogs/slug/${slug}`);
      
//       if (response.data.success) {
//         setBlog(response.data.data);
//         // Sort comments: newest first
//         const sortedComments = (response.data.data.comments || []).sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setComments(sortedComments);
//       } else {
//         setError("Blog not found");
//       }
//     } catch (err) {
//       console.error("Error fetching blog:", err);
//       setError(err.response?.data?.message || "Failed to load blog post");
//       toast.error("Failed to load blog post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle comment submission
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!commentText.trim()) {
//       setCommentError("Please enter a comment");
//       return;
//     }

//     if (commentText.length < 3) {
//       setCommentError("Comment must be at least 3 characters long");
//       return;
//     }

//     const userId = getCurrentUserId();
//     if (!userId) {
//       setCommentError("Please log in to comment");
//       toast.info("Please log in to comment");
//       // You might want to redirect to login page here
//       return;
//     }

//     if (!blog?._id) {
//       setCommentError("Blog not found");
//       return;
//     }

//     setCommentLoading(true);
//     setCommentError("");

//     try {
//       const response = await axiosInstance.post(
//         `/blogs/${blog._id}/comment`,
//         {
//           user: userId,
//           text: commentText.trim()
//         }
//       );
      
//       if (response.data.success) {
//         // Add the new comment to the list
//         const newComment = {
//           ...response.data.data,
//           user: {
//             _id: userId,
//             name: "You", // This would ideally come from user context
//             email: ""
//           }
//         };
        
//         // Add to beginning of comments array
//         setComments(prev => [newComment, ...prev]);
//         setCommentText("");
        
//         toast.success("Comment submitted successfully! It will appear after approval.");
//       }
//     } catch (err) {
//       console.error("Error submitting comment:", err);
//       const errorMsg = err.response?.data?.message || "Failed to submit comment";
//       setCommentError(errorMsg);
//       toast.error(errorMsg);
//     } finally {
//       setCommentLoading(false);
//     }
//   };

//   // Initial fetch
//   useEffect(() => {
//     if (slug) {
//       fetchBlog();
//     }
//   }, [slug]);

//   // Loading skeleton
//   if (loading) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
//           <div className="h-4 bg-gray-300 rounded w-1/4 mb-8"></div>
//           <div className="h-64 bg-gray-300 rounded mb-8"></div>
//           <div className="space-y-3">
//             <div className="h-4 bg-gray-300 rounded"></div>
//             <div className="h-4 bg-gray-300 rounded"></div>
//             <div className="h-4 bg-gray-300 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !blog) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="text-center py-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
//           <p className="text-gray-600 mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
//           <button
//             onClick={() => window.history.back()}
//             className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <ToastContainer 
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
      
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {/* Breadcrumb */}
//         <nav className="text-sm text-gray-600 mb-8">
//           <Link href="/" className="hover:text-gray-800">Home</Link> /
//           <Link href="/blog" className="hover:text-gray-800 ml-2">Blog</Link> / 
//           <span className="ml-2 text-gray-800 font-medium">{blog.title}</span>
//         </nav>

//         {/* Blog Header */}
//         <header className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {blog.title}
//           </h1>
          
//           <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
//                 {blog.author?.name?.charAt(0) || "A"}
//               </div>
//               <span className="font-medium">{blog.author?.name || "Unknown Author"}</span>
//             </div>
            
//             <span>•</span>
//             <span>{formatDate(blog.createdAt)}</span>
//             <span>•</span>
//             <span>{blog.views} views</span>
//           </div>

//           {/* Cover Image */}
//           {blog.coverImage && (
//             <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
//               <Image
//                 src={blog.coverImage}
//                 alt={blog.title}
//                 fill
//                 className="object-cover"
//                 sizes="100vw"
//                 priority
//               />
//             </div>
//           )}

//           {/* Tags */}
//           {blog.tags && blog.tags.length > 0 && (
//             <div className="flex flex-wrap gap-2 mb-6">
//               {blog.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}
//         </header>

//         {/* Blog Content */}
//         <article className="prose prose-lg max-w-none mb-12">
//           {blog.contentHtml ? (
//             <div 
//               dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
//               className="blog-content"
//             />
//           ) : (
//             <p className="text-gray-600">{blog.metaDescription}</p>
//           )}
//         </article>

//         {/* Additional Images Gallery */}
//         {blog.images && blog.images.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl font-semibold mb-4">Gallery</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {blog.images.map((image, index) => (
//                 <div key={index} className="relative h-48 rounded-lg overflow-hidden">
//                   <Image
//                     src={image}
//                     alt={`${blog.title} - Image ${index + 1}`}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-300"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ============ COMMENTS SECTION ============ */}
//         <div className="border-t pt-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Comments ({comments.length})
//             </h2>
//           </div>

//           {/* Create Comment Form */}
//           <div className="mb-8">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h3>
            
//             {!getCurrentUserId() ? (
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                 <h3 className="font-semibold text-blue-900 mb-2">Want to leave a comment?</h3>
//                 <p className="text-blue-700 mb-3">Please log in to share your thoughts.</p>
//                 <button
//                   onClick={() => {
//                     // Redirect to login page
//                     window.location.href = '/login';
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Log In
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleCommentSubmit} className="space-y-4">
//                 <div>
//                   <textarea
//                     value={commentText}
//                     onChange={(e) => {
//                       setCommentText(e.target.value);
//                       setCommentError("");
//                     }}
//                     placeholder="Share your thoughts..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none"
//                     rows="4"
//                     disabled={commentLoading}
//                   />
//                   {commentError && (
//                     <p className="text-red-600 text-sm mt-2">{commentError}</p>
//                   )}
//                   <p className="text-gray-500 text-sm mt-2">
//                     Your comment will be visible after approval. Be respectful and constructive.
//                   </p>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <button
//                     type="submit"
//                     disabled={commentLoading || !commentText.trim()}
//                     className={`px-6 py-2 rounded-lg font-medium ${
//                       commentLoading || !commentText.trim()
//                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                         : 'bg-gray-800 text-white hover:bg-gray-700'
//                     }`}
//                   >
//                     {commentLoading ? (
//                       <span className="flex items-center gap-2">
//                         <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                         </svg>
//                         Submitting...
//                       </span>
//                     ) : (
//                       'Post Comment'
//                     )}
//                   </button>

//                   <span className="text-sm text-gray-500">
//                     {commentText.length}/500 characters
//                   </span>
//                 </div>
//               </form>
//             )}
//           </div>

//           {/* Comments List */}
//           <div>
//             {comments.length === 0 ? (
//               <div className="text-center py-8 border rounded-lg bg-gray-50">
//                 <svg
//                   className="w-12 h-12 text-gray-400 mx-auto mb-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">No comments yet</h3>
//                 <p className="text-gray-600">Be the first to share your thoughts!</p>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 {comments.map((comment) => (
//                   <div key={comment._id} className={`p-4 rounded-lg border ${
//                     comment.status === 'pending' 
//                       ? 'bg-yellow-50 border-yellow-200' 
//                       : 'bg-white border-gray-200'
//                   }`}>
//                     <div className="flex gap-3">
//                       {/* User Avatar */}
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold">
//                           {comment.user?.name?.charAt(0) || "U"}
//                         </div>
//                       </div>

//                       {/* Comment Content */}
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start mb-2">
//                           <div>
//                             <h4 className="font-semibold text-gray-900">
//                               {comment.user?.name || "Anonymous"}
//                             </h4>
//                             <span className={`text-xs px-2 py-1 rounded-full ${
//                               comment.status === 'approved' 
//                                 ? 'bg-green-100 text-green-800' 
//                                 : comment.status === 'pending'
//                                 ? 'bg-yellow-100 text-yellow-800'
//                                 : 'bg-gray-100 text-gray-800'
//                             }`}>
//                               {comment.status === 'approved' 
//                                 ? '✓ Approved' 
//                                 : comment.status === 'pending'
//                                 ? '⏳ Pending'
//                                 : '❌ Rejected'
//                               }
//                             </span>
//                           </div>
//                           <span className="text-sm text-gray-500">
//                             {formatCommentDate(comment.createdAt)}
//                           </span>
//                         </div>
                        
//                         <p className="text-gray-700 whitespace-pre-wrap">{comment.text}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         {/* ============ END COMMENTS SECTION ============ */}
//       </div>

//       <style jsx>{`
//         .blog-content :global(img) {
//           border-radius: 0.5rem;
//           margin: 1.5rem 0;
//           max-width: 100%;
//           height: auto;
//         }
        
//         .blog-content :global(h1) {
//           font-size: 2.25rem;
//           font-weight: bold;
//           margin-top: 2rem;
//           margin-bottom: 1rem;
//         }
        
//         .blog-content :global(h2) {
//           font-size: 1.875rem;
//           font-weight: bold;
//           margin-top: 1.5rem;
//           margin-bottom: 0.75rem;
//         }
        
//         .blog-content :global(p) {
//           margin-bottom: 1rem;
//           line-height: 1.6;
//         }
        
//         .blog-content :global(ul), 
//         .blog-content :global(ol) {
//           margin-bottom: 1rem;
//           padding-left: 1.5rem;
//         }
        
//         .blog-content :global(li) {
//           margin-bottom: 0.5rem;
//         }
        
//         .blog-content :global(blockquote) {
//           border-left: 4px solid #d1d5db;
//           padding-left: 1rem;
//           font-style: italic;
//           margin: 1.5rem 0;
//         }
//       `}</style>
//     </>
//   );
// }