"use client";
import { useState } from "react";
import axiosInstance from "@/app/axios/axiosinstance";
import Swal from 'sweetalert2';

export default function LeadModal({ isOpen, onClose, type }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    contact: "",
    salonName: "",
    serviceArea: "",
    address: { street: "", area: "", city: "", state: "", pinCode: "", country: "India" }
  });

  if (!isOpen) return null;

  // ✅ 1. Input Validation Logic
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "ownerName") {
      // Sirf characters aur spaces allow karein
      const onlyChars = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, ownerName: onlyChars });
    } 
    else if (name === "contact") {
      // Sirf numbers allow karein
      let numOnly = value.replace(/\D/g, "");
      
      // Starting digit 1-5 block karein
      if (numOnly.length === 1 && /[1-5]/.test(numOnly)) {
        return;
      }
      
      // Max 10 digits restrict karein
      if (numOnly.length <= 10) {
        setFormData({ ...formData, contact: numOnly });
      }
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ 2. Final Validation Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.ownerName.trim().length < 3) {
      return Swal.fire("Error", "Please enter a valid Name (min 3 chars)", "error");
    }
    if (!emailRegex.test(formData.email)) {
      return Swal.fire("Error", "Please enter a valid Email Address", "error");
    }
    if (formData.contact.length !== 10) {
      return Swal.fire("Error", "Contact number must be exactly 10 digits", "error");
    }

    setLoading(true);

    const payload = {
      ownerName: formData.ownerName,
      leadType: type,
      email: formData.email,
      contact: formData.contact,
      ...(type === "Salon" 
          ? { salonName: formData.salonName, address: formData.address } 
          : { serviceArea: formData.serviceArea })
    };

    try {
      const res = await axiosInstance.post("/leads", payload); 
      if (res.data.success || res.status === 201) {
        Swal.fire({
          title: 'Success!',
          text: res.data.message || "Registration Successful",
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
        
        // Form Reset
        setFormData({ 
          ownerName: "", email: "", contact: "", salonName: "", serviceArea: "", 
          address: { street: "", area: "", city: "", state: "", pinCode: "", country: "India" } 
        });
        onClose(); 
      }
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.message || "Something went wrong!";
      Swal.fire({
        title: 'Error!',
        text: errorMsg,
        icon: 'error',
        confirmButtonColor: '#d33'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="bg-[#f6efe4] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Register as {type}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Owner Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500">Owner Name*</label>
            <input 
              name="ownerName"
              className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
              placeholder="Full Name (Alphabets only)" 
              required 
              value={formData.ownerName}
              onChange={handleInputChange} 
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-500">Email Address*</label>
            <input 
              name="email"
              className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
              type="email" 
              placeholder="example@mail.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-xs font-semibold text-gray-500">Contact Number*</label>
            <input 
              name="contact"
              className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
              placeholder="10 digit number (starts with 6-9)" 
              required 
              value={formData.contact}
              onChange={handleInputChange} 
            />
          </div>

          {type === "Salon" ? (
            <>
              <input 
                className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
                placeholder="Salon Name" 
                required 
                value={formData.salonName}
                onChange={(e) => setFormData({...formData, salonName: e.target.value})} 
              />
              <p className="font-semibold text-sm text-gray-600">Address Details:</p>
              <input 
                className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
                placeholder="Street Address" 
                value={formData.address.street}
                onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})} 
              />
              <div className="grid grid-cols-2 gap-2">
                <input 
                  className="border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
                  placeholder="City" 
                  value={formData.address.city}
                  onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})} 
                />
                <input 
                  className="border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
                  placeholder="Pin Code" 
                  value={formData.address.pinCode}
                  onChange={(e) => setFormData({...formData, address: {...formData.address, pinCode: e.target.value.replace(/\D/g,"")}})} 
                />
              </div>
            </>
          ) : (
            <input 
              className="w-full border border-gray-300 text-black p-2 rounded focus:ring-1 focus:ring-[#cbaa87] outline-none" 
              placeholder="Service Area (e.g. Jaipur City)" 
              required 
              value={formData.serviceArea}
              onChange={(e) => setFormData({...formData, serviceArea: e.target.value})} 
            />
          )}

          <div className="flex gap-2 pt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 bg-gray-100 text-gray-600 font-bold p-2 rounded hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading} 
              className="flex-1 bg-[#604223] text-white font-bold p-2 rounded hover:bg-[#cbaa87] disabled:bg-[#cbaa87] transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}