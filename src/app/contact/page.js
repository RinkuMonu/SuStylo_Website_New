// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

// export default function ContactPage() {
//     return (
//         <div className="bg-[#F6EFE4]">
//             {/* ===== Banner Section ===== */}
//             <div className="relative h-[430px] w-full">
//                 {/* Replace src with your local image path */}
//                 <Image
//                     src="/contact.jpg"
//                     alt="Contact Banner"
//                     fill
//                     className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">


//                     <h1 className="text-white text-[64px] font-semibold tracking-wide pb-2">
//                         Contact Us
//                     </h1>

//                     {/* Decorative line with diamond dots */}
//                     <div className="flex items-center justify-center w-[319px]">
//                         <div className="w-2 h-2 bg-white rotate-45"></div>
//                         <div className="flex-1 h-px bg-white"></div>
//                         <div className="w-2 h-2 bg-white rotate-45"></div>
//                     </div>

//                 </div>
//             </div>

//             {/* ===== Contact Info & Form ===== */}
//             <div className="max-w-6xl mx-auto px-4 py-[28px] my-[27px] rounded-[10px] grid grid-cols-1 md:grid-cols-2 gap-10 shadow-[4px_4px_4px_0px_#61777280]">
//                 {/* Left Info Section */}
//                 <div className="space-y-6">
//                     {/* Address */}
//                     <div className="p-5 bg-[#F6EFE4] rounded-lg border border-[#617772] shadow-[4px_4px_4px_0px_#61777280]">
//                         <h2 className="font-semibold text-[18px] mb-2 flex items-center gap-2">
//                             <FaMapMarkerAlt className="text-[#6C757D]" size={25} />
//                             Our Address
//                         </h2>
//                         <p className="text-[14px] text-gray-600 leading-relaxed">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                             Quo, laborum sed ab deserunt, 123456, Lorem Ipsumdolor
//                         </p>
//                     </div>

//                     {/* Call & Email */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
//                             <FaPhone className="text-[#6C757D] text-2xl mb-2 mx-auto" />
//                             <p className="font-semibold">Call Us</p>
//                             <p className="text-sm text-gray-600">+91 1234567890</p>
//                         </div>

//                         <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
//                             <FaEnvelope className="text-[#6C757D] text-2xl mb-2 mx-auto" />
//                             <p className="font-semibold">Email Us</p>
//                             <p className="text-sm text-gray-600">abc@gmail.com</p>
//                         </div>
//                     </div>

//                     {/* Opening Hours */}
//                     <div className="px-8 py-4 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772]">
//                         <h2 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
//                             <FaClock className="text-[#6C757D]" size={22} />
//                             Opening hours
//                         </h2>

//                         <div className="space-y-2 text-[14px] text-gray-700">
//                             <div className="flex justify-between">
//                                 <span>Lorem ipsumolor sit,</span>
//                                 <span>09:00 AM to 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Lorem ipsumolor sit,</span>
//                                 <span>09:00 AM to 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Lorem ipsumolor sit,</span>
//                                 <span>09:00 AM to 10:00 PM</span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Right Form Section */}
//                 <div className="p-6 bg-[#F6EFE4] rounded-lg border border-[#617772]">
//                     <h2 className="text-[18px] font-semibold mb-6">Send us a message</h2>
//                     <form className="space-y-5">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-sm font-medium text-gray-700">Full name*</label>
//                                 <input
//                                     type="text"
//                                     className="border border-gray-300 rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
//                                 />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-sm font-medium text-gray-700">Email address*</label>
//                                 <input
//                                     type="email"
//                                     className="border border-gray-300 rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-sm font-medium text-gray-700">Phone number</label>
//                                 <input
//                                     type="text"
//                                     className="border border-gray-300 rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
//                                 />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-sm font-medium text-gray-700">Service of interest</label>
//                                 <input
//                                     type="text"
//                                     className="border border-gray-300 rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                             <label className="text-sm font-medium text-gray-700">Message</label>
//                             <textarea
//                                 rows="4"
//                                 className="border border-gray-300 rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="bg-[#617772] text-white px-6 py-2 rounded-md w-full hover:bg-[#50665f] transition-all"
//                         >
//                             SEND MESSAGE
//                         </button>
//                     </form>
//                 </div>

//             </div>

//             {/* ===== Google Map Section ===== */}
//             <div className="w-full h-[400px] mb-[83px]">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31519.95516412745!2d75.784!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40c6b52b82f%3A0x5649d7d85f2b9d3d!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1690976329463!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="border-0"
//                 ></iframe>
//             </div>
//         </div>
//     );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const validateForm = () => {
        const newErrors = {
            fullName: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        };

        let isValid = true;

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
            isValid = false;
        } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.fullName)) {
            newErrors.fullName = "Please enter a valid name (letters and spaces only)";
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Phone validation
        if (formData.phone.trim()) {
            if (!/^[1-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
                newErrors.phone = "Please enter a valid 10-digit phone number starting with 1-9";
                isValid = false;
            }
        }

        // Service validation
        if (!formData.service.trim()) {
            newErrors.service = "Service of interest is required";
            isValid = false;
        }

        // Message validation
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with submission
            console.log("Form submitted:", formData);
            // Add your form submission logic here
            alert("Message sent successfully!");
            
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });
        }
    };

    return (
        <div className="bg-[#F6EFE4]">
            {/* ===== Banner Section ===== */}
            <div className="relative h-[430px] w-full">
                {/* Replace src with your local image path */}
                <Image
                    src="/contact.jpg"
                    alt="Contact Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h1 className="text-white text-[64px] font-semibold tracking-wide pb-2">
                        Contact Us
                    </h1>

                    {/* Decorative line with diamond dots */}
                    <div className="flex items-center justify-center w-[319px]">
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                        <div className="flex-1 h-px bg-white"></div>
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                    </div>
                </div>
            </div>

            {/* ===== Contact Info & Form ===== */}
            <div className="max-w-6xl mx-auto px-4 py-[28px] my-[27px] rounded-[10px] grid grid-cols-1 md:grid-cols-2 gap-10 shadow-[4px_4px_4px_0px_#61777280]">
                {/* Left Info Section */}
                <div className="space-y-6">
                    {/* Address */}
                    <div className="p-5 bg-[#F6EFE4] rounded-lg border border-[#617772] shadow-[4px_4px_4px_0px_#61777280]">
                        <h2 className="font-semibold text-[18px] mb-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#6C757D]" size={25} />
                            Our Address
                        </h2>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                            Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                        </p>
                    </div>

                    {/* Call & Email */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
                            <FaPhone className="text-[#6C757D] text-2xl mb-2 mx-auto" />
                            <p className="font-semibold">Call Us</p>
                            <p className="text-sm text-gray-600">+91-987654321</p>
                        </div>

                        <div className="p-5 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772] text-center text-[18px]">
                            <FaEnvelope className="text-[#6C757D] text-2xl mb-2 mx-auto" />
                            <p className="font-semibold">Email Us</p>
                            <p className="text-sm text-gray-600">7unique@gmail.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="px-8 py-4 bg-[#F6EFE4] shadow-[4px_4px_4px_0px_#61777280] rounded-lg border border-[#617772]">
                        <h2 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
                            <FaClock className="text-[#6C757D]" size={22} />
                            Opening hours
                        </h2>

                        <div className="space-y-2 text-[14px] text-gray-700">
                            <div className="flex justify-between">
                                <span>Lorem ipsumolor sit,</span>
                                <span>09:00 AM to 10:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Lorem ipsumolor sit,</span>
                                <span>09:00 AM to 10:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Lorem ipsumolor sit,</span>
                                <span>09:00 AM to 10:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="p-6 bg-[#F6EFE4] rounded-lg border border-[#617772]">
                    <h2 className="text-[18px] font-semibold mb-6">Send us a message</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Full name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${
                                        errors.fullName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-gray-400"
                                    }`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Email address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${
                                        errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-gray-400"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Phone number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${
                                        errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-gray-400"
                                    }`}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Service of interest*</label>
                                <input
                                    type="text"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${
                                        errors.service ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-gray-400"
                                    }`}
                                />
                                {errors.service && (
                                    <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Message*</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`border rounded-[10px] p-2 w-full bg-transparent focus:outline-none focus:ring-1 ${
                                    errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-gray-400"
                                }`}
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-[#617772] text-white px-6 py-2 rounded-md w-full hover:bg-[#50665f] transition-all"
                        >
                            SEND MESSAGE
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