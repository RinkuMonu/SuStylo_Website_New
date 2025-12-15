import React from "react";
import Image from "next/image";
import Link from "next/link";
import FreelancerServicesSection from "../../../components/freelancerservices";
import Testimonial from "../../../components/Testimonial";
import WorkGallery from "../../../components/freelancerworkgallery";

function page() {
  return (
    <>
      <section className="bg-[#F6EFE4] flex flex-col md:flex-row  items-center justify-between overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-20 pt-20 lg:mt-14">
          <h1 className="text-4xl md:text-5xl font-serif italic mb-3">
            ALISA MENON
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Nail Artist, Makeup Artist
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum
          </p>


<div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 mt-8">
  {/* Left: Stats */}
  <div className="w-full sm:w-2/3">
   <div
            className="inline-block bg-[#607874] text-white font-serif text-lg px-18 py-2 lg:mb-10"
            style={{
              borderBottomRightRadius: "80px",
            }}
          >
            <Link href="/" className="block text-center">
              Book Now
            </Link>
          </div>
    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-8 text-sm sm:text-base text-gray-700">
      <div className="text-center sm:text-left">
        <p className="font-semibold text-base sm:text-lg">2+ Years</p>
        <p>Experience</p>
      </div>

      <div className="hidden sm:block w-[1px] h-10 bg-gray-500"></div>

      <div className="text-center sm:text-left">
        <p className="font-semibold text-base sm:text-lg">560+</p>
        <p>Services</p>
      </div>

      <div className="hidden sm:block w-[1px] h-10 bg-gray-500"></div>

      <div className="text-center sm:text-left">
        <p className="font-semibold text-base sm:text-lg">330+</p>
        <p>Reviews</p>
      </div>
    </div>
  </div>

  {/* Right: Small Image */}
  <div className="w-full sm:w-1/3 flex justify-center float-end mt-6 sm:mt-0 hidden sm:block">
    <Image
      src="/Image/freelancer/female-img2.png"
      alt="img"
      width={140}
      height={160}
      className="w-34 h-38 sm:w-28 sm:h-32 object-contain"
    />
  </div>
</div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative h-[450px] md:h-[600px]  flex items-center justify-center">
          <div className="absolute top-0 right-0 w-[80%] h-full rounded-l-[50%] hidden md:block"></div>

          <Image
            src="/Image/freelancer/freelancer-female-img.png"
            alt="Artist"
            fill
            className="object-contain"
          />
        </div>

      </section>

      <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14">
       

      </div>
      <WorkGallery />
       <div className="container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14 lg:pb-10">
       <Testimonial heading="Reviews" />

      </div>

    </>
  );
}

export default page;
