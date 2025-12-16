// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// export default function AccountPage() {
//   const [activeSection, setActiveSection] = useState("profile");
//   const [isEditing, setIsEditing] = useState(false);
//   const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);


//   return (
//     <div className="bg-[#F6EFE4] font-serif py-[85px] min-h-screen">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="border-b border-b-[#D0BFAF]">
//           <h1 className="text-[36px] font-bold text-[#1E1E1E] mb-[9px]">Account</h1>
//           <h2 className="text-[20px] font-semibold text-[#1E1E1E] mb-2">Alisa Menon</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4">
//           {/* Sidebar */}
//           <div className="border-r border-[#D0BFAF]">
//             <div>
//               <h3 className="font-bold text-[15px] text-[#1E1E1E] mb-3 mt-[35px]">Account</h3>
//               <ul className="space-y-2">
//                 {[
//                   { key: "profile", label: "Profile", icon: <FaUser /> },
//                   { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
//                   { key: "history", label: "History", icon: <FaClock /> },
//                 ].map((item) => (
//                   <li
//                     key={item.key}
//                     onClick={() => setActiveSection(item.key)}
//                     className={`cursor-pointer flex items-center gap-2 text-sm font-medium ${activeSection === item.key
//                       ? "text-[#1E1E1E]"
//                       : "text-[#7A6F63] hover:text-[#1E1E1E]"
//                       }`}
//                   >
//                     {/* {item.icon} */}
//                     {item.label}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-10">
//               <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3">
//                 Legal
//               </h3>
//               <ul className="space-y-2 text-[#7A6F63] text-sm">
//                 <li
//                   className={`cursor-pointer ${activeSection === "terms" && "font-semibold text-[#1E1E1E]"
//                     }`}
//                   onClick={() => setActiveSection("terms")}
//                 >
//                   Terms Of Use
//                 </li>
//                 <li
//                   className={`cursor-pointer ${activeSection === "privacy" && "font-semibold text-[#1E1E1E]"
//                     }`}
//                   onClick={() => setActiveSection("privacy")}
//                 >
//                   Privacy Center
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3 pl-6">
//             {/* PROFILE SECTION */}
//             {activeSection === "profile" && (
//               <div className="border border-[#D0BFAF] bg-[#F6EFE4] px-[20px] md:px-[88px] lg:px-[88px] py-[19px] mt-8">
//                 <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3 border-b border-[#D0BFAF] pb-2">
//                   Profile Details
//                 </h3>

//                 {!isEditing ? (
//                   <div className="flex flex-col items-center">
//                     <Image
//                       src="/profile.jpg"
//                       alt="Profile"
//                       width={60}
//                       height={60}
//                       className="rounded-md mb-4"
//                     />
//                     <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-sm text-[#1E1E1E]">
//                       <p>Full Name</p>
//                       <p className="font-medium">Alisa Menon</p>

//                       <p>Mobile Number</p>
//                       <p className="font-medium">1234567890</p>

//                       <p>Email ID</p>
//                       <p className="font-medium">abcdefg@gmail.com</p>

//                       <p>Gender</p>
//                       <p className="font-medium">Female</p>

//                       <p>Age</p>
//                       <p className="font-medium">27</p>

//                       <p>Location</p>
//                       <p className="font-medium">Jaipur</p>
//                     </div>

//                     <button
//                       onClick={() => setIsEditing(true)}
//                       className="mt-6 bg-[#5B3923] text-[#F6EFE4] px-10 py-2 w-1/2 rounded-sm text-sm"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 ) : (
//                   <form className="flex flex-col items-center space-y-4">
//                     {/* Profile Image */}
//                     <div className="relative flex justify-center">
//                       <Image
//                         src="/profile.jpg"
//                         alt="Profile"
//                         width={60}
//                         height={60}
//                         className="rounded-md object-cover"
//                       />

//                     </div>

//                     {/* Phone Number */}
//                     <div className="flex items-center w-full border border-[#D0BFAF] rounded-sm overflow-hidden">
//                       <input
//                         type="text"
//                         value="1234567890"
//                         readOnly
//                         className="flex-1 bg-[#F6EFE4] text-[#1E1E1E] px-3 py-2 text-sm outline-none"
//                       />
//                       <button
//                         type="button"
//                         className="bg-[#758D83] text-[#F6EFE4] px-4 py-2 text-sm hover:opacity-90 transition"
//                       >
//                         Change
//                       </button>
//                     </div>

//                     {/* Full Name - Floating Label */}
//                     <div className="relative w-full">
//                       <input
//                         type="text"
//                         id="fullName"
//                         defaultValue="Alisa Menon"
//                         className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
//                         placeholder="Full name"
//                       />
//                       <label
//                         htmlFor="fullName"
//                         className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
//                       >
//                         Full name
//                       </label>
//                     </div>

//                     {/* Email - Floating Label */}
//                     <div className="relative w-full">
//                       <input
//                         type="email"
//                         id="email"
//                         defaultValue="abcdefgh@gmail.com"
//                         className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
//                         placeholder="Email"
//                       />
//                       <label
//                         htmlFor="email"
//                         className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
//                       >
//                         Email
//                       </label>
//                     </div>

//                     {/* Gender */}
//                     <div className="w-full grid grid-cols-2 border border-[#D0BFAF] rounded-sm overflow-hidden">
//                       <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] border-r border-[#D0BFAF] cursor-pointer bg-[#F6EFE4]">
//                         <input type="radio" name="gender" className="accent-[#5B3923]" />
//                         Male
//                       </label>
//                       <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] cursor-pointer bg-[#F6EFE4]">
//                         <input
//                           type="radio"
//                           name="gender"
//                           className="accent-[#5B3923]"
//                           defaultChecked
//                         />
//                         Female
//                       </label>
//                     </div>

//                     {/* Birthday - Floating Label */}
//                     <div className="relative w-full">
//                       <input
//                         type="text"
//                         id="birthday"
//                         defaultValue="01/01/1998"
//                         placeholder="Birthday"
//                         className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
//                       />
//                       <label
//                         htmlFor="birthday"
//                         className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
//                       >
//                         Birthday (dd/mm/yyyy)
//                       </label>
//                     </div>

//                     {/* Save Button */}
//                     <button
//                       type="button"
//                       onClick={() => setIsEditing(false)}
//                       className="bg-[#5B3923] text-[#F6EFE4] px-8 py-2 rounded-sm text-sm w-1/2 hover:opacity-90 transition"
//                     >
//                       Save Details
//                     </button>
//                   </form>
//                 )}
//               </div>
//             )}

//             {/* Terms Of Use Section */}
//             {activeSection === "terms" && (
//               <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
//                 <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
//                   Terms Of Use
//                 </h3>
//                 {[1, 2, 3].map((i) => (
//                   <div key={i}>
//                     <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
//                     <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
//                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                       accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                       quae ab illo inventore veritatis et quasi architecto beatae vitae
//                       dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//                       aspernatur aut odit aut fugit.
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Privacy Center Section */}
//             {activeSection === "privacy" && (
//               <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
//                 <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
//                   Privacy Center
//                 </h3>
//                 {[1, 2, 3].map((i) => (
//                   <div key={i}>
//                     <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
//                     <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
//                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                       accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                       quae ab illo inventore veritatis et quasi architecto beatae vitae
//                       dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//                       aspernatur aut odit aut fugit.
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* ADDRESS SECTION */}
//             {activeSection === "addresses" && (
//               <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
//                 <div>
//                   <h3 className="font-semibold text-[16px] border-b border-[#D0BFAF] pb-2">
//                     Default Address
//                   </h3>
//                   <div className="mt-4 text-sm text-[#1E1E1E] flex justify-between">
//                     <div>
//                       <p className="font-semibold">Alisa Menon</p>
//                       <p>Plot No 97</p>
//                       <p>Jagatpura</p>
//                       <p>Jaipur - 303901</p>
//                       <p>Rajasthan</p>
//                       <p>Mobile: 0000000000</p>
//                     </div>

//                   </div>
//                   <div className="flex justify-around gap-3 mt-4">
//                     <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm"
//                       onClick={() => setIsAddressModalOpen(true)}

//                     >
//                       Edit
//                     </button>
//                     <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm">
//                       Remove
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-sm border-t border-[#D0BFAF] pt-4">
//                     Other Addresses
//                   </h3>
//                   <div className="grid md:grid-cols-2 gap-6 mt-4">
//                     {[1, 2].map((i) => (
//                       <div
//                         key={i}
//                         className="border border-[#D0BFAF] p-4 rounded-sm text-sm text-[#1E1E1E]"
//                       >
//                         <div className="flex justify-between mb-2">
//                           <p className="font-semibold">Alisa Menon</p>
//                           <span className="text-[10px] px-2 py-0.5 bg-[#E9E0D2] rounded-full">
//                             Home
//                           </span>
//                         </div>
//                         <p>Plot No 97</p>
//                         <p>Jagatpura</p>
//                         <p>Jaipur - 303901</p>
//                         <p>Rajasthan</p>
//                         <p>Mobile: 0000000000</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Address Edit Modal */}
//             {isAddressModalOpen && (
//               // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
//                 <div className="bg-[#F6EFE4] w-[90%] md:w-[600px] p-8 mt-10 rounded-md relative border border-[#D0BFAF]">
//                   {/* <button
//                     onClick={() => setIsAddressModalOpen(false)}
//                     className="absolute top-4 right-4 text-[#5B3923]"
//                   >
//                     <IoClose size={22} />
//                   </button> */}
//                   <h3 className="font-semibold text-[#1E1E1E] mb-4 border-b border-[#D0BFAF] pb-2">
//                     Edit Address
//                   </h3>

//                   <form className="space-y-4 text-sm text-[#1E1E1E]">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label>Name*</label>
//                         <input
//                           defaultValue="Alisa Menon"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                       <div>
//                         <label>Mobile*</label>
//                         <input
//                           defaultValue="0000000000"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label>Pincode*</label>
//                         <input
//                           defaultValue="395007"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                       <div>
//                         <label>State*</label>
//                         <input
//                           defaultValue="Rajasthan"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label>Address (House Number, Street, Area)*</label>
//                       <textarea
//                         rows="2"
//                         defaultValue="Plot No 97, Jagatpura, Jaipur"
//                         className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label>Locality/Town*</label>
//                         <input
//                           defaultValue="Mandal"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                       <div>
//                         <label>City/District*</label>
//                         <input
//                           defaultValue="Bhilwara"
//                           className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-6">
//                       <label className="flex items-center gap-2">
//                         <input type="radio" name="addressType" defaultChecked /> Home
//                       </label>
//                       <label className="flex items-center gap-2">
//                         <input type="radio" name="addressType" /> Office
//                       </label>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" defaultChecked />
//                       <label>Make this as my default address</label>
//                     </div>

//                     <div className="flex gap-2 mt-6">
//                       <button
//                         type="button"
//                         onClick={() => setIsAddressModalOpen(false)}
//                         className="border border-[#5B3923] px-6 py-2 rounded-sm w-full"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="bg-[#5B3923] text-[#F6EFE4] px-6 py-2 rounded-sm w-full"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}

//             {/* HISTORY SECTION */}
//             {activeSection === "history" && (
//               <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
//                 <div>
//                   <span className="font-semibold text-[20px] border-b border-black ">
//                     Upcoming Bookings
//                   </span>
//                   {[1, 2].map((i) => (
//                     <div
//                       key={i}
//                       className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 mb-4 text-sm text-[#1E1E1E]"
//                     >
//                       <div>
//                         <p className="font-semibold">Facial, Legs Waxing</p>
//                         <p className="text-[#7A6F63]">Upcoming • Nov 16, 2025</p>
//                       </div>
//                       <p>₹1200</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <span className="font-semibold text-[20px] border-b border-black mt-4">
//                     History
//                   </span>
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <div
//                       key={i}
//                       className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 text-sm text-[#1E1E1E]"
//                     >
//                       <div>
//                         <p className="font-semibold">Facial, Legs Waxing</p>
//                         <p className="text-[#7A6F63]">Completed • Nov 16, 2025</p>
//                       </div>
//                       <p>₹1200</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



//=============================



"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaUser, FaMapMarkerAlt, FaClock, FaWallet } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axiosInstance from "../axios/axiosinstance";
import { jwtDecode } from 'jwt-decode';

export default function AccountPage() {
 const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [walletLoading, setWalletLoading] = useState(false);
  const [addBalanceModal, setAddBalanceModal] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [addDescription, setAddDescription] = useState("Customer added balance");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: ""
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
const [upcomingBookings, setUpcomingBookings] = useState([]);
    const [historyBookings, setHistoryBookings] = useState([]);
    const [historyLoading, setHistoryLoading] = useState(false);
    const [historyError, setHistoryError] = useState(null);
  // Fetch profile data
  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/customers/profile");
      if (response.data.success) {
        const customer = response.data.customer;
        setProfileData(customer);
        setFormData({
          name: customer.name || "",
          email: customer.email || "",
          phone: customer.phone || "",
          gender: customer.gender || "",
          age: customer.age || ""
        });
        if (customer.avatarUrl) {
          setAvatarPreview(customer.avatarUrl);
        }
        
        
        await fetchWalletData(customer._id);

      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };



    // Fetch wallet data
  const fetchWalletData = async (userId) => {
    try {
      setWalletLoading(true);
      const response = await axiosInstance.get(`/wallet/${userId}`);
      if (response.data.success) {
        setWalletData(response.data.wallet);
      }
    } catch (error) {
      console.error("Error fetching wallet:", error);
    } finally {
      setWalletLoading(false);
    }
  };

  // Add balance to wallet
  const handleAddBalance = async (e) => {
    e.preventDefault();
    if (!addAmount || isNaN(addAmount) || parseFloat(addAmount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const response = await axiosInstance.post("/wallet/add", {
        ownerId: profileData._id,
        ownerModel: "User",
        amount: parseFloat(addAmount),
        description: addDescription
      });

      if (response.data.success) {
        setWalletData(response.data.wallet);
        setAddBalanceModal(false);
        setAddAmount("");
        alert("Balance added successfully!");
      }
    } catch (error) {
      console.error("Error adding balance:", error);
      alert("Failed to add balance. Please try again.");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);


  // --- 2. BOOKING HISTORY LOGIC (Corrected) ---
  const classifyBookings = (bookings) => {
      const upcoming = [];
      const history = [];

      bookings.forEach(booking => {
          // Statuses considered 'Upcoming' (modify as per your backend states)
          const upcomingStatuses = ['pending', 'approved', 'confirmed', 'inProgress'];
          const status = booking.status ? booking.status.toLowerCase() : '';

          // Check if status is defined and is in the list of upcoming statuses
          if (upcomingStatuses.includes(status)) {
              upcoming.push(booking);
          } else { 
              // Assuming 'completed', 'cancelled', 'rejected', etc., fall into History
              history.push(booking);
          }
      });

      setUpcomingBookings(upcoming);
      setHistoryBookings(history);
  };

  const fetchBookings = async () => {
      setHistoryLoading(true);
      setHistoryError(null);

      try {
          const token = localStorage.getItem('token'); 
          if (!token) {
              setHistoryError("User not authenticated. Please log in.");
              setHistoryLoading(false);
              return;
          }

          // NOTE: Since the backend fetches the user ID from the JWT token, 
          // we use the simple route /booking/user/
          const response = await axiosInstance.get(`/booking/user/`);
          
          if (response.data.success) {
              // Ensure response.data.bookings is an array before classifying
              if (Array.isArray(response.data.bookings)) {
                  classifyBookings(response.data.bookings);
              } else {
                  setHistoryError("Received invalid data structure from server.");
              }
          } else {
              setHistoryError(response.data.message || "Failed to fetch bookings.");
          }

      } catch (err) {
          console.error("Fetch Bookings Error:", err);
          // Display a more user-friendly error if the request fails (e.g., 401, 500)
          const errorMessage = err.response?.data?.message || "Error loading booking history. Check your network/server.";
          setHistoryError(errorMessage);
      } finally {
          setHistoryLoading(false);
      }
  };

  // Fetch bookings only when the 'history' section is active
  useEffect(() => {
      if (activeSection === 'history' && !historyBookings.length) {
          fetchBookings();
      }
  }, [activeSection]);
    
    // Helper function to get service names from nested structure
    const getServiceNames = (services) => {
      if (!Array.isArray(services)) return "No Services";
      return services.map(s => s.serviceId?.name || s.name || 'Service').join(', ');
    };
    
    // Helper function to format status
    const getStatusDisplay = (status) => {
      if (!status) return "N/A";
      const statusMap = {
          'pending': '⏳ Pending Approval',
          'pendingapproval': '⏳ Waiting Approval',
          'approved': '✅ Approved',
          'confirmed': '✅ Confirmed',
          'inprogress': '🛠️ In Progress',
          'completed': '🎉 Completed',
          'cancelled': '❌ Cancelled',
          'rejected': '🚫 Rejected',
          'refunded': '💸 Refunded',
      };
      const lowerStatus = status.toLowerCase();
      // यदि statusMap में है, तो रंगीन/इमोजी वाला टेक्स्ट दिखाएं, अन्यथा Capitalize करें
      return statusMap[lowerStatus] || status.charAt(0).toUpperCase() + status.slice(1);
    };
    const getBookingLocation = (booking) => {
      if (booking.isAtHome) {
          return "Home Service";
      }
      return booking.salonId?.salonName || "Salon Service"; 
    };
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  };

  // Handle form submission for profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append form fields
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append avatar if selected
      if (avatarFile) {
        formDataToSend.append('avatar', avatarFile);
      }

      // Send PUT request
      const response = await axiosInstance.put("/customers/profile", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        // Update profile data with new data
        setProfileData(response.data.customer);
        // Update avatar preview if new avatar was uploaded
        if (response.data.customer.avatarUrl) {
          setAvatarPreview(response.data.customer.avatarUrl);
        }
        setIsEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    // Reset form data to original profile data
    if (profileData) {
      setFormData({
        name: profileData.name || "",
        email: profileData.email || "",
        phone: profileData.phone || "",
        gender: profileData.gender || "",
        age: profileData.age || ""
      });
    }
    setAvatarFile(null);
    if (profileData?.avatarUrl) {
      setAvatarPreview(profileData.avatarUrl);
    }
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("userLat");
    localStorage.removeItem("userLng");

    // Redirect to home
    window.location.href = "/"; // ya "/"
  };


  if (loading) {
    return (
      <div className="bg-[#F6EFE4] font-serif py-[85px] min-h-screen flex items-center justify-center">
        <div className="text-[#5B3923]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6EFE4] font-serif py-[85px] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-b-[#D0BFAF]">
          <h1 className="text-[36px] font-bold text-[#1E1E1E] mb-[9px]">Account</h1>
          <h2 className="text-[20px] font-semibold text-[#1E1E1E] mb-2">
            {profileData?.name || "Loading..."}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="border-r border-[#D0BFAF]">
            <div>
              <h3 className="font-bold text-[15px] text-[#1E1E1E] mb-3 mt-[35px]">Account</h3>
              <ul className="space-y-2">
                {[
                  { key: "profile", label: "Profile", icon: <FaUser /> },
                  { key: "wallet", label: "Wallet", icon: <FaWallet /> },

                  // { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
                  { key: "history", label: "History", icon: <FaClock /> },
                ].map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setActiveSection(item.key)}
                    className={`cursor-pointer flex items-center gap-2 text-sm font-medium ${activeSection === item.key
                      ? "text-[#1E1E1E]"
                      : "text-[#7A6F63] hover:text-[#1E1E1E]"
                      }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3">
                Legal
              </h3>
              <ul className="space-y-2 text-[#7A6F63] text-sm">
                <li
                  className={`cursor-pointer ${activeSection === "terms" && "font-semibold text-[#1E1E1E]"
                    }`}
                  onClick={() => setActiveSection("terms")}
                >
                  Terms Of Use
                </li>
                <li
                  className={`cursor-pointer ${activeSection === "privacy" && "font-semibold text-[#1E1E1E]"
                    }`}
                  onClick={() => setActiveSection("privacy")}
                >
                  Privacy Center
                </li>
              </ul>

              <ul className="space-y-2 mt-6">
                <li
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800"
                >
                  Logout
                </li>
              </ul>

            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 pl-6">
            {/* PROFILE SECTION */}
            {activeSection === "profile" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] px-[20px] md:px-[88px] lg:px-[88px] py-[19px] mt-8">
                <h3 className="font-semibold text-sm text-[#1E1E1E] mb-3 border-b border-[#D0BFAF] pb-2">
                  Profile Details
                </h3>

                {!isEditing ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src={profileData?.avatarUrl || "/profile.jpg"}
                      alt="Profile"
                      width={60}
                      height={60}
                      className="rounded-md mb-4"
                    />
                    <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-sm text-[#1E1E1E]">
                      <p>Full Name</p>
                      <p className="font-medium">{profileData?.name || "N/A"}</p>

                      <p>Mobile Number</p>
                      <p className="font-medium">{profileData?.phone || "N/A"}</p>

                      <p>Email ID</p>
                      <p className="font-medium">{profileData?.email || "N/A"}</p>

                      <p>Gender</p>
                      <p className="font-medium">{profileData?.gender || "N/A"}</p>

                      <p>Age</p>
                      <p className="font-medium">{profileData?.age || "N/A"}</p>

                      <p>Location</p>
                      <p className="font-medium">
                        {profileData?.address?.city || profileData?.address?.country || "Jaipur"}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-6 bg-[#5B3923] text-[#F6EFE4] px-10 py-2 w-1/2 rounded-sm text-sm"
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleProfileUpdate} className="flex flex-col items-center space-y-4">
                    {/* Profile Image */}
                    <div className="relative flex justify-center">
                      <Image
                        src={avatarPreview || "/profile.jpg"}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <label className="absolute -bottom-2 -right-2 bg-[#5B3923] text-white p-1 rounded-full cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarChange}
                          className="hidden"
                        />
                        <span className="text-xs">Edit</span>
                      </label>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center w-full border border-[#D0BFAF] rounded-sm overflow-hidden">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 bg-[#F6EFE4] text-[#1E1E1E] px-3 py-2 text-sm outline-none"
                      />
                      <button
                        type="button"
                        className="bg-[#758D83] text-[#F6EFE4] px-4 py-2 text-sm hover:opacity-90 transition"
                      >
                        Change
                      </button>
                    </div>

                    {/* Full Name - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                        placeholder="Full name"
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Full name
                      </label>
                    </div>

                    {/* Email - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Email
                      </label>
                    </div>

                    {/* Gender */}
                    <div className="w-full grid grid-cols-2 border border-[#D0BFAF] rounded-sm overflow-hidden">
                      <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] border-r border-[#D0BFAF] cursor-pointer bg-[#F6EFE4]">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleInputChange}
                          className="accent-[#5B3923]"
                        />
                        Male
                      </label>
                      <label className="flex items-center justify-center gap-2 py-2 text-[#1E1E1E] cursor-pointer bg-[#F6EFE4]">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleInputChange}
                          className="accent-[#5B3923]"
                        />
                        Female
                      </label>
                    </div>

                    {/* Age - Floating Label */}
                    <div className="relative w-full">
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Age"
                        className="peer w-full border border-[#D0BFAF] rounded-sm bg-[#F6EFE4] text-[#1E1E1E] px-3 pt-4 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-[#5B3923]"
                      />
                      <label
                        htmlFor="age"
                        className="absolute left-3 -top-2.5 bg-[#F6EFE4] px-1 text-[#B89C87] text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#B89C87] peer-focus:-top-2.5 peer-focus:text-xs"
                      >
                        Age
                      </label>
                    </div>

                    {/* Save and Cancel Buttons */}
                    <div className="flex gap-4 w-1/2">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="border border-[#5B3923] text-[#5B3923] px-4 py-2 rounded-sm text-sm flex-1 hover:bg-[#5B3923] hover:text-[#F6EFE4] transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5B3923] text-[#F6EFE4] px-4 py-2 rounded-sm text-sm flex-1 hover:opacity-90 transition"
                      >
                        Save Details
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}


             {/* WALLET SECTION */}
            {activeSection === "wallet" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] px-[20px] md:px-[88px] lg:px-[88px] py-[19px] mt-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-[16px] text-[#1E1E1E]">
                    My Wallet
                  </h3>
                  <button
                    onClick={() => setAddBalanceModal(true)}
                    className="bg-[#5B3923] text-[#F6EFE4] px-4 py-2 rounded-sm text-sm hover:opacity-90 transition"
                  >
                    Add Balance
                  </button>
                </div>

                {walletLoading ? (
                  <div className="text-center py-8">
                    <div className="text-[#5B3923]">Loading wallet...</div>
                  </div>
                ) : walletData ? (
                  <>
                    {/* Wallet Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="border border-[#D0BFAF] rounded-sm p-4 bg-[#F6EFE4]">
                        <div className="text-[#7A6F63] text-sm mb-1">Total Balance</div>
                        <div className="text-2xl font-bold text-[#5B3923]">
                          ₹{walletData.balance?.toFixed(2) || "0.00"}
                        </div>
                      </div>
                      <div className="border border-[#D0BFAF] rounded-sm p-4 bg-[#F6EFE4]">
                        <div className="text-[#7A6F63] text-sm mb-1">Pending Cash</div>
                        <div className="text-2xl font-bold text-[#5B3923]">
                          ₹{walletData.cashPending?.toFixed(2) || "0.00"}
                        </div>
                      </div>
                      <div className="border border-[#D0BFAF] rounded-sm p-4 bg-[#F6EFE4]">
                        <div className="text-[#7A6F63] text-sm mb-1">Available Balance</div>
                        <div className="text-2xl font-bold text-[#5B3923]">
                          ₹{(walletData.balance - walletData.cashPending)?.toFixed(2) || "0.00"}
                        </div>
                      </div>
                    </div>

                    {/* Transaction History */}
                    <div>
                      <h4 className="font-semibold text-[14px] text-[#1E1E1E] mb-4 border-b border-[#D0BFAF] pb-2">
                        Transaction History
                      </h4>
                      
                      {walletData.transactions && walletData.transactions.length > 0 ? (
                        <div className="space-y-3">
                          {walletData.transactions.map((transaction, index) => (
                            <div 
                              key={index} 
                              className="border border-[#D0BFAF] rounded-sm p-4 bg-[#F6EFE4]"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      transaction.type === 'credit' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                      {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                                    </span>
                                    <span className="text-sm text-[#7A6F63]">
                                      {transaction.method || 'N/A'}
                                    </span>
                                  </div>
                                  <div className="text-[#1E1E1E] font-medium text-sm">
                                    {transaction.description || 'Transaction'}
                                  </div>
                                  {transaction.relatedUser && (
                                    <div className="text-xs text-[#7A6F63] mt-1">
                                      Related User: {transaction.relatedUser}
                                    </div>
                                  )}
                                </div>
                                <div className="text-right">
                                  <div className={`text-lg font-bold ${
                                    transaction.type === 'credit' 
                                      ? 'text-green-600' 
                                      : 'text-red-600'
                                  }`}>
                                    {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount?.toFixed(2)}
                                  </div>
                                  <div className="text-xs text-[#7A6F63] mt-1">
                                    {new Date(transaction.createdAt).toLocaleDateString('en-IN', {
                                      day: '2-digit',
                                      month: 'short',
                                      year: 'numeric'
                                    })} at {new Date(transaction.createdAt).toLocaleTimeString('en-IN', {
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-[#7A6F63]">
                          No transactions yet
                        </div>
                      )}
                    </div>

                    {/* Wallet Information */}
                    <div className="mt-8 pt-6 border-t border-[#D0BFAF]">
                      <h4 className="font-semibold text-[14px] text-[#1E1E1E] mb-4">
                        Wallet Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#7A6F63]">Wallet ID:</span>
                          <span className="text-[#1E1E1E] font-medium">{walletData._id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7A6F63]">Owner ID:</span>
                          <span className="text-[#1E1E1E] font-medium">{walletData.owner}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7A6F63]">Created:</span>
                          <span className="text-[#1E1E1E] font-medium">
                            {new Date(walletData.createdAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7A6F63]">Last Updated:</span>
                          <span className="text-[#1E1E1E] font-medium">
                            {new Date(walletData.updatedAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-[#7A6F63]">
                    No wallet data found
                  </div>
                )}
              </div>
            )}

            {/* Add Balance Modal */}
            {addBalanceModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="bg-[#F6EFE4] w-[90%] md:w-[500px] p-8 mt-10 rounded-md relative border border-[#D0BFAF]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[16px] text-[#1E1E1E]">
                      Add Balance to Wallet
                    </h3>
                    <button
                      onClick={() => {
                        setAddBalanceModal(false);
                        setAddAmount("");
                        setAddDescription("Customer added balance");
                      }}
                      className="text-[#7A6F63] hover:text-[#1E1E1E]"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleAddBalance} className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#1E1E1E] mb-2">
                        Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={addAmount}
                        onChange={(e) => setAddAmount(e.target.value)}
                        className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm text-[#1E1E1E]"
                        placeholder="Enter amount"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#1E1E1E] mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        value={addDescription}
                        onChange={(e) => setAddDescription(e.target.value)}
                        className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm text-[#1E1E1E]"
                        placeholder="Enter description"
                      />
                    </div>

                    <div className="flex gap-2 mt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setAddBalanceModal(false);
                          setAddAmount("");
                          setAddDescription("Customer added balance");
                        }}
                        className="border border-[#5B3923] text-[#5B3923] px-6 py-2 rounded-sm flex-1 hover:bg-[#5B3923] hover:text-[#F6EFE4] transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5B3923] text-[#F6EFE4] px-6 py-2 rounded-sm flex-1 hover:opacity-90 transition"
                      >
                        Add Balance
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Terms Of Use Section */}
            {activeSection === "terms" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
                  Terms Of Use
                </h3>
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
                    <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Privacy Center Section */}
            {activeSection === "privacy" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <h3 className="font-semibold text-[16px] text-[#1E1E1E] pb-2">
                  Privacy Center
                </h3>
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <h4 className=" text-[15px] mb-1">Finibus Bonorum</h4>
                    <p className="text-[#7A6F63] text-sm leading-relaxed mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ADDRESS SECTION */}
            {activeSection === "addresses" && (
              <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                <div>
                  <h3 className="font-semibold text-[16px] border-b border-[#D0BFAF] pb-2">
                    Default Address
                  </h3>
                  <div className="mt-4 text-sm text-[#1E1E1E] flex justify-between">
                    <div>
                      <p className="font-semibold">{profileData?.name || "N/A"}</p>
                      <p>Plot No 97</p>
                      <p>Jagatpura</p>
                      <p>Jaipur - 303901</p>
                      <p>Rajasthan</p>
                      <p>Mobile: {profileData?.phone || "N/A"}</p>
                    </div>

                  </div>
                  <div className="flex justify-around gap-3 mt-4">
                    <button
                      className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm"
                      onClick={() => setIsAddressModalOpen(true)}
                    >
                      Edit
                    </button>
                    <button className="bg-[#5B3923] w-full text-[#F6EFE4] px-6 py-2 rounded-sm text-sm">
                      Remove
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm border-t border-[#D0BFAF] pt-4">
                    Other Addresses
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="border border-[#D0BFAF] p-4 rounded-sm text-sm text-[#1E1E1E]"
                      >
                        <div className="flex justify-between mb-2">
                          <p className="font-semibold">{profileData?.name || "N/A"}</p>
                          <span className="text-[10px] px-2 py-0.5 bg-[#E9E0D2] rounded-full">
                            Home
                          </span>
                        </div>
                        <p>Plot No 97</p>
                        <p>Jagatpura</p>
                        <p>Jaipur - 303901</p>
                        <p>Rajasthan</p>
                        <p>Mobile: {profileData?.phone || "N/A"}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Address Edit Modal */}
            {isAddressModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="bg-[#F6EFE4] w-[90%] md:w-[600px] p-8 mt-10 rounded-md relative border border-[#D0BFAF]">
                  <h3 className="font-semibold text-[#1E1E1E] mb-4 border-b border-[#D0BFAF] pb-2">
                    Edit Address
                  </h3>

                  <form className="space-y-4 text-sm text-[#1E1E1E]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Name*</label>
                        <input
                          defaultValue={profileData?.name || ""}
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>Mobile*</label>
                        <input
                          defaultValue={profileData?.phone || ""}
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Pincode*</label>
                        <input
                          defaultValue="395007"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>State*</label>
                        <input
                          defaultValue="Rajasthan"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label>Address (House Number, Street, Area)*</label>
                      <textarea
                        rows="2"
                        defaultValue="Plot No 97, Jagatpura, Jaipur"
                        className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Locality/Town*</label>
                        <input
                          defaultValue="Mandal"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                      <div>
                        <label>City/District*</label>
                        <input
                          defaultValue="Bhilwara"
                          className="w-full border border-[#D0BFAF] bg-[#F6EFE4] px-3 py-2 rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="addressType" defaultChecked /> Home
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="addressType" /> Office
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <label>Make this as my default address</label>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <button
                        type="button"
                        onClick={() => setIsAddressModalOpen(false)}
                        className="border border-[#5B3923] px-6 py-2 rounded-sm w-full"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5B3923] text-[#F6EFE4] px-6 py-2 rounded-sm w-full"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* HISTORY SECTION */}
            {/* HISTORY SECTION (Updated to use fetched data) */}
              {activeSection === "history" && (
                <div className="border border-[#D0BFAF] bg-[#F6EFE4] p-8 py-[19px] mt-8">
                  {historyLoading && <div className="text-center text-[#7A6F63]">Loading booking history...</div>}
                  {historyError && <div className="text-center text-red-600">Error: {historyError}</div>}
                  
                  {!historyLoading && !historyError && (
                      <>
                          {/* UPCOMING BOOKINGS */}
                          <div>
                              <span className="font-semibold text-[20px] border-b border-black ">
                                  Upcoming Bookings ({upcomingBookings.length})
                              </span>
                              
                              {/* UPCOMING BOOKINGS DISPLAY */}
                              {upcomingBookings.length === 0 ? (
                                  <p className="mt-3 text-[#7A6F63] text-sm">You have no upcoming bookings.</p>
                                ) : (
                                    upcomingBookings.map((booking) => (
                                        <div
                                            key={booking._id}
                                            className="border border-[#D0BFAF] px-6 py-4 mt-3 mb-4 bg-white shadow-sm" // Added bg-white for contrast
                                        >
                                            <div className="flex justify-between items-start text-sm mb-2">
                                                {/* LEFT COLUMN - Primary Details */}
                                                <div>
                                                    {/* Salon Name or Home Service */}
                                                    <p className="font-bold text-lg text-[#5F3F31]">
                                                        {getBookingLocation(booking)}
                                                    </p>
                                                    
                                                    {/* Services */}
                                                    <p className="text-[#1E1E1E] text-base mt-1">
                                                        Services: {getServiceNames(booking.services)}
                                                    </p>

                                                    {/* Booking Type and Date */}
                                                    <p className="text-[#7A6F63] text-xs mt-1">
                                                        Type: {booking.bookingType || 'N/A'} • Booked On: {new Date(booking.createdAt).toLocaleDateString()}
                                                    </p>

                                                    {/* Status Display */}
                                                    <p className="text-sm mt-2 font-semibold">
                                                        Status: {getStatusDisplay(booking.status)}
                                                    </p>
                                                </div>

                                                {/* RIGHT COLUMN - Financials */}
                                                <div className="text-right">
                                                    <p className="text-xl font-extrabold text-[#5F3F31]">
                                                        ₹{booking.totalAmount?.toFixed(2) || 'N/A'}
                                                    </p>
                                                    <p className="text-xs text-[#7A6F63] mt-1">
                                                        Payment: {booking.paymentType?.toUpperCase() || 'N/A'} ({booking.paymentStatus?.toUpperCase() || 'N/A'})
                                                    </p>
                                                </div>
                                            </div>

                                            {/* ADDITIONAL DETAILS (e.g., Address for Home Booking) */}
                                            {booking.isAtHome && booking.address && (
                                              <div className="mt-3 pt-3 border-t border-[#E9E3D9]">
                                                  <p className="text-[#7A6F63] text-xs">
                                                      Service Address: {booking.address.line1}, {booking.address.city}, {booking.address.pincode}
                                                  </p>
                                              </div>
                                            )}
                                        </div>
                                    ))
                                )}
                          </div>

                          {/* HISTORY BOOKINGS */}
                          <div className="mt-6">
                              <span className="font-semibold text-[20px] border-b border-black">
                                  History ({historyBookings.length})
                              </span>
                              
                              {historyBookings.length === 0 ? (
                                  <p className="mt-3 text-[#7A6F63] text-sm">No past bookings found.</p>
                              ) : (
                                  historyBookings.map((booking) => (
                                      <div
                                          key={booking._id}
                                          className="flex justify-between items-center border border-[#D0BFAF] px-6 py-3 mt-3 text-sm text-[#1E1E1E]"
                                      >
                                          <div>
                                              <p className="font-semibold">
                                                  {getServiceNames(booking.services)}
                                              </p>
                                              <p className="text-[#7A6F63]">
                                                  {getStatusDisplay(booking.status)} • {new Date(booking.createdAt).toLocaleDateString()}
                                              </p>
                                          </div>
                                          <p>₹{booking.totalAmount?.toFixed(2) || 'N/A'}</p>
                                      </div>
                                  ))
                              )}
                          </div>
                      </>
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}


