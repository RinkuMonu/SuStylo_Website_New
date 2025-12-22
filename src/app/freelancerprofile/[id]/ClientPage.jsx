"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosinstance";
import Image from "next/image";
import Link from "next/link";
import FreelancerServicesSection from "../../../../components/freelancerservices";
import Testimonial from "../../../../components/Testimonial";
import WorkGallery from "../../../../components/freelancerworkgallery";

function ClientPage({ id }) {
  const [freelancerData, setFreelancerData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [serviceData, setServiceData] = useState({
    female: [],
    male: [],
    totalCount: 0,
  });

  useEffect(() => {
    if (!id) return;

    const fetchFreelancerData = async () => {
      const res = await axiosInstance.get(`/freelancer/${id}`);
      const freelancer = res.data.freelancer;

      setFreelancerData(freelancer);
      setEmployeeData(freelancer.employees);

      const female = freelancer.services?.female || {};
      const male = freelancer.services?.male || {};

      const countServices = (obj) =>
        Object.values(obj).reduce(
          (acc, item) => acc + (item.services?.length || 0),
          0
        );

      setServiceData({
        female,
        male,
        totalCount: countServices(female) + countServices(male),
      });
    };

    fetchFreelancerData();
  }, [id]);
   if (!freelancerData) {
    return <div className="text-center p-10">Loading...</div>;
  }
  const { 
        fullName, 
        experience, 
        rating, 
        photos 
    } = freelancerData;


 
const profession = "Haircut Specialist"; 
    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum"; // Placeholder
    
    // Default image if no photos are available
    const mainImageUrl = photos?.[0] || "/Image/freelancer/freelancer-female-img.png";
    const smallImageUrl = "/Image/freelancer/female-img2.png"; // Kept static as no specific small image provided


  return (
    <>
    <section className="bg-[#F6EFE4] flex flex-col md:flex-row items-center justify-between overflow-hidden">
                {/* Left Content */}
                <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-16 pt-10 mt-10 lg:mt-14">
                    <h1 className="text-4xl md:text-5xl font-serif italic mb-3">
                        {fullName} {/* Dynamic Name */}
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                        {profession} {/* Dynamic Profession (Using Placeholder) */}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
                        {bio} {/* Dynamic Bio (Using Placeholder) */}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 mt-8">
                        {/* Left: Book Now & Stats */}
                        <div className="w-full sm:w-2/3">
                            <div
                                className="inline-block bg-[#607874] text-white font-serif text-lg px-18 py-2 mb-4 lg:mb-10"
                                style={{
                                    borderBottomRightRadius: "80px",
                                }}
                            >
                                <Link href="/" className="block text-center px-10">
                                    Book Now
                                </Link>
                            </div>
                            {/* Stats Section with Dynamic Data */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-8 text-sm sm:text-base text-gray-700">
                                <div className="text-center sm:text-left">
                                    <p className="font-semibold text-base sm:text-lg">{experience}+ Years</p>
                                    <p>Experience</p>
                                </div>

                                <div className="hidden sm:block w-[1px] h-10 bg-gray-500"></div>

                                <div className="text-center sm:text-left">
                                    <p className="font-semibold text-base sm:text-lg">{serviceData.totalCount || 0}+</p>
                                    <p>Services</p>
                                </div>

                                <div className="hidden sm:block w-[1px] h-10 bg-gray-500"></div>

                                <div className="text-center sm:text-left">
                                    <p className="font-semibold text-base sm:text-lg">{rating.count}+</p>
                                    <p>Reviews</p>
                                </div>
                            </div>
                        </div>

                     
                        {/* <div className="w-full sm:w-1/3 flex justify-center float-end mt-6 sm:mt-0 hidden sm:block">
                            <Image
                                src={smallImageUrl}
                                alt="Small img"
                                width={140}
                                height={160}
                                className="w-34 h-38 sm:w-28 sm:h-32 object-contain"
                            />
                        </div> */}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 relative h-[450px] md:h-[560px] flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-[80%] h-full rounded-l-[50%] hidden md:block"></div>
                    <Image
                        src={mainImageUrl}
                        alt={fullName}
                        fill
                        className="object-cover md:object-contain rounded-l-full"
                    />
                </div>
            </section>

      {/* tera pura UI same rahega */}
     <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
                {/* Passing serviceData to FreelancerServicesSection */}
                <FreelancerServicesSection serviceData={serviceData} freelancer_id={id}/>
            </div>
            
            <WorkGallery />

            <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 lg:pb-10">
                {/* Assuming Testimonial component can handle reviews dynamically */}
                <Testimonial heading="Reviews" />
            </div>

    </>
  );
}

export default ClientPage;
