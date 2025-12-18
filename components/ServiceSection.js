// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from "react";

// export default function ServiceSection({
//   title = "Services at home",
//   tabContent,
//   viewMoreUrl = "/services"
// }) {
//   const tabs = Object.keys(tabContent);
//   const [activeTab, setActiveTab] = useState(tabs[0] || "");

//   return (
//     <section className='my-12'>
//       <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">{title}</h3>
//       <div className='flex justify-between items-center'>
//         <nav className="flex flex-wrap gap-5 items-center text-lg my-4 ">
//           {tabs.map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={
//                 activeTab === tab
//                   ? "bg-[#536764] text-white py-1 px-3 rounded-[10px] transition cursor-pointer text-[18px]"
//                   : "bg-transparent text-black p-0 py-1 pr-3 rounded-full transition text-[18px]"
//               }
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//         <Link href={viewMoreUrl} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
//       </div>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
//         {tabContent[activeTab].map((service, idx) => (
//           <Link  href={service.link || "/"} key={idx}>
//             <div className="rounded-2xl bg-gray-200 shadow relative overflow-hidden h-50">
//               <Image fill src={service.imgUrl} alt={service.title} className="w-full h-100 object-cover rounded-2xl" />
//               <span className="absolute bottom-3 left-3 bg-opacity-60 text-white py-1 px-3 rounded">
//                 {service.duration}
//               </span>
//             </div>
//             <div className="pt-3 pb-2 px-3 pl-0 text-[#607076] text-xl font-bold">{service.title}</div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



// uper static UI hai 




"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import axiosInstance from '../src/app/axios/axiosinstance';

import slugify from "slugify";


export default function ServiceSection({
  title = "Services at home",
  serviceType = "home", // "home" or "salon"
  viewMoreUrl = "/allservices"
}) {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all categories from API
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // 1. Fetch all categories
        const categoriesResponse = await axiosInstance.get('/categories');

        if (!categoriesResponse.data.success) {
          throw new Error("Failed to fetch categories");
        }

        const allCategories = categoriesResponse?.data?.categories;
        setCategories(allCategories);

        // Set first category as active tab if available
        if (allCategories?.length > 0) {
          setActiveTab(allCategories?.[0]?._id);
        }

        // 2. Fetch services for all categories
        await fetchServicesForAllCategories(allCategories);

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load services. Please try again.");
        handleFallbackData();
      } finally {
        setLoading(false);
      }
    };

    const fetchServicesForAllCategories = async (categoriesData) => {
      try {
        const servicesPromises = categoriesData?.map(async (category) => {
          try {
            const servicesResponse = await axiosInstance.get(`/services/category/${category?._id}`);

            if (servicesResponse.data.success) {
              // Filter services based on serviceType (home or salon)
              const filteredServices = servicesResponse.data?.services?.filter(service => {
                if (serviceType === "home") {
                  return service?.atHome === true; // At home services
                } else {
                  return service?.atHome === false; // At salon services
                }
              }).slice(0, 4); // Take only first 4 services per category for homepage

              // Transform services to match your UI structure
              return {
                categoryId: category?._id,
                services: filteredServices?.map(service => ({
                  id: service?._id,
                  title: service?.name,
                  imgUrl: service?.image || getDefaultServiceImage(service?.name),
                  duration: `${service?.duration || 30}min`,
                  link: `/services/${service?.slug || service?._id}`,
                  price: service?.price,
                  discountPrice: service?.discountPrice,
                  description: service?.description,
                  gender: service?.gender
                }))
              };
            }
            return { categoryId: category?._id, services: [] };
          } catch (serviceErr) {
            console.error(`Error fetching services for category ${category?._id}:`, serviceErr);
            return { categoryId: category?._id, services: [] };
          }
        });

        // Wait for all service fetches to complete
        const servicesResults = await Promise.all(servicesPromises);

        // Convert array to object for easier access
        const servicesData = {};
        servicesResults.forEach(result => {
          servicesData[result?.categoryId] = result?.services;
        });

        setServices(servicesData);

      } catch (err) {
        console.error("Error in batch services fetch:", err);
        // If batch fetch fails, try fetching one by one
        fetchServicesSequentially(categoriesData);
      }
    };

    const fetchServicesSequentially = async (categoriesData) => {
      const servicesData = {};

      for (const category of categoriesData) {
        try {
          const servicesResponse = await axiosInstance.get(`/services/category/${category?._id}`);

          if (servicesResponse?.data?.success) {
            const filteredServices = servicesResponse.data?.services?.filter(service => {
              if (serviceType === "home") {
                return service?.atHome === true;
              } else {
                return service?.atHome === false;
              }
            }).slice(0, 4);

            servicesData[category?._id] = filteredServices?.map(service => ({
              id: service?._id,
              title: service?.name,
              imgUrl: service?.image || getDefaultServiceImage(service?.name),
              duration: `${service?.duration || 30}min`,
              link: `/services/${service?.slug || service?._id}`,
              price: service?.price,
              discountPrice: service?.discountPrice,
              description: service?.description,
              gender: service?.gender
            }));
          } else {
            servicesData[category?._id] = [];
          }
        } catch (err) {
          console.error(`Error fetching services for ${category?.name}:`, err);
          servicesData[category?._id] = [];
        }
      }

      setServices(servicesData);
    };

    const handleFallbackData = () => {
      // Use your static fallback categories
      const fallbackCategories = [
        { _id: "threading", name: "Threading" },
        { _id: "manicure-pedicure", name: "Manicure & Pedicure" },
        { _id: "facial", name: "Facial" },
        { _id: "waxing", name: "Waxing" },
        { _id: "massage", name: "Massage" },
        { _id: "hair-spa", name: "Hair spa" }
      ];

      setCategories(fallbackCategories);
      if (fallbackCategories?.length > 0) {
        setActiveTab(fallbackCategories?.[0]?._id);
      }

      // Use fallback services based on serviceType
      const fallbackServices = serviceType === "home"
        ? getHomeFallbackServices()
        : getSalonFallbackServices();
      setServices(fallbackServices);
    };

    fetchAllData();
  }, [serviceType]);

  // Helper function for default service images
  const getDefaultServiceImage = (serviceName) => {
    const name = serviceName?.toLowerCase();
    if (name.includes("thread") || name.includes("eyebrow")) {
      return "/Home/threading1.png";
    } else if (name.includes("manicure") || name.includes("nail")) {
      return "/Home/manicure1.png";
    } else if (name.includes("pedicure") || name.includes("foot")) {
      return "/Home/pedicure1.png";
    } else if (name.includes("facial")) {
      return "/Home/hydra-facial.png";
    } else if (name.includes("massage")) {
      return "/Home/pedicure1.png";
    } else if (name.includes("hair") || name.includes("spa")) {
      return "/Home/manicure1.png";
    } else if (name.includes("wax")) {
      return "/Home/hydra-facial.png";
    } else {
      return "/Home/threading1.png";
    }
  };

  // Get home fallback services (your original homeTabContent)
  const getHomeFallbackServices = () => {
    return {
      "threading": [
        {
          id: "1",
          title: "Threading",
          imgUrl: "/Home/threading1.png",
          duration: "0.20hr",
          link: "/services/threading",
          price: 100,
          discountPrice: 80,
        },
        {
          id: "2",
          title: "Ayurvedic Facial",
          imgUrl: "/Home/manicure1.png",
          duration: "1.30hr",
          link: "/services/ayurvedic-facial",
          price: 1200,
          discountPrice: 999,
        },
        {
          id: "3",
          title: "Signature Facial",
          imgUrl: "/Home/pedicure1.png",
          duration: "1.30hr",
          link: "/services/signature-facial",
          price: 1500,
        },
        {
          id: "4",
          title: "Hydra Facial",
          imgUrl: "/Home/hydra-facial.png",
          duration: "1.30hr",
          link: "/services/hydra-facial",
          price: 2000,
          discountPrice: 1799,
        },
      ],
      "manicure-pedicure": [
        {
          id: "5",
          title: "Manicure",
          imgUrl: "/Home/manicure1.png",
          duration: "0.45hr",
          link: "/services/manicure",
          price: 300,
          discountPrice: 250,
        },
        {
          id: "6",
          title: "Pedicure",
          imgUrl: "/Home/pedicure1.png",
          duration: "0.45hr",
          link: "/services/pedicure",
          price: 400,
        },
      ],
      "facial": [
        {
          id: "7",
          title: "Korean Facial",
          imgUrl: "/Home/threading1.png",
          duration: "1.30hr",
          link: "/services/korean-facial",
          price: 1800,
        },
      ],
      "waxing": [
        {
          id: "8",
          title: "Full Arms Waxing",
          imgUrl: "/Home/hydra-facial.png",
          duration: "0.30hr",
          link: "/services/full-arms-waxing",
          price: 500,
          discountPrice: 399,
        },
      ],
      "massage": [
        {
          id: "9",
          title: "Head Massage",
          imgUrl: "/Home/pedicure1.png",
          duration: "0.45hr",
          link: "/services/head-massage",
          price: 600,
        },
      ],
      "hair-spa": [
        {
          id: "10",
          title: "Hair Spa",
          imgUrl: "/Home/manicure1.png",
          duration: "1.00hr",
          link: "/services/hair-spa",
          price: 800,
          discountPrice: 699,
        },
      ],
    };
  };

  // Get salon fallback services (your original salonTabContent)
  const getSalonFallbackServices = () => {
    return {
      "threading": [
        {
          id: "11",
          title: "Salon Threading",
          imgUrl: "/Home/threading1.png",
          duration: "0.20hr",
          link: "/services/salon-threading",
          price: 80,
        },
        {
          id: "12",
          title: "Salon Ayurvedic Facial",
          imgUrl: "/Home/manicure1.png",
          duration: "1.30hr",
          link: "/services/salon-ayurvedic-facial",
          price: 1100,
        },
        {
          id: "13",
          title: "Salon Signature Facial",
          imgUrl: "/Home/pedicure1.png",
          duration: "1.30hr",
          link: "/services/salon-signature-facial",
          price: 1400,
          discountPrice: 1199,
        },
        {
          id: "14",
          title: "Salon Hydra Facial",
          imgUrl: "/Home/hydra-facial.png",
          duration: "1.30hr",
          link: "/services/salon-hydra-facial",
          price: 1900,
        },
      ],
      "manicure-pedicure": [
        {
          id: "15",
          title: "Salon Manicure",
          imgUrl: "/Home/manicure1.png",
          duration: "0.45hr",
          link: "/services/salon-manicure",
          price: 250,
        },
        {
          id: "16",
          title: "Salon Pedicure",
          imgUrl: "/Home/pedicure1.png",
          duration: "0.45hr",
          link: "/services/salon-pedicure",
          price: 350,
          discountPrice: 299,
        },
      ],
      "facial": [
        {
          id: "17",
          title: "Salon Korean Facial",
          imgUrl: "/Home/threading1.png",
          duration: "1.30hr",
          link: "/services/korean-facial",
          price: 1700,
        },
      ],
      "waxing": [
        {
          id: "18",
          title: "Salon Full Arms Waxing",
          imgUrl: "/Home/hydra-facial.png",
          duration: "0.30hr",
          link: "/services/full-arms-waxing",
          price: 450,
        },
      ],
      "massage": [
        {
          id: "19",
          title: "Salon Head Massage",
          imgUrl: "/Home/manicure1.png",
          duration: "0.45hr",
          link: "/services/head-massage",
          price: 550,
          discountPrice: 499,
        },
      ],
      "hair-spa": [
        {
          id: "20",
          title: "Salon Hair Spa",
          imgUrl: "/Home/pedicure1.png",
          duration: "1.00hr",
          link: "/services/hair-spa",
          price: 750,
        },
      ],
    };
  };

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setActiveTab(categoryId);
  };

  // Loading state
  if (loading) {
    return (
      <section className='my-12'>
        <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">{title}</h3>
        <div className='flex justify-between items-center'>
          <nav className="flex flex-wrap gap-5 items-center text-lg my-4">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="h-8 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
            ))}
          </nav>
          <div className="h-10 bg-gray-300 rounded-[10px] w-24 animate-pulse"></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="animate-pulse">
              <div className="rounded-2xl bg-gray-300 shadow relative overflow-hidden h-50"></div>
              <div className="pt-3 pb-2 px-3 pl-0">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Error state
  if (error && categories?.length === 0) {
    return (
      <section className='my-12'>
        <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">{title}</h3>
        <div className="text-center text-red-600 py-8">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-[#617772] text-white py-2 px-4 rounded-lg"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='my-12' id="services-section">
      <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">{title}</h3>
      <div className='flex justify-between items-center'>
        <nav className="flex flex-wrap gap-5 items-center text-lg my-4 ">
          {categories?.map(category => (
            <button
              key={category?._id}
              onClick={() => handleCategoryClick(category?._id)}
              className={
                activeTab === category?._id
                  ? "bg-[#536764] text-white py-1 px-3 rounded-[10px] transition cursor-pointer text-[18px]"
                  : "bg-transparent text-black p-0 py-1 pr-3 rounded-full transition text-[18px] hover:text-[#536764] hover:font-medium cursor-pointer"
              }
            >
              {category?.name}
            </button>
          ))}
        </nav>
        <Link
          href={viewMoreUrl}
          className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px] hover:bg-[#536764] transition-colors'
        >
          View more
        </Link>
      </div>

      {services[activeTab] && services[activeTab]?.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {services?.[activeTab]?.map((service, idx) => (
            // <Link href={service?.link || "#"} key={service.id || idx}>
            <Link
              href={`/salonList?service=${slugify(service?.title || "", {
                lower: true,
                strict: true, // special chars remove
                trim: true
              })}`}
              key={service.id || idx}
            >
              <div className="rounded-2xl bg-gray-200 shadow relative overflow-hidden h-50 group">
                <Image
                  src={service.imgUrl}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <span className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white py-1 px-3 rounded text-sm">
                  {service.duration}
                </span>
                {service.discountPrice && service.price > service.discountPrice && (
                  <span className="absolute top-3 right-3 bg-[#FF3636] text-white py-1 px-2 rounded text-xs font-bold">
                    Save ₹{service.price - service.discountPrice}
                  </span>
                )}
              </div>
              <div className="pt-3 pb-2 px-3 pl-0 text-[#607076] text-xl font-bold">
                {service.title}
                {service.discountPrice ? (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-[#536764]">₹{service.discountPrice}</span>
                    {service.price > service.discountPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{service.price}</span>
                    )}
                  </div>
                ) : service.price && (
                  <div className="text-lg font-bold text-[#536764] mt-1">₹{service.price}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No {serviceType === "home" ? "at home" : "at salon"} services available for this category.
        </div>
      )}
    </section>
  );
}