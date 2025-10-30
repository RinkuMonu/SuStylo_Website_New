// "use client";
// import React from "react";
// import { X } from "lucide-react";

// export default function SignupModal({ isOpen, onClose, onLogin }) {
//   if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div className="relative bg-[#637571] rounded-lg p-10 w-[600px] shadow-xl text-[#F6EFE4]" style={{
//                 boxShadow:
//                     "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
//             }}>
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-8 text-[#F6EFE4]/80 hover:text-white border-1 p-1 rounded-md"
//                 >
//                     <X size={18} />
//                 </button>

//                 <div className="flex mb-6">
//                     <button
//                         // onClick={() => setShowLogin(true)}
//                                     onClick={onLogin}

//                         className="text-[#F6EFE4]/80 px-3 py-1 text-xl mr-3"
//                     >
//                         Login
//                     </button>
//                     <button className="border border-[#F6EFE4] px-3 py-1 text-xl rounded-md bg-transparent">
//                         Signup
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                     <div>
//                         <label className="text-sm">Username</label>
//                         <input
//                             type="text"
//                             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//                         />
//                     </div>
//                     {/* <div>
//                         <label className="text-sm">Mobile Number</label>
//                         <input
//                             type="text"
//                             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//                         />
//                     </div> */}

//                     <div>
//                         <label className="text-sm">Mobile Number</label>
//                         <div
//                             className="w-full mt-1 flex items-center border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm bg-transparent"
//                         >
//                             <img
//                                 src="https://flagcdn.com/w20/in.png"
//                                 alt="India Flag"
//                                 className="w-6 h-4 rounded-sm mr-2"
//                             />
//                             <select
//                                 className="bg-transparent text-[#F6EFE4] text-sm outline-none"
//                                 defaultValue="+91"
//                             >
//                                 <option value="+91">+91</option>
//                                 {/* <option value="+1">+1</option> */}
//                                 {/* <option value="+44">+44</option> */}
//                             </select>
//                             <input
//                                 type="text"
//                                 placeholder="Enter mobile number"
//                                 className="flex-1 bg-transparent outline-none ml-2 text-[#F6EFE4] placeholder-[#F6EFE4]/50"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="text-sm">Email</label>
//                         <input
//                             type="email"
//                             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//                         />
//                     </div>
//                     <div>
//                         <label className="text-sm">Gender</label>
//                         <input
//                             type="text"
//                             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//                         />
//                     </div>
//                     <div className="col-span-2">
//                         <label className="text-sm">Password</label>
//                         <input
//                             type="password"
//                             className="w-full mt-1 bg-transparent border border-[#F6EFE4]/30 rounded-md px-3 py-2 text-sm outline-none"
//                         />
//                     </div>
//                 </div>

//                 <label className="flex items-center gap-2 mt-4 text-xs">
//                     <input type="checkbox" className="accent-[#F6EFE4]" /> Agree with our{" "}
//                     <span className="underline">Terms & Conditions</span>
//                 </label>

//                 <button className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 rounded-md text-[20px] font-medium mt-4">
//                     Signup
//                 </button>
//             </div>
//         </div>
//     );
// }


"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function SignupModal({ isOpen, onClose, onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    gender: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [agree, setAgree] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z][a-zA-Z0-9_]{2,}$/.test(formData.username)) {
      newErrors.username = "Username must start with letter and contain only letters, numbers, underscore";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Gender validation
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, number and special character";
    }

    // Terms validation
    if (!agree) {
      newErrors.agree = "You must agree to Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle signup logic here
      console.log("Signup successful", formData);
      onClose();
    }
  };

  const handleChange = (field, value) => {
    // For mobile, only allow numbers and limit to 10 digits
    if (field === "mobile") {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-[#637571] rounded-lg p-10 w-[600px] shadow-xl text-[#F6EFE4]" style={{
        boxShadow:
          "0 0 8px 2px rgba(255, 255, 255, 0.15), 0 0 12px 4px rgba(255, 255, 255, 0.1)",
      }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-8 text-[#F6EFE4]/80 hover:text-white border-1 p-1 rounded-md"
        >
          <X size={18} />
        </button>

        <div className="flex mb-6">
          <button
            onClick={onLogin}
            className="text-[#F6EFE4]/80 px-3 py-1 text-xl mr-3"
          >
            Login
          </button>
          <button className="border border-[#F6EFE4] px-3 py-1 text-xl rounded-md bg-transparent">
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
                  errors.username ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              />
              {errors.username && (
                <p className="text-red-300 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="text-sm">Mobile Number</label>
              <div className={`w-full mt-1 flex items-center border rounded-md px-3 py-2 text-sm bg-transparent ${
                errors.mobile ? "border-red-400" : "border-[#F6EFE4]/30"
              }`}>
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India Flag"
                  className="w-6 h-4 rounded-sm mr-2"
                />
                <select
                  className="bg-transparent text-[#F6EFE4] text-sm outline-none"
                  defaultValue="+91"
                >
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  placeholder="Enter mobile number"
                  className="flex-1 bg-transparent outline-none ml-2 text-[#F6EFE4] placeholder-[#F6EFE4]/50"
                  maxLength={10}
                />
              </div>
              {errors.mobile && (
                <p className="text-red-300 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
                  errors.email ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              />
              {errors.email && (
                <p className="text-red-300 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
                  errors.gender ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              >
                <option value="">Select Gender</option>
                <option className="text-black" value="Male">Male</option>
                <option className="text-black" value="Female">Female</option>
                <option className="text-black" value="Other">Other</option>
                <option className="text-black" value="Prefer not to say">Prefer not to say</option>
              </select>
              {errors.gender && (
                <p className="text-red-300 text-xs mt-1">{errors.gender}</p>
              )}
            </div>

            <div className="col-span-2">
              <label className="text-sm">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className={`w-full mt-1 bg-transparent border rounded-md px-3 py-2 text-sm outline-none ${
                  errors.password ? "border-red-400" : "border-[#F6EFE4]/30"
                }`}
              />
              {errors.password && (
                <p className="text-red-300 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <label className="flex items-center gap-2 mt-4 text-xs">
            <input 
              type="checkbox" 
              className="accent-[#F6EFE4]" 
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            /> 
            Agree with our{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>
          </label>
          {errors.agree && (
            <p className="text-red-300 text-xs mt-1">{errors.agree}</p>
          )}

          <button 
            type="submit"
            className="w-full bg-[#F6EFE4] text-[#2E3A35] py-2 rounded-md text-[20px] font-medium mt-4 hover:bg-[#e8e0d5] transition-colors"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}