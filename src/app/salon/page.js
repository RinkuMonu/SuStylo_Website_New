import React from "react";

export default function page() {
    return (
        <>
            <section className="flex justify-center items-center py-8 sm:py-16 md:py-20 lg:py-26">
                <div
                    className="bg-center bg-no-repeat bg-contain w-full h-[41vh] sm:h-[70vh] flex justify-between items-center"
                    style={{ backgroundImage: "url(/Salon/salonbanner.png)" }}
                >
                    <div className="w-full md:w-[90%] lg:w-[77%] items-center mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                        {/* Left section */}
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
                                    Classic Contours
                                </h3>
                            </div>
                            <button
                                className=" lg:text-[15px] sm:text-[12px] text-white px-4 sm:px-6 capitalize py-3 sm:py-4 rounded-2xl bg-[#617772]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                Book an Appointment
                            </button>
                        </div>

                        {/* Right section */}
                        <div className="flex flex-row md:flex-col justify-center items-end w-full md:w-auto gap-2 sm:gap-4 mt-8 md:mt-0">
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    1000+ <br /> Satisfied Customer
                                </p>
                            </div>
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    1000+ <br /> Satisfied Customer
                                </p>
                            </div>
                            <div
                                className="bg-[#617772] p-3 sm:p-4 rounded-2xl text-white text-center min-w-[100px]"
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <p className="text-[15px] sm:text-[17px] md:text-[20px]">
                                    1000+ <br /> Satisfied Customer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
