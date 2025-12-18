"use client";
import React, { useState, useEffect } from "react";
import TopStylish from "../../../../components/TopStylish";
import Image from "next/image";
import SalonServicesSection from "../../../../components/salonservies";
import Testimonial from "../../../../components/Testimonial";
import axiosInstance from "../../axios/axiosinstance";

function ClientPage({ id }) {
  const [salonData, setSalonData] = useState(null);
  const [staffData, setStaffData] = useState(null);
  const [serviceData, setServiceData] = useState({
    female: [],
    male: [],
  });

  useEffect(() => {
    if (!id) return;

    const fetchSalonData = async () => {
      try {
        const response = await axiosInstance.get(`/salons/${id}`);

        setSalonData(response.data.salon);
        setStaffData(response.data.salon.staff);

        const services = response.data.salon.services;

        setServiceData({
          female: services?.female || [],
          male: services?.male || [],
        });
      } catch (error) {
        console.error("Error fetching salon data:", error);
      }
    };

    fetchSalonData();
  }, [id]);

  // 🔥 Loading state
  if (!salonData) {
    return (
      <div className="text-center p-10 text-xl">
        Loading Salon Details...
      </div>
    );
  }

  const {
    salonName,
    description,
    address,
    rating,
    contact,
    photos,
  } = salonData;

  const bannerImageUrl =
    photos && photos.length > 0
      ? photos[0]
      : "/Salon/salonbanner.png";

  return (
    <>
      {/* 🔥 HERO / BANNER SECTION (NO DATA LOSS) */}
      <section className="flex justify-center items-center pt-8 sm:pt-16 md:pt-20 lg:pt-26">
        <div
          className="bg-center bg-cover bg-no-repeat w-full h-[41vh] sm:h-[70vh] flex justify-between items-center"
          style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >
          <div className="w-full md:w-[90%] lg:w-[77%] mx-auto flex flex-col md:flex-row justify-between gap-8">
            {/* LEFT */}
            <div>
              <div className="mb-5">
                <h3
                  className="text-[34px] sm:text-[42px] md:text-[54px] lg:text-[62px] mb-4 md:bg-[#F6EFE4] rounded-2xl px-4 w-[300px]"
                  style={{
                    textShadow:
                      "rgba(0,0,0,0.1) -10px 6px 3px",
                  }}
                >
                  {salonName}
                </h3>

                <p className="text-white text-lg bg-[#617772] p-2 rounded-lg max-w-xs">
                  {description}
                </p>
              </div>

              <button className="text-white px-6 py-4 rounded-2xl bg-[#617772]">
                Book an Appointment
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex md:flex-col gap-4 items-end">
              <div className="bg-[#617772] p-4 rounded-2xl text-white text-center">
                <p>
                  {rating?.average?.toFixed(1)} / 5 <br />
                  ({rating?.count} Reviews)
                </p>
              </div>

              <div className="bg-[#617772] p-4 rounded-2xl text-white text-center">
                <p>
                  {address?.city} <br /> {address?.area}
                </p>
              </div>

              <div className="bg-[#617772] p-4 rounded-2xl text-white text-center">
                <p>
                  Contact <br /> {contact?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 TOP STYLIST */}
      <div className="container mx-auto max-w-7xl px-4">
        <TopStylish staffData={staffData} />
      </div>

      {/* 🔥 OFFER SECTION */}
      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-5 mx-auto">
          <div
            className="col-span-7 ml-28 bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/Salon/offerimage.png)" }}
          >
            <div className="flex flex-col justify-center items-center h-40">
              <h3 className="text-[24px] text-white">
                Flowless makeup <i className="text-[36px]">25% OFF</i>
              </h3>
              <p className="text-[11px] text-white">
                Evening bridal or day time looks
              </p>
            </div>
          </div>

          <div
            className="col-span-5 h-72 bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/Salon/sideoffer.png)" }}
          />
        </div>
      </section>

      {/* 🔥 SERVICES + REVIEWS */}
      <div className="container mx-auto max-w-7xl px-4">
        <SalonServicesSection
          serviceData={serviceData}
          salon_id={id}
        />
        <Testimonial />
      </div>
    </>
  );
}

export default ClientPage;
