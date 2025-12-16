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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Data structure prepare karna
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
                text: res.data.message, // Backend ka message
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#3085d6',
            });
            onClose(); 
            setFormData({ ownerName: "", email: "", contact: "", salonName: "", serviceArea: "", address: {} });
            }
        } catch (err) {
            console.error(err);
            const errorMsg = err.response?.data?.message || "Something went wrong!";
            Swal.fire({
                title: 'Error!',
                text: errorMsg,
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33'
            });
        } finally {
            setLoading(false);
        }
    };

  return (
   <div class="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-10 p-4">


      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Register as {type}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full border border-gray-300 text-black p-2 rounded" placeholder="Owner Name" required onChange={(e) => setFormData({...formData, ownerName: e.target.value})} />
          <input className="w-full border border-gray-300 text-black p-2 rounded" type="email" placeholder="Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input className="w-full border border-gray-300 text-black p-2 rounded" placeholder="Contact Number" required onChange={(e) => setFormData({...formData, contact: e.target.value})} />

          {type === "Salon" ? (
            <>
              <input className="w-full border border-gray-300 text-black p-2 rounded" placeholder="Salon Name" required onChange={(e) => setFormData({...formData, salonName: e.target.value})} />
              <p className="font-semibold text-sm">Address Details:</p>
              <input className="w-full border border-gray-300 text-black p-2 rounded" placeholder="Street" onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})} />
              <div className="grid grid-cols-2 gap-2">
                <input className="border border-gray-300 text-black p-2 rounded" placeholder="City" onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})} />
                <input className="border border-gray-300 text-black p-2 rounded" placeholder="Pin Code" onChange={(e) => setFormData({...formData, address: {...formData.address, pinCode: e.target.value}})} />
              </div>
            </>
          ) : (
            <input className="w-full border border-gray-300 text-black  p-2 rounded" placeholder="Service Area (e.g. Jaipur City)" required onChange={(e) => setFormData({...formData, serviceArea: e.target.value})} />
          )}

          <div className="flex gap-2 pt-4">
            <button type="button" onClick={onClose} className="flex-1 bg-gray-100 text-gray-600 font-bold p-2 rounded">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 bg-blue-600 text-white p-2 rounded">
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}