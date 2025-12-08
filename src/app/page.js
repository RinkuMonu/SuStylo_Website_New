// import { GoSearch } from "react-icons/go";
// import Homeservices from "../../components/Homeservices";
// import ServiceSection from "../../components/ServiceSection";
// import HomeFreelancer from "../../components/HomeFreelancer";
// import NearBySalonSection from "../../components/NearBySalonSection";
// import PopularSalon from "../../components/PopularSalon";
// import DiscountSlider from "../../components/DiscountSlider";
// import Testimonial from "../../components/Testimonial";
// import HomeAbout from "../../components/HomeAbout";


// export default function Home() {
//   const homeTabContent = {
//     Threading: [
//       {
//         title: "Threading",
//         imgUrl: "/Home/threading1.png",
//         duration: "0.20hr",
//         link: "/services/threading",
//       },
//       {
//         title: "Ayurvedic Facial",
//         imgUrl: "/Home/manicure1.png",
//         duration: "1.30hr",
//         link: "/services/ayurvedic-facial",
//       },
//       {
//         title: "Signature Facial",
//         imgUrl: "/Home/pedicure1.png",
//         duration: "1.30hr",
//         link: "/services/signature-facial",
//       },
//       {
//         title: "Hydra Facial",
//         imgUrl: "/Home/hydra-facial.png",
//         duration: "1.30hr",
//         link: "/services/hydra-facial",
//       },
//     ],
//     "Manicure & Pedicure": [
//       { title: "Manicure", 
//         imgUrl: "/Home/manicure1.png", 
//         duration: "0.45hr" ,
//         link: "/services/manicure",
//       },
//       { title: "Pedicure", 
//         imgUrl: "/Home/pedicure1.png", 
//         duration: "0.45hr" ,
//         link: "/services/pedicure",
//       },
//     ],
//     Facial: [
//       {
//         title: "Korean Facial",
//         imgUrl: "/Home/threading1.png",
//         duration: "1.30hr",
//         link: "/services/korean-facial",
//       },
//     ],
//     Waxing: [
//       {
//         title: "Full Arms Waxing",
//         imgUrl: "/Home/hydra-facial.png",
//         duration: "0.30hr",
//         link: "/services/full-arms-waxing",
//       },
//     ],
//     Massage: [
//       {
//         title: "Head Massage",
//         imgUrl: "/Home/pedicure1.png",
//         duration: "0.45hr",
//         link: "/services/head-massage",
//       },
//     ],
//     "Hair spa": [
//       { title: "Hair Spa", 
//         imgUrl: "/Home/manicure1.png", 
//         duration: "1.00hr" ,
//         link: "/services/hair-spa",
//       },
//     ],
//   };

//   const salonTabContent = {
//     Threading: [
//       {
//         title: "Salon Threading",
//         imgUrl: "/Home/threading1.png",
//         duration: "0.20hr",
//         link: "/services/salon-threading",
//       },
//       {
//         title: "Salon Ayurvedic Facial",
//         imgUrl: "/Home/manicure1.png",
//         duration: "1.30hr",
//         link: "/services/salon-ayurvedic-facial",
//       },
//       {
//         title: "Salon Signature Facial",
//         imgUrl: "/Home/pedicure1.png",
//         duration: "1.30hr",
//         link: "/services/salon-signautre-facial",
//       },
//       {
//         title: "Salon Hydra Facial",
//         imgUrl: "/Home/hydra-facial.png",
//         duration: "1.30hr",
//         link: "/services/salon-hydra-facial",
//       },
//     ],
//     "Manicure & Pedicure": [
//       {
//         title: "Salon Manicure",
//         imgUrl: "/Home/manicure1.png",
//         duration: "0.45hr",
//         link: "/services/salon-manicure",
//       },
//       {
//         title: "Salon Pedicure",
//         imgUrl: "/Home/pedicure1.png",
//         duration: "0.45hr",
//         link: "/services/salon-pedicure",
//       },
//     ],
//     Facial: [
//       {
//         title: "Salon Korean Facial",
//         imgUrl: "/Home/threading1.png",
//         duration: "1.30hr",
//         link: "/services/korean-facial",
//       },
//     ],
//     Waxing: [
//       {
//         title: "Salon Full Arms Waxing",
//         imgUrl: "/Home/hydra-facial.png",
//         duration: "0.30hr",
//         link: "/services/korean-facial",
//       },
//     ],
//     Massage: [
//       {
//         title: "Salon Head Massage",
//         imgUrl: "/Home/manicure1.png",
//         duration: "0.45hr",
//         link: "/services/korean-facial",
//       },
//     ],
//     "Hair spa": [
//       {
//         title: "Salon Hair Spa",
//         imgUrl: "/Home/pedicure1.png",
//         duration: "1.00hr",
//         link: "/services/korean-facial",
//       },
//     ],
//   };
//   return (
//     <>
//       <section
//         className="h-[87vh] relative bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(./Home/HomeBanner.png)" }}
//       >
//         <div className="flex flex-col items-center justify-center relative h-full w-full">
//           <h1 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-tight  drop-shadow-lg">
//             Glow <br /> Beyond Limits
//           </h1>
//           <div className="bg-[#CBAA87] p-2 sm:p-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 w-[80%] lg:w-full max-w-md sm:max-w-xl shadow-lg absolute bottom-4 sm:bottom-6">
//             <div className="relative flex-1">
//               <input
//                 className="bg-white text-[#8B8B8B] p-2 sm:p-4 rounded-xl w-full text-base sm:text-xl pl-8 sm:pl-10 focus:outline-none"
//                 type="text"
//                 placeholder="Search"
//               />
//               <GoSearch
//                 className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 text-[#8B8B8B]"
//                 size={18}
//               />
//             </div>
//             <button className="bg-white p-2 sm:p-4 rounded-xl text-base sm:text-xl font-medium text-[#8B8B8B] hover:bg-[#e9e3d9] transition">
//               Search
//             </button>
//           </div>
//         </div>
//       </section>
//       <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
//         <Homeservices />
//         <ServiceSection
//           title="SERVICES AT HOME"
//           tabContent={homeTabContent}
//           viewMoreUrl="/services"
//         />
//         <ServiceSection
//           title="SERVICES AT SALON"
//           tabContent={salonTabContent}
//           viewMoreUrl="/services"
//         />
//         <HomeFreelancer />  
//         <NearBySalonSection />
//       </div>
//       <PopularSalon />
//       <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
//         <DiscountSlider />
//         <Testimonial />
//         <HomeAbout />
//       </div>

//     </>
//   );
// }

//======================================================================



"use client";
import { GoSearch } from "react-icons/go";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Homeservices from "../../components/Homeservices";
import ServiceSection from "../../components/ServiceSection";
import HomeFreelancer from "../../components/HomeFreelancer";
import NearBySalonSection from "../../components/NearBySalonSection";
import PopularSalon from "../../components/PopularSalon";
import DiscountSlider from "../../components/DiscountSlider";
import Testimonial from "../../components/Testimonial";
import HomeAbout from "../../components/HomeAbout";
import axiosInstance from "../app/axios/axiosinstance";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      const response = await axiosInstance.get(`/search?query=${encodeURIComponent(searchQuery)}`);
      
      if (response.data.success) {
        setSearchResults(response.data.results);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle search result click
  const handleResultClick = (type, item) => {
    setShowResults(false);
    setSearchQuery("");
    
    if (type === 'service') {
      // Navigate to salon list with service filter
      const slug = item.name.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
      router.push(`/salonList?service=${encodeURIComponent(slug)}`);
    }
    else if (type === 'salon') {
      // Navigate to salon list with salon name filter
      router.push(`/salonList?name=${encodeURIComponent(item.slug)}`);
    }
    else if (type === 'freelancer') {
      // Navigate to freelancer list with freelancer name filter
      router.push(`/freelancerList?name=${encodeURIComponent(item.slug)}`);
    }
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showResults && !e.target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showResults]);

  const homeTabContent = {
    Threading: [
      {
        title: "Threading",
        imgUrl: "/Home/threading1.png",
        duration: "0.20hr",
        link: "/services/threading",
      },
      {
        title: "Ayurvedic Facial",
        imgUrl: "/Home/manicure1.png",
        duration: "1.30hr",
        link: "/services/ayurvedic-facial",
      },
      {
        title: "Signature Facial",
        imgUrl: "/Home/pedicure1.png",
        duration: "1.30hr",
        link: "/services/signature-facial",
      },
      {
        title: "Hydra Facial",
        imgUrl: "/Home/hydra-facial.png",
        duration: "1.30hr",
        link: "/services/hydra-facial",
      },
    ],
    "Manicure & Pedicure": [
      { title: "Manicure", 
        imgUrl: "/Home/manicure1.png", 
        duration: "0.45hr" ,
        link: "/services/manicure",
      },
      { title: "Pedicure", 
        imgUrl: "/Home/pedicure1.png", 
        duration: "0.45hr" ,
        link: "/services/pedicure",
      },
    ],
    Facial: [
      {
        title: "Korean Facial",
        imgUrl: "/Home/threading1.png",
        duration: "1.30hr",
        link: "/services/korean-facial",
      },
    ],
    Waxing: [
      {
        title: "Full Arms Waxing",
        imgUrl: "/Home/hydra-facial.png",
        duration: "0.30hr",
        link: "/services/full-arms-waxing",
      },
    ],
    Massage: [
      {
        title: "Head Massage",
        imgUrl: "/Home/pedicure1.png",
        duration: "0.45hr",
        link: "/services/head-massage",
      },
    ],
    "Hair spa": [
      { title: "Hair Spa", 
        imgUrl: "/Home/manicure1.png", 
        duration: "1.00hr" ,
        link: "/services/hair-spa",
      },
    ],
  };

  const salonTabContent = {
    Threading: [
      {
        title: "Salon Threading",
        imgUrl: "/Home/threading1.png",
        duration: "0.20hr",
        link: "/services/salon-threading",
      },
      {
        title: "Salon Ayurvedic Facial",
        imgUrl: "/Home/manicure1.png",
        duration: "1.30hr",
        link: "/services/salon-ayurvedic-facial",
      },
      {
        title: "Salon Signature Facial",
        imgUrl: "/Home/pedicure1.png",
        duration: "1.30hr",
        link: "/services/salon-signautre-facial",
      },
      {
        title: "Salon Hydra Facial",
        imgUrl: "/Home/hydra-facial.png",
        duration: "1.30hr",
        link: "/services/salon-hydra-facial",
      },
    ],
    "Manicure & Pedicure": [
      {
        title: "Salon Manicure",
        imgUrl: "/Home/manicure1.png",
        duration: "0.45hr",
        link: "/services/salon-manicure",
      },
      {
        title: "Salon Pedicure",
        imgUrl: "/Home/pedicure1.png",
        duration: "0.45hr",
        link: "/services/salon-pedicure",
      },
    ],
    Facial: [
      {
        title: "Salon Korean Facial",
        imgUrl: "/Home/threading1.png",
        duration: "1.30hr",
        link: "/services/korean-facial",
      },
    ],
    Waxing: [
      {
        title: "Salon Full Arms Waxing",
        imgUrl: "/Home/hydra-facial.png",
        duration: "0.30hr",
        link: "/services/korean-facial",
      },
    ],
    Massage: [
      {
        title: "Salon Head Massage",
        imgUrl: "/Home/manicure1.png",
        duration: "0.45hr",
        link: "/services/korean-facial",
      },
    ],
    "Hair spa": [
      {
        title: "Salon Hair Spa",
        imgUrl: "/Home/pedicure1.png",
        duration: "1.00hr",
        link: "/services/korean-facial",
      },
    ],
  };

  return (
    <>
      <section
        className="h-[87vh] relative bg-no-repeat bg-cover bg-top pt-0 mt-0 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(./Home/HomeBanner.png)" }}
      >
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-tight  drop-shadow-lg">
            Glow <br /> Beyond Limits
          </h1>
          
          {/* Search Bar with Results Dropdown - FIXED POSITION */}
          <div className="search-container relative w-[80%] lg:w-full max-w-md sm:max-w-xl mt-auto mb-4 sm:mb-6">
            <div className="bg-[#CBAA87] p-2 sm:p-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg mt-10">
              <div className="relative flex-1">
                <input
                  className="bg-white text-[#8B8B8B] p-2 sm:p-4 rounded-xl w-full text-base sm:text-xl pl-8 sm:pl-10 focus:outline-none"
                  type="text"
                  placeholder="Search for services, salons, freelancers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults && setShowResults(true)}
                />
                <GoSearch
                  className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 text-[#8B8B8B]"
                  size={18}
                />
              </div>
              <button 
                onClick={handleSearch}
                disabled={loading}
                className="bg-white p-2 sm:p-4 rounded-xl text-base sm:text-xl font-medium text-[#8B8B8B] hover:bg-[#e9e3d9] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[400px] overflow-y-auto">
                {/* Services Section */}
                {searchResults.services && searchResults.services.length > 0 && (
                  <div className="p-3 border-b border-gray-100">
                    <h3 className="font-semibold text-[#617772] mb-2 px-2">Services</h3>
                    {searchResults.services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick('service', service)}
                        className="w-full text-left p-3 hover:bg-[#f2e7d7] rounded-lg flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#617772] flex items-center justify-center">
                          <span className="text-white text-sm">S</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-[#617772]">
                            {service.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Service • {service.price ? `₹${service.price}` : 'Price varies'}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Salons Section */}
                {searchResults.salons && searchResults.salons.length > 0 && (
                  <div className="p-3 border-b border-gray-100">
                    <h3 className="font-semibold text-[#617772] mb-2 px-2">Salons</h3>
                    {searchResults.salons.map((salon, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick('salon', salon)}
                        className="w-full text-left p-3 hover:bg-[#f2e7d7] rounded-lg flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#d9b896] flex items-center justify-center">
                          <span className="text-gray-800 text-sm">SL</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-[#617772]">
                            {salon.salonName}
                          </p>
                          <p className="text-sm text-gray-500">
                            Salon • {salon.address?.area || 'Location not specified'}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Freelancers Section */}
                {searchResults.freelancers && searchResults.freelancers.length > 0 && (
                  <div className="p-3">
                    <h3 className="font-semibold text-[#617772] mb-2 px-2">Freelancers</h3>
                    {searchResults.freelancers.map((freelancer, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick('freelancer', freelancer)}
                        className="w-full text-left p-3 hover:bg-[#f2e7d7] rounded-lg flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#CBAA87] flex items-center justify-center">
                          <span className="text-white text-sm">F</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-[#617772]">
                            {freelancer.fullName}
                          </p>
                          <p className="text-sm text-gray-500">
                            Freelancer • {freelancer.services?.[0]?.name || 'Services available'}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {(!searchResults.services || searchResults.services.length === 0) &&
                 (!searchResults.salons || searchResults.salons.length === 0) &&
                 (!searchResults.freelancers || searchResults.freelancers.length === 0) && (
                  <div className="p-4 text-center text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}

                {/* Close Button */}
                <div className="p-3 border-t border-gray-100">
                  <button
                    onClick={() => setShowResults(false)}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
                  >
                    Close results
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
        <Homeservices />
        <ServiceSection
          title="SERVICES AT HOME"
          tabContent={homeTabContent}
          viewMoreUrl="/services"
        />
        <ServiceSection
          title="SERVICES AT SALON"
          tabContent={salonTabContent}
          viewMoreUrl="/services"
        />
        <HomeFreelancer />  
        <NearBySalonSection />
      </div>
      <PopularSalon />
      <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
        <DiscountSlider />
        <Testimonial />
        <HomeAbout />
      </div>
    </>
  );
}