"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

// Make sure this path is correct for your project
import axiosInstance from '../src/app/axios/axiosinstance'; 
import slugify from "slugify";

// Define the expected structure for the services data
const formatService = (srv) => ({
  label: srv.name, 
  image: srv.image || '/Home/default-service.png', 
});

export default function Homeservices() {
  const router = useRouter();
  // 1. servicesData को useState से replace करें
  const [servicesData, setServicesData] = useState({
    women: [],
    man: [] 
  });
  
  const [loading, setLoading] = useState(true);

  const [tab, setTab] = useState('women');
  const getDefaultImage = (serviceName) => {
    const name = serviceName.toLowerCase();
    if (name.includes("colour") || name.includes("color")) {
      return "/Image/allservices/colouring.png";
    } else if (name.includes("thread")) {
      return "/Image/allservices/threading.png";
    } else if (name.includes("facial")) {
      return "/Image/allservices/facial.png";
    } else if (name.includes("pedicure")) {
      return "/Image/allservices/pedicure.png";
    } else if (name.includes("massage")) {
      return "/Image/allservices/massage.png";
    } else if (name.includes("wax")) {
      return "/Image/allservices/facial.png";
    } else {
      return "/Image/allservices/facial.png";
    }
  };
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true); 
      try {
        const response = await axiosInstance.get('/services');
        const services = response.data.services || []; 

        const menServices = services
          .filter(srv => srv.gender && srv.gender.toLowerCase() === 'male'); 
        const womenServices = services
          .filter(srv => srv.gender && srv.gender.toLowerCase() === 'female'); 
        

        setServicesData({
          man: menServices,
          women: womenServices,
        });
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchServices();
  }, []); 

  useEffect(() => {
    if (servicesData.women.length > 0 || servicesData.man.length > 0) {
      console.log("✅ New servicesData state after update:", servicesData);
    } else {
      console.log("Waiting for servicesData to be set...");
    }
  }, [servicesData]);
  const currentServices = servicesData[tab];

    const handleServiceClick = (service) => {
      // Store selected service in localStorage or pass as query params
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedService', service.name);
      }
  
  
      const original = service.name;                     // Men's facial
      const slug = slugify(original, { lower: true, strict: true });
  
      // Navigate to salon list page
      // router.push(`/salonlist?service=${encodeURIComponent(service.title)}`);
      router.push(`/salonlist?service=${slug}`);
    };
  return (
    <section className="mt-8 px-2 sm:px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <h3 className="text-[20px] md:text-[24px] font-bold uppercase underline decoration-[#717171] text-center sm:text-left">SERVICES</h3>
          <div className="flex gap-2 mt-2 sm:mt-0 ml-5">
            <button
              className={`px-4 sm:px-6 py-1 rounded-xl text-[16px] sm:text-[20px] font-semibold ${tab === 'women' ? 'bg-[#6E7C78] text-white' : 'bg-transparent text-[#6E7C78]'} transition`}
              onClick={() => setTab('women')}
            >
              For women
            </button>
            <button
              className={`px-3 sm:px-4 py-1 text-[14px] sm:text-[16px] rounded-xl font-semibold ${tab === 'man' ? 'bg-[#6E7C78] text-white' : 'text-[#717171]'} transition`}
              onClick={() => setTab('man')}
            >
              For man
            </button>
          </div>
        </div>
        <Link
          href="/allservices"
          className="text-[16px] sm:text-[20px] w-36 text-[#6E7C78] font-semibold underline-offset-4 hover:underline"
        >
          View all...
        </Link>
      </div>
   <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-20 sm:gap-5 place-items-center">
  
  {loading ? (
    <p className="col-span-full text-center text-gray-500">
      Loading services...
    </p>
  ) : currentServices.length > 0 ? (
    currentServices.slice(0, 6).map((srv, index) => (
      <div
        key={srv.id || index}
        onClick={() => handleServiceClick(srv)}
        className="
          relative flex items-center justify-center
          w-24 h-24
          sm:w-28 sm:h-28
          md:w-32 md:h-32
          lg:w-36 lg:h-36
          xl:w-44 xl:h-44
          rounded-xl overflow-hidden
          bg-[#f5f5f5] shadow-sm
          cursor-pointer transition
          hover:shadow-md
        "
      >
        <Image
          src={srv?.image || getDefaultImage(srv?.name)}
          alt={srv?.name}
          fill
          sizes="
            (max-width: 480px) 50vw,
            (max-width: 768px) 33vw,
            (max-width: 1024px) 25vw,
            176px
          "
          className="object-cover"
        />

        <span
          className="
            absolute bottom-2
            w-[90%] text-center
            bg-[#f6efe4] text-black
            text-[11px] sm:text-xs md:text-sm lg:text-base
            font-semibold rounded-md
            px-2 py-0.5 shadow
          "
        >
          {srv.name}
        </span>
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">
      No services found for {tab === "women" ? "women" : "man"}.
    </p>
  )}
</div>

    </section>
  );
}