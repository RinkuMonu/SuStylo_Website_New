"use client";
import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import axiosInstance from "../../src/app/axios/axiosinstance";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPasswordModal({ isOpen, onClose, onNext }) {
  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // validate before submit
  const validateForm = () => {
    const newErrors = {};

    // OTP validation
    if (!formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(formData.otp)) {
      // must be exactly 6 digits, only numbers
      newErrors.otp = "Enter a valid 6-digit numeric OTP";
    }

    // New Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.newPassword
      )
    ) {
      newErrors.newPassword =
        "Must include uppercase, lowercase, number and special character";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle change for fields
  const handleChange = (field, value) => {
    // special handling for otp: allow only numbers, max len 6
    if (field === "otp") {
      value = value.replace(/\D/g, "").slice(0, 6); // remove non-digits
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // clear field-specific error when user types
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // submit -> call reset API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      // backend expects:
      // {
      //   "otp": "523499",
      //   "newPassword": "rahul@1212"
      // }
      const payload = {
        otp: formData.otp,
        newPassword: formData.newPassword,
      };

      const res = await axiosInstance.post(
        "/customers/forgot-password/reset",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res?.data?.success) {
        toast.success(res?.data?.message || "Password reset successfully");

        // after success: small delay, then next step
        setTimeout(() => {
          onNext?.(); // e.g. go back to login modal
        }, 100);
      } else {
        toast.error(res?.data?.message || "Reset failed");
      }
    } catch (err) {
      console.error("reset password error:", err);
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Reset failed";
      toast.error(apiMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast container in same modal */}
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

          <h2 className="text-lg font-semibold text-[24px] mb-1">
            Reset New Password
          </h2>
          <p className="mb-5 text-[#CBAA87] text-[12px]">
            Must be at least 8 characters
          </p>

          <form onSubmit={handleSubmit}>
            {/* OTP FIELD */}
            <div className="mb-4">
              <label className="text-[16px]">Enter OTP</label>
              <input
                type="text"
                value={formData.otp}
                onChange={(e) => handleChange("otp", e.target.value)}
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
                  errors.otp ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
                placeholder="6-digit code"
                disabled={loading}
              />
              {errors.otp && (
                <p className="text-red-300 text-xs mt-1">{errors.otp}</p>
              )}
            </div>

            {/* NEW PASSWORD FIELD */}
            <div className="relative mb-3">
              <label className="text-[16px]">Enter Your New Password</label>
              <input
                type={showPass ? "text" : "password"}
                value={formData.newPassword}
                onChange={(e) =>
                  handleChange("newPassword", e.target.value)
                }
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none pr-10 ${
                  errors.newPassword
                    ? "border-red-400"
                    : "border-[#F6EFE4]/30"
                }`}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-8 text-[#F6EFE4]/70"
                disabled={loading}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              {errors.newPassword && (
                <p className="text-red-300 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className="relative mb-4">
              <label className="text-[16px]">Confirm Your New Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none pr-10 ${
                  errors.confirmPassword
                    ? "border-red-400"
                    : "border-[#F6EFE4]/30"
                }`}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-8 text-[#F6EFE4]/70"
                disabled={loading}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-300 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#F6EFE4] text-[#2E3A35] text-[20px] py-2 rounded-md font-medium hover:bg-[#e8e0d5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Reset"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


// "use client";
// import React, { useState } from "react";
// import { ArrowLeft, Eye, EyeOff } from "lucide-react";

// export default function ResetPasswordModal({ isOpen, onClose, onNext }) {
//   const [showPass, setShowPass] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   if (!isOpen) return null;


//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//       <div
//               className="relative bg-[#70807A] rounded-lg p-10 w-[400px] text-[#F6EFE4]"
//               style={{
//                 boxShadow:
//                   "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//               }}
//             >
//               <button
//                 onClick={onClose}
//                 className="absolute top-3 right-10 border-1 rounded-md p-1 text-[#F6EFE4]/80"
//               >
//                 <ArrowLeft size={18} />
//               </button>

//         <h2 className="text-lg font-semibold text-[24px] mb-1">Reset New Password</h2>
//         <p className="mb-5 text-[#CBAA87] text-[12px]">Must be at least 8 characters</p>

//         <div className="relative mb-3">
//           <label className="text-[16px]">Enter Your New Password</label>
//           <input
//             type={showPass ? "text" : "password"}
//             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//           />
//           <button
//             onClick={() => setShowPass(!showPass)}
//             className="absolute right-3 top-8 text-[#F6EFE4]/70"
//           >
//             {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//           </button>
//         </div>

//         <div className="relative mb-4">
//           <label className="text-[16px]">Confirm Your New Password</label>
//           <input
//             type={showConfirm ? "text" : "password"}
//             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//           />
//           <button
//             onClick={() => setShowConfirm(!showConfirm)}
//             className="absolute right-3 top-8 text-[#F6EFE4]/70"
//           >
//             {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
//           </button>
//         </div>

//         <button
//         //   onClick={() => setShowSuccess(true)}
//                   onClick={onNext}

//           className="w-full bg-[#F6EFE4] text-[#2E3A35] text-[20px] py-2 rounded-md font-medium"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { ArrowLeft, Eye, EyeOff } from "lucide-react";

// export default function ResetPasswordModal({ isOpen, onClose, onNext }) {
//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmPassword: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [showPass, setShowPass] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   if (!isOpen) return null;

//   const validateForm = () => {
//     const newErrors = {};

//     // New Password validation
//     if (!formData.newPassword) {
//       newErrors.newPassword = "New password is required";
//     } else if (formData.newPassword.length < 8) {
//       newErrors.newPassword = "Password must be at least 8 characters";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.newPassword)) {
//       newErrors.newPassword = "Must include uppercase, lowercase, number and special character";
//     }

//     // Confirm Password validation
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onNext();
//     }
//   };

//   const handleChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));

//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ""
//       }));
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

//         <h2 className="text-lg font-semibold text-[24px] mb-1">Reset New Password</h2>
//         <p className="mb-5 text-[#CBAA87] text-[12px]">Must be at least 8 characters</p>

//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-3">
//             <label className="text-[16px]">Enter Your New Password</label>
//             <input
//               type={showPass ? "text" : "password"}
//               value={formData.newPassword}
//               onChange={(e) => handleChange("newPassword", e.target.value)}
//               className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none pr-10 ${errors.newPassword ? "border-red-400" : "border-[#F6EFE4]/30"
//                 }`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPass(!showPass)}
//               className="absolute right-3 top-8 text-[#F6EFE4]/70"
//             >
//               {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//             </button>
//             {errors.newPassword && (
//               <p className="text-red-300 text-xs mt-1">{errors.newPassword}</p>
//             )}
//           </div>

//           <div className="relative mb-4">
//             <label className="text-[16px]">Confirm Your New Password</label>
//             <input
//               type={showConfirm ? "text" : "password"}
//               value={formData.confirmPassword}
//               onChange={(e) => handleChange("confirmPassword", e.target.value)}
//               className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none pr-10 ${errors.confirmPassword ? "border-red-400" : "border-[#F6EFE4]/30"
//                 }`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirm(!showConfirm)}
//               className="absolute right-3 top-8 text-[#F6EFE4]/70"
//             >
//               {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
//             </button>
//             {errors.confirmPassword && (
//               <p className="text-red-300 text-xs mt-1">{errors.confirmPassword}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#F6EFE4] text-[#2E3A35] text-[20px] py-2 rounded-md font-medium hover:bg-[#e8e0d5] transition-colors"
//           >
//             Reset
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }