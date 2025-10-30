import React from 'react'
import Image from "next/image";
import Link from "next/link";
import FreelancerServicesSection from '../../../components/freelancerservices';
import Testimonial from '../../../components/Testimonial';

function page() {
  return (
    <>
      <section className="bg-[#F6EFE4] flex flex-col md:flex-row  items-center justify-between overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-20 py-16">
          <h1 className="text-4xl md:text-5xl font-serif italic mb-3">
            ALISA MENON
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Nail Artist, Makeup Artist
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            Lorem ipsum
          </p>



          <div className='bg-no-repeat' style={{
            backgroundImage: "url('/Image/freelancer/button-shape.png')",
          }}>
            <Link href="/" className='py-2 px-3 text-white'>Book Now</Link>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 mt-8 text-sm text-gray-700">
            <div>
              <p className="font-semibold">2+ Years</p>
              <p>experience</p>
            </div>
            <div className='w-[1px] h-10 bg-gray-500'></div>
            <div>
              <p className="font-semibold">560+</p>
              <p>services</p>
            </div>
            <div className='w-[1px] h-10 bg-gray-500'></div>
            <div>
              <p className="font-semibold">330+</p>
              <p>Reviews</p>
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
        <div className='absolute bottom-4 left-104'>
          <Image
            src="/Image/freelancer/female-img2.png"
            alt='img'
            width={50}
            height={70}
            className='w-35 h-40' />
        </div>
      </section>

      <div className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14'>
        <FreelancerServicesSection />
        <Testimonial heading="Reviews" />
      </div>
    </>
  )
}

export default page
