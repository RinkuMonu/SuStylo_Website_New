"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "../../axios/axiosinstance"; // मान लीजिए आपके पास एक axiosInstance है
import Image from "next/image";
import Link from "next/link";
import FreelancerServicesSection from "../../../../components/freelancerservices";
import Testimonial from "../../../../components/Testimonial";
import WorkGallery from "../../../../components/freelancerworkgallery";

function Page() {
    // 1. useState variables updated for freelancer data
    const [freelancerData, setFreelancerData] = useState(null);
    const [employeeData, setEmployeeData] = useState(null); // 'staffData' renamed to 'employeeData'
    const [serviceData, setServiceData] = useState({
        'female': [],
        'male': []
    });
    console.log("employeeData Data State:", employeeData);
    console.log("serviceData Data State:", serviceData);

    const params = useParams();
    const id = params.id; 

    // --- Data Fetching Logic ---
    useEffect(() => {
        if (!id) return;
        const fetchFreelancerData = async () => {
            try {
                const response = await axiosInstance.get(`/freelancer/${id}`);
                console.log("Freelancer Data Response:", response.data.freelancer); // Debugging line
                const freelancer = response.data.freelancer; 
                setFreelancerData(freelancer); 
                setEmployeeData(freelancer.employees); 
                const services = freelancer.services;
                const femaleServices = services?.female || {};
                const maleServices = services?.male || {};
                let totalServices = 0;
                const countServices = (genderServices) => {
                    let count = 0;
                    for (const categoryKey in genderServices) {
                        if (genderServices[categoryKey].services && Array.isArray(genderServices[categoryKey].services)) {
                            count += genderServices[categoryKey].services.length;
                        }
                    }
                    return count;
                };

                const femaleServiceCount = countServices(femaleServices);
                const maleServiceCount = countServices(maleServices);
                totalServices = femaleServiceCount + maleServiceCount;

                setServiceData({
                    'female': femaleServices,
                    'male': maleServices,
                    'totalCount': totalServices // Added total count for stats
                });
            } catch (error) {
                console.error("Error fetching freelancer data:", error);
                // Optionally set an error state here
            }
        };
        fetchFreelancerData();
    }, [id]);

    // 1. Loading State
    if (!freelancerData) {
        return <div className="text-center p-10 text-xl">Loading Freelancer Details...</div>;
    }

    // Dynamic Data Extraction
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
                <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-20 pt-20 lg:mt-14">
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

                        {/* Right: Small Image */}
                        <div className="w-full sm:w-1/3 flex justify-center float-end mt-6 sm:mt-0 hidden sm:block">
                            <Image
                                src={smallImageUrl}
                                alt="Small img"
                                width={140}
                                height={160}
                                className="w-34 h-38 sm:w-28 sm:h-32 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 relative h-[450px] md:h-[600px] flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-[80%] h-full rounded-l-[50%] hidden md:block"></div>
                    <Image
                        src={mainImageUrl}
                        alt={fullName}
                        fill
                        className="object-cover md:object-contain rounded-l-full"
                    />
                </div>
            </section>

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

export default Page;