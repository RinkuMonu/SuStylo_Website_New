// "use client";
// import React, { useState, useRef } from "react";
// import { ArrowLeft } from "lucide-react";
// import ResetPasswordModal from "./ResetPasswordModal";

// export default function OTPModal({ isOpen, onClose, onNext }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// //   const [showReset, setShowReset] = useState(false);
//   const inputRefs = useRef([]);

// //   if (!isOpen) return null;
// //   if (showReset)
// //     return <ResetPasswordModal isOpen={true} onClose={() => setShowReset(false)} />;

//   const handleChange = (value, index) => {
//     if (!/^[0-9]?$/.test(value)) return; // only allow digits
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to next input automatically
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     // handle backspace
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//       <div
//         className="relative bg-[#70807A] rounded-lg p-10 w-[400px] text-[#F6EFE4]"
//         style={{
//           boxShadow:
//             "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//         }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80"
//         >
//           <ArrowLeft size={18} />
//         </button>

//         <h2 className="text-lg font-semibold text-[24px] mb-8 mt-4">OTP Verification</h2>
//         <h2 className="text-[16px] mb-4 mt-4">Enter Your OTP Code</h2>

//         {/* ✅ OTP Inputs */}
//         <div className="flex justify-center gap-4 mb-5">
//           {otp.map((digit, i) => (
//             <input
//               key={i}
//               ref={(el) => (inputRefs.current[i] = el)}
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//               maxLength={1}
//               className="w-10 h-10 text-center rounded-md bg-[#F6EFE4] text-[#2E3A35] font-semibold outline-none focus:ring-2 focus:ring-[#F6EFE4]/50"
//             />
//           ))}
//         </div>

//         <button
//         //   onClick={() => setShowReset(true)}
//                   onClick={onNext}

//           className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 text-[20px] rounded-md font-medium"
//         >
//           Continue
//         </button>

//         <p className="text-center text-[14px] mt-4">
//           Didn’t receive any code?{" "}
//           <span className="underline cursor-pointer mr-14">Resend</span> ⏱️00:30
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function OTPModal({ isOpen, onClose, onNext }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0 && isOpen) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, isOpen]);

  const validateOTP = () => {
    const otpString = otp.join('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateOTP()) {
      onNext();
    }
  };

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Move to next input automatically
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    // Add resend OTP logic here
  };

  if (!isOpen) return null;

  return (
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
          className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80"
        >
          <ArrowLeft size={18} />
        </button>

        <h2 className="text-lg font-semibold text-[24px] mb-8 mt-4">OTP Verification</h2>
        <h2 className="text-[16px] mb-4 mt-4">Enter Your OTP Code</h2>

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
                className={`w-10 h-10 text-center rounded-md bg-[#F6EFE4] text-[#2E3A35] font-semibold outline-none focus:ring-2 ${
                  error ? "border-2 border-red-400" : "focus:ring-[#F6EFE4]/50"
                }`}
              />
            ))}
          </div>
          {error && (
            <p className="text-red-300 text-xs text-center mb-3">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#F6EFE4] mt-5 text-[#2E3A35] py-2 text-[20px] rounded-md font-medium hover:bg-[#e8e0d5] transition-colors"
          >
            Continue
          </button>
        </form>

        <p className="text-center text-[14px] mt-4">
          Didn't receive any code?{" "}
          <span 
            onClick={handleResend}
            className={`underline cursor-pointer mr-14 ${
              timer > 0 ? "text-gray-400" : "text-[#F6EFE4]"
            }`}
          >
            Resend
          </span> 
          ⏱️{timer > 0 ? `00:${timer.toString().padStart(2, '0')}` : "00:00"}
        </p>
      </div>
    </div>
  );
}