// "use client";
// import React from "react";
// import { ArrowLeft } from "lucide-react";

// export default function ForgetPasswordModal({ isOpen, onClose, onNext }) {
//   if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div
//                 className="relative bg-[#70807A] rounded-lg p-10 w-[400px] text-[#F6EFE4]"
//                 style={{
//                     boxShadow:
//                         "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//                 }}
//             >
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80"
//                 >
//                     <ArrowLeft size={18} />
//                 </button>

//                 <h2 className="text-lg text-[24px] font-semibold mb-5">Forget Password</h2>

//                 <label className="text-sm">Enter Your Mobile Number</label>

//                 {/* ✅ Updated Mobile Input with Flag + Dropdown */}
//                 <div className="w-full mt-2 mb-4 flex items-center border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm bg-transparent">
//                     <img
//                         src="https://flagcdn.com/w20/in.png"
//                         alt="India Flag"
//                         className="w-6 h-4 rounded-sm mr-2"
//                     />
//                     <select
//                         className="bg-transparent text-[#F6EFE4] text-sm outline-none"
//                         defaultValue="+91"
//                     >
//                         <option value="+91">+91</option>
//                         {/* <option value="+1">+1</option> */}
//                         {/* <option value="+44">+44</option> */}
//                     </select>
//                     <input
//                         type="text"
//                         placeholder="Enter mobile number"
//                         className="flex-1 bg-transparent outline-none ml-2 text-[#F6EFE4] placeholder-[#F6EFE4]/50"
//                     />
//                 </div>

//                 <button
//                     // onClick={() => setShowOtp(true)}
//                               onClick={onNext}

//                     className="w-full bg-[#F6EFE4] text-[#2E3A35] text-[20px] py-2 rounded-md font-medium"
//                 >
//                     Send OTP
//                 </button>
//             </div>
//         </div>

//     );
// }



"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import axiosInstance from "../../src/app/axios/axiosinstance";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function ForgetPasswordModal({ isOpen, onClose, onNext }) {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ added

  if (!isOpen) return null;

  const validateMobile = () => {
    if (!mobile.trim()) {
      setError("Mobile number is required");
      return false;
    } else if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ""))) {
      setError(
        "Enter a valid 10-digit Indian mobile number starting with 6-9"
      );
      return false;
    }
    setError("");
    return true;
  };

  // only numbers, max 10 digits
  const handleMobileChange = (value) => {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setMobile(cleanedValue);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateMobile()) return;

    try {
      setLoading(true);

      // backend expects:
      // { "phone": "7426991303" }
      const payload = { phone: mobile };

      const res = await axiosInstance.post(
        "/customers/forgot-password/send-otp",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res?.data?.success) {
        // success toast
        toast.success(res?.data?.message || "OTP sent successfully");

        // go to next step (probably OTP screen) after tiny delay
        setTimeout(() => {
          onNext?.();
        }, 100);
      } else {
        // backend replied but not success:true
        toast.error(res?.data?.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Forgot password send-otp error:", err);

      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to send OTP";

      toast.error(apiMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* toaster lives in same component */}
      <Toaster position="top-right" />

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div
          className="relative bg-[#70807A] rounded-lg p-10 w-[400px] text-[#F6EFE4]"
          style={{
            boxShadow:
              "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80 disabled:opacity-50"
            disabled={loading}
          >
            <ArrowLeft size={18} />
          </button>

          <h2 className="text-lg text-[24px] font-semibold mb-5">
            Forget Password
          </h2>

          <form onSubmit={handleSubmit}>
            <label className="text-sm">Enter Your Mobile Number</label>

            {/* <div
              className={`w-full mt-2 mb-1 flex items-center border rounded-md px-3 py-2 text-sm bg-transparent ${
                error ? "border-red-400" : "border-[#F6EFE4]/30"
              }`}
            >
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="w-6 h-4 rounded-sm mr-2"
              />
              <select
                className="bg-transparent text-[#F6EFE4] text-sm outline-none"
                defaultValue="+91"
                disabled={loading}
              >
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                value={mobile}
                onChange={(e) => handleMobileChange(e.target.value)}
                placeholder="Enter mobile number"
                className="flex-1 bg-transparent outline-none ml-2 text-[#F6EFE4] placeholder-[#F6EFE4]/50"
                maxLength={10}
                disabled={loading}
              />
            </div> */}

            <div
              className={`w-full mt-2 mb-1 flex items-center border rounded-md px-3 py-2 text-sm bg-transparent ${error ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
            >
              <Image
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="w-6 h-4 rounded-sm mr-2"
              />

              <select
                className="bg-transparent text-[#F6EFE4] text-sm outline-none cursor-not-allowed"
                disabled
              >
                <option value="+91">+91</option>
              </select>

              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={mobile}
                onChange={(e) => handleMobileChange(e.target.value)}
                placeholder="Enter mobile number"
                className="flex-1 bg-transparent outline-none ml-2 text-[#F6EFE4] placeholder-[#F6EFE4]/50"
                maxLength={10}
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 mt-1">
                Please enter a valid 10-digit mobile number
              </p>
            )}


            {error && (
              <p className="text-red-300 text-xs mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#F6EFE4] text-[#2E3A35] mt-5 text-[20px] py-2 rounded-md font-medium hover:bg-[#e8e0d5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}