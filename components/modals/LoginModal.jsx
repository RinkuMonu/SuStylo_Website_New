"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import axiosInstance from "../../src/app/axios/axiosinstance";
import toast, { Toaster } from "react-hot-toast";

export default function LoginModal({ isOpen, onClose, onSignup, onForget }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // ✅ for API / UX
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // ---------------------------
  // Validation
  // ---------------------------
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    // NOTE: backend login uses "email" (or phone?) in your curl.
    // We'll treat "username" input as email/phone login ID.
    if (!formData.username.trim()) {
      newErrors.username = "Username / Email is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_@.]+$/.test(formData.username)) {
      newErrors.username =
        "Only letters, numbers, underscore, @, . are allowed";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------------------
  // Handle input edit
  // ---------------------------
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // ---------------------------
  // Get current location (lat/lng)
  // ---------------------------
  const getLocationPromise = () => {
    return new Promise((resolve) => {
      if (typeof navigator === "undefined" || !navigator.geolocation) {
        resolve({ latitude: null, longitude: null });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latitude = pos?.coords?.latitude ?? null;
          const longitude = pos?.coords?.longitude ?? null;
          resolve({ latitude, longitude });
        },
        (err) => {
          console.warn("Geolocation error:", err);
          resolve({ latitude: null, longitude: null });
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0,
        }
      );
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);

  try {
    // 1. get coordinates from browser
    const { latitude, longitude } = await getLocationPromise();

    // 2. build payload exactly as backend expects
    const payload = {
      email: formData.username, // sending as "email" like your curl
      password: formData.password,
      referralCode: "",
      latitude: latitude,
      longitude: longitude,
    };

    console.log("login payload sending >>>", payload); // debug

    const res = await axiosInstance.post(
      "/customers/login",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res?.data?.success) {
      const token = res?.data?.token;
      if (token && typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      if (rememberMe && typeof window !== "undefined") {
        localStorage.setItem("lastLoginUser", formData.username);
      }

      // ✅ Save location coordinates for later use (e.g., nearby salons)
      if (latitude && longitude && typeof window !== "undefined") {
        localStorage.setItem("userLat", latitude);
        localStorage.setItem("userLng", longitude);
      }

      // 🔥 show toast FIRST
      toast.success("Login successful!");
       window.location.href = "/";

      // ⏳ then close the modal AFTER a tiny delay
      setTimeout(() => {
        onClose?.();
      }, 100);
    } else {
      toast.error(res?.data?.message || "Login failed");
    }
  } catch (err) {
    const apiMsg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Login failed";
    toast.error(apiMsg);
    console.error("Login error:", err);
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      {/* toaster inside same component, not global */}
      <Toaster position="top-right" />

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div
          className="relative bg-[#637571] rounded-lg p-8 w-[360px] text-[#F6EFE4]"
          style={{
            boxShadow:
              "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-8 text-[#F6EFE4]/80 hover:text-white border-1 p-1 rounded-md disabled:opacity-50"
            disabled={loading}
          >
            <X size={18} />
          </button>

          <div className="flex mb-6 ">
            <button className="border border-[#F6EFE4] px-3 py-1 text-xl mr-3 rounded-md bg-transparent">
              Login
            </button>
            <button
              onClick={onSignup}
              className="text-[#F6EFE4]/80 px-3 py-1 text-xl disabled:opacity-50"
              disabled={loading}
            >
              Signup
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="text-sm">Email</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              className={`w-full mb-1 mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${errors.username ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              disabled={loading}
            />
            {errors.username && (
              <p className="text-red-300 text-xs mb-2">{errors.username}</p>
            )}

            <label className="text-sm">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${errors.password ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              disabled={loading}
            />
            {errors.password && (
              <p className="text-red-300 text-xs mt-1">{errors.password}</p>
            )}

            <div className="flex justify-between items-center my-3 text-xs">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="accent-[#F6EFE4]"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={onForget}
                className="text-[#F6EFE4]/80 hover:text-[#F6EFE4] text-xs disabled:opacity-50"
                disabled={loading}
              >
                Forget password ?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 rounded-md text-[20px] font-medium mt-1 hover:bg-[#e8e0d5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Please wait..." : "Login"}
            </button>
          </form>

          {/* <div className="my-4 flex items-center justify-center text-xs text-[#F6EFE4]/80">
            <span className="w-1/4 h-px bg-[#F6EFE4]/30 mr-2" /> or continue with{" "}
            <span className="w-1/4 h-px bg-[#F6EFE4]/30 ml-2" />
          </div>

          <div className="flex justify-center gap-5 mt-4">
            <div className="bg-[#1877F2] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaFacebookF className="text-white text-lg" />
            </div>
            <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaGoogle className="text-[#EA4335] text-lg" />
            </div>
            <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaApple className="text-black text-lg" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}





// // "use client";
// // import React from "react";
// // import { X } from "lucide-react";
// // import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

// // export default function LoginModal({ isOpen, onClose, onSignup, onForget }) {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
// //       <div
// //         className="relative bg-[#637571] rounded-lg p-8 w-[360px] text-[#F6EFE4]"
// //         style={{
// //           boxShadow:
// //             "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
// //         }}
// //       >
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-8 text-[#F6EFE4]/80 hover:text-white border-1 p-1 rounded-md"
// //         >
// //           <X size={18} />
// //         </button>

// //         <div className="flex mb-6 ">
// //           <button className="border border-[#F6EFE4] px-3 py-1 text-xl mr-3 rounded-md bg-transparent">
// //             Login
// //           </button>
// //           <button
// //             onClick={onSignup}
// //             className="text-[#F6EFE4]/80 px-3 py-1 text-xl"
// //           >
// //             Signup
// //           </button>
// //         </div>

// //         <label className="text-sm">Username</label>
// //         <input
// //           type="text"
// //           className="w-full mb-3 mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
// //         />
// //         <label className="text-sm">Password</label>
// //         <input
// //           type="password"
// //           className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
// //         />

// //         <div className="flex justify-between items-center my-3 text-xs">
// //           <label className="flex items-center gap-1">
// //             <input type="checkbox" className="accent-[#F6EFE4]" /> Remember me
// //           </label>
// //           <button
// //             onClick={onForget}
// //             className="text-[#F6EFE4]/80 hover:text-[#F6EFE4] text-xs"
// //           >
// //             Forget password ?
// //           </button>
// //         </div>

// //         <button className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 rounded-md text-[20px] font-medium mt-1">
// //           Login
// //         </button>

// //         <div className="my-4 flex items-center justify-center text-xs text-[#F6EFE4]/80">
// //           <span className="w-1/4 h-px bg-[#F6EFE4]/30 mr-2" /> or continue with{" "}
// //           <span className="w-1/4 h-px bg-[#F6EFE4]/30 ml-2" />
// //         </div>

// //         <div className="flex justify-center gap-5 mt-4">
// //           <div className="bg-[#1877F2] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
// //             <FaFacebookF className="text-white text-lg" />
// //           </div>
// //           <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
// //             <FaGoogle className="text-[#EA4335] text-lg" />
// //           </div>
// //           <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
// //             <FaApple className="text-black text-lg" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import React, { useState } from "react";
// import { X } from "lucide-react";
// import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

// export default function LoginModal({ isOpen, onClose, onSignup, onForget }) {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [rememberMe, setRememberMe] = useState(false);

//   if (!isOpen) return null;

//   const validateForm = () => {
//     const newErrors = {};

//     // Username validation
//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required";
//     } else if (formData.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
//       newErrors.username = "Username can only contain letters, numbers and underscore";
//     }

//     // Password validation
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle login logic here
//       console.log("Login successful", formData);
//       onClose();
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
//         className="relative bg-[#637571] rounded-lg p-8 w-[360px] text-[#F6EFE4]"
//         style={{
//           boxShadow:
//             "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//         }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-8 text-[#F6EFE4]/80 hover:text-white border-1 p-1 rounded-md"
//         >
//           <X size={18} />
//         </button>

//         <div className="flex mb-6 ">
//           <button className="border border-[#F6EFE4] px-3 py-1 text-xl mr-3 rounded-md bg-transparent">
//             Login
//           </button>
//           <button
//             onClick={onSignup}
//             className="text-[#F6EFE4]/80 px-3 py-1 text-xl"
//           >
//             Signup
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label className="text-sm">Username</label>
//           <input
//             type="text"
//             value={formData.username}
//             onChange={(e) => handleChange("username", e.target.value)}
//             className={`w-full mb-1 mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
//               errors.username ? "border-red-400" : "border-[#F6EFE4]/30"
//             }`}
//           />
//           {errors.username && (
//             <p className="text-red-300 text-xs mb-2">{errors.username}</p>
//           )}

//           <label className="text-sm">Password</label>
//           <input
//             type="password"
//             value={formData.password}
//             onChange={(e) => handleChange("password", e.target.value)}
//             className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
//               errors.password ? "border-red-400" : "border-[#F6EFE4]/30"
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-300 text-xs mt-1">{errors.password}</p>
//           )}

//           <div className="flex justify-between items-center my-3 text-xs">
//             <label className="flex items-center gap-1">
//               <input
//                 type="checkbox"
//                 className="accent-[#F6EFE4]"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               Remember me
//             </label>
//             <button
//               type="button"
//               onClick={onForget}
//               className="text-[#F6EFE4]/80 hover:text-[#F6EFE4] text-xs"
//             >
//               Forget password ?
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 rounded-md text-[20px] font-medium mt-1 hover:bg-[#e8e0d5] transition-colors"
//           >
//             Login
//           </button>
//         </form>

//         <div className="my-4 flex items-center justify-center text-xs text-[#F6EFE4]/80">
//           <span className="w-1/4 h-px bg-[#F6EFE4]/30 mr-2" /> or continue with{" "}
//           <span className="w-1/4 h-px bg-[#F6EFE4]/30 ml-2" />
//         </div>

//         <div className="flex justify-center gap-5 mt-4">
//           <div className="bg-[#1877F2] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
//             <FaFacebookF className="text-white text-lg" />
//           </div>
//           <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
//             <FaGoogle className="text-[#EA4335] text-lg" />
//           </div>
//           <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
//             <FaApple className="text-black text-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }