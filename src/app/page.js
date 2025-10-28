import { GoSearch } from "react-icons/go";
import Homeservices from "../../components/Homeservices";
import Services from "../../components/ServiceSection";
import ServiceSection from "../../components/ServiceSection";

export default function Home() {
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
              <GoSearch className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 text-[#8B8B8B]" size={18} />
            </div>
            <button className="bg-white p-2 sm:p-4 rounded-xl text-base sm:text-xl font-medium text-[#8B8B8B] hover:bg-[#e9e3d9] transition">
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl">
        <Homeservices />
        <ServiceSection />

      </div>
    </>
  );
}
