
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { ArrowLeft } from "lucide-react";
// import axiosInstance from "../../src/app/axios/axiosinstance";
// import toast, { Toaster } from "react-hot-toast";

// export default function OTPModal({ isOpen, onClose, onNext, storedPhone }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const [timer, setTimer] = useState(30);
//   const [loading, setLoading] = useState(false);
//   const inputRefs = useRef([]);

//   // countdown timer
//   useEffect(() => {
//     if (timer > 0 && isOpen) {
//       const countdown = setTimeout(() => setTimer((t) => t - 1), 1000);
//       return () => clearTimeout(countdown);
//     }
//   }, [timer, isOpen]);

//   // OTP validation
//   const validateOTP = () => {
//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError("Please enter all 6 digits of OTP");
//       return false;
//     } else if (!/^\d{6}$/.test(otpString)) {
//       setError("OTP must contain only numbers");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   // Submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateOTP()) return;

//     const otpValue = otp.join("");

//     try {
//       setLoading(true);

//       // Use storedPhone from parent (not from user input)
//       const payload = { 
//         phone: storedPhone, 
//         otp: otpValue 
//       };

//       const res = await axiosInstance.post(
//         "/customers/forgot-password/verify-otp",
//         payload,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (res?.data?.success) {
//         toast.success(res?.data?.message || "OTP verified");

//         // small delay so toast shows before switching screen
//         setTimeout(() => {
//           onNext?.(); // go to reset password modal
//         }, 100);
//       } else {
//         toast.error(res?.data?.message || "Invalid OTP");
//       }
//     } catch (err) {
//       console.error("verify-otp error:", err);
//       const apiMsg =
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         err?.message ||
//         "OTP verification failed";
//       toast.error(apiMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle OTP box change
//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError("");
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   // Backspace → move to previous input
//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   // Resend button
//   const handleResend = async () => {
//     if (timer > 0) return;
    
//     try {
//       setLoading(true);
//       const payload = { phone: storedPhone };

//       const res = await axiosInstance.post(
//         "/customers/forgot-password/send-otp",
//         payload,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (res?.data?.success) {
//         setTimer(30);
//         setOtp(["", "", "", "", "", ""]);
//         setError("");
//         toast.success("OTP resent successfully");
//       } else {
//         toast.error(res?.data?.message || "Failed to resend OTP");
//       }
//     } catch (err) {
//       console.error("Resend OTP error:", err);
//       const apiMsg =
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         err?.message ||
//         "Failed to resend OTP";
//       toast.error(apiMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       <Toaster position="top-right" />

//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//         <div
//           className="relative bg-[#70807A] rounded-lg p-10 w-[400px] text-[#F6EFE4]"
//           style={{
//             boxShadow:
//               "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80 disabled:opacity-50"
//             disabled={loading}
//           >
//             <ArrowLeft size={18} />
//           </button>

//           <h2 className="text-lg font-semibold text-[24px] mb-8 mt-4">
//             OTP Verification
//           </h2>
//           <h2 className="text-[16px] mb-4 mt-4">
//             Enter OTP sent to {storedPhone ? `+91 ${storedPhone}` : "your number"}
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center gap-4 mb-2">
//               {otp.map((digit, i) => (
//                 <input
//                   key={i}
//                   ref={(el) => (inputRefs.current[i] = el)}
//                   value={digit}
//                   onChange={(e) => handleChange(e.target.value, i)}
//                   onKeyDown={(e) => handleKeyDown(e, i)}
//                   onFocus={() => setError("")}
//                   maxLength={1}
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   disabled={loading}
//                   className={`w-10 h-10 text-center rounded-md bg-[#F6EFE4] text-[#2E3A35] font-semibold outline-none focus:ring-2 ${
//                     error
//                       ? "border-2 border-red-400"
//                       : "focus:ring-[#F6EFE4]/50"
//                   }`}
//                 />
//               ))}
//             </div>

//             {error && (
//               <p className="text-red-300 text-xs text-center mb-3">{error}</p>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#F6EFE4] mt-5 text-[#2E3A35] py-2 text-[20px] rounded-md font-medium hover:bg-[#e8e0d5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? "Please wait..." : "Continue"}
//             </button>
//           </form>

//           <p className="text-center text-[14px] mt-4">
//             Didn&apos;t receive any code?{" "}
//             <span
//               onClick={handleResend}
//               className={`underline mr-14 ${
//                 timer > 0 || loading
//                   ? "text-gray-400 cursor-not-allowed pointer-events-none"
//                   : "text-[#F6EFE4] cursor-pointer"
//               }`}
//             >
//               Resend
//             </span>{" "}
//             ⏱️{timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "00:00"}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }



"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import axiosInstance from "../../src/app/axios/axiosinstance";
import toast, { Toaster } from "react-hot-toast";

export default function OTPModal({ isOpen, onClose, onNext, storedPhone }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  // countdown timer
  useEffect(() => {
    if (timer > 0 && isOpen) {
      const countdown = setTimeout(() => setTimer((t) => t - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, isOpen]);

  // OTP validation
  const validateOTP = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter all 6 digits of OTP");
      return false;
    } else if (!/^\d{6}$/.test(otpString)) {
      setError("OTP must contain only numbers");
      return false;
    }
    setError("");
    return true;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOTP()) return;

    const otpValue = otp.join("");

    try {
      setLoading(true);

      const payload = { 
        phone: storedPhone, 
        otp: otpValue 
      };

      const res = await axiosInstance.post(
        "/customers/forgot-password/verify-otp",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res?.data?.success) {
        toast.success(res?.data?.message || "OTP verified");

        // Pass the verified OTP to parent
        setTimeout(() => {
          onNext?.(otpValue); // Pass OTP to next step
        }, 100);
      } else {
        toast.error(res?.data?.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("verify-otp error:", err);
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "OTP verification failed";
      toast.error(apiMsg);
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP box change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace → move to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Resend button
  const handleResend = async () => {
    if (timer > 0) return;
    
    try {
      setLoading(true);
      const payload = { phone: storedPhone };

      const res = await axiosInstance.post(
        "/customers/forgot-password/send-otp",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res?.data?.success) {
        setTimer(30);
        setOtp(["", "", "", "", "", ""]);
        setError("");
        toast.success("OTP resent successfully");
      } else {
        toast.error(res?.data?.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error("Resend OTP error:", err);
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to resend OTP";
      toast.error(apiMsg);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
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

          <h2 className="text-lg font-semibold text-[24px] mb-8 mt-4">
            OTP Verification
          </h2>
          <h2 className="text-[16px] mb-4 mt-4">
            Enter OTP sent to {storedPhone ? `+91 ${storedPhone}` : "your number"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 mb-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onFocus={() => setError("")}
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  disabled={loading}
                  className={`w-10 h-10 text-center rounded-md bg-[#F6EFE4] text-[#2E3A35] font-semibold outline-none focus:ring-2 ${
                    error
                      ? "border-2 border-red-400"
                      : "focus:ring-[#F6EFE4]/50"
                  }`}
                />
              ))}
            </div>

            {error && (
              <p className="text-red-300 text-xs text-center mb-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F6EFE4] mt-5 text-[#2E3A35] py-2 text-[20px] rounded-md font-medium hover:bg-[#e8e0d5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          <p className="text-center text-[14px] mt-4">
            Didn&apos;t receive any code?{" "}
            <span
              onClick={handleResend}
              className={`underline mr-14 ${
                timer > 0 || loading
                  ? "text-gray-400 cursor-not-allowed pointer-events-none"
                  : "text-[#F6EFE4] cursor-pointer"
              }`}
            >
              Resend
            </span>{" "}
            ⏱️{timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "00:00"}
          </p>
        </div>
      </div>
    </>
  );
}