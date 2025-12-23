import React from 'react'

export default function HomeAbout() {
    return (
        <>
           <section
  id="about-section"
  className="
    min-h-screen mt-10
    flex items-center justify-center
    bg-no-repeat bg-cover bg-center
    px-4 sm:px-6 md:px-10
    bg-none sm:bg-[url('/Home/HAbout.png')]
  "
>
  <div
    className="
      w-full sm:w-[80%] md:w-[60%] lg:w-[36%]
      text-left
    "
  >
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      About Us
    </h3>

    <p className="
      text-sm sm:text-base md:text-lg
      leading-6 sm:leading-8 md:leading-10
      font-normal text-gray-800
    ">
      Sustylo is a platform that connects users with nearby salons and professional freelancers for beauty and grooming services.
      Our goal is to make booking easy, transparent, and hassle-free.
      Whether you want to visit a salon or prefer home service, you can explore prices, check availability, compare options,
      and book instantly.
      We work with trusted salons and skilled freelancers to ensure you always get a smooth, reliable, and comfortable experience.
    </p>
  </div>
</section>


        </>
    )
}
