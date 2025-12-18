"use client";

import { useState } from "react";
import axiosInstance from "../src/app/axios/axiosinstance";
import AuthModalManager from "./modals/AuthModalManager";

export default function AddComment({ blogId }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Modal states
  const [showModal, setShowModal] = useState(false);

  const submitComment = async () => {
    const token = localStorage.getItem('token'); 
    
    // 1. Check Authentication
    if (!token) {
      setError("Please login to post a comment.");
      setShowModal(true); // Login modal open karein
      return;
    }
setError("");
    // 2. Validation
    if (!text.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axiosInstance.post(
        `/blogs/${blogId}/comment`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setText("");
      // Static export ke liye safe refresh
      window.location.reload(); 
    } catch (err) {
      console.error("Comment Error:", err);
      setError("Failed to post comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-10 bg-[#F6EFE4] p-4 rounded-lg border border-[#D0BFAF]">
        <h3 className="font-semibold mb-3">Add Comment</h3>

        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError(""); // Typing karte hi error hat jaye
          }}
          rows={4}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5F3F31]"
          placeholder="Write your comment..."
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={submitComment}
          disabled={loading}
          className="mt-3 bg-[#5F3F31] text-white px-6 py-2 rounded-md hover:bg-[#4a3126] transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </div>

      {/* Auth Modal Manager */}
      <AuthModalManager 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
}