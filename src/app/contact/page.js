
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import { BiSolidPhoneCall } from "react-icons/bi";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   // ✅ Real-time input restrictions
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     if (name === "fullName") {
//       // Allow only letters and spaces
//       newValue = value.replace(/[^a-zA-Z\s]/g, "");
//     }

//     if (name === "phone") {
//       // Remove non-digits
//       newValue = value.replace(/\D/g, "");

//       // Prevent 1–5 as first digit
//       if (newValue.length === 1 && /[1-5]/.test(newValue)) {
//         newValue = "";
//       }

//       // Limit to 10 digits
//       if (newValue.length > 10) {
//         newValue = newValue.slice(0, 10);
//       }
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: newValue,
//     }));

//     // Clear existing error for this field
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   // ✅ Form validation on submit
//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//       isValid = false;
//     } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.fullName)) {
//       newErrors.fullName = "Please enter a valid name (letters and spaces only)";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Enter a valid 10-digit mobile number starting with 6-9";
//       isValid = false;
//     }

//     if (!formData.service.trim()) {
//       newErrors.service = "Service of interest is required";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters long";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Message sent successfully!");
//       console.log("Form submitted:", formData);

//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     }
//   };

//   return (
//     <div className="bg-[#F6EFE4]">
//       {/* ===== Banner Section ===== */}
//       <div className="relative h-[430px] w-full overflow-hidden">
//         <Image
//           src="/contact.jpg"
//           alt="Contact Banner"
//           fill
//           className="object-cover object-[center_70%]"
//           priority
//         />

//         <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
//           <h1
//             className="text-white text-[64px] font-semibold tracking-wide"
//             style={{
//               textShadow: `
//             0px 10px 10px rgba(0,0,0,0.15),
//             0px 10px 2px rgba(255, 255, 255, 0.1),
//             0px 10px 30px rgba(255, 255, 255, 0.1)
//           `,
//             }}
//           >
//             Contact Us
//           </h1>

//           <div className="flex items-center justify-center w-[319px]">
//             <div className="w-2 h-2 bg-white rotate-45"></div>
//             <div className="flex-1 h-px bg-white"></div>
//             <div className="w-2 h-2 bg-white rotate-45"></div>
//           </div>
//         </div>
//       </div>

//       {/* ===== Contact Info & Form ===== */}
//       <div className="max-w-6xl mx-auto px-4 py-[28px] my-[27px] rounded-[10px] grid grid-cols-1 md:grid-cols-2 gap-10 shadow-[4px_4px_4px_0px_#61777280]">
//         {/* Left Info Section */}
//         <div className="space-y-6">
//           <div className="p-5 bg-[#F6EFE4] rounded-lg border border-[#617772] shadow-[4px_4px_4px_0px_#61777280]">
//             <h2 className="font-semibold text-[18px] mb-2 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#637571]" size={25} />
//               Our Address
//             </h2>
//             <p className="text-[14px] text-gray-600 leading-relaxed">
//               Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
//               Jaipur Rajasthan, India, 302017
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
//               <BiSolidPhoneCall className="text-[#637571] text-3xl mb-2 mx-auto" />
//               <p className="font-semibold">Call Us</p>
//               <p className="text-sm text-gray-600">+91-9876543210</p>
//             </div>

//             <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
//               <FaEnvelope className="text-[#637571] text-2xl mb-2 mx-auto" />
//               <p className="font-semibold">Email Us</p>
//               <p className="text-sm text-gray-600">7unique@gmail.com</p>
//             </div>
//           </div>

//           <div className="px-8 py-4 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772]">
//             <h2 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
//               <FaClock className="text-[#637571]" size={22} />
//               Opening hours
//             </h2>
//             <div className="space-y-2 text-[14px] text-gray-700">
//               <div className="flex justify-between">
//                 <span>Monday - Friday</span>
//                 <span>09:00 AM to 10:00 PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Saturday</span>
//                 <span>09:00 AM to 08:00 PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Sunday</span>
//                 <span>Closed</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Form Section */}
//         <div className="p-6 bg-[#F6EFE4] rounded-lg border border-[#617772]">
//           <h2 className="text-[18px] font-semibold mb-6">Send us a message</h2>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField
//                 label="Full name*"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 error={errors.fullName}
//               />
//               <InputField
//                 label="Email address*"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={errors.email}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField
//                 label="Phone number*"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 error={errors.phone}
//               />
//               <InputField
//                 label="Service of interest*"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 error={errors.service}
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Message*
//               </label>
//               <textarea
//                 rows="4"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${errors.message
//                     ? "border-red-500 focus:ring-red-400"
//                     : "border-gray-300 focus:ring-gray-400"
//                   }`}
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="bg-[#617772] text-white px-6 py-2 rounded-md w-full hover:bg-[#50665f] transition-all"
//             >
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ===== Google Map Section ===== */}
//       <div className="w-full h-[400px] mb-[83px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.572800535024!2d75.86883381574005!3d26.799007873509908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94baba6edad%3A0xd9cda1cfd0d224a!2sSevenUnique%20Tech%20Solutions%20Pvt.%20Ltd.%20%7C%20Web%20%26%20App%20Development.!5e0!3m2!1sen!2sin!4v1756112039067!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// // ✅ Reusable Input Field component
// const InputField = ({ label, name, value, onChange, error }) => (
//   <div className="flex flex-col gap-1">
//     <label className="text-sm font-medium text-gray-700">{label}</label>
//     <input
//       type="text"
//       name={name}
//       value={value}
//       onChange={onChange}
//       className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${error
//           ? "border-red-500 focus:ring-red-400"
//           : "border-gray-300 focus:ring-gray-400"
//         }`}
//     />
//     {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//   </div>
// );




"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import axiosInstance from "../axios/axiosinstance"; // अपने axios instance का import

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", // API में 'mobile' है, लेकिन UI में 'phone' रखेंगे
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  // ✅ Real-time input restrictions
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "fullName") {
      // Allow only letters and spaces
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      // Remove non-digits
      newValue = value.replace(/\D/g, "");

      // Prevent 1–5 as first digit
      if (newValue.length === 1 && /[1-5]/.test(newValue)) {
        newValue = "";
      }

      // Limit to 10 digits
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear existing error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear submit status when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ success: false, message: "" });
    }
  };

  // ✅ Form validation on submit
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Please enter a valid name (letters and spaces only)";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number starting with 6-9";
      isValid = false;
    }

    if (!formData.service.trim()) {
      newErrors.service = "Service of interest is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      // Prepare data for API (UI में 'phone' है, लेकिन API में 'mobile' चाहिए)
      const apiData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim(), // यहाँ 'mobile' field का use करें
        message: `${formData.service}: ${formData.message.trim()}` // Service को message में include करें
      };

      // API call
      const response = await axiosInstance.post('/contacts', apiData);
      
      if (response.data.success) {
        setSubmitStatus({
          success: true,
          message: response.data.message || "Your message has been submitted successfully!",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ success: false, message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F6EFE4]">
      {/* ===== Banner Section ===== */}
      <div className="relative h-[430px] w-full overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Contact Banner"
          fill
          className="object-cover object-[center_70%]"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h1
            className="text-white text-[64px] font-semibold tracking-wide"
            style={{
              textShadow: `
            0px 10px 10px rgba(0,0,0,0.15),
            0px 10px 2px rgba(255, 255, 255, 0.1),
            0px 10px 30px rgba(255, 255, 255, 0.1)
          `,
            }}
          >
            Contact Us
          </h1>

          <div className="flex items-center justify-center w-[319px]">
            <div className="w-2 h-2 bg-white rotate-45"></div>
            <div className="flex-1 h-px bg-white"></div>
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>
        </div>
      </div>

      {/* ===== Submit Status Message ===== */}
      {submitStatus.message && (
        <div className={`max-w-6xl mx-auto px-4 mt-4 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
          <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
            {submitStatus.message}
          </div>
        </div>
      )}

      {/* ===== Contact Info & Form ===== */}
      <div className="max-w-6xl mx-auto px-4 py-[28px] my-[27px] rounded-[10px] grid grid-cols-1 md:grid-cols-2 gap-10 shadow-[4px_4px_4px_0px_#61777280]">
        {/* Left Info Section - NO CHANGES */}
        <div className="space-y-6">
          <div className="p-5 bg-[#F6EFE4] rounded-lg border border-[#617772] shadow-[4px_4px_4px_0px_#61777280]">
            <h2 className="font-semibold text-[18px] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#637571]" size={25} />
              Our Address
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
              Jaipur Rajasthan, India, 302017
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
              <BiSolidPhoneCall className="text-[#637571] text-3xl mb-2 mx-auto" />
              <p className="font-semibold">Call Us</p>
              <p className="text-sm text-gray-600">0141-4511098</p>
            </div>

            <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
              <FaEnvelope className="text-[#637571] text-2xl mb-2 mx-auto" />
              <p className="font-semibold">Email Us</p>
              <p className="text-sm text-gray-600">info@sustylo.com</p>
            </div>
          </div>

          <div className="px-8 py-4 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772]">
            <h2 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
              <FaClock className="text-[#637571]" size={22} />
              Opening hours
            </h2>
            <div className="space-y-2 text-[14px] text-gray-700">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>09:00 AM to 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>09:00 AM to 08:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-6 bg-[#F6EFE4] rounded-lg border border-[#617772]">
          <h2 className="text-[18px] font-semibold mb-6">Send us a message</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full name*"
                name="fullName"
                data-nordpass-ignore="true"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                disabled={isSubmitting}
              />
              <InputField
                label="Email address*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Phone number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={isSubmitting}
              />
              <InputField
                label="Service of interest*"
                name="service"
                value={formData.service}
                onChange={handleChange}
                error={errors.service}
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Message*
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-gray-400"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#617772] text-white px-6 py-2 rounded-md w-full hover:bg-[#50665f] transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>

      {/* ===== Google Map Section ===== */}
      <div className="w-full h-[400px] mb-[83px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.572800535024!2d75.86883381574005!3d26.799007873509908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94baba6edad%3A0xd9cda1cfd0d224a!2sSevenUnique%20Tech%20Solutions%20Pvt.%20Ltd.%20%7C%20Web%20%26%20App%20Development.!5e0!3m2!1sen!2sin!4v1756112039067!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

// ✅ Reusable Input Field component
const InputField = ({ label, name, value, onChange, error, disabled }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${error
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300 focus:ring-gray-400"
        } ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);