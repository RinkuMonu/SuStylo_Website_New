"use client"; 

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import TopStylish from "../../../../components/TopStylish";
import Image from "next/image";
import SalonServicesSection from "../../../../components/salonservies"
import Testimonial from "../../../../components/Testimonial";
import axiosInstance from "../../axios/axiosinstance";

export default function SalonDetailPage() {
    const [salonData, setSalonData] = useState(null);
    const [staffData, setStaffData] = useState(null);
    const [serviceData, setServiceData] = useState({
        'female':[],
        'male':[]
    });

    const params = useParams();
    const id = params.id; 
    // --- Data Fetching Logic ---
    useEffect(() => {
        if (!id) return;
        const fetchSalonData = async () => {
            try {
                // API Call
                const response = await axiosInstance.get(`/salons/${id}`);
                setSalonData(response.data.salon); 
                setStaffData(response.data.salon.staff);
                const services = response.data.salon.services;
                const femaleServices = services.female;
                const maleServices = services.male;

                setServiceData({
                    'female': femaleServices,
                    'male': maleServices
                });
            } catch (error) {
                console.error("Error fetching salon data:", error);
                // Optionally set an error state here
            }
        };
        fetchSalonData();
    }, [id]);

    // ----------------------------
    // 1. Loading State
    if (!salonData) {
        return <div className="text-center p-10 text-xl">Loading Salon Details...</div>;
    }

    // 2. Destructure Data for easier use
    const { 
        salonName, 
        description, 
        address, 
        rating, 
        contact, 
        photos 
    } = salonData;

    // Default Banner Image (Use first photo if available, otherwise fallback)
    const bannerImageUrl = photos && photos.length > 0 ? photos[0] : "/Salon/salonbanner.png";

    // --- Component JSX ---
    return (
        <>
            <section className="flex justify-center items-center pt-8 sm:pt-16 md:pt-20 lg:pt-26">
                <div
                    // Dynamic Banner Image Set Karenge
                    className="bg-center bg-cover bg-no-repeat w-full h-[41vh] sm:h-[70vh] flex justify-between items-center"
                    style={{ backgroundImage: `url(${bannerImageUrl})` }}
                >
                    <div className="w-full md:w-[90%] lg:w-[77%] items-center mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                        {/* Left section (Salon Name & Description) */}
                        <div>
                            <div className="mb-5">
                                <h3
                                    className="text-[34px] sm:text-[42px] md:text-[54px] lg:text-[62px] mb-4 sm:bg-transparent md:bg-[#F6EFE4] rounded-2xl px-4 max-w-full w-[300px]"
                                    style={{
                                        textShadow: "rgba(0, 0, 0, 0.1) -10px 6px 3px",
                                        lineHeight: "120%",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {/* Salon Name Dynamic */}
                                    {salonName || "Classic Contours"} 
                                </h3>
                                {/* Salon Description (Optional) */}
                                <p className="text-white text-lg bg-[#617772] p-2 rounded-lg max-w-xs">
                                    {description}
                                </p>
                            </div>
                            <button
                                className=" lg:text-[15px] sm:text-[12px] text-white px-4 sm:px-6 capitalize py-3 sm:py-4 rounded-2xl bg-[#617772]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                Book an Appointment
                            </button>
                        </div>
                
                        {/* Right section (Rating & Contact/Address) */}
                        <div className="flex flex-row md:flex-col justify-center items-end w-full md:w-auto gap-2 sm:gap-4 mt-8 md:mt-0">
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    {/* Rating Dynamic */}
                                    {rating.average.toFixed(1)} / 5 <br /> ({rating.count} Reviews)
                                </p>
                            </div>
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    {/* Address Dynamic */}
                                    {address.city} <br /> {address.area}
                                </p>
                            </div>
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    {/* Phone Dynamic */}
                                    Contact <br /> {contact.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Other Sections (Keep as is for now) */}
            <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
                <TopStylish staffData={staffData} />
            </div>
            
            <section className='mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-5 my-5 mx-auto '>
                    {/* Offer Section can also use dynamic data if available */}
                    <div className='col-span-7 ml-28 bg-no-repeat bg-contain w-auto h-auto' style={{ backgroundImage: "url(/Salon/offerimage.png)" }}>
                        <div className="flex flex-col justify-center items-center h-40">
                            <h3 className="text-[24px] text-white">Flowless makeup <i className="text-[36px]">25% OFF</i></h3>
                            <p className="text-[11px] text-white">Evening bridal or day time looks for everyoccasion</p>
                        </div>
                    </div>
                    <div className='col-span-5 h-72 bg-no-repeat bg-contain' style={{ backgroundImage: "url(/Salon/sideoffer.png)" }}>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
                <SalonServicesSection serviceData={serviceData}/>
                <Testimonial />
            </div>
        </>
    );
}