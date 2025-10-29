"use client";
import React from "react";
import { Check } from "lucide-react";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="bg-[#70807A] rounded-lg p-8 w-[360px] text-center text-[#F6EFE4]"
        style={{
          boxShadow:
            "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="bg-[#CBAA87] w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4">
          <Check className="text-white" size={28} />
        </div>
        <h2 className="text-[24px] font-semibold mb-1">All Done!</h2>
        <p className="text-[16px] mb-5">
          Your Password Was Successfully Changed
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 text-[20px] rounded-md font-medium"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
