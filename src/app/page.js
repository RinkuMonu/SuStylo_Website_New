import { GoSearch } from "react-icons/go";
import Homeservices from "../../components/Homeservices";
import ServiceSection from "../../components/ServiceSection";
import HomeFreelancer from "../../components/HomeFreelancer";
import NearBySalonSection from "../../components/NearBySalonSection";
import PopularSalon from "../../components/PopularSalon";
import DiscountSlider from "../../components/DiscountSlider";
import Testimonial from "../../components/Testimonial";
import HomeAbout from "../../components/HomeAbout";


export default function Home() {
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
        <div className="flex flex-col items-center justify-center relative h-full w-full">
          <h1 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-tight  drop-shadow-lg">
            Glow <br /> Beyond Limits
          </h1>
          <div className="bg-[#CBAA87] p-2 sm:p-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 w-[80%] lg:w-full max-w-md sm:max-w-xl shadow-lg absolute bottom-4 sm:bottom-6">
            <div className="relative flex-1">
              <input
                className="bg-white text-[#8B8B8B] p-2 sm:p-4 rounded-xl w-full text-base sm:text-xl pl-8 sm:pl-10 focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <GoSearch
                className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 text-[#8B8B8B]"
                size={18}
              />
            </div>
            <button className="bg-white p-2 sm:p-4 rounded-xl text-base sm:text-xl font-medium text-[#8B8B8B] hover:bg-[#e9e3d9] transition">
              Search
            </button>
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
